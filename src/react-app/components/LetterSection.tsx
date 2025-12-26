import { useEffect, useRef, useState } from 'react';

export default function LetterSection() {
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
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50 dark:from-amber-950 dark:via-pink-950 dark:to-rose-950"
    >
      <div className={`max-w-3xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl text-handwritten text-rose-500 dark:text-rose-400 text-center mb-12">
          A Letter From Me
        </h2>
        
        <div className="bg-amber-50/80 dark:bg-slate-800/50 rounded-lg shadow-2xl p-8 md:p-12 paper-texture border-2 border-rose-200/30 dark:border-rose-800/30">
          <div className="text-elegant text-gray-700 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
            <p className="text-handwritten text-2xl text-rose-500 dark:text-rose-400 mb-8">
              My Dearest Abi,
            </p>
            
            <p>
              On this special day, I want you to know just how extraordinary you are to me. From the moment you entered my life, everything became brighter, softer, and infinitely more beautiful.
            </p>
            
            <p>
              You have this magical way of making the ordinary feel extraordinary. Your laughter is the sweetest melody, your smile the warmest light, and your presence the greatest gift I could ever ask for.
            </p>
            
            <p>
              I cherish every conversation we share, every moment we spend together, and even the quiet times when we simply exist in each other's company. You make my world complete in ways I never knew were possible.
            </p>
            
            <p>
              Thank you for being you — for your kindness, your strength, your gentle heart, and the way you see beauty in everything. Thank you for choosing to share your time, your thoughts, and your heart with me.
            </p>
            
            <p>
              As you celebrate another year of life, I hope you feel all the love and appreciation that surrounds you. You deserve every bit of happiness this world has to offer, and so much more.
            </p>
            
            <p className="text-handwritten text-xl text-rose-500 dark:text-rose-400 mt-8 text-right">
              Forever grateful for you,<br />
              With all my love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
