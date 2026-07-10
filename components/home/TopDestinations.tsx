'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    title: "Coorg - Scotland of India",
    days: "3 Days Trip",
    price: "â‚¹12,999",
    rating: 4.8,
    reviews: "3.4k reviews",
    description: "Coffee plantations, waterfalls, and misty mountains in Karnataka",
    location: "Karnataka",
    features: ["Coffee Estate Visit", "Waterfalls", "Trekking"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg"
  },
  {
    title: "Munnar - Tea Gardens",
    days: "4 Days Trip",
    price: "â‚¹14,999",
    rating: 4.9,
    reviews: "2.8k reviews",
    description: "Rolling tea plantations and cool climate in Kerala",
    location: "Kerala",
    features: ["Tea Estate Tour", "Eravikulam National Park", "Mattupetty Dam"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg"
  },
  {
    title: "Chikmagalur - Hill Station",
    days: "3 Days Trip",
    price: "â‚¹11,999",
    rating: 4.7,
    reviews: "1.9k reviews",
    description: "Coffee plantations and scenic beauty in Karnataka",
    location: "Karnataka",
    features: ["Mullayanagiri Trek", "Coffee Museum", "Waterfalls"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg"
  },
];

export default function TopDestinations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(destinations.length).fill(false));

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            <MapPin className="h-4 w-4" />
            POPULAR DESTINATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
            Top <span className="text-black">Destinations</span> in South India
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most beautiful destinations in <strong className="text-black">Karnataka, Kerala, Tamil Nadu</strong> and across South India with our curated travel packages.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative mb-12">
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={imageErrors[currentSlide] ? '/images/gallery/travel_image.jpeg' : destinations[currentSlide].imgUrl}
                alt={destinations[currentSlide].title}
                fill
                className="object-cover"
                sizes="100vw"
                onError={() => handleImageError(currentSlide)}
              />
              
              {/* Gradient Overlay - Black & White */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <Star className="h-4 w-4 text-gray-400 fill-current" />
                    <span className="text-white font-bold">{destinations[currentSlide].rating}</span>
                    <span className="text-white/80 text-sm ml-1">({destinations[currentSlide].reviews})</span>
                  </div>
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                    {destinations[currentSlide].price}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{destinations[currentSlide].title}</h3>
                <p className="text-white/90 mb-3">{destinations[currentSlide].description}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{destinations[currentSlide].days}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-white text-sm">{destinations[currentSlide].location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {destinations[currentSlide].features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs border border-white/20">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-black text-white font-bold py-3 rounded-lg mt-4 hover:bg-gray-800 transition-colors">
                  Explore {destinations[currentSlide].title}
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
            {destinations.map((_, index) => (
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

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
              {destinations.map((dest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-black">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageErrors[index] ? '/images/gallery/travel_image.jpeg' : dest.imgUrl}
                        alt={dest.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(index)}
                      />
                      
                      <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                        {dest.price}
                      </div>
                      
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1 border border-white/20">
                        <Star className="h-4 w-4 text-gray-500 fill-current" />
                        <span className="font-bold text-white">{dest.rating}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors mb-3">
                        {dest.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm">
                        {dest.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{dest.days}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-black" />
                          <span className="text-sm text-gray-700">{dest.location}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {dest.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-gray-100 text-black rounded-full text-xs font-medium border border-gray-200"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:shadow-lg">
                        Explore {dest.title}
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
