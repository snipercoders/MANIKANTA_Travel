//components/transportation/busCarSlideshow.tsx

"use client"

import React, { useState, useEffect } from 'react';
import { FaBus, FaUsers, FaStar, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BusCardWithSlideshow = () => {
  // Array of images for the slideshow
  const images = [
    {
      src: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749807707/flee5_h9jf0j.webp",
      alt: "AC/Non-AC Buses and Mini Buses for Group Travel in India"
    },
    {
      src: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749363750/bu3_oe2xhl.jpg",
      alt: "AC Bus for Corporate Events"
    },
    {
      src: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749803056/flee1_duvesf.avif",
      alt: "Mini Bus for School Trips"
    },
    {
      src: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749804042/flee4_cpx4wm.jpg",
      alt: "Luxury Bus for Pilgrimage Tours"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index:any) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="block">
        <div className="group bg-red-100 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 active:scale-[0.99]">
          {/* Image Slideshow Section */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
            {/* Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
              <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm inline-flex items-center gap-1 sm:gap-2">
                <FaBus className="text-xs sm:text-sm" /> 
                <span>21-45 Seater Buses</span>
              </span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.preventDefault();
                goToPrevious();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    goToSlide(index);
                  }}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-6 sm:w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 md:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                <FaBus className="text-xl sm:text-2xl md:text-3xl text-red-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Buses & Mini Buses
                </h3>
                <p className="text-red-600 font-medium text-sm sm:text-base">
                  Perfect for Large Groups & Events
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Ideal for pilgrimage tours, school trips, corporate events, wedding groups, and interstate travel. 
              Choose from our range of AC/Non-AC buses equipped with modern amenities for comfortable long journeys.
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <FaUsers className="text-indigo-500 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Large Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Premium Service</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-red-500 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Safe Travel</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-500 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Pan India Routes</span>
              </div>
            </div>
            
            <div className="text-red-600 font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all">
              <span>View Bus Fleet Details</span>
              <IoMdArrowForward className="text-base sm:text-lg group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusCardWithSlideshow;