// components/transportation/VehiclePage.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { MapPinIcon, ArrowRightIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

// State permit data
const statePermits = {
  kerala: {
    name: 'Kerala',
    vehicles: {
      'sedan': 2000,
      'innova': 3500,
      'tempo12': 6000,
      'tempo17': 6000,
      'tempo20': 6000,
      'minibus21': 11000,
      'minibus27': 14500,
      'bus35': 17000,
      'bus45': 20000,
      'bus53': 20000
    }
  },
  tamilnadu: {
    name: 'Tamil Nadu',
    vehicles: {
      'sedan': 1000,
      'innova': 2000,
      'tempo12': 3000,
      'tempo17': 3000,
      'tempo20': 3000,
      'minibus21': 21000,
      'minibus27': 24500,
      'bus35': 31000,
      'bus45': 45000,
      'bus53': 45000
    }
  },
  andhrapradesh: {
    name: 'Andhra Pradesh',
    vehicles: {
      'sedan': 1500,
      'innova': 3000,
      'tempo12': 5000,
      'tempo17': 5000,
      'tempo20': 5000,
      'minibus21': 11000,
      'minibus27': 14500,
      'bus35': 15000,
      'bus45': 30000,
      'bus53': 30000
    }
  },
  karnataka: {
    name: 'Karnataka',
    vehicles: {
      'sedan': 1200,
      'innova': 2500,
      'tempo12': 4000,
      'tempo17': 4000,
      'tempo20': 4000,
      'minibus21': 15000,
      'minibus27': 18000,
      'bus35': 22000,
      'bus45': 35000,
      'bus53': 35000
    }
  },
  maharashtra: {
    name: 'Maharashtra',
    vehicles: {
      'sedan': 1800,
      'innova': 3200,
      'tempo12': 5500,
      'tempo17': 5500,
      'tempo20': 5500,
      'minibus21': 18000,
      'minibus27': 22000,
      'bus35': 28000,
      'bus45': 40000,
      'bus53': 40000
    }
  },
  goa: {
    name: 'Goa',
    vehicles: {
      'sedan': 2500,
      'innova': 4000,
      'tempo12': 7000,
      'tempo17': 7000,
      'tempo20': 7000,
      'minibus21': 25000,
      'minibus27': 30000,
      'bus35': 35000,
      'bus45': 50000,
      'bus53': 50000
    }
  },
  rajasthan: {
    name: 'Rajasthan',
    vehicles: {
      'sedan': 1500,
      'innova': 2800,
      'tempo12': 4500,
      'tempo17': 4500,
      'tempo20': 4500,
      'minibus21': 16000,
      'minibus27': 20000,
      'bus35': 25000,
      'bus45': 38000,
      'bus53': 38000
    }
  }
};

