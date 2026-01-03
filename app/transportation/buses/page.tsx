

// // components/transportation/buses/page.tsx

// 'use client';
// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import {
//   MapPinIcon,
//   ArrowRightIcon,
//   SparklesIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   InformationCircleIcon,
//   FunnelIcon,
//   XMarkIcon,
//   UserGroupIcon,
//   ShieldCheckIcon,
//   ClockIcon,
//   PhoneIcon,
//   ChatBubbleLeftRightIcon,
//   CalendarIcon,
//   ArrowPathIcon,
//   PhotoIcon,
//   CalculatorIcon,
//   MagnifyingGlassIcon
// } from '@heroicons/react/24/outline';
// import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
// import Image from 'next/image';

// // Combine all places into a single array
// const allPlaces = [
//   // A
//   'Adilabad', 'Agumbe', 'Aihole', 'Aland', 'Alappuzha', 'Ankola', 'Anekal', 'Araku Valley', 'Arani', 'Attingal',
//   // B
//   'Badami',  'Bangalore','Bagalkot', 'Ballari', 'Banavasi', 'Bandipur', 'Bantwal', 'Belagavi', 'Belur', 'Bekal', 'Bhadravati', 'Bhadrachalam', 'Bylakuppe',
//   // C
//   'Chalakudy', 'Chamarajanagar', 'Chandravalli', 'Channapatna', 'Chikmagalur', 'Chitradurga', 'Chittoor', 'Coorg', 'Coonoor', 'Cuddalore',
//   // D
//   'Dandeli', 'Devarayanadurga', 'Devikulam', 'Dhanushkodi', 'Dharwad', 'Dharmavaram', 'Dindigul', 'Doddaballapur', 'Dudhsagar',
//   // E
//   'Elagiri', 'Eravikulam', 'Erode',
//   // F
//   'Falaknuma Palace',
//   // G
//   'Gadag', 'Gandikota', 'Gangavathi', 'Gajendragad', 'Gokarna', 'Gudalur', 'Gudavi', 'Gubbi', 'Guntur', 'Guruvayur',
//   // H
//   'Halebidu', 'Hampi', 'Hassan', 'Haveri', 'Honnavar', 'Horanadu', 'Horsley Hills', 'Hosur', 'Hubballi',
//   // I
//   'Idukki', 'Ilkal', 'Irinjalakuda',
//   // J
//   'Jadcherla', 'Jamkhandi', 'Jatayu Earth Center', 'Jewargi', 'Jhari Falls', 'Jog Falls', 'Jogimatti', 'Jolarpettai',
//   // K
//   'Kalaburagi', 'Kalasa', 'Kanakapura', 'Kanyakumari', 'Karur', 'Karkala', 'Karwar', 'Kemmannugundi', 'Kochi', 'Kodachadri', 'Kodaikanal', 'Kolar', 'Koppal', 'Kottayam', 'Kudremukh', 'Kundapura',
//   // L
//   'Lakkidi', 'Lalgudi', 'Lakshmeshwar', 'Latur', 'Lepakshi', 'Lingsugur',
//   // M
//   'Madikeri', 'Mahabalipuram', 'Malappuram', 'Mandagadde', 'Mandya', 'Manipal', 'Maravanthe', 'Mayiladuthurai', 'Moodbidri', 'Mudigere', 'Mulbagal', 'Munnar', 'Murudeshwar', 'Mysuru',
//   // N
//   'Nagarhole', 'Nagercoil', 'Nandi Hills', 'Nanjangud', 'Narasaraopet', 'Navalgund', 'Nilambur',
//   // O
//   'Om Beach', 'Ongole', 'Ooty',
//   // P
//   'Panchalingeshwara', 'Pandavapura', 'Pattadakal', 'Pavagada', 'Perundurai', 'Pollachi', 'Proddatur', 'Puducherry', 'Puttur', 'Puttaparthi',
//   // R
//   'Raichur', 'Raichur Fort', 'Ramanagara', 'Rameswaram', 'Ranipet', 'Ranganathittu', 'Ron', 'Rippanpet',
//   // S
//   'Sagara', 'Sakleshpur', 'Sankarankovil', 'Sattur', 'Sedam', 'Shorapur', 'Siddipet', 'Sirsi', 'Sivakasi', 'Somnathpur', 'Srisailam', 'Sringeri', 'St. Mary\'s Island', 'Surathkal',
//   // T
//   'Talakadu', 'Tannirbhavi', 'Tarikere', 'Tenkasi', 'Thanjavur', 'Tirunelveli', 'Tirupati', 'Tiruvannamalai', 'Tiptur', 'Tumakuru',
//   // U
//   'Udupi', 'Ulundurpet', 'Uppala',
//   // V
//   'Valparai', 'Vanadurga', 'Varkala', 'Vellore', 'Vidhana Soudha', 'Vijayapura', 'Virajpet', 'Virudhunagar', 'Vizianagaram',
//   // W
//   'Wadakkanchery', 'Wayanad',
//   // Y
//   'Yana Caves', 'Yelandur', 'Yellapur', 'Yelahanka', 'Yercaud'
// ].sort();

// // Bus categories and types
// const busTypes = [
//   { id: 'minibus', name: 'Mini Bus', seats: '12-27', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271104/WhatsApp_Image_2026-01-01_at_18.07.21_zq4kdj.jpg' },
//   { id: 'standard', name: 'Standard Bus', seats: '28-35', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'luxury', name: 'Luxury Bus', seats: '36-45',  image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'sleeper', name: 'Sleeper Bus', seats: '20-45',  image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
//   { id: 'volvo', name: 'Volvo Bus', seats: '40-53', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
// ];




// // Complete buses data with enhanced details
// const vehicles = [
//   {
//     id: 1,
//     name: 'AC Mini Bus ',
//     seats: 21,
//     perKm: 30,
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
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271104/WhatsApp_Image_2026-01-01_at_18.07.21_zq4kdj.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271099/WhatsApp_Image_2026-01-01_at_18.07.20_swijmv.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271100/WhatsApp_Image_2026-01-01_at_18.07.21_1_benejo.jpg'
//     ]
//   },
//   {
//     id: 2,
//     name: 'Luxury Sleeper ',
//     seats: 35,
//     perKm: 45,
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
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271097/WhatsApp_Image_2026-01-01_at_18.07.20_1_ha9vxx.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_3_qcbdkt.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271093/WhatsApp_Image_2026-01-01_at_18.07.19_1_of4znx.jpg'
//     ]
//   },
//   {
//     id: 3,
//     name: 'Volvo Multi-Axle ',
//     seats: 25,
//     perKm: 40,
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
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271756/multi_1_o7uex6.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271749/multi_2_etntfp.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271749/multi_3_g4ps82.jpg'
//     ]
//   },
//   {
//     id: 4,
//     name: 'Bus',
//     seats: 50,
//     perKm: 50,
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
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg'
//     ]
//   },
//   {
//     id: 5,
//     name: 'Standard Bus ',
//     seats: 55,
//     perKm: 50,
//     perKmWithTax: 70,
//     category: 'Standard',
//     ac: false,
//     rating: 4.2,
//     trips: 890,
//     features: ['AC','Spacious', 'Reliable', 'Large Windows', 'Storage'],
//     amenities: ['Water', 'Basic First Aid', 'Driver Assistant'],
//     type: 'standard',
//     badge: 'Economical',
//     fuel: 'Diesel',
//     year: 2021,
//     imageColor: 'red',
//     images: [
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg'
//     ]
//   },
//   {
//     id: 8,
//     name: 'VIP Coach ',
//     seats: 21,
//     perKm: 30,
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
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767272037/vip_1_clz7mk.jpg',
//       'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767272035/vip_2_ninlag.jpg',
//     ]
//   }
// ];

// // FIXED Autocomplete component - Fully responsive
// interface AutocompleteProps {
//   value: string;
//   onChange: (value: string) => void;
//   placeholder: string;
//   onSelect: (place: string) => void;
//   suggestions: string[];
//   showSuggestions: boolean;
//   onFocus: () => void;
//   onBlur: () => void;
// }

// const Autocomplete: React.FC<AutocompleteProps> = ({
//   value,
//   onChange,
//   placeholder,
//   onSelect,
//   suggestions,
//   showSuggestions,
//   onFocus,
//   onBlur
// }) => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const suggestionsRef = useRef<HTMLDivElement>(null);
//   const [isMouseOverSuggestions, setIsMouseOverSuggestions] = useState(false);

//   const handleSelect = (place: string) => {
//     onSelect(place);
//     onChange(place);
//     // Focus back on input after selection
//     setTimeout(() => {
//       inputRef.current?.focus();
//     }, 0);
//   };

//   const handleBlur = () => {
//     setTimeout(() => {
//       if (!isMouseOverSuggestions) {
//         onBlur();
//       }
//     }, 150);
//   };

//   return (
//     <div className="relative w-full">
//       <div className="relative">
//         <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 z-10" />
//         <input
//           ref={inputRef}
//           type="text"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           onFocus={onFocus}
//           onBlur={handleBlur}
//           placeholder={placeholder}
//           className="w-full pl-9 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white relative z-20 text-sm sm:text-base"
//           autoComplete="off"
//         />
//         {value && (
//           <button
//             onClick={() => {
//               onChange('');
//               inputRef.current?.focus();
//             }}
//             className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-30"
//             type="button"
//           >
//             <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//           </button>
//         )}
//       </div>
     
//       {showSuggestions && suggestions.length > 0 && (
//         <div
//           ref={suggestionsRef}
//           className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 sm:max-h-60 overflow-y-auto z-50"
//           onMouseEnter={() => setIsMouseOverSuggestions(true)}
//           onMouseLeave={() => setIsMouseOverSuggestions(false)}
//         >
//           {suggestions.map((place, index) => (
//             <button
//               key={index}
//               onClick={() => handleSelect(place)}
//               onMouseDown={(e) => e.preventDefault()}
// className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
//               type="button"
//             >
//               <MagnifyingGlassIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
//               <span className="truncate">{place}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // CheckCircleIcon component
// const CheckCircleIcon = ({ className }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

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
//   const [showQuickQuote, setShowQuickQuote] = useState(false);
//   const [showPhotos, setShowPhotos] = useState(false);
//   const [selectedVehiclePhotos, setSelectedVehiclePhotos] = useState<string[]>([]);
//   const [selectedVehicleName, setSelectedVehicleName] = useState('');
//   const [passengerCount, setPassengerCount] = useState(40);
//   const [hoveredVehicle, setHoveredVehicle] = useState<number | null>(null);
//   const [isCalculating, setIsCalculating] = useState(false);
//   const [manualMode, setManualMode] = useState(true);
//   const [estimatedDuration, setEstimatedDuration] = useState<string>('');
//   const [showFromSuggestions, setShowFromSuggestions] = useState(false);
//   const [showToSuggestions, setShowToSuggestions] = useState(false);
//   const [quoteDetails, setQuoteDetails] = useState({
//     passengers: '',
//     days: 0,
//     date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//     vehicle: null as any
//   });
//   const [exactQuote, setExactQuote] = useState<{
//     show: boolean;
//     price: number;
//     breakdown: {
//       baseFare: number;
//       driverAllowance: number;
//       gst: number;
//       total: number;
//     };
//     details: {
//       actualDistance: number;
//       chargedDistance: number;
//       days: number;
//       passengers: number;
//       vehicle: any;
//     };
//   } | null>(null);

//   const ITEMS_PER_PAGE = 6;
//   const MINIMUM_KM_PER_DAY = 300;
//   const DRIVER_BATA_PER_DAY = 1500;
//   const GST_PERCENTAGE = 18;

//   const formatPrice = (price: number) => price.toLocaleString('en-IN');

//   const getGradientColor = (color: string) => {
//     const gradients: Record<string, string> = {
//       red: 'from-red-500 to-red-700',
//     };
//     return gradients[color] || 'from-red-500 to-red-700';
//   };

