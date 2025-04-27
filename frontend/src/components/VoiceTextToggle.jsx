import React from 'react';

const VoiceTextToggle = ({ isVoiceMode, toggleMode }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className={`text-sm ${!isVoiceMode ? 'font-semibold' : 'text-gray-500'}`}>Text</span>
      <label className="switch">
        <input type="checkbox" checked={isVoiceMode} onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
      <span className={`text-sm ${isVoiceMode ? 'font-semibold' : 'text-gray-500'}`}>Voice</span>
    </div>
  );
};

export default VoiceTextToggle;
