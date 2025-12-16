// lib/types/gallery.ts - UPDATED
export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  location?: string;
  url: string;
  category: string;
  type: 'image' | 'video';
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
  vehicleName?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface FilterOptions {
  category: string;
  type: 'all' | 'image' | 'video';
  orientation: string;
  tags: string[];
  sortBy: 'newest' | 'oldest' | 'title';
}