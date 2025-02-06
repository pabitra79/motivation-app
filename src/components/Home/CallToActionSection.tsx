// encoureage user enegement 
import Link from 'next/link';
import React from 'react'

const CallToActionSection = () => {
   return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
      <p className="mb-6">Sign up to access more motivational content and leave your own comments on our videos.</p>
      <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100">
        <Link href="/motivate">Expolre for Motivate</Link>
      </button>
      
    </section>
  );
};


export default CallToActionSection
