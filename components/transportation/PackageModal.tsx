// File Path: components/transportation/PackageModal.tsx

'use client';

import { TourPackage } from '@/lib/types/package';
import { XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface PackageModalProps {
  package: TourPackage;
  onClose: () => void;
}

export default function PackageModal({ package: pkg, onClose }: PackageModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">{pkg.title}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 max-h-96 overflow-y-auto">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Package</h3>
              <p className="text-gray-700">{pkg.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">{pkg.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Destination</p>
                <p className="font-semibold text-gray-900">{pkg.destination}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold text-gray-900">{pkg.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Max People</p>
                <p className="font-semibold text-gray-900">{pkg.maxPeople || 'Flexible'}</p>
              </div>
            </div>

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tour Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
              <div className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Accommodation:</strong> {pkg.includesBox ? 'Included in package' : 'Not included - can be arranged separately'}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              {pkg.price > 0 ? (
                <>
                  <div className="text-3xl font-bold text-blue-600">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-gray-500">per person</p>
                </>
              ) : (
                <div className="text-2xl font-bold text-blue-600">
                  Custom Pricing Available
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@chandantour.com?subject=Inquiry about ${pkg.title}"
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}