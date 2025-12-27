
// // // File Path: app/transportation/buses/page.tsx

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
//   WifiIcon,
//   TvIcon,
//   Battery100Icon,
//   PowerIcon,
//   MusicalNoteIcon,
//   ArrowPathIcon,
//   PhotoIcon
// } from '@heroicons/react/24/outline';
// import { StarIcon as StarIconSolid, BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid';
// import Image from 'next/image';
// import { calculateDistance } from '@/lib/utils/distanceCalculator';

// // Bus categories and types
// const busTypes = [
//   { id: 'minibus', name: 'Mini Bus', seats: '12-27', icon: '🚌', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'standard', name: 'Standard Bus', seats: '28-35', icon: '🚍', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'luxury', name: 'Luxury Bus', seats: '36-45', icon: '🚎', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'sleeper', name: 'Sleeper Bus', seats: '20-45', icon: '🛌', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'volvo', name: 'Volvo Bus', seats: '40-53', icon: '🚐', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'double', name: 'Double Decker', seats: '60-80', icon: '🚋', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
// ];

// // Complete buses data with enhanced details
// const vehicles = [
//   { 
//     id: 1, 
//     name: 'AC Mini Bus (21 Seater)', 
//     seats: 21, 
//     perKm: 40, 
//     perKmWithTax: 48, 
//     category: 'Premium Mini', 
//     ac: true, 
//     rating: 4.4,
//     trips: 560,
//     features: ['AC', 'Comfort Seats', 'Music System', 'Charging Points'],
//     amenities: ['Free Water', 'GPS', 'Tour Guide', 'First Aid'],
//     type: 'minibus',
//     badge: 'Best Value',
//     fuel: 'Diesel',
//     year: 2022,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 2, 
//     name: 'Luxury Sleeper (35 Seater)', 
//     seats: 35, 
//     perKm: 65, 
//     perKmWithTax: 75, 
//     category: 'Luxury Sleeper', 
//     ac: true, 
//     rating: 4.7,
//     trips: 320,
//     features: ['Sleeper Beds', 'AC', 'Entertainment', 'Reading Lights'],
//     amenities: ['Blankets', 'Pillows', 'Snacks', 'WiFi'],
//     type: 'sleeper',
//     badge: 'Night Travel',
//     fuel: 'Diesel',
//     year: 2023,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 3, 
//     name: 'Volvo Multi-Axle (53 Seater)', 
//     seats: 53, 
//     perKm: 110, 
//     perKmWithTax: 128, 
//     category: 'Premium Luxury', 
//     ac: true, 
//     rating: 4.8,
//     trips: 210,
//     features: ['Multi-Axle', 'AC', 'Recliners', 'LED TV'],
//     amenities: ['USB Ports', 'WiFi', 'Refreshments', 'Steward'],
//     type: 'volvo',
//     badge: 'Most Comfortable',
//     fuel: 'Diesel',
//     year: 2024,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 4, 
//     name: 'Double Decker (65 Seater)', 
//     seats: 65, 
//     perKm: 140, 
//     perKmWithTax: 165, 
//     category: 'Premium', 
//     ac: true, 
//     rating: 4.6,
//     trips: 180,
//     features: ['Double Deck', 'AC', 'Panoramic View', 'Café'],
//     amenities: ['Tour Guide', 'WiFi', 'Charging', 'Toilet'],
//     type: 'double',
//     badge: 'Tour Special',
//     fuel: 'Diesel',
//     year: 2023,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 5, 
//     name: 'Standard Bus (45 Seater)', 
//     seats: 45, 
//     perKm: 60, 
//     perKmWithTax: 70, 
//     category: 'Standard', 
//     ac: false, 
//     rating: 4.2,
//     trips: 890,
//     features: ['Spacious', 'Reliable', 'Large Windows', 'Storage'],
//     amenities: ['Water', 'Basic First Aid', 'Driver Assistant'],
//     type: 'standard',
//     badge: 'Economical',
//     fuel: 'Diesel',
//     year: 2021,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 6, 
//     name: 'Party Bus (25 Seater)', 
//     seats: 25, 
//     perKm: 80, 
//     perKmWithTax: 94, 
//     category: 'Special', 
//     ac: true, 
//     rating: 4.5,
//     trips: 150,
//     features: ['DJ Setup', 'LED Lights', 'Karaoke', 'Dance Floor'],
//     amenities: ['Sound System', 'Lighting', 'Refreshments', 'Host'],
//     type: 'luxury',
//     badge: 'Party Special',
//     fuel: 'Diesel',
//     year: 2023,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 7, 
//     name: 'AC School Bus (40 Seater)', 
//     seats: 40, 
//     perKm: 45, 
//     perKmWithTax: 52, 
//     category: 'School', 
//     ac: true, 
//     rating: 4.3,
//     trips: 420,
//     features: ['AC', 'Safety Rails', 'Emergency Exits', 'Tracking'],
//     amenities: ['First Aid', 'GPS Tracking', 'Attendant'],
//     type: 'standard',
//     badge: 'School Safe',
//     fuel: 'Diesel',
//     year: 2022,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 8, 
//     name: 'VIP Coach (20 Seater)', 
//     seats: 20, 
//     perKm: 75, 
//     perKmWithTax: 88, 
//     category: 'VIP', 
//     ac: true, 
//     rating: 4.9,
//     trips: 95,
//     features: ['Leather Seats', 'Conference Table', 'Privacy', 'WiFi'],
//     amenities: ['Butler', 'Gourmet Food', 'Entertainment', 'Work Station'],
//     type: 'luxury',
//     badge: 'Corporate',
//     fuel: 'Diesel',
//     year: 2024,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
//   { 
//     id: 9, 
//     name: 'Tourist Bus (30 Seater)', 
//     seats: 30, 
//     perKm: 55, 
//     perKmWithTax: 65, 
//     category: 'Tourist', 
//     ac: true, 
//     rating: 4.4,
//     trips: 380,
//     features: ['Comfort Seats', 'Storage', 'Charging', 'Guide Mic'],
//     amenities: ['Tour Guide', 'Water', 'Snacks', 'First Aid'],
//     type: 'luxury',
//     badge: 'Tour Ready',
//     fuel: 'Diesel',
//     year: 2022,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
//     ]
//   },
// ];

