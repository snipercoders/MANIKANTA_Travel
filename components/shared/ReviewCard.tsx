'use client';

import { Review } from '@/lib/types/review';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          i < rating ? (
            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarOutlineIcon key={i} className="h-5 w-5 text-gray-300" />
          )
        ))}
      </div>
    );
  };

  const formatDate = (date?: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <UserCircleIcon className="h-12 w-12 text-gray-400" />
          <div>
            {/* FIXED: Changed from review.name to review.author */}
            <h3 className="font-semibold text-gray-900">{review.author}</h3>
            {/* FIXED: Show travelerType instead of tripType */}
            <span className="text-sm text-gray-500">{review.travelerType}</span>
          </div>
        </div>
        {renderStars(review.rating)}
      </div>

      {/* Comment */}
      <p className="text-gray-700 mb-4 line-clamp-4">{review.content}</p>

      {/* Images */}
      {review.images && review.images.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {review.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review ${index + 1}`}
              className="w-full h-20 object-cover rounded"
            />
          ))}
        </div>
      )}

      {/* Date */}
      <div className="text-sm text-gray-500 border-t pt-3">
        {formatDate(review.createdAt)}
      </div>
    </div>
  );
}