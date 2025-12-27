// components/gallery/AdminButton.tsx
'use client';

import { useState, useEffect } from 'react';
import { Lock, Upload, Trash2, LogOut, Shield } from 'lucide-react';
import AuthModal from './AuthModal';
import UploadModal from './UploadModal';

interface AdminButtonProps {
  onDeleteModeToggle: () => void;
}

export default function AdminButton({ onDeleteModeToggle }: AdminButtonProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('gallery_admin_auth');
      const isAuth = authStatus === 'authenticated';
      setIsAuthenticated(isAuth);
      
      // Also set cookie for server-side authentication
      if (isAuth) {
        document.cookie = 'gallery_admin_auth=authenticated; path=/; max-age=86400'; // 24 hours
      }
    };
    
    checkAuth();
    
    // Listen for storage events (for cross-tab auth)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'gallery_admin_auth') {
        checkAuth();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    // Set auth in localStorage
    localStorage.setItem('gallery_admin_auth', 'authenticated');
    localStorage.setItem('gallery_admin_time', Date.now().toString());
    // Set cookie for server-side authentication
    document.cookie = 'gallery_admin_auth=authenticated; path=/; max-age=86400'; // 24 hours
    setShowAuthModal(false);
    setTimeout(() => setShowUploadModal(true), 100);
  };

  // Enhanced logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsDeleteMode(false);
    // Clear all auth data
    localStorage.removeItem('gallery_admin_auth');
    localStorage.removeItem('gallery_admin_token');
    localStorage.removeItem('gallery_admin_time');
    // Clear cookie
    document.cookie = 'gallery_admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setShowUploadModal(false);
    setShowMenu(false);
    onDeleteModeToggle();
    
    // Show logout message
    setTimeout(() => {
      alert('✅ Admin logged out successfully');
    }, 100);
  };

  // Toggle delete mode
  const toggleDeleteMode = () => {
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
        alert('🛡️ DELETE MODE ACTIVATED\n\nClick on any gallery item to delete it permanently.');
      }, 300);
    } else {
      alert('✅ Delete mode deactivated');
    }
  };

  return (
    <>
      {/* Main Admin Button - Right Middle Position */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[9999]">
        
        {/* Admin Menu Dropdown */}
        {showMenu && isAuthenticated && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-56 overflow-hidden animate-in slide-in-from-right-2">
            <div className="p-4 space-y-3">
              {/* Header */}
              <div className="flex items-center gap-3 px-2 py-2 mb-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${isDeleteMode ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Admin Panel</div>
                  <div className="text-xs text-gray-500">Authenticated</div>
                </div>
              </div>
              
              {/* Upload Button */}
              <button
                onClick={() => {
                  setShowUploadModal(true);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 rounded-lg transition-all duration-200 text-gray-800 hover:text-blue-700"
              >
                <Upload className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Upload Media</div>
                  <div className="text-xs text-gray-500">Add new images/videos</div>
                </div>
              </button>
              
              {/* Delete Mode Button */}
              <button
                onClick={toggleDeleteMode}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  isDeleteMode 
                    ? 'bg-red-50 text-red-700 hover:bg-red-100' 
                    : 'text-gray-800 hover:bg-gray-100 hover:text-red-600'
                }`}
              >
                <Trash2 className="h-5 w-5" />
                <div>
                  <div className="font-medium">
                    {isDeleteMode ? 'Exit Delete Mode' : 'Enable Delete Mode'}
                  </div>
                  <div className="text-xs">
                    {isDeleteMode ? 'Click to exit' : 'Delete gallery items'}
                  </div>
                </div>
              </button>
              
              {/* Divider */}
              <div className="border-t border-gray-200 pt-3 mt-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 rounded-lg transition-all duration-200 text-gray-800 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium">Logout</div>
                    <div className="text-xs text-gray-500">End admin session</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Admin Button */}
        <div className="relative group">
          <button
            onClick={() => {
              if (isAuthenticated) {
                setShowMenu(!showMenu);
              } else {
                setShowAuthModal(true);
              }
            }}
            className={`
              w-14 h-14 
              flex items-center justify-center 
              transition-all duration-300
              hover:scale-110 active:scale-95
              rounded-2xl
              shadow-2xl
              border-2 border-white
              ${isAuthenticated 
                ? isDeleteMode 
                  ? 'bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-red-500/50' 
                  : 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white shadow-blue-500/50'
                : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white shadow-gray-500/50'
              }
            `}
            title={isAuthenticated ? (isDeleteMode ? 'Delete Mode Active' : 'Admin Panel') : 'Admin Login'}
          >
            {isAuthenticated ? (
              isDeleteMode ? (
                <Trash2 className="h-6 w-6" />
              ) : (
                <Shield className="h-6 w-6" />
              )
            ) : (
              <Lock className="h-6 w-6" />
            )}
          </button>
          
          {/* Status Dot */}
          {isAuthenticated && (
            <span className={`
              absolute -top-1 -right-1 
              w-4 h-4 
              rounded-full 
              border-2 border-white
              ${isDeleteMode ? 'bg-red-500 animate-pulse' : 'bg-green-500'}
            `}></span>
          )}
        </div>
      </div>

      {/* Delete Mode Indicator */}
      {isDeleteMode && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9998] bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-pulse">
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
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          onSuccess={handleAuthSuccess} 
        />
      )}
      
      {showUploadModal && (
        <UploadModal 
          onClose={() => setShowUploadModal(false)} 
          onUploadSuccess={() => {
            alert('✅ Upload successful! Refreshing gallery...');
            window.location.reload();
          }} 
        />
      )}
    </>
  );
}