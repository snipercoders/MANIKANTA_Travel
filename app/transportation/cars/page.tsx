
// // app/transportation/cars/page.tsx

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
//   CurrencyDollarIcon, // Fixed: Use CurrencyDollarIcon instead of CurrencyRupeeIcon
//   Cog6ToothIcon, // Fixed: Use Cog6ToothIcon instead of AdjustmentsHorizontalIcon
//   ArrowsUpDownIcon,
//   CheckCircleIcon,
//   PhoneIcon,
//   ChatBubbleLeftRightIcon, // Fixed: Use ChatBubbleLeftRightIcon instead of ChatBubbleBottomCenterTextIcon
//   CalendarIcon
// } from '@heroicons/react/24/outline';
// import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
// import Image from 'next/image';

// // State permit data
// const statePermits = {
//   kerala: { name: 'Kerala', color: 'emerald', permitKey: 'kerala' },
//   tamilnadu: { name: 'Tamil Nadu', color: 'blue', permitKey: 'tamilnadu' },
//   andhrapradesh: { name: 'Andhra Pradesh', color: 'orange', permitKey: 'andhra' },
//   karnataka: { name: 'Karnataka', color: 'purple', permitKey: 'karnataka' },
//   maharashtra: { name: 'Maharashtra', color: 'red', permitKey: 'maharashtra' },
//   goa: { name: 'Goa', color: 'pink', permitKey: 'goa' },
//   rajasthan: { name: 'Rajasthan', color: 'amber', permitKey: 'rajasthan' },
// };

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
//       '/images/transportation/sedan-1.jpg',
//       '/images/transportation/sedan-2.jpg',
//       '/images/transportation/sedan-3.jpg'
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
//       '/images/transportation/innova-1.jpg',
//       '/images/transportation/innova-2.jpg',
//       '/images/transportation/innova-3.jpg'
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
//       '/images/transportation/tempo-12-1.jpg',
//       '/images/transportation/tempo-12-2.jpg',
//       '/images/transportation/tempo-12-3.jpg'
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
//       '/images/transportation/tempo-17-1.jpg',
//       '/images/transportation/tempo-17-2.jpg',
//       '/images/transportation/tempo-17-3.jpg'
//     ]
//   },
//   { 
//     id: 5, 
//     name: 'Toyota Fortuner', 
//     seats: 7, 
//     perKm: 35, 
//     perKmWithTax: 42, 
//     category: 'Luxury SUV', 
//     ac: true, 
//     rating: 4.7,
//     trips: 320,
//     features: ['4x4', 'Premium Sound', 'Sunroof', 'Leather Seats'],
//     amenities: ['VIP Service', 'WiFi Hotspot', 'Refreshments'],
//     imageColor: 'gray',
//     badge: 'Premium',
//     images: [
//       '/images/transportation/fortuner-1.jpg',
//       '/images/transportation/fortuner-2.jpg',
//       '/images/transportation/fortuner-3.jpg'
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
//       '/images/transportation/ertiga-1.jpg',
//       '/images/transportation/ertiga-2.jpg',
//       '/images/transportation/ertiga-3.jpg'
//     ]
//   },
//   { 
//     id: 7, 
//     name: 'Mercedes Benz', 
//     seats: 4, 
//     perKm: 60, 
//     perKmWithTax: 72, 
//     category: 'Ultra Luxury', 
//     ac: true, 
//     rating: 4.9,
//     trips: 150,
//     features: ['Premium AC', 'Massage Seats', 'Ambient Lighting', 'Privacy'],
//     amenities: ['Champagne', 'Butler Service', 'Luxury Kit'],
//     imageColor: 'black',
//     badge: 'VIP',
//     images: [
//       '/images/transportation/mercedes-1.jpg',
//       '/images/transportation/mercedes-2.jpg',
//       '/images/transportation/mercedes-3.jpg'
//     ]
//   },
//   { 
//     id: 8, 
//     name: 'Kia Carnival', 
//     seats: 7, 
//     perKm: 40, 
//     perKmWithTax: 48, 
//     category: 'Luxury MPV', 
//     ac: true, 
//     rating: 4.6,
//     trips: 280,
//     features: ['Premium AC', 'Entertainment', 'Business Class Seats'],
//     amenities: ['Tablets', 'Gourmet Snacks', 'Entertainment Package'],
//     imageColor: 'blue',
//     images: [
//       '/images/transportation/carnival-1.jpg',
//       '/images/transportation/carnival-2.jpg',
//       '/images/transportation/carnival-3.jpg'
//     ]
//   },
//   { 
//     id: 9, 
//     name: 'Mahindra Thar', 
//     seats: 4, 
//     perKm: 25, 
//     perKmWithTax: 30, 
//     category: 'Adventure', 
//     ac: true, 
//     rating: 4.4,
//     trips: 380,
//     features: ['4x4', 'Off-road', 'Adventure Ready', 'Rugged'],
//     amenities: ['Adventure Kit', 'GPS Tracker', 'Safety Gear'],
//     imageColor: 'orange',
//     badge: 'Adventure',
//     images: [
//       '/images/transportation/thar-1.jpg',
//       '/images/transportation/thar-2.jpg',
//       '/images/transportation/thar-3.jpg'
//     ]
//   },
//   { 
//     id: 10, 
//     name: 'Honda City', 
//     seats: 4, 
//     perKm: 15, 
//     perKmWithTax: 18, 
//     category: 'Premium Sedan', 
//     ac: true, 
//     rating: 4.3,
//     trips: 750,
//     features: ['AC', 'Premium Audio', 'Comfort', 'Style'],
//     amenities: ['Premium Kit', 'Travel Guide', 'Refreshments'],
//     imageColor: 'red',
//     images: [
//       '/images/transportation/honda-city-1.jpg',
//       '/images/transportation/honda-city-2.jpg',
//       '/images/transportation/honda-city-3.jpg'
//     ]
//   },
// ];

