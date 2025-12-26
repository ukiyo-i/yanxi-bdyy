import { useState, useEffect, useRef } from 'react';

interface Reason {
  id: number;
  text: string;
}

export default function ReasonsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [flipped, setFlipped] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reasons: Reason[] = [
    { id: 1, text: 'Your laugh lights up every room you enter' },
    { id: 2, text: 'The way you see beauty in the smallest things' },
    { id: 3, text: 'Your kindness touches everyone you meet' },
    { id: 4, text: 'How you make me feel understood without saying a word' },
    { id: 5, text: 'Your strength in facing any challenge' },
    { id: 6, text: 'The warmth of your embrace' },
    { id: 7, text: 'Your ability to find joy in simple moments' },
    { id: 8, text: 'How you inspire me to be better every day' },
    { id: 9, text: 'Your genuine care for others' },
    { id: 10, text: 'The way your eyes sparkle when you smile' },
    { id: 11, text: 'Your creative spirit and imagination' },
    { id: 12, text: 'How you make ordinary days feel special' },
    { id: 13, text: 'Your unwavering support and encouragement' },
    { id: 14, text: 'The comfort I feel just being near you' },
    { id: 15, text: 'Your thoughtfulness in everything you do' },
    { id: 16, text: 'How you listen with your whole heart' },
    { id: 17, text: 'Your sense of wonder and curiosity' },
    { id: 18, text: 'The way you make me feel safe to be myself' },
    { id: 19, text: 'Your gentle nature and tender heart' },
    { id: 20, text: 'How you find solutions with grace' },
    { id: 21, text: 'Your infectious enthusiasm for life' },
    { id: 22, text: 'The way you remember little details' },
    { id: 23, text: 'Your ability to make me smile even on hard days' },
    { id: 24, text: 'How you bring out the best in everyone' },
    { id: 25, text: 'Your courage to be vulnerable' },
    { id: 26, text: 'The peace I feel when we\'re together' },
    { id: 27, text: 'Your unique perspective on the world' },
    { id: 28, text: 'How you celebrate others\' successes' },
    { id: 29, text: 'Your beautiful soul that shines from within' },
    { id: 30, text: 'Simply being you, exactly as you are' },
  ];

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

  const handleFlip = (id: number) => {
    if (flipped.includes(id)) {
      setFlipped(flipped.filter(fid => fid !== id));
    } else {
      setFlipped([...flipped, id]);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl text-handwritten text-rose-500 dark:text-rose-400 text-center mb-4">
          30 Reasons I'm Grateful You Exist
        </h2>
        <p className="text-elegant text-rose-400/80 dark:text-rose-300/80 text-center mb-16 text-lg">
          Click each card to reveal the reason
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="perspective-1000"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
              }}
            >
              <div
                className={`relative h-48 cursor-pointer transition-transform duration-500 transform-style-3d ${flipped.includes(reason.id) ? 'rotate-y-180' : ''}`}
                onClick={() => handleFlip(reason.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped.includes(reason.id) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-800 dark:to-pink-800 rounded-lg shadow-lg flex items-center justify-center p-4 border-2 border-white/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-5xl text-handwritten text-rose-600 dark:text-rose-300">
                    {reason.id}
                  </span>
                </div>
                
                {/* Back of card */}
                <div 
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-amber-100 to-rose-100 dark:from-amber-900 dark:to-rose-900 rounded-lg shadow-lg flex items-center justify-center p-4 border-2 border-white/50"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-sm text-elegant text-gray-700 dark:text-gray-200 text-center leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