// // Popular group routes
// const groupRoutes = [
//   { type: 'Pilgrimage', route: 'Hyderabad → Tirupati', from: 'Hyderabad', to: 'Tirupati', groups: '25-50 people', price: '₹65,000 - ₹1,20,000' },
//   { type: 'School Trip', route: 'Bangalore → Mysore', from: 'Bangalore', to: 'Mysore', groups: '40-60 students', price: '₹45,000 - ₹85,000' },
//   { type: 'Corporate', route: 'Mumbai → Lonavala', from: 'Mumbai', to: 'Lonavala', groups: '30-45 employees', price: '₹55,000 - ₹95,000' },
//   { type: 'Wedding', route: 'Delhi → Jaipur', from: 'Delhi', to: 'Jaipur', groups: '50-80 guests', price: '₹85,000 - ₹1,50,000' },
//   { type: 'Tour', route: 'Chennai → Pondicherry', from: 'Chennai', to: 'Pondicherry', groups: '20-35 tourists', price: '₹35,000 - ₹65,000' },
//   { type: 'Family', route: 'Kolkata → Digha', from: 'Kolkata', to: 'Digha', groups: '15-25 members', price: '₹28,000 - ₹52,000' },
// ];

// export default function BusesPage() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [km, setKm] = useState('');
//   const [distance, setDistance] = useState<number | null>(null);
//   const [duration, setDuration] = useState<string>('');
//   const [routeDetails, setRouteDetails] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedType, setSelectedType] = useState<string | null>(null);
//   const [sortBy, setSortBy] = useState<'price' | 'rating' | 'seats'>('price');
//   const [showFilters, setShowFilters] = useState(false);
//   const [minSeats, setMinSeats] = useState(20);
//   const [maxPrice, setMaxPrice] = useState(100);
//   const [showACOnly, setShowACOnly] = useState(true);
//   const [selectedRoute, setSelectedRoute] = useState<any>(null);
//   const [showGroupBooking, setShowGroupBooking] = useState(false);
//   const [showPhotos, setShowPhotos] = useState(false);
//   const [selectedVehiclePhotos, setSelectedVehiclePhotos] = useState<string[]>([]);
//   const [selectedVehicleName, setSelectedVehicleName] = useState('');
//   const [passengerCount, setPassengerCount] = useState(40);
//   const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
//   const [isCalculating, setIsCalculating] = useState(false);

//   const ITEMS_PER_PAGE = 6;
//   const MINIMUM_KM_PER_DAY = 250;
//   const DRIVER_BATA_PER_DAY = 1500;
//   const GST_PERCENTAGE = 18;

//   const formatPrice = (price: number) => price.toLocaleString('en-IN');
  
//   const getGradientColor = (color: string) => {
//     const gradients: Record<string, string> = {
//       red: 'from-red-500 to-red-700',
//     };
//     return gradients[color] || 'from-red-500 to-red-700';
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
//         console.log('Distance calculated:', result);
//       } else {
//         const mockDistance = Math.floor(Math.random() * 800) + 200;
//         setDistance(mockDistance);
//         setDuration(`${Math.ceil(mockDistance / 50)}-${Math.ceil(mockDistance / 40)} hrs`);
//         setRouteDetails([from, to]);
//         if (!km) setKm(mockDistance.toString());
//       }
//     } catch (error) {
//       console.error('Distance calculation failed:', error);
//       const mockDistance = Math.floor(Math.random() * 800) + 200;
//       setDistance(mockDistance);
//       setDuration(`${Math.ceil(mockDistance / 50)}-${Math.ceil(mockDistance / 40)} hrs`);
//       setRouteDetails([from, to]);
//       if (!km) setKm(mockDistance.toString());
//     } finally {
//       setLoading(false);
//       setIsCalculating(false);
//     }
//   };

//   // Filter and sort vehicles
//   const filteredVehicles = useMemo(() => {
//     let filtered = [...vehicles];
    
//     if (selectedType) {
//       filtered = filtered.filter(v => v.type === selectedType);
//     }
    
//     if (minSeats > 0) {
//       filtered = filtered.filter(v => v.seats >= minSeats);
//     }
    
//     if (showACOnly) {
//       filtered = filtered.filter(v => v.ac);
//     }
    
//     if (maxPrice < 100) {
//       const maxPriceValue = (maxPrice / 100) * 165;
//       filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
//     }
    
//     filtered.sort((a, b) => {
//       if (sortBy === 'price') return a.perKmWithTax - b.perKmWithTax;
//       if (sortBy === 'rating') return b.rating - a.rating;
//       return b.seats - a.seats;
//     });
    
//     return filtered;
//   }, [selectedType, minSeats, showACOnly, maxPrice, sortBy]);

//   const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentVehicles = filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const finalKm = Number(km || distance || 350);
//   const numberOfDays = Math.ceil(finalKm / MINIMUM_KM_PER_DAY);
//   const minimumKmCharge = numberOfDays * MINIMUM_KM_PER_DAY;
//   const driverBataTotal = numberOfDays * DRIVER_BATA_PER_DAY;

//   const handleGroupRouteSelect = async (route: any) => {
//     setSelectedRoute(route);
//     setPassengerCount(parseInt(route.groups.split('-')[0]));
//     setFrom(route.from);
//     setTo(route.to);
    
