


// // File Path: components/layout/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company Info + Logo */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20">
                <Image
                  src="/images/logo_mani.jpeg"
                  alt="Manikanta Tour and Travels"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-white">
                  MANIKANTA
                </h1>
                <p className="text-xl font-extrabold text-white/90 tracking-wider">
                  TOUR AND TRAVELS
                </p>
              </div>
            </div>

            <p className="text-white/90 font-semibold leading-relaxed mb-6">
              Your trusted travel partner for unforgettable journeys across South India. 
              We specialize in Cars, Tempo Travellers & Luxury Buses with 24×7 service.
            </p>

            <div className="space-y-4 text-white/80 mb-8">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-6 w-6 text-white" />
                <span className="font-medium">+91 95917 62419</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-6 w-6 text-white" />
                <span className="font-medium">chandan.govindraj76@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="h-6 w-6 text-white" />
                <span className="font-medium">Bangalore | All South India | Pan India</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Globe className="h-6 w-6 text-white" />
                <span className="font-medium">24×7 Booking Available</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-8">
              <h5 className="text-lg font-bold text-white mb-4">Connect With Us</h5>
              <div className="flex gap-4">
                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/919591762419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                
                {/* Facebook Link */}
                <a 
                  href="https://www.facebook.com/share/1D6sCJ7ECa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                
                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/__rider18__?igsh=MWFiaHVneHF0OWF1OA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Quick Links</h4>
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
                    className="text-white/80 hover:text-white hover:bg-black/20 transition-all duration-300 flex items-center gap-2 group py-2 px-3 rounded-lg"
                  >
                    <span className="text-white group-hover:translate-x-2 transition-transform">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Support */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/policies' },
                { name: 'Cancellation Policy', href: '/cancellation-policy' },
                { name: 'Refund Policy', href: '/refund-policy' },
                { name: 'FAQs', href: '/faqs' },
                { name: 'Contact Support', href: '/contact' },
                { name: 'Booking Help', href: '/help' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white hover:bg-black/20 transition-all duration-300 flex items-center gap-2 group py-2 px-3 rounded-lg"
                  >
                    <span className="text-white group-hover:translate-x-2 transition-transform">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-red-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm md:text-base">
                © {new Date().getFullYear()} <span className="font-bold text-white">MANIKANTA TOUR AND TRAVELS</span>. All rights reserved.
              </p>
              <p className="text-white/60 text-xs md:text-sm mt-2">
                Serving South India with excellence since 2006
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm md:text-base mb-2">
                Website crafted by{' '}
                <a
                  href="https://snipercoders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-white/80 underline underline-offset-4 transition-all duration-300"
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