// // components/gallery/AdminButton.tsx - RIGHT MIDDLE POSITION
// 'use client';

// import { useState, useEffect } from 'react';
// import { Lock, Upload, Trash2, LogOut } from 'lucide-react';
// import AuthModal from './AuthModal';
// import UploadModal from './UploadModal';

// interface AdminButtonProps {
//   onDeleteModeToggle: () => void;
// }

// export default function AdminButton({ onDeleteModeToggle }: AdminButtonProps) {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isDeleteMode, setIsDeleteMode] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     const authStatus = localStorage.getItem('gallery_admin_auth');
//     setIsAuthenticated(authStatus === 'authenticated');
//   }, []);

//   const handleAuthSuccess = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem('gallery_admin_auth', 'authenticated');
//     setShowAuthModal(false);
//     setTimeout(() => setShowUploadModal(true), 100);
//   };


  
// // components/gallery/AdminButton.tsx - UPDATED handleDeleteItem
// const handleDeleteItem = async (item: GalleryItem) => {
//   try {
//     // Get auth token from localStorage
//     const authToken = localStorage.getItem('gallery_admin_token');
    
//     const response = await fetch(`/api/gallery/${item.id}`, {
//       method: 'DELETE',
//       headers: {
//         'x-auth-token': authToken || '',
//       },
//     });
    
//     const data = await response.json();
    
//     if (data.success) {
//       // Remove from state
//       setItems(prev => prev.filter(i => i.id !== item.id));
//       if (selectedItem?.id === item.id) {
//         setSelectedItem(null);
//       }
//     } else {
//       throw new Error(data.message);
//     }
//   } catch (error) {
//     console.error('Delete failed:', error);
//     alert('Failed to delete item. Please check authentication.');
//   }
// };




// // components/gallery/AdminButton.tsx - Add this logout function
// const handleLogout = () => {
//   setIsAuthenticated(false);
//   setIsDeleteMode(false);
//   // Clear all auth data
//   localStorage.removeItem('gallery_admin_auth');
//   localStorage.removeItem('gallery_admin_token');
//   localStorage.removeItem('gallery_admin_time');
//   setShowUploadModal(false);
//   setShowMenu(false);
//   onDeleteModeToggle();
  
//   // Show logout message
//   setTimeout(() => {
//     alert('Admin logged out successfully');
//   }, 100);
// };

// // Add this function to check authentication before delete mode
// const handleDeleteModeToggle = () => {
//   if (!isAuthenticated) {
//     setShowAuthModal(true);
//     return;
//   }
  
//   const newDeleteMode = !isDeleteMode;
//   setIsDeleteMode(newDeleteMode);
//   setShowMenu(false);
//   onDeleteModeToggle();
  
//   if (newDeleteMode) {
//     setTimeout(() => {
//       alert('🛡️ Delete Mode Activated\nClick on any gallery item to delete it.');
//     }, 300);
//   }
// };




//   const toggleDeleteMode = () => {
//     const newDeleteMode = !isDeleteMode;
//     setIsDeleteMode(newDeleteMode);
//     setShowMenu(false);
//     onDeleteModeToggle();
//   };

//   return (
//     <>
//       {/* RIGHT MIDDLE POSITION - Vertical Center */}
//       <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        
//         {/* Menu Dropdown - Opens to the left */}
//         {showMenu && isAuthenticated && (
//           <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-48 overflow-hidden animate-in slide-in-from-right-2">
//             <div className="p-3 space-y-2">
//               <div className="flex items-center gap-2 px-2 py-1 mb-2">
//                 <div className={`w-2 h-2 rounded-full ${isDeleteMode ? 'bg-red-500' : 'bg-green-500'}`}></div>
//                 <span className="text-xs font-medium text-gray-500">Admin Panel</span>
//               </div>
              
//               <button
//                 onClick={() => {
//                   setShowUploadModal(true);
//                   setShowMenu(false);
//                 }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-blue-50 rounded-lg transition text-gray-700"
//               >
//                 <Upload className="h-4 w-4 text-blue-500" />
//                 <span className="text-sm font-medium">Upload Media</span>
//               </button>
              
