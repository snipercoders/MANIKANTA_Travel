
// // // // File Path: app/transportation/cars/page.tsx



// 'use client';
// import React, { useState, useEffect, useMemo } from 'react';
// import {
//   MapPinIcon,
//   ArrowRightIcon,
//   SparklesIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   InformationCircleIcon,
//   FunnelIcon,
//   XMarkIcon,
//   StarIcon,
//   UserGroupIcon,
//   ShieldCheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   Cog6ToothIcon,
//   ArrowsUpDownIcon,
//   CheckCircleIcon,
//   PhoneIcon,
//   ChatBubbleLeftRightIcon,
//   CalendarIcon,
//   ArrowPathIcon,
//   PhotoIcon
// } from '@heroicons/react/24/outline';
// import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
// import Image from 'next/image';
// import { calculateDistance } from '@/lib/utils/distanceCalculator';

// // Complete cars data with enhanced details
// const vehicles = [
//   {
//     id: 1,
//     name: 'Sedan (Dzire/Etios)',
//     seats: 4,
//     perKm: 13,
//     perKmWithTax: 15,
//     category: 'Economy',
//     ac: true,
//     rating: 4.2,
//     trips: 1200,
//     features: ['AC', 'Bluetooth', 'Spacious Boot', 'Fuel Efficient'],
//     amenities: ['Free Water', 'GPS Navigation', 'Newspaper'],
//     imageColor: 'blue',
//     badge: 'Most Popular',
//     images: [
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg',
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg',
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg'
//     ]
//   },
//   {
//     id: 2,
//     name: 'Innova Crysta',
//     seats: 7,
//     perKm: 18,
//     perKmWithTax: 21,
//     category: 'Premium',
//     ac: true,
//     rating: 4.5,
//     trips: 850,
//     features: ['AC', 'Captain Seats', 'Spacious', 'Entertainment System'],
//     amenities: ['Free WiFi', 'Charging Ports', 'Snacks'],
//     imageColor: 'green',
//     badge: 'Family Favorite',
//     images: [
//  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg',
//  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg',
//  'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg'
//     ]
//   },
//   {
//     id: 3,
//     name: 'Tempo Traveller (12 Seater)',
//     seats: 12,
//     perKm: 22,
//     perKmWithTax: 26,
//     category: 'Luxury',
//     ac: true,
//     rating: 4.3,
//     trips: 650,
//     features: ['AC', 'Luxury Seats', 'LED TV', 'Refrigerator'],
//     amenities: ['USB Ports', 'Reading Lights', 'Blankets'],
//     imageColor: 'purple',
//     badge: 'Group Choice',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767269077/WhatsApp_Image_2026-01-01_at_17.29.35_2_nl5pi5.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766669955/WhatsApp_Image_2025-12-25_at_18.55.01_1_ye8qpm.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767269078/WhatsApp_Image_2026-01-01_at_17.29.34_mmgz4g.jpg'
//     ]
//   },
//   {
//     id: 4,
//     name: 'Tempo Traveller (17 Seater)',
//     seats: 17,
//     perKm: 26,
//     perKmWithTax: 30,
//     category: 'Luxury',
//     ac: true,
//     rating: 4.4,
//     trips: 420,
//     features: ['AC', 'Spacious', 'Sound System', 'Comfort Seats'],
//     amenities: ['Water Dispenser', 'First Aid', 'Tour Guide'],
//     imageColor: 'indigo',
//     badge: 'Corporate',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.37_bgfd7y.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.34_1_fdgc5y.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.35_sxcamz.jpg'
//     ]
//   },

//   {
//     id: 6,
//     name: 'Ertiga',
//     seats: 6,
//     perKm: 16,
//     perKmWithTax: 19,
//     category: 'Standard',
//     ac: true,
//     rating: 4.1,
//     trips: 980,
//     features: ['AC', 'Family Friendly', 'Economical', 'Comfort'],
//     amenities: ['Phone Charger', 'Magazines', 'Basic Kit'],
//     imageColor: 'teal',
//     images: [
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg',
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg',    
// 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg'
//     ]
//   },
 

// ];

// // Popular routes
// const popularRoutes = [
// { from: 'Bangalore', to: 'Sabarimala', distance: 450, time: '9-10 hrs', priceRange: '₹5,800 - ₹11,600' },
// { from: 'Bangalore', to: 'Gokarna', distance: 530, time: '10-11 hrs', priceRange: '₹6,900 - ₹13,800' },
// { from: 'Bangalore', to: 'Ooty/Coonoor', distance: 280, time: '6-7 hrs', priceRange: '₹3,600 - ₹7,200' },
// { from: 'Bangalore', to: 'Karnataka Round Trip', distance: 1200, time: 'Multi-day', priceRange: '₹15,600 - ₹31,200' },
// { from: 'Karnataka', to: 'Kochi-Chennai-Mumbai Circuit', distance: 1800, time: 'Multi-day Tour', priceRange: '₹23,400 - ₹46,800' },
// { from: 'Bangalore', to: 'Tirupati', distance: 250, time: '5-6 hrs', priceRange: '₹3,250 - ₹6,500' },
// ];

// export default function CarsPage() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [km, setKm] = useState('');
//   const [distance, setDistance] = useState<number | null>(null);
//   const [duration, setDuration] = useState<string>('');
//   const [routeDetails, setRouteDetails] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [sortBy, setSortBy] = useState<'price' | 'rating' | 'seats'>('price');
//   const [showFilters, setShowFilters] = useState(false);
//   const [minSeats, setMinSeats] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(100);
//   const [showACOnly, setShowACOnly] = useState(false);
//   const [selectedRoute, setSelectedRoute] = useState<any>(null);
//   const [showQuickQuote, setShowQuickQuote] = useState(false);
//   const [showPhotos, setShowPhotos] = useState(false);
//   const [selectedVehiclePhotos, setSelectedVehiclePhotos] = useState<string[]>([]);
//   const [selectedVehicleName, setSelectedVehicleName] = useState('');
//   const [quoteDetails, setQuoteDetails] = useState({
//     passengers: '',
//     days: 1,
//     date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//     vehicle: null as any
//   });
//   const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
//   const [isCalculating, setIsCalculating] = useState(false);