//     setLoading(true);
//     try {
//       const result = await calculateDistance(route.from, route.to);
//       if (result) {
//         setDistance(result.distance);
//         setDuration(result.duration);
//         setRouteDetails(result.route);
//         setKm(result.distance.toString());
//       }
//     } catch (error) {
//       console.error('Error calculating route distance:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleViewPhotos = (vehicle: any) => {
//     setSelectedVehiclePhotos(vehicle.images);
//     setSelectedVehicleName(vehicle.name);
//     setShowPhotos(true);
//   };

//   const calculateTotal = (vehicle: any) => {
//     const kmToCharge = Math.max(finalKm, minimumKmCharge);
//     const baseFare = vehicle.perKmWithTax * kmToCharge;
//     const gst = (baseFare * GST_PERCENTAGE) / 100;
//     const total = baseFare + driverBataTotal + gst;
//     return { baseFare, gst, total, kmToCharge };
//   };

//   const recommendedBuses = useMemo(() => {
//     return vehicles
//       .filter(v => v.seats >= passengerCount)
//       .sort((a, b) => a.perKmWithTax - b.perKmWithTax)
//       .slice(0, 3);
//   }, [passengerCount, vehicles]);

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
//               <span className="text-sm font-semibold text-white">GROUP TRAVEL SPECIALISTS</span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//               Premium <span className="text-yellow-300">Buses</span> for Group Travel
//             </h1>
            
//             <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
//               Perfect for pilgrimages, school trips, corporate events, weddings, and large group tours across India
//             </p>
            
//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
//               {[
//                 { label: 'Bus Fleet', value: '100+' },
//                 { label: 'Group Trips', value: '5K+' },
//                 { label: 'Cities', value: '200+' },
//                 { label: 'Happy Groups', value: '2K+' },
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
//         {/* Group Booking Calculator */}
//         <div className="bg-white rounded-2xl shadow-2xl mb-8 overflow-hidden">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <UserGroupIcon className="h-7 w-7" />
//               Group Travel Calculator
//             </h2>
//             <p className="text-red-100">Get instant pricing for your group size</p>
//           </div>
          
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
//                 <div className="relative">
//                   <input
//                     type="range"
//                     min="20"
//                     max="80"
//                     value={passengerCount}
//                     onChange={(e) => setPassengerCount(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="text-center mt-2">
//                     <span className="text-2xl font-bold text-red-600">{passengerCount}</span>
//                     <span className="text-gray-600 ml-2">passengers</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
//                 <div className="relative">
//                   <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     value={from}
//                     onChange={(e) => setFrom(e.target.value)}
//                     placeholder="Enter city"
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
//                     placeholder="Destination city"
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
//                   placeholder="Enter distance"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                 />
//               </div>
//             </div>
            
//             {/* Calculate Button */}
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
//                     <div className="text-sm text-gray-600">Route Information</div>
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
            
//             {recommendedBuses.length > 0 && (
//               <div className="mt-6">
//                 <h4 className="font-semibold text-gray-900 mb-3">Recommended for your group:</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {recommendedBuses.map((bus) => {
//                     const { total } = calculateTotal(bus);
//                     return (
//                       <div key={bus.id} className="bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-4 border border-red-200">
//                         <div className="flex flex-col md:flex-row md:justify-between items-start gap-2">
//                           <div className="flex-1">
//                             <div className="font-bold text-gray-900">{bus.name}</div>
//                             <div className="text-sm text-gray-600">{bus.seats} seats • {bus.ac ? 'AC' : 'Non-AC'}</div>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-lg font-bold text-red-600">₹{formatPrice(total)}</div>
//                             <div className="text-xs text-gray-500">estimated</div>
//                           </div>
//                         </div>
//                         <div className="mt-2 flex items-center gap-1">
//                           <StarIconSolid className="h-4 w-4 text-amber-500" />
//                           <span className="text-sm font-medium">{bus.rating}</span>
//                           <span className="text-xs text-gray-500">({bus.trips} trips)</span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bus Type Selector */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Select Bus Type</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
//             {busTypes.map((type) => (
//               <button
//                 key={type.id}
//                 onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
//                 className={`p-4 rounded-xl border-2 transition-all ${
//                   selectedType === type.id
//                     ? 'border-red-500 bg-red-50'
//                     : 'border-gray-200 bg-white hover:border-red-200'
//                 }`}
//               >
//                 <div className="text-2xl mb-2">{type.icon}</div>
//                 <div className="font-medium text-gray-900">{type.name}</div>
//                 <div className="text-sm text-gray-600">{type.seats} seats</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Popular Group Routes */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Group Routes</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
//             {groupRoutes.map((route, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleGroupRouteSelect(route)}
//                 className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
//                   selectedRoute?.route === route.route ? 'border-red-500' : 'border-gray-200'
//                 }`}
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <div className="flex-1">
//                     <div className="font-bold text-gray-900 text-left">{route.route}</div>
//                     <div className="text-sm text-red-600 font-medium text-left">{route.type}</div>
//                   </div>
//                   <ArrowRightIcon className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
//                 </div>
//                 <div className="text-sm text-gray-600 mb-2 text-left">{route.groups}</div>
//                 <div className="text-sm font-bold text-green-600 text-left">{route.price}</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Controls Section */}
//         <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//             <div>
//               <h3 className="text-lg md:text-xl font-bold text-gray-900">Available Buses ({filteredVehicles.length})</h3>
//               <p className="text-gray-600 text-sm md:text-base">Perfect for groups of {passengerCount}+ people</p>
//             </div>
            
