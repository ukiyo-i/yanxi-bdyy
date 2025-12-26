import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface Memory {
  id: number;
  url: string;
  caption: string;
}

export default function MemoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const memories: Memory[] = [
    {
      id: 1,
      url: 'https://mocha-cdn.com/019af316-9759-7c9c-bc8a-d318f099a8ad/dc17770b-7710-4dbc-a3e7-9f88913c1d6d.jpeg',
      caption: 'The day you decided to bestow the most unique nickname to me'
    },
    {
      id: 2,
      url: 'https://mocha-cdn.com/019af316-9759-7c9c-bc8a-d318f099a8ad/64a82c86-12d5-4987-b4d6-6848389ad46c.jpeg',
      caption: 'The Heart we created through the screen'
    },
    {
      id: 3,
      url: 'https://mocha-cdn.com/019af316-9759-7c9c-bc8a-d318f099a8ad/df37de22-e6a0-42ef-9a76-269a6e5b9588.jpeg',
      caption: 'The Big Dawgs!'
    },
    {
      id: 4,
      url: 'https://mocha-cdn.com/019af316-9759-7c9c-bc8a-d318f099a8ad/e35d7b84-128e-4afc-affa-517f30b373ce.jpeg',
      caption: 'Our Cutieness'
    },
    {
      id: 5,
      url: 'https://mocha-cdn.com/019af316-9759-7c9c-bc8a-d318f099a8ad/09bf89b7-dc75-44dd-a08f-2524138e2ba0.jpeg',
      caption: 'The Roblox Shenanigans'
    },
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

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950 dark:via-pink-950 dark:to-purple-950"
    >
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl text-handwritten text-rose-500 dark:text-rose-400 text-center mb-4">
          Our Memories
        </h2>
        <p className="text-elegant text-rose-400/80 dark:text-rose-300/80 text-center mb-16 text-lg">
          Moments that made my heart smile
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              }}
              onClick={() => setSelectedMemory(memory)}
            >
              <img
                src={memory.url}
                alt={`Memory ${memory.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedMemory(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={selectedMemory.url}
              alt={`Memory ${selectedMemory.id}`}
              className="w-full rounded-lg shadow-2xl"
            />
            
            <p className="text-white text-elegant text-xl text-center mt-6 px-4">
              {selectedMemory.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
