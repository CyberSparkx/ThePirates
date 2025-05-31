import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();
  const elementsRef = useRef([]);

  useGSAP(() => {
    gsap.from(elementsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%", // When top of footer hits 80% of viewport
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black h-screen justify-center text-white text-center py-10 flex flex-col items-center gap-4"
    >
      <p
        className="text-md opacity-70"
        ref={(el) => (elementsRef.current[0] = el)}
      >
        Share this experience
      </p>

      <a
        href="https://the-goonies.webflow.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-7xl font-semibold tracking-wide hover:underline"
        ref={(el) => (elementsRef.current[1] = el)}
      >
        the-goonies.webflow.io
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-md font-semibold opacity-80 hover:opacity-100"
        ref={(el) => (elementsRef.current[2] = el)}
      >
        Back to top
      </button>

      <p
        className="text-sm opacity-50 mt-8"
        ref={(el) => (elementsRef.current[3] = el)}
      >
        CREATED BY JOSEPH BERRY - WEBFLOW
      </p>
    </footer>
  );
};

export default Footer;
