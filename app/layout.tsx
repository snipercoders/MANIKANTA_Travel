


// File Path: app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageLoader from "@/components/ui/PageLoader"; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://manikantatours.com' : 'http://localhost:3000'),
  title: {
    default: "Manikanta Tour & Travels | Best Travel Agency in India",
    template: "%s | Manikanta Tour & Travels"
  },
  description: "Manikanta Tour and Travels - Your trusted travel partner for unforgettable journeys across India. Expert tour packages, comfortable transportation, and personalized service since 2010.",
  keywords: ["tour and travels", "manikanta travels", "india tour packages", "travel agency", "transportation services", "holiday packages"],
  authors: [{ name: "Manikanta Tour & Travels" }],
  creator: "Manikanta Tour & Travels",
  publisher: "Manikanta Tour & Travels",
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
    title: "Manikanta Tour & Travels | Best Travel Agency in India",
    description: "Your trusted travel partner for unforgettable journeys across India. Expert tour packages and personalized service.",
    type: "website",
    locale: "en_IN",
    siteName: "Manikanta Tour & Travels",
    images: [
      {
        url: '/images/logo_mani.jpeg',
        width: 1200,
        height: 630,
        alt: 'Manikanta Tour & Travels Logo',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Tour & Travels",
    description: "Your trusted travel partner for unforgettable journeys across India",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cache-busting favicon links with ?v=2 query parameter */}
        <link rel="icon" type="image/x-icon" href="/browser_favicon.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/browser_favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/browser_favicon.ico?v=2" />
        
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Page Loader - Shows on initial load */}
        <PageLoader />
        
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        {/* WhatsApp Button */}
        <WhatsAppButton 
          phoneNumber="9591762419" 
          message="Hi, I'm visiting your website and interested in your travel services!" 
        />
      </body>
    </html>
  );
}