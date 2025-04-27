import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md border">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Question:</h2>
      <p className="text-gray-700">{question}</p>
    </div>
  );
};

export default QuestionCard;
