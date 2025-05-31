import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const img = [
  "/img/5d02af2ae618811d9e5cac91_The Goonies—Brand gets tied to a chairhas the air let out of his tires-poster-00001.jpg",
  "/img/5d0b90fa0369a41028d539d0_the-goonies-cave.jpg",
  "/img/5d0b90fa2ab90c75d6f44a8e_the-goonies.jpg",
  "/img/5d0b90fa2b24d9ce77182467_goonies-tongue.jpg",
  "/img/5d0b90fa641a584b528ebed3_20141201-125621.jpg",
  "/img/5d0b93722b24d9f866182ebb_goonies4.jpg",
  "/img/5d0b938f2ab90c1171f45523_image.jpg",
  "/img/5d23a6ca059b4b229b659eb7_rocks-min.jpg",
  "/img/5d058dcfe1a868bd88a033ed_3-poster-00001.jpg",
  "/img/5d4029b7763f97bdb3dec2f7_jno507n0iz131.jpg",
  "/img/5d24635d2758ae4bbc2fe2ae_y2matecom - the_goonies_mouths_jewels_w1Bop2N-1P8_360p-poster-00001.jpg",
  "/img/5d08043c2f4d705660dc08e6_Dave Grusin.jpg",
  "/img/5d05918fe1a86872f1a03911_4-poster-00001.jpg"
];

export default function FloatingGallery() {
  const [showGallery, setShowGallery] = useState(false);
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowGallery(true);

    setTimeout(() => {
      imageRefs.current.forEach((img, i) => {
        const x = Math.random() * window.innerWidth - window.innerWidth / 2;
        const y = Math.random() * window.innerHeight - window.innerHeight / 2;
        const scale = Math.random() * 0.5 + 0.75;
        const width = Math.floor(Math.random() * 120) + 150;
        const height = Math.floor(Math.random() * 100) + 120;

        img.style.width = `${width}px`;
        img.style.height = `${height}px`;

        // Save initial positions for mouse parallax
        img.dataset.origX = x;
        img.dataset.origY = y;

        gsap.fromTo(
          img,
          {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.4
          },
          {
            x,
            y,
            opacity: 1,
            scale,
            duration: 1.4,
            ease: "power4.out",
            delay: i * 0.05
          }
        );
      });
    }, 100);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      imageRefs.current.forEach((img, i) => {
        const intensity = 0.03 + (i % 5) * 0.01; // Vary effect
        const baseX = parseFloat(img.dataset.origX || 0);
        const baseY = parseFloat(img.dataset.origY || 0);

        gsap.to(img, {
          x: baseX + deltaX * intensity,
          y: baseY + deltaY * intensity,
          duration: 0.6,
          ease: "power3.out"
        });
      });
    };

    if (showGallery) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showGallery]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {!showGallery && (
        <div className="absolute z-1 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
          >
            View Gallery
          </button>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        {img.map((src, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={src}
            className="absolute top-1/2 left-1/2 object-cover rounded-lg shadow-xl opacity-0 pointer-events-none"
            alt={`Gallery image ${i}`}
          />
        ))}
      </div>
    </div>
  );
}
