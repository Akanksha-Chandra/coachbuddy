import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/interview',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Start interview session
export const startInterview = (role) => API.post('/start-interview', { role });

// Get next question
export const getNextQuestion = (sessionId, answer) =>
  API.post('/next-question', { sessionId, answer });

// Analyze candidate response (FIXED ✅)
export const analyzeResponse = (sessionId, userResponse) =>
  API.post('/analyze-response', { sessionId, userResponse });

// Get full session report
export const getReport = (sessionId) =>
  API.get(`/get-report/${sessionId}`);