// Complete vehicle data
const vehiclesCars = [
  { id: 1, name: 'Sedan (Dzire/Etios)', seats: 4, perKm: 13, perKmWithTax: 15, permitKey: 'sedan', category: 'Economy', ac: true, features: ['AC', 'Music System', 'Comfort Seats'] },
  { id: 2, name: 'Innova Crysta', seats: 7, perKm: 18, perKmWithTax: 21, permitKey: 'innova', category: 'Premium', ac: true, features: ['AC', 'Spacious', 'Comfortable'] },
  { id: 3, name: 'Tempo Traveller (12 Seater)', seats: 12, perKm: 22, perKmWithTax: 26, permitKey: 'tempo12', category: 'Luxury', ac: true, features: ['AC', 'Luxury Seats', 'Entertainment'] },
  { id: 4, name: 'Tempo Traveller (17 Seater)', seats: 17, perKm: 26, perKmWithTax: 30, permitKey: 'tempo17', category: 'Luxury', ac: true, features: ['AC', 'Spacious', 'Comfort'] },
  { id: 5, name: 'Tempo Traveller (20 Seater)', seats: 20, perKm: 30, perKmWithTax: 35, permitKey: 'tempo20', category: 'Luxury', ac: true, features: ['AC', 'Large Space', 'Luxury'] },
  { id: 6, name: 'Ertiga', seats: 6, perKm: 16, perKmWithTax: 19, permitKey: 'innova', category: 'Standard', ac: true, features: ['AC', 'Family Friendly', 'Economical'] },
  { id: 7, name: 'Swift Dzire', seats: 4, perKm: 12, perKmWithTax: 14, permitKey: 'sedan', category: 'Economy', ac: true, features: ['AC', 'Fuel Efficient', 'Compact'] },
  { id: 8, name: 'Toyota Fortuner', seats: 7, perKm: 35, perKmWithTax: 42, permitKey: 'innova', category: 'Luxury SUV', ac: true, features: ['4x4', 'Premium', 'Powerful'] },
  { id: 9, name: 'Mahindra Xylo', seats: 7, perKm: 17, perKmWithTax: 20, permitKey: 'innova', category: 'Standard', ac: true, features: ['AC', 'Spacious', 'Comfortable'] },
  { id: 10, name: 'Force Traveller', seats: 14, perKm: 24, perKmWithTax: 28, permitKey: 'tempo17', category: 'Standard', ac: true, features: ['AC', 'Reliable', 'Spacious'] },
  { id: 11, name: 'Maruti Wagon R', seats: 4, perKm: 11, perKmWithTax: 13, permitKey: 'sedan', category: 'Economy', ac: true, features: ['AC', 'Compact', 'City Car'] },
  { id: 12, name: 'Honda City', seats: 4, perKm: 15, perKmWithTax: 18, permitKey: 'sedan', category: 'Premium Sedan', ac: true, features: ['AC', 'Luxury', 'Comfort'] },
  { id: 13, name: 'Hyundai Creta', seats: 5, perKm: 20, perKmWithTax: 24, permitKey: 'innova', category: 'SUV', ac: true, features: ['AC', 'Modern', 'Comfort'] },
  { id: 14, name: 'Mahindra Scorpio', seats: 7, perKm: 22, perKmWithTax: 26, permitKey: 'innova', category: 'SUV', ac: true, features: ['AC', 'Powerful', 'Off-road'] },
  { id: 15, name: 'Tata Sumo', seats: 9, perKm: 18, perKmWithTax: 21, permitKey: 'tempo12', category: 'Standard', ac: true, features: ['AC', 'Durable', 'Rugged'] },
  { id: 16, name: 'Kia Carnival', seats: 7, perKm: 40, perKmWithTax: 48, permitKey: 'innova', category: 'Luxury MPV', ac: true, features: ['Premium AC', 'Entertainment', 'Luxury'] },
  { id: 17, name: 'Mercedes Benz', seats: 4, perKm: 60, perKmWithTax: 72, permitKey: 'sedan', category: 'Luxury', ac: true, features: ['Premium', 'Luxury', 'VIP'] },
  { id: 18, name: 'Toyota Camry', seats: 4, perKm: 45, perKmWithTax: 54, permitKey: 'sedan', category: 'Premium Sedan', ac: true, features: ['AC', 'Comfort', 'Executive'] },
  { id: 19, name: 'Mahindra Thar', seats: 4, perKm: 25, perKmWithTax: 30, permitKey: 'innova', category: 'Adventure', ac: true, features: ['4x4', 'Off-road', 'Adventure'] },
  { id: 20, name: 'Maruti Vitara Brezza', seats: 5, perKm: 17, perKmWithTax: 20, permitKey: 'innova', category: 'Compact SUV', ac: true, features: ['AC', 'Compact', 'City SUV'] },
];

