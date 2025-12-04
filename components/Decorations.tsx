import React from 'react';
import { Cloud, Zap, Sparkles, Sun, Leaf } from 'lucide-react';

export const NightDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark Clouds */}
      <Cloud className="absolute top-10 left-10 text-indigo-950/50 w-32 h-32" />
      <Cloud className="absolute top-5 right-20 text-indigo-800/50 w-40 h-40" />
      <Cloud className="absolute top-40 -left-10 text-indigo-900/40 w-24 h-24" />
      
      {/* Lightning/Stress symbols */}
      <Zap className="absolute top-24 left-24 text-yellow-200/40 w-8 h-8 rotate-12" />
      <Zap className="absolute top-12 right-40 text-yellow-200/30 w-6 h-6 -rotate-12" />

      {/* Stars/Sparkles */}
      <Sparkles className="absolute bottom-1/3 left-10 text-white/20 w-6 h-6" />
      <Sparkles className="absolute top-1/2 right-10 text-white/20 w-4 h-4" />
      <div className="absolute top-10 left-1/2 w-1 h-1 bg-white/40 rounded-full" />
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/40 rounded-full" />
      
      {/* Gradient Overlay for bottom depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-950 to-transparent" />
      
      {/* Bare Tree Silhouette (Abstract) */}
      <svg className="absolute bottom-0 left-0 w-64 h-64 text-indigo-950/60" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 100 L50 80 C50 80 30 70 20 50 M50 80 C50 80 70 60 80 40" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    </div>
  );
};

export const DayDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sun/Light */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl" />
      <Sun className="absolute top-10 right-10 text-yellow-500/20 w-32 h-32" />
      
      {/* Leaves */}
      <Leaf className="absolute top-20 left-10 text-green-600/30 w-8 h-8 rotate-45" />
      <Leaf className="absolute top-40 right-20 text-green-500/40 w-12 h-12 -rotate-12" />
      <Leaf className="absolute bottom-1/2 left-5 text-green-700/20 w-6 h-6 rotate-90" />
      
      {/* Clouds (White/Fluffy) */}
      <Cloud className="absolute top-5 left-20 text-white/60 w-24 h-24" />
      
      {/* Nature/Tree Base */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-green-300/30 to-transparent" />
      
       {/* Tree Silhouette (Lush) */}
      <svg className="absolute bottom-0 right-10 w-48 h-48 text-green-800/20" viewBox="0 0 100 100" fill="currentColor">
         <path d="M50 100 L50 60 L60 40 L40 40 L50 60" stroke="currentColor" strokeWidth="8" />
         <circle cx="50" cy="35" r="20" fill="currentColor" className="text-green-600/30" />
         <circle cx="35" cy="45" r="15" fill="currentColor" className="text-green-600/30" />
         <circle cx="65" cy="45" r="15" fill="currentColor" className="text-green-600/30" />
      </svg>
    </div>
  );
};
