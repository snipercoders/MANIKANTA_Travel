// app/terms/page.tsx
import type { Metadata } from 'next';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Terms & Conditions | Sri Manikanta Tours & Travels',
  description: 'Read our terms and conditions for using Sri Manikanta Tours & Travels services. Understand your rights and responsibilities when booking with us.',
  keywords: [
    'terms and conditions',
    'travel terms',
    'Sri Manikanta Tours terms',
    'booking terms',
    'service conditions',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/terms',
  },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By using our website and booking our services, you agree to these terms and conditions.",
        "These terms apply to all bookings made through our website, phone, or in-person.",
        "We reserve the right to update these terms at any time without prior notice.",
        "Continued use of our services constitutes acceptance of the updated terms."
      ]
    },
    {
      title: "Booking and Payment",
      content: [
        "A valid ID proof is required for all bookings.",
        "Full payment or deposit may be required to confirm your booking.",
        "Prices are subject to change without notice. Once booked, the price is locked.",
        "We accept payments through UPI, Credit/Debit Cards, Net Banking, and Cash."
      ]
    },
    {
      title: "Responsibilities",
      content: [
        "You are responsible for providing accurate information during booking.",
        "You must carry valid identification documents during travel.",
        "You are responsible for your luggage and personal belongings.",
        "You must follow the instructions of the driver and staff during the journey."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "We are not liable for delays, accidents, or damages caused by third parties.",
        "We are not responsible for lost or stolen personal belongings.",
        "We reserve the right to cancel or reschedule trips due to unforeseen circumstances.",
        "Our liability is limited to the total amount paid for the service."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Black & White - Fully Responsive */}
      <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">TERMS & CONDITIONS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
            Please read these terms carefully before booking our services.
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

        {/* Terms Sections - Responsive */}
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
            Questions About Our Terms?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            If you have any questions about our terms and conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:support@manikantatravels.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
            >
              Email Us
            </a>
            <a
              href="tel:+919591762419"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}