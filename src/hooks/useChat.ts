import { useState, useEffect, useCallback } from 'react';
import { Message, ChristmasQuiz } from '../types/chat';
import { christmasGreetings } from '../utils/christmasData';
import {
  generateGiftResponse,
  generateQuizResponse,
  generateStoryResponse,
  generateRecipeResponse,
} from '../utils/responseGenerators';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<ChristmasQuiz | null>(null);

  useEffect(() => {
    const randomGreeting = christmasGreetings[Math.floor(Math.random() * christmasGreetings.length)];
    setMessages([{
      id: '1',
      content: randomGreeting,
      sender: 'elf',
      timestamp: new Date()
    }]);
  }, []);

  const generateElfResponse = useCallback((userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check if user is answering a quiz
    if (currentQuiz && /^[1-4]$/.test(lowerMessage)) {
      const userAnswer = parseInt(lowerMessage) - 1;
      const isCorrect = userAnswer === currentQuiz.correctAnswer;
      setCurrentQuiz(null);
      return isCorrect 
        ? "Esatto! 🎉 Sei davvero un esperto di Natale! ⭐"
        : `Oh, non proprio! La risposta corretta era: ${currentQuiz.options[currentQuiz.correctAnswer]}. Ma non preoccuparti, il Natale è fatto di tante sorprese! 🎄`;
    }

    // Generate response based on message content
    if (lowerMessage.includes('regalo') || lowerMessage.includes('dono')) {
      return generateGiftResponse();
    } else if (lowerMessage.includes('quiz') || lowerMessage.includes('gioco')) {
      const { message, quiz } = generateQuizResponse();
      setCurrentQuiz(quiz);
      return message;
    } else if (lowerMessage.includes('storia')) {
      return generateStoryResponse();
    } else if (lowerMessage.includes('cioccolata') || lowerMessage.includes('ricetta')) {
      return generateRecipeResponse();
    } else if (lowerMessage.includes('babbo natale')) {
      return "Oh! Ho appena sentito Babbo Natale chiamarmi! Sta controllando la lista dei bambini buoni! 📜✨";
    }

    return "Che la magia del Natale sia sempre con te! ✨🎄 Posso raccontarti una storia, fare un quiz, o aiutarti con idee regalo!";
  }, [currentQuiz]);

  const sendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const elfResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateElfResponse(content),
        sender: 'elf',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, elfResponse]);
      setIsTyping(false);
    }, 1000);
  }, [generateElfResponse]);

  return {
    messages,
    isTyping,
    sendMessage,
    hasActiveQuiz: currentQuiz !== null
  };
}