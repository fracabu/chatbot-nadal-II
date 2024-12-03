import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { useChat } from './hooks/useChat';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faGift, faSnowman, faTree } from '@fortawesome/free-solid-svg-icons';

// Snowfall
import { Snowfall } from 'react-snowfall';

function App() {
  const { messages, isTyping, sendMessage, hasActiveQuiz } = useChat();

  // Lettore musicale
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    '/src/utils/audio_t_HUlkHYz4A.mp3', // Aggiungi i tuoi file nella cartella public/audio
    '/src/utils/audio_aAkMkVFwAoo.mp3',
    '/src/utils/audio_3CWJNqyub3o.mp3',
  ];

  const playTrack = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack];
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack]);

  // Aggiornare il progresso
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  // Modifica il tempo quando si sposta lo slider
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center p-4 relative">
      {/* Neve che cade */}
      <Snowfall snowflakeCount={100} />

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-red-500 p-4 flex items-center gap-3 relative">
          <FontAwesomeIcon icon={faGift} className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-extrabold text-white tracking-wider">
            Nadal II - L'Elfo di Natale
          </h1>
          <FontAwesomeIcon icon={faTree} className="absolute top-[-15px] right-4 text-white w-12" />
        </div>

        {/* Corpo della chat */}
        <div className="h-[400px] overflow-y-auto p-4 bg-gradient-to-b from-white to-green-50 relative">
          {messages.map((message) => (
            <div key={message.id} className="transform transition duration-500 hover:scale-105">
              <ChatMessage message={message} />
            </div>
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <ChatInput onSendMessage={sendMessage} hasActiveQuiz={hasActiveQuiz} />
        </div>

        {/* Lettore musicale */}
        <div className="p-4 bg-red-100 border-t flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-2">
            <button onClick={prevTrack}>
              <FontAwesomeIcon icon={faCandyCane} className="text-red-600 w-6 h-6" />
            </button>
            <button onClick={isPlaying ? pauseTrack : playTrack}>
              <FontAwesomeIcon
                icon={isPlaying ? faSnowman : faTree}
                className="text-red-600 w-6 h-6"
              />
            </button>
            <button onClick={nextTrack}>
              <FontAwesomeIcon icon={faGift} className="text-red-600 w-6 h-6" />
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-gray-700 text-sm">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1"
            />
            <span className="text-gray-700 text-sm">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Player nascosto */}
        <audio
          ref={audioRef}
          src={tracks[currentTrack]}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          autoPlay
          loop
        />
      </div>
    </div>
  );
}

export default App;
