// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from "../assets/23.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-[#C5A46D] leading-tight mb-4">
          Crafting Urban Elegance
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mb-6">
          BEFIKARA redefines contemporary fashion with meticulously crafted apparel that blends street sensibility with luxury craftsmanship.
        </p>
        <div className="flex gap-4">
          <Link to="/#collections" className="px-6 py-3 border border-[#C5A46D] hover:bg-[#C5A46D] hover:text-black rounded text-sm uppercase transition-colors">
            Explore Collections
          </Link>
          <Link to="/#products" className="px-6 py-3 bg-[#C5A46D] text-black hover:bg-opacity-90 rounded text-sm uppercase transition-colors">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
