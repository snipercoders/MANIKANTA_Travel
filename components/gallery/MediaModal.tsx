
//components/gallery/MediaModal.tsx - PREVIOUS



'use client';

import { useEffect } from 'react';
import { GalleryItem } from '@/lib/types/gallery';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon, TrashIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MediaModalProps {
  item: GalleryItem;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onDelete?: (item: GalleryItem) => Promise<void>;
}

export default function MediaModal({ 
  item, 
  onClose, 
  onNext, 
  onPrev, 
  onDelete 
}: MediaModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext?.();
      if (e.key === 'ArrowLeft') onPrev?.();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onNext, onPrev]);

  const isLocalUrl = item.url.startsWith('/');

  const handleDelete = async () => {
    if (!onDelete) return;
    if (window.confirm(`Permanently delete "${item.title}"?\nThis cannot be undone.`)) {
      await onDelete(item);
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gray-300 z-20 transition"
        >
          <XMarkIcon className="h-8 w-8 md:h-10 md:w-10" />
        </button>

        {/* Delete Button (if onDelete provided) */}
        {onDelete && (
          <button
            onClick={handleDelete}
            className="absolute -top-12 left-0 md:top-4 md:left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition flex items-center gap-2 z-20 shadow-lg"
          >
            <TrashIcon className="h-5 w-5" />
            Delete Image
          </button>
        )}

        {/* Navigation Arrows */}
        {onPrev && (
          <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20 transition">
            <ChevronLeftIcon className="h-12 w-12 md:h-16 md:w-16" />
          </button>
        )}
        {onNext && (
          <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-20 transition">
            <ChevronRightIcon className="h-12 w-12 md:h-16 md:w-16" />
          </button>
        )}

        {/* Main Media */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="relative max-h-[85vh] w-full mx-auto">
            {isLocalUrl ? (
              <Image
                src={item.url}
                alt={item.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                priority
                sizes="90vw"
              />
            ) : (
              <img
                src={item.url}
                alt={item.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                loading="eager"
              />
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 rounded-b-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-lg md:text-xl text-white/90 mb-3 drop-shadow">
                  {item.description}
                </p>
              )}
              {item.location && (
                <p className="flex items-center gap-2 text-white/80 text-base md:text-lg drop-shadow">
                  <MapPinIcon className="h-5 w-5 md:h-6 md:w-6" />
                  {item.location}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                {item.tags?.slice(0, 4).map(tag => (
                  <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm">
          ← → arrows to navigate • ESC to close
        </p>
      </div>
    </motion.div>
  );
}