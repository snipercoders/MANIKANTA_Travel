// components/search/SearchResults.tsx

import { MapPin, Calendar, Users, Star, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: number;
  type: 'package' | 'gallery';
  title: string;
  description: string;
  location: string;
  category: string;
  price?: number;
  duration?: number;
  rating?: number;
  reviewCount?: number;
  image: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
}

export default function SearchResults({ results, searchQuery }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <SearchIcon className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No results found
        </h3>
        <p className="text-gray-600 mb-4">
          We couldn't find any matches for "{searchQuery}"
        </p>
        <div className="text-sm text-gray-500">
          Try adjusting your search terms or filters
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((item) => (
        <div
          key={`${item.type}-${item.id}`}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image || '/placeholder-image.jpg'}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.type === 'package' 
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}>
                {item.type === 'package' ? 'Tour Package' : 'Photo Gallery'}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-semibold">
                {item.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
              {item.title}
            </h3>
            
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-sm truncate">{item.location}</span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {item.type === 'package' && (
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  {item.duration && (
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{item.duration} days</span>
                    </div>
                  )}
                  
                  {item.rating !== undefined && (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({item.reviewCount})
                      </span>
                    </div>
                  )}
                </div>
                
                {item.price && (
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-700">
                      ₹{item.price.toLocaleString()}
                      <span className="text-sm text-gray-500 font-normal"> / person</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <Link
                href={item.type === 'package' ? `/package/${item.id}` : `/gallery/${item.id}`}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-teal-600 transition-colors"
              >
                {item.type === 'package' ? 'View Package' : 'View Gallery'}
              </Link>
              
              <button className="p-2 text-gray-500 hover:text-green-600 transition-colors">
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper components
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8" strokeWidth="2" />
      <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}