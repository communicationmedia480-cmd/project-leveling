import { Rank } from '../types';
import { RANKS, XP_PER_SUBLEVEL, SUBLEVELS_PER_RANK, MAX_XP, THE_GOD_RANK } from '../constants';

export interface RankInfo {
  rank: Rank;
  subLevel?: number;
  progressToNextSublevel: number;
  isMaxLevel: boolean;
  xpForNextSublevel: number;
  currentLevelXp: number;
}

/**
 * Calculates a student's rank information based on their total XP.
 * This function is robust against invalid XP values (null, undefined, non-numeric).
 * @param totalXp The student's total experience points.
 * @returns An object containing detailed rank information.
 */
export const getRankInfo = (totalXp: number | null | undefined): RankInfo => {
  // Robustly handle invalid XP values, defaulting to 0. This prevents crashes.
  const xp = Number(totalXp) || 0;

  if (xp >= MAX_XP) {
    return {
      rank: THE_GOD_RANK,
      subLevel: undefined,
      progressToNextSublevel: 100,
      isMaxLevel: true,
      xpForNextSublevel: 0,
      currentLevelXp: MAX_XP,
    };
  }

  const totalSublevels = Math.floor(xp / XP_PER_SUBLEVEL);
  const rankIndex = Math.min(Math.floor(totalSublevels / SUBLEVELS_PER_RANK), RANKS.length - 1);
  
  // Ensure rank is always valid, defaulting to the first rank if calculation fails.
  const rank = RANKS[rankIndex] || RANKS[0]; 
  
  const subLevel = (totalSublevels % SUBLEVELS_PER_RANK) + 1;

  const currentSublevelBaseXp = totalSublevels * XP_PER_SUBLEVEL;
  const xpIntoCurrentSublevel = xp - currentSublevelBaseXp;
  const progressToNextSublevel = (xpIntoCurrentSublevel / XP_PER_SUBLEVEL) * 100;

  return {
    rank,
    subLevel,
    progressToNextSublevel,
    xpForNextSublevel: XP_PER_SUBLEVEL,
    currentLevelXp: xpIntoCurrentSublevel,
    isMaxLevel: false,
  };
};