//   // Filter places based on input
//   const filterPlaces = (input: string) => {
//     if (!input.trim()) return allPlaces.slice(0, 8);
//     const searchTerm = input.toLowerCase();
//     return allPlaces
//       .filter(place => place.toLowerCase().includes(searchTerm))
//       .slice(0, 8);
//   };

//   const fromSuggestions = filterPlaces(from);
//   const toSuggestions = filterPlaces(to);

//   // Calculate estimated duration based on distance
//   const calculateEstimatedDuration = (distance: number) => {
//     const averageSpeed = 60;
//     const hours = Math.round(distance / averageSpeed);
   
//     if (hours < 1) {
//       return 'Less than 1 hour';
//     } else if (hours === 1) {
//       return '1 hour';
//     } else if (hours < 24) {
//       return `${hours} hours`;
//     } else {
//       const days = Math.floor(hours / 24);
//       const remainingHours = hours % 24;
//       if (remainingHours === 0) {
//         return `${days} day${days > 1 ? 's' : ''}`;
//       } else {
//         return `${days} day${days > 1 ? 's' : ''} ${remainingHours} hour${remainingHours > 1 ? 's' : ''}`;
//       }
//     }
//   };

//   // Manual distance calculation
//   const calculateDistanceManually = () => {
//     if (!from || !to || from.trim() === '' || to.trim() === '') {
//       alert('Please enter both pickup and destination locations');
//       return;
//     }
   
//     setIsCalculating(true);
//     setLoading(true);
   
//     setTimeout(() => {
//       if (km && !isNaN(parseFloat(km)) && parseFloat(km) > 0) {
//         const distanceValue = parseFloat(km);
//         setDistance(distanceValue);
//         const estimatedTime = calculateEstimatedDuration(distanceValue);
//         setDuration(estimatedTime);
//         setEstimatedDuration(estimatedTime);
//         setRouteDetails([from, to]);
//         setManualMode(true);
//       } else {
//         alert('Please enter a valid distance in kilometers');
//         setDistance(null);
//         setDuration('');
//         setRouteDetails([]);
//       }
//       setLoading(false);
//       setIsCalculating(false);
//     }, 500);
//   };

//   // Handle manual distance update
//   const handleManualDistanceUpdate = () => {
//     if (km && !isNaN(parseFloat(km)) && parseFloat(km) > 0) {
//       const distanceValue = parseFloat(km);
//       setDistance(distanceValue);
//       const estimatedTime = calculateEstimatedDuration(distanceValue);
//       setDuration(estimatedTime);
//       setEstimatedDuration(estimatedTime);
//       setManualMode(true);
//     }
//   };

//   // Handle popular route selection
//   const handleRouteSelect = (route: any) => {
//     setFrom(route.from);
//     setTo(route.to);
//     setSelectedRoute(route);
//     setKm(route.distance.toString());
//     setDistance(route.distance);
//     setDuration(route.duration);
//     setRouteDetails([route.from, route.to]);
//     setManualMode(false);
//     setShowFromSuggestions(false);
//     setShowToSuggestions(false);
//   };

//   // Handle route suggestion selection
//   const handleRouteSuggestion = (suggestion: any) => {
//     const [fromCity, toCity] = suggestion.name.split(' to ');
//     setFrom(fromCity);
//     setTo(toCity);
//     setKm(suggestion.distance.toString());
//     setDistance(suggestion.distance);
//     const estimatedTime = calculateEstimatedDuration(suggestion.distance);
//     setDuration(estimatedTime);
//     setEstimatedDuration(estimatedTime);
//     setRouteDetails([fromCity, toCity]);
//     setManualMode(true);
//     setShowFromSuggestions(false);
//     setShowToSuggestions(false);
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
//   const finalKm = distance ? Number(km || distance) : 0;
//   const numberOfDays = distance ? Math.ceil(finalKm / MINIMUM_KM_PER_DAY) : 0;

//   const handleViewPhotos = (vehicle: any) => {
//     setSelectedVehiclePhotos(vehicle.images);
//     setSelectedVehicleName(vehicle.name);
//     setShowPhotos(true);
//   };

//   // Calculate total with minimum km per day logic
//   const calculateTotal = (vehicle: any, customDays?: number, customPassengers?: number) => {
//     const days = customDays || numberOfDays || 1;
//     const totalKmToCharge = days * MINIMUM_KM_PER_DAY;
//     const actualKm = finalKm;
//     const kmToCharge = Math.max(actualKm, totalKmToCharge);
   
//     const baseFare = vehicle.perKmWithTax * kmToCharge;
//     const gst = (baseFare * GST_PERCENTAGE) / 100;
//     const total = baseFare + (days * DRIVER_BATA_PER_DAY) + gst;
   
//     return {
//       baseFare,
//       gst,
//       total,
//       actualKm,
//       kmToCharge,
//       days,
//       minimumApplied: kmToCharge > actualKm
//     };
//   };

//   const handleQuickQuote = (vehicle: any) => {
//     setShowQuickQuote(true);
//     setQuoteDetails({
//       passengers: passengerCount.toString(),
//       days: numberOfDays || 1,
//       date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//       vehicle: vehicle
//     });
//   };

//  const calculateQuotePrice = () => {
//   if (!quoteDetails.vehicle) return { total: 0, days: 0, actualKm: 0, kmToCharge: 0, baseFare: 0, gst: 0, minimumApplied: false };
  
//   // Use 1 day as minimum if 0 is entered
//   const days = quoteDetails.days || 1;
//   const { total, actualKm, kmToCharge, baseFare, gst, minimumApplied } = calculateTotal(
//     quoteDetails.vehicle,
//     days,
//     quoteDetails.passengers ? parseInt(quoteDetails.passengers) : undefined
//   );
  
//   return { total, days, actualKm, kmToCharge, baseFare, gst, minimumApplied };
// };

//   const quotePrice = calculateQuotePrice();

//   const handleExactQuote = () => {
//     if (!quoteDetails.vehicle || !quoteDetails.passengers) {
//       alert('Please enter all required details');
//       return;
//     }
//     const { total, days, actualKm, kmToCharge, baseFare, gst, minimumApplied } = calculateQuotePrice();
   
//     setExactQuote({
//       show: true,
//       price: total,
//       breakdown: {
//         baseFare,
//         driverAllowance: days * DRIVER_BATA_PER_DAY,
//         gst,
//         total
//       },
//       details: {
//         actualDistance: actualKm,
//         chargedDistance: kmToCharge,
//         days,
//         passengers: parseInt(quoteDetails.passengers),
//         vehicle: quoteDetails.vehicle
//       }
//     });
//   };

//   const recommendedBuses = useMemo(() => {
//     return vehicles
//       .filter(v => v.seats >= passengerCount)
//       .sort((a, b) => a.perKmWithTax - b.perKmWithTax)
//       .slice(0, 3);
//   }, [passengerCount, vehicles]);

//   // Close modals when pressing Escape key
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         if (showQuickQuote) setShowQuickQuote(false);
//         if (exactQuote?.show) setExactQuote(null);
//         if (showGroupBooking) setShowGroupBooking(false);
//         if (showPhotos) setShowPhotos(false);
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [showQuickQuote, exactQuote, showGroupBooking, showPhotos]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
//         </div>
       
//         <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 md:py-12 lg:py-16">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
//               <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
//               <span className="text-xs sm:text-sm font-semibold text-white">GROUP TRAVEL SPECIALISTS</span>
//             </div>
           
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 px-2">
//               Premium <span className="text-yellow-300">Buses</span> for Group Travel
//             </h1>
           
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-100 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
//               Perfect for pilgrimages, school trips, corporate events, weddings, and large group tours across India
//             </p>
           
//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
//               {[
//                 { label: 'Bus Fleet', value: '100+' },
//                 { label: 'Group Trips', value: '5K+' },
//                 { label: 'Cities', value: '200+' },
//                 { label: 'Happy Groups', value: '2K+' },
//               ].map((stat, idx) => (
//                 <div key={idx} className="bg-white/10 backdrop-blur-sm rounded sm:rounded-lg p-2 sm:p-3">
//                   <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-red-200">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
//         {/* Group Booking Calculator */}
//         <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl mb-4 sm:mb-6 overflow-hidden">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 sm:p-4">
//             <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1 sm:gap-2">
//               <UserGroupIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//               <span className="text-sm sm:text-base">Group Travel Calculator</span>
//             </h2>
//             <p className="text-red-100 text-xs sm:text-sm mt-1">Enter your route and distance manually for accurate pricing</p>
//           </div>
         
//           <div className="p-3 sm:p-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Group Size</label>
//                 <div className="relative">
//                   <input
//                     type="range"
//                     min="20"
//                     max="80"
//                     value={passengerCount}
//                     onChange={(e) => setPassengerCount(parseInt(e.target.value))}
//                     className="w-full accent-red-600"
//                   />
//                   <div className="text-center mt-1">
//                     <span className="text-lg sm:text-xl font-bold text-red-600">{passengerCount}</span>
//                     <span className="text-gray-600 text-xs ml-1">passengers</span>
//                   </div>
//                 </div>
//               </div>
             
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
//                 <Autocomplete
//                   value={from}
//                   onChange={setFrom}
//                   placeholder="Enter city"
//                   onSelect={(place) => {
//                     setFrom(place);
//                     setShowFromSuggestions(false);
//                   }}
//                   suggestions={fromSuggestions}
//                   showSuggestions={showFromSuggestions}
//                   onFocus={() => setShowFromSuggestions(true)}
//                   onBlur={() => setShowFromSuggestions(false)}
//                 />
//               </div>
             
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Destination</label>
//                 <Autocomplete
//                   value={to}
//                   onChange={setTo}
//                   placeholder="Destination city"
//                   onSelect={(place) => {
//                     setTo(place);
//                     setShowToSuggestions(false);
//                   }}
//                   suggestions={toSuggestions}
//                   showSuggestions={showToSuggestions}
//                   onFocus={() => setShowToSuggestions(true)}
//                   onBlur={() => setShowToSuggestions(false)}
//                 />
//               </div>
             
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Distance (KM)</label>
//                 <div className="flex gap-1">
//                   <input
//                     type="number"
//                     value={km}
//                     onChange={(e) => setKm(e.target.value)}
//                     onBlur={handleManualDistanceUpdate}
//                     placeholder="Enter distance"
//                     className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                     min="1"
//                     step="1"
//                   />
//                   <button
//                     onClick={handleManualDistanceUpdate}
//                     className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex-shrink-0"
//                     title="Update distance"
//                   >
//                     <CalculatorIcon className="h-4 w-4" />
//                   </button>
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">Enter distance in kilometers</p>
//               </div>
//             </div>
           
//             {/* Calculate Button */}
//             <div className="mt-3 sm:mt-4 text-center">
//               <button
//                 onClick={calculateDistanceManually}
//                 disabled={!from || !to || !km || isCalculating}
//                 className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full sm:w-auto text-sm sm:text-base"
//               >
//                 {isCalculating ? (
//                   <>
//                     <ArrowPathIcon className="h-4 w-4 animate-spin" />
//                     <span>Calculating...</span>
//                   </>
//                 ) : (
//                   <>
//                     <MapPinIcon className="h-4 w-4" />
//                     <span>Calculate Price</span>
//                   </>
//                 )}
//               </button>
//             </div>
           
//             {loading && (
//               <div className="mt-3 sm:mt-4 text-center">
//                 <div className="inline-flex items-center gap-2">
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse"></div>
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
//                   <span className="text-gray-600 text-xs sm:text-sm">Calculating price...</span>
//                 </div>
//               </div>
//             )}
           
