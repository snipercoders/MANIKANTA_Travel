
 // components/about/BusinessInfo.tsx


 export default function BusinessInfo() {
  const businessStats = [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Happy Travelers', value: '10,000+' },
    { label: 'Vehicles', value: '50+' },
    { label: 'Destinations', value: '100+' },
  ];

  const services = [
    {
      title: 'Tour Packages',
      description: 'Customized itineraries for individuals, families, and groups',
      icon: '🗺️'
    },
    {
      title: 'Transportation',
      description: 'Cars, Tempo Travellers, Buses for all travel needs',
      icon: '🚗'
    },
    {
      title: 'Hotel Bookings',
      description: 'Best deals on accommodations across South India',
      icon: '🏨'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance during your journey',
      icon: '📱'
    },
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Our Business Excellence</h2>
      
      {/* Stats Section */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">By The Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {businessStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-red-100"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 hover:border-red-200"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 md:mb-4">{service.icon}</div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="inline-block bg-red-100 rounded-full p-2 sm:p-3 mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl">⭐</span>
            </div>
            <h4 className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-1 sm:mb-2">Expert Guidance</h4>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Since 2006 with deep South India destination knowledge</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-red-100 rounded-full p-2 sm:p-3 mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl">💎</span>
            </div>
            <h4 className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-1 sm:mb-2">Best Value</h4>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Competitive prices without compromising quality and safety</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-red-100 rounded-full p-2 sm:p-3 mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-1 sm:mb-2">Trust & Safety</h4>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">Licensed, insured, and experienced drivers for your peace of mind</p>
          </div>
        </div>
      </div>

      {/* Founder's Note */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-100">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-white">👑</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2">Founder's Promise</h4>
              <p className="text-gray-700 text-sm sm:text-base italic">
                "Since 2006, our commitment has been to provide safe, reliable, and memorable travel experiences. 
                Your satisfaction is our success."
              </p>
              <p className="text-red-600 font-medium mt-2 text-sm sm:text-base">— Ashok R, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}