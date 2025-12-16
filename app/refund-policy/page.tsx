// app/refund-policy/page.tsx
export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Refund Policy
        </h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Cancellation & Refund Terms
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>100% refund if cancelled 48 hours before trip</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>50% refund if cancelled 24-48 hours before trip</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>No refund if cancelled less than 24 hours before trip</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Refund Process
              </h2>
              <p className="text-gray-600">
                Refunds are processed within 5-7 business days to your original payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}