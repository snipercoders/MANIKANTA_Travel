import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  alt: string;
  children?: React.ReactNode;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, alt, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-56 bg-gray-200 relative overflow-hidden group">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`${alt} - Image ${index + 1}`}
          fill
          className={`object-cover transition-all duration-700 ${
            index === currentIndex 
              ? 'opacity-100 scale-100 group-hover:scale-110' 
              : 'opacity-0 scale-105'
          }`}
          unoptimized
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {children}
    </div>
  );
};

export default ImageSlideshow;