//               <button
//                 onClick={toggleDeleteMode}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition ${
//                   isDeleteMode 
//                     ? 'bg-red-50 text-red-600 hover:bg-red-100' 
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 <Trash2 className="h-4 w-4" />
//                 <span className="text-sm font-medium">
//                   {isDeleteMode ? 'Exit Delete Mode' : 'Delete Mode'}
//                 </span>
//               </button>
              
//               <div className="border-t border-gray-100 pt-2 mt-2">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition text-gray-700"
//                 >
//                   <LogOut className="h-4 w-4 text-gray-500" />
//                   <span className="text-sm font-medium">Logout</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Main Button - RIGHT MIDDLE */}
//         <div className="relative">
//           <button
//             onClick={() => {
//               if (isAuthenticated) {
//                 setShowMenu(!showMenu);
//               } else {
//                 setShowAuthModal(true);
//               }
//             }}
//             className={`
//               w-12 h-12 
//               flex items-center justify-center 
//               transition-all duration-300
//               hover:scale-110 active:scale-95
//               rounded-xl
//               shadow-xl
//               border-2 border-white
//               ${isAuthenticated 
//                 ? isDeleteMode 
//                   ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-500/50' 
//                   : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-blue-500/50'
//                 : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-gray-500/50'
//               }
//             `}
//             title={isAuthenticated ? (isDeleteMode ? 'Delete Mode Active' : 'Admin Panel') : 'Admin Login'}
//           >
//             {isAuthenticated ? (
//               isDeleteMode ? (
//                 <Trash2 className="h-5 w-5" />
//               ) : (
//                 <div className="text-base font-bold">A</div>
//               )
//             ) : (
//               <Lock className="h-5 w-5" />
//             )}
//           </button>
          
//           {/* Status Dot */}
//           {isAuthenticated && (
//             <span className={`
//               absolute -top-1 -right-1 
//               w-3 h-3 
//               rounded-full 
//               border-2 border-white
//               ${isDeleteMode ? 'bg-red-400 animate-pulse' : 'bg-green-400'}
//             `}></span>
//           )}
          
//           {/* Tooltip on Hover */}
//           <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
//             {isAuthenticated ? (isDeleteMode ? 'Delete Mode' : 'Admin Panel') : 'Admin Login'}
//           </div>
//         </div>
//       </div>

//       {/* Delete Mode Indicator - Top Center */}
//       {isDeleteMode && (
//         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-pulse">
//           <Trash2 className="h-5 w-5" />
//           <span className="font-bold text-sm">DELETE MODE ACTIVE</span>
//           <span className="text-xs bg-white/20 px-2 py-1 rounded">Click items to delete</span>
//           <button
//             onClick={toggleDeleteMode}
//             className="ml-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition"
//           >
//             Exit
//           </button>
//         </div>
//       )}

//       {/* Modals */}
//       {showAuthModal && (
//         <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
//       )}
      
//       {showUploadModal && (
//         <UploadModal 
//           onClose={() => setShowUploadModal(false)} 
//           onUploadSuccess={() => window.location.reload()} 
//         />
//       )}
//     </>
//   );
// }










// components/gallery/AdminButton.tsx - RIGHT MIDDLE POSITION
'use client';

import { useState, useEffect } from 'react';
import { Lock, Upload, Trash2, LogOut } from 'lucide-react';
import AuthModal from './AuthModal';
import UploadModal from './UploadModal';
import { GalleryItem } from '@/lib/types/gallery'; // ✅ ADD THIS LINE

interface AdminButtonProps {
  onDeleteModeToggle: () => void;
}

