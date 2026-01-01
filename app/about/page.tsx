// // app/about/page.tsx
// import ContactForm from '@/components/about/ContactForm';
// import FounderCard from '@/components/about/FounderCard';
// // import TeamSection from '@/components/about/TeamSection';

// export const metadata = {
//   title: 'About Us - Sri Manikanta Tours & Travels',
//   description: 'Learn about Sri Manikanta Tours & Travels, our founder Chandan, and our dedicated team.',
// };

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
      
//       <div className="relative overflow-hidden py-16 lg:py-24">
//         {/* Background image */}
//         <img 
//           src="/images/about/about.jpeg"
//           alt="about image" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />
        
//         {/* Gradient overlay */}
//         <div className="absolute inset-0"></div>
        
//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//               About Sri Manikanta Tours & Travels
//             </h1>
//             <p className="text-xl text-orange-100 max-w-3xl mx-auto">
//               Your trusted travel partner since 2010, providing exceptional travel experiences
//               across India with safety, comfort, and reliability.
//             </p>
//             <div className="mt-8 flex justify-center space-x-4">
//               <div className="w-32 h-1 bg-white rounded-full"></div>
//               <div className="w-12 h-1 bg-amber-200 rounded-full"></div>
//               <div className="w-32 h-1 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Founder & Team Info */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Founder Section */}
//             <FounderCard />
            
//             {/* Company Story */}
//             <div className="bg-white rounded-3xl shadow-xl p-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <div className="space-y-6 text-gray-600">
//                 <p>
//                   Founded in 2006 by <span className="font-semibold text-orange-600">Chandan</span>, 
//                   Sri Manikanta Tours & Travels started as a small travel agency in Bangalore 
//                   with just 2 buses. Today, we operate a fleet of over 50 vehicles serving 
//                   destinations across South India.
//                 </p>
//                 <p>
//                   Our mission is simple: to make travel accessible, comfortable, and memorable 
//                   for everyone. Whether you're traveling for pilgrimage, business, or leisure, 
//                   we ensure your journey is safe and enjoyable.
//                 </p>
//                 <p>
//                   We've served over <span className="font-bold text-gray-900">50,000+ satisfied customers</span> 
//                   and have expanded our services to include tour packages, hotel bookings, 
//                   and customized travel solutions.
//                 </p>
//               </div>
              
//               {/* Stats */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-orange-600">18+</div>
//                   <div className="text-gray-600">Years Experience</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-orange-600">50+</div>
//                   <div className="text-gray-600">Vehicles</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-orange-600">50K+</div>
//                   <div className="text-gray-600">Happy Customers</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-orange-600">25+</div>
//                   <div className="text-gray-600">Destinations</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Team Section */}
//             {/* <TeamSection /> */}
//           </div>
          
//           {/* Contact Form Sidebar */}
//           <div className="space-y-8">
//             {/* Quick Contact Form */}
//             <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl p-8 border border-orange-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h2>
//               <p className="text-gray-600 mb-6">
//                 Have questions? Send us a quick message and we'll get back to you.
//               </p>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Your Name</label>
//                   <input 
//                     type="text" 
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                   <input 
//                     type="tel" 
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Message</label>
//                   <textarea 
//                     rows={4}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>
//                 <button className="w-full bg-gradient-to-r from-red-500 to-red-800 text-white font-bold py-3.5 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300">
//                   Send Message
//                 </button>
//               </div>
//             </div>
            
//             {/* Founder Direct Contact */}
//             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 border border-blue-100">
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
//                   <span className="text-2xl text-white">👨‍💼</span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-xl text-gray-900">Contact Founder</h3>
//                   <p className="text-blue-600 font-medium">Chandan</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                     <span className="text-lg">📱</span>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Direct Mobile</p>
//                     <a href="tel:+919591762419" className="font-bold text-gray-900 hover:text-blue-600">
//                       +91 95917 62419
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
//                     <span className="text-lg">📧</span>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Personal Email</p>
//                     <a href="mailto:chandan@manikanta.com" className="font-bold text-gray-900 hover:text-blue-600">
//                      chandan.govindraj76@gmail.com
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t border-blue-100">
//                   <p className="text-sm text-gray-600">
//                     Chandan is personally involved in ensuring customer satisfaction and is available for special inquiries and corporate bookings.
//                   </p>
//                 </div>
//               </div>
//             </div>
            
         
         
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// app/about/page.tsx
import ContactForm from '@/components/about/ContactForm';
import FounderCard from '@/components/about/FounderCard';
// import TeamSection from '@/components/about/TeamSection';

