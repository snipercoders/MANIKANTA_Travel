// app/gallery/page.tsx - MODERNIZED VERSION
'use client';

import { useState, useEffect } from 'react';
import ImageGrid from '@/components/gallery/ImageGrid';
import MediaModal from '@/components/gallery/MediaModal';
import VideoSection from '@/components/gallery/VideoSection';
import AdminButton from '@/components/gallery/AdminButton';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import { GalleryItem, FilterOptions } from '@/lib/types/gallery';
import { Loader2, Sparkles, Grid3x3, Filter } from 'lucide-react';

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter state
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    type: 'all',
    orientation: 'all',
    tags: [],
    sortBy: 'newest'
  });

  // Fetch gallery items
  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true);
      try {
        // TODO: Replace with your actual API endpoint
        const res = await fetch('/api/gallery');
        const data = await res.json();
        
        if (data.success && data.data) {
          const transformedItems = data.data.map((item: any) => ({
            id: item._id || item.id,
            type: item.type || 'image',
            url: item.url,
            title: item.title || 'Untitled',
            location: item.location,
            description: item.description,
            category: item.category || 'uncategorized',
            vehicleName: item.vehicleName,
            tags: item.tags || [],
            createdAt: item.createdAt || new Date().toISOString(),
            orientation: item.orientation || 'landscape'
          }));
          setItems(transformedItems);
        } else {
          // Fallback to mock data
          setItems(getMockGalleryItems());
        }
      } catch (error) {
        console.error('Failed to fetch gallery items:', error);
        setItems(getMockGalleryItems());
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  // Apply filters whenever items or filters change
  useEffect(() => {
    if (items.length === 0) {
      setFilteredItems([]);
      return;
    }

    let result = [...items];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(item => item.category === filters.category);
    }

    // Filter by type
    if (filters.type !== 'all') {
      result = result.filter(item => item.type === filters.type);
    }

    // Filter by orientation
    if (filters.orientation !== 'all') {
      result = result.filter(item => 
        item.orientation ? item.orientation === filters.orientation : true
      );
    }

    // Filter by tags
    if (filters.tags.length > 0) {
      result = result.filter(item => 
        item.tags?.some(tag => filters.tags.includes(tag))
      );
    }

    // Sort items
    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredItems(result);
  }, [items, filters]);

  // Mock data function
  const getMockGalleryItems = (): GalleryItem[] => [
    {
      id: '1',
      title: 'Golden Temple at Sunrise',
      description: 'The holiest Gurudwara of Sikhism, located in Amritsar, Punjab',
      location: 'Amritsar, Punjab',
      url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop',
      category: 'pilgrimage',
      type: 'image',
      tags: ['temple', 'spiritual', 'architecture'],
      createdAt: '2024-01-15',
      orientation: 'landscape'
    },
    {
      id: '2',
      title: 'Goa Beach Sunset',
      description: 'Beautiful sunset at Palolem Beach, South Goa',
      location: 'Goa',
      url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop',
      category: 'beach',
      type: 'image',
      tags: ['beach', 'sunset', 'vacation'],
      createdAt: '2024-02-20',
      orientation: 'landscape'
    },
    {
      id: '3',
      title: 'Luxury Coach Interior',
      description: 'Our premium AC coach with comfortable seating',
      location: 'Delhi',
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop',
      category: 'vehicle',
      type: 'image',
      vehicleName: 'Volvo Luxury Coach',
      tags: ['luxury', 'comfort', 'travel'],
      createdAt: '2024-01-10',
      orientation: 'landscape'
    },
    {
      id: '4',
      title: 'Kerala Backwaters Cruise',
      description: 'Traditional houseboat cruise through serene backwaters',
      location: 'Alleppey, Kerala',
      url: 'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?w=800&auto=format&fit=crop',
      category: 'nature',
      type: 'image',
      tags: ['backwaters', 'houseboat', 'peaceful'],
      createdAt: '2024-03-05',
      orientation: 'landscape'
    },
    {
      id: '5',
      title: 'Taj Mahal Moonlight',
      description: 'The iconic monument illuminated under moonlight',
      location: 'Agra, Uttar Pradesh',
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop',
      category: 'heritage',
      type: 'image',
      tags: ['wonder', 'architecture', 'history'],
      createdAt: '2024-02-28',
      orientation: 'portrait'
    },
    {
      id: '6',
      title: 'Himalayan Trek Adventure',
      description: 'Trekking through the majestic Himalayan mountains',
      location: 'Manali, Himachal Pradesh',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      category: 'adventure',
      type: 'image',
      tags: ['mountains', 'trekking', 'adventure'],
      createdAt: '2024-01-25',
      orientation: 'landscape'
    },
    {
      id: '7',
      title: 'Rajasthan Desert Safari',
      description: 'Camel safari in the Thar Desert at sunset',
      location: 'Jaisalmer, Rajasthan',
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop',
      category: 'adventure',
      type: 'image',
      tags: ['desert', 'safari', 'cultural'],
      createdAt: '2024-02-15',
      orientation: 'landscape'
    },
    {
      id: '8',
      title: 'Luxury Tempo Traveller',
      description: 'Our premium 12-seater tempo traveller with entertainment system',
      location: 'Hyderabad',
      url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
      category: 'vehicle',
      type: 'image',
      vehicleName: 'Force Tempo Traveller',
      tags: ['group', 'comfort', 'premium'],
      createdAt: '2024-01-30',
      orientation: 'landscape'
    }
  ];

  // Separate images and videos for sections
  const images = filteredItems.filter(item => item.type === 'image');
  const videos = filteredItems.filter(item => item.type === 'video');

  const handleItemClick = (item: GalleryItem) => {
    if (isDeleteMode) {
      if (window.confirm(`Delete "${item.title}"? This action cannot be undone.`)) {
        handleDeleteItem(item);
      }
      return;
    }
    setSelectedItem(item);
  };






  // In app/gallery/page.tsx - Update the handleDeleteItem function
