
// // app/page.tsx
// import Hero from '@/components/home/Hero';
// import ServicesCards from '@/components/home/ServicesCards';
// import TopDestinations from '@/components/home/TopDestinations';
// import InfoCards from '@/components/home/InfoCards';
// import ReviewSection from '@/components/home/ReviewSection';
// import WhatsAppButton from '@/components/ui/WhatsAppButton';

// export default function Home() {
//   return (
//     <div className="bg-gray-50">
//       <Hero />
//         <ServicesCards />
//         <TopDestinations />
//        <InfoCards />
//       <ReviewSection />
//       <WhatsAppButton phoneNumber="9591762419" />
//     </div>
//   );
// }






import Hero from '@/components/home/Hero';
import ServicesCards from '@/components/home/ServicesCards';
import TopDestinations from '@/components/home/TopDestinations';
import BestSellersSection from '@/components/home/BestSellersSection';
import InfoCards from '@/components/home/InfoCards';
import ReviewSection from '@/components/home/ReviewSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ServicesCards />
      <TopDestinations />
      <BestSellersSection />
      <InfoCards />
      <ReviewSection />
      <WhatsAppButton phoneNumber="9591762419" />
    </div>
  );
}