//             {distance && !loading && (
//               <div className="mt-3 sm:mt-4 bg-gradient-to-r from-red-50 to-red-50 rounded-lg p-2 sm:p-3 border border-red-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
//                   <div className="flex-1">
//                     <div className="text-xs text-gray-600">Route Information</div>
//                     <div className="text-base sm:text-lg font-bold text-gray-900 truncate">{from} → {to}</div>
//                     <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-0.5">
//                       <span className="text-red-600 font-semibold text-xs sm:text-sm">{distance} KM</span>
//                       <span className="text-gray-400">•</span>
//                       <span className="text-gray-600 text-xs sm:text-sm">{duration}</span>
//                       <span className="text-gray-400">•</span>
//                       <span className="text-red-600 font-medium text-xs sm:text-sm">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
//                     </div>
//                   </div>
//                   <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-0">
//                     <button
//                       onClick={calculateDistanceManually}
//                       className="px-2 py-1 sm:px-3 sm:py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
//                     >
//                       Recalculate
//                     </button>
//                     {manualMode && (
//                       <span className="px-2 py-1 sm:px-2 sm:py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
//                         Manual Distance
//                       </span>
//                     )}
//                   </div>
//                 </div>
               
//                 <div className="text-xs text-gray-600 mt-1 truncate">
//                   <span className="font-medium">Route:</span> {routeDetails.join(' → ')}
//                 </div>
//               </div>
//             )}
           
//             {recommendedBuses.length > 0 && distance && (
//               <div className="mt-3 sm:mt-4">
//                 <h4 className="font-semibold text-gray-900 text-sm mb-1 sm:mb-2">Recommended for your group:</h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
//                   {recommendedBuses.map((bus) => {
//                     const { total } = calculateTotal(bus);
//                     return (
//                       <div key={bus.id} className="bg-gradient-to-r from-red-50 to-red-50 rounded-lg p-2 sm:p-3 border border-red-200">
//                         <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
//                           <div className="flex-1">
//                             <div className="font-bold text-gray-900 text-sm truncate">{bus.name}</div>
//                             <div className="text-gray-600 text-xs">{bus.seats} seats • {bus.ac ? 'AC' : 'Non-AC'}</div>
//                           </div>
//                           <div className="text-right mt-0.5 sm:mt-0">
//                             <div className="text-sm sm:text-base font-bold text-red-600">₹{formatPrice(total)}</div>
//                             <div className="text-xs text-gray-500">estimated</div>
//                           </div>
//                         </div>
//                         <div className="mt-1 flex items-center gap-1">
//                           <StarIconSolid className="h-3 w-3 text-amber-500" />
//                           <span className="text-xs font-medium">{bus.rating}</span>
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
//         <div className="mb-4 sm:mb-6">
//           <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Select Bus Type</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
//             {busTypes.map((type) => (
//               <button
//                 key={type.id}
//                 onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
//                 className={`p-2 sm:p-3 rounded border transition-all ${
//                   selectedType === type.id
//                     ? 'border-red-500 bg-red-50'
//                     : 'border-gray-200 bg-white hover:border-red-200'
//                 }`}
//               >

//                 <div className="font-medium text-gray-900 text-xs sm:text-sm">{type.name}</div>
//                 <div className="text-gray-600 text-xs">{type.seats} seats</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Controls Section */}
//         <div className="bg-white rounded-lg shadow p-2 sm:p-3 md:p-4 mb-4 sm:mb-6">
//           <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3">
//             <div>
//               <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Available Buses ({filteredVehicles.length})</h3>
//               <p className="text-gray-600 text-xs sm:text-sm">Perfect for groups of {passengerCount}+ people</p>
//             </div>
           
//             <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
//               {/* Quick Filters */}
//               <div className="flex flex-wrap gap-1 overflow-x-auto pb-1 sm:pb-0">
//                 <button
//                   onClick={() => setMinSeats(20)}
//                   className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
//                     minSeats === 20 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   20+ Seats
//                 </button>
//                 <button
//                   onClick={() => setMinSeats(40)}
//                   className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
//                     minSeats === 40 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   40+ Seats
//                 </button>
//                 <button
//                   onClick={() => setShowACOnly(!showACOnly)}
//                   className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
//                     showACOnly ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   AC Only
//                 </button>
//               </div>
             
//               <div className="flex gap-1 sm:gap-2">
//                 {/* Filter Button */}
//                 <button
//                   onClick={() => setShowFilters(!showFilters)}
//                   className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors text-xs sm:text-sm"
//                 >
//                   <FunnelIcon className="h-3 w-3 sm:h-4 sm:w-4" />
//                   <span className="hidden sm:inline">Filters</span>
//                 </button>
               
//                 {/* Sort Dropdown */}
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value as any)}
//                   className="px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 text-xs sm:text-sm"
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
//             <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gray-50 rounded border border-gray-200">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Advanced Filters</h4>
//                 <button onClick={() => setShowFilters(false)}>
//                   <XMarkIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                 </button>
//               </div>
             
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                 <div>
//                   <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
//                   <div className="flex justify-between text-xs text-gray-500 mt-0.5">
//                     <span>20 Seats</span>
//                     <span>80 Seats</span>
//                   </div>
//                 </div>
               
//                 <div>
//                   <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
//                   <div className="flex justify-between text-xs text-gray-500 mt-0.5">
//                     <span>₹33</span>
//                     <span>₹165</span>
//                   </div>
//                 </div>
//               </div>
             
//               <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row justify-end gap-1 sm:gap-2">
//                 <button
//                   onClick={() => {
//                     setMinSeats(20);
//                     setMaxPrice(100);
//                     setShowACOnly(true);
//                   }}
//                   className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
//                 >
//                   Reset Filters
//                 </button>
//                 <button
//                   onClick={() => setShowFilters(false)}
//                   className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Buses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
//           {currentVehicles.map((vehicle) => {
//             const { total, kmToCharge, baseFare, gst, actualKm, minimumApplied } = distance ? calculateTotal(vehicle) : { total: 0, kmToCharge: 0, baseFare: 0, gst: 0, actualKm: 0, minimumApplied: false };
//             const gradient = getGradientColor(vehicle.imageColor);
//             const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
//             const vehicleImage = vehicle.images?.[currentImageIndex] || 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg';
           
