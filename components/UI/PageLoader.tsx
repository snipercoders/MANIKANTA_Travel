// components/UI/PageLoader.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after component mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="mb-6 animate-pulse">
        <Image
          src="/images/logo_mani.jpeg"
          alt="Logo"
          width={120}
          height={120}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Loading Text */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold text-gray-800">Loading</h2>
        <div className="flex space-x-1">
          <span className="animate-bounce delay-0">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </div>
      </div>

      {/* Spinner (optional - you can remove if you only want text) */}
      <div className="mt-6">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
      </div>
    </div>
  );
}