//   const ITEMS_PER_PAGE = 6;
//   const MINIMUM_KM_PER_DAY = 250;
//   const DRIVER_BATA_PER_DAY = 1000;
//   const GST_PERCENTAGE = 18;

//   const categories = ['All', 'Economy', 'Premium', 'Luxury', 'Luxury SUV', 'Ultra Luxury', 'Adventure', 'Standard'];

//   const formatPrice = (price: number) => price.toLocaleString('en-IN');

//   const getGradientColor = (color: string) => {
//     return 'from-red-500 to-red-700';
//   };

//   const calculateDistanceWithAPI = async () => {
//     if (!from || !to || from.trim() === '' || to.trim() === '') {
//       alert('Please enter both pickup and destination locations');
//       return;
//     }
//     setIsCalculating(true);
//     setLoading(true);
//     try {
//       const result = await calculateDistance(from, to);

//       if (result) {
//         setDistance(result.distance);
//         setDuration(result.duration);
//         setRouteDetails(result.route);
//         if (!km) setKm(result.distance.toString());
//       } else {
//         const mockDistance = Math.floor(Math.random() * 500) + 100;
//         setDistance(mockDistance);
//         setDuration(`${Math.ceil(mockDistance / 60)}-${Math.ceil(mockDistance / 50)} hrs`);
//         setRouteDetails([from, to]);
//         if (!km) setKm(mockDistance.toString());
//       }
//     } catch (error) {
//       console.error('Distance calculation failed:', error);
//       const mockDistance = Math.floor(Math.random() * 500) + 100;
//       setDistance(mockDistance);
//       setDuration(`${Math.ceil(mockDistance / 60)}-${Math.ceil(mockDistance / 50)} hrs`);
//       setRouteDetails([from, to]);
//       if (!km) setKm(mockDistance.toString());
//     } finally {
//       setLoading(false);
//       setIsCalculating(false);
//     }
//   };

//   const filteredVehicles = useMemo(() => {
//     let filtered = [...vehicles];

//     if (selectedCategory && selectedCategory !== 'All') {
//       filtered = filtered.filter(v => v.category === selectedCategory);
//     }

//     if (minSeats > 0) {
//       filtered = filtered.filter(v => v.seats >= minSeats);
//     }

//     if (showACOnly) {
//       filtered = filtered.filter(v => v.ac);
//     }

//     if (maxPrice < 100) {
//       const maxPriceValue = (maxPrice / 100) * 72;
//       filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
//     }

//     filtered.sort((a, b) => {
//       if (sortBy === 'price') return a.perKmWithTax - b.perKmWithTax;
//       if (sortBy === 'rating') return b.rating - a.rating;
//       return b.seats - a.seats;
//     });

//     return filtered;
//   }, [selectedCategory, minSeats, showACOnly, maxPrice, sortBy]);

//   const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentVehicles = filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const finalKm = Number(km || distance || 250);
//   const numberOfDays = Math.ceil(finalKm / MINIMUM_KM_PER_DAY);
//   const minimumKmCharge = numberOfDays * MINIMUM_KM_PER_DAY;
//   const driverBataTotal = numberOfDays * DRIVER_BATA_PER_DAY;

//   const handleRouteSelect = async (route: any) => {
//     setFrom(route.from);
//     setTo(route.to);
//     setKm(route.distance.toString());
//     setSelectedRoute(route);
//     setLoading(true);

//     try {
//       const result = await calculateDistance(route.from, route.to);
//       if (result) {
//         setDistance(result.distance);
//         setDuration(result.duration);
//         setRouteDetails(result.route);
//       }
//     } catch (error) {
//       console.error('Error calculating route distance:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const calculateTotal = (vehicle: any, customDays?: number, customPassengers?: number) => {
//     const days = customDays || numberOfDays;
//     const kmToCharge = Math.max(finalKm, days * MINIMUM_KM_PER_DAY);
//     const baseFare = vehicle.perKmWithTax * kmToCharge;
//     const gst = (baseFare * GST_PERCENTAGE) / 100;
//     const total = baseFare + (days * DRIVER_BATA_PER_DAY) + gst;
//     return { baseFare, gst, total, kmToCharge, days };
//   };

//   const handleQuickQuote = (vehicle: any) => {
//     setShowQuickQuote(true);
//     setQuoteDetails({
//       passengers: '',
//       days: numberOfDays,
//       date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//       vehicle: vehicle
//     });
//   };

//   const handleViewPhotos = (vehicle: any) => {
//     setSelectedVehiclePhotos(vehicle.images);
//     setSelectedVehicleName(vehicle.name);
//     setShowPhotos(true);
//   };

//   const calculateQuotePrice = () => {
//     if (!quoteDetails.vehicle) return { min: 0, max: 0 };
    
//     const { total, days, kmToCharge } = calculateTotal(
//       quoteDetails.vehicle, 
//       quoteDetails.days,
//       quoteDetails.passengers ? parseInt(quoteDetails.passengers) : undefined
//     );
    
//     // Add a buffer for variance (10-20%)
//     const min = total * 0.9;
//     const max = total * 1.2;
    
//     return { min, max, total, days, kmToCharge };
//   };

//   const quotePrice = calculateQuotePrice();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section - Red Theme */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <SparklesIcon className="h-5 w-5 text-yellow-300" />
//               <span className="text-sm font-semibold text-white">PREMIUM CAR RENTAL SERVICE</span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//               Premium <span className="text-yellow-300">Cars & Tempo Travellers</span>
//             </h1>

