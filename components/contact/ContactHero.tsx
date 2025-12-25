// components/contact/ContactHero.tsx
"use client";

export default function ContactHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 py-16 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <p className="text-blue-100 text-sm">Established: 06/06/2006</p>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch with Us
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-blue-100">
                <span className="font-semibold">Founder:</span> Ashok R
              </p>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-blue-100">
                <span className="font-semibold">Co-founder:</span> Chandan
              </p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Sri Manikanta Tours & Travels - Your trusted travel partner since 2006.
            Contact us for bookings, inquiries, or travel assistance. 
            Our team is ready to assist you with expert guidance.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-32 h-1.5 bg-white rounded-full"></div>
            <div className="w-8 h-1.5 bg-cyan-300 rounded-full"></div>
            <div className="w-32 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}