//             <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full md:w-auto">
//               {/* Quick Filters */}
//               <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
//                 <button
//                   onClick={() => setMinSeats(20)}
//                   className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
//                     minSeats === 20 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   20+ Seats
//                 </button>
//                 <button
//                   onClick={() => setMinSeats(40)}
//                   className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
//                     minSeats === 40 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   40+ Seats
//                 </button>
//                 <button
//                   onClick={() => setShowACOnly(!showACOnly)}
//                   className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
//                     showACOnly ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   AC Only
//                 </button>
//               </div>
              
//               <div className="flex gap-2">
//                 {/* Filter Button */}
//                 <button
//                   onClick={() => setShowFilters(!showFilters)}
//                   className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
//                 >
//                   <FunnelIcon className="h-4 w-4 md:h-5 md:w-5" />
//                   <span className="hidden md:inline">Filters</span>
//                 </button>
                
//                 {/* Sort Dropdown */}
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
          
//           {/* Advanced Filters */}
//           {showFilters && (
//             <div className="mt-4 md:mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
//               <div className="flex justify-between items-center mb-4">
//                 <h4 className="font-semibold text-gray-900 text-sm md:text-base">Advanced Filters</h4>
//                 <button onClick={() => setShowFilters(false)}>
//                   <XMarkIcon className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Minimum Seats: {minSeats}
//                   </label>
//                   <input
//                     type="range"
//                     min="20"
//                     max="80"
//                     value={minSeats}
//                     onChange={(e) => setMinSeats(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>20 Seats</span>
//                     <span>80 Seats</span>
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Max Price per KM: ₹{((maxPrice / 100) * 165).toFixed(0)}
//                   </label>
//                   <input
//                     type="range"
//                     min="20"
//                     max="100"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>₹33</span>
//                     <span>₹165</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
//                 <button
//                   onClick={() => {
//                     setMinSeats(20);
//                     setMaxPrice(100);
//                     setShowACOnly(true);
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

//         {/* Buses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
//           {currentVehicles.map((vehicle) => {
//             const { total, kmToCharge, baseFare, gst } = calculateTotal(vehicle);
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
//                 {/* Bus Header with Image */}
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
                  
//                   {/* Vehicle Info */}
//                   <div className="absolute bottom-4 right-4 flex items-center gap-2">
//                     <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
//                       <StarIconSolid className="h-3 w-3 text-yellow-400" />
//                       <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
//                     </div>
//                     <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
//                       <span className="text-white text-xs">{vehicle.year}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Bus Details */}
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
                  
//                   {/* Features */}
//                   <div className="mb-4">
//                     <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
//                     <div className="flex flex-wrap gap-2">
//                       {vehicle.features.slice(0, 4).map((feature, idx) => (
//                         <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Amenities */}
//                   <div className="mb-4">
//                     <div className="text-sm font-medium text-gray-700 mb-2">Amenities:</div>
//                     <div className="flex flex-wrap gap-2">
//                       {vehicle.amenities.slice(0, 3).map((amenity, idx) => (
//                         <div key={idx} className="flex items-center gap-1">
//                           <CheckCircleIcon className="h-3 w-3 text-red-500" />
//                           <span className="text-xs text-gray-600">{amenity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Price Breakdown */}
//                   <div className="mb-4 bg-gray-50 rounded-lg p-3">
//                     <div className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Base Fare ({kmToCharge} km):</span>
//                         <span className="font-medium">₹{formatPrice(baseFare)}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Driver Allowance ({numberOfDays} days):</span>
//                         <span className="font-medium">₹{formatPrice(driverBataTotal)}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
//                         <span className="font-medium">₹{formatPrice(gst)}</span>
//                       </div>
//                       <div className="border-t pt-2 mt-2">
//                         <div className="flex justify-between font-bold">
//                           <span className="text-gray-900">Total Estimated:</span>
//                           <span className="text-lg text-green-600">₹{formatPrice(total)}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <button
//                       onClick={() => setShowGroupBooking(true)}
//                       className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
//                     >
//                       Book for Group
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
//               Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} buses
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
//           <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why Choose Our Bus Service for Groups?</h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {
//                 icon: <UserGroupIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "Large Group Expertise",
//                 description: "Specialized in handling groups from 20 to 80 people with ease"
//               },
//               {
//                 icon: <ShieldCheckIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "Safety First",
//                 description: "GPS tracking, emergency exits, first aid, and experienced drivers"
//               },
//               {
//                 icon: <ClockIcon className="h-10 w-10 md:h-12 md:w-12" />,
//                 title: "Flexible Scheduling",
//                 description: "Customizable itineraries and 24/7 support for your group"
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

//         {/* Group Booking CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-8">
//             <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Need a Bus for Your Group?</h3>
//             <p className="text-lg md:text-xl mb-6 opacity-90">Get special discounts for groups of 30+ people</p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                 <div className="text-2xl md:text-3xl font-bold">10% OFF</div>
//                 <div className="text-base md:text-lg">For School & College Groups</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                 <div className="text-2xl md:text-3xl font-bold">15% OFF</div>
//                 <div className="text-base md:text-lg">For Corporate & Wedding Groups</div>
//               </div>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+919591762419"
//                 className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg"
//               >
//                 <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
//                 Call Group Coordinator
//               </a>
              
//               <button
//                 onClick={() => setShowGroupBooking(true)}
//                 className="inline-flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-900 transition-all shadow-lg"
//               >
//                 <UserGroupIcon className="h-5 w-5 md:h-6 md:w-6" />
//                 Request Group Quote
//               </button>
//             </div>
            
//             <p className="mt-6 text-sm md:text-base opacity-80">Free itinerary planning • Multiple bus options • Flexible payment</p>
//           </div>
//         </div>
//       </div>

//       {/* Group Booking Modal */}
//       {showGroupBooking && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h3 className="text-xl font-bold text-gray-900">Request Group Quote</h3>
//               <button onClick={() => setShowGroupBooking(false)}>
//                 <XMarkIcon className="h-6 w-6 text-gray-500" />
//               </button>
//             </div>
            
