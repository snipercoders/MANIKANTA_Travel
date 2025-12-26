// components/policies/MyTripSection.tsx



import { 
  CheckCircle, 
  Clock, 
  Car, 
  Shield, 
  MapPin, 
  Users,
  Wifi,
  Package
} from 'lucide-react';

export default function MyTripSection() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <Car className="h-8 w-8 text-red-700" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Your Trip Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience seamless travel with our comprehensive trip management services.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
          <MapPin className="h-7 w-7" />
          Journey Timeline
        </h3>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-red-300"></div>
          
          <div className="space-y-8 pl-12 sm:pl-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-9 sm:-left-12 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">1</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-red-800 text-lg mb-2">Booking Confirmation</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Instant</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">WhatsApp/Email</span>
                </div>
                <p className="text-gray-700">
                  Receive instant confirmation with booking ID, vehicle details, and driver contact.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-9 sm:-left-12 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">2</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h4 className="font-bold text-red-800 text-lg">Pickup Process</h4>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">15 min early</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">Live tracking</span>
                </div>
                <p className="text-gray-700">
                  Driver arrives 15 minutes before scheduled time. Real-time tracking link shared.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-9 sm:-left-12 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">3</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h4 className="font-bold text-red-800 text-lg">Onboard Safety</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Sanitized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">First Aid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">GPS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Insurance</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  All vehicles fully sanitized with safety equipment and GPS tracking.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-9 sm:-left-12 top-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">4</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  <h4 className="font-bold text-red-800 text-lg">Support & Assistance</h4>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">24×7</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Emergency</span>
                </div>
                <p className="text-gray-700">
                  Dedicated support team available 24/7 for any assistance during your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Wifi className="h-6 w-6 text-red-700" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Live Tracking</h4>
          <p className="text-gray-700 text-sm">Real-time vehicle location updates</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Package className="h-6 w-6 text-red-700" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Luggage Space</h4>
          <p className="text-gray-700 text-sm">Adequate space for all luggage</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-red-700" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Travel Insurance</h4>
          <p className="text-gray-700 text-sm">Passenger insurance included</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-red-700" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Experienced Drivers</h4>
          <p className="text-gray-700 text-sm">Licensed & trained professionals</p>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <svg className="h-6 w-6 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-yellow-900 text-lg mb-2">Important Trip Notes</h4>
            <ul className="space-y-2 text-yellow-800 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Carry valid ID proof for verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Inform about extra luggage during booking</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Keep emergency contact numbers handy</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Report any issues immediately to driver/support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}