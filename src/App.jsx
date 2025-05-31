import Coins from "./Components/Coins";
import Footer from "./Components/Footer";
import Goonies from "./Components/Goonies";
import GooniesInfoGrid from "./Components/GooniesInfoGrid";
import FloatingGallery from "./Components/Layoutt";
import SpookySkull from "./Components/SpookySkull";
import Zoom from "./Components/Zoom";
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  

  // Smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  // Autoplay audio after 11 seconds
  useEffect(() => {
    const audio = audioRef.current;

    const autoplayTimeout = setTimeout(() => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Autoplay prevented:", e);
      });
    }, 11000);

    return () => clearTimeout(autoplayTimeout);
  }, []);

  // Toggle audio play/pause
  const toggleAudio = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-zinc-950 relative overflow-x-hidden">
      {/* Transparent overlay for fullscreen effect */}
      <div className="bg-black/4 w-full h-screen pointer-events-none fixed z-[2]">
        <audio
          ref={audioRef}
          src="/img/Ari's Theme From Exodus-yt.savetube.mp3"
          loop
          preload="auto"
        />
      </div>

      {/* Fixed Image */}
      <img
        src="/img/Screenshot 2025-06-01 013243.png"
        className="fixed z-[1] top-[40%] right-0"
        alt="Skull"
      />

      {/* Sound Toggle Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-[99] text-white text-2xl bg-black/60 p-3 rounded-full shadow-lg backdrop-blur-md hover:scale-110 transition duration-200"
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>

      {/* Main Components */}
      <Zoom />
      <Goonies />
      <Coins />
      <GooniesInfoGrid />
      <SpookySkull />
      <FloatingGallery />
      <Footer />
    </div>
  );
};

export default App;
