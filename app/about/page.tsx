// app/about/page.tsx
import ContactForm from '@/components/about/ContactForm';
import FounderCard from '@/components/about/FounderCard';
import TeamSection from '@/components/about/TeamSection';

export const metadata = {
  title: 'About Us - Sri Manikanta Tours & Travels',
  description: 'Learn about Sri Manikanta Tours & Travels, our founder Chandan, and our dedicated team.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Sri Manikanta Tours & Travels
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Your trusted travel partner since 2010, providing exceptional travel experiences
              across India with safety, comfort, and reliability.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="w-32 h-1 bg-white rounded-full"></div>
              <div className="w-12 h-1 bg-amber-200 rounded-full"></div>
              <div className="w-32 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Founder & Team Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Founder Section */}
            <FounderCard />
            
            {/* Company Story */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2010 by <span className="font-semibold text-orange-600">Chandan</span>, 
                  Sri Manikanta Tours & Travels started as a small travel agency in Bangalore 
                  with just 2 buses. Today, we operate a fleet of over 50 vehicles serving 
                  destinations across South India.
                </p>
                <p>
                  Our mission is simple: to make travel accessible, comfortable, and memorable 
                  for everyone. Whether you're traveling for pilgrimage, business, or leisure, 
                  we ensure your journey is safe and enjoyable.
                </p>
                <p>
                  We've served over <span className="font-bold text-gray-900">50,000+ satisfied customers</span> 
                  and have expanded our services to include tour packages, hotel bookings, 
                  and customized travel solutions.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">14+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600">Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">25+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
            
            {/* Team Section */}
            <TeamSection />
          </div>
          
          {/* Contact Form Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact Form */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h2>
              <p className="text-gray-600 mb-6">
                Have questions? Send us a quick message and we'll get back to you.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
            
            {/* Founder Direct Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 border border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Contact Founder</h3>
                  <p className="text-blue-600 font-medium">Chandan</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Direct Mobile</p>
                    <a href="tel:+919591762419" className="font-bold text-gray-900 hover:text-blue-600">
                      +91 95917 62419
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Personal Email</p>
                    <a href="mailto:chandan@manikanta.com" className="font-bold text-gray-900 hover:text-blue-600">
                      chandan@manikanta.com
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-600">
                    Chandan is personally involved in ensuring customer satisfaction and is available for special inquiries and corporate bookings.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Awards & Recognition */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="font-bold text-xl text-gray-900 mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Best Travel Agency 2022</p>
                    <p className="text-sm text-gray-500">Karnataka Tourism Awards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Customer Excellence Award</p>
                    <p className="text-sm text-gray-500">Travel & Hospitality 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Safety First Certified</p>
                    <p className="text-sm text-gray-500">Road Transport Authority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}