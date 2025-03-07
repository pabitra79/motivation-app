import Link from "next/link";
import React from "react";
import Image from "next/image";

const FooterLinks = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex  justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo1.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
            height={0}
            width={150}
          />
          <span className="text-sm font-semibold">KEEP PUSHING</span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex space-x-4">
            <Link href="/" className="hover:underline">
              {" "}
              HOME{" "}
            </Link>
            <Link href="/motivate" className="hover:underline">
              {" "}
              MOTIVATE{" "}
            </Link>
            <Link href="/login" className="hover:underline">
              {" "}
              LOGIN{" "}
            </Link>
          </div>
          <p className="mt-2">pabitra @ 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
