// // //components/gallery/ImageGrid.tsx


// 'use client';

// import { useState } from 'react';
// import { GalleryItem } from '@/lib/types/gallery';
// import { MapPin, Grid3x3, List, Eye, Trash2, Loader2, Shield, AlertTriangle } from 'lucide-react';

// interface ImageGridProps {
//   items?: GalleryItem[];
//   onItemClick: (item: GalleryItem) => void;
//   loading: boolean;
//   isDeleteMode: boolean;
//   onDeleteItem: (item: GalleryItem) => Promise<void>;
// }

// export default function ImageGrid({ 
//   items = [],
//   onItemClick, 
//   loading, 
//   isDeleteMode,
//   onDeleteItem 
// }: ImageGridProps) {
//   const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
//   const [deletingId, setDeletingId] = useState<string | null>(null);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   const safeItems = items || [];

//   const handleDelete = async (item: GalleryItem, e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!isDeleteMode) return;
//     if (!window.confirm(`Are you sure you want to delete "${item.title}"?\n\nThis action is permanent!`)) return;

//     setDeletingId(item.id);
//     try {
//       await onDeleteItem(item);
//     } catch (error: any) {
//       alert(`Failed to delete: ${error.message || 'Unknown error'}`);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handleItemClick = (item: GalleryItem, e: React.MouseEvent) => {
//     if (isDeleteMode) {
//       handleDelete(item, e);
//     } else {
//       onItemClick(item);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
//         <div className="relative">
//           <Loader2 className="h-16 w-16 animate-spin text-red-600 mb-4" />
//           <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 blur-xl"></div>
//         </div>
//         <p className="text-gray-700 text-lg font-medium">Loading gallery...</p>
//       </div>
//     );
//   }

//   if (safeItems.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
//           <Grid3x3 className="h-12 w-12 text-red-600" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">No items found</h3>
//         <p className="text-gray-600 max-w-md mx-auto">
//           {isDeleteMode ? 'No items to delete' : 'Try adjusting filters'}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <section className="py-8">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h3 className="text-xl font-bold text-gray-900">Photos ({safeItems.length})</h3>
//           <p className="text-gray-600 text-sm mt-1">
//             {isDeleteMode ? (
//               <span className="flex items-center gap-2 text-red-600 font-medium">
//                 <Shield className="h-4 w-4" />
//                 Delete Mode Active
//               </span>
//             ) : 'Click to view'}
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setViewMode('grid')}
//             className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
//           >
//             <Grid3x3 className="h-5 w-5" />
//           </button>
//           <button
//             onClick={() => setViewMode('masonry')}
//             className={`p-2 rounded-lg transition ${viewMode === 'masonry' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
//           >
//             <List className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {isDeleteMode && (
//         <div className="mb-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-xl p-4">
//           <div className="flex items-center gap-3">
//             <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
//             <div>
//               <h4 className="font-bold text-red-800">Delete Mode Active</h4>
//               <p className="text-red-700 text-sm">Click any item to permanently delete it.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className={viewMode === 'grid' 
//         ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
//         : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6'
//       }>
//         {safeItems.map((item) => (
//           <div
//             key={item.id}
//             className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${viewMode === 'masonry' ? 'break-inside-avoid' : ''}`}
//             onMouseEnter={() => setHoveredId(item.id)}
//             onMouseLeave={() => setHoveredId(null)}
//             onClick={(e) => handleItemClick(item, e)}
//           >
//             <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ${item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
//               <img
//                 src={item.url}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 loading="lazy"
//               />

//               <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity ${hoveredId === item.id || isDeleteMode ? 'opacity-100' : 'opacity-70'}`} />

//               {isDeleteMode && (
//                 <div className="absolute inset-0 bg-red-600/30 flex items-center justify-center">
//                   <div className="bg-red-600 text-white p-5 rounded-full shadow-2xl">
//                     <Trash2 className="h-10 w-10" />
//                   </div>
//                 </div>
//               )}

//               {deletingId === item.id && (
//                 <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
//                   <Loader2 className="h-12 w-12 animate-spin text-white" />
//                 </div>
//               )}

//               <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
//                 <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${isDeleteMode ? 'bg-red-600 text-white' : 'bg-black/70 text-white backdrop-blur-sm'}`}>
//                   {item.category}
//                 </span>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                 <h3 className="font-bold text-lg line-clamp-1 mb-1">{item.title}</h3>
//                 {item.location && (
//                   <div className="flex items-center gap-2 text-sm opacity-90">
//                     <MapPin className="h-4 w-4" />
//                     <span>{item.location}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }













