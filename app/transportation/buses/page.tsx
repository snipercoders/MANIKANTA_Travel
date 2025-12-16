// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { MapPinIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

// const vehicles = [
//   { name: 'Mini Bus (21 Seater)', seats: 21, perKm: 40, perKmWithTax: 48 },
//   { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
//   { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
//   { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
//   { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },
// ];

// export default function BusesPage() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [km, setKm] = useState('');
//   const [distance, setDistance] = useState<number | null>(null);
//   const [famousPlaces, setFamousPlaces] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

//   const formatPrice = (price: number) => price.toLocaleString('en-IN');

//   useEffect(() => {
//     if (!from || !to || from.length < 3 || to.length < 3) {
//       setDistance(null);
//       setFamousPlaces([]);
//       setSelectedPlace(null);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/distance?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}`);
//         const data = await res.json();

//         if (data.error) {
//           setDistance(data.fallback_distance || 150);
//           setFamousPlaces(data.fallback_places || ['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
//         } else {
//           setDistance(data.distance);
//           setFamousPlaces(data.famous_places || []);
//         }

//         if (!km && data.distance) setKm(data.distance.toString());
//       } catch (err) {
//         setDistance(150);
//         setFamousPlaces(['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
//       }
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [from, to, km]);

//   const finalKm = Number(km || distance || 0);

//   const handlePlaceClick = (place: string) => {
//     setSelectedPlace(place);
//     const extraKm = 40;
//     const newKm = (finalKm || distance || 0) + extraKm;
//     setKm(newKm.toString());
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">
//           Buses & Mini Buses Fleet
//         </h1>

//         {/* AI-Powered Route Planner */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
//           <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
         
//             Plan Your Group Trip with AI
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 <MapPinIcon className="inline h-5 w-5 text-blue-600 mr-1" />
//                 Pickup Location
//               </label>
//               <input
//                 type="text"
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//                 placeholder="e.g. Delhi, Bangalore"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>

//             <div className="text-center hidden md:block">
//               <ArrowRightIcon className="h-10 w-10 text-blue-600 mx-auto" />
//             </div>
//             <div className="md:hidden text-center">
//               <ArrowRightIcon className="h-8 w-8 text-blue-600 mx-auto rotate-90" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 <MapPinIcon className="inline h-5 w-5 text-green-600 mr-1" />
//                 Destination
//               </label>
//               <input
//                 type="text"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//                 placeholder="e.g. Manali, Mysore"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>
//           </div>

//           {loading && (
//             <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 font-medium">
//               Loading Distance and Near By places...
//             </div>
//           )}

//           {distance && (
//             <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-300">
//               <p className="text-xl font-bold text-purple-900">
//                 Trip: <span className="text-blue-700">{from}</span> to <span className="text-green-700">{to}</span>
//               </p>
//               <p className="text-lg mt-2 font-semibold">
//                 Estimated Distance: <span className="text-2xl text-purple-700">{distance} KM</span>
//               </p>
//             </div>
//           )}

