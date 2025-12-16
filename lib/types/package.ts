// File Path: lib/types/package.ts

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string; // e.g., "3 Days / 2 Nights"
  destination: string;
  category: 'Tour' | 'Regional' | 'Orissa' | 'Custom';
  includesBox: boolean; // Accommodation boxes
  features: string[];
  images: string[];
  rating?: number;
  reviewCount?: number;
  maxPeople?: number;
  highlights?: string[];
}

export interface PackageFilters {
  category?: string;
  includesBox?: boolean;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
}