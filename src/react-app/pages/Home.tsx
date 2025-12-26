import { useRef } from 'react';
import FloatingParticles from '@/react-app/components/FloatingParticles';
import LandingSection from '@/react-app/components/LandingSection';
import LetterSection from '@/react-app/components/LetterSection';
import MemoriesSection from '@/react-app/components/MemoriesSection';
import ReasonsSection from '@/react-app/components/ReasonsSection';
import PlaylistSection from '@/react-app/components/PlaylistSection';
import BirthdayVideoSection from '@/react-app/components/BirthdayVideoSection';
import FinalSection from '@/react-app/components/FinalSection';

export default function Home() {
  const letterSectionRef = useRef<HTMLDivElement>(null);

  const scrollToLetter = () => {
    letterSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="smooth-scroll">
      <FloatingParticles />
      
      <LandingSection onContinue={scrollToLetter} />
      
      <div ref={letterSectionRef}>
        <LetterSection />
      </div>
      
      <MemoriesSection />
      <ReasonsSection />
      <PlaylistSection />
      <BirthdayVideoSection />
      <FinalSection />
    </div>
  );
}
