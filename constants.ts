import { Rank } from './types';

// SVG images are encoded as Base64 data URIs for portability and performance.
export const RANKS: Rank[] = [
  { 
    name: 'Iron', 
    color: 'text-gray-400', 
    bgColor: 'bg-gray-700', 
    borderColor: 'border-gray-600',
    progressGradient: 'from-gray-500 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTBiYWM2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgM2wzLjA5IDYuMjYgNi45MSAxIDAgMCAwTDE3IDExLjVsMS41NCA2Ljc5LTYuMjEtMy4yNy02LjIyIDMuMjcgMS41NC02Ljc5TDIgMTAuMjZsNi45MS0xTDkgMy4yNnoiLz48L3N2Zz4=',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/3624-valorant-iron-1.png',
      'https://cdn3.emoji.gg/emojis/7351-valorant-iron-2.png',
      'https://cdn3.emoji.gg/emojis/1854-valorant-iron-3.png'
    ]
  },
  { 
    name: 'Bronze', 
    color: 'text-orange-400', 
    bgColor: 'bg-orange-900', 
    borderColor: 'border-orange-700',
    progressGradient: 'from-orange-500 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzc1NjE2IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgM2wzLjA5IDYuMjYgNi45MSAxIDAgMCAwTDE3IDExLjVsMS41NCA2Ljc5LTYuMjEtMy4yNy02LjIyIDMuMjcgMS41NC02Ljc5TDIgMTAuMjZsNi45MS0xTDkgMy4yNnoiLz48L3N2Zz4=',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/4159-valorant-bronze-1.png',
      'https://cdn3.emoji.gg/emojis/4376-valorant-bronze-2.png',
      'https://cdn3.emoji.gg/emojis/4590-valorant-bronze-3.png'
    ]
  },
  { 
    name: 'Silver', 
    color: 'text-slate-300', 
    bgColor: 'bg-slate-600', 
    borderColor: 'border-slate-500',
    progressGradient: 'from-slate-400 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzRjYWM0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgM2wzLjA5IDYuMjYgNi45MSAxIDAgMCAwTDE3IDExLjVsMS41NCA2Ljc5LTYuMjEtMy4yNy02LjIyIDMuMjcgMS41NC02Ljc5TDIgMTAuMjZsNi45MS0xTDkgMy4yNnoiLz48L3N2Zz4=',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/6335-valorant-silver-1.png',
      'https://cdn3.emoji.gg/emojis/8138-valorant-silver-2.png',
      'https://cdn3.emoji.gg/emojis/3293-valorant-silver-3.png'
    ]
  },
  { 
    name: 'Gold', 
    color: 'text-yellow-400', 
    bgColor: 'bg-yellow-800', 
    borderColor: 'border-yellow-600',
    progressGradient: 'from-yellow-500 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjhiYzAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgM2wzLjA5IDYuMjYgNi45MSAxIDAgMCAwTDE3IDExLjVsMS41NCA2Ljc5LTYuMjEtMy4yNy02LjIyIDMuMjcgMS41NC02Ljc5TDIgMTAuMjZsNi45MS0xTDkgMy4yNnoiLz48L3N2Zz4=',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/5533-valorant-gold-1.png',
      'https://cdn3.emoji.gg/emojis/2060-valorant-gold-2.png',
      'https://cdn3.emoji.gg/emojis/3293-valorant-gold-3.png'
    ]
  },
  { 
    name: 'Platinum', 
    color: 'text-teal-300', 
    bgColor: 'bg-teal-700', 
    borderColor: 'border-teal-600',
    progressGradient: 'from-teal-400 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGRkM2M3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgM2wzLjA5IDYuMjYgNi45MSAxIDAgMCAwTDE3IDExLjVsMS41NCA2Ljc5LTYuMjEtMy4yNy02LjIyIDMuMjcgMS41NC02Ljc5TDIgMTAuMjZsNi45MS0xTDkgMy4yNnoiLz48L3N2Zz4=',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/4590-valorant-platinum-1.png',
      'https://cdn3.emoji.gg/emojis/3255-valorant-platinum-2.png',
      'https://cdn3.emoji.gg/emojis/5816-valorant-platinum-3.png'
    ]
  },
  { 
    name: 'Diamond', 
    color: 'text-blue-300', 
    bgColor: 'bg-blue-800', 
    borderColor: 'border-blue-600',
    progressGradient: 'from-blue-400 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTBiZGY4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiA5bDYtNiA2IDYtNiA2LTYtNnoiLz48cGF0aCBkPSJNNiAxNWw2IDYgNi02Ii8+PHBhdGggZD0iTTYgOWw2IDYgNi02Ii8+PC9zdmc+',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/4590-valorant-diamond-1.png',
      'https://cdn3.emoji.gg/emojis/3939-valorant-diamond-2.png',
      'https://cdn3.emoji.gg/emojis/6354-valorant-diamond-3.png'
    ]
  },
  { 
    name: 'Ascendant', 
    color: 'text-green-300', 
    bgColor: 'bg-green-800', 
    borderColor: 'border-green-600',
    progressGradient: 'from-green-400 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNmdkMzk4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggMTVsLTYtNi02IDYiLz48cGF0aCBkPSJNMTggOWwtNi02LTYgNiIvPjwvc3ZnPg==',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/4590-valorant-ascendant-1.png',
      'https://cdn3.emoji.gg/emojis/8376-valorant-ascendant-2.png',
      'https://cdn3.emoji.gg/emojis/2309-valorant-ascendant-3.png'
    ]
  },
  { 
    name: 'Immortal', 
    color: 'text-red-400', 
    bgColor: 'bg-red-900', 
    borderColor: 'border-red-700',
    progressGradient: 'from-red-500 to-purple-500',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjliM2I0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMiA4bDkuOTcgMy45OUEyIDIgMCAwIDAgMTQgMTIuNUwyMiA3Ii8+PHBhdGggZD0iTTIyIDDEOCA1bC02IDMuNUwxMyAxMCA0IDUiLz48cGF0aCBkPSJNMiAxNWw4IDUtNSA0djMwbDUtMyA1IDMtNSA0djNoOC41Ii8+PC9zdmc+',
    imageUrls: [
      'https://cdn3.emoji.gg/emojis/1518-valorant-immortal-1.png',
      'https://cdn3.emoji.gg/emojis/1775-valorant-immortal-2.png',
      'https://cdn3.emoji.gg/emojis/5979-valorant-immortal-3.png'
    ]
  },
  { 
    name: 'Radiant', 
    color: 'text-purple-400', 
    bgColor: 'bg-purple-900', 
    borderColor: 'border-purple-700',
    progressGradient: 'from-purple-500 to-pink-500',
    imageUrl: 'https://cdn3.emoji.gg/emojis/5979-valorant-radiant.png'
  },
];

export const XP_PER_SUBLEVEL = 100;
export const SUBLEVELS_PER_RANK = 3;

// Calculate the total XP needed to complete all standard ranks.
export const MAX_XP = RANKS.length * SUBLEVELS_PER_RANK * XP_PER_SUBLEVEL;

// Define the ultimate rank, separate from the standard progression.
export const THE_GOD_RANK: Rank = {
  name: 'The God',
  color: 'text-yellow-300',
  bgColor: 'bg-yellow-500',
  borderColor: 'border-yellow-400',
  progressGradient: 'from-yellow-400 to-amber-500',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCJ3gteLjf6nc9_gbq5ZiUOqQdKZXvZDnFOupzLpmgT3hFkae4n6QVwIciNj2Ohu0q3ozHvVOnQZtyb02ldQtqpSNUvZtBVA3bHASofsK&s=10',
};