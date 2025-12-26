// components/policies/PaymentInfo.tsx


import { 
  CreditCard, 
  Shield, 
  Wallet, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  IndianRupee
} from 'lucide-react';

export default function PaymentInfo() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <CreditCard className="h-8 w-8 text-red-700" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Policy
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Secure and transparent payment process for all our transportation services.
        </p>
      </div>

      {/* Payment Process */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Payment Methods */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <Wallet className="h-7 w-7" />
              Payment Methods
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">UPI & Digital Wallets</h4>
                  <p className="text-gray-600 text-sm">Google Pay, PhonePe, Paytm</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Credit/Debit Cards</h4>
                  <p className="text-gray-600 text-sm">Visa, MasterCard, RuPay</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Net Banking</h4>
                  <p className="text-gray-600 text-sm">All major banks supported</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <IndianRupee className="h-6 w-6 text-yellow-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Cash Payment</h4>
                  <p className="text-gray-600 text-sm">Accepted at pickup/drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* GST Invoice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              GST Invoice
            </h3>
            <p className="text-gray-700 mb-3">
              We provide GST invoices for all bookings. Corporate clients can claim input tax credit.
            </p>
            <div className="text-blue-800 text-sm font-medium">
              ✓ Available upon request
            </div>
          </div>
        </div>

        {/* Right Column - Payment Terms */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <Shield className="h-7 w-7" />
              Payment Terms
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-green-800 text-lg mb-3">Advance Payment</h4>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Booking Confirmation</span>
                    <span className="font-bold text-green-700">50%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Required to confirm your vehicle reservation
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-green-800 text-lg mb-3">Balance Payment</h4>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Before Trip Start</span>
                    <span className="font-bold text-green-700">50%</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    To be paid before the vehicle departure
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-bold text-yellow-800">Processing Time</h4>
                </div>
                <p className="text-yellow-700 text-sm">
                  Payments reflect within 2-4 hours. Contact support if delayed beyond 6 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7" />
              Refund Policy
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-bold text-green-800">Full Refund</div>
                    <div className="text-gray-600 text-sm">48+ hours before trip</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-700">100%</div>
              </div>

              <div className="flex items-center justify-between bg-white p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <div className="font-bold text-yellow-800">Partial Refund</div>
                    <div className="text-gray-600 text-sm">24-48 hours before trip</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-yellow-700">50%</div>
              </div>

              <div className="flex items-center justify-between bg-white p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-bold text-red-800">No Refund</div>
                    <div className="text-gray-600 text-sm">Less than 24 hours</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-700">0%</div>
              </div>
            </div>

            <div className="mt-6 text-center text-gray-600 text-sm">
              Refunds processed within 5-7 business days
            </div>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="bg-blue-100 p-4 rounded-xl">
            <Shield className="h-8 w-8 text-blue-700" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-blue-900 text-lg mb-2">Payment Security</h4>
            <p className="text-gray-700">
              All transactions are secured with 256-bit SSL encryption. We never store your 
              card details. Payments are processed through PCI-DSS compliant payment gateways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}