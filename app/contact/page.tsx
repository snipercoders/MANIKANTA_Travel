// app/contact/page.tsx
import ContactHero from '@/components/contact/ContactHero';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import type { Metadata } from 'next';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Contact Us - Sri Manikanta Tours & Travels | Book Your Journey',
  description: 'Get in touch with Sri Manikanta Tours & Travels in Bangalore. Contact us for bookings, inquiries, and travel assistance across South India. Call +91 95917 62419.',
  keywords: [
    'contact Sri Manikanta Tours',
    'travel agency Bangalore contact',
    'book bus rental Bangalore',
    'car rental contact number',
    'South India travel inquiry',
    'Manikanta Tours phone number',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/contact',
  },
};

// ✅ Organization Schema for Contact page
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Sri Manikanta Tour & Travels',
  url: 'https://manikantatours.com/contact',
  telephone: '+91 95917 62419',
  email: 'support@manikantatravels.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 07:00-23:00',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 95917 62419',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Black & White - Fully Responsive */}
        <section className="relative overflow-hidden bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider">CONTACT US</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
              Have questions or ready to book your journey? Reach out to us and we will get back to you within 2 hours.
            </p>
          </div>
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Contact Form - Left Column (2/3 on desktop) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form below and we will get back to you within 2 hours.
                    For urgent inquiries, call our 24/7 helpline.
                  </p>
                  <div className="w-12 sm:w-16 h-1 bg-black rounded-full mt-3 sm:mt-4"></div>
                </div>
                
                <ContactForm />
              </div>
              
              {/* Contact Details - Responsive */}
              <div className="mt-6 sm:mt-8">
                <ContactDetails />
              </div>
            </div>
            
            {/* Sidebar - Right Column (1/3 on desktop) */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <ContactMap />
              
              {/* Emergency Contact - Black & White - Responsive */}
              <div className="bg-black rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg">24/7 Emergency</h3>
                    <a href="tel:+919591762419" className="text-white font-semibold text-base sm:text-lg hover:text-gray-300 transition">
                      +91 95917 62419
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  For emergencies during travel, call our dedicated helpline available 24/7.
                  We provide immediate assistance for any travel-related issues.
                </p>
              </div>
              
              {/* Quick Information - Black & White - Responsive */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200">
                <h4 className="font-bold text-black text-base sm:text-lg mb-3 sm:mb-4">Quick Information</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Business Hours</p>
                      <p className="text-gray-600 text-xs sm:text-sm">7:00 AM - 11:00 PM (24/7 Support)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Address</p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Agara, Kanakapura Main Road<br />
                        Bangalore, Karnataka - 560082
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-black">Email</p>
                      <a href="mailto:support@manikantatravels.com" className="text-gray-600 text-xs sm:text-sm hover:text-black transition break-all">
                        support@manikantatravels.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}