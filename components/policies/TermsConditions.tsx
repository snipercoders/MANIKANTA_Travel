// components/policies/TermsConditions.tsx


import { 
  FileText, 
  AlertTriangle, 
  UserCheck, 
  Car, 
  Clock,
  Shield,
  MapPin,
  Package
} from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <FileText className="h-8 w-8 text-black" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Terms & Conditions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Please read these terms carefully before booking our transportation services.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <UserCheck className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">1. Booking & Confirmation</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Booking confirmed only after 50% advance payment receipt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Vehicle type may be upgraded/downgraded based on availability with prior notice</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Provide accurate pickup/drop locations, date, and time during booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Booking modifications allowed up to 48 hours before scheduled time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Car className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">2. Vehicle & Driver Terms</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Driver bata (allowance) included in package price</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Night charges apply after 10:00 PM for outstation trips</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Toll taxes, parking, and state entry taxes charged extra as actuals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>AC may be switched off in hilly areas for vehicle safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 font-bold mt-1">â€¢</span>
                <span>Driver working hours: Maximum 12 hours/day as per transport rules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">3. Time & Waiting Policy</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Free Waiting Time</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">âœ“</span>
                    <span>Airport/Railway Station pickups: 60 minutes free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">âœ“</span>
                    <span>Hotel/Residence pickups: 30 minutes free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">âœ“</span>
                    <span>En-route stops: 15 minutes free per stop</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-black mb-2">Extra Waiting Charges</h4>
                <p className="text-black">
                  â‚¹100 per hour after free waiting time. Applicable for all vehicle types.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-gradient-to-r from-black/10 to-black/10 border-2 border-black rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <AlertTriangle className="h-8 w-8 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Important Disclaimer</h3>
              <div className="space-y-4 text-gray-800">
                <p>
                  Manikanta Tour and Travels is not responsible for delays caused by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">â€¢</span>
                    <span>Traffic congestion or roadblocks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">â€¢</span>
                    <span>Weather conditions or natural calamities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">â€¢</span>
                    <span>Vehicle breakdowns (alternative arranged)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">â€¢</span>
                    <span>Changes in government regulations or restrictions</span>
                  </li>
                </ul>
                <p className="font-bold text-black">
                  We will make best efforts to provide alternative solutions in such situations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Responsibilities */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-50 border-2 border-gray-200 rounded-2xl p-8">
          <div className="flex items-start gap-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-6">Customer Responsibilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-700 mt-1" />
                    <div>
                      <h4 className="font-bold text-black mb-1">Vehicle Care</h4>
                      <p className="text-gray-700 text-sm">Keep vehicle clean â€“ â‚¹500 cleaning charge if found excessively dirty</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-gray-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-black mb-1">Prohibited Items</h4>
                      <p className="text-gray-700 text-sm">No smoking, alcohol, or illegal substances inside vehicle</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-gray-700 mt-1" />
                    <div>
                      <h4 className="font-bold text-black mb-1">Luggage & Belongings</h4>
                      <p className="text-gray-700 text-sm">Carry valuables at your own risk. We're not responsible for lost items</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-gray-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-black mb-1">Issue Reporting</h4>
                      <p className="text-gray-700 text-sm">Report any issues immediately to driver or 24Ã—7 support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-4 rounded-xl">
                <p className="text-gray-700 text-center font-medium">
                  By booking our services, you agree to all terms & conditions mentioned above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
