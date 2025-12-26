//app/refund-policy/page.tsx

// app/refund-policy/page.tsx

'use client';

import React from 'react';
import { 
  RefreshCw, 
  CreditCard, 
  Clock, 
  Car, 
  Bus, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle 
} from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Clear and transparent refund guidelines for all our transportation services. 
              Your satisfaction and peace of mind are our top priorities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            
            {/* Introduction */}
            <div className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center gap-4">
                <Shield className="h-10 w-10 text-red-700" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Fair & Transparent Refunds</h3>
                  <p className="text-gray-800">
                    At Manikanta Tour and Travels, we believe in fair refund practices. 
                    Our policy is designed to be clear, reasonable, and customer-friendly.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Timeline Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">Refund Timeline & Charges</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Full Refund Card */}
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                    <div className="font-bold text-green-700 text-lg mb-2">Full Refund</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-lg mb-3">
                      Cancelled 48+ hours before trip
                    </div>
                    <p className="text-gray-700 text-sm">
                      Complete refund excluding payment gateway charges (1-3%)
                    </p>
                  </div>
                </div>

                {/* Partial Refund Card */}
                <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                      <Clock className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div className="text-4xl font-bold text-yellow-600 mb-2">50%</div>
                    <div className="font-bold text-yellow-700 text-lg mb-2">Partial Refund</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 text-yellow-800 font-semibold px-4 py-2 rounded-lg mb-3">
                      24-48 hours before trip
                    </div>
                    <p className="text-gray-700 text-sm">
                      Half amount refunded after deducting service & processing fees
                    </p>
                  </div>
                </div>

                {/* No Refund Card */}
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <XCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="text-4xl font-bold text-red-600 mb-2">0%</div>
                    <div className="font-bold text-red-700 text-lg mb-2">No Refund</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 text-red-800 font-semibold px-4 py-2 rounded-lg mb-3">
                      Less than 24 hours before trip
                    </div>
                    <p className="text-gray-700 text-sm">
                      Complete amount retained due to operational commitments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Process Details */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">Refund Process & Timeline</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <div className="text-2xl font-bold text-blue-700 mb-2">Step 1</div>
                      <h4 className="font-bold text-blue-900">Request Submission</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Submit refund request via email or WhatsApp with booking details
                    </p>
                    <div className="mt-3 text-blue-600 text-xs font-medium">
                      Response within 4 hours
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <div className="text-2xl font-bold text-blue-700 mb-2">Step 2</div>
                      <h4 className="font-bold text-blue-900">Verification</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Our team verifies booking details and cancellation timing
                    </p>
                    <div className="mt-3 text-blue-600 text-xs font-medium">
                      24-hour verification period
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                      <div className="text-2xl font-bold text-blue-700 mb-2">Step 3</div>
                      <h4 className="font-bold text-blue-900">Processing</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Refund initiated to original payment method after approval
                    </p>
                    <div className="mt-3 text-blue-600 text-xs font-medium">
                      5-7 business days processing
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Processing Time</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Net Banking: 3-5 business days</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Credit/Debit Cards: 5-7 business days</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>UPI/Wallets: 2-3 business days</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Deductions Applied</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Payment gateway charges: 1-3%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Service fees (if applicable)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Bank processing charges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service-Specific Policies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service-Specific Refund Policies</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="h-8 w-8 text-red-700" />
                    <h3 className="font-bold text-red-900 text-lg">Cars & Sedans</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>48+ hours: Full refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>24-48 hours: 50% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Late cancellations: No refund</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="h-8 w-8 text-orange-700" />
                    <h3 className="font-bold text-orange-900 text-lg">Tempo Travellers</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>72+ hours: Full refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>48-72 hours: 50% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>Late cancellations: No refund</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bus className="h-8 w-8 text-amber-700" />
                    <h3 className="font-bold text-amber-900 text-lg">Buses & Minibuses</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>7+ days: Full refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>3-7 days: 50% refund</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span>Late cancellations: No refund</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Non-Refundable Cases */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-red-900/10 to-red-800/10 border-2 border-red-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">Non-Refundable Situations</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-red-700 mb-3">Operational Reasons</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>No-shows or missed trips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Changes in travel plans after departure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Service utilized partially</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-red-700 mb-3">Special Circumstances</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Special event/season bookings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Customized/personalized services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <span>Force majeure events affecting costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Refund Assistance & Support</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp Support</h3>
                  <p className="text-white/90">+91 95917 62419</p>
                  <p className="text-white/80 text-sm mt-1">Quick refund queries</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Support</h3>
                  <p className="text-white/90">refunds@manikantatravels.com</p>
                  <p className="text-white/80 text-sm mt-1">Formal refund requests</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Processing Time</h3>
                  <p className="text-white/90">5-7 Business Days</p>
                  <p className="text-white/80 text-sm mt-1">After approval</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-10 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-yellow-900 text-lg mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• All refund calculations are based on the total booking amount</li>
                    <li>• Refunds are processed only to the original payment method</li>
                    <li>• Processing time begins after formal approval of refund request</li>
                    <li>• Weekend and bank holidays are not counted in processing days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: December 1, 2023 • Refund policy is subject to change
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} Manikanta Tour and Travels. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Website crafted by SniperCoders
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;