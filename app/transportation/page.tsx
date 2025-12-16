// app/transportation/page.tsx

import Link from 'next/link';
import Image from 'next/image';
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
import { IoMdArrowForward } from 'react-icons/io';

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
    "Delhi - Agra - Jaipur (Golden Triangle)",
    "Hyderabad - Tirupati - Chennai",
    "Bangalore - Goa - Mumbai",
    "Kolkata - Puri - Bhubaneswar",
    "Kerala Backwaters Tour",
    "Leh Ladakh Adventure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white pt-16 pb-20 md:pt-24 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
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
              href="tel:+919876543210" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg sm:shadow-xl hover:shadow-2xl active:scale-95"
            >
              <FaPhoneAlt className="text-sm sm:text-base" /> 
              <span>Call Now: +91 9876543210</span>
            </a>
            <Link 
              href="#vehicle-fleet" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all active:scale-95"
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
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 active:scale-[0.99]">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src="/images/transportation/cars-tempo.png"
                    alt="AC Cars, SUVs, and Tempo Travellers for Hire in India"
                    fill
                    className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm inline-flex items-center gap-1 sm:gap-2">
                      <FaCar className="text-xs sm:text-sm" /> 
                      <span>4-20 Seater Vehicles</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 md:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
                      <FaCar className="text-xl sm:text-2xl md:text-3xl text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        Cars & Tempo Traveller
                      </h3>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">
                        Ideal for Families & Small Groups
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    Perfect for family vacations, corporate travel, airport transfers, and city tours. 
                    Our fleet includes premium sedans, spacious SUVs, comfortable Innovas, and luxury tempo travellers.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <FaRupeeSign className="text-green-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Transparent Pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTemperatureLow className="text-blue-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">AC Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCouch className="text-purple-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Luxury Interiors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRoad className="text-orange-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">All India Tours</span>
                    </div>
                  </div>
                  
                  <div className="text-blue-600 font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all">
                    <span>View Car Fleet Details</span>
                    <IoMdArrowForward className="text-base sm:text-lg group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Buses & Mini Buses */}
            <Link href="/transportation/buses" className="block">
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 active:scale-[0.99]">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src="/images/transportation/bus-fleet.png"
                    alt="AC/Non-AC Buses and Mini Buses for Group Travel in India"
                    fill
                    className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm inline-flex items-center gap-1 sm:gap-2">
                      <FaBus className="text-xs sm:text-sm" /> 
                      <span>21-45 Seater Buses</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 md:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                      <FaBus className="text-xl sm:text-2xl md:text-3xl text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        Buses & Mini Buses
                      </h3>
                      <p className="text-green-600 font-medium text-sm sm:text-base">
                        Perfect for Large Groups & Events
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    Ideal for pilgrimage tours, school trips, corporate events, wedding groups, and interstate travel. 
                    Choose from our range of AC/Non-AC buses equipped with modern amenities for comfortable long journeys.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-indigo-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Large Capacity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Premium Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaShieldAlt className="text-red-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Safe Travel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-500 text-sm sm:text-base" />
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Pan India Routes</span>
                    </div>
                  </div>
                  
                  <div className="text-green-600 font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 group-hover:gap-3 sm:group-hover:gap-4 transition-all">
                    <span>View Bus Fleet Details</span>
                    <IoMdArrowForward className="text-base sm:text-lg group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
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
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white text-center">
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
                  <span>Call: +91 9876543210</span>
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