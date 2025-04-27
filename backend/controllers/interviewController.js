const {
  getInterviewPrompt,
  analyzeWithGroq,
  getToneAnalysis,
  getFollowUpQuestion,
} = require('../services/groqService');

const Session = require('../models/Session');

const MAX_QUESTIONS = 10;

// 🎯 Start interview with role-based first question
const startInterview = async (req, res) => {
  const { role = "Software Engineer" } = req.body;

  try {
    // Check if role is valid
    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }

    const prompt = await getInterviewPrompt(role);
    if (!prompt) {
      return res.status(500).json({ error: 'Failed to fetch prompt' });
    }

    const session = await Session.create({ role, questions: [prompt], responses: [] });
    console.log("✅ New session created:", session);

    res.status(200).json({ sessionId: session._id, question: prompt });
  } catch (error) {
    console.error("❌ Error in startInterview:", error);
    res.status(500).json({ error: 'Failed to start interview', details: error.message });
  }
};

// 🔄 Get next follow-up question based on last answer
const getNextQuestion = async (req, res) => {
  const { sessionId } = req.body;

  try {
    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    if (session.questions.length >= MAX_QUESTIONS) {
      return res.status(200).json({
        done: true,
        message: "✅ Interview completed. You can now fetch the report.",
      });
    }

    const lastResponse = session.responses.at(-1)?.userResponse || "";
    const nextPrompt = await getFollowUpQuestion(session.role, lastResponse);

    session.questions.push(nextPrompt);
    await session.save();

    res.status(200).json({ done: false, question: nextPrompt });
  } catch (err) {
    console.error("❌ Error in getNextQuestion:", err);
    res.status(500).json({ error: 'Failed to generate next question' });
  }
};

// 🧠 Analyze a single user response
const analyzeResponse = async (req, res) => {
  const { sessionId, userResponse } = req.body;

  try {
    if (!sessionId || !userResponse) {
      return res.status(400).json({ error: 'Missing sessionId or userResponse' });
    }

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const analysis = await analyzeWithGroq(userResponse);
    const emotion = await getToneAnalysis(userResponse);
    const score = getScoreFromAnalysis(analysis); // Calculate score based on analysis

    // Log the data to ensure it's being processed correctly
    console.log('Analysis:', analysis);
    console.log('Emotion:', emotion);
    console.log('Score:', score);

    // Store analysis in session responses
    session.responses.push({ userResponse, analysis, emotion, score });
    await session.save();

    res.status(200).json({ analysis, emotion, score });
  } catch (error) {
    console.error("❌ Error in analyzeResponse:", error);
    res.status(500).json({ error: 'Analysis failed', details: error.message });
  }
};

// 📊 Get final report of the interview
// 📊 Get final report of the interview
const getReport = async (req, res) => {
  const { sessionId } = req.params;

  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    if (session.responses.length === 0) {
      return res.status(200).json({
        message: "No responses found. Please complete the interview before fetching the report."
      });
    }

    // Calculate scores
    const scores = session.responses.map(r => r.score || 0);
    const totalScore = scores.reduce((sum, val) => sum + val, 0);
    const averageScore = scores.length > 0 ? (totalScore / scores.length) : 0;

    const grade = getGrade(averageScore);

    // 🌟 Build a smart feedback summary from existing analysis texts
    const feedbackParts = session.responses.map((r, idx) => {
      const analysisText = r.analysis?.feedback?.trim() || "No feedback provided.";
      return `Q${idx + 1}: ${analysisText}`;
    });
    const feedbackSummary = feedbackParts.join('\n\n');

    // 🛠️ Send full report
    res.status(200).json({
      sessionId: session._id,
      role: session.role,
      totalQuestionsAnswered: session.responses.length,
      totalQuestions: session.questions.length,
      totalScore,
      averageScore: averageScore.toFixed(2),
      grade,
      feedbackSummary: feedbackSummary || 'No feedback available',
      questions: session.questions,
      responses: session.responses,
    });
  } catch (error) {
    console.error("❌ Error in getReport:", error);
    res.status(500).json({ error: 'Failed to fetch report', details: error.message });
  }
};



module.exports = {
  startInterview,
  getNextQuestion,
  analyzeResponse,
  getReport,
};
