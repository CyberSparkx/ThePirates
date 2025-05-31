import Nav from './Nav';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Zoom = () => {
  const main = useRef();
  const main1 = useRef();
  const sectionRef = useRef();
  const textDiv = useRef();
  const goonies = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom -90%",
      pin: true,
      pinSpacing: true,
    });

    gsap.to(main.current, {
      scale: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: main.current,
        start: "10% 10%",
        end: "bottom -90%",
        scrub: true,
      }
    });

    gsap.to(main1.current, {
      scale: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: main1.current,
        start: "10% 10%",
        end: "bottom -90%",
        scrub: true,
      }
    });

    gsap.to(sectionRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% 10%",
        end: "bottom -60%",
        scrub: true,
      }
    });

    gsap.to(textDiv.current, {
      opacity: 1,
      y: -200,
      scrollTrigger: {
        trigger: textDiv.current,
        start: "10% -10%",
        end: "bottom -90%",
        scrub: true,
      }
    });

    gsap.to(goonies.current, {
      opacity: 0,
      y: -30,
      scrollTrigger: {
        trigger: goonies.current,
        start: "10% 10%",
        end: "bottom -20%",
        scrub: true,
      }
    });
  });

  return (
    <div
      id="Scroller"
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      <Nav />

      {/* Background Images */}
      <img
        ref={main}
        src="/img/5cffeaf7b3cb0ed2d33f7943_hero.jpg"
        className="absolute w-full h-full object-cover"
      />

      <img
        ref={main1}
        src="/img/5d13364599bb70e3560cc4e5_background-min 3.png"
        className="absolute w-full h-full object-cover"
      />

      {/* GOONIES logo image centered */}
      <img
        ref={goonies}
        src="/img/5cffeb65d43eb732944316c4_logo.png"
        className="absolute w-32 md:w-64 lg:w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Scroll hint GIF */}
      <img
        src="/img/5d00043816a6c695bcf1581a_scroll.gif"
        className="absolute w-10 md:w-16 bottom-10 left-1/2 -translate-x-1/2"
      />

      {/* Text content block - centered */}
      <div
        ref={textDiv}
        className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[90%] md:w-[70%] lg:w-[50%]"
      >
        <p className="text-xl md:text-3xl font-bold mb-6 text-white">Plot</p>
        <p className="text-sm md:text-xl text-white font-medium">
          Facing foreclosure of their homes in the Goon Docks area of Astoria, Oregon to an expanding country club, a group of children who call themselves "the Goonies" gather for a final weekend together.
        </p>
      </div>
    </div>
  );
};

export default Zoom;
