// // // components/home/BestSellersSection.tsx (renamed for clarity)

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Star, MapPin, Clock, Users, Car, Award } from 'lucide-react';
// import Image from 'next/image';

// const packages = [
//   {
//     title: "Bangalore to Coorg Tour",
//     price: "₹12,999",
//     duration: "3 Days",
//     passengers: "6-8 Persons",
//     vehicle: "Innova Crysta",
//     locations: ["Bangalore", "Madikeri", "Abbey Falls", "Talakaveri"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg",
//     description: "Explore Scotland of India with comfortable stay and sightseeing",
//     rating: 4.8,
//     features: ["Breakfast Included", "Hotel Stay", "Driver Allowance"],
//     bestseller: true
//   },
//   {
//     title: "South India Temple Tour",
//     price: "₹24,999",
//     duration: "7 Days",
//     passengers: "12 Persons",
//     vehicle: "Tempo Traveller",
//     locations: ["Chennai", "Tirupati", "Pondicherry", "Mahabalipuram"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg",
//     description: "Spiritual journey covering major temples of South India",
//     rating: 4.9,
//     features: ["Temple Guide", "AC Vehicle", "Veg Meals"],
//     bestseller: true
//   },
//   {
//     title: "Mysuru-Ooty Luxury Trip",
//     price: "₹18,499",
//     duration: "4 Days",
//     passengers: "4-6 Persons",
//     vehicle: "Toyota Fortuner",
//     locations: ["Mysore Palace", "Ooty Lake", "Botanical Garden", "Tea Estates"],
//     imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg",
//     description: "Royal palaces to hill stations - premium comfort package",
//     rating: 4.7,
//     features: ["Luxury Stay", "Sightseeing", "All Meals"],
//     bestseller: true
//   },
// ];

// export default function BestSellersSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(packages.length).fill(false));

//   const handleImageError = (index: number) => {
//     setImageErrors(prev => {
//       const newErrors = [...prev];
//       newErrors[index] = true;
//       return newErrors;
//     });
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000); // Auto-slide every 2 seconds
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
//             <Award className="h-4 w-4 fill-current" />
//             BEST SELLERS
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
//             Most Popular <span className="text-red-600">Tour Packages</span>
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
//             Book our most-loved tour packages for an unforgettable journey across South India.
//           </p>
//         </motion.div>

//         {/* Mobile Carousel (Hidden on desktop) */}
//         <div className="lg:hidden relative mb-12">
//           <div className="relative h-[550px] rounded-3xl overflow-hidden">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5 }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={imageErrors[currentSlide] ? '/images/gallery/travel_image.jpeg' : packages[currentSlide].imgUrl}
//                 alt={packages[currentSlide].title}
//                 fill
//                 className="object-cover"
//                 sizes="100vw"
//                 onError={() => handleImageError(currentSlide)}
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 {/* Bestseller Badge */}
//                 <div className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
//                   <Star className="h-3 w-3 fill-current" />
//                   BESTSELLER
//                 </div>
                
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                     <span className="text-white font-bold">{packages[currentSlide].rating}</span>
//                   </div>
//                   <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
//                     {packages[currentSlide].price}
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-white mb-2">{packages[currentSlide].title}</h3>
//                 <p className="text-white/90 mb-3">{packages[currentSlide].description}</p>
                
//                 <div className="grid grid-cols-2 gap-3 mb-4">
//                   <div className="flex items-center gap-2">
//                     <Clock className="h-4 w-4 text-white" />
//                     <span className="text-white text-sm">{packages[currentSlide].duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="h-4 w-4 text-white" />
//                     <span className="text-white text-sm">{packages[currentSlide].passengers}</span>
//                   </div>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {packages[currentSlide].features.map((feature, idx) => (
//                     <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
                
//                 <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
//                   Book This Package
//                 </button>
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
//             {packages.map((_, index) => (
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

//         {/* Desktop Layout for 3 Packages */}
//         <div className="hidden lg:block">
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
//               {packages.map((pkg, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="group cursor-pointer"
//                 >
//                   <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 relative h-full">
//                     {/* Bestseller Badge */}
//                     {pkg.bestseller && (
//                       <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
//                         <Star className="h-3 w-3 fill-current" />
//                         BESTSELLER
//                       </div>
//                     )}

//                     {/* Image Container */}
//                     <div className="relative h-64 overflow-hidden">
//                       <Image
//                         src={imageErrors[index] ? '/images/gallery/travel_image.jpeg' : pkg.imgUrl}
//                         alt={pkg.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         onError={() => handleImageError(index)}
//                       />
                      
