// app/help/page.tsx
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';

const steps = [
  'Call/WhatsApp: +91 98765 43210',
  'Share your travel details (date, route, passengers)',
  'Choose vehicle type (Car, Tempo, Bus)',
  'Confirm booking with advance payment',
  'Receive booking confirmation',
  'Enjoy your journey!'
];

export default function BookingHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Booking Help
        </h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <PhoneIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              3-Step Booking Process
            </h2>
            <p className="text-gray-600">
              Simple and quick booking in just 3 steps
            </p>
          </div>
          
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">{step}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Contact */}
          <div className="mt-10 p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Need Immediate Help?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-gray-600">Call us directly for instant booking</p>
              </div>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                Call +91 +91 9591762419
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}