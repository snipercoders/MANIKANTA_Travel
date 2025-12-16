// // components/contact/ContactDetails.tsx

// "use client";

// export default function ContactDetails() {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 border border-gray-100">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Contact Information</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Main Office */}
//         <div>
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
//               <span className="text-xl text-white">🏢</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-gray-900">Headquarters</h3>
//               <p className="text-orange-600 text-sm">Main Office</p>
//             </div>
//           </div>
//           <p className="text-gray-600">
//             Smms, 88, 2nd Cross,<br />
//             Vivekananda Nagarahalli Cross,<br />
//             Bangalore, Karnataka-560057
//           </p>
//         </div>
        
//         {/* Contact Numbers */}
//         <div>
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//               <span className="text-xl text-white">📞</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-gray-900">Phone Numbers</h3>
//               <p className="text-blue-600 text-sm">Call us anytime</p>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-gray-600">
//               <span className="font-medium">Booking:</span> +91 420 502 50
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Support:</span> +91 98765 43210
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Emergency:</span> +91 98765 43219
//             </p>
//           </div>
//         </div>
        
//         {/* Email & Hours */}
//         <div>
//           <div className="flex items-center space-x-3 mb-4">
//             <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//               <span className="text-xl text-white">✉️</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg text-gray-900">Email & Hours</h3>
//               <p className="text-green-600 text-sm">Quick responses</p>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <p className="text-gray-600">
//               <span className="font-medium">Bookings:</span><br />
//               <a href="mailto:bookings@manikanta.com" className="text-blue-600 hover:underline">
//                 bookings@manikanta.com
//               </a>
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Support:</span><br />
//               <a href="mailto:support@manikanta.com" className="text-blue-600 hover:underline">
//                 support@manikanta.com
//               </a>
//             </p>
//             <p className="text-gray-600">
//               <span className="font-medium">Hours:</span> 9AM-8PM (Mon-Sat)
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* WhatsApp Quick Contact */}
//       <div className="mt-10 pt-8 border-t border-gray-200">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <h3 className="font-bold text-xl text-gray-900 mb-2">Quick WhatsApp Support</h3>
//             <p className="text-gray-600">
//               Get instant responses on WhatsApp for quick inquiries and bookings.
//             </p>
//           </div>
//           <a 
//             href="https://wa.me/919591762419"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center space-x-2 shadow-lg"
//           >
//             <span>💬</span>
//             <span>Message on WhatsApp</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

export default function ContactDetails() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Office */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-xl text-white">🏢</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Headquarters</h3>
              <p className="text-orange-600 text-sm">Main Office</p>
            </div>
          </div>
          <p className="text-gray-600 mb-3">
            Agara, Kanakapura Main Road<br />
            Bangalore - 560082<br />
            Karnataka, India
          </p>
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Established:</span> 06/06/2006
            </p>
          </div>
        </div>
        
        {/* Management Team */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-xl text-white">👑</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Leadership</h3>
              <p className="text-purple-600 text-sm">Founders & Management</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg border border-purple-100">
              <p className="text-gray-800">
                <span className="font-medium">Founder:</span> Ashok R
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-100">
              <p className="text-gray-800">
                <span className="font-medium">Co-founder:</span> Chandan
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Professional travel agency with 18+ years of experience
            </p>
          </div>
        </div>
        
        {/* Email & Hours */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-xl text-white">✉️</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Email & Hours</h3>
              <p className="text-green-600 text-sm">Quick responses</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Bookings:</span><br />
              <a href="mailto:bookings@manikanta.com" className="text-blue-600 hover:underline">
               chandan.govindraj76@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Support:</span><br />
              <a href="mailto:support@manikanta.com" className="text-blue-600 hover:underline">
                support@manikanta.com
              </a>
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Hours:</span> 24/7 Support Available
            </p>
          </div>
        </div>
      </div>
      
      {/* Business Info Card */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl text-white">🏢</span>
          </div>
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-500">Business Type</p>
                <p className="font-medium text-gray-900">Travel Agency</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-500">Year Established</p>
                <p className="font-medium text-gray-900">2006</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Quick Contact */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">24/7 WhatsApp Support</h3>
            <p className="text-gray-600">
              Get instant responses from our founder Ashok R and team for quick inquiries and bookings.
            </p>
          </div>
          <a 
            href="https://wa.me/919591762419"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center space-x-2 shadow-lg"
          >
            <span>💬</span>
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}