"use client";

import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="py-12 px-6  bg-gradient-to-r from-gray-700 to-amber-900 ">
      <h1 className="text-4xl font-bold text-center mb-12  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">About Us</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-white leading-relaxed mb-6">
            Our mission is to motivate individuals by sharing the journeys of
            top entrepreneurs, innovators, and leaders. Through powerful quotes,
            exclusive video highlights, and curated content, we aim to spark
            creativity, fuel ambition, and empower you to chase your dreams.
          </p>

          <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">Why We Started</h2>
          <p className="text-white leading-relaxed">
            This platform was born from a simple idea: inspiration should be
            accessible to everyone. As someone passionate about creativity and
            problem-solving, I, Pabitra Barik, wanted to create a space that
            could ignite ideas and push boundaries.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">What We Offer</h2>
          <ul className="list-disc list-inside text-white leading-relaxed mb-6">
            <li>
              <strong>Motivational Highlights:</strong> Relive the most
              inspiring moments with video highlights.
            </li>
            <li>
              <strong>Powerful Quotes:</strong> Explore the wisdom that shaped
              the paths of visionaries.
            </li>
            <li>
              <strong>Curated Stories:</strong> Discover insights that fuel
              ambition and innovation.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">Our Values</h2>
          <ul className="list-disc list-inside text-white leading-relaxed">
            <li>
              <strong>Authenticity:</strong> Real stories, real inspiration.
            </li>
            <li>
              <strong>Innovation:</strong> Constantly evolving to serve you
              better.
            </li>
            <li>
              <strong>Community:</strong> Building a network of like-minded
              dreamers and achievers.
            </li>
          </ul>
        </div>
      </div>

      {/* Meet the Creator Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4  bg-gradient-to-r from-gold to bg-yellow-900 bg-clip-text text-transparent">Meet the Creator</h2>
        <p className="text-white leading-relaxed mb-6">
          Hi, I’m <strong className="bg-yellow-800">Pabitra Barik</strong>, a passionate Software
          developer who believes in the power of creativity and inspiration. I
          built this platform as a step toward connecting ideas with action and
          motivating creators around the globe.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
            <Link href="/motivate"> Explore Highlights</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutPage;
