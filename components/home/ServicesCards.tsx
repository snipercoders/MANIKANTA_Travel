// components/home/ServicesCards.tsx
'use client';

import { motion } from 'framer-motion';

export default function ServicesCards() {
  const services = [
    { 
      icon: "🌤️", 
      title: "Calculated Weather", 
      desc: "Best time to travel with accurate forecasts",
      bg: "bg-gradient-to-br from-orange-100 to-amber-100"
    },
    { 
      icon: "✈️", 
      title: "Best Flights", 
      desc: "Quick & easy flight booking options",
      bg: "bg-gradient-to-br from-amber-100 to-yellow-100"
    },
    { 
      icon: "🎤", 
      title: "Local Events", 
      desc: "Experience cultural festivals & events",
      bg: "bg-gradient-to-br from-pink-100 to-rose-100"
    },
    { 
      icon: "⚙️", 
      title: "Customization", 
      desc: "Tailored trips for your preferences",
      bg: "bg-gradient-to-br from-orange-50 to-pink-50"
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      <div className="text-center">
        <p className="text-orange-600 uppercase font-semibold mb-4 tracking-wider">
          Category
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-16">
          We Offer Best Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={`${s.bg} rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm`}>
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-orange-200">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
                  Learn more
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}