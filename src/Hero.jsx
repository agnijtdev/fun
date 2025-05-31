import React, { useEffect, useState } from 'react';
import image from './assets/image.png';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const direction = e.detail;
      const step = 10;
      setOffset((prev) => {
        switch (direction) {
          case 'up':
            return { ...prev, y: prev.y - step };
          case 'down':
            return { ...prev, y: prev.y + step };
          case 'left':
            return { ...prev, x: prev.x - step };
          case 'right':
            return { ...prev, x: prev.x + step };
          default:
            return prev;
        }
      });
    };

    window.addEventListener('moveHero', handleMove);
    return () => window.removeEventListener('moveHero', handleMove);
  }, []);

  return (
    <div
      className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] relative top-[-490px] lg:top-[-505px] z-50 transition-transform duration-200"
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      <img src={image} alt="hero" />
    </div>
  );
};

export default Hero;
