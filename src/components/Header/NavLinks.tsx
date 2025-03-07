"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import UploadFile from "../uploadFile";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="relative">
      <button onClick={toogleMenu} className="md:hidden text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {/* mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } text-white top-0 left-0 w-full md:hidden p-4`}
      >
        <Link
          href="/"
          className="block py-2 bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent font-bold text-lg"
        >
          Home
        </Link>
        <Link
          href="/motivate"
          className="block py-2 bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent font-bold text-lg"
        >
          Motivate Page
        </Link>
        <Link
          href="/about"
          className="block py-2 bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent font-bold text-lg"
        >
          About
        </Link>
        <Link
          href="/login"
          className="block py-2 bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent font-bold text-lg"
        >
          Login
        </Link>
        {/* <Link
          href="/Upload"
          className="block py-2 bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent font-bold text-lg"
        >
          Upload File
        </Link> */}
      </div>

      {/* Desktop menu */}
      <div className="space-x-6 hidden md:flex">
        <Link
          href="/"
          className="hover:text-gray-600 bg-gradient-to-r from-yellow-500 to bg-gray-300 bg-clip-text text-transparent font-bold text-lg"
        >
          Home
        </Link>
        <Link
          href="/motivate"
          className="hover:text-gray-600 text-xl font-extrabold bg-custom-text-2 bg-clip-text text-transparent"
        >
          Motivate Page
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-600 bg-gradient-to-r from-yellow-500 to bg-gray-300 bg-clip-text text-transparent font-bold text-lg"
        >
          About
        </Link>
        <Link
          href="/login"
          className="hover:text-gray-600 bg-gradient-to-r from-yellow-500 to bg-gray-300 bg-clip-text text-transparent font-bold text-lg"
        >
          Login
        </Link>
        {/* <Link
          href="/Upload"
          className="hover:text-gray-600 bg-gradient-to-r from-yellow-500 to bg-gray-300 bg-clip-text text-transparent font-bold text-lg"
        >
          Upload File
        </Link> */}
      </div>
    </div>
  );
};

export default NavLinks;
