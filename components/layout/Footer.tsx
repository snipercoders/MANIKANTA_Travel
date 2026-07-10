// components/layout/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sri Manikanta</h3>
                <p className="text-sm text-gray-400">Tours & Travels</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted travel partner since 2006. We provide reliable and comfortable transportation services across South India.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition group">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition group">
                <Youtube className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link href="/transportation" className="text-gray-400 hover:text-white transition text-sm">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/transportation/buses" className="text-gray-400 hover:text-white transition text-sm">Bus Rentals</Link></li>
              <li><Link href="/transportation/cars" className="text-gray-400 hover:text-white transition text-sm">Car Rentals</Link></li>
              <li><Link href="/transportation" className="text-gray-400 hover:text-white transition text-sm">Tempo Traveller</Link></li>
              <li><Link href="/transportation" className="text-gray-400 hover:text-white transition text-sm">Luxury Buses</Link></li>
              <li><Link href="/transportation" className="text-gray-400 hover:text-white transition text-sm">Wedding Transportation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:+919591762419" className="text-white hover:text-gray-300 transition">
                    +91 95917 62419
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:support@manikantatravels.com" className="text-white hover:text-gray-300 transition text-sm">
                    support@manikantatravels.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-white text-sm">
                    Agara, Kanakapura Main Road<br />
                    Bangalore, Karnataka - 560082
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Business Hours</p>
                  <p className="text-white text-sm">7:00 AM - 11:00 PM (24/7 Support)</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sri Manikanta Tour & Travels. All rights reserved.
            </p>
            
            {/* ✅ SniperCoders Credit - Black & White */}
            <p className="text-gray-500 text-sm">
              Developed & Designed by{' '}
              <a 
                href="https://www.snipercoders.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition font-medium"
              >
                SniperCoders
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}