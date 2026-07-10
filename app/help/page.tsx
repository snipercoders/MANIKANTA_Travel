// app/help/page.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

// ❌ REMOVED: metadata export from client component
// ✅ Moved metadata to a separate server component (see below)

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a vehicle?',
      answer: 'You can book a vehicle by calling our helpline at +91 95917 62419, using our WhatsApp number, visiting our office in Bangalore, or filling out the contact form on our website.'
    },
    {
      question: 'What documents are required for booking?',
      answer: 'You need a valid ID proof (Aadhar, PAN, or Passport), contact details, travel itinerary, and advance payment. For corporate bookings, company ID and GST details are required.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking. Cancellations made 48 hours before departure get a full refund, 24-48 hours get 50% refund, and within 24 hours are non-refundable.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI (PhonePe, Google Pay, Paytm), Net Banking, Credit/Debit Cards (Visa, MasterCard, RuPay), Bank Transfers, and Cash payments.'
    },
    {
      question: 'Do you provide inter-state travel services?',
      answer: 'Yes, we provide services across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Goa, and Maharashtra. We also arrange pan-India tours with proper permits.'
    },
    {
      question: 'What happens if my vehicle breaks down?',
      answer: 'In case of breakdown, we arrange an immediate alternative vehicle at no extra cost. If replacement is not possible within 2 hours, we provide a full refund.'
    },
    {
      question: 'Can I track my vehicle during the journey?',
      answer: 'Yes, we provide real-time GPS tracking. You will receive a vehicle tracking link, driver contact details, and estimated arrival times.'
    },
    {
      question: 'What safety measures do you follow?',
      answer: 'All vehicles are regularly serviced and certified. Drivers have valid licenses and background checks. GPS tracking, first-aid kits, and 24/7 emergency support are available.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">HELP CENTER</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            How Can We <span className="text-gray-300">Help You?</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
            Find answers to common questions and get the support you need.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        
        {/* Quick Contact Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-200 hover:border-black transition">
            <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-black mx-auto mb-2 sm:mb-3" />
            <h3 className="font-bold text-sm sm:text-base text-black">Call Us</h3>
            <p className="text-gray-600 text-xs sm:text-sm">+91 95917 62419</p>
            <p className="text-gray-400 text-[10px] sm:text-xs">24/7 Support</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-200 hover:border-black transition">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-black mx-auto mb-2 sm:mb-3" />
            <h3 className="font-bold text-sm sm:text-base text-black">Email Us</h3>
            <p className="text-gray-600 text-xs sm:text-sm break-all">support@manikantatravels.com</p>
            <p className="text-gray-400 text-[10px] sm:text-xs">Within 4 hours</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-200 hover:border-black transition">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-black mx-auto mb-2 sm:mb-3" />
            <h3 className="font-bold text-sm sm:text-base text-black">Visit Us</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Bangalore Office</p>
            <p className="text-gray-400 text-[10px] sm:text-xs">Agara, Kanakapura Road</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 text-center border border-gray-200 hover:border-black transition">
            <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-black mx-auto mb-2 sm:mb-3" />
            <h3 className="font-bold text-sm sm:text-base text-black">Working Hours</h3>
            <p className="text-gray-600 text-xs sm:text-sm">7:00 AM - 11:00 PM</p>
            <p className="text-gray-400 text-[10px] sm:text-xs">24/7 Emergency</p>
          </div>
        </div>

        {/* FAQ Section - Responsive */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-6 sm:mb-8">
          Find quick answers to the most common questions.
        </p>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-black transition">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-black text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 text-black flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section - Responsive */}
        <div className="mt-8 sm:mt-10 bg-black rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
              Still Need Help?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call Support
              </a>
              <a
                href="https://wa.me/919591762419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}