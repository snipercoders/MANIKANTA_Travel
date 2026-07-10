'use client';

import { useState, useEffect } from 'react';
import ImageGrid from '@/components/gallery/ImageGrid';
import MediaModal from '@/components/gallery/MediaModal';
import VideoSection from '@/components/gallery/VideoSection';
import AdminButton from '@/components/gallery/AdminButton';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import { GalleryItem, FilterOptions } from '@/lib/types/gallery';
import { Loader2, Sparkles, Grid3x3, Filter, Image as ImageIcon, Video } from 'lucide-react';

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    type: 'all',
    orientation: 'all',
    tags: [],
    sortBy: 'newest'
  });

  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (data.success && data.data) {
          const transformed = data.data.map((item: any) => ({
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
          setItems(transformed);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error('Fetch failed:', error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  useEffect(() => {
    let result = [...items];

    if (filters.category !== 'all') result = result.filter(i => i.category === filters.category);
    if (filters.type !== 'all') result = result.filter(i => i.type === filters.type);
    if (filters.tags.length > 0) result = result.filter(i => i.tags?.some(t => filters.tags.includes(t)));

    switch (filters.sortBy) {
      case 'newest': result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
      case 'oldest': result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()); break;
      case 'title': result.sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    setFilteredItems(result);
  }, [items, filters]);

  const images = filteredItems.filter(i => i.type === 'image');
  const videos = filteredItems.filter(i => i.type === 'video');

  const handleItemClick = (item: GalleryItem) => {
    if (isDeleteMode) {
      if (window.confirm(`Delete "${item.title}"?`)) handleDeleteItem(item);
    } else {
      setSelectedItem(item);
    }
  };

  const handleDeleteItem = async (item: GalleryItem) => {
    // Delete logic here
  };

  const handleNext = () => { /* ... */ };
  const handlePrev = () => { /* ... */ };
  const handleFilterChange = (newFilters: Partial<FilterOptions>) => setFilters(prev => ({ ...prev, ...newFilters }));
  const handleClearFilters = () => setFilters({ category: 'all', type: 'all', orientation: 'all', tags: [], sortBy: 'newest' });

  const allCategories = ['all', ...new Set(items.map(i => i.category))];
  const allTags = Array.from(new Set(items.flatMap(i => i.tags || [])));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - Black & White */}
      <section className="relative overflow-hidden bg-black text-white pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold">CAPTURED MEMORIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Travel <span className="text-gray-300">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Thousands of moments from pilgrimages, tours, weddings & group journeys across India
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Total Items', value: items.length, icon: <Grid3x3 className="h-5 w-5" /> },
              { label: 'Photos', value: images.length, icon: <ImageIcon className="h-5 w-5" /> },
              { label: 'Videos', value: videos.length, icon: <Video className="h-5 w-5" /> },
              { label: 'Categories', value: allCategories.length - 1, icon: <Filter className="h-5 w-5" /> },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Controls - Black & White */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-black flex items-center gap-3">
                <Grid3x3 className="h-8 w-8 text-black" />
                Gallery Collection
              </h2>
              <p className="text-gray-600 mt-1">{filteredItems.length} items displayed</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          <div className="hidden sm:block">
            <GalleryFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              allCategories={allCategories}
              allTags={allTags}
              itemCount={filteredItems.length}
            />
          </div>

          {showFilters && (
            <div className="sm:hidden bg-white rounded-2xl shadow-lg p-5 border border-gray-200">
              <GalleryFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                allCategories={allCategories}
                allTags={allTags}
                itemCount={filteredItems.length}
                isMobile
              />
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 text-black animate-spin" />
          </div>
        ) : (
          <>
            <ImageGrid items={images} onItemClick={handleItemClick} loading={loading} isDeleteMode={isDeleteMode} onDeleteItem={handleDeleteItem} />
            <VideoSection videos={videos} isDeleteMode={isDeleteMode} onDeleteItem={handleDeleteItem} onItemClick={handleItemClick} />
          </>
        )}
      </div>

      {isDeleteMode && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-4 animate-pulse">
          <span className="font-bold text-lg">DELETE MODE ACTIVE</span>
          <button onClick={() => setIsDeleteMode(false)} className="bg-white text-black px-4 py-2 rounded-lg font-medium">
            Exit
          </button>
        </div>
      )}

      <AdminButton onDeleteModeToggle={() => setIsDeleteMode(!isDeleteMode)} />

      {selectedItem && (
        <MediaModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onDelete={handleDeleteItem}
        />
      )}
    </div>
  );
}