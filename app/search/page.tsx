// app/search/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Filter, MapPin, Car, Bus, Users, Clock, Star } from 'lucide-react';
import Link from 'next/link';

// Sample search results data (replace with actual data from your API)
const searchResults = [
  {
    id: 1,
    title: 'Innova Crysta',
    category: 'Car',
    seats: 7,
    price: 'â‚¹17/km',
    rating: 4.5,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270413/innova_crysta_ehwsj7.jpg',
    link: '/transportation/cars',
    badge: 'Popular'
  },
  {
    id: 2,
    title: 'Tempo Traveller',
    category: 'Tempo',
    seats: 12,
    price: 'â‚¹20/km',
    rating: 4.3,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767269077/WhatsApp_Image_2026-01-01_at_17.29.35_2_nl5pi5.jpg',
    link: '/transportation/cars',
    badge: 'Group Choice'
  },
  {
    id: 3,
    title: 'Volvo Multi-Axle',
    category: 'Bus',
    seats: 25,
    price: 'â‚¹40/km',
    rating: 4.8,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271756/multi_1_o7uex6.jpg',
    link: '/transportation/buses',
    badge: 'Luxury'
  },
  {
    id: 4,
    title: 'Sedan (Dzire/Etios)',
    category: 'Car',
    seats: 4,
    price: 'â‚¹13/km',
    rating: 4.2,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270643/swift_dzire_qnnioo.jpg',
    link: '/transportation/cars',
    badge: 'Economical'
  },
  {
    id: 5,
    title: 'Luxury Sleeper Bus',
    category: 'Bus',
    seats: 35,
    price: 'â‚¹45/km',
    rating: 4.7,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767271097/WhatsApp_Image_2026-01-01_at_18.07.20_1_ha9vxx.jpg',
    link: '/transportation/buses',
    badge: 'Night Travel'
  },
  {
    id: 6,
    title: 'XUV 700',
    category: 'SUV',
    seats: 7,
    price: 'â‚¹20/km',
    rating: 4.6,
    image: 'https://res.cloudinary.com/dzoxwk1jc/image/upload/v1767270526/ertiga_iap3pi.jpg',
    link: '/transportation/cars',
    badge: 'Luxury'
  }
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(searchResults);
  const [isSearching, setIsSearching] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults(searchResults);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = searchResults.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredResults = results.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'car') return item.category === 'Car' || item.category === 'SUV';
    if (filter === 'bus') return item.category === 'Bus';
    if (filter === 'tempo') return item.category === 'Tempo';
    return true;
  });

  const categories = [
    { id: 'all', label: 'All', icon: <SearchIcon className="h-4 w-4" /> },
    { id: 'car', label: 'Cars', icon: <Car className="h-4 w-4" /> },
    { id: 'tempo', label: 'Tempo', icon: <Users className="h-4 w-4" /> },
    { id: 'bus', label: 'Buses', icon: <Bus className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
              <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider">FIND YOUR RIDE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              Search <span className="text-gray-300">Vehicles</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
              Find the perfect vehicle for your journey across South India.
            </p>
          </div>

          {/* Search Bar - Responsive */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by vehicle name or type..."
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 bg-white text-black rounded-xl border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black transition placeholder:text-gray-400 text-sm sm:text-base"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-black transition" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        
        {/* Results Count and Filters - Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            {isSearching ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></span>
                Searching...
              </span>
            ) : (
              `${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} found`
            )}
          </p>
          
          {/* Category Filters - Responsive */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                  filter === cat.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid - Responsive */}
        {filteredResults.length === 0 ? (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-4 sm:mb-6">
              <SearchIcon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">No Results Found</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We couldn't find any vehicles matching your search. Try adjusting your search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredResults.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-black overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black text-xs sm:text-sm font-bold rounded-lg">
                      {item.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-gray-700 transition">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 fill-gray-400" />
                      <span className="text-sm font-semibold text-black">{item.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {item.seats} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                    <span className="text-xs sm:text-sm font-medium text-black group-hover:text-gray-700 transition">
                      View Details â†’
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
