// //components/home/Hero.tsx

// 'use client';

// import { useState } from 'react';

// export default function Hero() {
//   const [videoError, setVideoError] = useState(false);
  
//   return (
//     <section className="relative overflow-hidden h-screen min-h-[600px] max-h-[1000px]">
//       {/* Full Background Video */}
//       {!videoError ? (
//         <div className="absolute inset-0 w-full h-full">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover scale-105"
//             onError={() => setVideoError(true)}
//           >
//             <source src="/videos/Hero_section_video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
          
//           {/* Gradient overlay for better text readability - stronger on mobile */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 md:bg-black/40"></div>
//         </div>
//       ) : (
//         // Fallback gradient if video fails
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
//       )}

//       {/* Content Container */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
//           <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
//             {/* Main Content - Full Width on Mobile, Left on Desktop */}
//           <div className="text-center space-y-4 sm:space-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
//   {/* Tagline */}
//   <p className="text-blue-300 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-shadow">
//     Best Destinations Around India
//   </p>

//   {/* Main Heading - Responsive Text Sizes */}
//   <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight drop-shadow-2xl">
//     Travel, enjoy
//     <br className="hidden sm:block" />
//     <span className="sm:ml-2">and live a new</span>
//     <br className="hidden sm:block" />
//     <span className="sm:ml-0">and full life</span>
//   </h1>

//   {/* Description - Centered and responsive */}
//   <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md leading-relaxed px-4 sm:px-0">
//     Discover incredible destinations across India with comfortable cars, luxury buses, and tempo travellers. Your trusted partner for memorable journeys.
//   </p>

//   {/* CTA Buttons - Centered */}
//   <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
//     <a
//       href="/transportation"
//       className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95"
//     >
//       Find out more
//     </a>
//   </div>

