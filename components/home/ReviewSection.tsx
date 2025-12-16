// // File Path: components/home/ReviewSection.tsx - UPDATED TO FETCH FROM API
// 'use client';

// import { useState, useEffect } from 'react';
// import { Review } from '@/lib/types/review';
// import { StarIcon } from '@heroicons/react/24/solid';

// // ReviewCard component
// function ReviewCard({ review }: { review: Review }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <div className="flex items-center gap-2">
//             <h3 className="font-bold text-lg text-gray-900">{review.author || 'Anonymous'}</h3>
//           </div>
//           <div className="flex items-center gap-1 mt-1">
//             {[...Array(5)].map((_, index) => (
//               <StarIcon
//                 key={index}
//                 className={`h-4 w-4 ${index < (review.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
//               />
//             ))}
//             <span className="ml-2 text-sm text-gray-600">{(review.rating || 5).toFixed(1)}</span>
//           </div>
//         </div>
//         <div className="text-sm text-gray-500">
//           {review.date || new Date().toLocaleDateString()}
//         </div>
//       </div>
//       <h4 className="font-semibold text-gray-800 mb-2 text-lg">{review.title || 'Great Experience!'}</h4>
//       <p className="text-gray-600 mb-4">{review.content || 'Excellent service!'}</p>
//       {review.location && (
//         <div className="text-sm text-gray-500">
//           📍 {review.location}
//         </div>
//       )}
//     </div>
//   );
// }

// // ReviewForm component
// function ReviewForm({ onSuccess }: { onSuccess: () => void }) {
//   const [formData, setFormData] = useState({
//     author: '',
//     rating: 5,
//     title: '',
//     content: '',
//     location: '',
//     tourPackageName: ''
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError('');
//     setSuccess('');

//     try {
//       const response = await fetch('/api/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSuccess('Review submitted successfully!');
//         setFormData({
//           author: '',
//           rating: 5,
//           title: '',
//           content: '',
//           location: '',
//           tourPackageName: ''
//         });
//         setTimeout(() => {
//           onSuccess();
//         }, 2000);
//       } else {
//         setError(data.error || 'Failed to submit review');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//       <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
      
//       {error && (
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
//           {error}
//         </div>
//       )}
      
//       {success && (
//         <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
//           {success}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Rating */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Your Rating
//           </label>
//           <div className="flex space-x-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button
//                 key={star}
//                 type="button"
//                 onClick={() => setFormData({ ...formData, rating: star })}
//                 className="focus:outline-none"
//               >
//                 <StarIcon
//                   className={`h-8 w-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         <input
//           type="text"
//           placeholder="Your Name *"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//           value={formData.author}
//           onChange={(e) => setFormData({...formData, author: e.target.value})}
//           required
//         />
        
//         <input
//           type="text"
//           placeholder="Review Title *"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//           value={formData.title}
//           onChange={(e) => setFormData({...formData, title: e.target.value})}
//           required
//         />
        
//         <input
//           type="text"
//           placeholder="Location (Optional)"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//           value={formData.location}
//           onChange={(e) => setFormData({...formData, location: e.target.value})}
//         />
        
//         <textarea
//           placeholder="Your Review *"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//           rows={4}
//           value={formData.content}
//           onChange={(e) => setFormData({...formData, content: e.target.value})}
//           required
//         />
        
//         <button 
//           type="submit" 
//           disabled={submitting}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
//         >
//           {submitting ? 'Submitting...' : 'Submit Review'}
//         </button>
//       </form>
//     </div>
//   );
// }

