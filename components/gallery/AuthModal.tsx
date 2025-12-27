// // components/gallery/AuthModal.tsx
// 'use client';

// import { useState } from 'react';
// import { X, Lock, AlertCircle, Shield } from 'lucide-react';

// interface AuthModalProps {
//   onClose: () => void;
//   onSuccess: () => void;
// }

// export default function AuthModal({ onClose, onSuccess }: AuthModalProps) {
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // List of accepted admin passwords (you can change these)
//   const validPasswords = [
//     'admin123',           // Default
//     'Admin@2024',         // Secure
//     'gallery@admin',      // Gallery specific
//     'manikanta@admin',    // Company specific
//     'sri_manikanta_123'   // Full name
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
    
//     if (!password.trim()) {
//       setError('Please enter the admin password');
//       return;
//     }

//     setLoading(true);

//     try {
//       // Simulate authentication delay
//       await new Promise(resolve => setTimeout(resolve, 800));
      
//       // Check if password is valid
//       const isValid = validPasswords.some(validPass => 
//         password.trim() === validPass
//       );
      
//       if (isValid) {
//         // Successful authentication
//         onSuccess();
//       } else {
//         setError('Incorrect password. Please try again.');
//       }
//     } catch (err) {
//       setError('Authentication failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {/* Header */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4">
//             <Shield className="h-7 w-7 text-white" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 text-center">
//             Admin Authentication
//           </h2>
//           <p className="text-sm text-gray-600 text-center mt-2">
//             Enter admin password to access gallery controls
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Admin Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter admin password"
//                 className="w-full pl-10 pr-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
//                 required
//                 autoFocus
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
//               <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
//               <p className="text-sm text-red-700 font-medium">{error}</p>
//             </div>
//           )}

//           <div className="pt-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
//             >
//               {loading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
//                   <span>Verifying...</span>
//                 </>
//               ) : (
//                 <>
//                   <Lock className="h-5 w-5" />
//                   <span>Authenticate & Continue</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </form>

//         {/* Info */}
//         <div className="mt-6 pt-4 border-t border-gray-100">
//           <div className="flex items-center gap-2 text-xs text-gray-500">
//             <AlertCircle className="h-4 w-4" />
//             <p>For security, contact the administrator if you've forgotten the password.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// components/gallery/AuthModal.tsx
'use client';

import { useState } from 'react';
import { X, Lock, AlertCircle, Shield } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ONLY ACCEPT THIS PASSWORD - chandan@12345
  const validPassword = 'chandan@12345';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!password.trim()) {
      setError('Please enter the admin password');
      return;
    }

    setLoading(true);

    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if password matches EXACTLY
      if (password.trim() === validPassword) {
        // Successful authentication
        console.log('✅ Authentication successful');
        onSuccess();
      } else {
        console.log('❌ Authentication failed. Entered:', password.trim(), 'Expected:', validPassword);
        setError('Incorrect password. Please try "chandan@12345"');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Admin Authentication
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Enter admin password to access gallery controls
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter: password"
                className="w-full pl-10 pr-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                required
                autoFocus
                disabled={loading}
              />
            </div>
         
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-700 font-medium mb-1">{error}</p>
              
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  <span>Authenticate</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Info */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <AlertCircle className="h-4 w-4" />
            <p>Contact website administrator if you need assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}