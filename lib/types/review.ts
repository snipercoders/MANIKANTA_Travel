// lib/types/review.ts

export interface Review {
  _id?: string;
  id: string;
  author: string;
  email: string;
  rating: number;
  title: string;
  content: string;
  tourPackageId?: number;
  tourPackageName?: string;
  location?: string;
  date: string;
  verified: boolean;
  helpful: number;
  images?: string[];
  travelerType: 'Solo' | 'Couple' | 'Family' | 'Friends' | 'Business';
  monthOfTravel: string;
  tripDuration: string;
  createdAt: Date;
  updatedAt: Date;
}