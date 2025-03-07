"use client";
import Link from "next/link";
import React, { useRef } from "react";

const MotivationPage: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle mouse enter for all videos (play all)
  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };
  // Handle mouse leave for all videos (pause all)
  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-black to-gray-900 min-h-screen text-white">
      {/* Main Header */}
      <div className="mb-8 text-center space-y-2">
        <h2 className="text-4xl font-extrabold bg-custom-text bg-clip-text text-transparent gradient-overlay">
          KEEP PUSHING
        </h2>
        <p className="text-lg font-medium leading-relaxed text-gray-400">
          Motivation is the spark that ignites action and fuels the fire of
          determination. Whether you&apos;re chasing a long-held dream or
          starting something new, the first step is always the hardest. Surround
          yourself with positivity, seek inspiration in the stories of others,
          and trust in your ability to overcome obstacles. Believe in yourself,
          stay focused, and let your passion guide you toward greatness.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Video Card 1 */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2 md:mb-0">
                Motivational Journeys
              </h3>
              <Link
                href="/motivate/person"
                className="text-white bg-green-600 font-bold py-2 px-4 md:px-6 rounded-lg shadow-md hover:bg-gray-700"
              >
                Click Me
              </Link>
            </div>
            <p className="font-medium text-gray-300 mb-4">
              Watch how ordinary individuals have turned their dreams into
              reality through persistence and hard work.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Video Section */}
              <div className="w-full md:w-1/2">
                <video
                  ref={(el) => {
                    videoRefs.current[0] = el;
                  }}
                  className="rounded-lg shadow-lg w-full max-h-80"
                  src="/tata.mp4"
                  autoPlay
                  loop
                  muted
                  controls
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                />
              </div>
              {/* Text Section */}
              <div className="text-gray-300 space-y-4 w-full md:w-1/2">
                <strong className="block text-lg">Sir Ratan Tata</strong>
                <p className="font-medium text-sm md:text-base">
                  sir Ratan Tata was the son of Naval Tata, who was adopted by
                  Ratanji Tata, son of Jamshedji Tata, the founder of the Tata
                  Group.
                </p>
                <p className="font-medium text-sm md:text-base">
                  He graduated from Cornell University College of Architecture
                  with a bachelor&apos;s degree in architecture. He also
                  attended the Harvard Business School Advanced Management
                  Program in 1975.
                </p>
              </div>
            </div>
          </div>
          {/* Video Card 2 */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2 md:mb-0">
                Motivational Journeys
              </h3>
              <Link
                href="/motivate/person"
                className="text-white bg-green-600 font-bold py-2 px-4 md:px-6 rounded-lg shadow-md hover:bg-gray-700"
              >
                Click Me
              </Link>
            </div>
            <p className="font-medium text-gray-300 mb-4">
              Watch how ordinary individuals have turned their dreams into
              reality through persistence and hard work.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Video Section */}
              <div className="w-full md:w-1/2">
                <video
                  controls
                  preload="metadata"
                  ref={(el) => {
                    videoRefs.current[0] = el;
                  }}
                  className="rounded-lg shadow-lg w-full max-h-80"
                  src="/steveJobs.mp4"
                  autoPlay
                  loop
                  muted
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                />
              </div>
              {/* Text Section */}
              <div className="text-gray-300 space-y-4 w-full md:w-1/2">
                <strong className="block text-lg">Mr. Steve jobs</strong>
                <p className="font-medium text-sm md:text-base">
                  Steven Paul Jobs was an American businessman, inventor, and
                  investor best known for co-founding the technology company
                  Apple Inc. Jobs was also the founder of NeXT and chairman and
                  majority shareholder of Pixar.
                </p>
                <p className="font-medium text-sm md:text-base">
                  One of the universal truths in business—and in many other
                  aspects of life—is that Steve Jobs, by virtue of his
                  groundbreaking success with the launch of Apple Computers and
                  the iPhone, achieved the status of a deity. Jobs really knew
                  his stuff..
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <section className="py-8 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-center rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-200 mb-6">
              Sign up to access exclusive motivational content and learn from
              inspiring individuals who overcame their obstacles.
            </p>
            <p className="text-gray-200 mb-6">
              Explore life stories, speeches, and interviews of people who
              transformed challenges into opportunities.
            </p>
            <Link
              href="/motivate/person"
              className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200"
            >
              Explore Stories
            </Link>
          </section>
        </div>

        {/* Right Section */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-amber-400 mb-4">
            Your Daily Dose of Inspiration
          </h3>
          <p className="font-semibold text-gray-300 mb-6">
            Keep your motivation high by immersing yourself in uplifting your
            Days With Reels .
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <video
                controls
                preload="metadata"
                ref={(el) => {
                  videoRefs.current[2] = el;
                }}
                className="rounded-lg shadow-lg w-full"
                src="/Video-746.mp4"
                autoPlay
                loop
                muted
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              />
              <video
                controls
                preload="metadata"
                ref={(el) => {
                  videoRefs.current[3] = el;
                }}
                className="rounded-lg shadow-lg w-full"
                src="/Video-507.mp4"
                autoPlay
                loop
                muted
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <video
                controls
                preload="metadata"
                ref={(el) => {
                  videoRefs.current[4] = el;
                }}
                className="rounded-lg shadow-lg w-full"
                src="/Video-15.mp4"
                autoPlay
                loop
                muted
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              />
              <video
                controls
                preload="metadata"
                ref={(el) => {
                  videoRefs.current[5] = el;
                }}
                className="rounded-lg shadow-lg w-full"
                src="/Video-24.mp4"
                autoPlay
                loop
                muted
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
              />
            </div>
          </div>
          <section className="py-8 px-6 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-center rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-200 mb-6">
              Sign up to access exclusive motivational content Reels and stay
              focus on your days
            </p>
            <p className="text-gray-200 mb-6">
              Explore life stories, speeches, and interviews of people who
              transformed challenges into opportunities through Reels
            </p>
            <Link
              href="/motivate/reels"
              className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200"
            >
              Explore Reels
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MotivationPage;
