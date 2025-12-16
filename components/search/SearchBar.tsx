// components/search/SearchBar.tsx

'use client';

import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchType: 'all' | 'packages' | 'gallery';
  setSearchType: (type: 'all' | 'packages' | 'gallery') => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
}: SearchBarProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for destinations, packages, or attractions..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          />
        </div>

        {/* Search Type Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by:</span>
          </div>
          <div className="flex space-x-2">
            {[
              { value: 'all', label: 'All' },
              { value: 'packages', label: 'Packages' },
              { value: 'gallery', label: 'Gallery' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setSearchType(type.value as 'all' | 'packages' | 'gallery')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchType === type.value
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSearchQuery('Taj Mahal')}
          className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
        >
          Taj Mahal
        </button>
        <button
          onClick={() => setSearchQuery('Kerala')}
          className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
        >
          Kerala
        </button>
        <button
          onClick={() => setSearchQuery('Ladakh')}
          className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
        >
          Ladakh
        </button>
        <button
          onClick={() => setSearchQuery('Beach')}
          className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors"
        >
          Beach
        </button>
        <button
          onClick={() => setSearchQuery('Wildlife')}
          className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 transition-colors"
        >
          Wildlife
        </button>
        <button
          onClick={() => setSearchQuery('Luxury')}
          className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
        >
          Luxury
        </button>
      </div>
    </div>
  );
}