const axios = require('axios');

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODELS = ["llama3-8b-8192", "mixtral-8x7b-32768", "llama3-70b-8192"]; // fallback models in order

const HEADERS = {
  Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  'Content-Type': 'application/json',
};

// 🔁 Helper to retry with fallback models
const tryGroqRequest = async (prompt) => {
  for (let model of MODELS) {
    try {
      console.log(`📤 Trying model: ${model}`);
      const response = await axios.post(
        GROQ_API_URL,
        {
          model,
          messages: [{ role: "user", content: prompt }],
        },
        { headers: HEADERS }
      );
      return response.data.choices[0].message.content.trim();
    } catch (err) {
      console.error(`❌ Model ${model} failed:`, err.response?.data || err.message);
    }
  }
  throw new Error("All Groq models failed. Please try again later.");
};

// 🚀 Get Interview Prompt
const getInterviewPrompt = async (role) => {
  const prompt = `Ask a behavioral interview question for the role of a ${role}.`;
  return await tryGroqRequest(prompt);
};

// 🔄 Get follow-up question using fallback model system
const getFollowUpQuestion = async (role, lastAnswer) => {
  const prompt = `Given this last answer: "${lastAnswer}", ask a follow-up behavioral interview question for a ${role} role.`;
  return await tryGroqRequest(prompt);
};

// 📊 Analyze Interview Answer
const analyzeWithGroq = async (answer) => {
  const prompt = `Evaluate the following interview answer: "${answer}". Provide strengths, weaknesses, and a score out of 10.`;
  return await tryGroqRequest(prompt);
};

// 😐 Tone & Sentiment Analysis
const getToneAnalysis = async (text) => {
  const prompt = `Analyze the sentiment and tone of this response: "${text}".`;
  return await tryGroqRequest(prompt);
};

module.exports = {
  getInterviewPrompt,
  getFollowUpQuestion,
  analyzeWithGroq,
  getToneAnalysis
};