export default function AdminButton({ onDeleteModeToggle }: AdminButtonProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('gallery_admin_auth');
    setIsAuthenticated(authStatus === 'authenticated');
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('gallery_admin_auth', 'authenticated');
    setShowAuthModal(false);
    setTimeout(() => setShowUploadModal(true), 100);
  };

  // Logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsDeleteMode(false);
    // Clear all auth data
    localStorage.removeItem('gallery_admin_auth');
    localStorage.removeItem('gallery_admin_token');
    localStorage.removeItem('gallery_admin_time');
    setShowUploadModal(false);
    setShowMenu(false);
    onDeleteModeToggle();
    
    // Show logout message
    setTimeout(() => {
      alert('Admin logged out successfully');
    }, 100);
  };

  // Check authentication before delete mode
  const handleDeleteModeToggle = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    
    const newDeleteMode = !isDeleteMode;
    setIsDeleteMode(newDeleteMode);
    setShowMenu(false);
    onDeleteModeToggle();
    
    if (newDeleteMode) {
      setTimeout(() => {
        alert('🛡️ Delete Mode Activated\nClick on any gallery item to delete it.');
      }, 300);
    }
  };

  const toggleDeleteMode = () => {
    const newDeleteMode = !isDeleteMode;
    setIsDeleteMode(newDeleteMode);
    setShowMenu(false);
    onDeleteModeToggle();
  };

  return (
    <>
      {/* RIGHT MIDDLE POSITION - Vertical Center */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        
        {/* Menu Dropdown - Opens to the left */}
        {showMenu && isAuthenticated && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-48 overflow-hidden animate-in slide-in-from-right-2">
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2 px-2 py-1 mb-2">
                <div className={`w-2 h-2 rounded-full ${isDeleteMode ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <span className="text-xs font-medium text-gray-500">Admin Panel</span>
              </div>
              
              <button
                onClick={() => {
                  setShowUploadModal(true);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-blue-50 rounded-lg transition text-gray-700"
              >
                <Upload className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Upload Media</span>
              </button>
              
              <button
                onClick={toggleDeleteMode}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition ${
                  isDeleteMode 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Trash2 className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {isDeleteMode ? 'Exit Delete Mode' : 'Delete Mode'}
                </span>
              </button>
              
              <div className="border-t border-gray-100 pt-2 mt-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition text-gray-700"
                >
                  <LogOut className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Button - RIGHT MIDDLE */}
        <div className="relative">
          <button
            onClick={() => {
              if (isAuthenticated) {
                setShowMenu(!showMenu);
              } else {
                setShowAuthModal(true);
              }
            }}
            className={`
              w-12 h-12 
              flex items-center justify-center 
              transition-all duration-300
              hover:scale-110 active:scale-95
              rounded-xl
              shadow-xl
              border-2 border-white
              ${isAuthenticated 
                ? isDeleteMode 
                  ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-500/50' 
                  : 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-blue-500/50'
                : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-gray-500/50'
              }
            `}
            title={isAuthenticated ? (isDeleteMode ? 'Delete Mode Active' : 'Admin Panel') : 'Admin Login'}
          >
            {isAuthenticated ? (
              isDeleteMode ? (
                <Trash2 className="h-5 w-5" />
              ) : (
                <div className="text-base font-bold">A</div>
              )
            ) : (
              <Lock className="h-5 w-5" />
            )}
          </button>
          
          {/* Status Dot */}
          {isAuthenticated && (
            <span className={`
              absolute -top-1 -right-1 
              w-3 h-3 
              rounded-full 
              border-2 border-white
              ${isDeleteMode ? 'bg-red-400 animate-pulse' : 'bg-green-400'}
            `}></span>
          )}
          
          {/* Tooltip on Hover */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {isAuthenticated ? (isDeleteMode ? 'Delete Mode' : 'Admin Panel') : 'Admin Login'}
          </div>
        </div>
      </div>

      {/* Delete Mode Indicator - Top Center */}
      {isDeleteMode && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 animate-pulse">
          <Trash2 className="h-5 w-5" />
          <span className="font-bold text-sm">DELETE MODE ACTIVE</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded">Click items to delete</span>
          <button
            onClick={toggleDeleteMode}
            className="ml-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition"
          >
            Exit
          </button>
        </div>
      )}

      {/* Modals */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
      )}
      
      {showUploadModal && (
        <UploadModal 
          onClose={() => setShowUploadModal(false)} 
          onUploadSuccess={() => window.location.reload()} 
        />
      )}
    </>
  );
}