// // Enhanced states data with distances
// const popularRoutes = [
//   { from: 'Bangalore', to: 'Chennai', distance: 350, time: '6-7 hrs', priceRange: '₹4,500 - ₹9,000' },
//   { from: 'Mumbai', to: 'Goa', distance: 600, time: '10-12 hrs', priceRange: '₹7,800 - ₹15,600' },
//   { from: 'Delhi', to: 'Jaipur', distance: 280, time: '5-6 hrs', priceRange: '₹3,600 - ₹7,200' },
//   { from: 'Hyderabad', to: 'Vijayawada', distance: 270, time: '5-6 hrs', priceRange: '₹3,500 - ₹7,000' },
//   { from: 'Chennai', to: 'Pondicherry', distance: 160, time: '3-4 hrs', priceRange: '₹2,100 - ₹4,200' },
//   { from: 'Kolkata', to: 'Digha', distance: 180, time: '4-5 hrs', priceRange: '₹2,300 - ₹4,600' },
// ];

// export default function CarsPage() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [km, setKm] = useState('');
//   const [distance, setDistance] = useState<number | null>(null);
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
//   const [quoteDetails, setQuoteDetails] = useState({ passengers: 1, days: 1, date: '' });
//   const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);

//   const ITEMS_PER_PAGE = 6;
//   const MINIMUM_KM_PER_DAY = 250;
//   const DRIVER_BATA_PER_DAY = 1000;
//   const GST_PERCENTAGE = 18;

//   const categories = ['All', 'Economy', 'Premium', 'Luxury', 'Luxury SUV', 'Ultra Luxury', 'Adventure', 'Standard'];
  
//   const formatPrice = (price: number) => price.toLocaleString('en-IN');
  
//   const getGradientColor = (color: string) => {
//     const gradients: Record<string, string> = {
//       blue: 'from-blue-500 to-blue-700',
//       green: 'from-emerald-500 to-emerald-700',
//       purple: 'from-purple-500 to-purple-700',
//       indigo: 'from-indigo-500 to-indigo-700',
//       gray: 'from-gray-600 to-gray-800',
//       black: 'from-gray-800 to-black',
//       orange: 'from-orange-500 to-orange-700',
//       teal: 'from-teal-500 to-teal-700',
//       red: 'from-red-500 to-red-700',
//     };
//     return gradients[color] || 'from-blue-500 to-blue-700';
//   };

//   useEffect(() => {
//     if (!from || !to || from.length < 2 || to.length < 2) {
//       setDistance(null);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setLoading(true);
//       setTimeout(() => {
//         const mockDistance = Math.floor(Math.random() * 500) + 100;
//         setDistance(mockDistance);
//         if (!km) setKm(mockDistance.toString());
//         setLoading(false);
//       }, 800);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [from, to, km]);

