// lib/data/packages.ts

export interface TourPackage {
  id: number;
  name: string;
  description: string;
  duration: number; // in days
  pricePerPerson: number;
  discountPrice?: number;
  category: 'Cultural' | 'Adventure' | 'Spiritual' | 'Beach' | 'Wildlife' | 'Luxury' | 'Budget';
  location: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  inclusions: string[];
  exclusions: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: 'Solo' | 'Small' | 'Medium' | 'Large';
  featured: boolean;
  bestseller: boolean;
  imageUrl: string;
  alt: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  highlights: string[];
  departureDates: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: 101,
    name: 'Golden Triangle Tour',
    description: 'Experience India\'s rich heritage with Delhi, Agra, and Jaipur. Visit iconic landmarks including the Taj Mahal.',
    duration: 6,
    pricePerPerson: 29999,
    discountPrice: 25999,
    category: 'Cultural',
    location: 'Delhi, Agra, Jaipur',
    rating: 4.8,
    reviewCount: 342,
    tags: ['Heritage', 'UNESCO', 'Historical', 'Family'],
    inclusions: [
      '5 Nights Accommodation',
      'Daily Breakfast',
      'AC Vehicle with Driver',
      'All Entrance Fees',
      'Local Guide Services'
    ],
    exclusions: [
      'International Flights',
      'Personal Expenses',
      'Travel Insurance',
      'Visa Fees'
    ],
    difficulty: 'Easy',
    groupSize: 'Medium',
    featured: true,
    bestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200',
    alt: 'Taj Mahal at sunrise',
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Arrive at Delhi airport, transfer to hotel. Evening at leisure.' },
      { day: 2, title: 'Delhi Sightseeing', description: 'Visit Red Fort, Qutub Minar, India Gate, and Humayun\'s Tomb.' },
      { day: 3, title: 'Delhi to Agra', description: 'Drive to Agra. Visit Agra Fort and Mehtab Bagh for sunset view of Taj Mahal.' },
      { day: 4, title: 'Taj Mahal & Fatehpur Sikri', description: 'Sunrise visit to Taj Mahal. Later visit Fatehpur Sikri.' },
      { day: 5, title: 'Agra to Jaipur', description: 'Drive to Jaipur via Fatehpur Sikri. Evening visit to local markets.' },
      { day: 6, title: 'Jaipur Exploration', description: 'Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar.' }
    ],
    highlights: [
      'Sunrise visit to Taj Mahal',
      'Elephant ride at Amber Fort',
      'Heritage walk in Delhi',
      'Sound & Light show at Red Fort'
    ],
    departureDates: ['2024-03-15', '2024-03-22', '2024-03-29', '2024-04-05']
  },
  {
    id: 102,
    name: 'Kerala Backwaters Luxury',
    description: 'Cruise through serene backwaters on a traditional houseboat. Experience authentic Kerala culture and cuisine.',
    duration: 7,
    pricePerPerson: 42999,
    discountPrice: 38999,
    category: 'Luxury',
    location: 'Kochi, Alleppey, Munnar',
    rating: 4.9,
    reviewCount: 215,
    tags: ['Houseboat', 'Ayurveda', 'Nature', 'Romantic'],
    inclusions: [
      '6 Nights Luxury Accommodation',
      'All Meals on Houseboat',
      'Private Houseboat for 2 Nights',
      'Ayurvedic Spa Session',
      'Kathakali Dance Performance'
    ],
    exclusions: [
      'Airfare',
      'Alcohol Beverages',
      'Personal Shopping',
      'Additional Activities'
    ],
    difficulty: 'Easy',
    groupSize: 'Small',
    featured: true,
    bestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1593693399748-4c87e96b914e?auto=format&fit=crop&w=1200',
    alt: 'Kerala backwaters houseboat',
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', description: 'Arrive in Kochi. Evening visit to Fort Kochi and Chinese Fishing Nets.' },
      { day: 2, title: 'Kochi to Munnar', description: 'Drive to Munnar. Visit tea plantations and tea museum.' },
      { day: 3, title: 'Munnar Exploration', description: 'Full day exploring Eravikulam National Park and waterfalls.' },
      { day: 4, title: 'Munnar to Thekkady', description: 'Drive to Thekkady. Evening spice plantation tour.' },
      { day: 5, title: 'Thekkady to Alleppey', description: 'Drive to Alleppey. Board private houseboat.' },
      { day: 6, title: 'Backwaters Cruise', description: 'Full day cruise through backwaters. Village visit.' },
      { day: 7, title: 'Departure', description: 'Disembark houseboat. Transfer to Kochi airport.' }
    ],
    highlights: [
      'Private houseboat with chef',
      'Traditional Kathakali performance',
      'Tea plantation walk',
      'Ayurvedic massage'
    ],
    departureDates: ['2024-03-10', '2024-03-17', '2024-03-24', '2024-04-07']
  },
  {
    id: 103,
    name: 'Ladakh Adventure Trek',
    description: 'High-altitude adventure through stunning landscapes, monasteries, and mountain passes.',
    duration: 10,
    pricePerPerson: 54999,
    discountPrice: 49999,
    category: 'Adventure',
    location: 'Leh, Nubra Valley, Pangong Lake',
    rating: 4.7,
    reviewCount: 187,
    tags: ['Trekking', 'Mountains', 'Buddhist', 'Photography'],
    inclusions: [
      '9 Nights Accommodation',
      'All Meals',
      'Oxygen Cylinders',
      'Trekking Guide & Porter',
      'Camping Equipment'
    ],
    exclusions: [
      'Flight to Leh',
      'Personal Trekking Gear',
      'Medical Insurance',
      'Permit Fees'
    ],
    difficulty: 'Challenging',
    groupSize: 'Small',
    featured: true,
    bestseller: false,
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200',
    alt: 'Ladakh mountain landscape',
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Acclimatization day. Rest and light local sightseeing.' },
      { day: 2, title: 'Leh Monasteries', description: 'Visit Thiksey, Hemis, and Shey monasteries.' },
      { day: 3, title: 'Leh to Nubra Valley', description: 'Cross Khardung La pass. Visit Diskit monastery and sand dunes.' },
      { day: 4, title: 'Nubra Valley', description: 'Camel safari in Hunder. Visit Panamik hot springs.' },
      { day: 5, title: 'Nubra to Pangong', description: 'Drive to Pangong Lake via Shyok Valley.' },
      { day: 6, title: 'Pangong Lake', description: 'Full day at Pangong Lake. Photography and exploration.' },
      { day: 7, title: 'Pangong to Tso Moriri', description: 'Drive to Tso Moriri Lake via Chumathang.' },
      { day: 8, title: 'Tso Moriri to Leh', description: 'Return to Leh. Evening at leisure.' },
      { day: 9, title: 'Leh Exploration', description: 'Visit Leh Palace, Shanti Stupa, and local markets.' },
      { day: 10, title: 'Departure', description: 'Transfer to Leh airport for departure.' }
    ],
    highlights: [
      'Cross Khardung La - world\'s highest motorable road',
      'Camel safari in Nubra Valley',
      'Stargazing at Pangong Lake',
      'Visit ancient Buddhist monasteries'
    ],
    departureDates: ['2024-06-15', '2024-06-22', '2024-07-06', '2024-07-20']
  },
  {
    id: 104,
    name: 'Rajasthan Desert Safari',
    description: 'Experience royal Rajasthan with desert safari, palace stays, and cultural performances.',
    duration: 8,
    pricePerPerson: 37999,
    discountPrice: 34999,
    category: 'Cultural',
    location: 'Jaipur, Jaisalmer, Jodhpur',
    rating: 4.6,
    reviewCount: 156,
    tags: ['Desert', 'Palaces', 'Cultural', 'Photography'],
    inclusions: [
      '7 Nights Heritage Hotel Stay',
      'All Breakfast & 3 Dinners',
      'Camel Safari in Thar Desert',
      'Cultural Performances',
      'All Entrance Fees'
    ],
    exclusions: [
      'Airfare',
      'Lunches',
      'Shopping',
      'Optional Activities'
    ],
    difficulty: 'Moderate',
    groupSize: 'Medium',
    featured: false,
    bestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Rajasthan desert with camel',
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', description: 'Arrive in Jaipur. Transfer to heritage hotel.' },
      { day: 2, title: 'Jaipur Sightseeing', description: 'Visit Amber Fort, City Palace, and Hawa Mahal.' },
      { day: 3, title: 'Jaipur to Jodhpur', description: 'Drive to Jodhpur. Visit Mehrangarh Fort and Jaswant Thada.' },
      { day: 4, title: 'Jodhpur to Jaisalmer', description: 'Drive to Jaisalmer. Evening visit to Gadisar Lake.' },
      { day: 5, title: 'Jaisalmer Exploration', description: 'Visit Jaisalmer Fort, Patwon Ki Haveli, and local markets.' },
      { day: 6, title: 'Desert Safari', description: 'Camel safari to Sam Sand Dunes. Overnight desert camp.' },
      { day: 7, title: 'Desert to Jaisalmer', description: 'Morning in desert. Return to Jaisalmer for cultural show.' },
      { day: 8, title: 'Departure', description: 'Transfer to Jodhpur airport for departure.' }
    ],
    highlights: [
      'Overnight desert camp with bonfire',
      'Folk music and dance performance',
      'Stay in heritage palaces',
      'Visit "Blue City" Jodhpur'
    ],
    departureDates: ['2024-10-05', '2024-10-12', '2024-10-19', '2024-11-02']
  },
  {
    id: 105,
    name: 'Goa Beach Holiday',
    description: 'Perfect beach getaway with water sports, Portuguese heritage, and vibrant nightlife.',
    duration: 5,
    pricePerPerson: 19999,
    discountPrice: 16999,
    category: 'Beach',
    location: 'North Goa, South Goa',
    rating: 4.5,
    reviewCount: 289,
    tags: ['Beach', 'Nightlife', 'Water Sports', 'Relaxation'],
    inclusions: [
      '4 Nights Beach Resort Stay',
      'Daily Breakfast',
      'Water Sports Package',
      'Sunset Cruise',
      'Airport Transfers'
    ],
    exclusions: [
      'Airfare',
      'Lunches & Dinners',
      'Alcohol',
      'Personal Activities'
    ],
    difficulty: 'Easy',
    groupSize: 'Large',
    featured: false,
    bestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200',
    alt: 'Goa beach with palm trees',
    itinerary: [
      { day: 1, title: 'Arrival in Goa', description: 'Arrive at Goa airport. Transfer to beach resort.' },
      { day: 2, title: 'North Goa Beaches', description: 'Visit Calangute, Baga, and Anjuna beaches.' },
      { day: 3, title: 'Water Sports & Heritage', description: 'Morning water sports. Afternoon visit Old Goa churches.' },
      { day: 4, title: 'South Goa Relaxation', description: 'Relax at Palolem beach. Evening sunset cruise.' },
      { day: 5, title: 'Departure', description: 'Free time for shopping. Transfer to airport.' }
    ],
    highlights: [
      'Jet skiing and parasailing',
      'Portuguese heritage tour',
      'Dolphin watching cruise',
      'Beach shack dining experience'
    ],
    departureDates: ['2024-01-12', '2024-01-19', '2024-01-26', '2024-02-02']
  },
  {
    id: 106,
    name: 'Ranthambore Tiger Safari',
    description: 'Wildlife adventure with tiger spotting, bird watching, and nature photography.',
    duration: 4,
    pricePerPerson: 24999,
    discountPrice: 21999,
    category: 'Wildlife',
    location: 'Ranthambore National Park',
    rating: 4.8,
    reviewCount: 134,
    tags: ['Wildlife', 'Safari', 'Photography', 'Nature'],
    inclusions: [
      '3 Nights Jungle Lodge Stay',
      'All Meals',
      '6 Safari Rides',
      'Naturalist Guide',
      'Park Entry Fees'
    ],
    exclusions: [
      'Airfare',
      'Camera Fees',
      'Tips',
      'Personal Expenses'
    ],
    difficulty: 'Easy',
    groupSize: 'Small',
    featured: true,
    bestseller: false,
    imageUrl: 'https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?auto=format&fit=crop&w=1200',
    alt: 'Tiger in Ranthambore',
    itinerary: [
      { day: 1, title: 'Arrival in Ranthambore', description: 'Arrive and transfer to jungle lodge. Evening safari.' },
      { day: 2, title: 'Full Day Safari', description: 'Morning and evening safaris in different zones.' },
      { day: 3, title: 'Ranthambore Exploration', description: 'Morning safari. Afternoon visit to Ranthambore Fort.' },
      { day: 4, title: 'Departure', description: 'Morning safari. Checkout and transfer to airport.' }
    ],
    highlights: [
      'Multiple tiger spotting opportunities',
      'Professional photography guidance',
      'Visit to ancient Ranthambore Fort',
      'Bird watching in buffer zones'
    ],
    departureDates: ['2024-04-10', '2024-04-17', '2024-04-24', '2024-05-01']
  },
  {
    id: 107,
    name: 'Varanasi Spiritual Journey',
    description: 'Spiritual awakening on the banks of Ganges. Experience ancient rituals and meditation.',
    duration: 4,
    pricePerPerson: 17999,
    discountPrice: 15999,
    category: 'Spiritual',
    location: 'Varanasi, Sarnath',
    rating: 4.9,
    reviewCount: 198,
    tags: ['Spiritual', 'Ganges', 'Meditation', 'Cultural'],
    inclusions: [
      '3 Nights Hotel Stay',
      'Daily Breakfast',
      'Boat Ride on Ganges',
      'Yoga & Meditation Sessions',
      'All Temple Visits'
    ],
    exclusions: [
      'Airfare',
      'Personal Puja Materials',
      'Donations',
      'Shopping'
    ],
    difficulty: 'Easy',
    groupSize: 'Medium',
    featured: true,
    bestseller: false,
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Varanasi Ganges river',
    itinerary: [
      { day: 1, title: 'Arrival in Varanasi', description: 'Arrive and transfer to hotel. Evening Ganga Aarti ceremony.' },
      { day: 2, title: 'Varanasi Exploration', description: 'Morning boat ride. Visit Kashi Vishwanath Temple and local ghats.' },
      { day: 3, title: 'Sarnath Day Trip', description: 'Visit Sarnath - where Buddha gave his first sermon.' },
      { day: 4, title: 'Departure', description: 'Morning meditation session. Transfer to airport.' }
    ],
    highlights: [
      'Sunrise boat ride on Ganges',
      'Attend Ganga Aarti ceremony',
      'Visit to Sarnath archaeological site',
      'Guided meditation with yoga guru'
    ],
    departureDates: ['2024-02-15', '2024-02-22', '2024-03-01', '2024-03-08']
  },
  {
    id: 108,
    name: 'Munnar Tea Garden Retreat',
    description: 'Serene retreat in tea plantations with nature walks, spa treatments, and local culture.',
    duration: 5,
    pricePerPerson: 22999,
    discountPrice: 19999,
    category: 'Nature',
    location: 'Munnar, Kerala',
    rating: 4.7,
    reviewCount: 167,
    tags: ['Tea Plantations', 'Nature', 'Relaxation', 'Spa'],
    inclusions: [
      '4 Nights Plantation Resort',
      'All Meals',
      'Tea Tasting Session',
      'Ayurvedic Spa Treatment',
      'Nature Walks'
    ],
    exclusions: [
      'Airfare',
      'Additional Spa Services',
      'Shopping',
      'Optional Tours'
    ],
    difficulty: 'Easy',
    groupSize: 'Small',
    featured: false,
    bestseller: true,
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200',
    alt: 'Munnar tea plantations',
    itinerary: [
      { day: 1, title: 'Arrival in Munnar', description: 'Arrive and transfer to plantation resort.' },
      { day: 2, title: 'Tea Plantation Tour', description: 'Visit tea gardens and factory. Tea tasting session.' },
      { day: 3, title: 'Nature Exploration', description: 'Visit Eravikulam National Park and waterfalls.' },
      { day: 4, title: 'Relaxation Day', description: 'Ayurvedic spa treatments. Evening cultural program.' },
      { day: 5, title: 'Departure', description: 'Morning nature walk. Transfer to airport.' }
    ],
    highlights: [
      'Stay in working tea plantation',
      'Hands-on tea plucking experience',
      'Ayurvedic wellness treatments',
      'Photography in scenic landscapes'
    ],
    departureDates: ['2024-05-10', '2024-05-17', '2024-05-24', '2024-05-31']
  }
];

