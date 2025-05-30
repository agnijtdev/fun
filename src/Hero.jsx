import React from 'react';
import image from './assets/image.png';

const Hero = () => {
  return (
    <div className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] relative top-[-490px] lg:top-[-505px] z-50 ">
      <img src={image} alt="hero" />
    </div>
  );
};

export default Hero;
