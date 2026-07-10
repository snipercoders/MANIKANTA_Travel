'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo with black accent */}
      <div className="mb-6 animate-pulse">
        <div className="relative">
          <div className="absolute -inset-2 bg-black rounded-full opacity-10 animate-ping"></div>
          <Image
            src="/images/logo_mani.jpeg"
            alt="Sri Manikanta Tour & Travels Logo"
            width={120}
            height={120}
            className="rounded-lg shadow-2xl relative"
            priority
          />
        </div>
      </div>

      {/* Loading Text - Black & White */}
      <div className="flex items-center space-x-2 mt-4">
        <h2 className="text-2xl font-semibold text-black">Loading</h2>
        <div className="flex space-x-1">
          <span className="animate-bounce delay-0 text-black">.</span>
          <span className="animate-bounce delay-100 text-black">.</span>
          <span className="animate-bounce delay-200 text-black">.</span>
        </div>
      </div>

      {/* Black Spinner */}
      <div className="mt-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
      </div>
      
      {/* Brand Name */}
      <p className="mt-4 text-gray-400 text-sm font-medium tracking-wider">
        Sri Manikanta Tours & Travels
      </p>
    </div>
  );
}