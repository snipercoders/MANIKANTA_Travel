// app/search/page.tsx

'use client';

import { useState } from 'react';
import SearchBar from '@/components/search/SearchBar';
import SearchResults from '@/components/search/SearchResults';
import TrustpilotWidget from '@/components/search/TrustpilotWidget';
import { tourPackages } from '@/lib/data/packages';
import { galleryItems } from '@/lib/data/gallery';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'all' | 'packages' | 'gallery'>('all');

  // Combine all searchable content with correct property mapping
  const allContent = [
    ...tourPackages.map(pkg => ({
      id: pkg.id,
      type: 'package' as const,
      title: pkg.name, // Changed from pkg.title to pkg.name
      description: pkg.description,
      location: pkg.location, // Changed from pkg.destination to pkg.location
      category: pkg.category,
      price: pkg.discountPrice || pkg.pricePerPerson, // Use discount price if available
      duration: pkg.duration,
      rating: pkg.rating,
      reviewCount: pkg.reviewCount,
      image: pkg.imageUrl, // Changed from pkg.images[0] to pkg.imageUrl
    })),
    ...galleryItems.map(item => ({
      id: item.id,
      type: 'gallery' as const,
      title: item.title,
      description: item.description || '',
      location: item.location,
      category: item.category,
      image: item.imageUrl, // Changed from item.url to item.imageUrl
    })),
  ];

  // Filter results based on search query and type
  const filteredResults = allContent.filter(item => {
    if (searchType !== 'all' && item.type !== searchType.replace('s', '') as any) return false;
    
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Search & Reviews
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl">
            Find the perfect tour package or explore customer experiences. 
            Your next adventure starts here!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchType={searchType}
            setSearchType={setSearchType}
          />
        </div>

        {/* Trustpilot Section */}
        <div className="mb-12">
          <TrustpilotWidget />
        </div>

        {/* Search Results */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Browse All'}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <SearchResults results={filteredResults} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}