// components/policies/PaymentInfo.tsx
import { ShieldCheckIcon, CreditCardIcon, BanknotesIcon } from '@heroicons/react/24/outline';

export default function PaymentInfo() {
  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <ShieldCheckIcon className="h-10 w-10 text-green-600" />
          Payment Policy
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Advance Payment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>50% advance at time of booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Remaining 50% before trip starts</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                <CreditCardIcon className="h-6 w-6" />
                Payment Methods
              </h3>
              <p className="text-gray-700">UPI • Google Pay • PhonePe • Bank Transfer • Cash</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6">Cancellation & Refund</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Before 48 hours</span>
                <span className="font-bold text-green-600">Full Refund</span>
              </div>
              <div className="flex justify-between">
                <span>24-48 hours before</span>
                <span className="font-bold text-yellow-600">50% Refund</span>
              </div>
              <div className="flex justify-between">
                <span>Less than 24 hours</span>
                <span className="font-bold text-red-600">No Refund</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}