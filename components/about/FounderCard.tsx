"use client";

export default function FounderCard() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl p-8 border border-orange-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Founder Image/Icon */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-center">
              <span className="text-6xl text-white">👨‍💼</span>
              <div className="mt-4">
                <div className="w-16 h-2 bg-white rounded-full mx-auto mb-2"></div>
                <div className="w-12 h-2 bg-amber-200 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Founder Details */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-3">
              Founder & CEO
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Chandan</h2>
            <p className="text-gray-600">
              With over 14 years of experience in the travel industry, Chandan has built 
              Sri Manikanta Tours & Travels from the ground up. His vision is to provide 
              affordable and reliable travel solutions to every customer.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Direct Contact</p>
                <a href="tel:+919591762419" className="font-bold text-gray-900 hover:text-orange-600">
                  +91 95917 62419
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:chandan@manikanta.com" className="font-bold text-gray-900 hover:text-orange-600">
                  chandan@manikanta.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a 
                  href="https://wa.me/919591762419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-gray-900 hover:text-green-600"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-lg">🕒</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-bold text-gray-900">Mon-Sat: 9AM-8PM</p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-8 pt-6 border-t border-orange-100">
            <p className="text-lg italic text-gray-700">
              "Travel is not just about reaching a destination, it's about creating 
              memories that last a lifetime. We're here to make that journey comfortable, 
              safe, and memorable for you."
            </p>
            <p className="text-right text-orange-600 font-medium mt-2">— Chandan</p>
          </div>
        </div>
      </div>
    </div>
  );
}