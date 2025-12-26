// "use client";

// export default function TeamSection() {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Rajesh Kumar",
//       role: "Operations Manager",
//       experience: "10 years",
//       contact: "+91 98765 43211",
//       expertise: "Fleet Management & Logistics"
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       role: "Customer Relations Head",
//       experience: "8 years",
//       contact: "+91 98765 43212",
//       expertise: "Client Support & Bookings"
//     },
//     {
//       id: 3,
//       name: "Arun Patel",
//       role: "Tour Coordinator",
//       experience: "6 years",
//       contact: "+91 98765 43213",
//       expertise: "Package Tours & Itineraries"
//     },
//     {
//       id: 4,
//       name: "Sneha Reddy",
//       role: "Marketing Head",
//       experience: "7 years",
//       contact: "+91 98765 43214",
//       expertise: "Digital Marketing & Partnerships"
//     },
//     {
//       id: 5,
//       name: "Manoj Singh",
//       role: "Safety Officer",
//       experience: "12 years",
//       contact: "+91 98765 43215",
//       expertise: "Vehicle Safety & Compliance"
//     },
//     {
//       id: 6,
//       name: "Anjali Mehta",
//       role: "Finance Manager",
//       experience: "9 years",
//       contact: "+91 98765 43216",
//       expertise: "Accounts & Billing"
//     }
//   ];

//   return (
//     <div className="bg-white rounded-3xl shadow-xl p-8">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {teamMembers.map((member) => (
//           <div 
//             key={member.id} 
//             className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
//                   <span className="text-2xl text-white">
//                     {member.name.charAt(0)}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
//                 <p className="text-orange-600 font-medium text-sm mb-1">{member.role}</p>
//                 <p className="text-gray-600 text-sm mb-2">
//                   Experience: <span className="font-medium">{member.experience}</span>
//                 </p>
//                 <p className="text-gray-600 text-sm">
//                   <span className="font-medium">Expertise:</span> {member.expertise}
//                 </p>
                
//                 <div className="mt-4 pt-3 border-t border-gray-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-gray-500">Contact</span>
//                     <a 
//                       href={`tel:${member.contact}`}
//                       className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//                     >
//                       {member.contact.slice(-5)}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="mt-10 pt-8 border-t border-gray-200">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div>
//             <h3 className="font-bold text-xl text-gray-900 mb-2">Join Our Team</h3>
//             <p className="text-gray-600">
//               We're always looking for passionate individuals to join our growing team.
//             </p>
//           </div>
//           <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300">
//             View Career Opportunities
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
