import React from 'react';
import { SectionType } from '../types';

interface Props {
  type: SectionType;
}

const CharacterIllustration: React.FC<Props> = ({ type }) => {
  if (type === 'dont') {
    return (
      <div className="relative w-48 h-48 md:w-64 md:h-64 mt-8 flex justify-center items-center">
        {/* Sad Character Representation using CSS/SVG composition */}
        <div className="relative z-10">
            {/* Body/Head - Hunched over */}
            <div className="w-24 h-24 bg-indigo-950 rounded-full relative overflow-hidden shadow-xl border-4 border-indigo-800">
               <div className="absolute top-8 left-4 w-4 h-1 bg-white rounded-full rotate-12"></div>
               <div className="absolute top-8 right-8 w-4 h-1 bg-white rounded-full -rotate-12"></div>
               {/* Sad Mouth */}
               <div className="absolute bottom-6 left-8 w-8 h-4 border-t-2 border-white rounded-t-full"></div>
            </div>
             {/* Legs drawn up */}
             <div className="absolute -bottom-4 -left-6 w-12 h-20 bg-indigo-900 rounded-full rotate-45 -z-10"></div>
             <div className="absolute -bottom-4 left-16 w-12 h-20 bg-indigo-900 rounded-full -rotate-45 -z-10"></div>
        </div>
        
        {/* Shadow */}
        <div className="absolute bottom-0 w-32 h-8 bg-black/40 blur-xl rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mt-8 flex justify-center items-center">
      {/* Happy Character Representation */}
      <div className="relative z-10 animate-bounce-slow">
         {/* Head */}
         <div className="w-24 h-24 bg-orange-100 rounded-full relative overflow-hidden shadow-xl border-4 border-orange-300">
              {/* Eyes */}
              <div className="absolute top-8 left-5 w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="absolute top-8 right-5 w-3 h-3 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-6 left-7 w-10 h-5 border-b-4 border-red-400 rounded-b-full bg-white"></div>
              {/* Blush */}
              <div className="absolute bottom-8 left-2 w-4 h-2 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 right-2 w-4 h-2 bg-pink-300 rounded-full opacity-60"></div>
         </div>
         {/* Guitar (Simple shapes) */}
         <div className="absolute top-16 -right-10 w-24 h-12 bg-orange-600 rounded-lg rotate-12 flex items-center justify-center border-2 border-orange-800 shadow-md transform translate-y-4">
             <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
             <div className="w-20 h-1 bg-gray-300 absolute"></div>
         </div>
         {/* Body */}
         <div className="absolute top-20 left-4 w-16 h-20 bg-yellow-400 -z-10 rounded-b-3xl"></div>
      </div>

       {/* Environment Stumps/Grass */}
      <div className="absolute bottom-0 w-40 h-12 bg-green-600/20 blur-md rounded-full"></div>
    </div>
  );
};

export default CharacterIllustration;
