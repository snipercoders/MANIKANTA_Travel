// File Path: app/policies/page.tsx
'use client';

import { useState } from 'react';
import MyTripSection from '@/components/policies/MyTripSection';
import PaymentInfo from '@/components/policies/PaymentInfo';
import TermsConditions from '@/components/policies/TermsConditions';

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState<'trip' | 'payment' | 'terms'>('trip');

  const tabs = [
    { id: 'trip', label: 'My Trip', icon: 'Backpack' },
    { id: 'payment', label: 'Payment Policy', icon: 'Credit Card' },
    { id: 'terms', label: 'Terms & Conditions', icon: 'Document' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Policies & Information
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know before booking your perfect journey with{' '}
            <span className="font-bold text-yellow-300">Manikanta Tour and Travels</span>
          </p>
        </div>
      </div>

      {/* Responsive Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white shadow-xl border-b-4 border-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                }`}
              >
                <span className="text-xl sm:text-2xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content - Full Width & Responsive */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-10 lg:p-16">
            {activeTab === 'trip' && <MyTripSection />}
            {activeTab === 'payment' && <PaymentInfo />}
            {activeTab === 'terms' && <TermsConditions />}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#6366f1"
            fillOpacity="0.1"
            d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,74.7C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}