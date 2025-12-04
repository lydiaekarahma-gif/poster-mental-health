import React from 'react';
import { SectionProps } from '../types';
import AdvicePill from './AdvicePill';
import { DayDecorations, NightDecorations } from './Decorations';
import CharacterIllustration from './CharacterIllustration';

const Section: React.FC<SectionProps> = ({ type, items, title }) => {
  const isDont = type === 'dont';

  return (
    <section 
      className={`
        relative w-full md:w-1/2 min-h-[800px] flex flex-col items-center pt-24 pb-12 px-6
        ${isDont 
          ? 'bg-gradient-to-b from-[#2a2b5f] via-[#2a2b5f] to-[#1a1b41] text-white' 
          : 'bg-gradient-to-b from-[#fffde7] via-[#fff9c4] to-[#c8e6c9] text-gray-800'
        }
      `}
    >
      {/* Background Atmosphere */}
      {isDont ? <NightDecorations /> : <DayDecorations />}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        
        {/* Title for this section (e.g. Do or Don't) - Hidden visually in main design but good for structure if we wanted headers per section. 
            The main header spans both. Let's just go straight to the items as per the visual. 
        */}

        {/* List Items */}
        <div className="w-full flex flex-col items-center space-y-4">
          {items.map((item, idx) => (
            <AdvicePill 
              key={item.id} 
              text={item.text} 
              type={type} 
              index={idx}
            />
          ))}
        </div>

        {/* Character Illustration */}
        <CharacterIllustration type={type} />
      </div>

    </section>
  );
};

export default Section;
