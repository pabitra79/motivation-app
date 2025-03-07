import Link from "next/link";
import React from "react";
import Image from "next/image";

const MotivationHeader: React.FC = () => {
  return (
    <header className="flex bg-gradient-to-r from-black to-amber-900 font-extrabold text-2xl p-2 top-0 sticky ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row  justify-between items-center">
        <div className="flex mr-32 items-start justify-start sm:w-auto">
          <Link href="/">
            <Image
              src="/logo1.jpg"
              alt="motivatin image"
              width={150}
              height={130}
              priority
              className="rounded-xl border-0 shadow-none bg-transparent"
            />
          </Link>
        </div>
        <Link
          href="/motivate/person"
          className="relative text-4xl font-extrabold bg-custom-text-2  bg-clip-text text-transparent gradient-overlay hover:text-orange-700"
        >
          Inspiring Stories
        </Link>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/motivate/reels"
          className="relative text-4xl font-extrabold bg-custom-text  bg-clip-text text-transparent gradient-overlay hover:text-orange-700"
        >
          Reels
        </Link>
      </div>
      <div className="max-w-10 mx-auto flex justify-between items-center">
        <Link
          href="/admin/Page"
          className=" p-2 relative text-xl font-extrabold text-black bg-sky-200 rounded-2xl text-transparent gradient-overlay hover:text-orange-700"
        >
          ADMIN
        </Link>
      </div>
    </header>
  );
};
export default MotivationHeader;
