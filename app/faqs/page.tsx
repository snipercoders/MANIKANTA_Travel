// app/faqs/page.tsx



'use client';

import { useState } from 'react';
import { ChevronDown, Car, Phone, User, Clock, MapPin, Shield, CreditCard } from 'lucide-react';

const faqCategories = [
  {
    title: 'Booking & Reservations',
    icon: <CreditCard className="h-6 w-6" />,
    faqs: [
      {
        question: 'How can I book a vehicle with Manikanta Tour and Travels?',
        answer: 'You can book a vehicle through multiple channels: 1) Call our 24/7 helpline at +91 95917 62419, 2) Use the booking form on our website, 3) WhatsApp us for instant booking, or 4) Visit our office in Bangalore. All bookings require advance confirmation and payment.'
      },
      {
        question: 'What documents are required for booking?',
        answer: 'For booking, you need: 1) Valid ID proof (Aadhar, PAN, or Passport), 2) Contact details, 3) Travel itinerary, 4) Advance payment. For corporate bookings, company ID and GST details are required.'
      },
      {
        question: 'Is advance payment required for booking?',
        answer: 'Yes, we require 50% advance payment to confirm your booking. The remaining amount can be paid before the start of your journey. We accept UPI, Net Banking, Credit/Debit Cards, and cash payments.'
      },
      {
        question: 'Can I modify my booking after confirmation?',
        answer: 'Yes, bookings can be modified up to 48 hours before the scheduled time. Changes in vehicle type, pickup time, or itinerary may be subject to availability and additional charges. Contact our support team for modifications.'
      }
    ]
  },
  {
    title: 'Vehicles & Services',
    icon: <Car className="h-6 w-6" />,
    faqs: [
      {
        question: 'What types of vehicles do you provide?',
        answer: 'We provide a wide range of vehicles: 1) Cars (4-6 seater - Sedan, SUV, Innova), 2) Tempo Travellers (12-18 seater), 3) Luxury Buses (20-40 seater - AC/Non-AC), 4) Mini Buses, and 5) Special vehicles for weddings and corporate events.'
      },
      {
        question: 'Are drivers included with the vehicles?',
        answer: 'Yes, all our vehicles come with experienced, licensed drivers who are familiar with South Indian routes. Drivers are trained, polite, and knowledgeable about local areas. Driver charges, tolls, and parking are included in the package.'
      },
      {
        question: 'What is included in the rental package?',
        answer: 'Our package includes: Vehicle with driver, Fuel costs, Driver allowances, Toll charges, State taxes, and Basic insurance. Exclusions: Accommodation, Food, Entry fees, and Personal expenses.'
      },
      {
        question: 'Do you provide inter-state travel services?',
        answer: 'Yes, we provide services across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Goa, and Maharashtra. We also arrange pan-India tours with proper permits and documentation.'
      }
    ]
  },
  {
    title: 'Pricing & Payments',
    icon: <CreditCard className="h-6 w-6" />,
    faqs: [
      {
        question: 'How is the pricing calculated?',
        answer: 'Pricing is calculated based on: 1) Vehicle type, 2) Distance (per km rate), 3) Duration (per day/hour package), 4) Season (peak/off-peak), 5) Additional services required. We provide transparent pricing with no hidden charges.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept: UPI (PhonePe, Google Pay, Paytm), Net Banking, Credit/Debit Cards (Visa, MasterCard, RuPay), Bank Transfers, and Cash payments. Corporate payments through cheques and bank transfers are also accepted.'
      },
      {
        question: 'Are there any additional charges?',
        answer: 'Additional charges may apply for: Overnight stays, Extra kilometers beyond package, Driver accommodation (for multi-day trips), Entry permits for certain areas, and Special requests like decorations or specific timings.'
      },
      {
        question: 'Do you provide GST invoices?',
        answer: 'Yes, we provide proper GST invoices for all bookings. Corporate clients can claim input tax credit. Please provide your GST details at the time of booking to receive GST-compliant invoices.'
      }
    ]
  },
  {
    title: 'Cancellation & Refunds',
    icon: <Shield className="h-6 w-6" />,
    faqs: [
      {
        question: 'What is your cancellation policy?',
        answer: 'Our cancellation policy: 1) 100% refund if cancelled 48+ hours before trip, 2) 50% refund if cancelled 24-48 hours before trip, 3) No refund if cancelled within 24 hours. Refunds are processed within 5-7 business days.'
      },
      {
        question: 'How do I request a refund?',
        answer: 'To request a refund: 1) Email cancellation details to support@manikantatravels.com, 2) WhatsApp your booking ID and cancellation request to +91 95917 62419, 3) Call our customer support. Include booking details and reason for cancellation.'
      },
      {
        question: 'What happens in case of vehicle breakdown?',
        answer: 'In case of vehicle breakdown: 1) Immediate alternative vehicle arranged at no extra cost, 2) Full refund if replacement not possible within 2 hours, 3) 24/7 roadside assistance available. We maintain all vehicles regularly to avoid breakdowns.'
      },
      {
        question: 'Can I get refund for bad weather or emergencies?',
        answer: 'For weather-related cancellations or emergencies: 1) Travel credits valid for 6 months provided, 2) Rescheduling without charges, 3) Partial refunds with proper documentation. Force majeure situations are handled case-by-case.'
      }
    ]
  },
  {
    title: 'Travel & Safety',
    icon: <MapPin className="h-6 w-6" />,
    faqs: [
      {
        question: 'What safety measures do you follow?',
        answer: 'Safety measures: 1) All vehicles regularly serviced and certified, 2) Drivers with valid licenses and background checks, 3) GPS tracking in all vehicles, 4) First-aid kits available, 5) 24/7 emergency support, 6) Insurance coverage for passengers.'
      },
      {
        question: 'Do you provide night journey services?',
        answer: 'Yes, we provide 24/7 services including night journeys. Additional safety measures for night travel: Extra driver for long distances, Regular rest breaks, and Enhanced tracking. Night charges may apply for certain routes.'
      },
      {
        question: 'Can I track my vehicle during the journey?',
        answer: 'Yes, we provide real-time GPS tracking. You will receive: 1) Vehicle tracking link, 2) Driver contact details, 3) Estimated arrival times, 4) Regular updates. Corporate clients get dedicated tracking dashboards.'
      },
      {
        question: 'What if the driver is late or doesn\'t show up?',
        answer: 'In case of delays: 1) Immediate alternative arrangement, 2) Compensation as per delay duration, 3) Full refund if service not provided within 2 hours of scheduled time. We maintain 95%+ on-time performance.'
      }
    ]
  },
  {
    title: 'Corporate & Special Services',
    icon: <User className="h-6 w-6" />,
    faqs: [
      {
        question: 'Do you provide corporate travel solutions?',
        answer: 'Yes, we offer comprehensive corporate solutions: 1) Monthly/quarterly contracts, 2) Dedicated account managers, 3) Customized billing and reporting, 4) Fleet management, 5) Employee transportation, 6) Corporate event transportation.'
      },
      {
        question: 'Can you arrange wedding transportation?',
        answer: 'Absolutely! We specialize in wedding transportation: 1) Decorated vehicles, 2) Multiple vehicle coordination, 3) Traditional arrangements, 4) Guest transportation, 5) Complete wedding package deals. Book at least 2 weeks in advance for weddings.'
      },
      {
        question: 'Do you provide airport transfers?',
        answer: 'Yes, we provide reliable airport transfers: 1) Meet & greet services, 2) Flight tracking for timely pickup, 3) Multiple language support, 4) Baggage assistance, 5) Waiting charges as per airport rules. Available at all major airports in South India.'
      },
      {
        question: 'Can I hire vehicles for multiple days?',
        answer: 'Yes, we offer attractive packages for multi-day hires: 1) Special discounted rates for 3+ days, 2) Flexible itinerary planning, 3) Driver accommodation arrangements, 4) Complete tour packages including sightseeing.'
      }
    ]
  }
];

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openFaqs, setOpenFaqs] = useState<{[key: number]: number | null}>({0: 0});

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleFaq = (categoryIndex: number, faqIndex: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === faqIndex ? null : faqIndex
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our transportation services, booking process, and policies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Phone className="h-4 w-4" />
                <span>+91 95917 62419</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-white to-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg text-red-700">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-red-900 text-lg">{category.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {category.faqs.length} questions about {category.title.toLowerCase()}
                </p>
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full flex items-center justify-between text-red-700 font-semibold hover:text-red-800 transition-colors"
                >
                  <span>View Questions</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openCategory === categoryIndex ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                openCategory === null || openCategory === categoryIndex ? 'block' : 'hidden'
              }`}
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full bg-gradient-to-r from-red-50 to-orange-50 p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-100 rounded-lg text-red-700">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                      <p className="text-gray-600 mt-1">{category.faqs.length} questions available</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-6 w-6 text-red-700 transition-transform ${openCategory === categoryIndex ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* FAQ Items */}
              {(openCategory === null || openCategory === categoryIndex) && (
                <div className="p-6">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition-colors">
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="mt-1">
                              <div className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-700 rounded-full text-sm font-bold">
                                Q
                              </div>
                            </div>
                            <div className="text-left">
                              <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`h-5 w-5 text-red-600 flex-shrink-0 transition-transform ${
                              openFaqs[categoryIndex] === faqIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {openFaqs[categoryIndex] === faqIndex && (
                          <div className="px-6 pb-6 pt-2">
                            <div className="flex gap-4">
                              <div className="mt-1">
                                <div className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-700 rounded-full text-sm font-bold">
                                  A
                                </div>
                              </div>
                              <div>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                {faqIndex === 0 && categoryIndex === 0 && (
                                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-red-50 p-3 rounded-lg">
                                      <div className="font-semibold text-red-800">Phone Booking</div>
                                      <div className="text-gray-700">+91 95917 62419</div>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded-lg">
                                      <div className="font-semibold text-red-800">Email Support</div>
                                      <div className="text-gray-700">booking@manikantatravels.com</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our customer support team is available 24/7 to assist you with any queries.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-white/90">+91 95917 62419</p>
                <p className="text-white/80 text-sm mt-1">24/7 Helpline</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-white/90">+91 95917 62419</p>
                <p className="text-white/80 text-sm mt-1">Instant Response</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-xl mb-4 inline-block">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-white/90">support@manikantatravels.com</p>
                <p className="text-white/80 text-sm mt-1">Response within 4 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Tips */}
        <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">FAQ Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="text-blue-600 font-bold text-lg mb-2">✓ Quick Booking</div>
              <p className="text-gray-700 text-sm">Have your travel details ready when calling for faster service</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-blue-600 font-bold text-lg mb-2">✓ Early Planning</div>
              <p className="text-gray-700 text-sm">Book at least 3 days in advance for best vehicle availability</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <div className="text-blue-600 font-bold text-lg mb-2">✓ Clear Communication</div>
              <p className="text-gray-700 text-sm">Share exact pickup points and special requirements upfront</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Last Updated: December 1, 2023 • FAQs are regularly updated
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