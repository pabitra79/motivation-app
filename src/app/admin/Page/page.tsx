"use client";
import React, { useState, FormEvent } from "react";
import AddPersonForm from "../../../components/AddPersonForm";

interface Media {
  url: string;
  public_id: string;
}

export default function AdminLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [images, setImages] = useState<Media[]>([]);
  const [videos, setVideos] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setLoginError(null);
        fetchMedia(); // Fetch images and videos after successful login
      } else {
        setLoginError(data.error || "Invalid credentials");
      }
    } catch (error) {
      setLoginError("Failed to login");
    }
  };

  const fetchMedia = async () => {
    setLoading(true);
    try {
      // Fetch images
      const imagesResponse = await fetch("/api/getImage");
      const imagesData = await imagesResponse.json();
      // console.log("Fetched Images:", imagesData); // Debugging

      // Fetch videos
      const videosResponse = await fetch("/api/getVideo");
      const videosData = await videosResponse.json();
      // console.log("Fetched Videos:", videosData); // Debugging

      if (imagesResponse.ok && videosResponse.ok) {
        setImages(Array.isArray(imagesData.images) ? imagesData.images : []);
        setVideos(Array.isArray(videosData.videos) ? videosData.videos : []);
      } else {
        console.error("Failed to fetch media");
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    } finally {
      setLoading(false);
    }
  };

  // Render the AddPersonForm if authenticated
  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Welcome, Admin!
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AddPersonForm
              images={Array.isArray(images) ? images : []}
              videos={Array.isArray(videos) ? videos : []}
            />
          )}
        </div>
      </div>
    );
  }

  // Render the login form if not authenticated
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-1 w-full px-3 py-2 border rounded-lg"
            />
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
