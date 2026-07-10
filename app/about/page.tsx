// app/about/page.tsx
import type { Metadata } from 'next';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'About Us - Sri Manikanta Tours & Travels | Travel Agency Bangalore',
  description: 'Learn about Sri Manikanta Tours & Travels, founded in 2006 by Chandan. We are a trusted travel agency in Bangalore offering South India tours, bus rentals, and car rentals with 18+ years of experience.',
  keywords: [
    'about Manikanta Tours',
    'travel agency Bangalore',
    'South India travel agency',
    'Karnataka tours',
    'Chandan founder',
    'Sri Manikanta Travels',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/about',
  },
};

// ✅ Organization Schema for About page
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Sri Manikanta Tour & Travels',
  description: 'Sri Manikanta Tour & Travels is a trusted travel agency in Bangalore, India, providing transportation and tour services across South India since 2006.',
  founder: {
    '@type': 'Person',
    name: 'Chandan',
  },
  foundingDate: '2006-06-06',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  telephone: '+91 95917 62419',
  email: 'support@manikantatravels.com',
  url: 'https://manikantatours.com/about',
};

export default function AboutPage() {
  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Black & White */}
        <div className="relative overflow-hidden py-16 lg:py-24 min-h-[50vh] md:min-h-[60vh] flex items-center bg-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="/images/about/about.jpeg"
                alt="Sri Manikanta Tours & Travels about us" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Sri Manikanta
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-6">
              Tours & Travels
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Your trusted travel partner since 2006, providing exceptional travel experiences
              across India with safety, comfort, and reliability.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          
          {/* Company Story - Single Paragraph */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Our Journey & Story</h2>
            
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Sri Manikanta Tours & Travels was founded on June 6, 2006 by visionary entrepreneur 
                Chandan in Bangalore with just 2 buses. Today, we have grown into one of South India's 
                most trusted travel companies with a fleet of 50+ vehicles and 50,000+ satisfied customers.
              </p>
              
              <p>
                From our modest beginnings, we have grown through our commitment to customer satisfaction, 
                safety, and reliability. Our journey is a testament to the trust our customers have placed 
                in us over the past 18+ years.
              </p>
              
              <p>
                Our mission is to make travel accessible, comfortable, and memorable for everyone. Whether 
                you are traveling for pilgrimage, business, leisure, or special occasions, we ensure your 
                journey is safe, enjoyable, and unforgettable.
              </p>
              
              <p>
                We have expanded our services to include comprehensive tour packages, hotel bookings, 
                corporate travel solutions, and customized travel experiences across Karnataka, Tamil Nadu, 
                Kerala, Andhra Pradesh, and other South Indian states.
              </p>
            </div>
            
            {/* Stats - Simple Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center border-r border-gray-200 last:border-none p-3">
                <div className="text-3xl font-bold text-black">18+</div>
                <div className="text-gray-500 text-sm">Years of Excellence</div>
              </div>
              <div className="text-center border-r border-gray-200 last:border-none p-3">
                <div className="text-3xl font-bold text-black">50+</div>
                <div className="text-gray-500 text-sm">Vehicle Fleet</div>
              </div>
              <div className="text-center border-r border-gray-200 last:border-none p-3">
                <div className="text-3xl font-bold text-black">50K+</div>
                <div className="text-gray-500 text-sm">Happy Customers</div>
              </div>
              <div className="text-center p-3">
                <div className="text-3xl font-bold text-black">25+</div>
                <div className="text-gray-500 text-sm">Destinations</div>
              </div>
            </div>
          </div>
          
          {/* Core Values - Simple List */}
          <div className="bg-black rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mt-8 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-b border-gray-800 md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-6">
                <h3 className="text-lg font-bold text-white">Safety First</h3>
                <p className="text-gray-400 text-sm mt-1">
                  All vehicles undergo regular maintenance and safety checks. Our drivers are trained professionals with years of experience.
                </p>
              </div>
              
              <div className="border-b border-gray-800 md:border-b-0 pb-4 md:pb-0">
                <h3 className="text-lg font-bold text-white">Customer Trust</h3>
                <p className="text-gray-400 text-sm mt-1">
                  We build lasting relationships through transparent pricing, honest communication, and reliable service.
                </p>
              </div>
              
              <div className="border-b border-gray-800 md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-6">
                <h3 className="text-lg font-bold text-white">Quality Service</h3>
                <p className="text-gray-400 text-sm mt-1">
                  From well-maintained vehicles to courteous staff, we ensure premium quality in every aspect of our service.
                </p>
              </div>
              
              <div className="pb-4 md:pb-0">
                <h3 className="text-lg font-bold text-white">On-Time Performance</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Punctuality is our promise for every pickup, drop, and tour schedule.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Information - Simple */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mt-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Contact Information</h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-black">Office Address:</p>
                <p className="text-gray-600">
                  Sri Manikanta Tours & Travels<br />
                  Agara, Kanakapura Main Road<br />
                  Bangalore, Karnataka - 560082
                </p>
                <p className="text-gray-500 text-sm mt-1">Est. 06/06/2006 | Travel Agency</p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-black">Contact:</p>
                <p className="text-gray-600">
                  Phone: <a href="tel:+919591762419" className="text-black hover:underline">+91 95917 62419</a><br />
                  Email: <a href="mailto:support@manikantatravels.com" className="text-black hover:underline">support@manikantatravels.com</a>
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-black">Business Hours:</p>
                <p className="text-gray-600">
                  Monday - Sunday: 7:00 AM - 11:00 PM<br />
                  24/7 Emergency Support Available
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-black">Founder:</p>
                <p className="text-gray-600">
                  Chandan - Founder & CEO<br />
                  <a href="tel:+919591762419" className="text-black hover:underline">+91 95917 62419</a> | 
                  <a href="mailto:chandan.govindraj76@gmail.com" className="text-black hover:underline ml-1">chandan.govindraj76@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}