import React, { useState, useEffect } from "react";
import White1 from "./White1";

const Path1 = () => {
  const [count, setCount] = useState(getCount(window.innerWidth));

  function getCount(width) {
    if (width >= 1024) return 2; // lg
    if (width >= 768) return 1;  // md
    return 2;                    // sm
  }

  useEffect(() => {
    const handleResize = () => {
      setCount(getCount(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-[500px] w-full justify-start p-10">
      <div className="bg-black w-[100px] h-[150px] mt-[-90px] sm:mt-[-90px] md:mt-[-120px] lg:mt-[-140px] flex flex-col justify-center items-center gap-4">
        {[...Array(count)].map((_, i) => (
          <White1 key={i} />
        ))}
      </div>
    </div>
  );
};

export default Path1;