//   // Filter and sort vehicles
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
//       const maxPriceValue = (maxPrice / 100) * 72; // 72 is max perKmWithTax
//       filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
//     }
    
//     // Sort vehicles
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

//   const handleRouteSelect = (route: any) => {
//     setFrom(route.from);
//     setTo(route.to);
//     setKm(route.distance.toString());
//     setSelectedRoute(route);
//   };

//   const calculateTotal = (vehicle: any) => {
//     const kmToCharge = Math.max(finalKm, minimumKmCharge);
//     const baseFare = vehicle.perKmWithTax * kmToCharge;
//     const gst = (baseFare * GST_PERCENTAGE) / 100;
//     const total = baseFare + driverBataTotal + gst;
//     return { baseFare, gst, total, kmToCharge };
//   };

//   const handleQuickQuote = (vehicle: any) => {
//     setShowQuickQuote(true);
//     setQuoteDetails({
//       passengers: vehicle.seats,
//       days: numberOfDays,
//       date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section with Animated Background */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <SparklesIcon className="h-5 w-5 text-yellow-300" />
//               <span className="text-sm font-semibold text-white">PREMIUM CAR RENTAL SERVICE</span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//               Luxury Cars & <span className="text-yellow-300">Tempo Travellers</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
//               Experience premium comfort with our fleet of 50+ well-maintained vehicles across India
//             </p>
            
