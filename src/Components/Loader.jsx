import { useEffect, useState } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Loader = () => {
const [Loading, setLoading] = useState(0);

const loadingAnimation = useRef();
const loadingAnimation2 = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // update every 30ms

    return () => clearInterval(interval);
  }, []);


   useGSAP(() => {
     gsap.from(loadingAnimation.current, {
      y: 1000,
      duration:10,
      ease: "bounce.inOut"
    });
     gsap.to(loadingAnimation.current, {
      y: -1200,
      ease:"back.inOut",
      duration:1,
      delay:10
    });
     gsap.to(loadingAnimation2.current, {
      y: -1200,
      duration:1,
      ease:"back.Out",
      delay:11
    });

  });
    
  return (
    <div ref={loadingAnimation2} className="bg-zinc-900  w-full flex justify-center items-center h-screen pointer-events-none fixed z-[4]">
      <div ref={loadingAnimation} className="bg-zinc-950 w-full h-screen pointer-events-none fixed z-[5]">  
      </div>
      <h1 className="text-white text-9xl lg:w-[13vw] font-bold fixed  z-[7]">{Loading}</h1>
      <h1 className="text-white text-3xl absolute lg:w-[9vw] font-semibold   bottom-20 z-[7]">{Loading < 100 ? "Loading ........." : "Loaded ✅"}
</h1>
    </div>
  );
};

export default Loader;
