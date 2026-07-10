"use client"

import Link from 'next/link';
import Image from 'next/image';
import CarCardWithSlideshow from '@/components/transportation/carCarSlideshow';
import BusCardWithSlideshow from '@/components/transportation/busCarSlideshow';
import { 
  FaCar, 
  FaBus, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaShieldAlt, 
  FaPhoneAlt, 
  FaStar, 
  FaClock,
  FaHeadset,
  FaCheckCircle
} from 'react-icons/fa';
import { GiIndiaGate, GiCarWheel } from 'react-icons/gi';

export default function TransportationPage() {
  const features = [
    {
      icon: <FaShieldAlt className="text-lg sm:text-xl md:text-2xl" />,
      title: "Safe & Insured Vehicles",
      description: "GPS-enabled, regularly serviced vehicles with comprehensive insurance coverage"
    },
    {
      icon: <FaClock className="text-lg sm:text-xl md:text-2xl" />,
      title: "24/7 Availability",
      description: "Round-the-clock booking and support for emergency and planned travel"
    },
    {
      icon: <GiIndiaGate className="text-lg sm:text-xl md:text-2xl" />,
      title: "Pan India Coverage",
      description: "Services available across all 28 states and 8 union territories of India"
    },
    {
      icon: <FaHeadset className="text-lg sm:text-xl md:text-2xl" />,
      title: "Multi-lingual Support",
      description: "English, Hindi, Telugu, Tamil, Kannada, Malayalam speaking support staff"
    }
  ];

  const vehicleTypes = [
    {
      name: "Sedan Cars",
      capacity: "4-5 Passengers",
      icon: <FaCar className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["AC", "Comfort Seats", "Luggage Space"]
    },
    {
      name: "SUV & Innova",
      capacity: "6-7 Passengers",
      icon: <GiCarWheel className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["Spacious", "AC", "Family Friendly"]
    },
    {
      name: "Tempo Traveller",
      capacity: "9-20 Passengers",
      icon: <FaUsers className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["AC", "Luxury Seats", "Entertainment"]
    },
    {
      name: "Mini Buses",
      capacity: "21-27 Passengers",
      icon: <FaBus className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["AC/Non-AC", "Comfortable", "Economical"]
    },
    {
      name: "Standard Buses",
      capacity: "35 Passengers",
      icon: <FaBus className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["AC Available", "Spacious", "Tour Ready"]
    },
    {
      name: "Large Buses",
      capacity: "45 Passengers",
      icon: <FaBus className="text-black text-lg sm:text-xl md:text-2xl" />,
      features: ["Premium AC", "Restroom", "Entertainment"]
    }
  ];

  const popularRoutes = [
    "Bangalore - Sabarimala",
    "Bangalore - Gokarna",
    "Bangalore - Ooty/Coonor",
    "Karnataka Round Trip",
    "Karnataka - Kochi - Chennai - Mumbai"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749745130/dal1_nvzyiq.jpg"
            alt="Transportation Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative max-w-7xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 md:mb-6 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
            <GiIndiaGate className="text-white text-sm sm:text-base" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
              PAN INDIA TRANSPORT SERVICES
            </span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-center">
            Premium Vehicle Rentals<br className="hidden sm:block" /> Across India
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed text-center px-2 sm:px-0">
            Book <span className="font-semibold text-white">AC/Non-AC Cars</span>,{' '}
            <span className="font-semibold text-white">Tempo Travellers</span>, and{' '}
            <span className="font-semibold text-white">Buses</span> for all your travel needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="tel:+919591762419" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-2xl active:scale-95"
            >
              <FaPhoneAlt className="text-sm sm:text-base" /> 
              <span>Call Now: +91 9591762419</span>
            </a>
            <Link 
              href="#vehicle-fleet" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white/50 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              <FaCar className="text-sm sm:text-base" /> 
              <span>View Fleet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Types Overview - Black & White - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              <FaBus className="h-3 w-3 sm:h-4 sm:w-4" />
              OUR FLEET
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
              Comprehensive Vehicle Fleet
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Choose from our wide range of well-maintained vehicles for every travel requirement
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-black">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-lg sm:text-xl md:text-2xl">{vehicle.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-black">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {vehicle.capacity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-black text-[10px] sm:text-xs font-medium rounded-full border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Vehicle Categories - Responsive */}
      <section id="vehicle-fleet" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
              Explore Our Premium Fleet
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Select the perfect vehicle for your journey across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <Link href="/transportation/cars" className="block">
              <CarCardWithSlideshow/>
            </Link>
            <Link href="/transportation/buses" className="block">
              <BusCardWithSlideshow/>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes Section - Black & White - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              <FaMapMarkerAlt className="h-3 w-3 sm:h-4 sm:w-4" />
              POPULAR ROUTES
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Popular Travel Routes in India
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
              We regularly service these popular tourist and pilgrimage routes across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/30 transition">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-base sm:text-lg md:text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-1">
                      {route}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Regular services with experienced drivers familiar with the route
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Black & White - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 md:mb-6 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full">
                <FaStar className="text-gray-300 text-sm sm:text-base" />
                <span className="font-semibold text-[10px] sm:text-xs md:text-sm">
                  INDIA'S TRUSTED TRAVEL PARTNER
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
                Ready to Explore India with Us?
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-300 leading-relaxed px-2">
                Get instant quotes, check real-time availability, and book your preferred vehicle 
                with just a few clicks. Our travel experts are ready to assist you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black font-bold px-5 sm:px-6 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 duration-300"
                >
                  Get Free Quote Now
                </Link>
                <a 
                  href="tel:+919591762419" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white font-bold px-5 sm:px-6 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all active:scale-95"
                >
                  <FaPhoneAlt /> 
                  <span>Call: +91 9591762419</span>
                </a>
              </div>
              
              <p className="mt-6 sm:mt-8 md:mt-10 text-[10px] sm:text-xs text-gray-400">
                Instant confirmation â€¢ No hidden charges â€¢ Flexible cancellation â€¢ 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center">
              Premium Transportation Services Across India
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-black">Manikanta Tour & Travels</strong> offers comprehensive transportation solutions 
                for all your travel needs across India. Whether you're planning a family vacation, 
                corporate trip, pilgrimage tour, or group travel, we have the perfect vehicle for you.
              </p>
              
              <p>
                Our fleet includes well-maintained <strong>AC and Non-AC vehicles</strong> ranging from 
                premium sedans and SUVs for small groups to comfortable tempo travellers and spacious 
                buses for larger parties. All vehicles come with experienced drivers who are familiar 
                with routes across India.
              </p>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-6 sm:mt-8 md:mt-10 mb-3 sm:mb-4">
                Key Benefits of Choosing Our Services:
              </h3>
              
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-black mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Safety First:</strong> All vehicles are regularly serviced, GPS-enabled, and fully insured
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-black mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Transparent Pricing:</strong> No hidden charges with all-inclusive packages
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-black mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Pan India Coverage:</strong> Services available across all major cities and tourist destinations
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-black mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>24/7 Support:</strong> Multi-lingual customer support available round the clock
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
