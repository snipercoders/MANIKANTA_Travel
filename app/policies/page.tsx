// File Path: app/policies/page.tsx


'use client';

import { useState } from 'react';
import MyTripSection from '@/components/policies/MyTripSection';
import PaymentInfo from '@/components/policies/PaymentInfo';
import TermsConditions from '@/components/policies/TermsConditions';
import { Car, CreditCard, FileText, Home, Phone } from 'lucide-react';

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState<'trip' | 'payment' | 'terms'>('trip');

  const tabs = [
    { id: 'trip', label: 'Trip Information', icon: <Car className="h-5 w-5 sm:h-6 sm:w-6" /> },
    { id: 'payment', label: 'Payment Policy', icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Policies & Information
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete information about your travel with{' '}
              <span className="font-bold text-yellow-300">Manikanta Tour and Travels</span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="/" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Back to Home</span>
              </a>
              <a 
                href="tel:+919591762419" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 95917 62419</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center justify-center sm:justify-start gap-3 
                  px-4 sm:px-6 py-3 rounded-lg 
                  font-semibold text-sm sm:text-base
                  transition-all duration-300 
                  whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700'
                  }
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-6 sm:p-8 lg:p-12">
            {activeTab === 'trip' && <MyTripSection />}
            {activeTab === 'payment' && <PaymentInfo />}
            {activeTab === 'terms' && <TermsConditions />}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Need Help with Policies?</h2>
            <p className="text-lg text-white/90 mb-8">
              Our team is here to clarify any policy-related queries you may have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Support</h3>
                <p className="text-white/90">+91 95917 62419</p>
                <p className="text-white/80 text-sm mt-1">24/7 Available</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-white/90">+91 95917 62419</p>
                <p className="text-white/80 text-sm mt-1">Quick Response</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-white/90">support@manikantatravels.com</p>
                <p className="text-white/80 text-sm mt-1">Detailed Queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: December 1, 2023 • Policies subject to change
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
}