// components/policies/TermsConditions.tsx
import { DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function TermsConditions() {
  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <DocumentTextIcon className="h-10 w-10 text-purple-600" />
          Terms & Conditions
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Booking & Confirmation</h3>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span>Booking is confirmed only after advance payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span>Vehicle type may vary based on availability</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Driver & Vehicle Rules</h3>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span>Driver bata included | Night charges extra after 10 PM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span>Toll, parking & state taxes extra as applicable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600">•</span>
                <span>AC will be switched off in hilly areas</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-yellow-900 mb-2">Important Note</h4>
                <p className="text-yellow-800">
                  We are not responsible for delays due to traffic, weather, or roadblocks. 
                  Extra waiting charges may apply beyond free waiting time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Responsibility</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Keep vehicle clean – ₹500 cleaning charge if found dirty</li>
              <li>• No smoking or alcohol inside vehicle</li>
              <li>• Report any issue immediately to our 24×7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}