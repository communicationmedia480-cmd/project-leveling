import React from 'react';
import { Rank } from '../types';

interface RankDisplayProps {
  rank: Rank;
  subLevel?: number;
}

const RankDisplay: React.FC<RankDisplayProps> = ({ rank, subLevel }) => {
  const displayImageUrl = (rank.imageUrls && subLevel && rank.imageUrls[subLevel - 1]) 
    ? rank.imageUrls[subLevel - 1] 
    : rank.imageUrl;

  return (
    <div className="flex items-center gap-3">
      <img 
        src={displayImageUrl} 
        alt={`${rank.name} rank icon`}
        className="w-10 h-10 object-contain" 
        aria-hidden="true"
      />
      <div>
        <p className={`font-bold text-lg leading-tight ${rank.color}`}>
          {rank.name}{subLevel !== undefined ? ` ${subLevel}` : ''}
        </p>
      </div>
    </div>
  );
};

export default RankDisplay;