//   {/* Trust Indicators - Centered */}
//   <div className="pt-8 sm:pt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white">
//     <div className="text-center">
//       <div className="text-2xl sm:text-3xl md:text-4xl font-bold">500+</div>
//       <div className="text-xs sm:text-sm opacity-80">Happy Customers</div>
//     </div>
//     <div className="hidden sm:block h-8 w-px bg-white/30"></div>
//     <div className="text-center">
//       <div className="text-2xl sm:text-3xl md:text-4xl font-bold">50+</div>
//       <div className="text-xs sm:text-sm opacity-80">Vehicles</div>
//     </div>
//     <div className="hidden sm:block h-8 w-px bg-white/30"></div>
//     <div className="text-center">
//       <div className="text-2xl sm:text-3xl md:text-4xl font-bold">24/7</div>
//       <div className="text-xs sm:text-sm opacity-80">Support</div>
//     </div>
//   </div>
// </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator - Hidden on mobile, shown on tablet+ */}
   

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scrollDown {
//           0% {
//             transform: translateY(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(12px);
//             opacity: 0;
//           }
//         }

//         .text-shadow {
//           text-shadow: 0 2px 4px rgba(0,0,0,0.3);
//         }

//         /* Extra small devices */
//         @media (max-width: 374px) {
//           h1 {
//             font-size: 1.75rem;
//             line-height: 1.2;
//           }
//         }

//         /* Prevent text overflow on very small screens */
//         @media (max-width: 640px) {
//           h1 {
//             word-break: break-word;
//             hyphens: auto;
//           }
//         }

//         /* Optimize video performance on mobile */
//         @media (max-width: 768px) {
//           video {
//             transform: scale(1.1);
//           }
//         }

//         /* Fix iOS viewport height issue */
//         @supports (-webkit-touch-callout: none) {
//           section {
//             min-height: -webkit-fill-available;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }









// components/home/Hero.tsx

'use client';

import { useState } from 'react';
import { FaRupeeSign, FaMapMarkedAlt, FaPhoneAlt, FaStar } from 'react-icons/fa';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  
  return (
    <section className="relative overflow-hidden h-screen min-h-[600px] max-h-[1000px]">
      {/* Full Background Video */}
      {!videoError ? (
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            onError={() => setVideoError(true)}
            preload="auto"
            poster="/images/hero-poster.jpg"
          >
<source src="https://res.cloudinary.com/dzoxwk1jc/video/upload/v1765858876/Hero_section_video_hu4tap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 md:from-black/50 md:via-black/40 md:to-black/50"></div>
        </div>
      ) : (
        // Fallback gradient if video fails
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Main Content - Centered */}
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              
              {/* Tagline - South India Focus */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaMapMarkedAlt className="text-blue-300 text-sm" />
                <p className="text-blue-300 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
                  Premium South India Tour & Travels
                </p>
              </div>

              {/* Main Heading - South India Focus with SEO Keywords */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  South India's Trusted
                </span>
                <br className="xs:block" />
                <span>Travel Partner</span>
              </h1>

              {/* Sub-heading with South India Destinations */}
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 drop-shadow-lg">
                From <span className="text-yellow-300">Tirupati</span> to{' '}
                <span className="text-yellow-300">Kerala</span>,{' '}
                <span className="text-yellow-300">Goa</span> to{' '}
                <span className="text-yellow-300">Kanyakumari</span>
              </h2>

              {/* Description - SEO Optimized for South India */}
              <p className="mt-2 sm:mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md leading-relaxed px-2 sm:px-0">
                Experience hassle-free travel across South India with Manikanta Tour & Travels. 
                Book premium cars, tempo travellers & buses for temple tours, family vacations, 
                corporate trips across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Kerala & Goa.
              </p>

              {/* Key Features - South India Specific */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                  <FaRupeeSign className="text-green-400" />
                  <span className="text-white text-xs sm:text-sm">Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                  <FaMapMarkedAlt className="text-blue-400" />
                  <span className="text-white text-xs sm:text-sm">All South India Routes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                  <FaStar className="text-yellow-400" />
                  <span className="text-white text-xs sm:text-sm">5-Star Rated Service</span>
                </div>
              </div>

              {/* CTA Buttons - Centered */}
              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 sm:px-0">
                <a
                  href="/transportation"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm sm:text-base font-bold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95 duration-300"
                >
                  Book Your Vehicle Now
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white text-sm sm:text-base font-bold rounded-full hover:bg-white/10 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95 duration-300 flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt /> Call: +91 9876543210
                </a>
              </div>

              {/* Trust Indicators - South India Stats */}
              <div className="pt-6 sm:pt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 text-white">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">10K+</div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Happy South Indian Travelers</div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">500+</div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Temple Tour Packages</div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">24/7</div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Multi-language Support</div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300">50+</div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">South India Routes</div>
                </div>
              </div>

              {/* Popular Destinations Quick Links */}
              <div className="mt-4 sm:mt-6">
                <p className="text-white/80 text-xs sm:text-sm mb-3">Popular South India Destinations:</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {['Tirupati', 'Chennai', 'Bangalore', 'Hyderabad', 'Kerala', 'Goa', 'Kanyakumari', 'Ooty', 'Mysore', 'Pondicherry'].map((city) => (
                    <a
                      key={city}
                      href={`/destinations/${city.toLowerCase()}`}
                      className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-white/90 hover:text-white transition-colors duration-200"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        /* Extra small devices (phones, less than 375px) */
        @media (max-width: 374px) {
          h1 {
            font-size: 1.5rem;
            line-height: 1.3;
          }
          h2 {
            font-size: 1.1rem;
          }
        }

        /* Small devices (phones, 375px and up) */
        @media (min-width: 375px) and (max-width: 639px) {
          h1 {
            font-size: 1.75rem;
          }
          h2 {
            font-size: 1.25rem;
          }
        }

        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          section {
            min-height: 700px;
          }
        }

        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          section {
            min-height: 800px;
          }
        }

        /* Prevent text overflow on very small screens */
        @media (max-width: 640px) {
          h1, h2 {
            word-break: break-word;
            hyphens: auto;
          }
        }

        /* Optimize video performance on mobile */
        @media (max-width: 768px) {
          video {
            transform: scale(1.15);
          }
        }

        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          section {
            min-height: -webkit-fill-available;
          }
          video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }

        /* Improve readability on all devices */
        .text-shadow-lg {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
        }

        /* Smooth animations */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </section>
  );
}