//             return (
//               <div
//                 key={vehicle.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
//                 onMouseEnter={() => setHoveredVehicle(vehicle.id)}
//                 onMouseLeave={() => setHoveredVehicle(null)}
//               >
//                 {/* Bus Header with Image */}
//                 <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
//                   <div className="absolute inset-0">
//                     <Image
//                       src={vehicleImage}
//                       alt={vehicle.name}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                       priority={vehicle.id <= 3}
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30`} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                   </div>
                 
//                   {/* Image Gallery Indicator */}
//                   <div className="absolute top-2 left-2 flex gap-0.5">
//                     {vehicle.images?.map((_, idx) => (
//                       <div
//                         key={idx}
//                         className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
//                       />
//                     ))}
//                   </div>
                 
//                   {/* Badge */}
//                   {vehicle.badge && (
//                     <div className="absolute top-2 right-2">
//                       <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
//                         {vehicle.badge}
//                       </span>
//                     </div>
//                   )}
                 
//                   {/* Seats Overlay */}
//                   <div className="absolute bottom-2 left-2">
//                     <div className="bg-black/60 backdrop-blur-sm rounded px-1.5 py-1">
//                       <div className="text-lg sm:text-xl font-bold text-white">{vehicle.seats}</div>
//                       <div className="text-xs text-white/80">Seats</div>
//                     </div>
//                   </div>
                 
//                   {/* Vehicle Info */}
//                   <div className="absolute bottom-2 right-2 flex items-center gap-1">
//                     <div className="flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
//                       <StarIconSolid className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-yellow-400" />
//                       <span className="text-white text-xs font-semibold">{vehicle.rating}</span>
//                     </div>
//                     <div className="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
//                       <span className="text-white text-xs">{vehicle.year}</span>
//                     </div>
//                   </div>
//                 </div>
               
//                 {/* Bus Details */}
//                 <div className="p-2 sm:p-3 md:p-4">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-1 sm:mb-2">
//                     <div className="flex-1">
//                       <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors truncate">
//                         {vehicle.name}
//                       </h3>
//                       <div className="flex flex-wrap items-center gap-1 mt-0.5">
//                         <span className="px-1 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
//                           {vehicle.category}
//                         </span>
//                         {vehicle.ac && (
//                           <span className="flex items-center gap-0.5 px-1 py-0.5 bg-red-50 text-red-700 text-xs font-medium rounded">
//                             <span className="text-xs">❄️</span>
//                             AC
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div className="text-left sm:text-right mt-0.5 sm:mt-0">
//                       <div className="text-base sm:text-lg md:text-xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
//                       <div className="text-xs text-gray-500">per km</div>
//                     </div>
//                   </div>
                 
//                   {/* Features */}
//                   <div className="mb-2 sm:mb-3">
//                     <div className="text-xs font-medium text-gray-700 mb-0.5">Features:</div>
//                     <div className="flex flex-wrap gap-1">
//                       {vehicle.features.slice(0, 3).map((feature, idx) => (
//                         <span key={idx} className="px-1.5 py-0.5 bg-red-50 text-red-700 text-xs rounded">
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                 
//                   {/* Amenities */}
//                   <div className="mb-2 sm:mb-3">
//                     <div className="text-xs font-medium text-gray-700 mb-0.5">Amenities:</div>
//                     <div className="flex flex-wrap gap-1">
//                       {vehicle.amenities.slice(0, 2).map((amenity, idx) => (
//                         <div key={idx} className="flex items-center gap-0.5">
//                           <CheckCircleIcon className="h-2.5 w-2.5 text-red-500" />
//                           <span className="text-xs text-gray-600">{amenity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                 
//                   {/* Price Breakdown */}
//                   <div className="mb-2 sm:mb-3 bg-gray-50 rounded p-1.5 sm:p-2">
//                     <div className="space-y-1">
//                       {distance ? (
//                         <>
//                           <div className="flex justify-between text-xs">
//                             <span className="text-gray-600">Distance:</span>
//                             <span className="font-medium text-gray-900">{actualKm} km</span>
//                           </div>
//                           {minimumApplied && (
//                             <div className="flex justify-between text-xs">
//                               <span className="text-gray-600">Min KM Charge:</span>
//                               <span className="font-medium text-amber-600">{kmToCharge} km</span>
//                             </div>
//                           )}
//                           <div className="flex justify-between text-xs">
//                             <span className="text-gray-600">Base Fare:</span>
//                             <span className="font-medium">₹{formatPrice(baseFare)}</span>
//                           </div>
//                           <div className="flex justify-between text-xs">
//                             <span className="text-gray-600">Driver Allowance:</span>
//                             <span className="font-medium">₹{formatPrice(numberOfDays * DRIVER_BATA_PER_DAY)}</span>
//                           </div>
//                           <div className="flex justify-between text-xs">
//                             <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
//                             <span className="font-medium">₹{formatPrice(gst)}</span>
//                           </div>
//                           <div className="border-t pt-1 mt-1">
//                             <div className="flex justify-between font-bold">
//                               <span className="text-gray-900 text-sm">Total Estimated:</span>
//                               <span className="text-base text-green-600">₹{formatPrice(total)}</span>
//                             </div>
//                             {minimumApplied && (
//                               <div className="text-xs text-amber-600 mt-0.5">
//                                 *Minimum {MINIMUM_KM_PER_DAY} km per day
//                               </div>
//                             )}
//                           </div>
//                         </>
//                       ) : (
//                         <div className="text-center py-1.5">
//                           <div className="text-sm font-bold text-red-600 mb-0.5">Enter Distance</div>
//                           <p className="text-xs text-gray-600">Enter distance in KM to see price estimate</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
                 
//                   {/* Action Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-1.5">
//                     <button
//                       onClick={() => handleQuickQuote(vehicle)}
//                       className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 sm:py-2 rounded font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm"
//                     >
//                       Get Quote
//                     </button>
//                     <button
//                       onClick={() => handleViewPhotos(vehicle)}
//                       className="px-2 sm:px-3 py-1.5 sm:py-2 border border-red-600 text-red-600 rounded font-semibold hover:bg-red-50 transition-colors text-xs sm:text-sm flex items-center justify-center gap-1"
//                     >
//                       <PhotoIcon className="h-3 w-3" />
//                       <span>View Photos</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//             <div className="text-gray-600 text-xs sm:text-sm">
//               Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} buses
//             </div>
           
//             <div className="flex items-center gap-0.5 sm:gap-1">
//               <button
//                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="p-1 sm:p-1.5 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 <ChevronLeftIcon className="h-3 w-3 sm:h-4 sm:w-4" />
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
//                     className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-medium text-xs ${
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
//                 className="p-1 sm:p-1.5 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Features Section */}
//         <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-lg p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 text-white">
//           <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-3 sm:mb-4">Why Choose Our Bus Service for Groups?</h3>
         
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
//             {[
//               {
//                 icon: <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
//                 title: "Large Group Expertise",
//                 description: "Specialized in handling groups from 20 to 80 people with ease"
//               },
//               {
//                 icon: <ShieldCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
//                 title: "Safety First",
//                 description: "GPS tracking, emergency exits, first aid, and experienced drivers"
//               },
//               {
//                 icon: <ClockIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
//                 title: "Flexible Scheduling",
//                 description: "Customizable itineraries and 24/7 support for your group"
//               },
//             ].map((feature, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded sm:rounded-lg mb-1 sm:mb-2">
//                   {feature.icon}
//                 </div>
//                 <h4 className="text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1">{feature.title}</h4>
//                 <p className="text-red-200 text-xs sm:text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Group Booking CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3 sm:p-4 md:p-6 text-white mb-4 sm:mb-6">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Need a Bus for Your Group?</h3>
//             <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90">Get special discounts for groups of 30+ people</p>
           
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
//               <div className="bg-white/10 backdrop-blur-sm rounded p-2 sm:p-3">
//                 <div className="text-lg sm:text-xl md:text-2xl font-bold">10% OFF</div>
//                 <div className="text-xs sm:text-sm">For School & College Groups</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm rounded p-2 sm:p-3">
//                 <div className="text-lg sm:text-xl md:text-2xl font-bold">15% OFF</div>
//                 <div className="text-xs sm:text-sm">For Corporate & Wedding Groups</div>
//               </div>
//             </div>
           
//             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
//               <a
//                 href="tel:+919591762419"
//                 className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow"
//               >
//                 <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4" />
//                 <span>Call Group Coordinator</span>
//               </a>
             
//               <button
//                 onClick={() => setShowGroupBooking(true)}
//                 className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-red-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-xs sm:text-sm hover:bg-red-900 transition-all shadow"
//               >
//                 <UserGroupIcon className="h-3 w-3 sm:h-4 sm:w-4" />
//                 <span>Request Group Quote</span>
//               </button>
//             </div>
           
//             <p className="mt-2 sm:mt-3 text-xs opacity-80">Free itinerary planning • Multiple bus options • Flexible payment</p>
//           </div>
//         </div>
//       </div>

//       {/* Quick Quote Modal */}
//       {showQuickQuote && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full mx-2">
//             <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white rounded-t-lg">
//               <h3 className="text-base sm:text-lg font-bold text-gray-900">Get Instant Quote</h3>
//               <button onClick={() => setShowQuickQuote(false)}>
//                 <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
//               </button>
//             </div>
//             <div className="p-3 sm:p-4 space-y-3 max-h-[80vh] overflow-y-auto">
//               {quoteDetails.vehicle && (
//                 <div className="p-2 sm:p-3 bg-red-50 rounded">
//                   <h4 className="font-bold text-gray-900 text-sm mb-0.5 truncate">{quoteDetails.vehicle.name}</h4>
//                   <div className="flex justify-between text-xs">
//                     <span className="text-gray-600">{quoteDetails.vehicle.seats} Seats • {quoteDetails.vehicle.category}</span>
//                     <span className="text-green-600 font-semibold">₹{quoteDetails.vehicle.perKmWithTax}/km</span>
//                   </div>
//                 </div>
//               )}
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Number of Passengers</label>
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   value={quoteDetails.passengers}
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     if (value === '' || /^\d+$/.test(value)) {
//                       setQuoteDetails({...quoteDetails, passengers: value});
//                     }
//                   }}
//                   placeholder="Enter number of passengers"
//                   className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                 />
//                 <p className="text-xs text-gray-500 mt-0.5">
//                   This vehicle can accommodate up to {quoteDetails.vehicle?.seats || 80} passengers
//                 </p>
//               </div>
//             <div>
//   <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Trip Duration (Days)</label>
//   <input
//     type="text"
//     inputMode="numeric"
//     pattern="[0-9]*"
//     placeholder="Enter number of days"
//     className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//     onChange={(e) => {
//       const value = e.target.value;
//       if (value === '' || /^\d+$/.test(value)) {
//         // Handle the value appropriately
//       }
//     }}
//   />
// </div>
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Preferred Date</label>
//                 <input
//                   type="date"
//                   value={quoteDetails.date}
//                   onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
//                   className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                 />
//               </div>
//               <div className="pt-2 border-t">
//                 <div className="mb-2">
//                   <div className="flex justify-between text-xs mb-0.5">
//                     <span className="text-gray-600">Actual Distance:</span>
//                     <span className="font-semibold text-gray-900">{quotePrice.actualKm} km</span>
//                   </div>
//                   <div className="flex justify-between text-xs mb-0.5">
//                     <span className="text-gray-600">Duration:</span>
//                     <span className="font-semibold text-gray-900">{quotePrice.days} {quotePrice.days === 1 ? 'Day' : 'Days'}</span>
//                   </div>
//                   <div className="flex justify-between text-xs mb-1">
//                     <span className="text-gray-600">Passengers:</span>
//                     <span className="font-semibold text-gray-900">
//                       {quoteDetails.passengers || 'Not specified'}
//                     </span>
//                   </div>
                 
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-gray-700 font-medium text-sm">Estimated Cost:</span>
//                     <span className="text-lg font-bold text-green-600">
//                       {quoteDetails.passengers ? `₹${formatPrice(Math.round(quotePrice.total))}` : 'Enter passenger count'}
//                     </span>
//                   </div>
//                   {quotePrice.minimumApplied && (
//                     <div className="bg-amber-50 border border-amber-200 rounded p-1.5 sm:p-2 mb-2">
//                       <div className="flex items-start gap-1">
//                         <InformationCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600 mt-0.5 flex-shrink-0" />
//                         <div>
//                           <p className="text-xs font-medium text-amber-800">Minimum KM Applied</p>
//                           <p className="text-xs text-amber-700">
//                             Minimum {MINIMUM_KM_PER_DAY} km per day applies. You'll be charged for {quotePrice.kmToCharge} km instead of {quotePrice.actualKm} km.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   <p className="text-xs text-gray-500">
//                     {quoteDetails.passengers
//                       ? 'Based on entered details. Click "Get Exact Quote Now" for final price.'
//                       : 'Please enter number of passengers to get price estimate'}
//                   </p>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-1.5">
//                   <button
//                     onClick={() => setShowQuickQuote(false)}
//                     className="px-2 py-1.5 border border-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-50 transition-colors text-xs"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleExactQuote}
//                     disabled={!quoteDetails.passengers}
//                     className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 rounded font-bold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
//                   >
//                     Get Exact Quote Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Exact Quote Modal */}
//       {exactQuote && exactQuote.show && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-3 z-50">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-2">
//             {/* Header */}
//             <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 sm:p-3 rounded-t-lg">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-sm sm:text-base font-bold text-white">Exact Quote Details</h3>
//                 <button 
//                   onClick={() => setExactQuote(null)}
//                   className="text-white hover:text-gray-200 transition-colors"
//                 >
//                   <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 </button>
//               </div>
//             </div>
            
//             {/* Content */}
//             <div className="p-2 sm:p-3 space-y-2">
//               {/* Vehicle Info */}
//               <div className="bg-red-50 rounded p-2">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
//                   <div className="flex-1">
//                     <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{exactQuote.details.vehicle.name}</h4>
//                     <div className="flex items-center gap-1 text-xs text-gray-600">
//                       <span>{exactQuote.details.vehicle.seats} Seats</span>
//                       <span>•</span>
//                       <span>{exactQuote.details.vehicle.category}</span>
//                     </div>
//                   </div>
//                   <div className="mt-0.5 sm:mt-0">
//                     <span className="text-green-600 font-bold text-xs sm:text-sm">₹{exactQuote.details.vehicle.perKmWithTax}/km</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Trip Details */}
//               <div className="bg-gray-50 rounded p-2">
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Trip Details</h4>
//                 <div className="grid grid-cols-2 gap-1 text-xs">
//                   <div>
//                     <span className="text-gray-600">From:</span>
//                     <div className="font-medium text-gray-900 truncate" title={from}>{from || 'Not specified'}</div>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">To:</span>
//                     <div className="font-medium text-gray-900 truncate" title={to}>{to || 'Not specified'}</div>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Distance:</span>
//                     <div className="font-medium text-gray-900">{exactQuote.details.actualDistance} km</div>
//                   </div>
//                   {exactQuote.details.chargedDistance > exactQuote.details.actualDistance && (
//                     <div>
//                       <span className="text-gray-600">Charged:</span>
//                       <div className="font-medium text-amber-600">{exactQuote.details.chargedDistance} km</div>
//                     </div>
//                   )}
//                   <div>
//                     <span className="text-gray-600">Duration:</span>
//                     <div className="font-medium text-gray-900">{exactQuote.details.days} {exactQuote.details.days === 1 ? 'Day' : 'Days'}</div>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Passengers:</span>
//                     <div className="font-medium text-gray-900">{exactQuote.details.passengers}</div>
//                   </div>
//                   <div className="col-span-2">
//                     <span className="text-gray-600">Travel Date:</span>
//                     <div className="font-medium text-gray-900">{quoteDetails.date}</div>
//                   </div>
//                 </div>
                
//                 {/* Minimum KM Notice */}
//                 {exactQuote.details.chargedDistance > exactQuote.details.actualDistance && (
//                   <div className="mt-1 bg-amber-50 border border-amber-200 rounded p-1">
//                     <p className="text-xs text-amber-700">
//                       <span className="font-medium">Note:</span> Minimum {MINIMUM_KM_PER_DAY} km per day applies
//                     </p>
//                   </div>
//                 )}
//               </div>
              
//               {/* Price Breakdown */}
//               <div className="bg-green-50 rounded p-2">
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Price Breakdown</h4>
//                 <div className="space-y-0.5 text-xs">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Base Fare:</span>
//                     <span className="font-medium">₹{formatPrice(exactQuote.breakdown.baseFare)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Driver Allowance:</span>
//                     <span className="font-medium">₹{formatPrice(exactQuote.breakdown.driverAllowance)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
//                     <span className="font-medium">₹{formatPrice(exactQuote.breakdown.gst)}</span>
//                   </div>
//                   <div className="border-t border-green-200 pt-0.5 mt-0.5">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-900 font-bold text-xs sm:text-sm">Total Price:</span>
//                       <span className="text-base font-bold text-green-600">₹{formatPrice(exactQuote.price)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* What's Included */}
//               <div className="bg-yellow-50 rounded p-2">
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5">What's Included</h4>
//                 <ul className="text-xs text-gray-600 space-y-0.5">
//                   <li className="flex items-center gap-0.5">
//                     <span className="text-green-500">✓</span>
//                     <span>Vehicle rental for {exactQuote.details.days} {exactQuote.details.days === 1 ? 'day' : 'days'}</span>
//                   </li>
//                   <li className="flex items-center gap-0.5">
//                     <span className="text-green-500">✓</span>
//                     <span>Professional driver with allowance</span>
//                   </li>
//                   <li className="flex items-center gap-0.5">
//                     <span className="text-green-500">✓</span>
//                     <span>All taxes included</span>
//                   </li>
//                   <li className="flex items-center gap-0.5">
//                     <span className="text-green-500">✓</span>
//                     <span>Basic vehicle amenities</span>
//                   </li>

//                                  <li className="flex items-center gap-0.5">
//   <span className="text-red-500 font-bold">✗</span>
//   <span>
//     Outside Karnataka taxes are different, so please inquire
//   </span>
// </li>
//                 </ul>
//               </div>
              
//               {/* Action Buttons */}
//               <div className="space-y-1">
//                 <p className="text-center text-xs text-gray-500">
//                   This is your exact quote. Contact us to confirm booking.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-1">
//                   <button
//                     onClick={() => setExactQuote(null)}
//                     className="flex-1 px-2 py-1.5 border border-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-50 transition-colors text-xs"
//                   >
//                     Close
//                   </button>
//                   <a
//                     href={`https://wa.me/919591762419?text=Hi! I want to book the ${encodeURIComponent(exactQuote.details.vehicle.name)} for ${exactQuote.details.passengers} passengers from ${encodeURIComponent(from)} to ${encodeURIComponent(to)} for ${exactQuote.details.days} days. Actual Distance: ${exactQuote.details.actualDistance} km. Total: ₹${formatPrice(exactQuote.price)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-1.5 rounded font-bold hover:from-green-700 hover:to-green-800 text-center flex items-center justify-center gap-1 text-xs"
//                   >
//                     <ChatBubbleLeftRightIcon className="h-3 w-3" />
//                     <span>Book on WhatsApp</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Group Booking Modal */}
//       {showGroupBooking && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-3 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full mx-2">
//             <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white rounded-t-lg">
//               <h3 className="text-base sm:text-lg font-bold text-gray-900">Request Group Quote</h3>
//               <button onClick={() => setShowGroupBooking(false)}>
//                 <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
//               </button>
//             </div>
           
