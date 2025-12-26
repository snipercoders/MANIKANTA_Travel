//components/home/InfoCards.tsx

'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, MapPin, CheckCircle, Star, Award, Phone } from 'lucide-react';

export default function InfoCards() {
  const infoCards = [
    { 
      icon: <Shield className="h-10 w-10" />,
      title: "Safe & Secure Travel", 
      desc: "All vehicles sanitized, GPS tracked, and insured for passenger safety",
      gradient: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
      stats: "100% Safety Record",
      color: "text-red-600"
    },
    { 
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Availability", 
      desc: "Round-the-clock services for emergencies, airport drops, and night travel",
      gradient: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      stats: "Instant Booking",
      color: "text-orange-600"
    },
    { 
      icon: <Users className="h-10 w-10" />,
      title: "Experienced Team", 
      desc: "Professional drivers with 10+ years experience and local route knowledge",
      gradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
      stats: "5000+ Trips",
      color: "text-amber-600"
    },
    { 
      icon: <MapPin className="h-10 w-10" />,
      title: "Pan South India", 
      desc: "Services across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh & Goa",
      gradient: "from-yellow-50 to-green-50",
      borderColor: "border-yellow-200",
      stats: "50+ Cities",
      color: "text-green-600"
    },
  ];

  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, text: "No Hidden Charges" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Instant Confirmation" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Flexible Cancellation" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Multiple Payment Options" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Live Vehicle Tracking" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "24/7 Customer Support" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <Award className="h-4 w-4" />
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 px-4">
            Your Trusted <span className="text-red-600">Travel Partner</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            With 18+ years of excellence, we provide reliable, comfortable, and safe transportation 
            solutions across South India.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`
                bg-gradient-to-br ${card.gradient}
                border-2 ${card.borderColor}
                rounded-2xl p-5 sm:p-6 lg:p-8
                h-full
                transition-all duration-300
                hover:shadow-2xl hover:border-red-300
                relative overflow-hidden
              `}>
                {/* Icon */}
                <div className={`
                  w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                  rounded-xl sm:rounded-2xl
                  flex items-center justify-center 
                  mb-4 sm:mb-6
                  bg-white/50 backdrop-blur-sm
                  border ${card.borderColor}
                  group-hover:scale-110 group-hover:bg-white/70
                  transition-all duration-300
                `}>
                  <div className="text-red-600">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-700 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {card.desc}
                </p>

                {/* Stats */}
                <div className={`
                  inline-block px-3 sm:px-4 py-1.5 sm:py-2 
                  rounded-full text-sm sm:text-base font-bold
                  ${card.color}
                  bg-white/70 backdrop-blur-sm
                  border ${card.borderColor}
                `}>
                  {card.stats}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10">
                  <Star className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
       
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
        
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
        
        </motion.div>
      </div>
    </section>
  );
}