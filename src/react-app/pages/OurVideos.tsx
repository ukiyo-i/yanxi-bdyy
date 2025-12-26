import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import FloatingParticles from '@/react-app/components/FloatingParticles';

export default function OurVideos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950 dark:via-pink-950 dark:to-purple-950 py-20 px-6">
      <FloatingParticles />
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-300 animate-pulse" />
            <h1 className="text-5xl md:text-6xl text-handwritten text-rose-500 dark:text-rose-400">
              Our Videos
            </h1>
            <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
          </div>
          
          <p className="text-xl text-elegant text-rose-400/80 dark:text-rose-300/80 max-w-2xl mx-auto">
            Moments captured forever, memories we'll cherish always
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/20">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nYOSRLSPYS0"
              title="Our Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-center">
          <p className="text-lg text-elegant text-rose-500/80 dark:text-rose-400/80 italic">
            Every video tells a story of us ✨
          </p>
        </div>

        {/* Floating Hearts */}
        <div className="fixed bottom-32 left-10 animate-float">
          <Heart className="w-12 h-12 text-pink-300/30 fill-pink-200/30" />
        </div>
        <div className="fixed bottom-40 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-16 h-16 text-rose-300/30 fill-rose-200/30" />
        </div>
        <div className="fixed bottom-52 left-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-10 h-10 text-amber-300/30" />
        </div>
      </div>
    </div>
  );
}