//             <div className="p-3 sm:p-4 space-y-2 max-h-[80vh] overflow-y-auto">
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Group Type</label>
//                 <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm">
//                   <option>School/College Trip</option>
//                   <option>Corporate Event</option>
//                   <option>Pilgrimage Tour</option>
//                   <option>Wedding</option>
//                   <option>Family Function</option>
//                   <option>Tour Group</option>
//                 </select>
//               </div>
             
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 <div>
//                   <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Group Size</label>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     value={passengerCount}
//                     onChange={(e) => {
//                       const value = e.target.value;
//                       if (value === '' || /^\d+$/.test(value)) {
//                         const numValue = parseInt(value);
//                         if (!isNaN(numValue) && numValue >= 1) {
//                           setPassengerCount(numValue);
//                         }
//                       }
//                     }}
//                     className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                     min="20"
//                     max="200"
//                   />
//                 </div>
               
//                <div>
//   <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Trip Duration (Days)</label>
//   <input
//     type="text"
//     inputMode="numeric"
//     pattern="[0-9]*"
//     value={quoteDetails.days || ''}
//     onChange={(e) => {
//       const value = e.target.value;
//       // Allow empty string or numbers
//       if (value === '' || /^\d+$/.test(value)) {
//         const numValue = value === '' ? 0 : parseInt(value);
//         setQuoteDetails({...quoteDetails, days: numValue});
//       }
//     }}
//     placeholder="Enter number of days"
//     className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//   />
// </div>
//               </div>
             

             
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Travel Dates</label>
//                 <input
//                   type="date"
//                   className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                 />
//               </div>
             
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Special Requirements</label>
//                 <textarea
//                   rows={2}
//                   placeholder="Any special needs, amenities required, or specific requests..."
//                   className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
//                 />
//               </div>
             
//               <div className="pt-2 border-t">
//                 <div className="mb-2">
//                   <div className="flex justify-between text-xs mb-0.5">
//                     <span className="text-gray-700 font-medium">Group Size:</span>
//                     <span className="font-semibold text-gray-900">{passengerCount} people</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700 font-medium text-sm">Estimated Cost Range:</span>
//                     <div className="text-right">
//                       <div className="text-lg font-bold text-green-600">₹65,000 - ₹1,50,000</div>
//                       <div className="text-xs text-gray-600">Final quote in 2 hours</div>
//                     </div>
//                   </div>
//                 </div>
               
//                 <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 sm:py-2 rounded font-bold text-sm">
//                   Get Special Group Quote
//                 </button>
               
//                 <p className="text-center text-xs text-gray-500 mt-1">
//                   Our group coordinator will call you within 30 minutes
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Photos Modal */}
//       {showPhotos && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-2 sm:p-3 z-50">
//           <div className="bg-white rounded-lg max-w-4xl w-full h-[85vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-2 sm:p-3 border-b bg-gradient-to-r from-red-600 to-red-700 sticky top-0 bg-white rounded-t-lg">
//               <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-1 sm:gap-2">
//                 <PhotoIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//                 <span className="text-sm sm:text-base truncate">{selectedVehicleName} - Photo Gallery</span>
//               </h3>
//               <button
//                 onClick={() => setShowPhotos(false)}
//                 className="text-white hover:text-gray-200"
//               >
//                 <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
//             </div>
//             <div className="p-2 sm:p-3 md:p-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
//                 {selectedVehiclePhotos.map((photo, index) => (
//                   <div key={index} className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
//                     <Image
//                       src={photo}
//                       alt={`${selectedVehicleName} - Image ${index + 1}`}
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-300"
//                       sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2">
//                       <span className="bg-black/60 text-white text-xs px-1 py-0.5 rounded">
//                         Image {index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="bg-gray-50 rounded p-2 sm:p-3">
//                 <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Bus Details</h4>
//                 <p className="text-xs text-gray-600 mb-1 sm:mb-2">
//                   These are actual photos of our {selectedVehicleName} fleet. All buses are maintained to the highest standards and are regularly serviced.
//                 </p>
//                 <div className="text-xs text-gray-500 space-y-0.5">
//                   <p>• High-resolution photos</p>
//                   <p>• Actual fleet vehicles</p>
//                   <p>• Regular maintenance</p>
//                   <p>• Professional cleaning</p>
//                 </div>
//               </div>
//               <div className="mt-3 sm:mt-4 text-center">
//                 <button
//                   onClick={() => setShowPhotos(false)}
//                   className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors text-sm"
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


















// components/transportation/buses/page.tsx

'use client';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  FunnelIcon,
  XMarkIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ArrowPathIcon,
  PhotoIcon,
  CalculatorIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Combine all places into a single array
const allPlaces = [
  // A
  'Adilabad', 'Agumbe', 'Aihole', 'Aland', 'Alappuzha', 'Ankola', 'Anekal', 'Araku Valley', 'Arani', 'Attingal',
  // B
  'Badami',  'Bangalore','Bagalkot', 'Ballari', 'Banavasi', 'Bandipur', 'Bantwal', 'Belagavi', 'Belur', 'Bekal', 'Bhadravati', 'Bhadrachalam', 'Bylakuppe',
  // C
  'Chalakudy', 'Chamarajanagar', 'Chandravalli', 'Channapatna', 'Chikmagalur', 'Chitradurga', 'Chittoor', 'Coorg', 'Coonoor', 'Cuddalore',
  // D
  'Dandeli', 'Devarayanadurga', 'Devikulam', 'Dhanushkodi', 'Dharwad', 'Dharmavaram', 'Dindigul', 'Doddaballapur', 'Dudhsagar',
  // E
  'Elagiri', 'Eravikulam', 'Erode',
  // F
  'Falaknuma Palace',
  // G
  'Gadag', 'Gandikota', 'Gangavathi', 'Gajendragad', 'Gokarna', 'Gudalur', 'Gudavi', 'Gubbi', 'Guntur', 'Guruvayur',
  // H
  'Halebidu', 'Hampi', 'Hassan', 'Haveri', 'Honnavar', 'Horanadu', 'Horsley Hills', 'Hosur', 'Hubballi',
  // I
  'Idukki', 'Ilkal', 'Irinjalakuda',
  // J
  'Jadcherla', 'Jamkhandi', 'Jatayu Earth Center', 'Jewargi', 'Jhari Falls', 'Jog Falls', 'Jogimatti', 'Jolarpettai',
  // K
  'Kalaburagi', 'Kalasa', 'Kanakapura', 'Kanyakumari', 'Karur', 'Karkala', 'Karwar', 'Kemmannugundi', 'Kochi', 'Kodachadri', 'Kodaikanal', 'Kolar', 'Koppal', 'Kottayam', 'Kudremukh', 'Kundapura',
  // L
  'Lakkidi', 'Lalgudi', 'Lakshmeshwar', 'Latur', 'Lepakshi', 'Lingsugur',
  // M
  'Madikeri', 'Mahabalipuram', 'Malappuram', 'Mandagadde', 'Mandya', 'Manipal', 'Maravanthe', 'Mayiladuthurai', 'Moodbidri', 'Mudigere', 'Mulbagal', 'Munnar', 'Murudeshwar', 'Mysuru',
  // N
  'Nagarhole', 'Nagercoil', 'Nandi Hills', 'Nanjangud', 'Narasaraopet', 'Navalgund', 'Nilambur',
  // O
  'Om Beach', 'Ongole', 'Ooty',
  // P
  'Panchalingeshwara', 'Pandavapura', 'Pattadakal', 'Pavagada', 'Perundurai', 'Pollachi', 'Proddatur', 'Puducherry', 'Puttur', 'Puttaparthi',
  // R
  'Raichur', 'Raichur Fort', 'Ramanagara', 'Rameswaram', 'Ranipet', 'Ranganathittu', 'Ron', 'Rippanpet',
  // S
  'Sagara', 'Sakleshpur', 'Sankarankovil', 'Sattur', 'Sedam', 'Shorapur', 'Siddipet', 'Sirsi', 'Sivakasi', 'Somnathpur', 'Srisailam', 'Sringeri', 'St. Mary\'s Island', 'Surathkal',
  // T
  'Talakadu', 'Tannirbhavi', 'Tarikere', 'Tenkasi', 'Thanjavur', 'Tirunelveli', 'Tirupati', 'Tiruvannamalai', 'Tiptur', 'Tumakuru',
  // U
  'Udupi', 'Ulundurpet', 'Uppala',
  // V
  'Valparai', 'Vanadurga', 'Varkala', 'Vellore', 'Vidhana Soudha', 'Vijayapura', 'Virajpet', 'Virudhunagar', 'Vizianagaram',
  // W
  'Wadakkanchery', 'Wayanad',
  // Y
  'Yana Caves', 'Yelandur', 'Yellapur', 'Yelahanka', 'Yercaud'
].sort();

