import React from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black to-amber-900 text-white p-4 sticky top-0 z-50 rounded-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6 ">
          {/* className="rounded-xl border-0 shadow-none bg-transparent" */}
          <Image
            src="/logo1.jpg"
            alt="motivation image"
            width={150}
            height={130}
            className="rounded-xl border-0 shadow-none bg-transparent"
          />
          <div className=" flex flex-col space-y-2 ">
            <h1 className="relative text-4xl font-extrabold bg-custom-text  bg-clip-text text-transparent gradient-overlay">
              KEEP PUSHING
            </h1>
            <span className="text-sm ml-16  bg-gradient-to-r from-yellow-700 to bg-gray-500 bg-clip-text text-transparent  font-semibold animate-textGlow">
              WHY ME -- TRY ME
            </span>
          </div>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
