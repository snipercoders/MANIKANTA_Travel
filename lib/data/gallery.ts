// lib/data/gallery.ts

export interface GalleryItem {
  id: number;
  title: string;
  location: string;
  category: 'Nature' | 'Heritage' | 'Adventure' | 'Spiritual' | 'Beach' | 'Wildlife';
  imageUrl: string;
  alt: string;
  description: string;
  featured: boolean;
  tags: string[];
  tourPackageId?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Taj Mahal at Sunrise',
    location: 'Agra, Uttar Pradesh',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200',
    alt: 'Taj Mahal during sunrise with golden light',
    description: 'Experience the breathtaking beauty of the Taj Mahal as the first rays of sun illuminate this world wonder.',
    featured: true,
    tags: ['UNESCO', 'Sunrise', 'Architecture', 'Romantic'],
    tourPackageId: 101
  },
  {
    id: 2,
    title: 'Kerala Backwaters',
    location: 'Alleppey, Kerala',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1593693399748-4c87e96b914e?auto=format&fit=crop&w=1200',
    alt: 'Traditional houseboat on Kerala backwaters',
    description: 'Cruise through the serene backwaters of Kerala on a traditional houseboat.',
    featured: true,
    tags: ['Houseboat', 'Waterways', 'Relaxing', 'Traditional'],
    tourPackageId: 102
  },
  {
    id: 3,
    title: 'Ladakh Monastery',
    location: 'Leh, Ladakh',
    category: 'Spiritual',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w-1200',
    alt: 'Buddhist monastery in Ladakh mountains',
    description: 'Discover the spiritual essence of Ladakh with its ancient monasteries.',
    featured: true,
    tags: ['Buddhist', 'Mountains', 'Culture', 'Meditation'],
    tourPackageId: 103
  },
  {
    id: 4,
    title: 'Rajasthan Desert Safari',
    location: 'Jaisalmer, Rajasthan',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Camel safari in Thar Desert during sunset',
    description: 'Embark on an exciting camel safari through the golden sands of Thar Desert.',
    featured: true,
    tags: ['Desert', 'Camel', 'Sunset', 'Cultural'],
    tourPackageId: 104
  },
  {
    id: 5,
    title: 'Goa Beach Paradise',
    location: 'North Goa',
    category: 'Beach',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200',
    alt: 'Beautiful beach in Goa with palm trees',
    description: 'Relax on the pristine beaches of Goa with crystal clear waters.',
    featured: false,
    tags: ['Beach', 'Relaxation', 'Water Sports', 'Nightlife'],
    tourPackageId: 105
  },
  {
    id: 6,
    title: 'Ranthambore Tiger Reserve',
    location: 'Sawai Madhopur, Rajasthan',
    category: 'Wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?auto=format&fit=crop&w=1200',
    alt: 'Royal Bengal tiger in Ranthambore National Park',
    description: 'Witness the majestic Royal Bengal Tiger in its natural habitat.',
    featured: true,
    tags: ['Wildlife', 'Safari', 'Conservation', 'Photography'],
    tourPackageId: 106
  },
  {
    id: 7,
    title: 'Varanasi Ganga Aarti',
    location: 'Varanasi, Uttar Pradesh',
    category: 'Spiritual',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Evening Ganga Aarti ceremony in Varanasi',
    description: 'Experience the mesmerizing Ganga Aarti ceremony on the ghats of Varanasi.',
    featured: true,
    tags: ['Spiritual', 'River', 'Ceremony', 'Traditional'],
    tourPackageId: 107
  },
  {
    id: 8,
    title: 'Munnar Tea Gardens',
    location: 'Munnar, Kerala',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200',
    alt: 'Lush green tea plantations in Munnar',
    description: 'Walk through endless tea plantations in the hills of Munnar.',
    featured: false,
    tags: ['Tea', 'Plantations', 'Hills', 'Scenic'],
    tourPackageId: 108
  },
  {
    id: 9,
    title: 'Andaman Scuba Diving',
    location: 'Havelock Island, Andaman',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200',
    alt: 'Scuba diving in Andaman coral reefs',
    description: 'Explore vibrant coral reefs and marine life in the Andaman Sea.',
    featured: true,
    tags: ['Scuba', 'Marine Life', 'Coral Reefs', 'Adventure'],
    tourPackageId: 109
  },
  {
    id: 10,
    title: 'Kashmir Dal Lake',
    location: 'Srinagar, Jammu & Kashmir',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1585506936724-fa0c19c7b3c6?auto=format&fit=crop&w=1200',
    alt: 'Shikara boats on Dal Lake with mountains',
    description: 'Enjoy a peaceful shikara ride on the beautiful Dal Lake.',
    featured: true,
    tags: ['Lake', 'Shikara', 'Mountains', 'Houseboats'],
    tourPackageId: 110
  },
  {
    id: 11,
    title: 'Hampi Ruins',
    location: 'Hampi, Karnataka',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Ancient ruins and temples in Hampi',
    description: 'Explore the magnificent ruins of the Vijayanagara Empire.',
    featured: false,
    tags: ['Ruins', 'UNESCO', 'History', 'Architecture'],
    tourPackageId: 111
  },
  {
    id: 12,
    title: 'Sikkim Himalayas',
    location: 'Gangtok, Sikkim',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200',
    alt: 'Snow-capped Himalayas in Sikkim',
    description: 'Trek through the breathtaking Himalayan landscapes of Sikkim.',
    featured: true,
    tags: ['Trekking', 'Mountains', 'Buddhist', 'Adventure'],
    tourPackageId: 112
  },
  {
    id: 13,
    title: 'Khajuraho Temples',
    location: 'Khajuraho, Madhya Pradesh',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Intricate carvings on Khajuraho temples',
    description: 'Marvel at the exquisite temple architecture and sculptures.',
    featured: false,
    tags: ['UNESCO', 'Sculptures', 'Temples', 'Art'],
    tourPackageId: 113
  },
  {
    id: 14,
    title: 'Kaziranga National Park',
    location: 'Assam',
    category: 'Wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?auto=format&fit=crop&w=1200',
    alt: 'One-horned rhinoceros in Kaziranga',
    description: 'Spot the endangered one-horned rhinoceros in this UNESCO site.',
    featured: true,
    tags: ['Wildlife', 'Rhino', 'Elephant', 'Safari'],
    tourPackageId: 114
  },
  {
    id: 15,
    title: 'Udaipur Lake Palace',
    location: 'Udaipur, Rajasthan',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Lake Palace floating on Lake Pichola',
    description: 'Visit the magnificent Lake Palace floating on Lake Pichola.',
    featured: true,
    tags: ['Palace', 'Lake', 'Royal', 'Romantic'],
    tourPackageId: 115
  },
  {
    id: 16,
    title: 'Coorg Coffee Plantations',
    location: 'Coorg, Karnataka',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200',
    alt: 'Coffee plantations in Coorg hills',
    description: 'Stay amidst aromatic coffee plantations in the hills of Coorg.',
    featured: false,
    tags: ['Coffee', 'Plantations', 'Hills', 'Estate'],
    tourPackageId: 116
  },
  {
    id: 17,
    title: 'Ajanta Ellora Caves',
    location: 'Aurangabad, Maharashtra',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Ancient rock-cut caves of Ajanta',
    description: 'Explore the magnificent rock-cut cave temples and monasteries.',
    featured: true,
    tags: ['UNESCO', 'Caves', 'Buddhist', 'Ancient'],
    tourPackageId: 117
  },
  {
    id: 18,
    title: 'Rishikesh River Rafting',
    location: 'Rishikesh, Uttarakhand',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200',
    alt: 'White water rafting in Rishikesh',
    description: 'Experience thrilling white water rafting on the Ganges.',
    featured: true,
    tags: ['Rafting', 'Adventure', 'Ganges', 'Yoga'],
    tourPackageId: 118
  },
  {
    id: 19,
    title: 'Puri Beach Festival',
    location: 'Puri, Odisha',
    category: 'Beach',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200',
    alt: 'Colorful beach festival in Puri',
    description: 'Celebrate at the vibrant beach festival in Puri.',
    featured: false,
    tags: ['Beach', 'Festival', 'Culture', 'Temples'],
    tourPackageId: 119
  },
  {
    id: 20,
    title: 'Mysore Palace Illuminated',
    location: 'Mysore, Karnataka',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Mysore Palace illuminated at night',
    description: 'Witness the majestic Mysore Palace illuminated with thousands of lights.',
    featured: true,
    tags: ['Palace', 'Lights', 'Royal', 'Architecture'],
    tourPackageId: 120
  },
  {
    id: 21,
    title: 'Amritsar Golden Temple',
    location: 'Amritsar, Punjab',
    category: 'Spiritual',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200',
    alt: 'Golden Temple reflected in holy water',
    description: 'Experience the spiritual aura of the Golden Temple and community kitchen.',
    featured: true,
    tags: ['Sikh', 'Golden', 'Community', 'Peace'],
    tourPackageId: 121
  },
  {
    id: 22,
    title: 'Kanyakumari Sunset',
    location: 'Kanyakumari, Tamil Nadu',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200',
    alt: 'Sunset at the southernmost tip of India',
    description: 'Watch the spectacular sunset where three seas meet.',
    featured: false,
    tags: ['Sunset', 'Seas', 'Tip', 'Monument'],
    tourPackageId: 122
  },
  {
    id: 23,
    title: 'Jim Corbett Safari',
    location: 'Jim Corbett National Park',
    category: 'Wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1562552476-8ac4a2d1d6a0?auto=format&fit=crop&w=1200',
    alt: 'Elephant safari in Jim Corbett',
    description: 'Go on an exciting wildlife safari in India\'s oldest national park.',
    featured: true,
    tags: ['Elephant', 'Tiger', 'Safari', 'Forest'],
    tourPackageId: 123
  },
  {
    id: 24,
    title: 'Shimla Toy Train',
    location: 'Shimla, Himachal Pradesh',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200',
    alt: 'Toy train on mountain railway',
    description: 'Take a scenic ride on the UNESCO World Heritage toy train.',
    featured: true,
    tags: ['Toy Train', 'UNESCO', 'Mountains', 'British'],
    tourPackageId: 124
  }
];

// Helper functions
export const getFeaturedGalleryItems = (): GalleryItem[] => {
  return galleryItems.filter(item => item.featured);
};

export const getGalleryItemsByCategory = (category: GalleryItem['category']): GalleryItem[] => {
  return galleryItems.filter(item => item.category === category);
};

export const getGalleryItemsByLocation = (location: string): GalleryItem[] => {
  return galleryItems.filter(item => 
    item.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getGalleryItemById = (id: number): GalleryItem | undefined => {
  return galleryItems.find(item => item.id === id);
};

export const getGalleryItemsByTag = (tag: string): GalleryItem[] => {
  return galleryItems.filter(item => 
    item.tags.some(itemTag => 
      itemTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};