// components/search/TrustpilotWidget.tsx

'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ThumbsUp, X, Calendar, Users, Upload, Check, MessageSquare } from 'lucide-react';
import { reviewService } from '@/lib/database/reviews';
import { tourPackages } from '@/lib/data/packages';
import { Review } from '@/lib/types/review';

export default function TrustpilotWidget() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    rating: 5,
    title: '',
    content: '',
    tourPackageId: '',
    travelerType: 'Family' as Review['travelerType'],
    monthOfTravel: '',
    tripDuration: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load reviews on component mount
    setReviews(reviewService.getFeaturedReviews());
  }, []);

  const stats = reviewService.getStats();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const selectedPackage = tourPackages.find(p => p.id === parseInt(formData.tourPackageId));
      
      const newReview = await reviewService.addReview({
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
      });

      // Update the reviews list with the new review
      setReviews(prev => [newReview, ...prev].slice(0, 6));
      
      setSubmitSuccess(true);
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
      });

      setTimeout(() => {
        setSubmitSuccess(false);
        setShowReviewForm(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMarkHelpful = async (reviewId: string) => {
    if (helpfulClicked.has(reviewId)) {
      return; // Prevent multiple clicks
    }

    const updatedReview = await reviewService.markHelpful(reviewId);
    if (updatedReview) {
      // Update the review in the state
      setReviews(prev => 
        prev.map(review => 
          review.id === reviewId 
            ? { ...review, helpful: updatedReview.helpful }
            : review
        )
      );
      setHelpfulClicked(prev => new Set(prev).add(reviewId));
    }
  };

  const travelerTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Business'];
  const months = [
    'January 2024', 'February 2024', 'March 2024', 'April 2024',
    'May 2024', 'June 2024', 'July 2024', 'August 2024',
    'September 2024', 'October 2024', 'November 2024', 'December 2024',
    'January 2023', 'February 2023', 'March 2023', 'April 2023',
    'May 2023', 'June 2023', 'July 2023', 'August 2023',
    'September 2023', 'October 2023', 'November 2023', 'December 2023'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Header with Trust Score */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews & Ratings
            </h2>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(stats.averageRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-xl font-bold text-gray-900">
                {stats.averageRating}
              </span>
              <span className="ml-1 text-gray-600">/ 5.0</span>
            </div>
            <span className="text-gray-600">
              Based on {stats.totalReviews} verified reviews
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.excellentPercentage}%</div>
            <div className="text-sm text-gray-600">Excellent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{stats.totalReviews}+</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4">Rating Breakdown</h3>
        {[5, 4, 3, 2, 1].map(rating => (
          <div key={rating} className="flex items-center mb-3">
            <div className="flex items-center w-20">
              <span className="text-sm text-gray-700 font-medium w-6">{rating}</span>
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-2" />
            </div>
            <div className="flex-1 mx-4">
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                  style={{ 
                    width: `${stats.totalReviews > 0 ? (stats.ratingsDistribution[rating as keyof typeof stats.ratingsDistribution] / stats.totalReviews) * 100 : 0}%` 
                  }}
                />
              </div>
            </div>
            <span className="text-sm text-gray-600 w-12 text-right">
              {stats.ratingsDistribution[rating as keyof typeof stats.ratingsDistribution]}
            </span>
          </div>
        ))}
      </div>

      {/* Recent Reviews Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Recent Reviews</h3>
        <button 
          onClick={() => setShowReviewForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Star className="h-4 w-4" />
          Write a Review
        </button>
      </div>

      {/* Review Slider */}
      <div className="relative mb-8">
        {reviews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reviews Yet</h3>
            <p className="text-gray-600 mb-4">Be the first to share your experience!</p>
            <button 
              onClick={() => setShowReviewForm(true)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Write First Review
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                      {/* Review Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {review.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{review.date}</div>
                          {review.verified && (
                            <div className="text-xs text-green-600 font-medium flex items-center justify-end mt-1">
                              <Check className="h-3 w-3 mr-1" />
                              Verified
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="mb-4">
                        <p className="text-gray-700 line-clamp-3">
                          "{review.content}"
                        </p>
                      </div>

                      {/* Review Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {review.author}
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-2">
                            <Users className="h-3 w-3" />
                            {review.travelerType} • {review.monthOfTravel} • {review.tripDuration}
                          </div>
                          {review.tourPackageName && (
                            <div className="text-xs text-blue-600 mt-1">
                              Package: {review.tourPackageName}
                            </div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleMarkHelpful(review.id)}
                          disabled={helpfulClicked.has(review.id)}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                            helpfulClicked.has(review.id)
                              ? 'bg-green-100 text-green-700 cursor-default'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {reviews.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide
                          ? 'bg-green-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Review Submission Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Share Your Travel Experience</h2>
              <button
                onClick={() => setShowReviewForm(false)}
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
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="p-6">
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
                        onChange={(e) => setFormData({...formData, author: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                          onClick={() => setFormData({...formData, rating: star})}
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
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Summarize your experience in a few words"
                      maxLength={100}
                    />
                  </div>

                  {/* Review Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Experience *
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, travelerType: e.target.value as Review['travelerType']})}
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
                        onChange={(e) => setFormData({...formData, monthOfTravel: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, tripDuration: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, tourPackageId: e.target.value})}
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

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-green-700 hover:to-teal-700 hover:shadow-lg'
                      }`}
                    >
                      {isSubmitting ? (
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
      )}
    </div>
  );
}