// In app/gallery/page.tsx - Update the handleDeleteItem function
const handleDeleteItem = async (item: GalleryItem) => {
  try {
    // Get admin token from localStorage
    const adminToken = localStorage.getItem('gallery_admin_token');
    const adminAuth = localStorage.getItem('gallery_admin_auth');
    
    if (!adminToken || !adminAuth || adminAuth !== 'authenticated') {
      throw new Error('Admin session expired. Please login again.');
    }

    console.log(`🗑️ Deleting ${item.type}: ${item.id} - ${item.title}`);
    
    const response = await fetch(`/api/gallery/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json',
        'x-admin-token': adminToken,
      },
    });

    const data = await response.json();
    console.log('Delete response:', data);

    if (!response.ok) {
      throw new Error(data.message || `Delete failed with status ${response.status}`);
    }

    if (data.success) {
      // Remove from state
      setItems(prev => prev.filter(i => i.id !== item.id));
      setSelectedItem(null);
      
      // Update filtered items
      setFilteredItems(prev => prev.filter(i => i.id !== item.id));
      
      // Show success message
      setTimeout(() => {
        alert(`✅ "${item.title}" deleted successfully!`);
      }, 100);
      
      // If last item was deleted, exit delete mode
      if (filteredItems.length <= 1) {
        setIsDeleteMode(false);
      }
    } else {
      throw new Error(data.message || 'Delete failed');
    }
  } catch (error: any) {
    console.error('Delete failed:', error);
    
    // Handle specific error types
    if (error.message.includes('Unauthorized') || 
        error.message.includes('401') ||
        error.message.includes('session expired')) {
      alert('❌ Admin session expired. Please login again.');
      localStorage.removeItem('gallery_admin_auth');
      localStorage.removeItem('gallery_admin_token');
      localStorage.removeItem('gallery_admin_time');
      setIsDeleteMode(false);
      window.location.reload();
    } else if (error.message.includes('404') || error.message.includes('not found')) {
      alert('❌ Item not found. It may have already been deleted.');
      // Force refresh to sync with server
      window.location.reload();
    } else {
      alert(`❌ Failed to delete item: ${error.message}`);
    }
  }
};



  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      type: 'all',
      orientation: 'all',
      tags: [],
      sortBy: 'newest'
    });
  };

  // Get unique categories and tags for filters
  const allCategories = ['all', ...new Set(items.map(item => item.category))];
  const allTags = Array.from(new Set(items.flatMap(item => item.tags || [])));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">EXPLORE OUR JOURNEYS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Gallery</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Capturing memories from thousands of journeys across incredible India
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold">{items.length}</div>
                <div className="text-sm opacity-80">Total Memories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold">{images.length}</div>
                <div className="text-sm opacity-80">Photos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold">{videos.length}</div>
                <div className="text-sm opacity-80">Videos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <div className="text-2xl font-bold">{allCategories.length - 1}</div>
                <div className="text-sm opacity-80">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Grid3x3 className="h-6 w-6 text-blue-600" />
                Gallery Collection
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredItems.length} items • {allCategories.length - 1} categories
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"
              >
                <Filter className="h-4 w-4" />
                <span className="font-medium">Filters</span>
                {Object.values(filters).some(v => 
                  Array.isArray(v) ? v.length > 0 : v !== 'all' && v !== 'newest'
                ) && (
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
              </button>
              
              {/* Clear Filters */}
              {(filters.category !== 'all' || filters.type !== 'all' || filters.tags.length > 0) && (
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden sm:block">
            <GalleryFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              allCategories={allCategories}
              allTags={allTags}
              itemCount={filteredItems.length}
            />
          </div>

          {/* Mobile Filter Panel */}
          {showFilters && (
            <div className="sm:hidden mt-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
              <GalleryFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                allCategories={allCategories}
                allTags={allTags}
                itemCount={filteredItems.length}
                isMobile={true}
              />
              <button
                onClick={() => setShowFilters(false)}
                className="w-full mt-4 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition"
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>

        {/* Image Grid Section */}
        <ImageGrid
          items={images}
          onItemClick={handleItemClick}
          loading={loading}
          isDeleteMode={isDeleteMode}
          onDeleteItem={handleDeleteItem}
        />

        // Update the VideoSection component call:
<VideoSection 
  videos={videos} 
  isDeleteMode={isDeleteMode}
  onDeleteItem={handleDeleteItem}
  onItemClick={(item) => setSelectedItem(item)}
/>


      </div>

      {/* Delete Mode Indicator */}
      {isDeleteMode && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-pulse border-2 border-white">
          <span className="font-bold">🗑️ DELETE MODE ACTIVE</span>
          <button
            onClick={() => setIsDeleteMode(false)}
            className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition"
          >
            Exit
          </button>
        </div>
      )}

      {/* Admin Controls */}
      <AdminButton onDeleteModeToggle={() => setIsDeleteMode(!isDeleteMode)} />

      {/* Media Modal */}
      {selectedItem && (
        <MediaModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onDelete={handleDeleteItem}
        />
      )}


      {/* Empty State */}
      {!loading && filteredItems.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Grid3x3 className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">No items found</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Try adjusting your filters or check back later for new content.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}