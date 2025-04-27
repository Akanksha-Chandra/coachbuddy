import React from 'react';

const ScoreBoard = ({ analysis }) => {
  return (
    <div className="bg-white border p-4 rounded-md mt-4 shadow-sm">
      <h3 className="text-md font-bold text-gray-800 mb-2">Analysis</h3>
      {analysis ? (
        <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
          <li><strong>Keywords:</strong> {analysis.keywords?.join(', ')}</li>
          <li><strong>Tone:</strong> {analysis.tone}</li>
          <li><strong>Clarity:</strong> {analysis.clarity}</li>
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No analysis available yet.</p>
      )}
    </div>
  );
};

export default ScoreBoard;
