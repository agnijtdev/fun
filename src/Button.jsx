import Right from './assets/right.png';
import Left from './assets/left.png';
import Up from './assets/up.png';
import Down from './assets/down.png';
import { useEffect } from 'react';

let intervalId = null;

const Button = () => {
  const startMoving = (direction) => {
    window.dispatchEvent(new CustomEvent('moveHero', { detail: direction }));

    if (!intervalId) {
      intervalId = setInterval(() => {
        window.dispatchEvent(new CustomEvent('moveHero', { detail: direction }));
      }, 100);
    }
  };

  const stopMoving = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  
  useEffect(() => {
    window.addEventListener('mouseup', stopMoving);
    window.addEventListener('touchend', stopMoving);

    return () => {
      window.removeEventListener('mouseup', stopMoving);
      window.removeEventListener('touchend', stopMoving);
    };
  }, []);

  return (
    <div className="w-[150px] h-[139px] relative top-[-290px] left-[155px] lg:left-[45%] lg:top-[-394.7px] md:left-[38%] md:top-[-350px] z-50 justify-center items-center flex">
      <div className="bg-amber-400 w-[55px] h-[55px] border-6 border-black relative left-[38px] justify-center items-center flex rounded-full" />
      
      <button
        className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl relative top-[-48px] left-[-10px]"
        onMouseDown={() => startMoving('up')}
      >
        <img src={Up} alt="up" />
      </button>

      <button
        className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl relative top-[48px] left-[-49px]"
        onMouseDown={() => startMoving('down')}
      >
        <img src={Down} alt="down" />
      </button>

      <button
        className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl absolute top-[50px] left-[101px]"
        onMouseDown={() => startMoving('right')}
      >
        <img src={Right} alt="right" />
      </button>

      <button
        className="w-[40px] h-[40px] bg-transparent hover:bg-amber-400 rounded-2xl absolute top-[50px] left-[4px]"
        onMouseDown={() => startMoving('left')}
      >
        <img src={Left} alt="left" />
      </button>
    </div>
  );
};

export default Button;
