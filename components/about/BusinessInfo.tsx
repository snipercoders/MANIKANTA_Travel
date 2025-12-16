// components/about/BusinessInfo.tsx

export default function BusinessInfo() {
  const businessStats = [
    { label: 'Years of Experience', value: '13+' },
    { label: 'Happy Travelers', value: '5,000+' },
    { label: 'Tour Packages', value: '200+' },
    { label: 'Destinations', value: '50+' },
  ];

  const services = [
    {
      title: 'Custom Tour Planning',
      description: 'Personalized itineraries tailored to your preferences and budget',
      icon: '🗺️'
    },
    {
      title: 'Hotel Bookings',
      description: 'Best deals on accommodations from budget to luxury',
      icon: '🏨'
    },
    {
      title: 'Transportation',
      description: 'Reliable vehicles with professional drivers',
      icon: '🚗'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance during your journey',
      icon: '📱'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Business Excellence</h2>
      
      {/* Stats Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">By The Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {businessStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 md:p-6 text-center border border-orange-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow duration-300 hover:border-orange-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-3 mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Expert Guidance</h4>
            <p className="text-gray-600">Local experts with deep destination knowledge</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-3 mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Best Value</h4>
            <p className="text-gray-600">Competitive prices without compromising quality</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-3 mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">Trust & Safety</h4>
            <p className="text-gray-600">Licensed and insured for your peace of mind</p>
          </div>
        </div>
      </div>
    </div>
  );
}