// utils/scoring.js
function getScoreFromAnalysis(analysisText) {
    /*
      Basic heuristic: Look for score in analysis OR apply sentiment logic.
      You can later use better logic or ask Groq to include score directly.
    */
    const match = analysisText.match(/score\s*[:\-]?\s*(\d{1,2})/i);
    if (match) {
      const rawScore = parseInt(match[1], 10);
      return Math.max(0, Math.min(10, rawScore)); // Clamp to 0-10
    }
  
    // Fallback: basic keyword-based scoring
    const lower = analysisText.toLowerCase();
    if (lower.includes("excellent") || lower.includes("very good")) return 9;
    if (lower.includes("good") || lower.includes("strong")) return 7;
    if (lower.includes("average") || lower.includes("okay")) return 5;
    if (lower.includes("poor") || lower.includes("weak")) return 3;
    return 1;
  }
  
  // utils/scoring.js

function getScoreFromAnalysis(analysisText) {
    const match = analysisText.match(/score\s*[:\-]?\s*(\d{1,2})/i);
    if (match) {
      const rawScore = parseInt(match[1], 10);
      return Math.max(0, Math.min(10, rawScore));
    }
  
    const lower = analysisText.toLowerCase();
    if (lower.includes("excellent") || lower.includes("very good")) return 9;
    if (lower.includes("good") || lower.includes("strong")) return 7;
    if (lower.includes("average") || lower.includes("okay")) return 5;
    if (lower.includes("poor") || lower.includes("weak")) return 3;
    return 1;
  }
  
  function getGrade(averageScore) {
    if (averageScore >= 9) return 'Excellent';
    if (averageScore >= 7) return 'Very Good';
    if (averageScore >= 5) return 'Good';
    return 'Needs Improvement';
  }
  
  module.exports = { getScoreFromAnalysis, getGrade };
  