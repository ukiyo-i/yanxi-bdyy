import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15; // Very soft/low volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startJourney = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setShowStartButton(false);
      } catch (err) {
        // If music fails to play, still proceed with the journey
        setShowStartButton(false);
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Start Journey Button */}
      {showStartButton && (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-pink-950 dark:via-rose-950 dark:to-amber-950 z-[100] flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <div className="mb-8">
              <div className="inline-block p-8 bg-gradient-to-br from-rose-300 to-pink-300 dark:from-rose-600 dark:to-pink-600 rounded-full shadow-2xl animate-pulse-slow">
                <Music className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h2 className="text-5xl text-handwritten text-rose-600 dark:text-rose-400 mb-4">
              Welcome, Abi
            </h2>
            
            <p className="text-xl text-elegant text-rose-500/80 dark:text-rose-300/80 mb-12">
              A special journey awaits you
            </p>
            
            <button
              onClick={startJourney}
              className="px-12 py-5 bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-600 dark:to-pink-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-handwritten text-2xl"
            >
              Start the journey ✨
            </button>
          </div>
        </div>
      )}

      {/* Music Toggle Button */}
      {!showStartButton && (
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 p-3 rounded-full glass-effect shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? 'Mute music' : 'Play music'}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-rose-400" />
          ) : (
            <VolumeX className="w-5 h-5 text-rose-300" />
          )}
        </button>
      )}
    </>
  );
}
