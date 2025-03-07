"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        controls
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-white/25 blur-sm"
        src="mewtow.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-black/20 -z-10"></div>

      {/* Text Content Container */}
      <div className="relative text-left p-8 max-w-2xl  rounded-lg shadow-lg ml-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 animate-textGlow">
          "The Future Belongs to Those Who Believe in the Beauty of Their
          Dreams"
        </h1>
        <p className="mt-4 text-xl text-purple-500 font-bold animate-textGlow">
          Keep Pushing Forward, One Step at a Time.
        </p>
        <h4 className="mt-4 text-xl text-purple-500 font-bold animate-textGlow">
          Unlock Your Success
        </h4>
        <p className="mt-4 text-2xl md:text-2xl font-bold text-gray-800 animate-textGlow">
          Fuel your journey with daily inspiration—discover millionaire life
          stories and exclusive interviews that turn ambition into action.
        </p>
        <p className="mt-2 text-xl text-sky-300 font-medium animate-fadeIn delay-800">
          Join the movement. Start now!
        </p>
        <button className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105 animate-fadeIn delay-1000 focus-visible:only:">
          Get Started
        </button>
      </div>

      {/* Floating Video with Text Overlay */}
      <div className="absolute bottom-8 right-10 w-80 h-100 flex">
        <video className="rounded-3xl" src="requeza.mp4" autoPlay loop muted />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold bg-custom-text bg-clip-text text-transparent">
          KEEP PUSHING
        </h1>
      </div>

      {/* Floating Elements (Optional) */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-40 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000"></div>
      <div className="relative center w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-80 right-80 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
    </div>
  );
};

export default HeroSection;
