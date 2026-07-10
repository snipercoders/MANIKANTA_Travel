'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hi, I'm interested in your travel services!" 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip - Black & White */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 bg-black text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap border border-white/10">
          Chat with us on WhatsApp
          <div className="absolute top-full right-5 -mt-1 border-4 border-transparent border-t-black"></div>
        </div>
      )}
      
      {/* WhatsApp Button - Black & White */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Animated ring effect - Black */}
          <div className="absolute -inset-2 bg-black rounded-full opacity-20 animate-ping"></div>
          
          {/* Main button - Black & White */}
          <div className="relative bg-black border-2 border-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group">
            <FaWhatsapp className="text-white text-2xl" />
            
            {/* Notification badge with "Book Now" */}
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs w-auto px-2 py-1 rounded-full flex items-center justify-center font-bold animate-bounce text-[10px]">
              Book Now
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}