// Bus categories and types
const busTypes = [
  { id: 'minibus', name: 'Mini Bus', seats: '12-27', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271104/WhatsApp_Image_2026-01-01_at_18.07.21_zq4kdj.jpg' },
  { id: 'standard', name: 'Standard Bus', seats: '28-35', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'luxury', name: 'Luxury Bus', seats: '36-45',  image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'sleeper', name: 'Sleeper Bus', seats: '20-45',  image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
  { id: 'volvo', name: 'Volvo Bus', seats: '40-53', image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg' },
];




// Complete buses data with enhanced details
const vehicles = [
  {
    id: 1,
    name: 'AC Mini Bus ',
    seats: 21,
    perKm: 30,
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
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271104/WhatsApp_Image_2026-01-01_at_18.07.21_zq4kdj.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271099/WhatsApp_Image_2026-01-01_at_18.07.20_swijmv.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271100/WhatsApp_Image_2026-01-01_at_18.07.21_1_benejo.jpg'
    ]
  },
  {
    id: 2,
    name: 'Luxury Sleeper ',
    seats: 35,
    perKm: 45,
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
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271097/WhatsApp_Image_2026-01-01_at_18.07.20_1_ha9vxx.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_3_qcbdkt.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271093/WhatsApp_Image_2026-01-01_at_18.07.19_1_of4znx.jpg'
    ]
  },
  {
    id: 3,
    name: 'Volvo Multi-Axle ',
    seats: 25,
    perKm: 40,
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
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271756/multi_1_o7uex6.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271749/multi_2_etntfp.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271749/multi_3_g4ps82.jpg'
    ]
  },
  {
    id: 4,
    name: 'Bus',
    seats: 50,
    perKm: 50,
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
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg'
    ]
  },
  {
    id: 5,
    name: 'Standard Bus ',
    seats: 55,
    perKm: 50,
    perKmWithTax: 70,
    category: 'Standard',
    ac: false,
    rating: 4.2,
    trips: 890,
    features: ['AC','Spacious', 'Reliable', 'Large Windows', 'Storage'],
    amenities: ['Water', 'Basic First Aid', 'Driver Assistant'],
    type: 'standard',
    badge: 'Economical',
    fuel: 'Diesel',
    year: 2021,
    imageColor: 'red',
    images: [
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271089/WhatsApp_Image_2026-01-01_at_18.07.18_2_x1lfc6.jpg'
    ]
  },
  {
    id: 8,
    name: 'VIP Coach ',
    seats: 21,
    perKm: 30,
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
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767272037/vip_1_clz7mk.jpg',
      'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767272035/vip_2_ninlag.jpg',
    ]
  }
];

