"use client";
import MotivationHeader from "../../../components/motivate/MotivationHeader";
import React, { useEffect, useState } from "react";

interface Reel {
  url: string;
  public_id: string;
}

export default function ReelPage() {
  const [reels, setReels] = useState<Reel[]>([]);

  useEffect(() => {
    async function fetchReels() {
      try {
        const response = await fetch("/api/getMedia");
        const data = await response.json();
        const shuffledReels = data.videos.sort(() => Math.random() - 0.5);
        setReels(shuffledReels);
      } catch (error) {
        console.log("Error fetching reels", error);
      }
    }
    fetchReels();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-10 shadow-lg bg-gray-900 bg-opacity-95">
        <MotivationHeader />
      </div>

      {/* Scrollable Video Feed */}
      <div className="flex-1 overflow-y-auto pt-40 sm:pt-32 pb-16 flex flex-col items-center">
        {/* ✅ Ensure title is visible on small screens */}
        <h1 className="text-3xl font-bold mb-8 text-white text-center sm:text-2xl">
          Motivation Reels
        </h1>

        {reels.length > 0 ? (
          <div className="w-full max-w-2xl space-y-8 px-4">
            {reels.map((reel) => (
              <div
                key={reel.public_id}
                className="relative group w-full flex justify-center"
              >
                {/* Video Element */}
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105 flex justify-center items-center w-full max-w-xs sm:max-w-md md:max-w-lg">
                  <video
                    className="rounded-lg shadow-lg w-full max-h-80"
                    loop
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  >
                    <source src={reel.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Loading Reels...</p>
        )}
      </div>
    </div>
  );
}