//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
//               {[
//                 { label: 'Vehicles', value: '50+' },
//                 { label: 'Cities', value: '100+' },
//                 { label: 'Happy Customers', value: '10K+' },
//                 { label: 'Trips Completed', value: '25K+' },
//               ].map((stat, idx) => (
//                 <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                   <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
//                   <div className="text-sm text-blue-200">{stat.label}</div>
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
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <MapPinIcon className="h-7 w-7" />
//               Plan Your Journey
//             </h2>
//             <p className="text-blue-100">Get instant pricing for your route</p>
//           </div>
          
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
//                 <div className="relative">
//                   <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     value={from}
//                     onChange={(e) => setFrom(e.target.value)}
//                     placeholder="Enter city or airport"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Distance (KM)</label>
//                 <div className="relative">
//                   <input
//                     type="number"
//                     value={km}
//                     onChange={(e) => setKm(e.target.value)}
//                     placeholder="Enter distance"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                   {distance && (
//                     <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
//                       {distance} KM
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {loading && (
//               <div className="mt-6 text-center">
//                 <div className="inline-flex items-center gap-3">
//                   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
//                   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
//                   <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></div>
//                   <span className="text-gray-600">Calculating best routes...</span>
//                 </div>
//               </div>
//             )}
            
//             {distance && (
//               <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-gray-600">Estimated Trip</div>
//                     <div className="text-xl font-bold text-gray-900">{from} → {to}</div>
//                     <div className="text-lg text-blue-600 font-semibold">{distance} KM • {numberOfDays} Days</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm text-gray-600">Starting from</div>
//                     <div className="text-3xl font-bold text-green-600">₹{formatPrice(calculateTotal(vehicles[0]).total)}</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Popular Routes */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Routes</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {popularRoutes.map((route, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleRouteSelect(route)}
//                 className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
//                   selectedRoute?.from === route.from ? 'border-blue-500' : 'border-gray-200'
//                 }`}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <div>
//                     <div className="font-bold text-gray-900">{route.from} → {route.to}</div>
//                     <div className="text-sm text-gray-600">{route.distance} km • {route.time}</div>
//                   </div>
//                   <ArrowRightIcon className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <div className="text-sm font-semibold text-green-600">{route.priceRange}</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Controls Section */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">Available Vehicles ({filteredVehicles.length})</h3>
//               <p className="text-gray-600">Select from our premium fleet</p>
//             </div>
            
//             <div className="flex flex-wrap gap-4">
//               {/* Categories */}
//               <div className="flex flex-wrap gap-2">
//                 {categories.slice(0, 5).map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
//                     className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
//                       selectedCategory === category
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
              
//               {/* Filter Button */}
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//               >
//                 <FunnelIcon className="h-5 w-5" />
//                 Filters
//               </button>
              
//               {/* Sort Dropdown */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as any)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="price">Price: Low to High</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="seats">Most Seats</option>
//               </select>
//             </div>
//           </div>
          
//           {/* Advanced Filters */}
//           {showFilters && (
//             <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="font-semibold text-gray-900">Advanced Filters</h4>
//                 <button onClick={() => setShowFilters(false)}>
//                   <XMarkIcon className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Minimum Seats: {minSeats}
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="20"
//                     value={minSeats}
//                     onChange={(e) => setMinSeats(parseInt(e.target.value))}
//                     className="w-full"
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
//                     className="w-full"
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
//                     className="h-5 w-5 rounded border-gray-300"
//                   />
//                   <label htmlFor="acOnly" className="text-sm font-medium text-gray-700">
//                     Show AC vehicles only
//                   </label>
//                 </div>
//               </div>
              
//               <div className="mt-4 flex justify-end gap-3">
//                 <button
//                   onClick={() => {
//                     setMinSeats(0);
//                     setMaxPrice(100);
//                     setShowACOnly(false);
//                   }}
//                   className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
//                 >
//                   Reset Filters
//                 </button>
//                 <button
//                   onClick={() => setShowFilters(false)}
//                   className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Vehicles Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {currentVehicles.map((vehicle) => {
//             const { total, kmToCharge } = calculateTotal(vehicle);
//             const gradient = getGradientColor(vehicle.imageColor);
//             const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
//             const vehicleImage = vehicle.images?.[currentImageIndex] || '/images/transportation/car-fleet.png';
            
//             return (
//               <div 
//                 key={vehicle.id} 
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
//                 onMouseEnter={() => setHoveredVehicle(vehicle.id)}
//                 onMouseLeave={() => setHoveredVehicle(null)}
//               >
//                 {/* Vehicle Image/Header */}
//                 <div className="relative h-48 overflow-hidden">
//                   <div className="absolute inset-0">
//                     <Image
//                       src={vehicleImage}
//                       alt={vehicle.name}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       priority={vehicle.id <= 3}
//                     />
//                     <div className={`absolute inset-0 ${gradient} opacity-30`} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                   </div>
                  
//                   {/* Image Gallery Indicator */}
//                   <div className="absolute top-4 left-4 flex gap-1">
//                     {vehicle.images?.map((_, idx) => (
//                       <div 
//                         key={idx} 
//                         className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
//                       />
//                     ))}
//                   </div>
                  
//                   {/* Badge */}
//                   {vehicle.badge && (
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
//                         {vehicle.badge}
//                       </span>
//                     </div>
//                   )}
                  
//                   {/* Seats Overlay */}
//                   <div className="absolute bottom-4 left-4">
//                     <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
//                       <div className="text-2xl font-bold text-white">{vehicle.seats}</div>
//                       <div className="text-xs text-white/80">Seats</div>
//                     </div>
//                   </div>
                  
//                   {/* Rating */}
//                   <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <StarIconSolid className="h-3 w-3 text-yellow-400" />
//                     <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
//                     <span className="text-white/70 text-xs">({vehicle.trips})</span>
//                   </div>
//                 </div>
                
//                 {/* Vehicle Details */}
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//                         {vehicle.name}
//                       </h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
//                           {vehicle.category}
//                         </span>
//                         {vehicle.ac && (
//                           <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
//                             <span className="text-xs">❄️</span>
//                             AC
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
//                       <div className="text-sm text-gray-500">per km</div>
//                     </div>
//                   </div>
                  
//                   {/* Features */}
//                   <div className="mb-4">
//                     <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
//                     <div className="flex flex-wrap gap-2">
//                       {vehicle.features.slice(0, 3).map((feature, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
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
                  
//                   {/* Price Summary */}
//                   <div className="mb-4 bg-gray-50 rounded-lg p-3">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm text-gray-600">Estimated for {kmToCharge} km:</span>
//                       <span className="text-lg font-bold text-gray-900">₹{formatPrice(total)}</span>
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       Includes driver allowance, taxes, and minimum KM charges
//                     </div>
//                   </div>
                  
//                   {/* Action Buttons */}
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => handleQuickQuote(vehicle)}
//                       className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
//                     >
//                       Get Quote
//                     </button>
//                     <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
//             <div className="text-gray-600">
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
//                     className={`w-10 h-10 rounded-lg font-medium ${
//                       currentPage === page
//                         ? 'bg-blue-600 text-white'
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
//         <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
//           <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Car Rental Service?</h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <ShieldCheckIcon className="h-12 w-12" />,
//                 title: "100% Safe & Insured",
//                 description: "All vehicles are fully insured with GPS tracking and emergency support"
//               },
//               {
//                 icon: <ClockIcon className="h-12 w-12" />,
//                 title: "24/7 Availability",
//                 description: "Round-the-clock booking support and emergency assistance"
//               },
//               {
//                 icon: <StarIcon className="h-12 w-12" />,
//                 title: "Premium Experience",
//                 description: "Well-maintained vehicles with professional chauffeurs"
//               },
//             ].map((feature, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-4">
//                   {feature.icon}
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
//                 <p className="text-blue-200">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-8">
//             <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
//             <p className="text-xl mb-6 opacity-90">Get your personalized quote in under 2 minutes</p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
//               >
//                 <PhoneIcon className="h-6 w-6" />
//                 Call Now: +91 98765 43210
//               </a>
              
//               <a 
//                 href="https://wa.me/919876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-3 bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg"
//               >
//                 <ChatBubbleLeftRightIcon className="h-6 w-6" />
//                 WhatsApp Quick Book
//               </a>
//             </div>
            
//             <p className="mt-6 text-sm opacity-80">Instant confirmation • No hidden charges • Free cancellation</p>
//           </div>
//         </div>
//       </div>

//       {/* Quick Quote Modal */}
//       {showQuickQuote && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-md w-full p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-bold text-gray-900">Get Instant Quote</h3>
//               <button onClick={() => setShowQuickQuote(false)}>
//                 <XMarkIcon className="h-6 w-6 text-gray-500" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
//                 <input
//                   type="number"
//                   value={quoteDetails.passengers}
//                   onChange={(e) => setQuoteDetails({...quoteDetails, passengers: parseInt(e.target.value)})}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                   min="1"
//                   max="20"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
//                 <input
//                   type="number"
//                   value={quoteDetails.days}
//                   onChange={(e) => setQuoteDetails({...quoteDetails, days: parseInt(e.target.value)})}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                   min="1"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
//                 <input
//                   type="date"
//                   value={quoteDetails.date}
//                   onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
              
//               <div className="pt-4 border-t">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-gray-600">Estimated Cost:</span>
//                   <span className="text-2xl font-bold text-green-600">₹4,500 - ₹6,800</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mb-4">Final price depends on exact requirements</p>
                
//                 <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold">
//                   Get Exact Quote Now
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
  InformationCircleIcon,
  FunnelIcon,
  XMarkIcon,
  StarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ArrowsUpDownIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ArrowPathIcon
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
      '/images/transportation/sedan-1.jpg',
      '/images/transportation/sedan-2.jpg',
      '/images/transportation/sedan-3.jpg'
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
      '/images/transportation/innova-1.jpg',
      '/images/transportation/innova-2.jpg',
      '/images/transportation/innova-3.jpg'
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
      '/images/transportation/tempo-12-1.jpg',
      '/images/transportation/tempo-12-2.jpg',
      '/images/transportation/tempo-12-3.jpg'
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
      '/images/transportation/tempo-17-1.jpg',
      '/images/transportation/tempo-17-2.jpg',
      '/images/transportation/tempo-17-3.jpg'
    ]
  },
  { 
    id: 5, 
    name: 'Toyota Fortuner', 
    seats: 7, 
    perKm: 35, 
    perKmWithTax: 42, 
    category: 'Luxury SUV', 
    ac: true, 
    rating: 4.7,
    trips: 320,
    features: ['4x4', 'Premium Sound', 'Sunroof', 'Leather Seats'],
    amenities: ['VIP Service', 'WiFi Hotspot', 'Refreshments'],
    imageColor: 'gray',
    badge: 'Premium',
    images: [
      '/images/transportation/fortuner-1.jpg',
      '/images/transportation/fortuner-2.jpg',
      '/images/transportation/fortuner-3.jpg'
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
      '/images/transportation/ertiga-1.jpg',
      '/images/transportation/ertiga-2.jpg',
      '/images/transportation/ertiga-3.jpg'
    ]
  },
  { 
    id: 7, 
    name: 'Mercedes Benz', 
    seats: 4, 
    perKm: 60, 
    perKmWithTax: 72, 
    category: 'Ultra Luxury', 
    ac: true, 
    rating: 4.9,
    trips: 150,
    features: ['Premium AC', 'Massage Seats', 'Ambient Lighting', 'Privacy'],
    amenities: ['Champagne', 'Butler Service', 'Luxury Kit'],
    imageColor: 'black',
    badge: 'VIP',
    images: [
      '/images/transportation/mercedes-1.jpg',
      '/images/transportation/mercedes-2.jpg',
      '/images/transportation/mercedes-3.jpg'
    ]
  },
  { 
    id: 8, 
    name: 'Kia Carnival', 
    seats: 7, 
    perKm: 40, 
    perKmWithTax: 48, 
    category: 'Luxury MPV', 
    ac: true, 
    rating: 4.6,
    trips: 280,
    features: ['Premium AC', 'Entertainment', 'Business Class Seats'],
    amenities: ['Tablets', 'Gourmet Snacks', 'Entertainment Package'],
    imageColor: 'blue',
    images: [
      '/images/transportation/carnival-1.jpg',
      '/images/transportation/carnival-2.jpg',
      '/images/transportation/carnival-3.jpg'
    ]
  },
  { 
    id: 9, 
    name: 'Mahindra Thar', 
    seats: 4, 
    perKm: 25, 
    perKmWithTax: 30, 
    category: 'Adventure', 
    ac: true, 
    rating: 4.4,
    trips: 380,
    features: ['4x4', 'Off-road', 'Adventure Ready', 'Rugged'],
    amenities: ['Adventure Kit', 'GPS Tracker', 'Safety Gear'],
    imageColor: 'orange',
    badge: 'Adventure',
    images: [
      '/images/transportation/thar-1.jpg',
      '/images/transportation/thar-2.jpg',
      '/images/transportation/thar-3.jpg'
    ]
  },
  { 
    id: 10, 
    name: 'Honda City', 
    seats: 4, 
    perKm: 15, 
    perKmWithTax: 18, 
    category: 'Premium Sedan', 
    ac: true, 
    rating: 4.3,
    trips: 750,
    features: ['AC', 'Premium Audio', 'Comfort', 'Style'],
    amenities: ['Premium Kit', 'Travel Guide', 'Refreshments'],
    imageColor: 'red',
    images: [
      '/images/transportation/honda-city-1.jpg',
      '/images/transportation/honda-city-2.jpg',
      '/images/transportation/honda-city-3.jpg'
    ]
  },
];

