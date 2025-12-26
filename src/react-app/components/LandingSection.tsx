import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LandingSectionProps {
  onContinue: () => void;
}

export default function LandingSection({ onContinue }: LandingSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-slate-900 dark:via-rose-950 dark:to-amber-950">
      <div className={`text-center px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-handwritten text-rose-400 dark:text-rose-300 mb-6 leading-relaxed">
          Happy Birthday, Abi
        </h1>
        <p className="text-xl md:text-2xl text-elegant text-rose-600/80 dark:text-rose-400/80 max-w-2xl mx-auto mb-12">
          You are my favourite part of every day.
        </p>
        
        <button
          onClick={onContinue}
          className="group relative animate-pulse-slow"
          aria-label="Continue"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
          <Heart 
            className="w-20 h-20 text-rose-400 fill-rose-300 relative z-10 group-hover:scale-110 transition-transform cursor-pointer" 
          />
        </button>
        
        <p className="text-sm text-elegant text-rose-400/60 dark:text-rose-300/60 mt-8">
          Click the heart to continue
        </p>
      </div>
    </section>
  );
}
