// app/privacy/page.tsx
import type { Metadata } from 'next';
import { Shield, Lock, Eye, Database } from 'lucide-react';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Privacy Policy | Sri Manikanta Tours & Travels',
  description: 'Read our privacy policy to understand how Sri Manikanta Tours & Travels collects, uses, and protects your personal information.',
  keywords: [
    'privacy policy',
    'data protection',
    'travel agency privacy',
    'Sri Manikanta Tours privacy',
    'personal information protection',
  ],
  alternates: {
    canonical: 'https://manikantatours.com/privacy',
  },
};

// ✅ Organization Schema for Privacy page
const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy - Sri Manikanta Tours & Travels',
  description: 'Privacy policy for Sri Manikanta Tours & Travels website.',
  url: 'https://manikantatours.com/privacy',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Sri Manikanta Tours & Travels',
    url: 'https://manikantatours.com',
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Information We Collect",
      items: [
        "Name, email address, phone number, and company name provided through contact forms.",
        "Travel preferences, booking history, and service requirements.",
        "Device information, IP address, and browsing behavior on our website.",
        "Payment information processed through secure third-party payment gateways."
      ]
    },
    {
      icon: <Eye className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "How We Use Your Information",
      items: [
        "To process bookings and provide transportation services.",
        "To communicate with you about your bookings and inquiries.",
        "To improve our services and website experience.",
        "To send promotional offers and updates (with your consent)."
      ]
    },
    {
      icon: <Lock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Data Protection",
      items: [
        "We implement industry-standard security measures to protect your data.",
        "All payment transactions are encrypted and processed securely.",
        "We do not store sensitive payment information on our servers.",
        "Regular security audits are conducted to ensure data safety."
      ]
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Your Rights",
      items: [
        "You can request access to your personal data at any time.",
        "You have the right to correct or update your information.",
        "You can request deletion of your data, subject to legal requirements.",
        "You can opt-out of marketing communications at any time."
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Black & White - Fully Responsive */}
        <section className="relative overflow-hidden bg-black text-white py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-white/20">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider">PRIVACY POLICY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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

          {/* Privacy Sections - Responsive */}
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 hover:border-black transition">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <div className="text-black">
                      {section.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                      {section.title}
                    </h2>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                          <span className="text-black font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section - Responsive */}
          <div className="mt-6 sm:mt-8 md:mt-10 bg-black rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              If you have any questions about our privacy practices, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="mailto:support@manikantatravels.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+919591762419"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}