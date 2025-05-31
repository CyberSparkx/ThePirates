import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SpookySkull = () => {
  const sectionRef = useRef();
  const skullRef = useRef();
  const bgRef = useRef();

  useGSAP(() => {
    // Floating skull animation
    gsap.to(skullRef.current, {
      y: -30,
      rotation: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    // Background scroll parallax
    gsap.to(bgRef.current, {
      y: -100,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      {/* Skull Image */}
      <img
        ref={skullRef}
        src="/img/5d1ccf5390704ad21f992d8e_skull.png"
        alt="Spooky Skull"
        className="
          absolute z-10 pointer-events-none transition-all duration-300
          top-[12%] left-[15%] scale-[0.4]
          sm:top-[10%] sm:left-[25%] sm:scale-[0.5]
          md:top-[20%] md:left-[20%] md:w-[60vw]
          lg:top-[10%] lg:left-[40%] lg:w-[25vw]
        "
      />

      {/* Background Image */}
      <img
        ref={bgRef}
        src="/img/5d25e8040574eeecaa75cbdd_last-part.png"
        alt="Background"
        className="
          absolute bottom-6 opacity-0 z-0 pointer-events-none transition-all duration-300
          right-[10%] scale-[1]
          sm:right-[15%] sm:scale-[1.2]
          md:right-[20%] md:scale-[1.5]
        "
      />
    </div>
  );
};

export default SpookySkull;
