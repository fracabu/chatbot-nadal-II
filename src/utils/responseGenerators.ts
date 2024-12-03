import { ChristmasQuiz } from '../types/chat';
import { christmasQuizzes, giftIdeas,christmasStories } from './christmasData';

export const generateGiftResponse = () => {
  return giftIdeas[Math.floor(Math.random() * giftIdeas.length)];
};

export const generateQuizResponse = (): { message: string; quiz: ChristmasQuiz } => {
  const quiz = christmasQuizzes[Math.floor(Math.random() * christmasQuizzes.length)];
  const message = `Ho un divertente quiz di Natale per te! 🎄\n\n${quiz.question}\n\n${quiz.options.map((option, index) => `${index + 1}. ${option}`).join('\n')}`;
  return { message, quiz };
};

export const generateStoryResponse = () => {
  
  return christmasStories[Math.floor(Math.random() * christmasStories.length)];
};

export const generateRecipeResponse = () => {
  return `Ecco la ricetta segreta della cioccolata calda del Polo Nord! 🍫\n
1. Sciogli lentamente il cioccolato magico delle fate
2. Aggiungi tre gocce di rugiada lunare
3. Mescola con un bastoncino di zucchero incantato
4. Spolverizza con polvere di stelle ✨\n
(Ma non dirlo a nessuno, è il nostro segreto!)`;
};