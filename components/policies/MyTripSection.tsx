// components/policies/MyTripSection.tsx
import { CheckCircleIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function MyTripSection() {
  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <TruckIcon className="h-10 w-10 text-blue-600" />
          Your Trip Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We ensure a smooth, safe, and enjoyable travel experience from pickup to drop.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Confirmed Booking</h3>
                <p className="text-gray-600">Instant confirmation via WhatsApp & Email</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ClockIcon className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">On-Time Pickup</h3>
                <p className="text-gray-600">Driver reaches 15 minutes before scheduled time</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Clean & Sanitized</h3>
                <p className="text-gray-600">All vehicles sanitized before every trip</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">24×7 Support</h3>
                <p className="text-gray-600">Live tracking & emergency assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}