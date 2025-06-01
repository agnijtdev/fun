import React from 'react';
import cake from './assets/cake.png';

const CakeModal = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-500">
      <img src={cake} alt="cake" className="w-[250px] h-[250px] animate-bounce" />
    </div>
  );
};

export default CakeModal;
