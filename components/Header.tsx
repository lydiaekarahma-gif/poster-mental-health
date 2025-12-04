import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 py-6 text-center">
      <h1 className="font-fredoka text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
        <span className="text-[#6a4c93] mr-2">Mental</span>
        <span className="text-[#f57f17]">Health:</span>
      </h1>
      <div className="mt-2 text-4xl font-fredoka font-bold drop-shadow-md">
        <span className="text-[#ffd700] mr-4">Do</span>
        <span className="text-[#a0a0a0] mr-4">&</span>
        <span className="text-[#9fa8da]">Don't</span>
      </div>
    </div>
  );
};

export default Header;