const vehiclesBuses = [
  { id: 21, name: 'Mini Bus (21 Seater)', seats: 21, perKm: 27, perKmWithTax: 30, permitKey: 'minibus21', category: 'Standard', ac: false, features: ['Non-AC', 'Economical', 'Reliable'] },
  { id: 22, name: 'AC Mini Bus (21 Seater)', seats: 21, perKm: 40, perKmWithTax: 48, permitKey: 'minibus21', category: 'Standard', ac: true, features: ['AC', 'Comfort', 'Group Travel'] },
  { id: 23, name: 'Mini Bus (27 Seater)', seats: 27, perKm: 35, perKmWithTax: 42, permitKey: 'minibus27', category: 'Standard', ac: false, features: ['Non-AC', 'Spacious', 'Economical'] },
  { id: 24, name: 'AC Mini Bus (27 Seater)', seats: 27, perKm: 50, perKmWithTax: 58, permitKey: 'minibus27', category: 'Luxury', ac: true, features: ['AC', 'Comfortable', 'Premium'] },
  { id: 25, name: 'Sleeper Bus (27 Seater)', seats: 27, perKm: 55, perKmWithTax: 64, permitKey: 'minibus27', category: 'Luxury', ac: true, features: ['Sleeper', 'AC', 'Night Travel'] },
  { id: 26, name: 'Standard Bus (35 Seater)', seats: 35, perKm: 45, perKmWithTax: 52, permitKey: 'bus35', category: 'Standard', ac: false, features: ['Non-AC', 'Economical', 'Large Group'] },
  { id: 27, name: 'Luxury Bus (35 Seater)', seats: 35, perKm: 65, perKmWithTax: 75, permitKey: 'bus35', category: 'Luxury', ac: true, features: ['AC', 'Comfort', 'Entertainment'] },
  { id: 28, name: 'Sleeper Bus (35 Seater)', seats: 35, perKm: 70, perKmWithTax: 82, permitKey: 'bus35', category: 'Luxury', ac: true, features: ['Sleeper', 'AC', 'Night Journey'] },
  { id: 29, name: 'Standard Bus (45 Seater)', seats: 45, perKm: 60, perKmWithTax: 70, permitKey: 'bus45', category: 'Standard', ac: false, features: ['Non-AC', 'Large Capacity', 'Economical'] },
  { id: 30, name: 'Volvo Bus (45 Seater)', seats: 45, perKm: 90, perKmWithTax: 105, permitKey: 'bus45', category: 'Premium', ac: true, features: ['AC', 'Luxury', 'Comfort'] },
  { id: 31, name: 'Scania Bus (45 Seater)', seats: 45, perKm: 95, perKmWithTax: 112, permitKey: 'bus45', category: 'Premium', ac: true, features: ['AC', 'Premium', 'Luxury'] },
  { id: 32, name: 'Sleeper Bus (45 Seater)', seats: 45, perKm: 100, perKmWithTax: 118, permitKey: 'bus45', category: 'Luxury', ac: true, features: ['Sleeper', 'AC', 'Premium Comfort'] },
  { id: 33, name: 'Volvo Multi-Axle (53 Seater)', seats: 53, perKm: 110, perKmWithTax: 128, permitKey: 'bus53', category: 'Premium', ac: true, features: ['Multi-Axle', 'AC', 'Luxury'] },
  { id: 34, name: 'Scania Multi-Axle (53 Seater)', seats: 53, perKm: 115, perKmWithTax: 135, permitKey: 'bus53', category: 'Premium', ac: true, features: ['Multi-Axle', 'AC', 'Premium'] },
  { id: 35, name: 'Luxury Sleeper (53 Seater)', seats: 53, perKm: 125, perKmWithTax: 148, permitKey: 'bus53', category: 'Luxury', ac: true, features: ['Sleeper', 'AC', 'Ultra Luxury'] },
  { id: 36, name: 'Double Decker Bus (65 Seater)', seats: 65, perKm: 140, perKmWithTax: 165, permitKey: 'bus53', category: 'Premium', ac: true, features: ['Double Decker', 'AC', 'Premium'] },
  { id: 37, name: 'School Bus (40 Seater)', seats: 40, perKm: 40, perKmWithTax: 47, permitKey: 'bus35', category: 'Standard', ac: false, features: ['Non-AC', 'Safe', 'Durable'] },
  { id: 38, name: 'Tourist Bus (30 Seater)', seats: 30, perKm: 55, perKmWithTax: 65, permitKey: 'minibus27', category: 'Luxury', ac: true, features: ['AC', 'Tourist Friendly', 'Comfort'] },
  { id: 39, name: 'Party Bus (25 Seater)', seats: 25, perKm: 80, perKmWithTax: 94, permitKey: 'minibus27', category: 'Luxury', ac: true, features: ['Music System', 'AC', 'Party Lights'] },
  { id: 40, name: 'VIP Coach (20 Seater)', seats: 20, perKm: 75, perKmWithTax: 88, permitKey: 'minibus21', category: 'Luxury', ac: true, features: ['VIP', 'AC', 'Executive'] },
];

