const express = require('express');
const router = express.Router();

// Controller functions
const {
  startInterview,
  getNextQuestion,
  analyzeResponse,
  getReport,
} = require('../controllers/interviewController');

// 🎯 Start a new interview session
router.post('/start-interview', startInterview);

router.post('/next-question', getNextQuestion);

// 🧪 Analyze a candidate's response
router.post('/analyze-response', analyzeResponse);

// 📊 Get final session report
router.get('/get-report/:sessionId', getReport);

module.exports = router;
