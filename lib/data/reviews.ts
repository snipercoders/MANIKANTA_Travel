// lib/database/reviews.ts

import { Review } from '@/lib/types/review';
import { connectToDatabase } from './mongodb';

const COLLECTION_NAME = 'reviews';

export const reviewService = {
  // Get all reviews from MongoDB
  async getAllReviews(): Promise<Review[]> {
    try {
      const { db } = await connectToDatabase();
      const reviews = await db
        .collection<Review>(COLLECTION_NAME)
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
      
      return reviews.map(review => ({
        ...review,
        id: review._id?.toString() || review.id
      }));
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  },

  // Get reviews for a specific package
  async getReviewsByPackageId(packageId: number): Promise<Review[]> {
    try {
      const { db } = await connectToDatabase();
      const reviews = await db
        .collection<Review>(COLLECTION_NAME)
        .find({ tourPackageId: packageId })
        .sort({ createdAt: -1 })
        .toArray();
      
      return reviews.map(review => ({
        ...review,
        id: review._id?.toString() || review.id
      }));
    } catch (error) {
      console.error('Error fetching reviews by package:', error);
      return [];
    }
  },

  // Get featured reviews (most helpful or highest rated)
  async getFeaturedReviews(limit = 6): Promise<Review[]> {
    try {
      const { db } = await connectToDatabase();
      const reviews = await db
        .collection<Review>(COLLECTION_NAME)
        .find({})
        .sort({ helpful: -1, rating: -1 })
        .limit(limit)
        .toArray();
      
      return reviews.map(review => ({
        ...review,
        id: review._id?.toString() || review.id
      }));
    } catch (error) {
      console.error('Error fetching featured reviews:', error);
      return [];
    }
  },

  // Add a new review to MongoDB
  async addReview(review: Omit<Review, 'id' | 'date' | 'verified' | 'helpful' | 'createdAt' | 'updatedAt'>): Promise<Review> {
    try {
      const { db } = await connectToDatabase();
      
      const newReview: Review = {
        ...review,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        verified: false,
        helpful: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const result = await db
        .collection<Review>(COLLECTION_NAME)
        .insertOne(newReview);
      
      return {
        ...newReview,
        _id: result.insertedId.toString(),
        id: result.insertedId.toString()
      };
    } catch (error) {
      console.error('Error adding review:', error);
      throw new Error('Failed to add review');
    }
  },

  // Mark review as helpful
  async markHelpful(reviewId: string): Promise<Review | null> {
    try {
      const { db } = await connectToDatabase();
      
      const result = await db
        .collection<Review>(COLLECTION_NAME)
        .findOneAndUpdate(
          { id: reviewId },
          { 
            $inc: { helpful: 1 },
            $set: { updatedAt: new Date() }
          },
          { returnDocument: 'after' }
        );
      
      if (result) {
        return {
          ...result,
          id: result._id?.toString() || result.id
        };
      }
      return null;
    } catch (error) {
      console.error('Error marking review as helpful:', error);
      return null;
    }
  },

  // Get review statistics
  async getStats() {
    try {
      const { db } = await connectToDatabase();
      const reviews = await this.getAllReviews();
      
      const totalReviews = reviews.length;
      
      const averageRating = totalReviews > 0 
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
        : 0;
      
      const ratingsDistribution = {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length,
      };

      // Get verified reviews count
      const verifiedCount = reviews.filter(r => r.verified).length;

      return {
        averageRating: parseFloat(averageRating.toFixed(1)),
        totalReviews,
        verifiedCount,
        ratingsDistribution,
        excellentPercentage: totalReviews > 0 
          ? Math.round((ratingsDistribution[5] / totalReviews) * 100)
          : 0
      };
    } catch (error) {
      console.error('Error getting review stats:', error);
      return {
        averageRating: 0,
        totalReviews: 0,
        verifiedCount: 0,
        ratingsDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        excellentPercentage: 0
      };
    }
  },

  // Search reviews
  async searchReviews(query: string): Promise<Review[]> {
    try {
      const { db } = await connectToDatabase();
      const reviews = await db
        .collection<Review>(COLLECTION_NAME)
        .find({
          $or: [
            { author: { $regex: query, $options: 'i' } },
            { title: { $regex: query, $options: 'i' } },
            { content: { $regex: query, $options: 'i' } },
            { tourPackageName: { $regex: query, $options: 'i' } },
            { location: { $regex: query, $options: 'i' } }
          ]
        })
        .sort({ createdAt: -1 })
        .toArray();
      
      return reviews.map(review => ({
        ...review,
        id: review._id?.toString() || review.id
      }));
    } catch (error) {
      console.error('Error searching reviews:', error);
      return [];
    }
  }
};