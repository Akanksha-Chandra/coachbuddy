import React from 'react';

const FeedbackPanel = ({ feedback }) => {
  return (
    <div className="bg-white border p-4 rounded-md mt-4 shadow-sm">
      <h3 className="text-md font-bold text-gray-800 mb-2">Feedback</h3>
      {feedback ? (
        <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
          <li><strong>Strengths:</strong> {feedback.strengths}</li>
          <li><strong>Weaknesses:</strong> {feedback.weaknesses}</li>
          <li><strong>Score:</strong> {feedback.score}/10</li>
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No feedback yet. Submit an answer to receive feedback.</p>
      )}
    </div>
  );
};

export default FeedbackPanel;
