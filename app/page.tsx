// app/page.tsx
import Hero from '@/components/home/Hero';
import ServicesCards from '@/components/home/ServicesCards';
import TopDestinations from '@/components/home/TopDestinations';
import BestSellersSection from '@/components/home/BestSellersSection';
import InfoCards from '@/components/home/InfoCards';
import ReviewSection from '@/components/home/ReviewSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import type { Metadata } from 'next';
import Link from 'next/link';

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  title: 'Sri Manikanta Tour & Travels | Best Travel Agency in Bangalore, South India',
  description: 'Sri Manikanta Tour & Travels is the best travel agency in Bangalore offering bus rentals, car rentals, and South India tour packages. 18+ years experience, 50+ vehicles, 50,000+ happy customers.',
  keywords: [
    'Manikanta Tours',
    'travel agency Bangalore',
    'bus rental Bangalore',
    'car rental Bangalore',
    'South India tours',
    'Karnataka travel',
    'Tamil Nadu tours',
    'Kerala packages',
    'pilgrimage tours',
    'wedding transportation',
    'corporate travel',
  ],
  alternates: {
    canonical: 'https://manikantatours.com',
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* ✅ Existing Components */}
      <Hero />
      <ServicesCards />
      <TopDestinations />
      <BestSellersSection />
      <InfoCards />
      <ReviewSection />
      
      {/* ✅ NEW: Red Theme CTA Section */}
      <section className="bg-black py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for the best travel experience across South India.
            We're available 24/7 for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919591762419"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              📞 Call +91 95917 62419
            </a>
            <a
              href="https://wa.me/919591762419"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white bg-black text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-900 transition shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      
      <WhatsAppButton phoneNumber="9591762419" />
    </div>
  );
}