// Enhanced states data with distances
const popularRoutes = [
  { from: 'Bangalore', to: 'Chennai', distance: 350, time: '6-7 hrs', priceRange: '₹4,500 - ₹9,000' },
  { from: 'Mumbai', to: 'Goa', distance: 600, time: '10-12 hrs', priceRange: '₹7,800 - ₹15,600' },
  { from: 'Delhi', to: 'Jaipur', distance: 280, time: '5-6 hrs', priceRange: '₹3,600 - ₹7,200' },
  { from: 'Hyderabad', to: 'Vijayawada', distance: 270, time: '5-6 hrs', priceRange: '₹3,500 - ₹7,000' },
  { from: 'Chennai', to: 'Pondicherry', distance: 160, time: '3-4 hrs', priceRange: '₹2,100 - ₹4,200' },
  { from: 'Kolkata', to: 'Digha', distance: 180, time: '4-5 hrs', priceRange: '₹2,300 - ₹4,600' },
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
  const [quoteDetails, setQuoteDetails] = useState({ passengers: 1, days: 1, date: '' });
  const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const ITEMS_PER_PAGE = 6;
  const MINIMUM_KM_PER_DAY = 250;
  const DRIVER_BATA_PER_DAY = 1000;
  const GST_PERCENTAGE = 18;

  const categories = ['All', 'Economy', 'Premium', 'Luxury', 'Luxury SUV', 'Ultra Luxury', 'Adventure', 'Standard'];
  
  const formatPrice = (price: number) => price.toLocaleString('en-IN');
  
  const getGradientColor = (color: string) => {
    const gradients: Record<string, string> = {
      blue: 'from-blue-500 to-blue-700',
      green: 'from-emerald-500 to-emerald-700',
      purple: 'from-purple-500 to-purple-700',
      indigo: 'from-indigo-500 to-indigo-700',
      gray: 'from-gray-600 to-gray-800',
      black: 'from-gray-800 to-black',
      orange: 'from-orange-500 to-orange-700',
      teal: 'from-teal-500 to-teal-700',
      red: 'from-red-500 to-red-700',
    };
    return gradients[color] || 'from-blue-500 to-blue-700';
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
        if (!km) setKm(result.distance.toString());
        console.log('Distance calculated:', result);
      } else {
        // Fallback calculation
        const mockDistance = Math.floor(Math.random() * 500) + 100;
        setDistance(mockDistance);
        setDuration(`${Math.ceil(mockDistance / 60)}-${Math.ceil(mockDistance / 50)} hrs`);
        setRouteDetails([from, to]);
        if (!km) setKm(mockDistance.toString());
      }
    } catch (error) {
      console.error('Distance calculation failed:', error);
      // Fallback to local calculation
      const mockDistance = Math.floor(Math.random() * 500) + 100;
      setDistance(mockDistance);
      setDuration(`${Math.ceil(mockDistance / 60)}-${Math.ceil(mockDistance / 50)} hrs`);
      setRouteDetails([from, to]);
      if (!km) setKm(mockDistance.toString());
    } finally {
      setLoading(false);
      setIsCalculating(false);
    }
  };

  // Filter and sort vehicles
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
      const maxPriceValue = (maxPrice / 100) * 72; // 72 is max perKmWithTax
      filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
    }
    
    // Sort vehicles
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

  const finalKm = Number(km || distance || 250);
  const numberOfDays = Math.ceil(finalKm / MINIMUM_KM_PER_DAY);
  const minimumKmCharge = numberOfDays * MINIMUM_KM_PER_DAY;
  const driverBataTotal = numberOfDays * DRIVER_BATA_PER_DAY;

  const handleRouteSelect = async (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setKm(route.distance.toString());
    setSelectedRoute(route);
    setLoading(true);
    
    // Calculate distance for the selected route
    try {
      const result = await calculateDistance(route.from, route.to);
      if (result) {
        setDistance(result.distance);
        setDuration(result.duration);
        setRouteDetails(result.route);
      }
    } catch (error) {
      console.error('Error calculating route distance:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (vehicle: any) => {
    const kmToCharge = Math.max(finalKm, minimumKmCharge);
    const baseFare = vehicle.perKmWithTax * kmToCharge;
    const gst = (baseFare * GST_PERCENTAGE) / 100;
    const total = baseFare + driverBataTotal + gst;
    return { baseFare, gst, total, kmToCharge };
  };

  const handleQuickQuote = (vehicle: any) => {
    setShowQuickQuote(true);
    setQuoteDetails({
      passengers: vehicle.seats,
      days: numberOfDays,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white">PREMIUM CAR RENTAL SERVICE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Luxury Cars & <span className="text-yellow-300">Tempo Travellers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience premium comfort with our fleet of 50+ well-maintained vehicles across India
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { label: 'Vehicles', value: '50+' },
                { label: 'Cities', value: '100+' },
                { label: 'Happy Customers', value: '10K+' },
                { label: 'Trips Completed', value: '25K+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <MapPinIcon className="h-7 w-7" />
              Plan Your Journey
            </h2>
            <p className="text-blue-100">Get instant pricing with accurate distance calculation</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter city or airport"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance (KM)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    placeholder="Auto-calculated"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {distance && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                      {distance} KM
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Calculate Button */}
            <div className="mt-6 text-center">
              <button
                onClick={calculateDistanceWithAPI}
                disabled={!from || !to || isCalculating}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isCalculating ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <MapPinIcon className="h-5 w-5" />
                    Calculate Distance & Price
                  </>
                )}
              </button>
            </div>
            
            {loading && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></div>
                  <span className="text-gray-600">Calculating distance via AI...</span>
                </div>
              </div>
            )}
            
            {distance && !loading && (
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm text-gray-600">Route Details</div>
                    <div className="text-lg font-bold text-gray-900">
                      {from} → {to}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-blue-600 font-semibold">{distance} KM</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{duration}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-green-600 font-medium">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
                    </div>
                  </div>
                  <button
                    onClick={calculateDistanceWithAPI}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, idx) => (
              <button
                key={idx}
                onClick={() => handleRouteSelect(route)}
                className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
                  selectedRoute?.from === route.from ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-gray-900">{route.from} → {route.to}</div>
                    <div className="text-sm text-gray-600">{route.distance} km • {route.time}</div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-sm font-semibold text-green-600">{route.priceRange}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Available Vehicles ({filteredVehicles.length})</h3>
              <p className="text-gray-600">Select from our premium fleet</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FunnelIcon className="h-5 w-5" />
                Filters
              </button>
              
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="seats">Most Seats</option>
              </select>
            </div>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900">Advanced Filters</h4>
                <button onClick={() => setShowFilters(false)}>
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Seats: {minSeats}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={minSeats}
                    onChange={(e) => setMinSeats(parseInt(e.target.value))}
                    className="w-full"
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
                    className="w-full"
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
                    className="h-5 w-5 rounded border-gray-300"
                  />
                  <label htmlFor="acOnly" className="text-sm font-medium text-gray-700">
                    Show AC vehicles only
                  </label>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setMinSeats(0);
                    setMaxPrice(100);
                    setShowACOnly(false);
                  }}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentVehicles.map((vehicle) => {
            const { total, kmToCharge } = calculateTotal(vehicle);
            const gradient = getGradientColor(vehicle.imageColor);
            const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
            const vehicleImage = vehicle.images?.[currentImageIndex] || '/images/transportation/car-fleet.png';
            
            return (
              <div 
                key={vehicle.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
                onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                onMouseLeave={() => setHoveredVehicle(null)}
              >
                {/* Vehicle Image/Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={vehicleImage}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={vehicle.id <= 3}
                    />
                    <div className={`absolute inset-0 ${gradient} opacity-30`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Image Gallery Indicator */}
                  <div className="absolute top-4 left-4 flex gap-1">
                    {vehicle.images?.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                  
                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        {vehicle.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Seats Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-2xl font-bold text-white">{vehicle.seats}</div>
                      <div className="text-xs text-white/80">Seats</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <StarIconSolid className="h-3 w-3 text-yellow-400" />
                    <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
                    <span className="text-white/70 text-xs">({vehicle.trips})</span>
                  </div>
                </div>
                
                {/* Vehicle Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {vehicle.category}
                        </span>
                        {vehicle.ac && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                            <span className="text-xs">❄️</span>
                            AC
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
                      <div className="text-sm text-gray-500">per km</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
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
                  
                  {/* Price Summary */}
                  <div className="mb-4 bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Estimated for {kmToCharge} km:</span>
                      <span className="text-lg font-bold text-gray-900">₹{formatPrice(total)}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Includes driver allowance, taxes, and minimum KM charges
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleQuickQuote(vehicle)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Get Quote
                    </button>
                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      View Photos
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
            <div className="text-gray-600">
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
                    className={`w-10 h-10 rounded-lg font-medium ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
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
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Car Rental Service?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="h-12 w-12" />,
                title: "100% Safe & Insured",
                description: "All vehicles are fully insured with GPS tracking and emergency support"
              },
              {
                icon: <ClockIcon className="h-12 w-12" />,
                title: "24/7 Availability",
                description: "Round-the-clock booking support and emergency assistance"
              },
              {
                icon: <StarIcon className="h-12 w-12" />,
                title: "Premium Experience",
                description: "Well-maintained vehicles with professional chauffeurs"
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12 text-white mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
            <p className="text-xl mb-6 opacity-90">Get your personalized quote in under 2 minutes</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <PhoneIcon className="h-6 w-6" />
                Call Now: +91 95917 62419
              </a>
              
              <a 
                href="https://wa.me/919591762419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
                WhatsApp Quick Book
              </a>
            </div>
            
            <p className="mt-6 text-sm opacity-80">Instant confirmation • No hidden charges • Free cancellation</p>
          </div>
        </div>
      </div>

      {/* Quick Quote Modal */}
      {showQuickQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Get Instant Quote</h3>
              <button onClick={() => setShowQuickQuote(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                <input
                  type="number"
                  value={quoteDetails.passengers}
                  onChange={(e) => setQuoteDetails({...quoteDetails, passengers: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  min="1"
                  max="20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
                <input
                  type="number"
                  value={quoteDetails.days}
                  onChange={(e) => setQuoteDetails({...quoteDetails, days: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  min="1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={quoteDetails.date}
                  onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Estimated Cost:</span>
                  <span className="text-2xl font-bold text-green-600">₹4,500 - ₹6,800</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Final price depends on exact requirements</p>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold">
                  Get Exact Quote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}