// All states data for detection
const allStates = {
  kerala: ['kerala', 'kochi', 'trivandrum', 'thiruvananthapuram', 'calicut', 'kozhikode', 'munnar', 'wayanad', 'alleppey', 'alappuzha', 'kannur', 'thrissur', 'kollam', 'palakkad'],
  tamilnadu: ['tamil nadu', 'chennai', 'coimbatore', 'madurai', 'salem', 'tiruchirappalli', 'tiruppur', 'vellore', 'erode', 'thoothukudi', 'tirunelveli', 'kanchipuram', 'ooty', 'udagamandalam', 'kodaikanal'],
  andhrapradesh: ['andhra pradesh', 'hyderabad', 'visakhapatnam', 'vizag', 'vijayawada', 'guntur', 'nellore', 'kurnool', 'tirupati', 'kadapa', 'anantapur', 'chittoor'],
  karnataka: ['karnataka', 'bangalore', 'bengaluru', 'mysore', 'mysuru', 'mangalore', 'mangaluru', 'hubli', 'dharwad', 'belgaum', 'bellary', 'gulbarga', 'shimoga', 'tumkur'],
  maharashtra: ['maharashtra', 'mumbai', 'pune', 'nagpur', 'thane', 'nashik', 'aurangabad', 'solapur', 'kolhapur', 'amravati', 'nanded', 'ratnagiri'],
  goa: ['goa', 'panaji', 'panjim', 'margao', 'vasco da gama', 'mapusa', 'ponda'],
  rajasthan: ['rajasthan', 'jaipur', 'jodhpur', 'udaipur', 'kota', 'bikaner', 'ajmer', 'bhilwara', 'alwar', 'bharatpur', 'sikar', 'jaisalmer'],
  delhi: ['delhi', 'new delhi', 'noida', 'gurgaon', 'gurugram', 'faridabad', 'ghaziabad'],
  westbengal: ['west bengal', 'kolkata', 'howrah', 'asansol', 'siliguri', 'durgapur', 'bardhaman', 'malda'],
  gujarat: ['gujarat', 'ahmedabad', 'surat', 'vadodara', 'rajkot', 'bhavnagar', 'jamnagar', 'gandhinagar'],
  punjab: ['punjab', 'chandigarh', 'ludhiana', 'amritsar', 'jalandhar', 'patiala', 'bathinda'],
  haryana: ['haryana', 'chandigarh', 'faridabad', 'gurgaon', 'panipat', 'ambala', 'yamunanagar'],
  madhyapradesh: ['madhya pradesh', 'bhopal', 'indore', 'gwalior', 'jabalpur', 'ujjain', 'sagar'],
  uttarpradesh: ['uttar pradesh', 'lucknow', 'kanpur', 'varanasi', 'agra', 'meerut', 'allahabad', 'prayagraj', 'ghaziabad', 'noida'],
  bihar: ['bihar', 'patna', 'gaya', 'bhagalpur', 'muzaffarpur', 'purnia', 'darbhanga'],
  odisha: ['odisha', 'bhubaneswar', 'cuttack', 'rourkela', 'berhampur', 'sambalpur', 'puri'],
  assam: ['assam', 'guwahati', 'silchar', 'dibrugarh', 'jorhat', 'nagaon', 'tezpur'],
};

// Detect state from location
function detectState(location: string): string | null {
  if (!location) return null;
  const loc = location.toLowerCase();
  
  for (const [stateKey, keywords] of Object.entries(allStates)) {
    if (keywords.some(keyword => loc.includes(keyword))) {
      return stateKey;
    }
  }
  return null;
}