//             <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
//               Outstation trips, airport transfers, local rentals & corporate travel across India
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
//               {[
//                 { label: 'Vehicles', value: '50+' },
//                 { label: 'Cities', value: '100+' },
//                 { label: 'Happy Customers', value: '10K+' },
//                 { label: 'Trips Completed', value: '25K+' },
//               ].map((stat, idx) => (
//                 <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                   <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
//                   <div className="text-sm text-red-200">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
//         {/* Trip Planner Card */}
//         <div className="bg-white rounded-2xl shadow-2xl mb-8 overflow-hidden">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <MapPinIcon className="h-7 w-7" />
//               Plan Your Journey
//             </h2>
//             <p className="text-red-100">Get instant pricing with accurate distance calculation</p>
//           </div>

//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
//                 <div className="relative">
//                   <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     value={from}
//                     onChange={(e) => setFrom(e.target.value)}
//                     placeholder="Enter city or airport"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
//                 <div className="relative">
//                   <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     value={to}
//                     onChange={(e) => setTo(e.target.value)}
//                     placeholder="Where do you want to go?"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Distance (KM)</label>
//                 <input
//                   type="number"
//                   value={km}
//                   onChange={(e) => setKm(e.target.value)}
//                   placeholder="Auto-calculated"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <button
//                 onClick={calculateDistanceWithAPI}
//                 disabled={!from || !to || isCalculating}
//                 className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full md:w-auto"
//               >
//                 {isCalculating ? (
//                   <>
//                     <ArrowPathIcon className="h-5 w-5 animate-spin" />
//                     <span className="text-sm md:text-base">Calculating...</span>
//                   </>
//                 ) : (
//                   <>
//                     <MapPinIcon className="h-5 w-5" />
//                     <span className="text-sm md:text-base">Calculate Distance & Price</span>
//                   </>
//                 )}
//               </button>
//             </div>

//             {loading && (
//               <div className="mt-6 text-center">
//                 <div className="inline-flex items-center gap-3">
//                   <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
//                   <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-150"></div>
//                   <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-300"></div>
//                   <span className="text-gray-600 text-sm md:text-base">Calculating distance via AI...</span>
//                 </div>
//               </div>
//             )}

//             {distance && !loading && (
//               <div className="mt-6 bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-4 border border-red-200">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
//                   <div className="flex-1">
//                     <div className="text-sm text-gray-600">Route Details</div>
//                     <div className="text-lg font-bold text-gray-900">{from} → {to}</div>
//                     <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1">
//                       <span className="text-red-600 font-semibold">{distance} KM</span>
//                       <span className="text-gray-400 hidden md:inline">•</span>
//                       <span className="text-gray-600">{duration}</span>
//                       <span className="text-gray-400 hidden md:inline">•</span>
//                       <span className="text-red-600 font-medium">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
//                     </div>
//                   </div>
//                   <button
//                     onClick={calculateDistanceWithAPI}
//                     className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors w-full md:w-auto"
//                   >
//                     Recalculate
//                   </button>
//                 </div>

//                 {routeDetails.length > 2 && (
//                   <div className="text-sm text-gray-600 mt-2">
//                     <span className="font-medium">Suggested Route:</span> {routeDetails.join(' → ')}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Popular Routes */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Routes</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
//             {popularRoutes.map((route, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleRouteSelect(route)}
//                 className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
//                   selectedRoute?.from === route.from ? 'border-red-500' : 'border-gray-200'
//                 }`}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <div className="flex-1">
//                     <div className="font-bold text-gray-900 text-left">{route.from} → {route.to}</div>
//                     <div className="text-sm text-gray-600 text-left">{route.distance} km • {route.time}</div>
//                   </div>
//                   <ArrowRightIcon className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
//                 </div>
//                 <div className="text-sm font-semibold text-green-600 text-left">{route.priceRange}</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Controls Section */}
//         <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//             <div>
//               <h3 className="text-lg md:text-xl font-bold text-gray-900">Available Vehicles ({filteredVehicles.length})</h3>
//               <p className="text-gray-600 text-sm md:text-base">Select from our premium fleet</p>
//             </div>

//             <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full md:w-auto">
//               <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
//                 {categories.slice(0, 5).map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
//                     className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
//                       selectedCategory === category
//                         ? 'bg-red-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setShowFilters(!showFilters)}
//                   className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
//                 >
//                   <FunnelIcon className="h-4 w-4 md:h-5 md:w-5" />
//                   <span className="hidden md:inline">Filters</span>
//                 </button>

//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value as any)}
//                   className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm md:text-base"
//                 >
//                   <option value="price">Price: Low to High</option>
//                   <option value="rating">Highest Rated</option>
//                   <option value="seats">Most Seats</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {showFilters && (
//             <div className="mt-4 md:mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="font-semibold text-gray-900 text-sm md:text-base">Advanced Filters</h4>
//                 <button onClick={() => setShowFilters(false)}>
//                   <XMarkIcon className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Minimum Seats: {minSeats || 'Any'}
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="20"
//                     value={minSeats}
//                     onChange={(e) => setMinSeats(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>Any</span>
//                     <span>20 Seats</span>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Max Price per KM: ₹{((maxPrice / 100) * 72).toFixed(0)}
//                   </label>
//                   <input
//                     type="range"
//                     min="10"
//                     max="100"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>₹7</span>
//                     <span>₹72</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <input
//                     type="checkbox"
//                     id="acOnly"
//                     checked={showACOnly}
//                     onChange={(e) => setShowACOnly(e.target.checked)}
//                     className="h-5 w-5 rounded border-gray-300 accent-red-600"
//                   />
//                   <label htmlFor="acOnly" className="text-sm font-medium text-gray-700">
//                     Show AC vehicles only
//                   </label>
//                 </div>
//               </div>

//               <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
//                 <button
//                   onClick={() => {
//                     setMinSeats(0);
//                     setMaxPrice(100);
//                     setShowACOnly(false);
//                   }}
//                   className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
//                 >
//                   Reset Filters
//                 </button>
//                 <button
//                   onClick={() => setShowFilters(false)}
//                   className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Vehicles Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
//           {currentVehicles.map((vehicle) => {
//             const { total, kmToCharge } = calculateTotal(vehicle);
//             const gradient = getGradientColor(vehicle.imageColor);
//             const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
//             const vehicleImage = vehicle.images?.[currentImageIndex] || 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg';

