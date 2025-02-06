"use client"
import React, { useState, useEffect } from "react";
import MotivationHeader from "@/components/motivate/MotivationHeader";
import PersonDetails from "@/components/personDetails"; // Import the PersonDetails component

interface Video {
  url: string;
  public_id: string;
  display_name: string;
}

const Person = () => {
  const [page, setPage] = useState(1); // Current page for pagination
  const [videos, setVideos] = useState<Video[]>([]); // All videos from API
  const [loading, setLoading] = useState(true);

  const windowSize = 3; // numberof oagination button to show at
  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      try {
        const response = await fetch("/api/getVideo");
        const result = await response.json();
        setVideos(result.videos || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      setLoading(false);
    }
    fetchVideos();
  }, []);

  // Get the current video based on the page number
  const currentVideo = videos[page - 1];
  const startPage = Math.max(1, page - Math.floor(windowSize/2))
  const endPage = Math.min(startPage + windowSize -1,videos.length);
// genearte the array 
  const visiblePages = Array.from({length:endPage - startPage +1},(_,i)=> startPage +i) 
  return (
    <div className="min-h-screen flex flex-col bg-gray-600 py-16">
      {/* Fixed header */}
      <div className="fixed top-0 z-10 shadow-lg w-full">
        <MotivationHeader />
      </div>

      {/* Grid Layout */}
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-[calc(100vh-80px)]">
        {/* Left Side: Person Information */}
        <div className="bg-white p-8 rounded-lg shadow-md overflow-y-auto">
          {currentVideo ? (
            <PersonDetails personId={currentVideo.display_name} />
          ) : (
            <p>No person details found.</p>
          )}
        </div>

        {/* Right Side: Video */}
        <div className="bg-white p-8 rounded-lg shadow-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Interview Videos</h1>
          {loading ? (
            <p>Loading...</p>
          ) : currentVideo ? (
            <div key={currentVideo.public_id} className="mb-4">
              <h2 className="text-lg font-semibold">{currentVideo.display_name}</h2>
              <video controls className="w-full rounded-lg shadow-lg">
                <source src={currentVideo.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <p>No video found.</p>
          )}
        </div>
      </div>

    
      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-4">
        {/* Previous Button */}
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded text-white bg-gray-500 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Visible Pagination Buttons */}
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`px-4 py-2 rounded text-white ${
              page === pageNumber ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setPage((prev) => Math.min(videos.length, prev + 1))}
          disabled={page === videos.length}
          className="px-4 py-2 rounded text-white bg-gray-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Person;