export const metadata = {
  title: 'About Us - Sri Manikanta Tours & Travels',
  description: 'Learn about Sri Manikanta Tours & Travels, our founder Chandan, and our dedicated team.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Fixed with zoomed out image */}
      <div className="relative overflow-hidden py-16 lg:py-24 min-h-[60vh] md:min-h-[70vh] flex items-center">
        {/* Background image container with zoom out effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/images/about/about.jpeg"
              alt="Sri Manikanta Tours & Travels about us background" 
              className="w-full h-full object-cover scale-125"
              style={{
                objectPosition: 'center center',
              }}
            />
          </div>
          
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              About <span className="text-amber-300">Sri Manikanta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Tours & Travels
            </h2>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
              Your trusted travel partner since 2006, providing exceptional travel experiences
              across India with safety, comfort, and reliability.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="w-32 h-1 bg-white rounded-full"></div>
              <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
              <div className="w-32 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Founder & Team Info */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            {/* Founder Section */}
            <FounderCard />
            
            {/* Company Story */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Our Journey & Story</h2>
              </div>
              
              <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg">
                <p className="leading-relaxed">
                  Founded on <span className="font-semibold text-red-600">June 6, 2006</span> by visionary entrepreneur 
                  <span className="font-semibold text-red-600"> Chandan</span>, Sri Manikanta Tours & Travels began as a humble 
                  travel agency in Bangalore with just <span className="font-bold">2 buses</span>. What started as a small 
                  venture has today transformed into one of South India's most trusted travel companies.
                </p>
                
                <p className="leading-relaxed">
                  From our modest beginnings, we have grown exponentially through our commitment to 
                  <span className="font-semibold text-red-600"> customer satisfaction, safety, and reliability</span>. 
                  Our journey is a testament to the trust our customers have placed in us over the years.
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 md:p-6 rounded-r-lg">
                  <p className="italic text-gray-700 font-medium">
                    "Our mission is simple yet powerful: To make travel <span className="text-red-600">accessible, 
                    comfortable, and memorable</span> for everyone. Whether you're traveling for pilgrimage, 
                    business, leisure, or special occasions, we ensure your journey is safe, enjoyable, 
                    and unforgettable."
                  </p>
                </div>
                
                <p className="leading-relaxed">
                  We've proudly served over <span className="font-bold text-gray-900">50,000+ satisfied customers</span> 
                  and have expanded our services to include comprehensive tour packages, hotel bookings, 
                  corporate travel solutions, and customized travel experiences tailored to individual needs.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">18+</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Years of Excellence</div>
                </div>
                <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Vehicle Fleet</div>
                </div>
                <div className="text-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600">50K+</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Happy Customers</div>
                </div>
                <div className="text-center bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600">25+</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Destinations</div>
                </div>
              </div>
            </div>
            
            {/* Values Section */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <h3 className="text-lg font-bold">Safety First</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    All vehicles undergo regular maintenance and safety checks. Our drivers are trained professionals with years of experience.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🤝</span>
                    </div>
                    <h3 className="text-lg font-bold">Customer Trust</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    We build lasting relationships through transparent pricing, honest communication, and reliable service.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">💎</span>
                    </div>
                    <h3 className="text-lg font-bold">Quality Service</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    From well-maintained vehicles to courteous staff, we ensure premium quality in every aspect of our service.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-bold">On-Time Performance</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    We understand the value of time. Punctuality is our promise for every pickup, drop, and tour schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact Form */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-xl p-6 md:p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                  <span className="text-xl text-white">📞</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Quick Inquiry</h2>
                  <p className="text-gray-600 text-sm">Get instant response</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Have questions about our services? Send us a quick message and we'll get back to you within 30 minutes.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-900 text-sm md:text-base bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-900 text-sm md:text-base bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-900 text-sm md:text-base bg-white"
                    placeholder="Tell us about your travel requirements..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-3.5 rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg">
                  Send Quick Message
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="text-xs text-gray-500 text-center">
                  We respond within 30 minutes during business hours (7 AM - 11 PM)
                </p>
              </div>
            </div>
            
            {/* Founder Direct Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-6 md:p-8 border border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Contact Founder</h3>
                  <p className="text-blue-600 font-medium">Chandan</p>
                  <p className="text-gray-500 text-sm">Founder & CEO</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg text-blue-600">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Direct Mobile</p>
                      <a href="tel:+919591762419" className="font-bold text-gray-900 hover:text-blue-600 text-lg">
                        +91 95917 62419
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg text-blue-600">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Personal Email</p>
                      <a href="mailto:chandan.govindraj76@gmail.com" className="font-bold text-gray-900 hover:text-blue-600 text-base md:text-lg">
                        chandan.govindraj76@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg text-blue-600">💬</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp Business</p>
                      <a href="https://wa.me/919591762419" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-600 text-base md:text-lg">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-700">Chandan</span> is personally involved in ensuring customer satisfaction. 
                    Available for special inquiries, corporate bookings, and resolving any concerns.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Office Information */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-xl text-white">🏢</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Office Information</h3>
                  <p className="text-gray-600 text-sm">Visit us or call</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Registered Office:</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Sri Manikanta Tours & Travels<br />
                    Agara, Kanakapura Main Road<br />
                    Bangalore, Karnataka - 560082<br />
                    <span className="text-red-600 font-medium text-sm">
                      Est. 06/06/2006 | Travel Agency
                    </span>
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-medium text-gray-900 mb-2">Business Hours:</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Monday - Sunday: 7:00 AM - 11:00 PM<br />
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}