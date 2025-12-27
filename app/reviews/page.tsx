// // app/reviews/page.tsx - Updated

'use client';

import { useState, useEffect } from 'react';
import { Star, ThumbsUp, MessageSquare, Filter, Search, Calendar, Users, Check, RefreshCw } from 'lucide-react';
import ReviewForm from '@/components/reviews/ReviewForm';

interface Review {
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
}

interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  verifiedCount: number;
  ratingsDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  excellentPercentage: number;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [stats, setStats] = useState<ReviewStats>({
    averageRating: 0,
    totalReviews: 0,
    verifiedCount: 0,
    ratingsDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    excellentPercentage: 0
  });
  const [filters, setFilters] = useState({
    rating: 'all',
    travelerType: 'all',
    sortBy: 'newest'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [helpfulClicked, setHelpfulClicked] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const travelerTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Business'];

  useEffect(() => {
    fetchReviews();
    fetchStats();
  }, []);

  useEffect(() => {
    filterAndSortReviews();
  }, [reviews, filters, searchQuery]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/reviews');
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const data = await response.json();
      setReviews(data.data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/reviews/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const filterAndSortReviews = () => {
    let result = [...reviews];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(review =>
        review.title.toLowerCase().includes(query) ||
        review.content.toLowerCase().includes(query) ||
        review.author.toLowerCase().includes(query) ||
        review.tourPackageName?.toLowerCase().includes(query) ||
        review.location?.toLowerCase().includes(query)
      );
    }

    if (filters.rating !== 'all') {
      result = result.filter(review => review.rating === parseInt(filters.rating));
    }

    if (filters.travelerType !== 'all') {
      result = result.filter(review => review.travelerType === filters.travelerType);
    }

    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'highest-rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest-rated':
        result.sort((a, b) => a.rating - b.rating);
        break;
      case 'most-helpful':
        result.sort((a, b) => b.helpful - a.helpful);
        break;
    }

    setFilteredReviews(result);
  };

  const handleMarkHelpful = async (reviewId: string) => {
    if (helpfulClicked.has(reviewId)) return;

    try {
      const response = await fetch(`/api/reviews/${reviewId}/helpful`, { method: 'POST' });
      if (response.ok) {
        setReviews(prev =>
          prev.map(review =>
            review.id === reviewId ? { ...review, helpful: review.helpful + 1 } : review
          )
        );
        setHelpfulClicked(prev => new Set(prev).add(reviewId));
      }
    } catch (error) {
      console.error('Error marking helpful:', error);
    }
  };

  const handleReviewAdded = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
    fetchStats();
    setShowReviewForm(false);
  };

  const getRatingStats = () => {
    const distribution = stats.ratingsDistribution;
    const total = Object.values(distribution).reduce((a, b) => a + b, 0);
    return Object.entries(distribution)
      .sort(([a], [b]) => parseInt(b) - parseInt(a))
      .map(([rating, count]) => ({
        rating: parseInt(rating),
        count,
        percentage: total > 0 ? Math.round((count / total) * 100) : 0
      }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-red-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Red Theme */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Customer <span className="text-yellow-300">Reviews</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-3xl">
                Real experiences from real travelers. Read and share your journey.
              </p>
            </div>
            <button
              onClick={() => setShowReviewForm(true)}
              className="px-8 py-4 bg-white text-red-700 font-bold text-lg rounded-xl hover:bg-gray-100 transition shadow-lg"
            >
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Stats */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Overall Rating */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overall Rating</h2>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-red-600">{stats.averageRating.toFixed(1)}</div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-8 w-8 ${i < Math.round(stats.averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-2">{stats.totalReviews} reviews</p>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                {getRatingStats().map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex items-center w-12">
                      <span className="font-medium">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-700 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-10 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Verified Reviews</span>
                  <span className="font-bold text-green-600">{stats.verifiedCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">5-Star Reviews</span>
                  <span className="font-bold text-red-600">{stats.ratingsDistribution[5]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Most Helpful</span>
                  <span className="font-bold">{reviews.length > 0 ? Math.max(...reviews.map(r => r.helpful)) : 0} votes</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Reviews */}
         
 <div className="lg:col-span-3">
            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reviews..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  />
                </div>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="most-helpful">Most Helpful</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-4 mt-5">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500"
                  >
                    <option value="all">All Ratings</option>
                    {[5, 4, 3, 2, 1].map(n => (
                      <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <select
                  value={filters.travelerType}
                  onChange={(e) => setFilters({ ...filters, travelerType: e.target.value })}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">All Travelers</option>
                  {travelerTypes.map(type => <option key={type}>{type}</option>)}
                </select>
              </div>
            </div>

            {/* Reviews Count */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {filteredReviews.length} Review{filteredReviews.length !== 1 ? 's' : ''}
              </h2>
            </div>

            {/* Reviews List */}
            <div className="space-y-8">
              {filteredReviews.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No Reviews Found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    {searchQuery ? `No results for "${searchQuery}"` : 'Be the first to share your experience!'}
                  </p>
                  <button
                    onClick={() => setShowReviewForm(true)}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition shadow-lg"
                  >
                    Write the First Review
                  </button>
                </div>
              ) : (
                filteredReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="ml-3 text-2xl font-bold text-gray-900">{review.rating}.0</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{review.title}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{review.date}</p>
                        {review.verified && (
                          <p className="text-sm text-green-600 font-medium flex items-center justify-end gap-1 mt-1">
                            <Check className="h-4 w-4" /> Verified
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{review.content}</p>

                    {review.images && review.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {review.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Review ${i + 1}`}
                            className="w-full h-40 object-cover rounded-xl border border-gray-200"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {review.travelerType}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {review.monthOfTravel}
                      </div>
                      {review.tripDuration && <span>• {review.tripDuration}</span>}
                    </div>

                    {review.tourPackageName && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <p className="text-red-800 font-medium">
                          Package: {review.tourPackageName}
                        </p>
                        {review.location && <p className="text-red-700 text-sm mt-1">{review.location}</p>}
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-5 border-t">
                      <p className="font-bold text-gray-900 text-lg">{review.author}</p>
                      <button
                        onClick={() => handleMarkHelpful(review.id)}
                        disabled={helpfulClicked.has(review.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition ${
                          helpfulClicked.has(review.id)
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <ThumbsUp className="h-5 w-5" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Review Form Modal */}
      <ReviewForm
        isOpen={showReviewForm}
        onClose={() => setShowReviewForm(false)}
        onReviewAdded={handleReviewAdded}
      />
    </div>
  );
}
