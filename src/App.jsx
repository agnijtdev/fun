import React from 'react';
import Hero from './Hero.jsx';
import Path from './Path.jsx';
import Path1 from './Path1.jsx';
import Path2 from './Path2.jsx';
import Gift from './Gift.jsx';
import Button from './Button.jsx';
function App() {
return (
<> 
<div className="relative w-full h-screen overflow-x-hidden">

      <Path />
      <Hero/>
      <div className="absolute top-[175px] w-full h-full z-10">
        <Path1 />  
        <div className="mt-[-445px] md:mt-[-475px] lg:mt-[-500px]">
        <Path />
        </div>
        <div className='sm:mt-[-325px] md:mt-[-300px] lg:mt-[-275px] mt-[-325px]'>
        <Path2 />
        </div>
        <div className='mt-[-445px] md:mt-[-475px] lg:mt-[-495px]'>
        <Path />
        </div>
        <div className='mt-[-325px] md:mt-[-290px] lg:mt-[-275px]'>
        <Path1 />
        </div>
        {/* <div className='mt-[-445px] md:mt-[-475px] lg:mt-[-0px]'>
        <Path />
        </div> */}
        <div className='mt-[-570px] md:mt-[-600px] lg:mt-[-625px]'>
        <Gift></Gift>
        </div>
      </div>
      <Button />
    </div>

  </>
);
  
  
}

export default App
