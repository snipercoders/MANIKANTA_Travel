// components/gallery/VideoModal.tsx
'use client';

import { useEffect } from 'react';
import { GalleryItem } from '@/lib/types/gallery';
import { XMarkIcon, MapPinIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { Trash2 } from 'lucide-react';


interface VideoModalProps {
  video: GalleryItem;
  onClose: () => void;
  isDeleteMode?: boolean;
  onDelete?: () => Promise<void>;
}

export default function VideoModal({ video, onClose, isDeleteMode = false, onDelete }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDeleteInModal = async () => {
    if (!onDelete) return;
    
    if (window.confirm(`Are you sure you want to delete "${video.title}"?\n\nThis action cannot be undone!`)) {
      try {
        await onDelete();
        onClose(); // Close modal after successful delete
      } catch (error) {
        console.error('Delete failed in modal:', error);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gray-300 z-20 transition"
        >
          <XMarkIcon className="h-8 w-8 md:h-10 md:w-10" />
        </button>

        {/* Delete Button in Modal (if in delete mode) */}
        {isDeleteMode && onDelete && (
          <button
            onClick={handleDeleteInModal}
            className="absolute -top-12 left-0 md:top-4 md:left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2 z-20"
          >
            <Trash2 className="h-5 w-5" />
            Delete Video
          </button>
        )}

        {/* Video Player */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video w-full">
            <video
              src={video.url}
              controls
              autoPlay
              className="w-full h-full"
              controlsList="nodownload"
              poster={
                video.url.includes('cloudinary.com') 
                  ? video.url.replace('/upload/', '/upload/c_thumb,w_1280,h_720/')
                  : undefined
              }
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video Info */}
          <div className="p-6 md:p-8 text-white bg-gradient-to-t from-black/95 to-transparent">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">{video.title}</h2>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {video.location && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPinIcon className="h-5 w-5" />
                      <span className="text-lg">{video.location}</span>
                    </div>
                  )}
                  
                  {video.createdAt && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <CalendarIcon className="h-5 w-5" />
                      <span className="text-lg">
                        {new Date(video.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Category and Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-medium">
                  {video.category}
                </span>
                
                {video.tags?.map(tag => (
                  <span key={tag} className="bg-white/20 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                    <TagIcon className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {video.description && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-300">Description</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{video.description}</p>
              </div>
            )}
            
            {/* Video Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Type</div>
                <div className="font-medium text-lg">{video.type.toUpperCase()}</div>
              </div>
              
              {video.vehicleName && (
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">Vehicle</div>
                  <div className="font-medium text-lg">{video.vehicleName}</div>
                </div>
              )}
              
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-sm text-gray-400 mb-1">Status</div>
                <div className="font-medium text-lg">
                  {isDeleteMode ? (
                    <span className="text-red-400">⚠️ Delete Mode Active</span>
                  ) : (
                    <span className="text-green-400">Active</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Hint */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          ESC to close • Space to pause/play
          {isDeleteMode && ' • Click Delete button to remove video'}
        </p>
      </div>
    </div>
  );
}