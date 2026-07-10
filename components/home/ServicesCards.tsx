'use client';

import { motion } from 'framer-motion';
import { Car, Bus, Users, MapPin, Shield, Clock, Wifi, Package } from 'lucide-react';
import Link from 'next/link';

export default function ServicesCards() {
  const services = [
    { 
      icon: <Car className="h-10 w-10" />,
      title: "Car Rental Services", 
      desc: "Premium cars, SUVs, and Innovas for comfortable city travel and airport transfers across Bangalore and South India",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-black",
      features: ["4-6 Seaters", "GPS Equipped", "24/7 Available"],
      href: "/transportation/cars"
    },
    { 
      icon: <Bus className="h-10 w-10" />,
      title: "Tempo Travellers & Buses", 
      desc: "12-40 seater vehicles for group tours, pilgrimages, and corporate events across Karnataka, Kerala & Tamil Nadu",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-black",
      features: ["AC/Non-AC", "Luggage Space", "Experienced Drivers"],
      href: "/transportation/buses"
    },
    { 
      icon: <MapPin className="h-10 w-10" />,
      title: "South India Tours", 
      desc: "Complete tour packages covering Karnataka, Kerala, Tamil Nadu, Andhra Pradesh & Goa with comfortable transport",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-black",
      features: ["Custom Itineraries", "Hotel Bookings", "Local Guides"],
      href: "/transportation"
    },
    { 
      icon: <Users className="h-10 w-10" />,
      title: "Corporate Transportation", 
      desc: "Reliable employee transport, client pickups, and business travel solutions for companies across South India",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-black",
      features: ["Monthly Contracts", "GPS Tracking", "Dedicated Fleet"],
      href: "/contact"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-semibold text-sm mb-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Premium Transportation <span className="text-black">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience reliable, comfortable, and safe travel with <strong className="text-black">Manikanta Tour and Travels</strong>. 
              Serving <strong className="text-black">South India</strong> with excellence since 2006.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`
                ${service.bg} 
                border-2 ${service.borderColor}
                rounded-2xl p-6 
                h-full 
                transition-all duration-300 
                hover:shadow-2xl hover:border-black
                relative overflow-hidden
              `}>
                {/* Icon - Black & White */}
                <div className={`
                  w-16 h-16 rounded-xl 
                  flex items-center justify-center 
                  mb-6 
                  bg-gray-100
                  border-2 ${service.borderColor}
                  group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300
                `}>
                  <div className="text-black group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Features - Black & White */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-black border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to Action - Black & White */}
                <Link href={service.href} className="block">
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 cursor-pointer">
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-black transition-colors">
                      Book Now →
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-black group-hover:bg-black group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Hover Effect Line - Black */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}