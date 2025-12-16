// components/reviews/ReviewForm.tsx

'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Star, X, Calendar, Users, Upload, Check, Image as ImageIcon, XCircle } from 'lucide-react';
import { tourPackages } from '@/lib/data/packages';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewAdded: (review: any) => void;
}

interface ReviewFormData {
  author: string;
  email: string;
  rating: number;
  title: string;
  content: string;
  tourPackageId: string;
  travelerType: string;
  monthOfTravel: string;
  tripDuration: string;
  images: File[];
}

export default function ReviewForm({ isOpen, onClose, onReviewAdded }: ReviewFormProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    author: '',
    email: '',
    rating: 5,
    title: '',
    content: '',
    tourPackageId: '',
    travelerType: 'Family',
    monthOfTravel: '',
    tripDuration: '',
    images: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const travelerTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Business'];
  const months = [
    'January 2024', 'February 2024', 'March 2024', 'April 2024',
    'May 2024', 'June 2024', 'July 2024', 'August 2024',
    'September 2024', 'October 2024', 'November 2024', 'December 2024',
    'January 2023', 'February 2023', 'March 2023', 'April 2023',
    'May 2023', 'June 2023', 'July 2023', 'August 2023',
    'September 2023', 'October 2023', 'November 2023', 'December 2023'
  ];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Validate file types and size
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      
      if (!isValidType) {
        alert(`Invalid file type: ${file.name}. Please upload JPEG, JPG, PNG, or WebP images.`);
        return false;
      }
      
      if (!isValidSize) {
        alert(`File too large: ${file.name}. Maximum size is 5MB.`);
        return false;
      }
      
      return true;
    });

    // Limit to 5 images
    const currentCount = formData.images.length;
    const remainingSlots = 5 - currentCount;
    const filesToAdd = validFiles.slice(0, remainingSlots);
    
    if (filesToAdd.length < validFiles.length) {
      alert(`You can only upload ${remainingSlots} more image(s). Maximum 5 images allowed.`);
    }

    const newFiles = [...formData.images, ...filesToAdd];
    setFormData(prev => ({ ...prev, images: newFiles }));

    // Create preview URLs
    const newPreviews = filesToAdd.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);

    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    const newFiles = formData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviews[index]);
    
    setFormData(prev => ({ ...prev, images: newFiles }));
    setImagePreviews(newPreviews);
  };

  const uploadImagesToCloudinary = async (files: File[]): Promise<string[]> => {
    if (files.length === 0) return [];

    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to upload images');
      }

      const result = await response.json();
      return result.data || [];
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadingImages(true);
    setUploadProgress(0);

    try {
      let imageUrls: string[] = [];
      
      // Upload images to Cloudinary via API
      if (formData.images.length > 0) {
        imageUrls = await uploadImagesToCloudinary(formData.images);
        setUploadProgress(100);
      }

      const selectedPackage = tourPackages.find(p => p.id === parseInt(formData.tourPackageId));
      
      // Prepare review data
      const reviewData = {
        author: formData.author,
        email: formData.email,
        rating: formData.rating,
        title: formData.title,
        content: formData.content,
        tourPackageId: selectedPackage ? parseInt(formData.tourPackageId) : undefined,
        tourPackageName: selectedPackage?.name,
        location: selectedPackage?.location,
        travelerType: formData.travelerType,
        monthOfTravel: formData.monthOfTravel,
        tripDuration: formData.tripDuration,
        images: imageUrls,
      };

      // Send review to API
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const result = await response.json();
      
      onReviewAdded(result.data);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          author: '',
          email: '',
          rating: 5,
          title: '',
          content: '',
          tourPackageId: '',
          travelerType: 'Family',
          monthOfTravel: '',
          tripDuration: '',
          images: [],
        });
        setImagePreviews([]);
        imagePreviews.forEach(url => URL.revokeObjectURL(url));
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
      setUploadingImages(false);
      setUploadProgress(0);
    }
  };

  const handleInputChange = (field: keyof ReviewFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Travel Experience</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You for Your Review!
            </h3>
            <p className="text-gray-600 mb-6">
              Your review has been submitted successfully and will be visible to others.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating *
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleInputChange('rating', star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= formData.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-4 text-xl font-bold text-gray-700">
                    {formData.rating}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Review Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Summarize your experience in a few words"
                  maxLength={100}
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.title.length}/100 characters
                </div>
              </div>

              {/* Review Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Experience *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                  placeholder="Tell us about your experience with Chandan Tours. What did you like? What could be improved?"
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.content.length}/500 characters
                </div>
              </div>

              {/* Trip Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Traveler Type *
                  </label>
                  <select
                    value={formData.travelerType}
                    onChange={(e) => handleInputChange('travelerType', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {travelerTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Month of Travel *
                  </label>
                  <select
                    value={formData.monthOfTravel}
                    onChange={(e) => handleInputChange('monthOfTravel', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trip Duration *
                  </label>
                  <input
                    type="text"
                    value={formData.tripDuration}
                    onChange={(e) => handleInputChange('tripDuration', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., 7 Days, 2 Weeks"
                  />
                </div>
              </div>

              {/* Tour Package Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Package (Optional)
                </label>
                <select
                  value={formData.tourPackageId}
                  onChange={(e) => handleInputChange('tourPackageId', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select package (if applicable)</option>
                  {tourPackages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.location} ({pkg.duration} days)
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photos (Optional)
                </label>
                
                {/* Image Previews */}
                {imagePreviews.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {formData.images.length}/5 photos selected
                    </p>
                  </div>
                )}

                {/* Upload Progress Bar */}
                {uploadingImages && formData.images.length > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Uploading images...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Upload Area */}
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    disabled={uploadingImages || isSubmitting}
                  />
                  <label
                    htmlFor="image-upload"
                    className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      uploadingImages || isSubmitting
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Upload className={`h-8 w-8 mx-auto mb-2 ${
                      uploadingImages || isSubmitting ? 'text-gray-300' : 'text-gray-400'
                    }`} />
                    <p className={`text-sm mb-2 ${
                      uploadingImages || isSubmitting ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {uploadingImages || isSubmitting 
                        ? 'Upload in progress...' 
                        : 'Click to upload photos of your trip'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Maximum 5 photos, 5MB each. Supported: JPEG, JPG, PNG, WebP
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || uploadingImages}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 ${
                    isSubmitting || uploadingImages
                      ? 'opacity-75 cursor-not-allowed'
                      : 'hover:from-green-700 hover:to-teal-700 hover:shadow-lg'
                  }`}
                >
                  {uploadingImages ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading Images...
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Your Review'
                  )}
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Your review will be visible immediately to other travelers.
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}