// Famous places for each state
const famousPlacesByState: Record<string, string[]> = {
  kerala: ['Munnar Tea Gardens', 'Alleppey Backwaters', 'Wayanad Wildlife', 'Fort Kochi', 'Kumarakom', 'Thekkady', 'Varkala Beach', 'Bekal Fort'],
  tamilnadu: ['Ooty Hill Station', 'Kodaikanal Lake', 'Rameshwaram Temple', 'Kanyakumari Sunrise', 'Mahabalipuram', 'Meenakshi Temple', 'Courtallam Waterfalls'],
  andhrapradesh: ['Tirupati Temple', 'Araku Valley', 'Vizag Beach', 'Srisailam', 'Lepakshi Temple', 'Gandikota Canyon', 'Borra Caves'],
  karnataka: ['Mysore Palace', 'Coorg Coffee Plantations', 'Hampi Ruins', 'Gokarna Beaches', 'Jog Falls', 'Bandipur National Park', 'Bangalore Palace'],
  maharashtra: ['Gateway of India', 'Ajanta Ellora Caves', 'Mahabaleshwar', 'Lonavala Hills', 'Elephanta Caves', 'Shaniwar Wada', 'Sinhagad Fort'],
  goa: ['Baga Beach', 'Calangute Beach', 'Fort Aguada', 'Dudhsagar Falls', 'Old Goa Churches', 'Anjuna Flea Market', 'Palolem Beach'],
  rajasthan: ['Jaipur Amber Fort', 'Udaipur Lake Palace', 'Jaisalmer Fort', 'Jodhpur Mehrangarh', 'Pushkar Lake', 'Ranthambore Safari', 'Chittorgarh Fort'],
  delhi: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple', 'Humayun Tomb', 'Akshardham', 'Chandni Chowk'],
  westbengal: ['Victoria Memorial', 'Howrah Bridge', 'Sundarbans', 'Darjeeling Tea Gardens', 'Kalighat Temple', 'Dakshineswar', 'Shantiniketan'],
  gujarat: ['Statue of Unity', 'Rann of Kutch', 'Sabarmati Ashram', 'Somnath Temple', 'Gir National Park', 'Dwarka Temple', 'Pavagadh'],
  punjab: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh', 'Rock Garden', 'Anandpur Sahib', 'Bhatinda Fort'],
  madhyapradesh: ['Khajuraho Temples', 'Sanchi Stupa', 'Bandhavgarh National Park', 'Pachmarhi', 'Orchha', 'Bhimbetka Caves'],
  uttarpradesh: ['Taj Mahal', 'Varanasi Ghats', 'Lucknow Residency', 'Allahabad Sangam', 'Mathura Vrindavan', 'Ayodhya Temple'],
};

interface VehiclePageProps {
  vehicleType?: 'cars' | 'buses';
}

