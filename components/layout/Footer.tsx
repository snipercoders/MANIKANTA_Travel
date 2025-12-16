// // File Path: components/layout/Footer.tsx
// import Link from 'next/link';
// import Image from 'next/image';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Globe,
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube 
// } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* Company Info + Logo */}
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-5 mb-6">
//               <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
//                 <Image
//                   src="/images/logo_mani.jpeg"
//                   alt="Manikanta Tour and Travels"
//                   fill
//                   className="object-contain p-3"
//                   unoptimized
//                 />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//                   MANIKANTA
//                 </h1>
//                 <p className="text-xl font-bold text-blue-300 tracking-wider">
//                   TOUR AND TRAVELS
//                 </p>
//               </div>
//             </div>

//             <p className="text-gray-300 leading-relaxed mb-6">
//               Your trusted travel partner for unforgettable journeys across Karnataka. 
//               We specialize in Cars, Tempo Travellers & Luxury Buses with 24×7 service.
//             </p>

//             <div className="space-y-4 text-gray-300 mb-8">
//               <div className="flex items-center gap-3">
//                 <Phone className="h-6 w-6 text-blue-400" />
//                 <span className="font-medium">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="h-6 w-6 text-blue-400" />
//                 <span className="font-medium">info@manikantatours.com</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <MapPin className="h-6 w-6 text-blue-400" />
//                 <span className="font-medium">Bangalore | Mysore | Coorg | Mangalore | Hampi | All Karnataka</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Globe className="h-6 w-6 text-blue-400" />
//                 <span className="font-medium">24×7 Booking Available</span>
//               </div>
//             </div>

//             {/* Social Media Links - SniperCoders */}
//             <div className="mb-8">
//               <h5 className="text-lg font-bold text-blue-400 mb-4">Follow  Us</h5>
//               <div className="flex gap-4">
//                 <a 
//                   href="https://instagram.com/snipercoders" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform"
//                   aria-label="Instagram"
//                 >
//                   <Instagram className="h-6 w-6" />
//                 </a>
//                 <a 
//                   href="https://facebook.com/snipercoders" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full hover:scale-110 transition-transform"
//                   aria-label="Facebook"
//                 >
//                   <Facebook className="h-6 w-6" />
//                 </a>
//                 <a 
//                   href="https://twitter.com/snipercoders" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-full hover:scale-110 transition-transform"
//                   aria-label="Twitter"
//                 >
//                   <Twitter className="h-6 w-6" />
//                 </a>
//                 <a 
//                   href="https://youtube.com/@snipercoders" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-red-600 to-red-800 p-3 rounded-full hover:scale-110 transition-transform"
//                   aria-label="YouTube"
//                 >
//                   <Youtube className="h-6 w-6" />
//                 </a>
//               </div>
             
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-2xl font-bold text-blue-400 mb-6">Quick Links</h4>
//             <ul className="space-y-4">
//               {[
//                 { name: 'Home', href: '/' },
//                 { name: 'Transportation', href: '/transportation' },
//                 { name: 'Cars & Tempo Traveller', href: '/transportation/cars' },
//                 { name: 'Buses & Mini Buses', href: '/transportation/buses' },
//                 { name: 'Gallery', href: '/gallery' },
//                 { name: 'About Us', href: '/about' },
//                 { name: 'Contact', href: '/contact' },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
//                   >
//                     <span className="text-blue-400 group-hover:translate-x-2 transition-transform">→</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Policies & Support */}
//           <div>
//             <h4 className="text-2xl font-bold text-blue-400 mb-6">Support</h4>
//             <ul className="space-y-4">
//               {[
//                 { name: 'Terms & Conditions', href: '/terms' },
//                 { name: 'Privacy Policy', href: '/privacy' },
//                 { name: 'Cancellation Policy', href: '/cancellation-policy' },
//                 { name: 'Refund Policy', href: '/refund-policy' },
//                 { name: 'FAQs', href: '/faqs' },
//                 { name: 'Contact Support', href: '/contact' },
//                 { name: 'Booking Help', href: '/help' },
//               ].map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
//                   >
//                     <span className="text-blue-400 group-hover:translate-x-2 transition-transform">→</span>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

     
//         {/* Bottom Bar - SniperCoders Credit */}
//         <div className="mt-16 pt-10 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//               <p className="text-gray-400 text-sm md:text-base">
//                 © {new Date().getFullYear()} <span className="font-bold text-blue-400">MANIKANTA TOUR AND TRAVELS</span>. All rights reserved.
//               </p>
//               <p className="text-gray-500 text-xs md:text-sm mt-2">
//                 Serving Karnataka with excellence since 2010
//               </p>
//             </div>
            
