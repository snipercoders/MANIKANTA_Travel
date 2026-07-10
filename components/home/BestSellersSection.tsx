'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, Car, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    title: "Bangalore to Coorg Tour",
    price: "â‚¹12,999",
    duration: "3 Days",
    passengers: "6-8 Persons",
    vehicle: "Innova Crysta",
    locations: ["Bangalore", "Madikeri", "Abbey Falls", "Talakaveri"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg",
    description: "Explore Scotland of India with comfortable stay and sightseeing in Coorg",
    rating: 4.8,
    features: ["Breakfast Included", "Hotel Stay", "Driver Allowance"],
    bestseller: true
  },
  {
    title: "South India Temple Tour",
    price: "â‚¹24,999",
    duration: "7 Days",
    passengers: "12 Persons",
    vehicle: "Tempo Traveller",
    locations: ["Chennai", "Tirupati", "Pondicherry", "Mahabalipuram"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg",
    description: "Spiritual journey covering major temples of South India including Tirupati and Chennai",
    rating: 4.9,
    features: ["Temple Guide", "AC Vehicle", "Veg Meals"],
    bestseller: true
  },
  {
    title: "Mysuru-Ooty Luxury Trip",
    price: "â‚¹18,499",
    duration: "4 Days",
    passengers: "4-6 Persons",
    vehicle: "Toyota Fortuner",
    locations: ["Mysore Palace", "Ooty Lake", "Botanical Garden", "Tea Estates"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg",
    description: "Royal palaces to hill stations - premium comfort package from Mysore to Ooty",
    rating: 4.7,
    features: ["Luxury Stay", "Sightseeing", "All Meals"],
    bestseller: true
  },
];

export default function BestSellersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(packages.length).fill(false));

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Black & White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <Award className="h-4 w-4 fill-current" />
            BEST SELLERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
            Most Popular <span className="text-black">Tour Packages</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Book our most-loved tour packages for an unforgettable journey across <strong className="text-black">South India</strong>.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative mb-12">
          <div className="relative h-[550px] rounded-3xl overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={imageErrors[currentSlide] ? '/images/gallery/travel_image.jpeg' : packages[currentSlide].imgUrl}
                alt={packages[currentSlide].title}
                fill
                className="object-cover"
                sizes="100vw"
                onError={() => handleImageError(currentSlide)}
              />
              
              {/* Gradient Overlay - Black & White */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-1 bg-gray-500 text-black px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <Star className="h-3 w-3 fill-current" />
                  BESTSELLER
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <Star className="h-4 w-4 text-gray-400 fill-current" />
                    <span className="text-white font-bold">{packages[currentSlide].rating}</span>
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {packages[currentSlide].price}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{packages[currentSlide].title}</h3>
                <p className="text-white/90 mb-3">{packages[currentSlide].description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{packages[currentSlide].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{packages[currentSlide].passengers}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {packages[currentSlide].features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs border border-white/20">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Book This Package
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors border border-white/20"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors border border-white/20"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-black w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-black relative h-full">
                    {/* Bestseller Badge */}
                    {pkg.bestseller && (
                      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 bg-gray-500 text-black px-3 py-1.5 rounded-full text-xs font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        BESTSELLER
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageErrors[index] ? '/images/gallery/travel_image.jpeg' : pkg.imgUrl}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(index)}
                      />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                          <Star className="h-4 w-4 text-gray-500 fill-current" />
                          <span className="font-bold text-black">{pkg.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm flex-grow">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{pkg.passengers}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{pkg.vehicle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{pkg.locations.length} Stops</span>
                        </div>
                      </div>

                      {/* Features Tags */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {pkg.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-gray-100 text-black rounded-full text-xs font-medium border border-gray-200"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="mt-auto w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:shadow-lg">
                        Book This Package
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
