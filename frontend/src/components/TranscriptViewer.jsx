import React from 'react';

const TranscriptViewer = ({ transcript }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mt-4 text-sm">
      <h3 className="font-medium mb-1 text-gray-700">Live Transcript:</h3>
      <p className="text-gray-800">{transcript || 'Start speaking or typing to see the transcript...'}</p>
    </div>
  );
};

export default TranscriptViewer;