// Vehicle Page Component
export function VehiclePage({ vehicleType = 'cars' }: VehiclePageProps) {
  const vehicles = vehicleType === 'cars' ? vehiclesCars : vehiclesBuses;
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [km, setKm] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [famousPlaces, setFamousPlaces] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [permitRequired, setPermitRequired] = useState<string | null>(null);
  const [showPermitInfo, setShowPermitInfo] = useState(false);
  const [statePermitCharges, setStatePermitCharges] = useState<Record<string, number>>({});

  const ITEMS_PER_PAGE = 10;
  const MINIMUM_KM_PER_DAY = 300;
  const DRIVER_BATA_PER_DAY = 800;

  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  useEffect(() => {
    if (!from || !to || from.length < 3 || to.length < 3) {
      setDistance(null);
      setFamousPlaces([]);
      setSelectedPlace(null);
      setPermitRequired(null);
      return;
    }

    // Detect if cross-state travel
    const fromState = detectState(from);
    const toState = detectState(to);
    
    if (toState && fromState !== toState) {
      setPermitRequired(toState);
    } else {
      setPermitRequired(null);
    }

    const timer = setTimeout(() => {
      setLoading(true);
      // Simulate API call for distance calculation
      setTimeout(() => {
        // Mock distance calculation based on common routes
        let mockDistance = 250;
        if (to.toLowerCase().includes('kerala')) mockDistance = 600;
        if (to.toLowerCase().includes('goa')) mockDistance = 550;
        if (to.toLowerCase().includes('rajasthan')) mockDistance = 800;
        if (to.toLowerCase().includes('tamil')) mockDistance = 350;
        
        setDistance(mockDistance);
        if (!km) setKm(mockDistance.toString());
        
        // Set famous places based on destination
        const destState = detectState(to);
        if (destState && famousPlacesByState[destState]) {
          setFamousPlaces(famousPlacesByState[destState]);
        } else {
          setFamousPlaces(['Popular Destination', 'Tourist Spot', 'Local Attraction', 'Cultural Site']);
        }
        
        setLoading(false);
      }, 800);
    }, 1000);

    return () => clearTimeout(timer);
  }, [from, to, km]);

  const finalKm = Number(km || distance || 0);
  const numberOfDays = Math.ceil(finalKm / MINIMUM_KM_PER_DAY);
  const minimumKmCharge = numberOfDays * MINIMUM_KM_PER_DAY;
  const driverBataTotal = numberOfDays * DRIVER_BATA_PER_DAY;

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    const extraKm = 40;
    const newKm = (finalKm || distance || 0) + extraKm;
    setKm(newKm.toString());
  };

  const totalPages = Math.ceil(vehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVehicles = vehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getPermitCharge = (permitKey: string) => {
    if (!permitRequired) return 0;
    const statePermit = statePermits[permitRequired as keyof typeof statePermits];
    if (!statePermit) return 0;
    
    const charges = statePermit.vehicles[permitKey as keyof typeof statePermits.kerala.vehicles];
    return charges || 0;
  };

  const getStateName = (stateKey: string) => {
    return statePermits[stateKey as keyof typeof statePermits]?.name || stateKey.charAt(0).toUpperCase() + stateKey.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-8 md:mb-12">
          {vehicleType === 'cars' ? 'Cars & Tempo Traveller Fleet' : 'Buses & Mini Buses Fleet'}
        </h1>

        {/* AI Planner */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 mb-8 md:mb-12 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3 md:gap-4">
            <SparklesIcon className="h-8 w-8 md:h-12 md:w-12 animate-pulse" />
            Plan Your {vehicleType === 'buses' ? 'Group ' : ''}Trip with AI
            <SparklesIcon className="h-8 w-8 md:h-12 md:w-12 animate-pulse" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end">
            <div className="space-y-2 md:space-y-3">
              <label className="flex items-center gap-2 text-base md:text-lg font-medium">
                <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
                Pickup Location
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Bangalore, Chennai, Mumbai"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-2 md:focus:ring-4 focus:ring-yellow-300 focus:outline-none text-base md:text-lg transition-all"
              />
            </div>

            <div className="hidden md:flex justify-center items-center">
              <ArrowRightIcon className="h-12 w-12 md:h-16 md:w-16 text-yellow-300 animate-pulse" />
            </div>
            <div className="md:hidden flex justify-center items-center py-2">
              <ArrowRightIcon className="h-10 w-10 text-yellow-300 rotate-90 animate-pulse" />
            </div>

            <div className="space-y-2 md:space-y-3">
              <label className="flex items-center gap-2 text-base md:text-lg font-medium">
                <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-green-300" />
                Destination
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Kerala, Goa, Rajasthan"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:ring-2 md:focus:ring-4 focus:ring-green-300 focus:outline-none text-base md:text-lg transition-all"
              />
            </div>
          </div>

          {loading && (
            <div className="mt-6 md:mt-8 text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse delay-150"></div>
                <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
                <p className="text-lg md:text-xl">Calculating route and charges...</p>
              </div>
            </div>
          )}

          {distance && (
            <>
              <div className="mt-6 md:mt-10 bg-white/20 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 text-center border border-white/40">
                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                  Trip: <span className="text-yellow-300">{from || 'Your Location'}</span> → <span className="text-green-300">{to || 'Destination'}</span>
                </p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2 md:mt-4 text-yellow-300">
                  {distance} KM
                </p>
                <p className="text-sm md:text-base mt-2 opacity-90">
                  Estimated {numberOfDays} day{numberOfDays > 1 ? 's' : ''} trip
                </p>
                <p className="text-xs md:text-sm mt-1 opacity-70">
                  Minimum {MINIMUM_KM_PER_DAY} KM per day applies
                </p>
              </div>

              {/* Permit Notice */}
              {permitRequired && (
                <div className="mt-4 md:mt-6 bg-amber-500/20 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-amber-400">
                  <div className="flex items-start gap-3 md:gap-4">
                    <InformationCircleIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-300 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-amber-100">
                        Interstate Travel to {getStateName(permitRequired)}
                      </h3>
                      <p className="text-sm md:text-base text-white mb-2 md:mb-3">
                        Temporary permit charges apply for {getStateName(permitRequired)} state entry. 
                        These charges are mandatory for commercial vehicles.
                      </p>
                      <button
                        onClick={() => setShowPermitInfo(!showPermitInfo)}
                        className="bg-white/30 hover:bg-white/40 px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300"
                      >
                        {showPermitInfo ? 'Hide' : 'View'} Permit Details
                      </button>
                    </div>
                  </div>
                  
                  {showPermitInfo && permitRequired && statePermits[permitRequired as keyof typeof statePermits] && (
                    <div className="mt-4 p-4 bg-black/20 rounded-lg border border-amber-300/30">
                      <h4 className="font-bold text-amber-200 mb-2">Permit Charges for {getStateName(permitRequired)}:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.entries(statePermits[permitRequired as keyof typeof statePermits].vehicles).map(([key, value]) => (
                          <div key={key} className="bg-amber-900/30 p-2 rounded">
                            <p className="text-xs md:text-sm font-medium text-amber-100 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
                            <p className="text-sm md:text-base font-bold text-white">₹{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {famousPlaces.length > 0 && (
            <div className="mt-6 md:mt-10">
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 md:mb-6">Famous Places Near {to || 'Destination'}:</p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {famousPlaces.slice(0, 4).map((place) => (
                  <button
                    key={place}
                    onClick={() => handlePlaceClick(place)}
                    className={`px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all transform hover:scale-105 active:scale-95 hover:shadow-lg ${
                      selectedPlace === place
                        ? 'bg-green-400 text-white ring-4 ring-green-300'
                        : 'bg-white/30 backdrop-blur text-white hover:bg-white/40 border border-white/50'
                    }`}
                  >
                    {place} (+40 KM)
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Charges Info */}
        {finalKm > 0 && (
          <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
              <InformationCircleIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              Additional Charges & Terms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-blue-50 p-4 rounded-lg md:rounded-xl border border-blue-100">
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Minimum KM per Day</p>
                <p className="text-xl md:text-2xl font-bold text-blue-600">{MINIMUM_KM_PER_DAY} KM</p>
                <p className="text-xs text-gray-500 mt-1 md:mt-2">
                  For {numberOfDays} day{numberOfDays > 1 ? 's' : ''}: {minimumKmCharge} KM minimum
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg md:rounded-xl border border-green-100">
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Driver Allowance</p>
                <p className="text-xl md:text-2xl font-bold text-green-600">₹{DRIVER_BATA_PER_DAY}/day</p>
                <p className="text-xs text-gray-500 mt-1 md:mt-2">
                  Total: ₹{formatPrice(driverBataTotal)} for {numberOfDays} day{numberOfDays > 1 ? 's' : ''}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg md:rounded-xl border border-purple-100">
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Driver Duty Hours</p>
                <p className="text-xl md:text-2xl font-bold text-purple-600">6 AM - 9 PM</p>
                <p className="text-xs text-gray-500 mt-1 md:mt-2">
                  Extra hours: +₹{DRIVER_BATA_PER_DAY} per driver
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg md:rounded-xl border border-amber-100">
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">Night Charges</p>
                <p className="text-xl md:text-2xl font-bold text-amber-600">₹500/night</p>
                <p className="text-xs text-gray-500 mt-1 md:mt-2">
                  Applicable if driver stays overnight
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-yellow-50 rounded-lg md:rounded-xl border-2 border-yellow-200">
              <p className="text-sm md:text-base font-semibold text-gray-800">
                <span className="text-yellow-700">⚠️ Note:</span> Toll charges, parking fees, and state taxes are additional and borne by the customer. Prices may vary based on season and availability.
              </p>
            </div>
          </div>
        )}

        {/* Vehicle Count and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-3">
          <div className="text-lg md:text-xl font-bold text-gray-800">
            Showing {currentVehicles.length} of {vehicles.length} Vehicles
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {currentVehicles.map((v) => {
            const kmToCharge = Math.max(finalKm, minimumKmCharge);
            const baseExcl = v.perKm * kmToCharge;
            const baseIncl = v.perKmWithTax * kmToCharge;
            const permitCharge = getPermitCharge(v.permitKey);
            
            const totalExcl = baseExcl + driverBataTotal + permitCharge;
            const totalIncl = baseIncl + driverBataTotal + permitCharge;

            return (
              <div
                key={v.id}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 group border border-gray-100"
              >
                <div className="h-48 md:h-56 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden flex items-center justify-center">
                  <div className="text-white text-center z-10 p-4">
                    <p className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">{v.seats}</p>
                    <p className="text-lg md:text-xl">Seater</p>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${v.ac ? 'bg-green-500' : 'bg-gray-600'}`}>
                        {v.ac ? 'AC' : 'Non-AC'}
                      </span>
                      <span className="ml-2 px-2 py-1 bg-purple-500 rounded-full text-xs font-semibold">
                        {v.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">{v.name}</h3>

                  <div className="space-y-2 text-sm mb-4 md:mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rate (Excl. Tax):</span>
                      <span className="font-semibold text-gray-800">₹{v.perKm}/km</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Rate (Incl. Tax):</span>
                      <span className="font-bold text-green-600 text-base md:text-lg">₹{v.perKmWithTax}/km</span>
                    </div>
                    {v.features && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {v.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-4 md:mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter Distance (KM):</label>
                    <input
                      type="number"
                      value={km}
                      onChange={(e) => setKm(e.target.value)}
                      placeholder={distance?.toString() || 'Enter KM'}
                      min="1"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-600 transition text-center font-semibold text-gray-800"
                    />
                  </div>

                  {finalKm > 0 && (
                    <div className="mt-4 md:mt-5 p-4 md:p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg md:rounded-xl border-2 border-purple-200">
                      <div className="space-y-3 md:space-y-4">
                        <div className="text-center pb-3 border-b border-purple-100">
                          <p className="text-xs text-gray-600 mb-1">Base Fare (Incl. Tax)</p>
                          <p className="text-lg md:text-xl font-bold text-gray-800">₹{formatPrice(baseIncl)}</p>
                          <p className="text-xs text-gray-500">for {kmToCharge} KM</p>
                        </div>
                        
                        {permitCharge > 0 && permitRequired && (
                          <div className="text-center pb-3 border-b border-amber-100">
                            <p className="text-xs text-gray-600 mb-1">
                              State Permit ({getStateName(permitRequired)})
                            </p>
                            <p className="text-base md:text-lg font-bold text-amber-600">₹{formatPrice(permitCharge)}</p>
                          </div>
                        )}
                        
                        <div className="text-center pb-3 border-b border-blue-100">
                          <p className="text-xs text-gray-600 mb-1">
                            Driver Allowance ({numberOfDays} day{numberOfDays > 1 ? 's' : ''})
                          </p>
                          <p className="text-base md:text-lg font-bold text-blue-600">₹{formatPrice(driverBataTotal)}</p>
                        </div>
                        
                        <div className="text-center pt-2">
                          <p className="text-xs text-gray-600 mb-1">Total Estimated Cost</p>
                          <p className="text-2xl md:text-3xl font-extrabold text-green-600">₹{formatPrice(totalIncl)}</p>
                          <p className="text-xs text-gray-500 mt-1">(Including all charges)</p>
                        </div>
                        
                        {selectedPlace && (
                          <p className="text-sm text-purple-700 text-center font-medium bg-purple-50 p-2 rounded-md">
                            ✅ Includes visit to {selectedPlace}
                          </p>
                        )}
                        
                        <p className="text-xs text-gray-500 text-center mt-3">
                          + Toll, Parking & State Taxes (actual)
                        </p>
                        
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 md:py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-2">
                          Book This Vehicle
                        </button>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="text-sm md:text-base text-gray-600">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, vehicles.length)} of {vehicles.length} vehicles
            </div>
            
            <div className="flex items-center gap-3 md:gap-6">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-3 md:p-4 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                aria-label="Previous page"
              >
                <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <span className="text-lg md:text-xl font-bold text-purple-700 mx-2">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-3 md:p-4 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                aria-label="Next page"
              >
                <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-800 text-white py-12 md:py-16 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {vehicleType === 'cars' ? 'Book Your Comfort Ride Now!' : 'Ready to Travel With Your Group?'}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
              Call or WhatsApp:{' '}
              <span className="font-bold text-yellow-300 text-2xl md:text-3xl lg:text-4xl">+91 98765 43210</span>
            </p>
            <p className="text-base md:text-lg lg:text-xl mt-4 opacity-90">24×7 Instant Booking • All India Service</p>
            <p className="text-sm md:text-base mt-2 opacity-70">Email: booking@manikantatravels.com</p>
            
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all hover:scale-105 shadow-lg"
              >
                📱 WhatsApp Instant Quote
              </a>
              <a 
                href="tel:+919876543210" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all hover:scale-105 shadow-lg"
              >
                📞 Call Now for Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}