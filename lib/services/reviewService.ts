// lib/services/reviewService.ts

import { Review } from '@/lib/types/review';

// In-memory storage for reviews (client-side)
let reviews: Review[] = [
  {
    id: '1',
    author: 'Priya Sharma',
    email: 'priya@example.com',
    rating: 5,
    title: 'Amazing Golden Triangle Experience',
    content: 'Had an incredible time exploring Delhi, Agra, and Jaipur. Our guide was knowledgeable and the arrangements were perfect. The Taj Mahal at sunrise was breathtaking!',
    date: '2024-03-15',
    verified: true,
    helpful: 24,
    travelerType: 'Family',
    monthOfTravel: 'March 2024',
    tripDuration: '7 Days',
    tourPackageId: 1,
    tourPackageName: 'Golden Triangle Tour',
    location: 'Delhi, Agra, Jaipur',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    author: 'Rahul Mehta',
    email: 'rahul@example.com',
    rating: 5,
    title: 'Spiritual Journey to Varanasi',
    content: 'The spiritual atmosphere of Varanasi was truly moving. Evening Ganga Aarti was mesmerizing. Highly recommend this tour for anyone seeking a spiritual experience.',
    date: '2024-03-10',
    verified: true,
    helpful: 18,
    travelerType: 'Solo',
    monthOfTravel: 'March 2024',
    tripDuration: '4 Days',
    tourPackageId: 2,
    tourPackageName: 'Spiritual Varanasi Tour',
    location: 'Varanasi',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
  },
  {
    id: '3',
    author: 'Anjali Patel',
    email: 'anjali@example.com',
    rating: 4,
    title: 'Beautiful Kerala Backwaters',
    content: 'Kerala is paradise on earth! The houseboat experience was unique and relaxing. Food was delicious and the scenery was stunning.',
    date: '2024-03-08',
    verified: true,
    helpful: 15,
    travelerType: 'Couple',
    monthOfTravel: 'February 2024',
    tripDuration: '6 Days',
    tourPackageId: 3,
    tourPackageName: 'Kerala Backwaters',
    location: 'Kerala',
    createdAt: new Date('2024-03-08'),
    updatedAt: new Date('2024-03-08'),
  },
];

export const reviewService = {
  // Get all reviews
  getAllReviews(): Review[] {
    return [...reviews].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Get reviews by package ID
  getReviewsByPackageId(packageId: number): Review[] {
    return reviews.filter(r => r.tourPackageId === packageId);
  },

  // Get featured reviews
  getFeaturedReviews(limit = 6): Review[] {
    return [...reviews]
      .sort((a, b) => b.helpful - a.helpful || b.rating - a.rating)
      .slice(0, limit);
  },

  // Get latest reviews
  getLatestReviews(limit = 6): Review[] {
    return [...reviews]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  },

  // Add new review
  addReview(review: Omit<Review, 'id' | 'date' | 'verified' | 'helpful' | 'createdAt' | 'updatedAt'>): Review {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      verified: false,
      helpful: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    reviews = [newReview, ...reviews];
    return newReview;
  },

  // Mark review as helpful
  markHelpful(reviewId: string): Review | null {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
      review.helpful += 1;
      review.updatedAt = new Date();
      return review;
    }
    return null;
  },

  // Get statistics
  getStats() {
    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
      : 0;

    const ratingsDistribution = {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length,
    };

    const verifiedCount = reviews.filter(r => r.verified).length;

    return {
      averageRating: parseFloat(averageRating.toFixed(1)),
      totalReviews,
      verifiedCount,
      ratingsDistribution,
      excellentPercentage: totalReviews > 0
        ? Math.round((ratingsDistribution[5] / totalReviews) * 100)
        : 0,
    };
  },

  // Search reviews
  searchReviews(query: string): Review[] {
    const lowerQuery = query.toLowerCase();
    return reviews.filter(
      r =>
        r.author.toLowerCase().includes(lowerQuery) ||
        r.title.toLowerCase().includes(lowerQuery) ||
        r.content.toLowerCase().includes(lowerQuery) ||
        r.tourPackageName?.toLowerCase().includes(lowerQuery) ||
        r.location?.toLowerCase().includes(lowerQuery)
    );
  },
};