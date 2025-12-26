

// // // components/home/TopDestinations.tsx


// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Star, MapPin, Clock, Users } from 'lucide-react';

// const destinations = [
//   {
//     title: "Coorg - Scotland of India",
//     days: "3 Days Trip",
//     price: "₹12,999",
//     rating: 4.8,
//     reviews: "3.4k reviews",
//     description: "Coffee plantations, waterfalls, and misty mountains",
//     location: "Karnataka",
//     features: ["Coffee Estate Visit", "Waterfalls", "Trekking"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg"
//   },
//   {
//     title: "Munnar - Tea Gardens",
//     days: "4 Days Trip",
//     price: "₹14,999",
//     rating: 4.9,
//     reviews: "2.8k reviews",
//     description: "Rolling tea plantations and cool climate",
//     location: "Kerala",
//     features: ["Tea Estate Tour", "Eravikulam National Park", "Mattupetty Dam"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg"
//   },
//   {
//     title: "Chikmagalur - Hill Station",
//     days: "3 Days Trip",
//     price: "₹11,999",
//     rating: 4.7,
//     reviews: "1.9k reviews",
//     description: "Coffee plantations and scenic beauty",
//     location: "Karnataka",
//     features: ["Mullayanagiri Trek", "Coffee Museum", "Waterfalls"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg"
//   },
 
// ];

// export default function TopDestinations() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(destinations.length).fill(false));

//   const handleImageError = (index: number) => {
//     setImageErrors(prev => {
//       const newErrors = [...prev];
//       newErrors[index] = true;
//       return newErrors;
//     });
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16 lg:mb-20"
//         >
//           <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
//             <MapPin className="h-4 w-4" />
//             POPULAR DESTINATIONS
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
//             Top <span className="text-red-600">Destinations</span>
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover the most beautiful destinations in South India with our curated travel packages.
//           </p>
//         </motion.div>

//         {/* Mobile Carousel (Hidden on desktop) */}
//         <div className="lg:hidden relative mb-12">
//           <div className="relative h-[500px] rounded-3xl overflow-hidden">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={imageErrors[currentSlide] ? '/images/gallery/travel_image.jpeg' : destinations[currentSlide].imgUrl}
//                 alt={destinations[currentSlide].title}
//                 fill
//                 className="object-cover"
//                 sizes="100vw"
//                 onError={() => handleImageError(currentSlide)}
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                     <span className="text-white font-bold">{destinations[currentSlide].rating}</span>
//                     <span className="text-white/80 text-sm ml-1">({destinations[currentSlide].reviews})</span>
//                   </div>
//                   <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
//                     {destinations[currentSlide].price}
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-white mb-2">{destinations[currentSlide].title}</h3>
//                 <p className="text-white/90 mb-3">{destinations[currentSlide].description}</p>
                
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4 text-white" />
//                     <span className="text-white text-sm">{destinations[currentSlide].days}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <MapPin className="h-4 w-4 text-white" />
//                     <span className="text-white text-sm">{destinations[currentSlide].location}</span>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2">
//                   {destinations[currentSlide].features.map((feature, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Navigation Arrows (Mobile) */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
//           >
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
          
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
//           >
//             <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>

//           {/* Dots Indicator (Mobile) */}
//           <div className="flex justify-center gap-2 mt-6">
//             {destinations.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   index === currentSlide ? 'bg-red-600 w-6' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Desktop Grid (Hidden on mobile) */}
//         <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {destinations.slice(0, 6).map((dest, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group cursor-pointer"
//             >
//               <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden">
//                   <Image
//                     src={imageErrors[index] ? '/images/gallery/travel_image.jpeg' : dest.imgUrl}
//                     alt={dest.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     onError={() => handleImageError(index)}
//                   />
                  
//                   {/* Price Badge */}
//                   <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
//                     {dest.price}
//                   </div>
                  
//                   {/* Rating Badge */}
//                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1">
//                     <Star className="h-4 w-4 text-yellow-500 fill-current" />
//                     <span className="font-bold text-gray-900">{dest.rating}</span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-3">
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
//                       {dest.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 text-sm">
//                     {dest.description}
//                   </p>

//                   {/* Features */}
//                   <div className="grid grid-cols-2 gap-3 mb-6">
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-4 w-4 text-gray-500" />
//                       <span className="text-sm text-gray-700">{dest.days}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin className="h-4 w-4 text-gray-500" />
//                       <span className="text-sm text-gray-700">{dest.location}</span>
//                     </div>
//                   </div>

//                   {/* Features Tags */}
//                   <div className="mb-6">
//                     <div className="flex flex-wrap gap-2">
//                       {dest.features.map((feature, idx) => (
//                         <span 
//                           key={idx} 
//                           className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-100"
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Action Button */}
//                   <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 group-hover:shadow-lg">
//                     Explore {dest.title}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-colors">
//             View All Destinations
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
















'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    title: "Coorg - Scotland of India",
    days: "3 Days Trip",
    price: "₹12,999",
    rating: 4.8,
    reviews: "3.4k reviews",
    description: "Coffee plantations, waterfalls, and misty mountains",
    location: "Karnataka",
    features: ["Coffee Estate Visit", "Waterfalls", "Trekking"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg"
  },
  {
    title: "Munnar - Tea Gardens",
    days: "4 Days Trip",
    price: "₹14,999",
    rating: 4.9,
    reviews: "2.8k reviews",
    description: "Rolling tea plantations and cool climate",
    location: "Kerala",
    features: ["Tea Estate Tour", "Eravikulam National Park", "Mattupetty Dam"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg"
  },
  {
    title: "Chikmagalur - Hill Station",
    days: "3 Days Trip",
    price: "₹11,999",
    rating: 4.7,
    reviews: "1.9k reviews",
    description: "Coffee plantations and scenic beauty",
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <MapPin className="h-4 w-4" />
            POPULAR DESTINATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Top <span className="text-red-600">Destinations</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most beautiful destinations in South India with our curated travel packages.
          </p>
        </motion.div>

        {/* Mobile Carousel (Hidden on desktop) */}
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
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-bold">{destinations[currentSlide].rating}</span>
                    <span className="text-white/80 text-sm ml-1">({destinations[currentSlide].reviews})</span>
                  </div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg mt-4 hover:bg-red-700 transition-colors">
                  Explore {destinations[currentSlide].title}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows (Mobile) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator (Mobile) */}
          <div className="flex justify-center gap-2 mt-6">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-red-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (Hidden on mobile) */}
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageErrors[index] ? '/images/gallery/travel_image.jpeg' : dest.imgUrl}
                        alt={dest.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(index)}
                      />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                        {dest.price}
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-bold text-gray-900">{dest.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                          {dest.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm">
                        {dest.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{dest.days}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{dest.location}</span>
                        </div>
                      </div>

                      {/* Features Tags */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {dest.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-100"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 group-hover:shadow-lg">
                        Explore {dest.title}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-colors">
            View All Destinations
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}