//             <div className="text-center md:text-right">
//               <p className="text-gray-400 text-sm md:text-base mb-2">
//               Website crafted by{' '}
//                 <a
//                   href="https://snipercoders.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-bold text-blue-400 hover:text-white underline underline-offset-4 transition-all duration-300"
//                 >
//                   SniperCoders
//                 </a>
//               </p>
           
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }







// File Path: components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Youtube 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-slate-900 dark:to-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company Info + Logo - Updated with improved logo */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/30 dark:ring-primary/40">
                <Image
                  src="/images/logo_mani.jpeg"
                  alt="Manikanta Tour and Travels"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-300 dark:to-purple-400">
                  MANIKANTA
                </h1>
                <p className="text-xl font-bold text-primary/90 dark:text-blue-300 tracking-wider">
                  TOUR AND TRAVELS
                </p>
              </div>
            </div>

            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
              Your trusted travel partner for unforgettable journeys across Karnataka. 
              We specialize in Cars, Tempo Travellers & Luxury Buses with 24×7 service.
            </p>

            <div className="space-y-4 text-gray-300 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary dark:text-blue-400" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary dark:text-blue-400" />
                <span className="font-medium">chandan.govindraj76@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary dark:text-blue-400" />
                <span className="font-medium">Bangalore | All Karnataka | All India | Full South India</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary dark:text-blue-400" />
                <span className="font-medium">24×7 Booking Available</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-8">
              <h5 className="text-lg font-bold text-primary dark:text-blue-400 mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/__rider18__?igsh=MWFiaHVneHF0OWF1OA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
        
              </div>
            </div>
          </div>

          {/* Quick Links - Updated with theme colors */}
          <div>
            <h4 className="text-2xl font-bold text-primary dark:text-blue-400 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Transportation', href: '/transportation' },
                { name: 'Cars & Tempo Traveller', href: '/transportation/cars' },
                { name: 'Buses & Mini Buses', href: '/transportation/buses' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-primary dark:text-blue-400 group-hover:translate-x-2 transition-transform">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Support - Updated with theme colors */}
          <div>
            <h4 className="text-2xl font-bold text-primary dark:text-blue-400 mb-6">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Cancellation Policy', href: '/cancellation-policy' },
                { name: 'Refund Policy', href: '/refund-policy' },
                { name: 'FAQs', href: '/faqs' },
                { name: 'Contact Support', href: '/contact' },
                { name: 'Booking Help', href: '/help' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-primary dark:text-blue-400 group-hover:translate-x-2 transition-transform">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Updated with theme colors */}
        <div className="mt-16 pt-10 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 dark:text-gray-500 text-sm md:text-base">
                © {new Date().getFullYear()} <span className="font-bold text-primary dark:text-blue-400">MANIKANTA TOUR AND TRAVELS</span>. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs md:text-sm mt-2">
                Serving Karnataka with excellence since 2010
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 dark:text-gray-500 text-sm md:text-base mb-2">
                Website crafted by{' '}
                <a
                  href="https://snipercoders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary dark:text-blue-400 hover:text-white dark:hover:text-gray-200 underline underline-offset-4 transition-all duration-300"
                >
                  SniperCoders
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}