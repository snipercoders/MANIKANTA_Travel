// components/home/TopDestinations.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: "Rome, Italy",
    days: "10 Days Trip",
    price: "$2,495",
    rating: 4.8,
    reviews: "3.4k reviews"
  },
  {
    title: "Paris, France",
    days: "7 Days Trip",
    price: "$1,995",
    rating: 4.9,
    reviews: "2.8k reviews"
  },
  {
    title: "Tokyo, Japan",
    days: "12 Days Trip",
    price: "$3,295",
    rating: 4.7,
    reviews: "1.9k reviews"
  },
];

const fallbackImages = [
  'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
];

export default function TopDestinations() {
  const [imageUrls, setImageUrls] = useState(
    Array(destinations.length).fill('/images/gallery/travel_image.jpeg')
  );

  const handleImageError = (index: number) => {
    const newUrls = [...imageUrls];
    newUrls[index] = fallbackImages[index];
    setImageUrls(newUrls);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Top Destinations
          </h2>
          <p className="text-gray-600 text-lg">
            Discover amazing places with exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100">
                <div className="relative h-64">
                  <Image 
                    src={imageUrls[i]} 
                    alt={d.title} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(i)}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{d.title}</h3>
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                      {d.days}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore the beauty of {d.title} with our exclusive package
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{d.price}</span>
                      <span className="text-gray-500">/person</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {"★".repeat(Math.floor(d.rating))}
                      </div>
                      <span className="text-gray-700">{d.rating} ({d.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}