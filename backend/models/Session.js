const mongoose = require('mongoose');

// Response schema
const responseSchema = new mongoose.Schema({
  userResponse: String,
  analysis: String,
  emotion: String,
  score: Number
});

// Interview session schema
const sessionSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  questions: [String],
  responses: [responseSchema],
  currentQuestionIndex: {
    type: Number,
    default: 0,
  },
  isAborted: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }
});

// Method to calculate total score and average score
sessionSchema.methods.calculateScores = function() {
  const scores = this.responses.map(r => r.score || 0);
  const totalScore = scores.reduce((sum, val) => sum + val, 0);
  const averageScore = scores.length > 0 ? (totalScore / scores.length) : 0;
  return { totalScore, averageScore };
};

// Interview session model
module.exports = mongoose.model('Session', sessionSchema);