//                       {/* Price Badge */}
//                       <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
//                         {pkg.price}
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
//                       <div className="flex items-center justify-between mb-3">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
//                           {pkg.title}
//                         </h3>
//                         <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
//                           <Star className="h-4 w-4 text-yellow-500 fill-current" />
//                           <span className="font-bold text-gray-900">{pkg.rating}</span>
//                         </div>
//                       </div>

//                       <p className="text-gray-600 mb-4 text-sm flex-grow">
//                         {pkg.description}
//                       </p>

//                       {/* Features */}
//                       <div className="grid grid-cols-2 gap-3 mb-6">
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-4 w-4 text-gray-500" />
//                           <span className="text-sm text-gray-700">{pkg.duration}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Users className="h-4 w-4 text-gray-500" />
//                           <span className="text-sm text-gray-700">{pkg.passengers}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Car className="h-4 w-4 text-gray-500" />
//                           <span className="text-sm text-gray-700">{pkg.vehicle}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MapPin className="h-4 w-4 text-gray-500" />
//                           <span className="text-sm text-gray-700">{pkg.locations.length} Stops</span>
//                         </div>
//                       </div>

//                       {/* Features Tags */}
//                       <div className="mb-6">
//                         <div className="flex flex-wrap gap-2">
//                           {pkg.features.map((feature, idx) => (
//                             <span 
//                               key={idx} 
//                               className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium border border-red-100"
//                             >
//                               {feature}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Action Button */}
//                       <button className="mt-auto w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 group-hover:shadow-lg">
//                         Book This Package
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* View All Button (Hidden since we only have 3 packages) */}
//         <div className="text-center mt-12">
//           <p className="text-gray-600 mb-4">Need a custom package? Contact us for personalized tours!</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a 
//               href="tel:+919591762419" 
//               className="bg-red-600 text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               Call for Custom Package
//             </a>
//             <button className="bg-white border-2 border-red-600 text-red-600 font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-colors">
//               View All Services
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, Car, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    title: "Bangalore to Coorg Tour",
    price: "₹12,999",
    duration: "3 Days",
    passengers: "6-8 Persons",
    vehicle: "Innova Crysta",
    locations: ["Bangalore", "Madikeri", "Abbey Falls", "Talakaveri"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg",
    description: "Explore Scotland of India with comfortable stay and sightseeing",
    rating: 4.8,
    features: ["Breakfast Included", "Hotel Stay", "Driver Allowance"],
    bestseller: true
  },
  {
    title: "South India Temple Tour",
    price: "₹24,999",
    duration: "7 Days",
    passengers: "12 Persons",
    vehicle: "Tempo Traveller",
    locations: ["Chennai", "Tirupati", "Pondicherry", "Mahabalipuram"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg",
    description: "Spiritual journey covering major temples of South India",
    rating: 4.9,
    features: ["Temple Guide", "AC Vehicle", "Veg Meals"],
    bestseller: true
  },
  {
    title: "Mysuru-Ooty Luxury Trip",
    price: "₹18,499",
    duration: "4 Days",
    passengers: "4-6 Persons",
    vehicle: "Toyota Fortuner",
    locations: ["Mysore Palace", "Ooty Lake", "Botanical Garden", "Tea Estates"],
    imgUrl: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg",
    description: "Royal palaces to hill stations - premium comfort package",
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
            <Award className="h-4 w-4 fill-current" />
            BEST SELLERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Most Popular <span className="text-red-600">Tour Packages</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Book our most-loved tour packages for an unforgettable journey across South India.
          </p>
        </motion.div>

        {/* Mobile Carousel (Hidden on desktop) */}
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
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Bestseller Badge */}
                <div className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <Star className="h-3 w-3 fill-current" />
                  BESTSELLER
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-bold">{packages[currentSlide].rating}</span>
                  </div>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
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
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Book This Package
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
            {packages.map((_, index) => (
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

        {/* Desktop Layout for 3 Packages */}
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 relative h-full">
                    {/* Bestseller Badge */}
                    {pkg.bestseller && (
                      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">
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
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-900">{pkg.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm flex-grow">
                        {pkg.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{pkg.passengers}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{pkg.vehicle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{pkg.locations.length} Stops</span>
                        </div>
                      </div>

                      {/* Features Tags */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {pkg.features.map((feature, idx) => (
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
                      <button className="mt-auto w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 group-hover:shadow-lg">
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