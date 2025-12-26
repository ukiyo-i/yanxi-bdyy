import { useEffect, useRef, useState } from 'react';
import { Music, Video } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  note: string;
}

export default function PlaylistSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const songs: Song[] = [
    {
      title: 'A Thousand Years',
      artist: 'Christina Perri',
      note: 'This song is you because waiting for someone like you is worth every moment.'
    },
    {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      note: 'This song is you because you are perfect exactly as you are.'
    },
    {
      title: 'Die With A Smile',
      artist: 'Bruno Mars, Lady Gaga',
      note: 'This song is you because every moment with you feels complete.'
    },
    {
      title: 'Make You Feel My Love',
      artist: 'Adele',
      note: 'This song is you because I want you to feel how deeply I care.'
    },
    {
      title: 'All of Me',
      artist: 'John Legend',
      note: 'This song is you because you have all of my heart.'
    },
    {
      title: 'Can\'t Help Falling in Love',
      artist: 'Elvis Presley',
      note: 'This song is you because loving you feels as natural as breathing.'
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
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50 dark:from-rose-950 dark:via-amber-950 dark:to-pink-950"
    >
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl md:text-5xl text-handwritten text-rose-500 dark:text-rose-400 text-center mb-4">
          A December Playlist for You
        </h2>
        <p className="text-elegant text-rose-400/80 dark:text-rose-300/80 text-center mb-12 text-lg">
          Songs that remind me of you
        </p>
        
        <div className="space-y-4 mb-12">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-700 dark:to-pink-700 rounded-full">
                  <Music className="w-5 h-5 text-rose-600 dark:text-rose-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-handwritten text-rose-600 dark:text-rose-400 mb-1">
                    {song.title}
                  </h3>
                  <p className="text-sm text-elegant text-gray-600 dark:text-gray-400 mb-2">
                    {song.artist}
                  </p>
                  <p className="text-sm text-elegant text-gray-700 dark:text-gray-300 italic">
                    {song.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spotify Playlist - Songs We Love */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music className="w-6 h-6 text-rose-500" />
            <h3 className="text-2xl text-handwriting text-rose-500 dark:text-rose-400">
              Songs We Love
            </h3>
          </div>
          <p className="text-elegant text-gray-600 dark:text-gray-400 text-center mb-6">
            Our special playlist on Spotify
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/0YR1UvDeIpZmy20Fo5XE3S?utm_source=generator&theme=0"
              width="100%" 
              height="380"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* YouTube Playlist - Videos You Might Love */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Video className="w-6 h-6 text-rose-500" />
            <h3 className="text-2xl text-handwriting text-rose-500 dark:text-rose-400">
              Videos You Might Love
            </h3>
          </div>
          <p className="text-elegant text-gray-600 dark:text-gray-400 text-center mb-6">
            A collection of videos just for you
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/videoseries?list=PL-d7V1tfTC-7bDYFaL7gWgRF68CJHdXNk"
              title="Videos You Might Love"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
