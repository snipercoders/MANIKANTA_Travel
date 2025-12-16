// app/faqs/page.tsx
'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What types of vehicles do you provide?',
    answer: 'We provide Cars (4-6 seater), Tempo Travellers (12-18 seater), and Luxury Buses (20-40 seater).'
  },
  {
    question: 'How can I book a vehicle?',
    answer: 'Call +91 98765 43210 or use our website booking form. 24/7 booking available.'
  },
  {
    question: 'Are drivers included?',
    answer: 'Yes, all vehicles come with experienced, licensed drivers.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Full refund 48+ hours before, 50% refund 24-48 hours, no refund within 24 hours.'
  },
  {
    question: 'Do you provide inter-state travel?',
    answer: 'Yes, we provide services across Karnataka and neighboring states.'
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-blue-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}