// FIXED Autocomplete component - Fully responsive
interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onSelect: (place: string) => void;
  suggestions: string[];
  showSuggestions: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  value,
  onChange,
  placeholder,
  onSelect,
  suggestions,
  showSuggestions,
  onFocus,
  onBlur
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const [isMouseOverSuggestions, setIsMouseOverSuggestions] = useState(false);

  const handleSelect = (place: string) => {
    onSelect(place);
    onChange(place);
    // Focus back on input after selection
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!isMouseOverSuggestions) {
        onBlur();
      }
    }, 150);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 z-10" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full pl-9 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white relative z-20 text-sm sm:text-base"
          autoComplete="off"
        />
        {value && (
          <button
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-30"
            type="button"
          >
            <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}
      </div>
     
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-48 sm:max-h-60 overflow-y-auto z-50"
          onMouseEnter={() => setIsMouseOverSuggestions(true)}
          onMouseLeave={() => setIsMouseOverSuggestions(false)}
        >
          {suggestions.map((place, index) => (
            <button
              key={index}
              onClick={() => handleSelect(place)}
              onMouseDown={(e) => e.preventDefault()}
className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-gray-900 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
              type="button"
            >
              <MagnifyingGlassIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
              <span className="truncate">{place}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// CheckCircleIcon component
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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
  const [manualMode, setManualMode] = useState(true);
  const [estimatedDuration, setEstimatedDuration] = useState<string>('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState({
    passengers: '',
    days: 0,
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    vehicle: null as any
  });
  const [exactQuote, setExactQuote] = useState<{
    show: boolean;
    price: number;
    breakdown: {
      baseFare: number;
      driverAllowance: number;
      gst: number;
      total: number;
    };
    details: {
      actualDistance: number;
      chargedDistance: number;
      days: number;
      passengers: number;
      vehicle: any;
    };
  } | null>(null);

  const ITEMS_PER_PAGE = 6;
  const MINIMUM_KM_PER_DAY = 300;
  const DRIVER_BATA_PER_DAY = 1500;
  const GST_PERCENTAGE = 18;

  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  const getGradientColor = (color: string) => {
    const gradients: Record<string, string> = {
      red: 'from-red-500 to-red-700',
    };
    return gradients[color] || 'from-red-500 to-red-700';
  };

  // Filter places based on input
  const filterPlaces = (input: string) => {
    if (!input.trim()) return allPlaces.slice(0, 8);
    const searchTerm = input.toLowerCase();
    return allPlaces
      .filter(place => place.toLowerCase().includes(searchTerm))
      .slice(0, 8);
  };

  const fromSuggestions = filterPlaces(from);
  const toSuggestions = filterPlaces(to);

  // Calculate estimated duration based on distance
  const calculateEstimatedDuration = (distance: number) => {
    const averageSpeed = 60;
    const hours = Math.round(distance / averageSpeed);
   
    if (hours < 1) {
      return 'Less than 1 hour';
    } else if (hours === 1) {
      return '1 hour';
    } else if (hours < 24) {
      return `${hours} hours`;
    } else {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      if (remainingHours === 0) {
        return `${days} day${days > 1 ? 's' : ''}`;
      } else {
        return `${days} day${days > 1 ? 's' : ''} ${remainingHours} hour${remainingHours > 1 ? 's' : ''}`;
      }
    }
  };

  // Manual distance calculation
  const calculateDistanceManually = () => {
    if (!from || !to || from.trim() === '' || to.trim() === '') {
      alert('Please enter both pickup and destination locations');
      return;
    }
   
    setIsCalculating(true);
    setLoading(true);
   
    setTimeout(() => {
      if (km && !isNaN(parseFloat(km)) && parseFloat(km) > 0) {
        const distanceValue = parseFloat(km);
        setDistance(distanceValue);
        const estimatedTime = calculateEstimatedDuration(distanceValue);
        setDuration(estimatedTime);
        setEstimatedDuration(estimatedTime);
        setRouteDetails([from, to]);
        setManualMode(true);
      } else {
        alert('Please enter a valid distance in kilometers');
        setDistance(null);
        setDuration('');
        setRouteDetails([]);
      }
      setLoading(false);
      setIsCalculating(false);
    }, 500);
  };

  // Handle manual distance update
  const handleManualDistanceUpdate = () => {
    if (km && !isNaN(parseFloat(km)) && parseFloat(km) > 0) {
      const distanceValue = parseFloat(km);
      setDistance(distanceValue);
      const estimatedTime = calculateEstimatedDuration(distanceValue);
      setDuration(estimatedTime);
      setEstimatedDuration(estimatedTime);
      setManualMode(true);
    }
  };

  // Handle popular route selection
  const handleRouteSelect = (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setSelectedRoute(route);
    setKm(route.distance.toString());
    setDistance(route.distance);
    setDuration(route.duration);
    setRouteDetails([route.from, route.to]);
    setManualMode(false);
    setShowFromSuggestions(false);
    setShowToSuggestions(false);
  };

  // Handle route suggestion selection
  const handleRouteSuggestion = (suggestion: any) => {
    const [fromCity, toCity] = suggestion.name.split(' to ');
    setFrom(fromCity);
    setTo(toCity);
    setKm(suggestion.distance.toString());
    setDistance(suggestion.distance);
    const estimatedTime = calculateEstimatedDuration(suggestion.distance);
    setDuration(estimatedTime);
    setEstimatedDuration(estimatedTime);
    setRouteDetails([fromCity, toCity]);
    setManualMode(true);
    setShowFromSuggestions(false);
    setShowToSuggestions(false);
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
  const finalKm = distance ? Number(km || distance) : 0;
  const numberOfDays = distance ? Math.ceil(finalKm / MINIMUM_KM_PER_DAY) : 0;

  const handleViewPhotos = (vehicle: any) => {
    setSelectedVehiclePhotos(vehicle.images);
    setSelectedVehicleName(vehicle.name);
    setShowPhotos(true);
  };

  // Calculate total with minimum km per day logic
  const calculateTotal = (vehicle: any, customDays?: number, customPassengers?: number) => {
    const days = customDays || numberOfDays || 1;
    const totalKmToCharge = days * MINIMUM_KM_PER_DAY;
    const actualKm = finalKm;
    const kmToCharge = Math.max(actualKm, totalKmToCharge);
   
    const baseFare = vehicle.perKmWithTax * kmToCharge;
    const gst = (baseFare * GST_PERCENTAGE) / 100;
    const total = baseFare + (days * DRIVER_BATA_PER_DAY) + gst;
   
    return {
      baseFare,
      gst,
      total,
      actualKm,
      kmToCharge,
      days,
      minimumApplied: kmToCharge > actualKm
    };
  };

  const handleQuickQuote = (vehicle: any) => {
    setShowQuickQuote(true);
    setQuoteDetails({
      passengers: passengerCount.toString(),
      days: numberOfDays || 0,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      vehicle: vehicle
    });
  };

  const calculateQuotePrice = () => {
    if (!quoteDetails.vehicle) return { total: 0, days: 0, actualKm: 0, kmToCharge: 0, baseFare: 0, gst: 0, minimumApplied: false };
    
    // Use the user-entered days value, or fallback to calculated days if 0
    const days = quoteDetails.days > 0 ? quoteDetails.days : (numberOfDays || 1);
    const { total, actualKm, kmToCharge, baseFare, gst, minimumApplied } = calculateTotal(
      quoteDetails.vehicle,
      days,
      quoteDetails.passengers ? parseInt(quoteDetails.passengers) : undefined
    );
    
    return { total, days, actualKm, kmToCharge, baseFare, gst, minimumApplied };
  };

  const quotePrice = calculateQuotePrice();

  const handleExactQuote = () => {
    if (!quoteDetails.vehicle || !quoteDetails.passengers) {
      alert('Please enter all required details');
      return;
    }
    const { total, days, actualKm, kmToCharge, baseFare, gst, minimumApplied } = calculateQuotePrice();
   
    setExactQuote({
      show: true,
      price: total,
      breakdown: {
        baseFare,
        driverAllowance: days * DRIVER_BATA_PER_DAY,
        gst,
        total
      },
      details: {
        actualDistance: actualKm,
        chargedDistance: kmToCharge,
        days,
        passengers: parseInt(quoteDetails.passengers),
        vehicle: quoteDetails.vehicle
      }
    });
  };

  const recommendedBuses = useMemo(() => {
    return vehicles
      .filter(v => v.seats >= passengerCount)
      .sort((a, b) => a.perKmWithTax - b.perKmWithTax)
      .slice(0, 3);
  }, [passengerCount, vehicles]);

  // Close modals when pressing Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showQuickQuote) setShowQuickQuote(false);
        if (exactQuote?.show) setExactQuote(null);
        if (showGroupBooking) setShowGroupBooking(false);
        if (showPhotos) setShowPhotos(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showQuickQuote, exactQuote, showGroupBooking, showPhotos]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]" />
        </div>
       
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold text-white">GROUP TRAVEL SPECIALISTS</span>
            </div>
           
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 px-2">
              Premium <span className="text-yellow-300">Buses</span> for Group Travel
            </h1>
           
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-100 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
              Perfect for pilgrimages, school trips, corporate events, weddings, and large group tours across India
            </p>
           
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              {[
                { label: 'Bus Fleet', value: '100+' },
                { label: 'Group Trips', value: '5K+' },
                { label: 'Cities', value: '200+' },
                { label: 'Happy Groups', value: '2K+' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded sm:rounded-lg p-2 sm:p-3">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-red-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 -mt-4 sm:-mt-6 md:-mt-8 relative z-10">
        {/* Group Booking Calculator */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl mb-4 sm:mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-1 sm:gap-2">
              <UserGroupIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Group Travel Calculator</span>
            </h2>
            <p className="text-red-100 text-xs sm:text-sm mt-1">Enter your route and distance manually for accurate pricing</p>
          </div>
         
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Group Size</label>
                <div className="relative">
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(parseInt(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="text-center mt-1">
                    <span className="text-lg sm:text-xl font-bold text-red-600">{passengerCount}</span>
                    <span className="text-gray-600 text-xs ml-1">passengers</span>
                  </div>
                </div>
              </div>
             
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <Autocomplete
                  value={from}
                  onChange={setFrom}
                  placeholder="Enter city"
                  onSelect={(place) => {
                    setFrom(place);
                    setShowFromSuggestions(false);
                  }}
                  suggestions={fromSuggestions}
                  showSuggestions={showFromSuggestions}
                  onFocus={() => setShowFromSuggestions(true)}
                  onBlur={() => setShowFromSuggestions(false)}
                />
              </div>
             
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Destination</label>
                <Autocomplete
                  value={to}
                  onChange={setTo}
                  placeholder="Destination city"
                  onSelect={(place) => {
                    setTo(place);
                    setShowToSuggestions(false);
                  }}
                  suggestions={toSuggestions}
                  showSuggestions={showToSuggestions}
                  onFocus={() => setShowToSuggestions(true)}
                  onBlur={() => setShowToSuggestions(false)}
                />
              </div>
             
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Distance (KM)</label>
                <div className="flex gap-1">
                  <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    onBlur={handleManualDistanceUpdate}
                    placeholder="Enter distance"
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                    min="1"
                    step="1"
                  />
                  <button
                    onClick={handleManualDistanceUpdate}
                    className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex-shrink-0"
                    title="Update distance"
                  >
                    <CalculatorIcon className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter distance in kilometers</p>
              </div>
            </div>
           
            {/* Calculate Button */}
            <div className="mt-3 sm:mt-4 text-center">
              <button
                onClick={calculateDistanceManually}
                disabled={!from || !to || !km || isCalculating}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full sm:w-auto text-sm sm:text-base"
              >
                {isCalculating ? (
                  <>
                    <ArrowPathIcon className="h-4 w-4 animate-spin" />
                    <span>Calculating...</span>
                  </>
                ) : (
                  <>
                    <MapPinIcon className="h-4 w-4" />
                    <span>Calculate Price</span>
                  </>
                )}
              </button>
            </div>
           
            {loading && (
              <div className="mt-3 sm:mt-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <span className="text-gray-600 text-xs sm:text-sm">Calculating price...</span>
                </div>
              </div>
            )}
           
            {distance && !loading && (
              <div className="mt-3 sm:mt-4 bg-gradient-to-r from-red-50 to-red-50 rounded-lg p-2 sm:p-3 border border-red-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="flex-1">
                    <div className="text-xs text-gray-600">Route Information</div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 truncate">{from} → {to}</div>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-0.5">
                      <span className="text-red-600 font-semibold text-xs sm:text-sm">{distance} KM</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-xs sm:text-sm">{duration}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-red-600 font-medium text-xs sm:text-sm">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-0">
                    <button
                      onClick={calculateDistanceManually}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium hover:bg-red-200 transition-colors"
                    >
                      Recalculate
                    </button>
                    {manualMode && (
                      <span className="px-2 py-1 sm:px-2 sm:py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                        Manual Distance
                      </span>
                    )}
                  </div>
                </div>
               
                <div className="text-xs text-gray-600 mt-1 truncate">
                  <span className="font-medium">Route:</span> {routeDetails.join(' → ')}
                </div>
              </div>
            )}
           
            {recommendedBuses.length > 0 && distance && (
              <div className="mt-3 sm:mt-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1 sm:mb-2">Recommended for your group:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {recommendedBuses.map((bus) => {
                    const { total } = calculateTotal(bus);
                    return (
                      <div key={bus.id} className="bg-gradient-to-r from-red-50 to-red-50 rounded-lg p-2 sm:p-3 border border-red-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                          <div className="flex-1">
                            <div className="font-bold text-gray-900 text-sm truncate">{bus.name}</div>
                            <div className="text-gray-600 text-xs">{bus.seats} seats • {bus.ac ? 'AC' : 'Non-AC'}</div>
                          </div>
                          <div className="text-right mt-0.5 sm:mt-0">
                            <div className="text-sm sm:text-base font-bold text-red-600">₹{formatPrice(total)}</div>
                            <div className="text-xs text-gray-500">estimated</div>
                          </div>
                        </div>
                        <div className="mt-1 flex items-center gap-1">
                          <StarIconSolid className="h-3 w-3 text-amber-500" />
                          <span className="text-xs font-medium">{bus.rating}</span>
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
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Select Bus Type</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
            {busTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
                className={`p-2 sm:p-3 rounded border transition-all ${
                  selectedType === type.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-red-200'
                }`}
              >

                <div className="font-medium text-gray-900 text-xs sm:text-sm">{type.name}</div>
                <div className="text-gray-600 text-xs">{type.seats} seats</div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-lg shadow p-2 sm:p-3 md:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3">
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Available Buses ({filteredVehicles.length})</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Perfect for groups of {passengerCount}+ people</p>
            </div>
           
            <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-1 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setMinSeats(20)}
                  className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    minSeats === 20 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  20+ Seats
                </button>
                <button
                  onClick={() => setMinSeats(40)}
                  className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    minSeats === 40 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  40+ Seats
                </button>
                <button
                  onClick={() => setShowACOnly(!showACOnly)}
                  className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    showACOnly ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  AC Only
                </button>
              </div>
             
              <div className="flex gap-1 sm:gap-2">
                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                >
                  <FunnelIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Filters</span>
                </button>
               
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 text-xs sm:text-sm"
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
            <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gray-50 rounded border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Advanced Filters</h4>
                <button onClick={() => setShowFilters(false)}>
                  <XMarkIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                </button>
              </div>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <span>20 Seats</span>
                    <span>80 Seats</span>
                  </div>
                </div>
               
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <span>₹33</span>
                    <span>₹165</span>
                  </div>
                </div>
              </div>
             
              <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row justify-end gap-1 sm:gap-2">
                <button
                  onClick={() => {
                    setMinSeats(20);
                    setMaxPrice(100);
                    setShowACOnly(true);
                  }}
                  className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Buses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {currentVehicles.map((vehicle) => {
            const { total, kmToCharge, baseFare, gst, actualKm, minimumApplied } = distance ? calculateTotal(vehicle) : { total: 0, kmToCharge: 0, baseFare: 0, gst: 0, actualKm: 0, minimumApplied: false };
            const gradient = getGradientColor(vehicle.imageColor);
            const currentImageIndex = hoveredVehicle === vehicle.id ? 1 : 0;
            const vehicleImage = vehicle.images?.[currentImageIndex] || 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1766668266/26-seater-travller_dir8rp.jpg';
           
            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
                onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                onMouseLeave={() => setHoveredVehicle(null)}
              >
                {/* Bus Header with Image */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={vehicleImage}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={vehicle.id <= 3}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                 
                  {/* Image Gallery Indicator */}
                  <div className="absolute top-2 left-2 flex gap-0.5">
                    {vehicle.images?.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                 
                  {/* Badge */}
                  {vehicle.badge && (
                    <div className="absolute top-2 right-2">
                      <span className="px-1.5 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        {vehicle.badge}
                      </span>
                    </div>
                  )}
                 
                  {/* Seats Overlay */}
                  <div className="absolute bottom-2 left-2">
                    <div className="bg-black/60 backdrop-blur-sm rounded px-1.5 py-1">
                      <div className="text-lg sm:text-xl font-bold text-white">{vehicle.seats}</div>
                      <div className="text-xs text-white/80">Seats</div>
                    </div>
                  </div>
                 
                  {/* Vehicle Info */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    <div className="flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                      <StarIconSolid className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-yellow-400" />
                      <span className="text-white text-xs font-semibold">{vehicle.rating}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                      <span className="text-white text-xs">{vehicle.year}</span>
                    </div>
                  </div>
                </div>
               
                {/* Bus Details */}
                <div className="p-2 sm:p-3 md:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors truncate">
                        {vehicle.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1 mt-0.5">
                        <span className="px-1 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {vehicle.category}
                        </span>
                        {vehicle.ac && (
                          <span className="flex items-center gap-0.5 px-1 py-0.5 bg-red-50 text-red-700 text-xs font-medium rounded">
                            <span className="text-xs">❄️</span>
                            AC
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-left sm:text-right mt-0.5 sm:mt-0">
                      <div className="text-base sm:text-lg md:text-xl font-bold text-green-600">₹{vehicle.perKmWithTax}</div>
                      <div className="text-xs text-gray-500">per km</div>
                    </div>
                  </div>
                 
                  {/* Features */}
                  <div className="mb-2 sm:mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-0.5">Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-red-50 text-red-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                 
                  {/* Amenities */}
                  <div className="mb-2 sm:mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-0.5">Amenities:</div>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.amenities.slice(0, 2).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-0.5">
                          <CheckCircleIcon className="h-2.5 w-2.5 text-red-500" />
                          <span className="text-xs text-gray-600">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                 
                  {/* Price Breakdown */}
                  <div className="mb-2 sm:mb-3 bg-gray-50 rounded p-1.5 sm:p-2">
                    <div className="space-y-1">
                      {distance ? (
                        <>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Distance:</span>
                            <span className="font-medium text-gray-900">{actualKm} km</span>
                          </div>
                          {minimumApplied && (
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Min KM Charge:</span>
                              <span className="font-medium text-amber-600">{kmToCharge} km</span>
                            </div>
                          )}
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Base Fare:</span>
                            <span className="font-medium">₹{formatPrice(baseFare)}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Driver Allowance:</span>
                            <span className="font-medium">₹{formatPrice(numberOfDays * DRIVER_BATA_PER_DAY)}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
                            <span className="font-medium">₹{formatPrice(gst)}</span>
                          </div>
                          <div className="border-t pt-1 mt-1">
                            <div className="flex justify-between font-bold">
                              <span className="text-gray-900 text-sm">Total Estimated:</span>
                              <span className="text-base text-green-600">₹{formatPrice(total)}</span>
                            </div>
                            {minimumApplied && (
                              <div className="text-xs text-amber-600 mt-0.5">
                                *Minimum {MINIMUM_KM_PER_DAY} km per day
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-1.5">
                          <div className="text-sm font-bold text-red-600 mb-0.5">Enter Distance</div>
                          <p className="text-xs text-gray-600">Enter distance in KM to see price estimate</p>
                        </div>
                      )}
                    </div>
                  </div>
                 
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap=1.5">
                    <button
                      onClick={() => handleQuickQuote(vehicle)}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 sm:py-2 rounded font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm"
                    >
                      Get Quote
                    </button>
                    <button
                      onClick={() => handleViewPhotos(vehicle)}
                      className="px-2 sm:px-3 py-1.5 sm:py-2 border border-red-600 text-red-600 rounded font-semibold hover:bg-red-50 transition-colors text-xs sm:text-sm flex items-center justify-center gap-1"
                    >
                      <PhotoIcon className="h-3 w-3" />
                      <span>View Photos</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="text-gray-600 text-xs sm:text-sm">
              Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredVehicles.length)} of {filteredVehicles.length} buses
            </div>
           
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1 sm:p-1.5 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeftIcon className="h-3 w-3 sm:h-4 sm:w-4" />
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
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded font-medium text-xs ${
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
                className="p-1 sm:p-1.5 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-lg p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 text-white">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-3 sm:mb-4">Why Choose Our Bus Service for Groups?</h3>
         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              {
                icon: <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                title: "Large Group Expertise",
                description: "Specialized in handling groups from 20 to 80 people with ease"
              },
              {
                icon: <ShieldCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                title: "Safety First",
                description: "GPS tracking, emergency exits, first aid, and experienced drivers"
              },
              {
                icon: <ClockIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                title: "Flexible Scheduling",
                description: "Customizable itineraries and 24/7 support for your group"
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 rounded sm:rounded-lg mb-1 sm:mb-2">
                  {feature.icon}
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1">{feature.title}</h4>
                <p className="text-red-200 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Booking CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3 sm:p-4 md:p-6 text-white mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Need a Bus for Your Group?</h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90">Get special discounts for groups of 30+ people</p>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded p-2 sm:p-3">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">10% OFF</div>
                <div className="text-xs sm:text-sm">For School & College Groups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded p-2 sm:p-3">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">15% OFF</div>
                <div className="text-xs sm:text-sm">For Corporate & Wedding Groups</div>
              </div>
            </div>
           
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow"
              >
                <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Call Group Coordinator</span>
              </a>
             
              <button
                onClick={() => setShowGroupBooking(true)}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-red-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold text-xs sm:text-sm hover:bg-red-900 transition-all shadow"
              >
                <UserGroupIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Request Group Quote</span>
              </button>
            </div>
           
            <p className="mt-2 sm:mt-3 text-xs opacity-80">Free itinerary planning • Multiple bus options • Flexible payment</p>
          </div>
        </div>
      </div>

      {/* Quick Quote Modal */}
      {showQuickQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-2">
            <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white rounded-t-lg">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Get Instant Quote</h3>
              <button onClick={() => setShowQuickQuote(false)}>
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-3 sm:p-4 space-y-3 max-h-[80vh] overflow-y-auto">
              {quoteDetails.vehicle && (
                <div className="p-2 sm:p-3 bg-red-50 rounded">
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5 truncate">{quoteDetails.vehicle.name}</h4>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">{quoteDetails.vehicle.seats} Seats • {quoteDetails.vehicle.category}</span>
                    <span className="text-green-600 font-semibold">₹{quoteDetails.vehicle.perKmWithTax}/km</span>
                  </div>
                </div>
              )}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Number of Passengers</label>
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
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
                <p className="text-xs text-gray-500 mt-0.5">
                  This vehicle can accommodate up to {quoteDetails.vehicle?.seats || 80} passengers
                </p>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Trip Duration (Days)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={quoteDetails.days === 0 ? '' : quoteDetails.days.toString()}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow empty string or numbers
                    if (value === '' || /^\d+$/.test(value)) {
                      const numValue = value === '' ? 0 : parseInt(value);
                      setQuoteDetails({...quoteDetails, days: numValue});
                    }
                  }}
                  placeholder="Enter number of days"
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Preferred Date</label>
                <input
                  type="date"
                  value={quoteDetails.date}
                  onChange={(e) => setQuoteDetails({...quoteDetails, date: e.target.value})}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
              </div>
              <div className="pt-2 border-t">
                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-gray-600">Actual Distance:</span>
                    <span className="font-semibold text-gray-900">{quotePrice.actualKm} km</span>
                  </div>
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{quotePrice.days} {quotePrice.days === 1 ? 'Day' : 'Days'}</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Passengers:</span>
                    <span className="font-semibold text-gray-900">
                      {quoteDetails.passengers || 'Not specified'}
                    </span>
                  </div>
                 
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 font-medium text-sm">Estimated Cost:</span>
                    <span className="text-lg font-bold text-green-600">
                      {quoteDetails.passengers ? `₹${formatPrice(Math.round(quotePrice.total))}` : 'Enter passenger count'}
                    </span>
                  </div>
                  {quotePrice.minimumApplied && (
                    <div className="bg-amber-50 border border-amber-200 rounded p-1.5 sm:p-2 mb-2">
                      <div className="flex items-start gap-1">
                        <InformationCircleIcon className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-amber-800">Minimum KM Applied</p>
                          <p className="text-xs text-amber-700">
                            Minimum {MINIMUM_KM_PER_DAY} km per day applies. You'll be charged for {quotePrice.kmToCharge} km instead of {quotePrice.actualKm} km.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    {quoteDetails.passengers
                      ? 'Based on entered details. Click "Get Exact Quote Now" for final price.'
                      : 'Please enter number of passengers to get price estimate'}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-1.5">
                  <button
                    onClick={() => setShowQuickQuote(false)}
                    className="px-2 py-1.5 border border-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-50 transition-colors text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleExactQuote}
                    disabled={!quoteDetails.passengers}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 rounded font-bold hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                  >
                    Get Exact Quote Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exact Quote Modal */}
      {exactQuote && exactQuote.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-3 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-2">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 sm:p-3 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-sm sm:text-base font-bold text-white">Exact Quote Details</h3>
                <button 
                  onClick={() => setExactQuote(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-2 sm:p-3 space-y-2">
              {/* Vehicle Info */}
              <div className="bg-red-50 rounded p-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{exactQuote.details.vehicle.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <span>{exactQuote.details.vehicle.seats} Seats</span>
                      <span>•</span>
                      <span>{exactQuote.details.vehicle.category}</span>
                    </div>
                  </div>
                  <div className="mt-0.5 sm:mt-0">
                    <span className="text-green-600 font-bold text-xs sm:text-sm">₹{exactQuote.details.vehicle.perKmWithTax}/km</span>
                  </div>
                </div>
              </div>
              
              {/* Trip Details */}
              <div className="bg-gray-50 rounded p-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Trip Details</h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div>
                    <span className="text-gray-600">From:</span>
                    <div className="font-medium text-gray-900 truncate" title={from}>{from || 'Not specified'}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">To:</span>
                    <div className="font-medium text-gray-900 truncate" title={to}>{to || 'Not specified'}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Distance:</span>
                    <div className="font-medium text-gray-900">{exactQuote.details.actualDistance} km</div>
                  </div>
                  {exactQuote.details.chargedDistance > exactQuote.details.actualDistance && (
                    <div>
                      <span className="text-gray-600">Charged:</span>
                      <div className="font-medium text-amber-600">{exactQuote.details.chargedDistance} km</div>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <div className="font-medium text-gray-900">{exactQuote.details.days} {exactQuote.details.days === 1 ? 'Day' : 'Days'}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Passengers:</span>
                    <div className="font-medium text-gray-900">{exactQuote.details.passengers}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Travel Date:</span>
                    <div className="font-medium text-gray-900">{quoteDetails.date}</div>
                  </div>
                </div>
                
                {/* Minimum KM Notice */}
                {exactQuote.details.chargedDistance > exactQuote.details.actualDistance && (
                  <div className="mt-1 bg-amber-50 border border-amber-200 rounded p-1">
                    <p className="text-xs text-amber-700">
                      <span className="font-medium">Note:</span> Minimum {MINIMUM_KM_PER_DAY} km per day applies
                    </p>
                  </div>
                )}
              </div>
              
              {/* Price Breakdown */}
              <div className="bg-green-50 rounded p-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Price Breakdown</h4>
                <div className="space-y-0.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Fare:</span>
                    <span className="font-medium">₹{formatPrice(exactQuote.breakdown.baseFare)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Driver Allowance:</span>
                    <span className="font-medium">₹{formatPrice(exactQuote.breakdown.driverAllowance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST ({GST_PERCENTAGE}%):</span>
                    <span className="font-medium">₹{formatPrice(exactQuote.breakdown.gst)}</span>
                  </div>
                  <div className="border-t border-green-200 pt-0.5 mt-0.5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold text-xs sm:text-sm">Total Price:</span>
                      <span className="text-base font-bold text-green-600">₹{formatPrice(exactQuote.price)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* What's Included */}
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5">What's Included</h4>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li className="flex items-center gap-0.5">
                    <span className="text-green-500">✓</span>
                    <span>Vehicle rental for {exactQuote.details.days} {exactQuote.details.days === 1 ? 'day' : 'days'}</span>
                  </li>
                  <li className="flex items-center gap-0.5">
                    <span className="text-green-500">✓</span>
                    <span>Professional driver with allowance</span>
                  </li>
                  <li className="flex items-center gap-0.5">
                    <span className="text-green-500">✓</span>
                    <span>All taxes included</span>
                  </li>
                  <li className="flex items-center gap-0.5">
                    <span className="text-green-500">✓</span>
                    <span>Basic vehicle amenities</span>
                  </li>

                                 <li className="flex items-center gap-0.5">
  <span className="text-red-500 font-bold">✗</span>
  <span>
    Outside Karnataka taxes are different, so please inquire
  </span>
</li>
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-1">
                <p className="text-center text-xs text-gray-500">
                  This is your exact quote. Contact us to confirm booking.
                </p>
                <div className="flex flex-col sm:flex-row gap-1">
                  <button
                    onClick={() => setExactQuote(null)}
                    className="flex-1 px-2 py-1.5 border border-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-50 transition-colors text-xs"
                  >
                    Close
                  </button>
                  <a
                    href={`https://wa.me/919591762419?text=Hi! I want to book the ${encodeURIComponent(exactQuote.details.vehicle.name)} for ${exactQuote.details.passengers} passengers from ${encodeURIComponent(from)} to ${encodeURIComponent(to)} for ${exactQuote.details.days} days. Actual Distance: ${exactQuote.details.actualDistance} km. Total: ₹${formatPrice(exactQuote.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-1.5 rounded font-bold hover:from-green-700 hover:to-green-800 text-center flex items-center justify-center gap-1 text-xs"
                  >
                    <ChatBubbleLeftRightIcon className="h-3 w-3" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Group Booking Modal */}
      {showGroupBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-3 z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-2">
            <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white rounded-t-lg">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Request Group Quote</h3>
              <button onClick={() => setShowGroupBooking(false)}>
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              </button>
            </div>
           
            <div className="p-3 sm:p-4 space-y=2 max-h-[80vh] overflow-y-auto">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Group Type</label>
                <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm">
                  <option>School/College Trip</option>
                  <option>Corporate Event</option>
                  <option>Pilgrimage Tour</option>
                  <option>Wedding</option>
                  <option>Family Function</option>
                  <option>Tour Group</option>
                </select>
              </div>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Group Size</label>
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
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                    min="20"
                    max="200"
                  />
                </div>
               
               <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Trip Duration (Days)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter number of days"
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
              </div>
              </div>
             

             
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Travel Dates</label>
                <input
                  type="date"
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
              </div>
             
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-0.5">Special Requirements</label>
                <textarea
                  rows={2}
                  placeholder="Any special needs, amenities required, or specific requests..."
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white text-sm"
                />
              </div>
             
              <div className="pt-2 border-t">
                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-gray-700 font-medium">Group Size:</span>
                    <span className="font-semibold text-gray-900">{passengerCount} people</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium text-sm">Estimated Cost Range:</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">₹65,000 - ₹1,50,000</div>
                      <div className="text-xs text-gray-600">Final quote in 2 hours</div>
                    </div>
                  </div>
                </div>
               
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 sm:py-2 rounded font-bold text-sm">
                  Get Special Group Quote
                </button>
               
                <p className="text-center text-xs text-gray-500 mt-1">
                  Our group coordinator will call you within 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photos Modal */}
      {showPhotos && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-2 sm:p-3 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[85vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-2 sm:p-3 border-b bg-gradient-to-r from-red-600 to-red-700 sticky top-0 bg-white rounded-t-lg">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-1 sm:gap-2">
                <PhotoIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base truncate">{selectedVehicleName} - Photo Gallery</span>
              </h3>
              <button
                onClick={() => setShowPhotos(false)}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {selectedVehiclePhotos.map((photo, index) => (
                  <div key={index} className="relative h-32 sm:h-40 md:h-48 rounded overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${selectedVehicleName} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2">
                      <span className="bg-black/60 text-white text-xs px-1 py-0.5 rounded">
                        Image {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded p-2 sm:p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Bus Details</h4>
                <p className="text-xs text-gray-600 mb-1 sm:mb-2">
                  These are actual photos of our {selectedVehicleName} fleet. All buses are maintained to the highest standards and are regularly serviced.
                </p>
                <div className="text-xs text-gray-500 space-y-0.5">
                  <p>• High-resolution photos</p>
                  <p>• Actual fleet vehicles</p>
                  <p>• Regular maintenance</p>
                  <p>• Professional cleaning</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <button
                  onClick={() => setShowPhotos(false)}
                  className="px=3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition-colors text-sm"
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