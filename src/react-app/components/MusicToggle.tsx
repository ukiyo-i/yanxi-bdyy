import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a soft romantic background music from a public source
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
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
  );
}
