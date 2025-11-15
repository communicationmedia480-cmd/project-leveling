
import React from 'react';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <div
        className={`${color} h-2.5 rounded-full transition-all duration-500 ease-out`}
        style={progressStyle}
      ></div>
    </div>
  );
};

export default ProgressBar;
