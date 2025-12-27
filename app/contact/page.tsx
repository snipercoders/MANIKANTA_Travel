// app/contact/page.tsx
import ContactHero from '@/components/contact/ContactHero';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
  title: 'Contact Us - Sri Manikanta Tours & Travels',
  description: 'Get in touch with Sri Manikanta Tours & Travels. Contact us for bookings, inquiries, and travel assistance.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information & Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours.
                  For urgent inquiries, call our 24/7 helpline.
                </p>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4"></div>
              </div>
              
              <ContactForm />
            </div>
            
            {/* Contact Details */}
            <ContactDetails />
          </div>
          
          {/* Map & Additional Info */}
          <div className="space-y-8">
            <ContactMap />
            
            {/* Emergency Contact Card */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 border border-red-100 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚨</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">24/7 Emergency</h3>
                  <p className="text-red-600 font-semibold">+91 9591762419</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                For emergencies during travel, call our dedicated helpline available 24/7.
                We provide immediate assistance for any travel-related issues.
              </p>
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}