//           {famousPlaces.length > 0 && (
//             <div className="mt-8">
//               <p className="text-lg font-bold text-gray-800 mb-4">
//                 Famous Places Near <span className="text-green-600">{to}</span>:
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {famousPlaces.map((place) => (
//                   <button
//                     key={place}
//                     onClick={() => handlePlaceClick(place)}
//                     className={`px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md ${
//                       selectedPlace === place
//                         ? 'bg-green-600 text-white ring-4 ring-green-200'
//                         : 'bg-white border-2 border-purple-400 text-purple-700 hover:bg-purple-50 hover:border-purple-600 hover:shadow-lg'
//                     }`}
//                   >
//                     {place} (+40 KM)
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Bus Fleet Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {vehicles.map((v) => {
//             const totalExclTax = v.perKm * finalKm;
//             const totalInclTax = v.perKmWithTax * finalKm;

//             return (
//               <div
//                 key={v.name}
//                 className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="h-64 bg-gray-200 relative">
//                   <Image
//                     src="/bus-placeholder.jpg"
//                     alt={v.name}
//                     fill
//                     className="object-cover"
//                     unoptimized
//                   />
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-lg font-bold shadow-lg">
//                     {v.seats} Seater
//                   </div>
//                 </div>

//                 <div className="p-7">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4">{v.name}</h3>

//                   <div className="space-y-4 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Per KM (Excl. Tax)</span>
//                       <span className="font-bold">₹{v.perKm}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Per KM (Incl. Tax)</span>
//                       <span className="font-bold text-green-600">₹{v.perKmWithTax}</span>
//                     </div>
//                   </div>

//                   <div className="mt-7">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Total KM {from && to && `(for ${from} to ${to})`}
//                     </label>
//                     <input
//                       type="number"
//                       value={km}
//                       onChange={(e) => setKm(e.target.value)}
//                       placeholder={distance?.toString() || 'e.g. 500'}
//                       className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition"
//                     />
//                   </div>

//                   {finalKm > 0 && (
//                     <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-purple-200">
//                       <div className="space-y-3">
//                         <div className="text-center">
//                           <p className="text-sm text-gray-600">Total Fare (Excluding Tax)</p>
//                           <p className="text-2xl font-bold text-gray-800">
//                             ₹{formatPrice(totalExclTax)}
//                           </p>
//                         </div>
//                         <div className="border-t pt-3 text-center">
//                           <p className="text-sm text-gray-600">Total Fare (Including Tax)</p>
//                           <p className="text-4xl font-extrabold text-green-600">
//                             ₹{formatPrice(totalInclTax)}
//                           </p>
//                         </div>
//                         {selectedPlace && (
//                           <p className="text-center text-sm text-purple-700 font-medium mt-3">
//                             Includes visit to {selectedPlace}
//                           </p>
//                         )}
//                       </div>
//                       <p className="text-xs text-gray-500 text-center mt-5">
//                         Driver + Fuel Included | Toll & Parking Extra
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Final CTA */}
//         <div className="mt-20 text-center bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 text-white py-14 rounded-3xl shadow-2xl">
//           <p className="text-4xl font-bold">Book Your Group Trip Now!</p>
//           <p className="text-2xl mt-4">
//             Call or WhatsApp:{' '}
//             <span className="font-bold text-yellow-300 text-3xl">+91 98765 43210</span>
//           </p>
//           <p className="mt-3 text-lg opacity-90">24×7 Booking Available</p>
//         </div>
//       </div>
//     </div>
//   );
// }









// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { MapPinIcon, ArrowRightIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const vehicles = [
//   { name: 'Mini Bus (21 Seater)', seats: 21, perKm: 40, perKmWithTax: 48 },
//   { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
//   { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
//   { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
//   { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },
//     { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
//   { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
//   { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
//   { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },
//     { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
//   { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
//   { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
//   { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },
//   // Add more buses if you want (pagination will handle)
// ];

// const ITEMS_PER_PAGE = 10;

// export default function BusesPage() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [km, setKm] = useState('');
//   const [distance, setDistance] = useState<number | null>(null);
//   const [famousPlaces, setFamousPlaces] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const formatPrice = (price: number) => price.toLocaleString('en-IN');

//   useEffect(() => {
//     if (!from || !to || from.length < 3 || to.length < 3) {
//       setDistance(null);
//       setFamousPlaces([]);
//       setSelectedPlace(null);
//       return;
//     }

//     const timer = setTimeout(async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/distance?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}`);
//         const data = await res.json();

//         if (data.error) {
//           setDistance(data.fallback_distance || 150);
//           setFamousPlaces(data.fallback_places || ['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
//         } else {
//           setDistance(data.distance);
//           setFamousPlaces(data.famous_places || []);
//         }

//         if (!km && data.distance) setKm(data.distance.toString());
//       } catch (err) {
//         setDistance(150);
//         setFamousPlaces(['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
//       }
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [from, to, km]);

//   const finalKm = Number(km || distance || 0);

//   const handlePlaceClick = (place: string) => {
//     setSelectedPlace(place);
//     const extraKm = 40;
//     const newKm = (finalKm || distance || 0) + extraKm;
//     setKm(newKm.toString());
//   };

//   // Pagination Logic
//   const totalPages = Math.ceil(vehicles.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentVehicles = vehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">
//           Buses & Mini Buses Fleet
//         </h1>

//         {/* AI Route Planner */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
//           <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//             <SparklesIcon className="h-8 w-8 text-purple-600" />
//             Plan Your Group Trip with AI
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 <MapPinIcon className="inline h-5 w-5 text-blue-600 mr-1" />
//                 Pickup Location
//               </label>
//               <input
//                 type="text"
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//                 placeholder="e.g. Delhi, Bangalore"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>

//             <div className="text-center hidden md:block">
//               <ArrowRightIcon className="h-10 w-10 text-blue-600 mx-auto" />
//             </div>
//             <div className="md:hidden text-center">
//               <ArrowRightIcon className="h-8 w-8 text-blue-600 mx-auto rotate-90" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 <MapPinIcon className="inline h-5 w-5 text-green-600 mr-1" />
//                 Destination
//               </label>
//               <input
//                 type="text"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//                 placeholder="e.g. Manali, Mysore"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>
//           </div>

//           {loading && (
//             <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 font-medium text-center">
//               Loading Distance and Nearby Places...
//             </div>
//           )}

//           {distance && (
//             <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-300 text-center">
//               <p className="text-xl font-bold text-purple-900">
//                 Trip: <span className="text-blue-700">{from}</span> → <span className="text-green-700">{to}</span>
//               </p>
//               <p className="text-lg mt-2 font-semibold">
//                 Estimated Distance: <span className="text-2xl text-purple-700">{distance} KM</span>
//               </p>
//             </div>
//           )}

//           {famousPlaces.length > 0 && (
//             <div className="mt-8">
//               <p className="text-lg font-bold text-gray-800 mb-4 text-center">
//                 Famous Places Near <span className="text-green-600">{to}</span>:
//               </p>
//               <div className="flex flex-wrap justify-center gap-3">
//                 {famousPlaces.map((place) => (
//                   <button
//                     key={place}
//                     onClick={() => handlePlaceClick(place)}
//                     className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md ${
//                       selectedPlace === place
//                         ? 'bg-green-600 text-white ring-4 ring-green-200'
//                         : 'bg-white border-2 border-purple-400 text-purple-700 hover:bg-purple-50 hover:border-purple-600'
//                     }`}
//                   >
//                     {place} (+40 KM)
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Bus Cards with Pagination */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {currentVehicles.map((v) => {
//             const totalExclTax = v.perKm * finalKm;
//             const totalInclTax = v.perKmWithTax * finalKm;

//             return (
//               <div
//                 key={v.name}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="h-48 bg-gray-200 relative">
//                   <Image
//                     src="/bus-placeholder.jpg"
//                     alt={v.name}
//                     fill
//                     className="object-cover"
//                     unoptimized
//                   />
//                   <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow">
//                     {v.seats} Seats
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-lg font-bold text-gray-800 mb-3">{v.name}</h3>

//                   <div className="space-y-2 text-sm mb-4">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Excl. Tax</span>
//                       <span className="font-medium">₹{v.perKm}/km</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Incl. Tax</span>
//                       <span className="font-bold text-green-600">₹{v.perKmWithTax}/km</span>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-xs font-medium text-gray-700 mb-1">
//                       Total KM {from && to && `(for ${from} → ${to})`}
//                     </label>
//                     <input
//                       type="number"
//                       value={km}
//                       onChange={(e) => setKm(e.target.value)}
//                       placeholder={distance?.toString() || '500'}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500"
//                     />
//                   </div>

//                   {finalKm > 0 && (
//                     <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-purple-200">
//                       <div className="text-center space-y-1">
//                         <p className="text-xs text-gray-600">Excl. Tax</p>
//                         <p className="text-lg font-bold text-gray-800">₹{formatPrice(totalExclTax)}</p>
//                         <div className="border-t pt-2">
//                           <p className="text-xs text-gray-600">Incl. Tax</p>
//                           <p className="text-2xl font-extrabold text-green-600">₹{formatPrice(totalInclTax)}</p>
//                         </div>
//                         {selectedPlace && (
//                           <p className="text-xs text-purple-700 mt-2">+ {selectedPlace}</p>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-12">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//               disabled={currentPage === 1}
//               className="p-2 rounded-lg bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronLeftIcon className="h-5 w-5" />
//             </button>
//             <span className="text-sm font-medium">
//               Page <span className="text-purple-600">{currentPage}</span> of {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//               disabled={currentPage === totalPages}
//               className="p-2 rounded-lg bg-white shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ChevronRightIcon className="h-5 w-5" />
//             </button>
//           </div>
//         )}

//         {/* CTA */}
//         <div className="mt-20 text-center bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 text-white py-14 rounded-3xl shadow-2xl">
//           <p className="text-4xl font-bold">Book Your Group Trip Now!</p>
//           <p className="text-2xl mt-4">
//             Call or WhatsApp:{' '}
//             <span className="font-bold text-yellow-300 text-3xl">+91 98765 43210</span>
//           </p>
//           <p className="mt-3 text-lg opacity-90">24×7 Booking Available</p>
//         </div>
//       </div>
//     </div>
//   );
// }











'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPinIcon, ArrowRightIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const vehicles = [
  { name: 'Mini Bus (21 Seater)', seats: 21, perKm: 40, perKmWithTax: 48 },
  { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
  { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
  { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
  { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },

    { name: 'Mini Bus (21 Seater)', seats: 21, perKm: 40, perKmWithTax: 48 },
  { name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58 },
  { name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75 },
  { name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105 },
  { name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128 },
  // Add more if you have — pagination handles it
];

const ITEMS_PER_PAGE = 10;

export default function BusesPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [km, setKm] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [famousPlaces, setFamousPlaces] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  useEffect(() => {
    if (!from || !to || from.length < 3 || to.length < 3) {
      setDistance(null);
      setFamousPlaces([]);
      setSelectedPlace(null);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/distance?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}`);
        const data = await res.json();

        if (data.error) {
          setDistance(data.fallback_distance || 150);
          setFamousPlaces(data.fallback_places || ['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
        } else {
          setDistance(data.distance);
          setFamousPlaces(data.famous_places || []);
        }

        if (!km && data.distance) setKm(data.distance.toString());
      } catch (err) {
        setDistance(150);
        setFamousPlaces(['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo']);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [from, to, km]);

  const finalKm = Number(km || distance || 0);

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    const extraKm = 40;
    const newKm = (finalKm || distance || 0) + extraKm;
    setKm(newKm.toString());
  };

  // Pagination
  const totalPages = Math.ceil(vehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVehicles = vehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">
          Buses & Mini Buses Fleet
        </h1>

        {/* Full-Width AI Planner */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 mb-12 text-white transform hover:scale-[1.01] transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-4">
            <SparklesIcon className="h-12 w-12 animate-pulse" />
            Plan Your Group Trip with AI
            <SparklesIcon className="h-12 w-12 animate-pulse" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium">
                <MapPinIcon className="h-6 w-6 text-yellow-300" />
                Pickup Location
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Jaipur, Delhi"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-yellow-300 focus:outline-none text-lg transition-all"
              />
            </div>

            <div className="hidden md:flex justify-center items-center">
              <ArrowRightIcon className="h-16 w-16 text-yellow-300 animate-pulse" />
            </div>
            <div className="md:hidden text-center">
              <ArrowRightIcon className="h-12 w-12 text-yellow-300 mx-auto rotate-90 animate-pulse" />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-medium">
                <MapPinIcon className="h-6 w-6 text-green-300" />
                Destination
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Kerala, Manali"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-4 focus:ring-green-300 focus:outline-none text-lg transition-all"
              />
            </div>
          </div>

          {loading && (
            <div className="mt-8 text-center">
              <p className="text-xl animate-pulse">Loading...</p>
            </div>
          )}

          {distance && (
            <div className="mt-10 bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/40">
              <p className="text-2xl md:text-3xl font-bold">
                Trip: <span className="text-yellow-300">{from}</span> → <span className="text-green-300">{to}</span>
              </p>
              <p className="text-4xl md:text-5xl font-extrabold mt-4 text-yellow-300">
                {distance} KM
              </p>
            </div>
          )}

          {famousPlaces.length > 0 && (
            <div className="mt-10">
              <p className="text-2xl font-bold text-center mb-6">Famous Places Near {to}:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {famousPlaces.map((place) => (
                  <button
                    key={place}
                    onClick={() => handlePlaceClick(place)}
                    className={`px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-110 hover:shadow-2xl ${
                      selectedPlace === place
                        ? 'bg-green-400 text-white ring-8 ring-green-300'
                        : 'bg-white/30 backdrop-blur text-white hover:bg-white/50 border-2 border-white/50'
                    }`}
                  >
                    {place} (+40 KM)
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {currentVehicles.map((v) => {
            const totalExcl = v.perKm * finalKm;
            const totalIncl = v.perKmWithTax * finalKm;

            return (
              <div
                key={v.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/bus-placeholder.jpg"
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-3xl font-bold">{v.seats}</p>
                    <p className="text-lg">Seater</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{v.name}</h3>

                  <div className="space-y-3 text-sm mb-5">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Excl. Tax</span>
                      <span className="font-semibold">₹{v.perKm}/km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Incl. Tax</span>
                      <span className="font-bold text-green-600 text-lg">₹{v.perKmWithTax}/km</span>
                    </div>
                  </div>

                  <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    placeholder={distance?.toString() || 'Enter KM'}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-400 focus:border-purple-600 transition text-center font-semibold"
                  />

                  {finalKm > 0 && (
                    <div className="mt-5 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                      <div className="text-center space-y-2">
                        <p className="text-xs text-gray-600">Total (Excl. Tax)</p>
                        <p className="text-xl font-bold">₹{formatPrice(totalExcl)}</p>
                        <div className="border-t pt-2">
                          <p className="text-xs text-gray-600">Total (Incl. Tax)</p>
                          <p className="text-3xl font-extrabold text-green-600">₹{formatPrice(totalIncl)}</p>
                        </div>
                        {selectedPlace && (
                          <p className="text-sm text-purple-700 mt-3 font-medium">
                            + {selectedPlace}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mb-16">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
            >
              <ChevronLeftIcon className="h-8 w-8 text-purple-600" />
            </button>
            <span className="text-xl font-bold text-purple-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-110"
            >
              <ChevronRightIcon className="h-8 w-8 text-purple-600" />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-800 text-white py-16 rounded-3xl shadow-2xl">
          <p className="text-5xl font-bold mb-4">Ready to Travel?</p>
          <p className="text-3xl">
            Call or WhatsApp:{' '}
            <span className="font-bold text-yellow-300 text-4xl">+91 98765 43210</span>
          </p>
          <p className="text-xl mt-4 opacity-90">24×7 Instant Booking</p>
        </div>
      </div>
    </div>
  );
}