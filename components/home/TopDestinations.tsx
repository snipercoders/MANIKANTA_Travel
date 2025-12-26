// // components/home/TopDestinations.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const destinations = [
//   {
//     title: "Rome, Italy",
//     days: "10 Days Trip",
//     price: "$2,495",
//     rating: 4.8,
//     reviews: "3.4k reviews"
//   },
//   {
//     title: "Paris, France",
//     days: "7 Days Trip",
//     price: "$1,995",
//     rating: 4.9,
//     reviews: "2.8k reviews"
//   },
//   {
//     title: "Tokyo, Japan",
//     days: "12 Days Trip",
//     price: "$3,295",
//     rating: 4.7,
//     reviews: "1.9k reviews"
//   },
// ];

// const fallbackImages = [
//   'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
//   'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
//   'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
// ];

// export default function TopDestinations() {
//   const [imageUrls, setImageUrls] = useState(
//     Array(destinations.length).fill('/images/gallery/travel_image.jpeg')
//   );

//   const handleImageError = (index: number) => {
//     const newUrls = [...imageUrls];
//     newUrls[index] = fallbackImages[index];
//     setImageUrls(newUrls);
//   };

//   return (
//     <section className="py-20 px-6 bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//             Top Destinations
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Discover amazing places with exclusive offers
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map((d, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//             >
//               <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100">
//                 <div className="relative h-64">
//                   <Image 
//                     src={imageUrls[i]} 
//                     alt={d.title} 
//                     fill 
//                     className="object-cover" 
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     onError={() => handleImageError(i)}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-2xl font-bold text-gray-900">{d.title}</h3>
//                     <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full font-semibold">
//                       {d.days}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     Explore the beauty of {d.title} with our exclusive package
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <span className="text-3xl font-bold text-gray-900">{d.price}</span>
//                       <span className="text-gray-500">/person</span>
//                     </div>
//                     <div className="flex items-center">
//                       <div className="flex text-yellow-400 mr-2">
//                         {"★".repeat(Math.floor(d.rating))}
//                       </div>
//                       <span className="text-gray-700">{d.rating} ({d.reviews})</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














// components/home/TopDestinations.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: "Coorg",
    days: "10 Days Trip",
    price: "₹4750",
    rating: 4.8,
    reviews: "3.4k reviews"
  },
  {
    title: "Munnar",
    days: "7 Days Trip",
    price: "₹6650",
    rating: 4.9,
    reviews: "2.8k reviews"
  },
  {
    title: "Chikmagalur",
    days: "12 Days Trip",
    price: "₹4750",
    rating: 4.7,
    reviews: "1.9k reviews"
  },
];

const destinationImages = [
  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891189/licensed-image_imwjve.jpg', // Rome Colosseum at sunset
  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891271/licensed-image_hmjx09.jpg', // Paris Eiffel Tower
  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765891406/hebbe-falls_ejnwzi.jpg', // Tokyo skyline with Mount Fuji
];

export default function TopDestinations() {
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(destinations.length).fill(false));

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-red-900">
            Top Destinations
          </h2>
        </div>

        {/* Horizontal Carousel - matching the Best-Sellers style */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hidden md:flex">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hidden md:flex">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-6 px-4 ">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                className="snap-center shrink-0 hover:shadow-[0_35px_60px_rgba(239,68,68,0.4)]
              hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                
              >
                <div className="w-80 md:w-96 rounded-3xl overflow-hidden shadow-2xl bg-white transition-all duration-300 hover:shadow-3xl">
                  <div className="relative h-96">
                    <Image
                      src={imageErrors[i] ? '/images/gallery/travel_image.jpeg' : destinationImages[i]}
                      alt={dest.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 384px"
                      onError={() => handleImageError(i)}
                    />

                    

                    {/* Overlay Gradient + Content */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 pt-24">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {dest.title}
                      </h3>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-white text-2xl font-bold">
                            From {dest.price}
                          </p>
                          <p className="text-gray-200 text-sm">per person</p>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center justify-end mb-1">
                            <span className="text-yellow-400 text-xl mr-2">
                              {'★'.repeat(Math.floor(dest.rating))}
                              {dest.rating % 1 !== 0 && '½'}
                            </span>
                            <span className="text-white font-semibold">{dest.rating}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{dest.reviews}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}