// // Main ReviewSection component
// export default function ReviewSection() {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchReviews = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       const response = await fetch('/api/reviews?limit=6');
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       if (data.success) {
//         // Transform the data to match Review type
//         const formattedReviews = data.data.map((review: any) => ({
//           _id: review._id || review.id,
//           id: review.id || review._id,
//           author: review.author || 'Anonymous',
//           rating: review.rating || 5,
//           title: review.title || '',
//           content: review.content || '',
//           date: review.date || new Date().toISOString().split('T')[0],
//           verified: review.verified || false,
//           helpful: review.helpful || 0,
//           location: review.location || '',
//           tourPackageName: review.tourPackageName || '',
//           tourPackageId: review.tourPackageId || '',
//           createdAt: review.createdAt || new Date().toISOString(),
//         }));
        
//         setReviews(formattedReviews);
//       } else {
//         throw new Error(data.error || 'Failed to fetch reviews');
//       }
//     } catch (error: any) {
//       console.error('Error fetching reviews:', error);
//       setError(error.message || 'Failed to load reviews');
      
//       // Fallback to mock data
//       const mockReviews: Review[] = [
//         {
//           _id: '1',
//           id: '1',
//           author: 'Rahul Sharma',
//           rating: 5,
//           title: 'Amazing Kerala Trip!',
//           content: 'Excellent service and beautiful destinations.',
//           date: '2024-01-15',
//           verified: true,
//           helpful: 24,
//           location: 'Kerala',
//           tourPackageName: 'Kerala Backwaters Tour',
//           tourPackageId: 'kerala-1',
//           createdAt: '2024-01-15T10:30:00Z'
//         },
//         {
//           _id: '2',
//           id: '2',
//           author: 'Priya Patel',
//           rating: 4,
//           title: 'Great Family Vacation',
//           content: 'Comfortable buses and knowledgeable guides.',
//           date: '2024-01-10',
//           verified: true,
//           helpful: 18,
//           location: 'Mysore',
//           tourPackageName: 'Mysore Palace Tour',
//           tourPackageId: 'mysore-1',
//           createdAt: '2024-01-10T14:20:00Z'
//         },
//         {
//           _id: '3',
//           id: '3',
//           author: 'Ankit Verma',
//           rating: 5,
//           title: 'Best Travel Service',
//           content: 'Professional drivers and excellent customer support.',
//           date: '2024-01-05',
//           verified: true,
//           helpful: 32,
//           location: 'Bangalore',
//           tourPackageName: 'Bangalore City Tour',
//           tourPackageId: 'bangalore-1',
//           createdAt: '2024-01-05T09:15:00Z'
//         },
//       ];
//       setReviews(mockReviews);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const handleReviewSubmitted = () => {
//     setShowForm(false);
//     fetchReviews(); // Refresh reviews after submission
//   };

//   return (
//     <section id="reviews" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <div className="text-center mb-10 sm:mb-12">
//         <div className="flex justify-center mb-4">
//           <div className="flex space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <StarIcon key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
//             ))}
//           </div>
//         </div>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
//           What Our Travelers Say
//         </h2>
//         <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-6">
//           Real experiences from real travelers who explored with us
//         </p>
        
//       </div>

//       {/* Error Message */}
//       {error && !loading && (
//         <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg mb-6 text-center">
//           {error} - Showing sample reviews
//         </div>
//       )}

//       {showForm && (
//         <div className="mb-10 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
//           <ReviewForm onSuccess={handleReviewSubmitted} />
//         </div>
//       )}

//       {loading ? (
//         <div className="text-center py-8 sm:py-12">
//           <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">Loading reviews...</p>
//         </div>
//       ) : reviews.length > 0 ? (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {reviews.map((review) => (
//               <ReviewCard key={review._id || review.id} review={review} />
//             ))}
//           </div>
          
//           <div className="text-center mt-10">
//             <button
//               onClick={fetchReviews}
//               className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
//             >
//               🔄 Load More Reviews
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="text-center py-8 sm:py-12 bg-gray-100 rounded-lg">
//           <p className="text-gray-600 text-sm sm:text-base">No reviews yet. Be the first to share your experience!</p>
//         </div>
//       )}
//     </section>
//   );
// }


// File Path: components/home/ReviewSection.tsx - WITH HERO THEME (API-ONLY REVIEWS)
'use client';

import { useState, useEffect } from 'react';
import { Review } from '@/lib/types/review';
import { StarIcon } from '@heroicons/react/24/solid';

// ReviewCard component with hero theme
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-orange-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg text-gray-900">{review.author || 'Anonymous'}</h3>
            {review.verified && (
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-xs px-2 py-1 rounded-full">
                ✓ Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-4 w-4 ${index < (review.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-sm text-orange-600 font-semibold">{(review.rating || 5).toFixed(1)}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {review.date || new Date().toLocaleDateString()}
        </div>
      </div>
      <h4 className="font-semibold text-gray-800 mb-2 text-lg">{review.title || 'Great Experience!'}</h4>
      <p className="text-gray-600 mb-4">{review.content || 'Excellent service!'}</p>
      {review.location && (
        <div className="text-sm text-orange-600 font-medium">
          📍 {review.location}
        </div>
      )}
    </div>
  );
}

// ReviewForm component with hero theme (unchanged)
function ReviewForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    title: '',
    content: '',
    location: '',
    tourPackageName: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Review submitted successfully!');
        setFormData({
          author: '',
          rating: 5,
          title: '',
          content: '',
          location: '',
          tourPackageName: ''
        });
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setError(data.error || 'Failed to submit review');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
      
      {error && (
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className="focus:outline-none hover:scale-110 transition-transform"
              >
                <StarIcon
                  className={`h-8 w-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Your Name *"
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={formData.author}
          onChange={(e) => setFormData({...formData, author: e.target.value})}
          required
        />
        
        <input
          type="text"
          placeholder="Review Title *"
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
        
        <input
          type="text"
          placeholder="Location (Optional)"
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
        
        <textarea
          placeholder="Your Review *"
          className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          rows={4}
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          required
        />
        
        <button 
          type="submit" 
          disabled={submitting}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}

// Main ReviewSection component - Now API-only
export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch('/api/reviews?limit=6');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        const formattedReviews = data.data.map((review: any) => ({
          _id: review._id || review.id,
          id: review.id || review._id,
          author: review.author || 'Anonymous',
          rating: review.rating || 5,
          title: review.title || '',
          content: review.content || '',
          date: review.date || new Date().toISOString().split('T')[0],
          verified: review.verified || false,
          helpful: review.helpful || 0,
          location: review.location || '',
          tourPackageName: review.tourPackageName || '',
          tourPackageId: review.tourPackageId || '',
          createdAt: review.createdAt || new Date().toISOString(),
        }));
        
        setReviews(formattedReviews);
      } else {
        throw new Error(data.error || 'Failed to fetch reviews');
      }
    } catch (err: any) {
      console.error('Error fetching reviews:', err);
      setError(err.message || 'Failed to load reviews. Please try again later.');
      setReviews([]); // Ensure empty state on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReviewSubmitted = () => {
    setShowForm(false);
    fetchReviews(); // Refresh after new review
  };

  return (
    <section id="reviews" className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      <div className="text-center mb-10 sm:mb-12">
        <div className="flex justify-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
            ))}
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Real experiences from real travelers who explored with us
        </p>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {showForm ? 'Close Review Form' : '✍️ Write a Review'}
        </button>
      </div>

      {/* Error Message */}
      {error && !loading && (
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg mb-6 text-center max-w-2xl mx-auto">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-10 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
          <ReviewForm onSuccess={handleReviewSubmitted} />
        </div>
      )}

      {loading ? (
        <div className="text-center py-8 sm:py-12">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">Loading reviews...</p>
        </div>
      ) : reviews.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review._id || review.id} review={review} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button
              onClick={fetchReviews}
              className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              🔄 Load More Reviews
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8 sm:py-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <p className="text-gray-600 text-sm sm:text-base">No reviews yet. Be the first to share your experience!</p>
        </div>
      )}
    </section>
  );
}