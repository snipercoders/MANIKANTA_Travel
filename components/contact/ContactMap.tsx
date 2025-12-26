


// // // components/contact/ContactMap.tsx


"use client";

export default function ContactMap() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-200">
      <div className="p-4 sm:p-6">
        <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">Find Our Office</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
          Visit our headquarters in Agara, Bangalore for in-person consultations and bookings.
          Established in 2006, serving travelers for over 18 years.
        </p>
        
        {/* Business Badge */}
        <div className="bg-white p-3 rounded-lg border border-red-200 mb-4 sm:mb-6">
          <p className="text-red-800 text-sm sm:text-base font-medium">
            <span className="font-bold">📍 Office Address:</span> Agara, Kanakapura Main Road, Bangalore – 560082
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Managed by Founder: <span className="font-semibold">Ashok R</span>
          </p>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="relative h-48 sm:h-64 bg-gradient-to-r from-red-100 to-amber-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">📍</span>
            </div>
            <p className="font-medium text-gray-900 text-sm sm:text-base">Agara Office, Bangalore</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Kanakapura Main Road</p>
          </div>
        </div>
        
        {/* Map Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
            </div>
            <div className="w-1 h-4 sm:h-6 bg-red-500 mx-auto -mt-1"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 bg-gray-50">
        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">Office Address</h4>
          <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200">
            <p className="text-red-800 text-sm sm:text-base leading-relaxed">
              Agara, Kanakapura Main Road<br />
              Bangalore – 560082<br />
              Karnataka, India
            </p>
            <div className="flex items-center gap-2 mt-2 sm:mt-3">
              <span className="text-red-500 text-sm sm:text-base">👑</span>
              <p className="text-xs sm:text-sm text-gray-600">Managed by Founder: Ashok R</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Latitude</p>
            <p className="font-medium text-gray-900 text-sm sm:text-base">12.91° N</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">Longitude</p>
            <p className="font-medium text-gray-900 text-sm sm:text-base">77.58° E</p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6">
          <button className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-red-800 to-gray-900 text-white font-medium rounded-lg sm:rounded-xl hover:from-red-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
            <span>🗺️</span>
            <span>Get Directions on Google Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
}