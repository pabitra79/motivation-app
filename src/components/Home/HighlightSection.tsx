// grid or card layout showcase
"use client"
import React, { useRef } from 'react'


const HighlightSection = () => {
  const videoRefs = useRef <{ [key:number]  : HTMLVideoElement | null}>({});

  const HandleMouseEnter = (id:number) =>{
    if(videoRefs.current[id]){
      videoRefs.current[id]?.play();
    }
  };
  const HandleMouseLeave =(id:number) =>{
    if(videoRefs.current[id]){
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0;
    }
  } 
    const highlights = [
    { id:1, name: "Elon Musk", quote: "'Failure is an option here. If things are not failing, you are not innovating enough'.", video: "/elon.mp4" },
    { id:2, name: "Steve Jobs", quote: "'The only way to do great work is to love what you do'.", video: "/steve.mp4" },
    { id:3, name: "Sundar Pichai", quote: "'As a leader it is important to not  just see your won success but focus on the succces of others'. ", video: "/sundar.mp4" },
    { id:4, name: "Sir Ratan Tata", quote: "'Success is not measured by the position you hold, but by the impact you have on others'.", video: "/tata.mp4" },
  ];
return (
    <section className="py-12 px-6 bg-gradient-to-r from-black to-amber-900 ">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-500 to bg-purple-900 bg-clip-text text-transparent">Motivational Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" >
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-amber-900 p-6 rounded-2xl shadow-md hover:bg-gradient-to-r from-indigo-700 to-blue-900" onMouseEnter={()=>HandleMouseEnter(highlight.id)} onMouseLeave={()=>HandleMouseLeave(highlight.id)}>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-900 bg-clip-text text-transparent">{highlight.name}</h3>
            <p className="text-gray-400 mb-4  font-semibold">{highlight.quote}</p>
            <video className="w-auto rounded-md" src={highlight.video} ref={(el) => {(videoRefs.current[highlight.id] = el)}} preload="auto" loop muted controls></video>
          </div>
        ))}
      </div>
    </section>
  );
};


export default HighlightSection

