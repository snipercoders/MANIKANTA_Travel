// app/policies/page.tsx
import type { Metadata } from 'next';
import { Shield, FileText, CreditCard, Users, Clock, CheckCircle } from 'lucide-react';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Policies | Sri Manikanta Tours & Travels',
  description: 'Learn about our policies including booking, cancellation, privacy, and terms of service at Sri Manikanta Tours & Travels.',
  keywords: [
    'travel policies',
    'booking policy',
    'cancellation policy',
    'Sri Manikanta Tours policies',
    'travel terms',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/policies',
  },
};

export default function PoliciesPage() {
  const policies = [
    {
      icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Booking Policy",
      items: [
        "Advance booking required 24 hours before departure",
        "Valid ID proof mandatory for all passengers",
        "50% advance payment to confirm booking",
        "Balance payment before journey begins",
        "Corporate and group bookings have custom terms"
      ]
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Safety Policy",
      items: [
        "All vehicles are regularly serviced and certified",
        "Drivers are licensed and background verified",
        "GPS tracking installed in all vehicles",
        "First-aid kit available in every vehicle",
        "24/7 emergency support available"
      ]
    },
    {
      icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Payment Policy",
      items: [
        "UPI, Credit/Debit Cards, Net Banking, Cash accepted",
        "GST invoices provided for all bookings",
        "Transparent pricing with no hidden charges",
        "Special rates for corporate and bulk bookings",
        "Cancellation charges as per policy"
      ]
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Group Booking Policy",
      items: [
        "Group bookings for 10+ passengers get special rates",
        "Free itinerary planning for groups",
        "Customized packages available",
        "Advance notice of 7 days required",
        "Dedicated coordinator for group travel"
      ]
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Timing Policy",
      items: [
        "Punctuality is our priority",
        "Waiting time: 30 minutes included",
        "Additional waiting time charged at ₹500/hour",
        "Night travel available with advance notice",
        "Multi-day tours flexible scheduling"
      ]
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Service Guarantee",
      items: [
        "100% satisfaction guarantee",
        "Alternative vehicle arrangement if needed",
        "Refund for service failure as per policy",
        "24/7 customer support",
        "Regular service quality checks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">OUR POLICIES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            Our <span className="text-gray-300">Policies</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
            Clear and transparent policies for a hassle-free travel experience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        
        {/* Policies Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 hover:border-black transition hover:shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <div className="text-black">
                    {policy.icon}
                  </div>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-black">
                  {policy.title}
                </h2>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {policy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                    <span className="text-black font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-black rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                Have Questions About Our Policies?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Our team is here to help clarify any policy-related queries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="mailto:support@manikantatravels.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
              >
                Email Us
              </a>
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}