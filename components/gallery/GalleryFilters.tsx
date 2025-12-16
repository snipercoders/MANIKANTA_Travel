// components/gallery/GalleryFilters.tsx
'use client';

import { FilterOptions } from '@/lib/types/gallery';
import { Filter, X, Calendar, Image as ImageIcon, Video, LayoutGrid, Hash, ArrowUpDown } from 'lucide-react';

interface GalleryFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  allCategories: string[];
  allTags: string[];
  itemCount: number;
  isMobile?: boolean;
}

export default function GalleryFilters({
  filters,
  onFilterChange,
  allCategories,
  allTags,
  itemCount,
  isMobile = false
}: GalleryFiltersProps) {
  const activeFilterCount = Object.values(filters).reduce((acc, val) => {
    if (Array.isArray(val)) return acc + val.length;
    if (val !== 'all' && val !== 'newest') return acc + 1;
    return acc;
  }, 0);

  return (
    <div className={`space-y-4 ${isMobile ? 'p-1' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <span className="font-medium text-gray-900">Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <span className="text-sm text-gray-500">{itemCount} items</span>
      </div>

      {/* Category Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => onFilterChange({ category })}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                filters.category === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Type & Orientation Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Media Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <LayoutGrid className="h-4 w-4" />
            Media Type
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => onFilterChange({ type: 'all' })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                filters.type === 'all'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => onFilterChange({ type: 'image' })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1 ${
                filters.type === 'image'
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              Images
            </button>
            <button
              onClick={() => onFilterChange({ type: 'video' })}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center gap-1 ${
                filters.type === 'video'
                  ? 'bg-purple-100 text-purple-700 border border-purple-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Video className="h-4 w-4" />
              Videos
            </button>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      {allTags.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  const newTags = filters.tags.includes(tag)
                    ? filters.tags.filter(t => t !== tag)
                    : [...filters.tags, tag];
                  onFilterChange({ tags: newTags });
                }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                  filters.tags.includes(tag)
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
            {allTags.length > 10 && (
              <span className="px-3 py-1.5 text-sm text-gray-500">
                +{allTags.length - 10} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFilterCount > 0 && (
        <div className="pt-4 border-t">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Active:</span>
            {filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                {filters.category}
                <button
                  onClick={() => onFilterChange({ category: 'all' })}
                  className="hover:text-blue-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.type !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                {filters.type}
                <button
                  onClick={() => onFilterChange({ type: 'all' })}
                  className="hover:text-blue-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">
                {tag}
                <button
                  onClick={() => onFilterChange({ tags: filters.tags.filter(t => t !== tag) })}
                  className="hover:text-purple-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}