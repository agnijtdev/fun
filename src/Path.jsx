import White from "./White";
import { useState, useEffect } from "react";
import Path1 from "./Path1";
const Path =() =>{

  function getCount(width) {
    if (width >= 1024) return 9; // lg
    if (width >= 768) return 6;  // md
    return 2;                    // sm
  }
  const [count, setCount] = useState(getCount(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCount(getCount(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
       <>
      <div className="h-[500px] w-full p-10">
      <div className="bg-black w-full h-[90px] flex justify-center items-center gap-4">
        {[...Array(count)].map((_, i) => (
          <White key={i} />
        ))}
      </div>

    </div>


       </>
    )
   };
   export default Path;
   