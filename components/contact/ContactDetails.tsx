


// // // components/contact/ContactDetails.tsx



"use client";

export default function ContactDetails() {
  return (
    <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Our Contact Information</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Office */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl text-white">🏢</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Headquarters</h3>
              <p className="text-red-600 text-xs sm:text-sm">Main Office</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
            Agara, Kanakapura Main Road<br />
            Bangalore - 560082<br />
            Karnataka, India
          </p>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold">Established:</span> 06/06/2006
            </p>
          </div>
        </div>
        
        {/* Management Team */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl text-white">👑</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Leadership</h3>
              <p className="text-red-600 text-xs sm:text-sm">Founders & Management</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-medium">Founder:</span> Ashok R
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-100">
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="font-medium">Co-founder:</span> Chandan
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Professional travel agency with 18+ years of experience
            </p>
          </div>
        </div>
        
        {/* Email & Hours */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl text-white">✉️</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Email & Hours</h3>
              <p className="text-red-600 text-xs sm:text-sm">Quick responses</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Bookings:</span><br />
              <a href="mailto:chandan.govindraj76@gmail.com" className="text-red-600 hover:underline text-sm sm:text-base">
                chandan.govindraj76@gmail.com
              </a>
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Hours:</span> 24/7 Support Available
            </p>
          </div>
        </div>
      </div>
      
      {/* Business Info Card */}
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-xl sm:text-2xl text-white">🏢</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Business Information</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-500">Business Type</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">Travel Agency</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-500">Year Established</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">2006</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900 text-sm sm:text-base">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Quick Contact */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">24/7 WhatsApp Support</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get instant responses from our founder Ashok R and team for quick inquiries and bookings.
            </p>
          </div>
          <a 
            href="https://wa.me/919591762419"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 shadow-lg text-sm sm:text-base whitespace-nowrap"
          >
            <span>💬</span>
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}