// Helper functions
export const getFeaturedPackages = (): TourPackage[] => {
  return tourPackages.filter(pkg => pkg.featured);
};

export const getBestsellerPackages = (): TourPackage[] => {
  return tourPackages.filter(pkg => pkg.bestseller);
};

export const getPackagesByCategory = (category: TourPackage['category']): TourPackage[] => {
  return tourPackages.filter(pkg => pkg.category === category);
};

export const getPackagesByLocation = (location: string): TourPackage[] => {
  return tourPackages.filter(pkg => 
    pkg.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getPackageById = (id: number): TourPackage | undefined => {
  return tourPackages.find(pkg => pkg.id === id);
};

export const getPackagesByPriceRange = (min: number, max: number): TourPackage[] => {
  return tourPackages.filter(pkg => {
    const price = pkg.discountPrice || pkg.pricePerPerson;
    return price >= min && price <= max;
  });
};

export const getPackagesByDuration = (minDays: number, maxDays: number): TourPackage[] => {
  return tourPackages.filter(pkg => pkg.duration >= minDays && pkg.duration <= maxDays);
};

export const searchPackages = (query: string): TourPackage[] => {
  const searchTerm = query.toLowerCase();
  return tourPackages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm) ||
    pkg.description.toLowerCase().includes(searchTerm) ||
    pkg.location.toLowerCase().includes(searchTerm) ||
    pkg.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    pkg.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm))
  );
};