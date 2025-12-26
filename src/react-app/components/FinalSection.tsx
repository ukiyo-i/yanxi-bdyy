import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function FinalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950 dark:via-rose-950 dark:to-purple-950"
    >
      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <p className="text-2xl md:text-3xl lg:text-4xl text-elegant text-rose-600/90 dark:text-rose-400/90 leading-relaxed mb-12 px-4">
          Abi, thank you for being the gentle miracle in my life.
        </p>
        
        <button
          onClick={() => setShowPopup(true)}
          className="group relative px-12 py-4 bg-gradient-to-r from-rose-300 to-pink-300 dark:from-rose-700 dark:to-pink-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg text-handwritten relative z-10">Click Me</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-gradient-to-br from-amber-50 to-rose-50 dark:from-slate-800 dark:to-rose-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-12 relative border-4 border-white/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-br from-rose-300 to-pink-300 dark:from-rose-600 dark:to-pink-600 rounded-full p-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-xl md:text-2xl text-elegant text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Wishing you all the love, softness, and magic — today and always
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {['💖', '✨', '🌸', '💫', '🌙'].map((emoji, index) => (
                  <span 
                    key={index} 
                    className="text-3xl animate-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              
              <button
                onClick={() => setShowPopup(false)}
                className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-600 dark:to-pink-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-handwritten text-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