//             return (
//               <div
//                 key={vehicle.id}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
//                 onMouseEnter={() => setHoveredVehicle(vehicle.id)}
//                 onMouseLeave={() => setHoveredVehicle(null)}
//               >
//                 <div className="relative h-48 md:h-56 overflow-hidden">
//                   <div className="absolute inset-0">
//                     <Image
//                       src={vehicleImage}
//                       alt={vehicle.name}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       priority={vehicle.id <= 3}
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30`} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                   </div>

//                   <div className="absolute top-4 left-4 flex gap-1">
//                     {vehicle.images?.map((_, idx) => (
//                       <div
//                         key={idx}
//                         className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
//                       />
//                     ))}
//                   </div>

//                   {vehicle.badge && (
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
//                         {vehicle.badge}
//                       </span>
//                     </div>
//                   )}

//                   <div className="absolute bottom-4 left-4">
//                     <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
//                       <div className="text-2xl font-bold text-white">{vehicle.seats}</div>
//                       <div className="text-xs text-white/80">Seats</div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <StarIconSolid className="h-3 w-3 text-yellow-400" />
//                     <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
//                     <span className="text-white/70 text-xs">({vehicle.trips})</span>
//                   </div>
//                 </div>

//                 <div className="p-4 md:p-6">
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
//                     <div className="flex-1">
//                       <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
//                         {vehicle.name}
//                       </h3>
//                       <div className="flex flex-wrap items-center gap-2 mt-1">
//                         <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
//                           {vehicle.category}
//                         </span>
//                         {vehicle.ac && (
//                           <span className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded">
//                             <span className="text-xs">❄️</span>
//                             AC
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="text-left md:text-right">
//                       <div className="text-xl md:text-2xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
//                       <div className="text-xs md:text-sm text-gray-500">per km</div>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
//                     <div className="flex flex-wrap gap-2">
//                       {vehicle.features.slice(0, 3).map((feature, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
//                           {feature}
//                         </span>
//                       ))}
//                       {vehicle.features.length > 3 && (
//                         <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
//                           +{vehicle.features.length - 3} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mb-4 bg-gray-50 rounded-lg p-3">
//                     <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
//                       <span className="text-sm text-gray-600">Estimated for {kmToCharge} km:</span>
//                       <span className="text-lg font-bold text-gray-900">₹{formatPrice(total)}</span>
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       Includes driver allowance, taxes, and minimum KM charges
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <button
//                       onClick={() => handleQuickQuote(vehicle)}
//                       className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
//                     >
//                       Get Quote
//                     </button>
//                     <button 
//                       onClick={() => handleViewPhotos(vehicle)}
//                       className="px-4 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors text-sm md:text-base flex items-center justify-center gap-2"
//                     >
//                       <PhotoIcon className="h-5 w-5" />
//                       View Photos
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
//             <div className="text-gray-600 text-sm md:text-base">
//               Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} vehicles
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 <ChevronLeftIcon className="h-5 w-5" />
//               </button>

//               {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                 const page = currentPage <= 3 ? i + 1 :
//                             currentPage >= totalPages - 2 ? totalPages - 4 + i :
//                             currentPage - 2 + i;

//                 if (page < 1 || page > totalPages) return null;

//                 return (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-medium text-sm md:text-base ${
//                       currentPage === page
//                         ? 'bg-red-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 );
//               })}

//               <button
//                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//                 className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 <ChevronRightIcon className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Features Section */}
//         <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-6 md:p-8 mb-12 text-white">
//           <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why Choose Our Car Rental Service?</h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {
//                 icon: <ShieldCheckIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "100% Safe & Insured",
//                 description: "All vehicles are fully insured with GPS tracking and emergency support"
//               },
//               {
//                 icon: <ClockIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "24/7 Availability",
//                 description: "Round-the-clock booking support and emergency assistance"
//               },
//               {
//                 icon: <StarIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "Premium Experience",
//                 description: "Well-maintained vehicles with professional chauffeurs"
//               },
//             ].map((feature, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl mb-3 md:mb-4">
//                   {feature.icon}
//                 </div>
//                 <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-red-200 text-sm md:text-base">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-8">
//             <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
//             <p className="text-lg md:text-xl mb-6 opacity-90">Get your personalized quote in under 2 minutes</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="tel:+919591762419"
//                 className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg"
//               >
//                 <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
//                 Call Now: +91 95917 62419
//               </a>

//               <a
//                 href="https://wa.me/919591762419"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-900 transition-all shadow-lg"
//               >
//                 <ChatBubbleLeftRightIcon className="h-5 w-5 md:h-6 md:w-6" />
//                 WhatsApp Quick Book
//               </a>
//             </div>

//             <p className="mt-6 text-sm md:text-base opacity-80">Instant confirmation • No hidden charges • Free cancellation</p>
//           </div>
//         </div>
//       </div>

//       {/* Quick Quote Modal */}
//       {showQuickQuote && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-xl font-bold text-gray-900">Get Instant Quote</h3>
//               <button onClick={() => setShowQuickQuote(false)}>
//                 <XMarkIcon className="h-6 w-6 text-gray-500" />
//               </button>
//             </div>

//             <div className="p-6">
//               {quoteDetails.vehicle && (
//                 <div className="mb-6 p-4 bg-red-50 rounded-lg">
//                   <h4 className="font-bold text-gray-900 mb-2">{quoteDetails.vehicle.name}</h4>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">{quoteDetails.vehicle.seats} Seats • {quoteDetails.vehicle.category}</span>
//                     <span className="text-green-600 font-semibold">₹{quoteDetails.vehicle.perKmWithTax}/km</span>
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     value={quoteDetails.passengers}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       // Allow only numbers
//                       if (value === '' || /^\d+$/.test(value)) {
//                         setQuoteDetails({...quoteDetails, passengers: value});
//                       }
//                     }}
//                     placeholder="Enter number of passengers"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     This vehicle can accommodate up to {quoteDetails.vehicle?.seats || 20} passengers
//                   </p>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
//                   <input
//                     type="number"
//                     value={quoteDetails.days}
//                     onChange={(e) => setQuoteDetails({...quoteDetails, days: parseInt(e.target.value) || 1})}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                     min="1"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
//                   <input
//                     type="date"
//                     value={quoteDetails.date}
//                     onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                 </div>

//                 <div className="pt-4 border-t">
//                   <div className="mb-4">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-gray-600">Distance:</span>
//                       <span className="font-semibold text-gray-900">{quotePrice.kmToCharge} km</span>
//                     </div>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-gray-600">Duration:</span>
//                       <span className="font-semibold text-gray-900">{quotePrice.days} {quotePrice.days === 1 ? 'Day' : 'Days'}</span>
//                     </div>
//                     <div className="flex justify-between mb-3">
//                       <span className="text-gray-600">Passengers:</span>
//                       <span className="font-semibold text-gray-900">
//                         {quoteDetails.passengers || 'Not specified'}
//                       </span>
//                     </div>
                    
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium">Estimated Cost:</span>
//                       <span className="text-2xl font-bold text-green-600">
//                         {quoteDetails.passengers ? `₹${formatPrice(quotePrice.min)} - ₹${formatPrice(quotePrice.max)}` : 'Enter passenger count'}
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-500 mb-4">
//                       {quoteDetails.passengers 
//                         ? 'Final price depends on exact requirements and route details'
//                         : 'Please enter number of passengers to get price estimate'}
//                     </p>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <button
//                       onClick={() => setShowQuickQuote(false)}
//                       className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                     >
//                       Cancel
//                     </button>
//                     <button 
//                       disabled={!quoteDetails.passengers}
//                       className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       Get Exact Quote Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Photos Modal */}
//       {showPhotos && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//             <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-red-600 to-red-700">
//               <h3 className="text-xl font-bold text-white flex items-center gap-3">
//                 <PhotoIcon className="h-6 w-6" />
//                 {selectedVehicleName} - Photo Gallery
//               </h3>
//               <button 
//                 onClick={() => setShowPhotos(false)}
//                 className="text-white hover:text-gray-200"
//               >
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 {selectedVehiclePhotos.map((photo, index) => (
//                   <div key={index} className="relative h-48 md:h-56 rounded-lg overflow-hidden">
//                     <Image
//                       src={photo}
//                       alt={`${selectedVehicleName} - Image ${index + 1}`}
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-300"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     <div className="absolute bottom-3 left-3">
//                       <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
//                         Image {index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h4 className="font-semibold text-gray-900 mb-2">Vehicle Details</h4>
//                 <p className="text-sm text-gray-600 mb-3">
//                   These are actual photos of our {selectedVehicleName} fleet. All vehicles are maintained to the highest standards and are regularly serviced.
//                 </p>
//                 <div className="text-xs text-gray-500">
//                   <p>• High-resolution photos</p>
//                   <p>• Actual fleet vehicles</p>
//                   <p>• Regular maintenance</p>
//                   <p>• Professional cleaning</p>
//                 </div>
//               </div>

//               <div className="mt-6 text-center">
//                 <button
//                   onClick={() => setShowPhotos(false)}
//                   className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
//                 >
//                   Close Gallery
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





















// File Path: app/transportation/cars/page.tsx

'use client';
import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
  XMarkIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { calculateDistance } from '@/lib/utils/distanceCalculator';

// Complete cars data with enhanced details
const vehicles = [
  {
    id: 1,
    name: 'Sedan (Dzire/Etios)',
    seats: 4,
    perKm: 13,
    perKmWithTax: 15,
    category: 'Economy',
    ac: true,
    rating: 4.2,
    trips: 1200,
    features: ['AC', 'Bluetooth', 'Spacious Boot', 'Fuel Efficient'],
    amenities: ['Free Water', 'GPS Navigation', 'Newspaper'],
    imageColor: 'blue',
    badge: 'Most Popular',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg'
    ]
  },
  {
    id: 2,
    name: 'Innova Crysta',
    seats: 7,
    perKm: 18,
    perKmWithTax: 21,
    category: 'Premium',
    ac: true,
    rating: 4.5,
    trips: 850,
    features: ['AC', 'Captain Seats', 'Spacious', 'Entertainment System'],
    amenities: ['Free WiFi', 'Charging Ports', 'Snacks'],
    imageColor: 'green',
    badge: 'Family Favorite',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg'
    ]
  },
  {
    id: 3,
    name: 'Tempo Traveller (12 Seater)',
    seats: 12,
    perKm: 22,
    perKmWithTax: 26,
    category: 'Luxury',
    ac: true,
    rating: 4.3,
    trips: 650,
    features: ['AC', 'Luxury Seats', 'LED TV', 'Refrigerator'],
    amenities: ['USB Ports', 'Reading Lights', 'Blankets'],
    imageColor: 'purple',
    badge: 'Group Choice',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767269077/WhatsApp_Image_2026-01-01_at_17.29.35_2_nl5pi5.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766669955/WhatsApp_Image_2025-12-25_at_18.55.01_1_ye8qpm.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767269078/WhatsApp_Image_2026-01-01_at_17.29.34_mmgz4g.jpg'
    ]
  },
  {
    id: 4,
    name: 'Tempo Traveller (17 Seater)',
    seats: 17,
    perKm: 26,
    perKmWithTax: 30,
    category: 'Luxury',
    ac: true,
    rating: 4.4,
    trips: 420,
    features: ['AC', 'Spacious', 'Sound System', 'Comfort Seats'],
    amenities: ['Water Dispenser', 'First Aid', 'Tour Guide'],
    imageColor: 'indigo',
    badge: 'Corporate',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.37_bgfd7y.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.34_1_fdgc5y.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270050/WhatsApp_Image_2026-01-01_at_17.29.35_sxcamz.jpg'
    ]
  },
  {
    id: 6,
    name: 'Ertiga',
    seats: 6,
    perKm: 16,
    perKmWithTax: 19,
    category: 'Standard',
    ac: true,
    rating: 4.1,
    trips: 980,
    features: ['AC', 'Family Friendly', 'Economical', 'Comfort'],
    amenities: ['Phone Charger', 'Magazines', 'Basic Kit'],
    imageColor: 'teal',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg'
    ]
  },
];

// Popular routes - We'll calculate distances dynamically
const popularRoutes = [
  { from: 'Bangalore', to: 'Sabarimala' },
  { from: 'Bangalore', to: 'Gokarna' },
  { from: 'Bangalore', to: 'Ooty' },
  { from: 'Bangalore', to: 'Tirupati' },
  { from: 'Bangalore', to: 'Chennai' },
  { from: 'Bangalore', to: 'Mysore' },
];

export default function CarsPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [km, setKm] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<string>('');
  const [routeDetails, setRouteDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'seats'>('price');
  const [showFilters, setShowFilters] = useState(false);
  const [minSeats, setMinSeats] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [showACOnly, setShowACOnly] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [showQuickQuote, setShowQuickQuote] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectedVehiclePhotos, setSelectedVehiclePhotos] = useState<string[]>([]);
  const [selectedVehicleName, setSelectedVehicleName] = useState('');
  const [quoteDetails, setQuoteDetails] = useState({
    passengers: '',
    days: 1,
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    vehicle: null as any
  });
  const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [popularRoutesWithData, setPopularRoutesWithData] = useState<any[]>([]);
  const [loadingRoutes, setLoadingRoutes] = useState(true);

  const ITEMS_PER_PAGE = 6;
  const MINIMUM_KM_PER_DAY = 250;
  const DRIVER_BATA_PER_DAY = 1000;
  const GST_PERCENTAGE = 18;

  const categories = ['All', 'Economy', 'Premium', 'Luxury', 'Standard'];

  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  const getGradientColor = (color: string) => {
    return 'from-red-500 to-red-700';
  };

  // Load popular routes data on component mount
  useEffect(() => {
    const loadPopularRoutes = async () => {
      setLoadingRoutes(true);
      const routesWithData = await Promise.all(
        popularRoutes.map(async (route) => {
          try {
            const result = await calculateDistance(route.from, route.to);
            if (result) {
              const { total } = calculateTotalForRoute(result.distance, vehicles[0]);
              const priceRange = `₹${formatPrice(Math.round(total * 0.8))} - ₹${formatPrice(Math.round(total * 1.2))}`;
              
              return {
                ...route,
                distance: result.distance,
                time: result.duration,
                priceRange: priceRange
              };
            }
          } catch (error) {
            console.error('Error calculating distance for route:', route, error);
          }
          // If calculation fails, return route without distance
          return {
            ...route,
            distance: null,
            time: 'Click to calculate',
            priceRange: 'Click to calculate'
          };
        })
      );
      setPopularRoutesWithData(routesWithData);
      setLoadingRoutes(false);
    };

    loadPopularRoutes();
  }, []);

  const calculateTotalForRoute = (distance: number, vehicle: any) => {
    const numberOfDays = Math.ceil(distance / MINIMUM_KM_PER_DAY);
    const kmToCharge = Math.max(distance, numberOfDays * MINIMUM_KM_PER_DAY);
    const baseFare = vehicle.perKmWithTax * kmToCharge;
    const gst = (baseFare * GST_PERCENTAGE) / 100;
    const total = baseFare + (numberOfDays * DRIVER_BATA_PER_DAY) + gst;
    return { baseFare, gst, total, kmToCharge, days: numberOfDays };
  };

  const calculateDistanceWithAPI = async () => {
    if (!from || !to || from.trim() === '' || to.trim() === '') {
      alert('Please enter both pickup and destination locations');
      return;
    }
    
    setIsCalculating(true);
    setLoading(true);
    
    try {
      const result = await calculateDistance(from, to);

      if (result) {
        setDistance(result.distance);
        setDuration(result.duration);
        setRouteDetails(result.route);
        setKm(result.distance.toString());
      } else {
        alert('Unable to calculate distance. Please check the location names and try again.');
        setDistance(null);
        setDuration('');
        setRouteDetails([]);
        setKm('');
      }
    } catch (error) {
      console.error('Distance calculation failed:', error);
      alert('Error calculating distance. Please try again.');
      setDistance(null);
      setDuration('');
      setRouteDetails([]);
      setKm('');
    } finally {
      setLoading(false);
      setIsCalculating(false);
    }
  };

  const filteredVehicles = useMemo(() => {
    let filtered = [...vehicles];

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(v => v.category === selectedCategory);
    }

    if (minSeats > 0) {
      filtered = filtered.filter(v => v.seats >= minSeats);
    }

    if (showACOnly) {
      filtered = filtered.filter(v => v.ac);
    }

    if (maxPrice < 100) {
      const maxPriceValue = (maxPrice / 100) * 72;
      filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'price') return a.perKmWithTax - b.perKmWithTax;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.seats - a.seats;
    });

    return filtered;
  }, [selectedCategory, minSeats, showACOnly, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVehicles = filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Use actual distance or 0 if not calculated yet
  const finalKm = distance ? Number(km || distance) : 0;
  const numberOfDays = distance ? Math.ceil(finalKm / MINIMUM_KM_PER_DAY) : 0;

  const handleRouteSelect = async (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setSelectedRoute(route);
    
    // If route already has distance data, use it immediately
    if (route.distance) {
      setDistance(route.distance);
      setDuration(route.time);
      setKm(route.distance.toString());
      // We don't have detailed route steps from the cached data, so keep it empty
      setRouteDetails([route.from, route.to]);
      return;
    }
    
    // Otherwise, calculate it
    setLoading(true);
    try {
      const result = await calculateDistance(route.from, route.to);
      if (result) {
        setDistance(result.distance);
        setDuration(result.duration);
        setRouteDetails(result.route);
        setKm(result.distance.toString());
      } else {
        alert('Unable to calculate distance for this route. Please try another route.');
        setDistance(null);
        setDuration('');
        setRouteDetails([]);
        setKm('');
      }
    } catch (error) {
      console.error('Error calculating route distance:', error);
      alert('Error calculating distance. Please try again.');
      setDistance(null);
      setDuration('');
      setRouteDetails([]);
      setKm('');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (vehicle: any, customDays?: number, customPassengers?: number) => {
    const days = customDays || numberOfDays || 1;
    const kmToCharge = Math.max(finalKm, days * MINIMUM_KM_PER_DAY);
    const baseFare = vehicle.perKmWithTax * kmToCharge;
    const gst = (baseFare * GST_PERCENTAGE) / 100;
    const total = baseFare + (days * DRIVER_BATA_PER_DAY) + gst;
    return { baseFare, gst, total, kmToCharge, days };
  };

  const handleQuickQuote = (vehicle: any) => {
    setShowQuickQuote(true);
    setQuoteDetails({
      passengers: '',
      days: numberOfDays || 1,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      vehicle: vehicle
    });
  };

  const handleViewPhotos = (vehicle: any) => {
    setSelectedVehiclePhotos(vehicle.images);
    setSelectedVehicleName(vehicle.name);
    setShowPhotos(true);
  };

  const calculateQuotePrice = () => {
    if (!quoteDetails.vehicle) return { min: 0, max: 0 };
    
    const { total, days, kmToCharge } = calculateTotal(
      quoteDetails.vehicle, 
      quoteDetails.days,
      quoteDetails.passengers ? parseInt(quoteDetails.passengers) : undefined
    );
    
    // Add a buffer for variance (10-20%)
    const min = total * 0.9;
    const max = total * 1.2;
    
    return { min, max, total, days, kmToCharge };
  };

  const quotePrice = calculateQuotePrice();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Red Theme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white">PREMIUM CAR RENTAL SERVICE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Premium <span className="text-yellow-300">Cars & Tempo Travellers</span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Outstation trips, airport transfers, local rentals & corporate travel across India
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { label: 'Vehicles', value: '50+' },
                { label: 'Cities', value: '100+' },
                { label: 'Happy Customers', value: '10K+' },
                { label: 'Trips Completed', value: '25K+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-red-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Trip Planner Card */}
        <div className="bg-white rounded-2xl shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <MapPinIcon className="h-7 w-7" />
              Plan Your Journey
            </h2>
            <p className="text-red-100">Get instant pricing with accurate Google Maps distance calculation</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter city or airport"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Where do you want to go?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance (KM)</label>
                <input
                  type="number"
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                  placeholder="Auto-calculated"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={calculateDistanceWithAPI}
                disabled={!from || !to || isCalculating}
                className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full md:w-auto"
              >
                {isCalculating ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                    <span className="text-sm md:text-base">Calculating...</span>
                  </>
                ) : (
                  <>
                    <MapPinIcon className="h-5 w-5" />
                    <span className="text-sm md:text-base">Calculate Distance & Price</span>
                  </>
                )}
              </button>
            </div>

            {loading && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <span className="text-gray-600 text-sm md:text-base">Calculating distance via Google Maps API...</span>
                </div>
              </div>
            )}

            {distance && !loading && (
              <div className="mt-6 bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-4 border border-red-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Route Details</div>
                    <div className="text-lg font-bold text-gray-900">{from} → {to}</div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1">
                      <span className="text-red-600 font-semibold">{distance} KM</span>
                      <span className="text-gray-400 hidden md:inline">•</span>
                      <span className="text-gray-600">{duration}</span>
                      <span className="text-gray-400 hidden md:inline">•</span>
                      {numberOfDays > 0 && (
                        <span className="text-red-600 font-medium">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={calculateDistanceWithAPI}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors w-full md:w-auto"
                  >
                    Recalculate
                  </button>
                </div>

                {routeDetails.length > 2 && (
                  <div className="text-sm text-gray-600 mt-2">
                    <span className="font-medium">Suggested Route:</span> {routeDetails.join(' → ')}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Routes</h3>
          {loadingRoutes ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-3">
                <ArrowPathIcon className="h-5 w-5 animate-spin text-red-600" />
                <span className="text-gray-600">Loading popular routes...</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {popularRoutesWithData.map((route, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRouteSelect(route)}
                  className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
                    selectedRoute?.from === route.from && selectedRoute?.to === route.to ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-left">{route.from} → {route.to}</div>
                      <div className="text-sm text-gray-600 text-left">
                        {route.distance ? `${route.distance} km • ${route.time}` : 'Click to calculate'}
                      </div>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  <div className="text-sm font-semibold text-green-600 text-left">
                    {route.priceRange}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Available Vehicles ({filteredVehicles.length})</h3>
              <p className="text-gray-600 text-sm md:text-base">Select from our premium fleet</p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full md:w-auto">
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'All' ? null : (category === selectedCategory ? null : category))}
                    className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                      (category === 'All' && !selectedCategory) || selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
                >
                  <FunnelIcon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden md:inline">Filters</span>
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                >
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="seats">Most Seats</option>
                </select>
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 md:mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Advanced Filters</h4>
                <button onClick={() => setShowFilters(false)}>
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Seats: {minSeats || 'Any'}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={minSeats}
                    onChange={(e) => setMinSeats(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Any</span>
                    <span>20 Seats</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price per KM: ₹{((maxPrice / 100) * 72).toFixed(0)}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹7</span>
                    <span>₹72</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="acOnly"
                    checked={showACOnly}
                    onChange={(e) => setShowACOnly(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 accent-red-600"
                  />
                  <label htmlFor="acOnly" className="text-sm font-medium text-gray-700">
                    Show AC vehicles only
                  </label>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => {
                    setMinSeats(0);
                    setMaxPrice(100);
                    setShowACOnly(false);
                  }}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {currentVehicles.map((vehicle) => {
            const { total, kmToCharge } = calculateTotal(vehicle);
            const gradient = getGradientColor(vehicle.imageColor);
            const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
            const vehicleImage = vehicle.images?.[currentImageIndex] || 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg';

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
                onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                onMouseLeave={() => setHoveredVehicle(null)}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={vehicleImage}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={vehicle.id <= 3}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute top-4 left-4 flex gap-1">
                    {vehicle.images?.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>

                  {vehicle.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        {vehicle.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-2xl font-bold text-white">{vehicle.seats}</div>
                      <div className="text-xs text-white/80">Seats</div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <StarIconSolid className="h-3 w-3 text-yellow-400" />
                    <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
                    <span className="text-white/70 text-xs">({vehicle.trips})</span>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {vehicle.category}
                        </span>
                        {vehicle.ac && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded">
                            <span className="text-xs">❄️</span>
                            AC
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
                      <div className="text-xs md:text-sm text-gray-500">per km</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{vehicle.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 bg-gray-50 rounded-lg p-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                      <span className="text-sm text-gray-600">
                        {distance ? `Estimated for ${kmToCharge} km:` : 'Enter route to see price'}
                      </span>
                      {distance ? (
                        <span className="text-lg font-bold text-gray-900">₹{formatPrice(total)}</span>
                      ) : (
                        <span className="text-lg font-bold text-red-600">Calculate Distance</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      {distance ? 'Includes driver allowance, taxes, and minimum KM charges' : 'Enter route details to see price estimate'}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleQuickQuote(vehicle)}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
                    >
                      Get Quote
                    </button>
                    <button 
                      onClick={() => handleViewPhotos(vehicle)}
                      className="px-4 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors text-sm md:text-base flex items-center justify-center gap-2"
                    >
                      <PhotoIcon className="h-5 w-5" />
                      <span className="hidden sm:inline">View Photos</span>
                      <span className="sm:hidden">Photos</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <div className="text-gray-600 text-sm md:text-base">
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} vehicles
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = currentPage <= 3 ? i + 1 :
                            currentPage >= totalPages - 2 ? totalPages - 4 + i :
                            currentPage - 2 + i;

                if (page < 1 || page > totalPages) return null;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-medium text-sm md:text-base ${
                      currentPage === page
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-6 md:p-8 mb-12 text-white">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why Choose Our Car Rental Service?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "100% Safe & Insured",
                description: "All vehicles are fully insured with GPS tracking and emergency support"
              },
              {
                icon: <ClockIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "24/7 Availability",
                description: "Round-the-clock booking support and emergency assistance"
              },
              {
                icon: <StarIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "Premium Experience",
                description: "Well-maintained vehicles with professional chauffeurs"
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl mb-3 md:mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-red-200 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">Get your personalized quote in under 2 minutes</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
                Call Now: +91 95917 62419
              </a>

              <a
                href="https://wa.me/919591762419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-900 transition-all shadow-lg"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 md:h-6 md:w-6" />
                WhatsApp Quick Book
              </a>
            </div>

            <p className="mt-6 text-sm md:text-base opacity-80">Instant confirmation • No hidden charges • Free cancellation</p>
          </div>
        </div>
      </div>

      {/* Quick Quote Modal */}
      {showQuickQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Get Instant Quote</h3>
              <button onClick={() => setShowQuickQuote(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {quoteDetails.vehicle && (
                <div className="mb-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{quoteDetails.vehicle.name}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{quoteDetails.vehicle.seats} Seats • {quoteDetails.vehicle.category}</span>
                    <span className="text-green-600 font-semibold">₹{quoteDetails.vehicle.perKmWithTax}/km</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={quoteDetails.passengers}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || /^\d+$/.test(value)) {
                        setQuoteDetails({...quoteDetails, passengers: value});
                      }
                    }}
                    placeholder="Enter number of passengers"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This vehicle can accommodate up to {quoteDetails.vehicle?.seats || 20} passengers
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
                  <input
                    type="number"
                    value={quoteDetails.days}
                    onChange={(e) => setQuoteDetails({...quoteDetails, days: parseInt(e.target.value) || 1})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={quoteDetails.date}
                    onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Distance:</span>
                      <span className="font-semibold text-gray-900">{distance || 0} km</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">{duration || 'Not calculated'}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Passengers:</span>
                      <span className="font-semibold text-gray-900">
                        {quoteDetails.passengers || 'Not specified'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Estimated Cost:</span>
                      <span className="text-2xl font-bold text-green-600">
                        {quoteDetails.passengers ? `₹${formatPrice(Math.round(quotePrice.min))} - ₹${formatPrice(Math.round(quotePrice.max))}` : 'Enter passenger count'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {quoteDetails.passengers 
                        ? 'Final price depends on exact requirements and route details'
                        : 'Please enter number of passengers to get price estimate'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowQuickQuote(false)}
                      className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      disabled={!quoteDetails.passengers}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Get Exact Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photos Modal */}
      {showPhotos && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-red-600 to-red-700">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <PhotoIcon className="h-6 w-6" />
                {selectedVehicleName} - Photo Gallery
              </h3>
              <button 
                onClick={() => setShowPhotos(false)}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedVehiclePhotos.map((photo, index) => (
                  <div key={index} className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${selectedVehicleName} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
                        Image {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Vehicle Details</h4>
                <p className="text-sm text-gray-600 mb-3">
                  These are actual photos of our {selectedVehicleName} fleet. All vehicles are maintained to the highest standards and are regularly serviced.
                </p>
                <div className="text-xs text-gray-500">
                  <p>• High-resolution photos</p>
                  <p>• Actual fleet vehicles</p>
                  <p>• Regular maintenance</p>
                  <p>• Professional cleaning</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowPhotos(false)}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}