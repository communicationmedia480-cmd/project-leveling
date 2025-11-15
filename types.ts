export interface Task {
  id: string;
  description: string;
  xp: number;
  isCompleted: boolean;
}

export interface Student {
  id: string;
  name: string;
  totalXp: number;
  tasks: Task[];
}

export interface Rank {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  imageUrl: string;
  imageUrls?: string[];
  progressGradient: string;
}
