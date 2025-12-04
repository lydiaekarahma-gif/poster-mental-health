import React from 'react';
import { SectionType } from '../types';

interface AdvicePillProps {
  text: string;
  type: SectionType;
  index: number;
}

const AdvicePill: React.FC<AdvicePillProps> = ({ text, type, index }) => {
  // Styles specific to the 'Do' (Day) or 'Don't' (Night) theme
  const baseClasses = "w-full md:w-4/5 py-4 px-6 rounded-full text-center font-bold text-lg mb-4 transition-transform hover:scale-105 shadow-lg relative z-10";
  
  const themeClasses = type === 'dont' 
    ? "bg-white/20 backdrop-blur-sm text-indigo-100 border border-white/10" 
    : "bg-[#ffcc80] text-orange-900 border-none";

  return (
    <div 
      className={`${baseClasses} ${themeClasses}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {text}
    </div>
  );
};

export default AdvicePill;
