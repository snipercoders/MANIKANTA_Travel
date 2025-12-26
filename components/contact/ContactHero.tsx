
// // // components/contact/ContactHero.tsx


"use client";

export default function ContactHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-12 sm:py-16 lg:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/dzoxwk1jc/image/upload/v1765894337/footer_banner_odvrel.png)",
        }}
      />
      
      {/* Dark overlay + decorative overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white opacity-5 rounded-full transform translate-x-16 sm:translate-x-32 -translate-y-16 sm:-translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-96 sm:h-96 bg-white opacity-5 rounded-full transform -translate-x-24 sm:-translate-x-48 translate-y-24 sm:translate-y-48"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-3 sm:mb-4">
            <p className="text-white/90 text-xs sm:text-sm">Established: 06/06/2006</p>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get in Touch with Us
          </h1>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-white/90 text-sm sm:text-base">
                <span className="font-semibold">Founder:</span> Ashok R
              </p>
            </div>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-white/90 text-sm sm:text-base">
                <span className="font-semibold">Co-founder:</span> Chandan
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-white/90 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            Sri Manikanta Tours & Travels - Your trusted travel partner since 2006.
            Contact us for bookings, inquiries, or travel assistance. 
            Our team is ready to assist you with expert guidance.
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center space-x-1 sm:space-x-2">
            <div className="w-20 sm:w-32 h-1 sm:h-1.5 bg-white rounded-full"></div>
            <div className="w-6 sm:w-8 h-1 sm:h-1.5 bg-amber-300 rounded-full"></div>
            <div className="w-20 sm:w-32 h-1 sm:h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}