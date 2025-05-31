import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Coins = () => {
  const sectionRef = useRef();
  const coin1Ref = useRef();
  const coin2Ref = useRef();
  const coin3Ref = useRef();
  const coin4Ref = useRef();
  const keyRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        let yVal1, yVal2, rotationVal;

        if (context.conditions.isDesktop) {
          yVal1 = 200;
          yVal2 = -200;
          rotationVal = 90;
        } else if (context.conditions.isTablet) {
          yVal1 = 150;
          yVal2 = -150;
          rotationVal = 60;
        } else if (context.conditions.isMobile) {
          yVal1 = 100;
          yVal2 = -100;
          rotationVal = 45;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            pin: true,
            scrub: true,
          },
        });

        tl.from(sectionRef.current, {
          opacity: 0,
          ease: "power1.out",
        });

        gsap.from(coin1Ref.current, {
          y: yVal1,
          rotation: rotationVal,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            scrub: true,
          },
        });

        gsap.from(coin2Ref.current, {
          y: yVal2,
          rotation: -rotationVal,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            scrub: true,
          },
        });

        gsap.from(coin3Ref.current, {
          y: yVal2,
          rotation: rotationVal,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            scrub: true,
          },
        });

        gsap.from(coin4Ref.current, {
          y: yVal1,
          rotation: -rotationVal,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            scrub: true,
          },
        });

        gsap.from(keyRef.current, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom -90",
            scrub: true,
          },
        });
      }
    );

    // Cleanup on component unmount
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Coin Top Left */}
      <img
        ref={coin1Ref}
        src="/img/5d25ce8103e41038cf3b4be7_coin-1.png"
        alt="Coin 1"
        className="
          absolute 
          top-[15vh] left-[10vw] 
          w-[12vw] max-w-[80px] md:w-[8vw] md:max-w-[150px] 
          object-contain
          "
      />

      {/* Coin Top Right */}
      <img
        ref={coin2Ref}
        src="/img/5d25cdda7dcddd7271ddc7da_coin.png"
        alt="Coin 2"
        className="
          absolute 
          top-[20vh] right-[10vw] 
          w-[12vw] max-w-[90px] md:w-[10vw] md:max-w-[170px] 
          object-contain
          "
      />

      {/* Coin Bottom Left */}
      <img
        ref={coin3Ref}
        src="/img/5d25ce8103e4105bd13b4be8_coin-3.png"
        alt="Coin 3"
        className="
          absolute 
          bottom-[15vh] left-[15vw] 
          w-[10vw] max-w-[70px] md:w-[7vw] md:max-w-[130px] 
          object-contain
          "
      />

      {/* Coin Bottom Right */}
      <img
        ref={coin4Ref}
        src="/img/5d25ce8103e41038cf3b4be7_coin-1.png"
        alt="Coin 4"
        className="
          absolute 
          bottom-[12vh] right-[20vw] 
          w-[9vw] max-w-[60px] md:w-[6vw] md:max-w-[110px] 
          object-contain
          "
      />

      {/* Key in the center */}
      <img
        ref={keyRef}
        src="/img/5d25c68703e41086eb3b2da1_key-min.png"
        alt="Key"
        className="
          z-10 
          w-[20vw] max-w-[180px] md:w-[15vw] md:max-w-[220px] 
          object-contain
          "
      />

      {/* Centered Text */}
      <h1
        className="
          absolute 
          bottom-[52%] left-1/2 transform -translate-x-1/2 
          text-white text-2xl sm:text-3xl md:text-5xl font-medium z-10 
          text-center
          px-4
          "
      >
        Goonies Never Say Die
      </h1>
    </div>
  );
};

export default Coins;
