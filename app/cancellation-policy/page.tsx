// app/cancellation-policy/page.tsx
import type { Metadata } from 'next';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Cancellation Policy | Sri Manikanta Tours & Travels',
  description: 'Read our cancellation policy for Sri Manikanta Tours & Travels. Understand the terms for cancellations, rescheduling, and refunds.',
  keywords: [
    'cancellation policy',
    'travel cancellation',
    'Sri Manikanta Tours cancellation',
    'booking cancellation policy',
    'refund terms',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/cancellation-policy',
  },
};

export default function CancellationPolicyPage() {
  const sections = [
    {
      title: "Standard Cancellation Policy",
      content: [
        "Cancellations made 48 hours or more before departure: 100% refund.",
        "Cancellations made 24-48 hours before departure: 50% refund.",
        "Cancellations made less than 24 hours before departure: No refund.",
        "No-shows: No refund."
      ]
    },
    {
      title: "Rescheduling Policy",
      content: [
        "Rescheduling is allowed at no extra cost if requested 24 hours or more before departure.",
        "Rescheduling within 24 hours of departure is subject to availability and may incur fees.",
        "Price differences for new dates will be adjusted accordingly.",
        "Only one rescheduling request is allowed per booking."
      ]
    },
    {
      title: "Group Bookings",
      content: [
        "Group bookings of 10 or more passengers have a 7-day cancellation notice period.",
        "Cancellations within 7 days of departure may incur charges up to 50%.",
        "Group rescheduling is subject to availability and may require additional deposits.",
        "Special group terms will be communicated at the time of booking."
      ]
    },
    {
      title: "Emergency Cancellations",
      content: [
        "Medical emergencies: Documentation required for full refund consideration.",
        "Natural disasters and government restrictions: Case-by-case review.",
        "Family emergencies: Subject to review and approval.",
        "Travel insurance is recommended to cover unforeseen circumstances."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">CANCELLATION POLICY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            Cancellation Policy
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
            Clear terms for cancellations, rescheduling, and refunds.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        
        {/* Last Updated - Responsive */}
        <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 border border-gray-200">
          <p className="text-gray-600 text-xs sm:text-sm">
            <span className="font-semibold">Last Updated:</span> July 10, 2026
          </p>
        </div>

        {/* Cancellation Sections - Responsive */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 hover:border-black transition">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                    <span className="text-black font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section - Responsive */}
        <div className="mt-6 sm:mt-8 md:mt-10 bg-black rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
            Need to Cancel or Reschedule?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            Contact our support team immediately for cancellation or rescheduling assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:+919591762419"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
            >
              Call Support
            </a>
            <a
              href="mailto:support@manikantatravels.com"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}