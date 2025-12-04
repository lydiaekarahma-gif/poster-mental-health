import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import { DONT_ITEMS, DO_ITEMS } from './constants';
import { Info } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Simple modal for generic advice (simulating AI part or actual AI if key provided)
const AdviceModal: React.FC<{ onClose: () => void; }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Mengapa ini penting?</h3>
      <p className="text-gray-600 mb-4">
        Kesehatan mental sama pentingnya dengan kesehatan fisik. Menjaga keseimbangan antara emosi dan aktivitas fisik membantu kita tetap produktif dan bahagia.
      </p>
      <button 
        onClick={onClose}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
      >
        Tutup
      </button>
    </div>
  </div>
);

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden font-nunito">
      <Header />
      
      {/* Main Split Layout */}
      <main className="flex flex-col md:flex-row w-full min-h-screen">
        <Section 
          type="dont" 
          title="Don't" 
          items={DONT_ITEMS} 
        />
        
        {/* Visual Separator - jagged line simulation */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0 border-l-2 border-dashed border-white/20 z-20 h-full transform -translate-x-1/2 pointer-events-none"></div>

        <Section 
          type="do" 
          title="Do" 
          items={DO_ITEMS} 
        />
      </main>

      {/* Floating Action Button for More Info */}
      <button 
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-white text-indigo-900 p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-50 border-2 border-indigo-100"
        aria-label="Info"
      >
        <Info size={24} />
      </button>

      {showModal && <AdviceModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
