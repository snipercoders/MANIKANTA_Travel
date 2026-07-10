'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Users, MapPin, CheckCircle, Star, Award, Phone } from 'lucide-react';

export default function InfoCards() {
  const infoCards = [
    { 
      icon: <Shield className="h-10 w-10" />,
      title: "Safe & Secure Travel", 
      desc: "All vehicles sanitized, GPS tracked, and insured for passenger safety across South India",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      stats: "100% Safety Record",
      color: "text-black",
      bgHover: "hover:border-black"
    },
    { 
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Availability", 
      desc: "Round-the-clock services for emergencies, airport drops, and night travel in Bangalore",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      stats: "Instant Booking",
      color: "text-black",
      bgHover: "hover:border-black"
    },
    { 
      icon: <Users className="h-10 w-10" />,
      title: "Experienced Team", 
      desc: "Professional drivers with 10+ years experience and local route knowledge across South India",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      stats: "5000+ Trips",
      color: "text-black",
      bgHover: "hover:border-black"
    },
    { 
      icon: <MapPin className="h-10 w-10" />,
      title: "Pan South India", 
      desc: "Services across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana & Goa",
      bg: "bg-gray-50",
      borderColor: "border-gray-200",
      stats: "50+ Cities",
      color: "text-black",
      bgHover: "hover:border-black"
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Black & White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <Award className="h-4 w-4" />
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6 px-4">
            Your Trusted <span className="text-black">Travel Partner</span> in South India
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            With <strong className="text-black">18+ years of excellence</strong>, we provide reliable, comfortable, and safe transportation 
            solutions across <strong className="text-black">Karnataka, Kerala, Tamil Nadu, Andhra Pradesh & Goa</strong>.
          </p>
        </motion.div>

        {/* Info Cards Grid - Black & White */}
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
                bg-white
                border-2 ${card.borderColor}
                rounded-2xl p-5 sm:p-6 lg:p-8
                h-full
                transition-all duration-300
                hover:shadow-2xl ${card.bgHover}
                relative overflow-hidden
              `}>
                {/* Icon - Black & White */}
                <div className={`
                  w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                  rounded-xl sm:rounded-2xl
                  flex items-center justify-center 
                  mb-4 sm:mb-6
                  bg-gray-100
                  border-2 ${card.borderColor}
                  group-hover:scale-110 group-hover:bg-black group-hover:text-white
                  transition-all duration-300
                `}>
                  <div className="text-black group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {card.desc}
                </p>

                {/* Stats - Black & White */}
                <div className={`
                  inline-block px-3 sm:px-4 py-1.5 sm:py-2 
                  rounded-full text-sm sm:text-base font-bold
                  ${card.color}
                  bg-gray-100
                  border ${card.borderColor}
                `}>
                  {card.stats}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10">
                  <Star className="w-full h-full text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section - Black & White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Why <span className="text-gray-300">Manikanta Tours</span>?
            </h3>
            <p className="text-gray-400 mt-2">18+ Years of Trusted Service Across South India</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-white mb-2">{feature.icon}</div>
                <span className="text-white text-xs sm:text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Section - Black & White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-black transition shadow-md hover:shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-black">18+</div>
              <div className="text-gray-600 text-sm mt-1">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-black transition shadow-md hover:shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-black">50+</div>
              <div className="text-gray-600 text-sm mt-1">Vehicle Fleet</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-black transition shadow-md hover:shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-black">50K+</div>
              <div className="text-gray-600 text-sm mt-1">Happy Customers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-black transition shadow-md hover:shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-black">25+</div>
              <div className="text-gray-600 text-sm mt-1">Destinations</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Black & White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-black rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Book Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for the best travel experience across South India.
              We're available 24/7 for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call +91 95917 62419
              </a>
              <a
                href="https://wa.me/919591762419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white font-bold px-8 py-3 rounded-full hover:bg-gray-700 transition shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}