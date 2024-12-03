export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'elf';
  timestamp: Date;
}

export interface ChristmasQuiz {
  question: string;
  options: string[];
  correctAnswer: number;
}