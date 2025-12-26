//components/about/FounderCard.tsx


"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function FounderCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl xl:shadow-2xl p-4 sm:p-6 md:p-8 border border-red-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
        {/* Founder Image */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl mx-auto lg:mx-0">
            {imageError ? (
              // Fallback if image fails to load
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl lg:text-6xl text-white">👨‍💼</span>
                  <div className="mt-3 sm:mt-4">
                    <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-white rounded-full mx-auto mb-2"></div>
                    <div className="w-8 h-1 sm:w-12 sm:h-1.5 bg-amber-200 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src="/images/founder/founder.jpeg"
                alt="Ashok R - Founder & CEO of Manikanta Tours & Travels"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 224px"
                onError={() => setImageError(true)}
                priority
              />
            )}
            
            {/* Badge overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
              <div className="text-center">
                <span className="text-white text-xs sm:text-sm font-bold">Founder & CEO</span>
                <div className="w-full h-0.5 bg-white/50 my-1 sm:my-1.5"></div>
                <span className="text-white/90 text-xs">Since 2006</span>
              </div>
            </div>
          </div>
          
          {/* Image caption for accessibility */}
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
            Ashok R - Leading the travel industry since 2006
          </p>
        </div>
        
        {/* Founder Details */}
        <div className="flex-1">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-medium">
                Founder & CEO
              </span>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-medium">
                Since 2006
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Ashok R</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              With over 18+ years of experience in the travel industry, Ashok R has built 
              Manikanta Tours & Travels from the ground up since 2006. His vision is to provide 
              affordable, reliable, and memorable travel experiences to every customer across South India.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
            {/* Direct Contact */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm xs:text-base sm:text-lg">📱</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Direct Contact</p>
                <a 
                  href="tel:+919591762419" 
                  className="font-bold text-gray-900 hover:text-red-600 text-xs xs:text-sm sm:text-base truncate block transition-colors"
                >
                  +91 95917 62419
                </a>
              </div>
            </div>
            
            {/* Co-founder */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm xs:text-base sm:text-lg">👑</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Co-founder</p>
                <p className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base">Chandan</p>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm xs:text-base sm:text-lg">💬</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">WhatsApp</p>
                <a 
                  href="https://wa.me/919591762419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-gray-900 hover:text-green-600 text-xs xs:text-sm sm:text-base truncate block transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Business Since */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm xs:text-base sm:text-lg">🏢</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 leading-tight">Business Since</p>
                <p className="font-bold text-gray-900 text-xs xs:text-sm sm:text-base">June 2006</p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-red-100">
            <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
              "Travel is not just about reaching a destination, it's about creating 
              memories that last a lifetime. We're here to make that journey comfortable, 
              safe, and memorable for every traveler."
            </p>
            <p className="text-right text-red-600 font-medium mt-2 text-sm sm:text-base">— Ashok R, Founder & CEO</p>
          </div>
          
          {/* Experience Badge */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-red-100">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-red-100 to-amber-100 px-3 sm:px-4 py-2 rounded-lg">
                <span className="text-red-500 text-lg">⭐</span>
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">18+ Years Experience</p>
                  <p className="text-xs text-gray-500">Trusted travel partner since 2006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
