// contain a video thats loops with text overlay
"use client"
import React,{useState,useRef} from 'react'

const HeroSection: React.FC = () => {
  //   const videoRef = useRef<HTMLVideoElement>(null);
  // const [isMuted, setIsMuted] = useState(true); 

  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !isMuted; 
  //     setIsMuted(!isMuted); 
  //   }
  // };
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-white/25 blur-sm"
        src="mewtow.mp4" 
        autoPlay
        loop
        muted
      />
      <div className=" flex absolute top-5 left-5 w-60 h-70">
        <video 
        className='rounded-full'
        src='cone1.mp4'
        autoPlay
        loop
        muted
        />
      </div>
      <div className="relative text-center">
        <h1 className="text-2xl md:text-2xl font-bold text-gray-700 animate-textGlow">
          "The Future Belongs to Those Who Believe in the Beauty of Their Dreams."
        </h1>
        <br/>
        <p className="mt-4 text-xl text-purple-500 font-bold animate-textGlow ">Keep Pushing Forward, One Step at a Time.</p>
        <h4 className='mt-4 text-xl text-purple-500 font-bold animate-textGlow'>Unlock Your Success</h4>
<p className='text-2xl md:text-2xl font-bold text-gray-700 animate-textGlow'>Fuel your journey with daily inspiration—</p>
<p className='text-2xl md:text-2xl font-bold text-gray-700 animate-textGlow'> discover millionaire life stories and exclusive interviews that turn ambition into action. Join the movement. Start now!</p>
      </div>
      <div className="absolute bottom-8 right-10 w-80 h-100 flex">
        <video 
        className='rounded-3xl'
        src='requeza.mp4'
        autoPlay
        loop
        muted
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold bg-custom-text bg-clip-text text-transparent">
    KEEP PUSHING
  </h1>
      </div>
      {/* <button
          onClick={toggleMute}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button> */}
    </div>
  );
};

export default HeroSection;
