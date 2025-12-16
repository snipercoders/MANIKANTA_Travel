import mongoose, { Schema, Document } from 'mongoose';

export interface IGalleryMedia extends Document {
  title: string;
  description?: string;
  location?: string;
  url: string;
  type: 'image' | 'video';
  category: string;
  vehicleName?: string;
  tags: string[];
  orientation?: 'landscape' | 'portrait' | 'square';
  publicId?: string; // Cloudinary public ID
  isActive: boolean;
  uploadedAt: Date;
  deletedAt?: Date;
  metadata?: Record<string, any>;
}

const GalleryMediaSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    default: 'image'
  },
  category: {
    type: String,
    default: 'uncategorized',
    trim: true
  },
  vehicleName: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  orientation: {
    type: String,
    enum: ['landscape', 'portrait', 'square'],
    default: 'landscape'
  },
  publicId: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date
  },
  metadata: {
    type: Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true
});

// Index for better query performance
GalleryMediaSchema.index({ isActive: 1, category: 1, type: 1, uploadedAt: -1 });

export default mongoose.models.GalleryMedia || mongoose.model<IGalleryMedia>('GalleryMedia', GalleryMediaSchema);