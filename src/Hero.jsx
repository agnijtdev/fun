import React, { useEffect, useRef, useState } from 'react';
import image from './assets/image.png';
import CakeModal from './CakeModal';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showCake, setShowCake] = useState(false);
  const heroRef = useRef(null);

  // Movement
  useEffect(() => {
    const handleMove = (e) => {
      if (showCake) return; // disable movement once cake is shown

      const direction = e.detail;
      const step = 10;
      setOffset((prev) => {
        switch (direction) {
          case 'up': return { ...prev, y: prev.y - step };
          case 'down': return { ...prev, y: prev.y + step };
          case 'left': return { ...prev, x: prev.x - step };
          case 'right': return { ...prev, x: prev.x + step };
          default: return prev;
        }
      });
    };

    window.addEventListener('moveHero', handleMove);
    return () => window.removeEventListener('moveHero', handleMove);
  }, [showCake]);

  // Collision Detection
  useEffect(() => {
    if (showCake) return;

    const heroEl = heroRef.current;
    const giftEl = document.getElementById('gift');

    if (!heroEl || !giftEl) return;

    const heroRect = heroEl.getBoundingClientRect();
    const giftRect = giftEl.getBoundingClientRect();

    const overlapX = Math.max(0, Math.min(heroRect.right, giftRect.right) - Math.max(heroRect.left, giftRect.left));
    const overlapY = Math.max(0, Math.min(heroRect.bottom, giftRect.bottom) - Math.max(heroRect.top, giftRect.top));
    const overlapArea = overlapX * overlapY;

    const heroArea = heroRect.width * heroRect.height;

    const overlapRatio = overlapArea / heroArea;

    if (overlapRatio >= 0.9) {
      setShowCake(true);
      // Also hide other components
      const elementsToHide = ['hero-wrapper', 'gift', 'trackpad'];
      elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
  }, [offset, showCake]);

  if (showCake) return <CakeModal />;

  return (
    <div
      id="hero-wrapper"
      ref={heroRef}
      className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] relative top-[-490px] lg:top-[-505px] z-50 transition-transform duration-200"
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      <img src={image} alt="hero" />
    </div>
  );
};

export default Hero;
