// File Path: lib/models/Review.ts

import mongoose, { Schema, models } from 'mongoose';

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true,
    },
    tripType: {
      type: String,
      trim: true,
    },
    images: {
      type: [String], // Array of Cloudinary URLs
      default: [],
    },
    approved: {
      type: Boolean,
      default: false, // Reviews need approval before showing
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const Review = models.Review || mongoose.model('Review', ReviewSchema);

export default Review;