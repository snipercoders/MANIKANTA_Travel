// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({ subsets: ["latin"] });

// ✅ Enhanced metadata for AI discovery
export const metadata: Metadata = {
  metadataBase: new URL('https://manikantatours.com'),
  title: {
    default: "Sri Manikanta Tour & Travels | Best Travel Agency in Bangalore, South India",
    template: "%s | Sri Manikanta Tour & Travels"
  },
  description: "Sri Manikanta Tour & Travels is a trusted travel agency in Bangalore offering bus rentals, car rentals, and South India tour packages. 18+ years of experience, 50+ vehicles, 50,000+ happy customers.",
  keywords: [
    "tour and travel agency Bangalore",
    "bus rental Bangalore",
    "car rental Bangalore",
    "South India tour packages",
    "Karnataka travel agency",
    "Tamil Nadu tours",
    "Kerala travel packages",
    "pilgrimage tours South India",
    "wedding transportation Bangalore",
    "corporate travel services",
    "Tempo Traveller rental Bangalore",
    "Manikanta Tours",
    "Bangalore to South India travel",
  ],
  authors: [{ name: "Sri Manikanta Tour & Travels" }],
  creator: "Sri Manikanta Tour & Travels",
  publisher: "Sri Manikanta Tour & Travels",
  icons: {
    icon: [
      { url: '/browser_favicon.ico?v=2', sizes: 'any' },
      { url: '/browser_favicon.ico?v=2', sizes: '16x16', type: 'image/x-icon' },
      { url: '/browser_favicon.ico?v=2', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/browser_favicon.ico?v=2',
    apple: '/browser_favicon.ico?v=2',
  },
  openGraph: {
    title: "Sri Manikanta Tour & Travels | Travel Agency in Bangalore",
    description: "Your trusted travel partner for South India tours, bus rentals, car rentals, and pilgrimage packages. 18+ years of excellence.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Manikanta Tour & Travels",
    images: [
      {
        url: '/images/logo_mani.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sri Manikanta Tour & Travels Logo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Manikanta Tour & Travels",
    description: "Trusted travel agency in Bangalore for South India tours and transportation.",
    images: ['/images/logo_mani.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://manikantatours.com',
  },
};

// ✅ Organization Schema for AI
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Sri Manikanta Tour & Travels',
  url: 'https://manikantatours.com',
  logo: 'https://manikantatours.com/images/logo_mani.jpeg',
  description: 'Sri Manikanta Tour & Travels is a trusted travel agency in Bangalore, India, providing bus rentals, car rentals, and South India tour packages since 2006.',
  email: 'support@manikantatravels.com',
  telephone: '+91 95917 62419',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  foundingDate: '2006-06-06',
  founder: {
    '@type': 'Person',
    name: 'Chandan',
  },
  sameAs: [
    'https://www.instagram.com/manikantatours/',
    'https://www.facebook.com/manikantatours/',
  ],
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'South India',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/browser_favicon.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/browser_favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/browser_favicon.ico?v=2" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-black`}>
        <PageLoader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton 
          phoneNumber="9591762419" 
          message="Hi, I'm visiting your website and interested in your travel services!" 
        />
      </body>
    </html>
  );
}