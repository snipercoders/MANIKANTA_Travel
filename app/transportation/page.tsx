// // app/transportation/page.tsx


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
  FaRupeeSign,
  FaClock,
  FaRoad,
  FaCouch,
  FaTemperatureLow,
  FaHeadset,
  FaCheckCircle
} from 'react-icons/fa';
import { GiIndiaGate, GiCarWheel } from 'react-icons/gi';

export default function TransportationPage() {
  const features = [
    {
      icon: <FaShieldAlt className="text-xl sm:text-2xl" />,
      title: "Safe & Insured Vehicles",
      description: "GPS-enabled, regularly serviced vehicles with comprehensive insurance coverage"
    },
    {
      icon: <FaClock className="text-xl sm:text-2xl" />,
      title: "24/7 Availability",
      description: "Round-the-clock booking and support for emergency and planned travel"
    },
    {
      icon: <GiIndiaGate className="text-xl sm:text-2xl" />,
      title: "Pan India Coverage",
      description: "Services available across all 28 states and 8 union territories of India"
    },
    {
      icon: <FaHeadset className="text-xl sm:text-2xl" />,
      title: "Multi-lingual Support",
      description: "English, Hindi, Telugu, Tamil, Kannada, Malayalam speaking support staff"
    }
  ];

  const vehicleTypes = [
    {
      name: "Sedan Cars",
      capacity: "4-5 Passengers",
      icon: <FaCar className="text-blue-500 text-xl sm:text-2xl" />,
      features: ["AC", "Comfort Seats", "Luggage Space"]
    },
    {
      name: "SUV & Innova",
      capacity: "6-7 Passengers",
      icon: <GiCarWheel className="text-green-500 text-xl sm:text-2xl" />,
      features: ["Spacious", "AC", "Family Friendly"]
    },
    {
      name: "Tempo Traveller",
      capacity: "9-20 Passengers",
      icon: <FaUsers className="text-purple-500 text-xl sm:text-2xl" />,
      features: ["AC", "Luxury Seats", "Entertainment"]
    },
    {
      name: "Mini Buses",
      capacity: "21-27 Passengers",
      icon: <FaBus className="text-orange-500 text-xl sm:text-2xl" />,
      features: ["AC/Non-AC", "Comfortable", "Economical"]
    },
    {
      name: "Standard Buses",
      capacity: "35 Passengers",
      icon: <FaBus className="text-red-500 text-xl sm:text-2xl" />,
      features: ["AC Available", "Spacious", "Tour Ready"]
    },
    {
      name: "Large Buses",
      capacity: "45 Passengers",
      icon: <FaBus className="text-indigo-500 text-xl sm:text-2xl" />,
      features: ["Premium AC", "Restroom", "Entertainment"]
    }
  ];

  const popularRoutes = [
    "Bangalore - Sabarimala",
    "Bangalore - Gokarna",
    "Bangalore - Ooty/Coonor",
    "Karnataka roud trip",
    "Karnataka - Kochi - Chennai - Mumbai"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1749745130/dal1_nvzyiq.jpg"
            alt="Transportation Services Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - Fixed class name */}
          <div className="absolute inset-0 bg-gradient-to-b " />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto font-bold text-white">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <GiIndiaGate className="text-yellow-300 text-sm sm:text-base" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              PAN INDIA TRANSPORT SERVICES
            </span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center">
            Premium Vehicle Rentals<br className="hidden sm:block" /> Across India
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-center px-2 sm:px-0">
            Book <span className="font-semibold text-yellow-300">AC/Non-AC Cars</span>,{' '}
            <span className="font-semibold text-yellow-300">Tempo Travellers</span>, and{' '}
            <span className="font-semibold text-yellow-300">Buses</span> for all your travel needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="tel:+919591762419" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg sm:shadow-xl hover:shadow-2xl active:scale-95"
            >
              <FaPhoneAlt className="text-sm sm:text-base" /> 
              <span>Call Now: +91 9591762419</span>
            </a>
            <Link 
              href="#vehicle-fleet" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-red-50Gro text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all active:scale-95"
            >
              <FaCar className="text-sm sm:text-base" /> 
              <span>View Fleet</span>
            </Link>
          </div>
        </div>
      </section>

  
      {/* Vehicle Types Overview */}
      <section className="py-12 sm:py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Comprehensive Vehicle Fleet
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Choose from our wide range of well-maintained vehicles for every travel requirement
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-lg sm:text-xl md:text-2xl">{vehicle.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {vehicle.capacity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Vehicle Categories */}
      <section id="vehicle-fleet" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explore Our Premium Fleet
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              Select the perfect vehicle for your journey across India
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Cars & Tempo Traveller */}
            <Link href="/transportation/cars" className="block">
              <CarCardWithSlideshow/>
            </Link>

            {/* Buses & Mini Buses */}
            <Link href="/transportation/buses" className="block">
              <BusCardWithSlideshow/>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Travel Routes in India
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We regularly service these popular tourist and pilgrimage routes across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2">
                      {route}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Regular services with experienced drivers familiar with the route
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-900 to-red-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <FaStar className="text-yellow-300 text-sm sm:text-base" />
                <span className="font-semibold text-xs sm:text-sm md:text-base">
                  INDIA'S TRUSTED TRAVEL PARTNER
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                Ready to Explore India with Us?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 leading-relaxed px-2 sm:px-0">
                Get instant quotes, check real-time availability, and book your preferred vehicle 
                with just a few clicks. Our travel experts are ready to assist you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 duration-300"
                >
                  Get Free Quote Now
                </Link>
                <a 
                  href="tel:+919876543210" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all active:scale-95"
                >
                  <FaPhoneAlt /> 
                  <span>Call: +91 9591762419</span>
                </a>
              </div>
              
              <p className="mt-8 sm:mt-10 text-xs sm:text-sm opacity-70">
                Instant confirmation • No hidden charges • Flexible cancellation • 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 sm:py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Premium Transportation Services Across India
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong>Manikanta Tour & Travels</strong> offers comprehensive transportation solutions 
                for all your travel needs across India. Whether you're planning a family vacation, 
                corporate trip, pilgrimage tour, or group travel, we have the perfect vehicle for you.
              </p>
              
              <p>
                Our fleet includes well-maintained <strong>AC and Non-AC vehicles</strong> ranging from 
                premium sedans and SUVs for small groups to comfortable tempo travellers and spacious 
                buses for larger parties. All vehicles come with experienced drivers who are familiar 
                with routes across India.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4">
                Key Benefits of Choosing Our Services:
              </h3>
              
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Safety First:</strong> All vehicles are regularly serviced, GPS-enabled, and fully insured
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Transparent Pricing:</strong> No hidden charges with all-inclusive packages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>
                    <strong>Pan India Coverage:</strong> Services available across all major cities and tourist destinations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm sm:text-base" />
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



