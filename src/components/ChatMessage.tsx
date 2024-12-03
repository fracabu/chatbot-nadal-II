import React from 'react';
import { Message } from '../types/chat';
import { Sparkles } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isElf = message.sender === 'elf';
  
  return (
    <div className={`flex ${isElf ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] rounded-lg p-4 ${
        isElf 
          ? 'bg-red-100 text-red-800' 
          : 'bg-green-100 text-green-800'
      }`}>
        {isElf && (
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">Nadal II</span>
          </div>
        )}
        <p className="whitespace-pre-line">{message.content}</p>
      </div>
    </div>
  );
};