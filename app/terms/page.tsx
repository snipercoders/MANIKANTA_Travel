'use client';

import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Clock, UserCheck } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our travel booking services. 
              By accessing or using our website, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="px-6 py-8 sm:px-10 sm:py-12">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-800 text-lg">
                  By accessing and using <span className="font-bold text-red-700">Manikanta Tour and Travels</span> website 
                  and services, you accept and agree to be bound by these Terms and Conditions. 
                  If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Booking Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">2. Booking & Reservations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-800 text-lg mb-3">Booking Process</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>All bookings subject to availability & confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Prices may change until payment confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Accurate passenger details required</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-800 text-lg mb-3">Payment Terms</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Full payment required for confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Service fees apply to all bookings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Multiple payment methods accepted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel Requirements */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">3. Travel Documents & Requirements</h2>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-red-900 text-xl mb-4">International Travel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Valid passport (6+ months validity)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Required visas for destination</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Vaccination certificates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Return/onward ticket proof</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-red-900 text-xl mb-4">Domestic Travel</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Government-issued photo ID</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Booking confirmation copy</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Age proof for children/seniors</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg">
                          <span className="text-red-700 font-bold">✓</span>
                        </div>
                        <span className="text-gray-800">Special permits if required</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Liability Disclaimer */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">4. Liability & Responsibility</h2>
              </div>
              
              <div className="bg-red-900/10 border-2 border-red-800 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Important Disclaimer</h3>
                  <p className="text-red-800 text-lg font-medium">
                    Manikanta Tour and Travels acts as a booking agent only. We are not liable for any acts, 
                    omissions, or breaches of contract by travel service providers.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-red-700 mb-3">We Are Not Responsible For:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Flight delays or cancellations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Hotel overbooking issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Lost luggage or personal items</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Travel restrictions changes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-red-700 mb-3">Customer Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Verify all travel documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Arrive at airports/stations on time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Follow local laws & regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Purchase adequate travel insurance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Data */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">5. Privacy & Data Protection</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-4">Data Collection</h3>
                    <p className="text-gray-800 mb-4">
                      We collect and process personal data in accordance with our Privacy Policy. 
                      Your information is used solely for booking and travel services.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-blue-700 mb-2">Data Shared With:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>✓ Airlines & Hotels</li>
                        <li>✓ Tour Operators</li>
                        <li>✓ Visa Processing Agencies</li>
                        <li>✓ Insurance Providers</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-4">Your Rights</h3>
                    <p className="text-gray-800 mb-4">
                      You have the right to access, correct, or delete your personal information 
                      stored with us.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-blue-700 mb-2">Data Security:</h4>
                      <ul className="text-gray-700 text-sm">
                        <li>✓ SSL encrypted transactions</li>
                        <li>✓ Secure payment gateways</li>
                        <li>✓ Regular security audits</li>
                        <li>✓ GDPR compliant practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-red-700" />
                <h2 className="text-3xl font-bold text-gray-900">6. Changes to Terms</h2>
              </div>
              
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <AlertTriangle className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-800 text-xl mb-2">Important Notice</h3>
                    <p className="text-gray-800">
                      We reserve the right to modify these Terms and Conditions at any time. 
                      Changes will be effective immediately upon posting to our website. 
                      It is your responsibility to review these terms periodically for updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact & Support</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Corporate Office</h3>
                  <p className="text-white/90">Bangalore, Karnataka</p>
                  <p className="text-white/80 text-sm mt-1">South India | Pan India Operations</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                  <p className="text-white/90">+91 95917 62419</p>
                  <p className="text-white/80 text-sm mt-1">Emergency contact available</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                    <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Support</h3>
                  <p className="text-white/90">support@manikantatravels.com</p>
                  <p className="text-white/80 text-sm mt-1">legal@manikantatravels.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: December 1, 2023 • Terms are subject to change without prior notice
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

export default TermsPage;