import { useEffect, useState, useRef } from 'react';
import { Cake, Heart, Star, Sparkles } from 'lucide-react';

export default function BirthdayVideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 dark:from-pink-950 dark:via-rose-950 dark:to-amber-950 relative overflow-hidden"
    >
      {/* Sabrina Carpenter Inspired Aesthetic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dreamy glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-300/20 dark:bg-rose-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating shapes */}
        <Star className="absolute top-32 right-1/4 w-6 h-6 text-amber-300/40 fill-amber-200/40 animate-sparkle" />
        <Star className="absolute bottom-1/3 left-1/4 w-8 h-8 text-pink-300/40 fill-pink-200/40 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-1/4 left-1/3 w-7 h-7 text-rose-300/40 animate-sparkle" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-48 right-1/3 w-6 h-6 text-pink-300/40 fill-pink-200/40 animate-float" />
        <Heart className="absolute top-52 left-20 w-5 h-5 text-rose-300/40 fill-rose-200/40 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center mb-12">
          <div className="inline-block mb-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 rounded-full opacity-20 blur-xl animate-pulse" />
            <Cake className="w-16 h-16 text-rose-400 relative z-10 animate-pulse-slow" />
          </div>
          
          <h2 className="text-5xl md:text-7xl text-handwritten text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 dark:from-pink-400 dark:via-rose-400 dark:to-amber-400 mb-4">
            Your Birthday Video 🎂💛
          </h2>
          
          <p className="text-xl md:text-2xl text-elegant text-rose-400/90 dark:text-rose-300/90 max-w-2xl mx-auto">
            A special message, made with love, just for you
          </p>
        </div>

        {/* Video Container with Sabrina Carpenter Aesthetic */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 rounded-3xl blur-md opacity-30" />
          
          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60 dark:border-white/20">
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 flex items-center justify-center">
              {/* Placeholder for video - will be replaced */}
              <div className="text-center p-12">
                <div className="inline-block p-6 bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-800 dark:to-rose-800 rounded-full mb-6 shadow-xl">
                  <Sparkles className="w-16 h-16 text-rose-500 dark:text-rose-300" />
                </div>
                <p className="text-xl text-elegant text-gray-600 dark:text-gray-300 mb-4">
                  Your special birthday video will appear here
                </p>
                <p className="text-sm text-elegant text-gray-500 dark:text-gray-400">
                  (Upload your video to /assets/birthday-video.mp4)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dreamy Caption */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-handwritten text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 dark:from-pink-400 dark:via-rose-400 dark:to-amber-400 mb-4">
            Happy Birthday, Beautiful Soul ✨
          </p>
          <p className="text-lg text-elegant text-rose-500/80 dark:text-rose-400/80 italic max-w-2xl mx-auto">
            May your day be filled with golden moments, soft glows, and all the magic you deserve
          </p>
        </div>

        {/* Decorative sparkle trail */}
        <div className="mt-8 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <Sparkles 
              key={i}
              className="w-6 h-6 text-amber-400/60 animate-sparkle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
