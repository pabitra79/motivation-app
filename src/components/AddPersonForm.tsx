"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Media {
  url: string;
  public_id: string;
}

interface AddPersonFormProps {
  images: Media[];
  videos: Media[];
}

const AddPersonForm = ({ images = [], videos = [] }: AddPersonFormProps) => {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [bioSummary, setBioSummary] = useState("");
  const [bioSections] = useState<
    { type: string; content: string | string[] }[]
  >([]);
  const [selectedImage, setSelectedImage] = useState<Media | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Media | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !quote || !bioSummary || !selectedImage || !selectedVideo) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          quote,
          bio: {
            summary: bioSummary,
            sections: bioSections,
          },
          image: selectedImage.url,
          imagePublicId: selectedImage.public_id,
          videoId: selectedVideo.url,
          videoPublicId: selectedVideo.public_id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        console.log("Upload successful:", data);
      } else {
        setError(data.error || "Failed to submit form");
      }
    } catch (err) {
      setError("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  // const addBioSection = (type: string, content: string | string[]) => {
  //   setBioSections([...bioSections, { type, content }]);
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-sky-100 p-8 rounded-lg shadow-lg"
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-purple-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        />
      </div>

      {/* Image Selection */}
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-purple-700"
        >
          Select Image
        </label>
        <select
          id="image"
          value={selectedImage ? selectedImage.public_id : ""}
          onChange={(e) => {
            const selected = images.find(
              (img) => img.public_id === e.target.value
            );
            // console.log("Selected Image:", selected); // Debugging
            setSelectedImage(selected || null);
          }}
          required
          className="mt-1 w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        >
          <option value="">Select an image</option>
          {images.map((image) => (
            <option key={image.public_id} value={image.public_id}>
              {image.public_id}
            </option>
          ))}
        </select>
        {selectedImage && (
          <div className="mt-4">
            <Image
              src={selectedImage.url}
              alt="Selected"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
              height={0}
              width={0}
              onError={(e) => {
                console.error("Failed to load image:", selectedImage.url);
                e.currentTarget.src = "/fallback-image.png"; // Add a fallback image
              }}
            />
          </div>
        )}
      </div>

      {/* Video Selection */}
      <div>
        <label
          htmlFor="video"
          className="block text-sm font-medium text-purple-700"
        >
          Select Video
        </label>
        <select
          id="video"
          value={selectedVideo ? selectedVideo.public_id : ""}
          onChange={(e) => {
            const selected = videos.find(
              (vid) => vid.public_id === e.target.value
            );
            // console.log("Selected Video:", selected); // Debugging
            setSelectedVideo(selected || null);
          }}
          required
          className="mt-1 w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        >
          <option value="">Select a video</option>
          {videos.map((video) => (
            <option key={video.public_id} value={video.public_id}>
              {video.public_id}
            </option>
          ))}
        </select>
        {selectedVideo && (
          <div className="mt-4">
            <video
              controls
              className="w-full max-w-md h-48 rounded-lg shadow-md"
              onError={() => {
                console.error("Failed to load video:", selectedVideo.url);
              }}
            >
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Quote Field */}
      <div>
        <label
          htmlFor="quote"
          className="block text-sm font-medium text-purple-700"
        >
          Quote
        </label>
        <textarea
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
          className="mt-1 w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        />
      </div>

      {/* Bio Summary Field */}
      <div>
        <label
          htmlFor="bioSummary"
          className="block text-sm font-medium text-purple-700"
        >
          Bio Summary
        </label>
        <textarea
          id="bioSummary"
          value={bioSummary}
          onChange={(e) => setBioSummary(e.target.value)}
          required
          className="mt-1 w-full p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white p-3 rounded-lg hover:from-purple-700 hover:to-teal-600 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {/* Error and Success Messages */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700">
          <p>Person added successfully!</p>
        </div>
      )}
    </form>
  );
};

export default AddPersonForm;
