// File Path: components/search/TrustpilotWidget.tsx

'use client';

import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function TrustpilotWidget() {
  const [reviews, setReviews] = useState({
    rating: 4.8,
    totalReviews: 1247,
    breakdown: {
      5: 892,
      4: 234,
      3: 78,
      2: 32,
      1: 11,
    },
  });

  // In production, fetch from Trustpilot API
  // useEffect(() => {
  //   fetch('/api/trustpilot')
  //     .then(res => res.json())
  //     .then(data => setReviews(data));
  // }, []);

  const calculatePercentage = (count: number) => {
    return ((count / reviews.totalReviews) * 100).toFixed(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Customer Reviews
        </h2>
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg"
            alt="Trustpilot"
            className="h-6"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="text-5xl font-bold text-gray-900 mr-3">
              {reviews.rating}
            </span>
            <div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(reviews.rating)
                        ? 'text-green-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Based on {reviews.totalReviews.toLocaleString()} reviews
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Rated <strong>Excellent</strong> by our customers
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 w-16">
                <span className="text-sm font-medium text-gray-700">{stars}</span>
                <StarIcon className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-green-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${calculatePercentage(reviews.breakdown[stars as keyof typeof reviews.breakdown])}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">
                {calculatePercentage(reviews.breakdown[stars as keyof typeof reviews.breakdown])}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 pt-6 border-t text-center">
        <p className="text-gray-700 mb-3">
          See what our customers are saying about us
        </p>
        <a
          href="https://www.trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Read All Reviews on Trustpilot
        </a>
      </div>

      {/* Recent Reviews Sample */}
      <div className="mt-8 space-y-4">
        <h3 className="font-semibold text-gray-900">Recent Reviews</h3>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-green-500" />
              ))}
            </div>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            "Amazing experience! The tour was well-organized and our guide was knowledgeable. 
            Highly recommend Chandan Tours for anyone visiting India."
          </p>
          <p className="text-sm font-medium text-gray-900">- Priya S.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-green-500" />
              ))}
            </div>
            <span className="text-sm text-gray-500">5 days ago</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            "Best travel agency! They took care of everything from booking to accommodation. 
            Will definitely book again for my next trip."
          </p>
          <p className="text-sm font-medium text-gray-900">- Rahul M.</p>
        </div>
      </div>
    </div>
  );
}