// components/gallery/ImageGrid.tsx
'use client';

import { useState } from 'react';
import { GalleryItem } from '@/lib/types/gallery';
import { MapPin, Grid3x3, List, Eye, Trash2, Loader2, Shield, AlertTriangle } from 'lucide-react';

interface ImageGridProps {
  items?: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
  loading: boolean;
  isDeleteMode: boolean;
  onDeleteItem: (item: GalleryItem) => Promise<void>;
}

export default function ImageGrid({ 
  items = [],
  onItemClick, 
  loading, 
  isDeleteMode,
  onDeleteItem 
}: ImageGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const safeItems = items || [];

 
  // Update the handleDelete function in ImageGrid
const handleDelete = async (item: GalleryItem, e: React.MouseEvent) => {
  e.stopPropagation();
  if (!isDeleteMode) return;
  if (!window.confirm(`Are you sure you want to delete "${item.title}"?\n\nThis action is permanent!`)) return;

  setDeletingId(item.id);
  try {
    await onDeleteItem(item);
    alert(`✅ Successfully deleted "${item.title}"`);
  } catch (error: any) {
    alert(`❌ Failed to delete: ${error.message || 'Unknown error'}`);
  } finally {
    setDeletingId(null);
  }
};


  const handleItemClick = (item: GalleryItem, e: React.MouseEvent) => {
    if (isDeleteMode) {
      handleDelete(item, e);
    } else {
      onItemClick(item);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="relative">
          <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 animate-spin text-red-600 mb-3 sm:mb-4" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 blur-xl"></div>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">Loading gallery...</p>
      </div>
    );
  }

  if (safeItems.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Grid3x3 className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-600" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
          No items found
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          {isDeleteMode ? 'No items to delete' : 'Try adjusting filters'}
        </p>
      </div>
    );
  }

  return (
    <section className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4 lg:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6 md:mb-8">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
            Photos ({safeItems.length})
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {isDeleteMode ? (
              <span className="flex items-center gap-1 sm:gap-2 text-red-600 font-medium">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                Delete Mode Active
              </span>
            ) : (
              'Click to view'
            )}
          </p>
        </div>
        
        {/* View Toggle Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 sm:p-2 rounded-lg transition ${
              viewMode === 'grid' 
                ? 'bg-red-100 text-red-600' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
            aria-label="Grid view"
          >
            <Grid3x3 className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`p-1.5 sm:p-2 rounded-lg transition ${
              viewMode === 'masonry' 
                ? 'bg-red-100 text-red-600' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            }`}
            aria-label="Masonry view"
          >
            <List className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Delete Mode Warning */}
      {isDeleteMode && (
        <div className="mb-4 sm:mb-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex items-start sm:items-center gap-2 sm:gap-3">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-red-800 mb-0.5 sm:mb-1">
                Delete Mode Active
              </h4>
              <p className="text-xs sm:text-sm text-red-700">
                Click any item to permanently delete it.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5'
          : 'columns-2 xs:columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5'
      }>
        {safeItems.map((item) => (
          <div
            key={item.id}
            className={`relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 mb-2 sm:mb-3 md:mb-4 lg:mb-5 ${
              viewMode === 'masonry' ? 'break-inside-avoid' : ''
            }`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={(e) => handleItemClick(item, e)}
          >
            {/* Image Container */}
            <div className={`relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ${
              item.orientation === 'portrait' 
                ? 'aspect-[3/4]' 
                : 'aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3]'
            }`}>
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${
                hoveredId === item.id || isDeleteMode ? 'opacity-100' : 'opacity-70'
              }`} />

              {/* Delete Mode Overlay */}
              {isDeleteMode && (
                <div className="absolute inset-0 bg-red-600/30 flex items-center justify-center">
                  <div className="bg-red-600 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-xl sm:shadow-2xl">
                    <Trash2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </div>
                </div>
              )}

              {/* Loading Overlay */}
              {deletingId === item.id && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                  <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 animate-spin text-white" />
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 flex justify-between z-10">
                <span className={`px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-1.5 rounded-full text-xs font-medium ${
                  isDeleteMode 
                    ? 'bg-red-600 text-white' 
                    : 'bg-black/70 text-white backdrop-blur-sm'
                }`}>
                  {item.category}
                </span>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 text-white">
                <h3 className="font-bold text-xs sm:text-sm md:text-base line-clamp-1 mb-1">
                  {item.title}
                </h3>
                {item.location && (
                  <div className="flex items-center gap-1 text-xs sm:text-sm opacity-90">
                    <MapPin className="h-3 w-3 sm:h-3 sm:w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}