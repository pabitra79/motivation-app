"use client";

import { SessionProvider } from "next-auth/react";
import UserButton from "@/components/user.button";

export default function Login() {
  return (
    <SessionProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-amber-900 text-white">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-700 to-red-400 text-transparent bg-clip-text">
            Welcome to Login Page
          </h1>
          <p className="text-lg bg-gradient-to-r from-yellow-400 to-orange-700 text-transparent bg-clip-text">
            Please sign in or sign up to continue
          </p>
        </div>
        <div className="flex space-x-4 mt-8">
          {/* Sign In and Sign Up buttons */}
          <UserButton />
        </div>
      </div>
    </SessionProvider>
  );
}
