// // components/contact/ContactMap.tsx

// "use client";

// export default function ContactMap() {
//   return (
//     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
//       <div className="p-6">
//         <h3 className="font-bold text-2xl text-gray-900 mb-4">Find Our Office</h3>
//         <p className="text-gray-600 mb-6">
//           Visit our headquarters in Bangalore for in-person consultations and bookings.
//         </p>
//       </div>
      
//       {/* Map Placeholder */}
//       <div className="relative h-64 bg-gradient-to-r from-blue-100 to-cyan-100">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
//               <span className="text-2xl">📍</span>
//             </div>
//             <p className="font-medium text-gray-900">Bangalore Office</p>
//             <p className="text-sm text-gray-600 mt-1">Interactive map would be here</p>
//           </div>
//         </div>
        
//         {/* Map Pin */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="relative">
//             <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
//               <div className="w-4 h-4 bg-white rounded-full"></div>
//             </div>
//             <div className="w-1 h-6 bg-red-500 mx-auto -mt-1"></div>
//           </div>
//         </div>
//       </div>
      
//       <div className="p-6 bg-gray-50">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Latitude</p>
//             <p className="font-medium text-gray-900">12.9716° N</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Longitude</p>
//             <p className="font-medium text-gray-900">77.5946° E</p>
//           </div>
//         </div>
        
//         <div className="mt-6">
//           <button className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 flex items-center justify-center space-x-2">
//             <span>🗺️</span>
//             <span>Get Directions on Google Maps</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }








"use client";

export default function ContactMap() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="p-6">
        <h3 className="font-bold text-2xl text-gray-900 mb-4">Find Our Office</h3>
        <p className="text-gray-600 mb-6">
          Visit our headquarters in Agara, Bangalore for in-person consultations and bookings.
          Established in 2006, serving travelers for over 18 years.
        </p>
        
        {/* Business Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 rounded-lg mb-4">
          <span className="text-orange-600">🏢</span>
          <span className="text-sm font-medium text-gray-800">Travel Agency since 2006</span>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="relative h-64 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <p className="font-medium text-gray-900">Agara Office, Bangalore</p>
            <p className="text-sm text-gray-600 mt-1">Kanakapura Main Road</p>
          </div>
        </div>
        
        {/* Map Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="w-1 h-6 bg-red-500 mx-auto -mt-1"></div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Office Address</h4>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-gray-800">
              Agara, Kanakapura Main Road<br />
              Bangalore – 560082<br />
              Karnataka, India
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-orange-500">👑</span>
              <p className="text-sm text-gray-600">Managed by Founder: Ashok R</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Latitude</p>
            <p className="font-medium text-gray-900">12.91° N</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Longitude</p>
            <p className="font-medium text-gray-900">77.58° E</p>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 flex items-center justify-center space-x-2">
            <span>🗺️</span>
            <span>Get Directions on Google Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
}