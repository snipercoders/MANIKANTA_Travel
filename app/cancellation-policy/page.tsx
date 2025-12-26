'use client';

import React from 'react';
import { XCircle, Clock, AlertCircle, Shield } from 'lucide-react';

const CancellationPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <XCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cancellation Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our flexible cancellation policy is designed to accommodate your travel plans while ensuring fairness for all parties involved.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            {/* General Policy Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">General Cancellation Policy</h2>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <p className="text-gray-800 text-lg">
                  All cancellation requests must be made in writing via email to our customer service team. 
                  Refunds will be processed within 7-14 business days to the original payment method.
                </p>
              </div>
            </div>

            {/* Cancellation Timeline */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">Cancellation Charges & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-green-600 mb-3">100%</div>
                  <div className="font-semibold text-green-700 mb-2">Full Refund</div>
                  <p className="text-gray-700 text-sm">More than 30 days before departure</p>
                  <div className="mt-4 text-xs text-green-600 font-medium">Minus processing fees</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-yellow-600 mb-3">75%</div>
                  <div className="font-semibold text-yellow-700 mb-2">Partial Refund</div>
                  <p className="text-gray-700 text-sm">15-30 days before departure</p>
                  <div className="mt-4 text-xs text-yellow-600 font-medium">Service charges apply</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-orange-600 mb-3">50%</div>
                  <div className="font-semibold text-orange-700 mb-2">Half Refund</div>
                  <p className="text-gray-700 text-sm">7-14 days before departure</p>
                  <div className="mt-4 text-xs text-orange-600 font-medium">Processing fees apply</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-red-600 mb-3">0%</div>
                  <div className="font-semibold text-red-700 mb-2">No Refund</div>
                  <p className="text-gray-700 text-sm">Less than 7 days before departure</p>
                  <div className="mt-4 text-xs text-red-600 font-medium">Non-refundable</div>
                </div>
              </div>
            </div>

            {/* Special Cases */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">Special Cases & Exceptions</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-red-700 text-lg mb-3">Flight Bookings</h3>
                  <p className="text-gray-700 mb-3">
                    Subject to airline policies. We assist in processing airline refunds where applicable.
                  </p>
                  <div className="text-red-600 text-sm font-medium">Airline charges may apply</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-red-700 text-lg mb-3">Hotel Reservations</h3>
                  <p className="text-gray-700 mb-3">
                    Non-refundable rates are clearly marked at booking. Flexible rates follow our standard policy.
                  </p>
                  <div className="text-red-600 text-sm font-medium">Hotel policies may vary</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-red-700 text-lg mb-3">Package Tours</h3>
                  <p className="text-gray-700 mb-3">
                    Custom cancellation policies may apply for group tours or special holiday packages.
                  </p>
                  <div className="text-red-600 text-sm font-medium">Check specific package terms</div>
                </div>
              </div>
            </div>

            {/* COVID-19 Policy */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-red-900 mb-6">COVID-19 & Force Majeure Policy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-red-800 mb-3">Flexible Options:</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✓</span>
                      <span>Travel credits valid for 18 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✓</span>
                      <span>Reschedule without change fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✓</span>
                      <span>Full support for documentation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-800 mb-3">Applicable For:</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Government travel restrictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Natural disasters & emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Medical emergencies with proof</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Insurance Recommendation */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Travel Insurance Recommendation</h2>
                <p className="text-gray-800 text-lg mb-4">
                  We strongly recommend purchasing comprehensive travel insurance that covers:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Essential Coverage</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ Trip cancellation & interruption</li>
                      <li>✓ Medical emergencies abroad</li>
                      <li>✓ Lost or delayed baggage</li>
                      <li>✓ Emergency evacuation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Additional Benefits</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>✓ 24/7 travel assistance</li>
                      <li>✓ Trip delay coverage</li>
                      <li>✓ Rental car protection</li>
                      <li>✓ Adventure sports coverage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Need Help with Cancellation?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-white/90">cancellations@manikantatravels.com</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-white/90">+91 95917 62419</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Response Time</h3>
                  <p className="text-white/90">Within 4 hours during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: December 1, 2023 • Policy is subject to change without prior notice
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} Manikanta Tour and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;