//             <div className="p-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Group Type</label>
//                   <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white">
//                     <option>School/College Trip</option>
//                     <option>Corporate Event</option>
//                     <option>Pilgrimage Tour</option>
//                     <option>Wedding</option>
//                     <option>Family Function</option>
//                     <option>Tour Group</option>
//                   </select>
//                 </div>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
//                     <input
//                       type="text"
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       value={passengerCount}
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         if (value === '' || /^\d+$/.test(value)) {
//                           const numValue = parseInt(value);
//                           if (!isNaN(numValue) && numValue >= 1) {
//                             setPassengerCount(numValue);
//                           }
//                         }
//                       }}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                       min="20"
//                       max="200"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
//                     <input
//                       type="number"
//                       defaultValue="3"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                       min="1"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
//                   <input
//                     type="date"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
//                   <textarea
//                     rows={3}
//                     placeholder="Any special needs, amenities required, or specific requests..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
//                   />
//                 </div>
                
//                 <div className="pt-4 border-t">
//                   <div className="mb-4">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-gray-700 font-medium">Group Size:</span>
//                       <span className="font-semibold text-gray-900">{passengerCount} people</span>
//                     </div>
//                     <div className="flex justify-between mb-3">
//                       <span className="text-gray-700 font-medium">Estimated Cost Range:</span>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-green-600">₹65,000 - ₹1,50,000</div>
//                         <div className="text-sm text-gray-600">Final quote in 2 hours</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800">
//                     Get Special Group Quote
//                   </button>
                  
//                   <p className="text-center text-sm text-gray-500 mt-3">
//                     Our group coordinator will call you within 30 minutes
//                   </p>
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
//                 <h4 className="font-semibold text-gray-900 mb-2">Bus Details</h4>
//                 <p className="text-sm text-gray-600 mb-3">
//                   These are actual photos of our {selectedVehicleName} fleet. All buses are maintained to the highest standards and are regularly serviced.
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

















// File Path: app/transportation/buses/page.tsx

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
  WifiIcon,
  TvIcon,
  Battery100Icon,
  PowerIcon,
  MusicalNoteIcon,
  ArrowPathIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { calculateDistance } from '@/lib/utils/distanceCalculator';

// Bus categories and types
const busTypes = [
  { id: 'minibus', name: 'Mini Bus', seats: '12-27', icon: '🚌', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'standard', name: 'Standard Bus', seats: '28-35', icon: '🚍', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'luxury', name: 'Luxury Bus', seats: '36-45', icon: '🚎', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'sleeper', name: 'Sleeper Bus', seats: '20-45', icon: '🛌', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'volvo', name: 'Volvo Bus', seats: '40-53', icon: '🚐', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'double', name: 'Double Decker', seats: '60-80', icon: '🚋', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
];

// Complete buses data with enhanced details
const vehicles = [
  { 
    id: 1, 
    name: 'AC Mini Bus (21 Seater)', 
    seats: 21, 
    perKm: 40, 
    perKmWithTax: 48, 
    category: 'Premium Mini', 
    ac: true, 
    rating: 4.4,
    trips: 560,
    features: ['AC', 'Comfort Seats', 'Music System', 'Charging Points'],
    amenities: ['Free Water', 'GPS', 'Tour Guide', 'First Aid'],
    type: 'minibus',
    badge: 'Best Value',
    fuel: 'Diesel',
    year: 2022,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 2, 
    name: 'Luxury Sleeper (35 Seater)', 
    seats: 35, 
    perKm: 65, 
    perKmWithTax: 75, 
    category: 'Luxury Sleeper', 
    ac: true, 
    rating: 4.7,
    trips: 320,
    features: ['Sleeper Beds', 'AC', 'Entertainment', 'Reading Lights'],
    amenities: ['Blankets', 'Pillows', 'Snacks', 'WiFi'],
    type: 'sleeper',
    badge: 'Night Travel',
    fuel: 'Diesel',
    year: 2023,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 3, 
    name: 'Volvo Multi-Axle (53 Seater)', 
    seats: 53, 
    perKm: 110, 
    perKmWithTax: 128, 
    category: 'Premium Luxury', 
    ac: true, 
    rating: 4.8,
    trips: 210,
    features: ['Multi-Axle', 'AC', 'Recliners', 'LED TV'],
    amenities: ['USB Ports', 'WiFi', 'Refreshments', 'Steward'],
    type: 'volvo',
    badge: 'Most Comfortable',
    fuel: 'Diesel',
    year: 2024,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 4, 
    name: 'Double Decker (65 Seater)', 
    seats: 65, 
    perKm: 140, 
    perKmWithTax: 165, 
    category: 'Premium', 
    ac: true, 
    rating: 4.6,
    trips: 180,
    features: ['Double Deck', 'AC', 'Panoramic View', 'Café'],
    amenities: ['Tour Guide', 'WiFi', 'Charging', 'Toilet'],
    type: 'double',
    badge: 'Tour Special',
    fuel: 'Diesel',
    year: 2023,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 5, 
    name: 'Standard Bus (45 Seater)', 
    seats: 45, 
    perKm: 60, 
    perKmWithTax: 70, 
    category: 'Standard', 
    ac: false, 
    rating: 4.2,
    trips: 890,
    features: ['Spacious', 'Reliable', 'Large Windows', 'Storage'],
    amenities: ['Water', 'Basic First Aid', 'Driver Assistant'],
    type: 'standard',
    badge: 'Economical',
    fuel: 'Diesel',
    year: 2021,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 6, 
    name: 'Party Bus (25 Seater)', 
    seats: 25, 
    perKm: 80, 
    perKmWithTax: 94, 
    category: 'Special', 
    ac: true, 
    rating: 4.5,
    trips: 150,
    features: ['DJ Setup', 'LED Lights', 'Karaoke', 'Dance Floor'],
    amenities: ['Sound System', 'Lighting', 'Refreshments', 'Host'],
    type: 'luxury',
    badge: 'Party Special',
    fuel: 'Diesel',
    year: 2023,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 7, 
    name: 'AC School Bus (40 Seater)', 
    seats: 40, 
    perKm: 45, 
    perKmWithTax: 52, 
    category: 'School', 
    ac: true, 
    rating: 4.3,
    trips: 420,
    features: ['AC', 'Safety Rails', 'Emergency Exits', 'Tracking'],
    amenities: ['First Aid', 'GPS Tracking', 'Attendant'],
    type: 'standard',
    badge: 'School Safe',
    fuel: 'Diesel',
    year: 2022,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 8, 
    name: 'VIP Coach (20 Seater)', 
    seats: 20, 
    perKm: 75, 
    perKmWithTax: 88, 
    category: 'VIP', 
    ac: true, 
    rating: 4.9,
    trips: 95,
    features: ['Leather Seats', 'Conference Table', 'Privacy', 'WiFi'],
    amenities: ['Butler', 'Gourmet Food', 'Entertainment', 'Work Station'],
    type: 'luxury',
    badge: 'Corporate',
    fuel: 'Diesel',
    year: 2024,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
  { 
    id: 9, 
    name: 'Tourist Bus (30 Seater)', 
    seats: 30, 
    perKm: 55, 
    perKmWithTax: 65, 
    category: 'Tourist', 
    ac: true, 
    rating: 4.4,
    trips: 380,
    features: ['Comfort Seats', 'Storage', 'Charging', 'Guide Mic'],
    amenities: ['Tour Guide', 'Water', 'Snacks', 'First Aid'],
    type: 'luxury',
    badge: 'Tour Ready',
    fuel: 'Diesel',
    year: 2022,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg'
    ]
  },
];

// Popular group routes
const groupRoutes = [
  { type: 'Pilgrimage', route: 'Hyderabad → Tirupati', from: 'Hyderabad', to: 'Tirupati', groups: '25-50 people', price: '₹65,000 - ₹1,20,000' },
  { type: 'School Trip', route: 'Bangalore → Mysore', from: 'Bangalore', to: 'Mysore', groups: '40-60 students', price: '₹45,000 - ₹85,000' },
  { type: 'Corporate', route: 'Mumbai → Lonavala', from: 'Mumbai', to: 'Lonavala', groups: '30-45 employees', price: '₹55,000 - ₹95,000' },
  { type: 'Wedding', route: 'Delhi → Jaipur', from: 'Delhi', to: 'Jaipur', groups: '50-80 guests', price: '₹85,000 - ₹1,50,000' },
  { type: 'Tour', route: 'Chennai → Pondicherry', from: 'Chennai', to: 'Pondicherry', groups: '20-35 tourists', price: '₹35,000 - ₹65,000' },
  { type: 'Family', route: 'Kolkata → Digha', from: 'Kolkata', to: 'Digha', groups: '15-25 members', price: '₹28,000 - ₹52,000' },
];

export default function BusesPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [km, setKm] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<string>('');
  const [routeDetails, setRouteDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'seats'>('price');
  const [showFilters, setShowFilters] = useState(false);
  const [minSeats, setMinSeats] = useState(20);
  const [maxPrice, setMaxPrice] = useState(100);
  const [showACOnly, setShowACOnly] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [showGroupBooking, setShowGroupBooking] = useState(false);
  const [showQuickQuote, setShowQuickQuote] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectedVehiclePhotos, setSelectedVehiclePhotos] = useState<string[]>([]);
  const [selectedVehicleName, setSelectedVehicleName] = useState('');
  const [passengerCount, setPassengerCount] = useState(40);
  const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState({
    passengers: '',
    days: 1,
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    vehicle: null as any
  });

  const ITEMS_PER_PAGE = 6;
  const MINIMUM_KM_PER_DAY = 250;
  const DRIVER_BATA_PER_DAY = 1500;
  const GST_PERCENTAGE = 18;

  const formatPrice = (price: number) => price.toLocaleString('en-IN');
  
  const getGradientColor = (color: string) => {
    const gradients: Record<string, string> = {
      red: 'from-red-500 to-red-700',
    };
    return gradients[color] || 'from-red-500 to-red-700';
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
        const mockDistance = Math.floor(Math.random() * 800) + 200;
        setDistance(mockDistance);
        setDuration(`${Math.ceil(mockDistance / 50)}-${Math.ceil(mockDistance / 40)} hrs`);
        setRouteDetails([from, to]);
        if (!km) setKm(mockDistance.toString());
      }
    } catch (error) {
      console.error('Distance calculation failed:', error);
      const mockDistance = Math.floor(Math.random() * 800) + 200;
      setDistance(mockDistance);
      setDuration(`${Math.ceil(mockDistance / 50)}-${Math.ceil(mockDistance / 40)} hrs`);
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
    
    if (selectedType) {
      filtered = filtered.filter(v => v.type === selectedType);
    }
    
    if (minSeats > 0) {
      filtered = filtered.filter(v => v.seats >= minSeats);
    }
    
    if (showACOnly) {
      filtered = filtered.filter(v => v.ac);
    }
    
    if (maxPrice < 100) {
      const maxPriceValue = (maxPrice / 100) * 165;
      filtered = filtered.filter(v => v.perKmWithTax <= maxPriceValue);
    }
    
    filtered.sort((a, b) => {
      if (sortBy === 'price') return a.perKmWithTax - b.perKmWithTax;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.seats - a.seats;
    });
    
    return filtered;
  }, [selectedType, minSeats, showACOnly, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVehicles = filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const finalKm = Number(km || distance || 350);
  const numberOfDays = Math.ceil(finalKm / MINIMUM_KM_PER_DAY);
  const minimumKmCharge = numberOfDays * MINIMUM_KM_PER_DAY;
  const driverBataTotal = numberOfDays * DRIVER_BATA_PER_DAY;

  const handleGroupRouteSelect = async (route: any) => {
    setSelectedRoute(route);
    setPassengerCount(parseInt(route.groups.split('-')[0]));
    setFrom(route.from);
    setTo(route.to);
    
    setLoading(true);
    try {
      const result = await calculateDistance(route.from, route.to);
      if (result) {
        setDistance(result.distance);
        setDuration(result.duration);
        setRouteDetails(result.route);
        setKm(result.distance.toString());
      }
    } catch (error) {
      console.error('Error calculating route distance:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewPhotos = (vehicle: any) => {
    setSelectedVehiclePhotos(vehicle.images);
    setSelectedVehicleName(vehicle.name);
    setShowPhotos(true);
  };

  const calculateTotal = (vehicle: any, customDays?: number, customPassengers?: number) => {
    const days = customDays || numberOfDays;
    const kmToCharge = Math.max(finalKm, days * MINIMUM_KM_PER_DAY);
    const baseFare = vehicle.perKmWithTax * kmToCharge;
    const gst = (baseFare * GST_PERCENTAGE) / 100;
    const total = baseFare + (days * DRIVER_BATA_PER_DAY) + gst;
    return { baseFare, gst, total, kmToCharge, days };
  };

  const handleQuickQuote = (vehicle: any) => {
    setShowQuickQuote(true);
    setQuoteDetails({
      passengers: passengerCount.toString(),
      days: numberOfDays,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      vehicle: vehicle
    });
  };

  const calculateQuotePrice = () => {
    if (!quoteDetails.vehicle) return { min: 0, max: 0, total: 0, days: 0, kmToCharge: 0 };
    
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

  const recommendedBuses = useMemo(() => {
    return vehicles
      .filter(v => v.seats >= passengerCount)
      .sort((a, b) => a.perKmWithTax - b.perKmWithTax)
      .slice(0, 3);
  }, [passengerCount, vehicles]);

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
              <span className="text-sm font-semibold text-white">GROUP TRAVEL SPECIALISTS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Premium <span className="text-yellow-300">Buses</span> for Group Travel
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
              Perfect for pilgrimages, school trips, corporate events, weddings, and large group tours across India
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
              {[
                { label: 'Bus Fleet', value: '100+' },
                { label: 'Group Trips', value: '5K+' },
                { label: 'Cities', value: '200+' },
                { label: 'Happy Groups', value: '2K+' },
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
        {/* Group Booking Calculator */}
        <div className="bg-white rounded-2xl shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <UserGroupIcon className="h-7 w-7" />
              Group Travel Calculator
            </h2>
            <p className="text-red-100">Get instant pricing for your group size</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                <div className="relative">
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-red-600">{passengerCount}</span>
                    <span className="text-gray-600 ml-2">passengers</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter city"
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
                    placeholder="Destination city"
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
                  placeholder="Enter distance"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>
            
            {/* Calculate Button */}
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
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-150"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-300"></div>
                  <span className="text-gray-600 text-sm md:text-base">Calculating distance via AI...</span>
                </div>
              </div>
            )}
            
            {distance && !loading && (
              <div className="mt-6 bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-4 border border-red-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Route Information</div>
                    <div className="text-lg font-bold text-gray-900">{from} → {to}</div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1">
                      <span className="text-red-600 font-semibold">{distance} KM</span>
                      <span className="text-gray-400 hidden md:inline">•</span>
                      <span className="text-gray-600">{duration}</span>
                      <span className="text-gray-400 hidden md:inline">•</span>
                      <span className="text-red-600 font-medium">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
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
            
            {recommendedBuses.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Recommended for your group:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedBuses.map((bus) => {
                    const { total } = calculateTotal(bus);
                    return (
                      <div key={bus.id} className="bg-gradient-to-r from-red-50 to-red-50 rounded-xl p-4 border border-red-200">
                        <div className="flex flex-col md:flex-row md:justify-between items-start gap-2">
                          <div className="flex-1">
                            <div className="font-bold text-gray-900">{bus.name}</div>
                            <div className="text-sm text-gray-600">{bus.seats} seats • {bus.ac ? 'AC' : 'Non-AC'}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-600">₹{formatPrice(total)}</div>
                            <div className="text-xs text-gray-500">estimated</div>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                          <StarIconSolid className="h-4 w-4 text-amber-500" />
                          <span className="text-sm font-medium">{bus.rating}</span>
                          <span className="text-xs text-gray-500">({bus.trips} trips)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bus Type Selector */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Select Bus Type</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {busTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedType === type.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-red-200'
                }`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="font-medium text-gray-900">{type.name}</div>
                <div className="text-sm text-gray-600">{type.seats} seats</div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Group Routes */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Group Routes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {groupRoutes.map((route, idx) => (
              <button
                key={idx}
                onClick={() => handleGroupRouteSelect(route)}
                className={`bg-white rounded-xl p-4 shadow-sm border-2 transition-all hover:shadow-md ${
                  selectedRoute?.route === route.route ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-left">{route.route}</div>
                    <div className="text-sm text-red-600 font-medium text-left">{route.type}</div>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                </div>
                <div className="text-sm text-gray-600 mb-2 text-left">{route.groups}</div>
                <div className="text-sm font-bold text-green-600 text-left">{route.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Available Buses ({filteredVehicles.length})</h3>
              <p className="text-gray-600 text-sm md:text-base">Perfect for groups of {passengerCount}+ people</p>
            </div>
            
            <div className="flex flex-col md:flex-row flex-wrap gap-3 w-full md:w-auto">
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
                <button
                  onClick={() => setMinSeats(20)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
                    minSeats === 20 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  20+ Seats
                </button>
                <button
                  onClick={() => setMinSeats(40)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
                    minSeats === 40 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  40+ Seats
                </button>
                <button
                  onClick={() => setShowACOnly(!showACOnly)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
                    showACOnly ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  AC Only
                </button>
              </div>
              
              <div className="flex gap-2">
                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
                >
                  <FunnelIcon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden md:inline">Filters</span>
                </button>
                
                {/* Sort Dropdown */}
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
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 md:mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Advanced Filters</h4>
                <button onClick={() => setShowFilters(false)}>
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Seats: {minSeats}
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={minSeats}
                    onChange={(e) => setMinSeats(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20 Seats</span>
                    <span>80 Seats</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Price per KM: ₹{((maxPrice / 100) * 165).toFixed(0)}
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹33</span>
                    <span>₹165</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => {
                    setMinSeats(20);
                    setMaxPrice(100);
                    setShowACOnly(true);
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

        {/* Buses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {currentVehicles.map((vehicle) => {
            const { total, kmToCharge, baseFare, gst } = calculateTotal(vehicle);
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
                {/* Bus Header with Image */}
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
                  
                  {/* Vehicle Info */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <StarIconSolid className="h-3 w-3 text-yellow-400" />
                      <span className="text-white text-sm font-semibold">{vehicle.rating}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs">{vehicle.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Bus Details */}
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
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Amenities:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.amenities.slice(0, 3).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <CheckCircleIcon className="h-3 w-3 text-red-500" />
                          <span className="text-xs text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="mb-4 bg-gray-50 rounded-lg p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Base Fare ({kmToCharge} km):</span>
                        <span className="font-medium">₹{formatPrice(baseFare)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Driver Allowance ({numberOfDays} days):</span>
                        <span className="font-medium">₹{formatPrice(numberOfDays * DRIVER_BATA_PER_DAY)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
                        <span className="font-medium">₹{formatPrice(gst)}</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span className="text-gray-900">Total Estimated:</span>
                          <span className="text-lg text-green-600">₹{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
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
            <div className="text-gray-600 text-sm md:text-base">
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} buses
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
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Why Choose Our Bus Service for Groups?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <UserGroupIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "Large Group Expertise",
                description: "Specialized in handling groups from 20 to 80 people with ease"
              },
              {
                icon: <ShieldCheckIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "Safety First",
                description: "GPS tracking, emergency exits, first aid, and experienced drivers"
              },
              {
                icon: <ClockIcon className="h-10 w-10 md:h-12 md:w-12" />,
                title: "Flexible Scheduling",
                description: "Customizable itineraries and 24/7 support for your group"
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

        {/* Group Booking CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 lg:p-12 text-white mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Need a Bus for Your Group?</h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">Get special discounts for groups of 30+ people</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold">10% OFF</div>
                <div className="text-base md:text-lg">For School & College Groups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold">15% OFF</div>
                <div className="text-base md:text-lg">For Corporate & Wedding Groups</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
                Call Group Coordinator
              </a>
              
              <button
                onClick={() => setShowGroupBooking(true)}
                className="inline-flex items-center justify-center gap-3 bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-900 transition-all shadow-lg"
              >
                <UserGroupIcon className="h-5 w-5 md:h-6 md:w-6" />
                Request Group Quote
              </button>
            </div>
            
            <p className="mt-6 text-sm md:text-base opacity-80">Free itinerary planning • Multiple bus options • Flexible payment</p>
          </div>
        </div>
      </div>

      {/* Quick Quote Modal - Same as cars page */}
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
                      // Allow only numbers
                      if (value === '' || /^\d+$/.test(value)) {
                        setQuoteDetails({...quoteDetails, passengers: value});
                      }
                    }}
                    placeholder="Enter number of passengers"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This vehicle can accommodate up to {quoteDetails.vehicle?.seats || 80} passengers
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
                      <span className="font-semibold text-gray-900">{quotePrice.kmToCharge} km</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">{quotePrice.days} {quotePrice.days === 1 ? 'Day' : 'Days'}</span>
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
                        {quoteDetails.passengers ? `₹${formatPrice(quotePrice.min)} - ₹${formatPrice(quotePrice.max)}` : 'Enter passenger count'}
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

      {/* Group Booking Modal */}
      {showGroupBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Request Group Quote</h3>
              <button onClick={() => setShowGroupBooking(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white">
                    <option>School/College Trip</option>
                    <option>Corporate Event</option>
                    <option>Pilgrimage Tour</option>
                    <option>Wedding</option>
                    <option>Family Function</option>
                    <option>Tour Group</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={passengerCount}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === '' || /^\d+$/.test(value)) {
                          const numValue = parseInt(value);
                          if (!isNaN(numValue) && numValue >= 1) {
                            setPassengerCount(numValue);
                          }
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                      min="20"
                      max="200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration (Days)</label>
                    <input
                      type="number"
                      defaultValue="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                      min="1"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Any special needs, amenities required, or specific requests..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Group Size:</span>
                      <span className="font-semibold text-gray-900">{passengerCount} people</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 font-medium">Estimated Cost Range:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₹65,000 - ₹1,50,000</div>
                        <div className="text-sm text-gray-600">Final quote in 2 hours</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800">
                    Get Special Group Quote
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Our group coordinator will call you within 30 minutes
                  </p>
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

            <div className="p-6">
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
                <h4 className="font-semibold text-gray-900 mb-2">Bus Details</h4>
                <p className="text-sm text-gray-600 mb-3">
                  These are actual photos of our {selectedVehicleName} fleet. All buses are maintained to the highest standards and are regularly serviced.
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