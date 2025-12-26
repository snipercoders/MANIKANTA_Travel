// //components/gallery/ImageGrid.tsx

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
//     e.stopPropagation(); // Prevent modal from opening
    
//     if (!isDeleteMode) return;
    
//     if (!window.confirm(`Are you sure you want to delete "${item.title}"?\n\nThis action is permanent and cannot be undone!`)) {
//       return;
//     }
    
//     setDeletingId(item.id);
//     try {
//       await onDeleteItem(item);
//     } catch (error: any) {
//       console.error('Delete failed:', error);
//       // Show error alert
//       alert(`Failed to delete item: ${error.message || 'Unknown error'}`);
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
//           <Loader2 className="h-16 w-16 animate-spin text-blue-600 mb-4" />
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
//         </div>
//         <p className="text-gray-700 text-lg font-medium">Loading your gallery...</p>
//         <p className="text-gray-500 text-sm mt-2">Curating beautiful memories</p>
//       </div>
//     );
//   }

//   if (safeItems.length === 0) {
//     return (
//       <div className="text-center py-20">
//         <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
//           <Grid3x3 className="h-12 w-12 text-gray-400" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">No images found</h3>
//         <p className="text-gray-600 max-w-md mx-auto">
//           {isDeleteMode ? 'No items to delete' : 'Try adjusting filters or upload new content'}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <section className="py-8">
//       {/* Grid Controls */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h3 className="text-xl font-bold text-gray-900">Photos ({safeItems.length})</h3>
//           <p className="text-gray-600 text-sm mt-1">
//             {isDeleteMode ? (
//               <span className="flex items-center gap-2 text-red-600 font-medium">
//                 <Shield className="h-4 w-4" />
//                 🗑️ Delete Mode Active - Click items to delete
//               </span>
//             ) : (
//               'Click to view details'
//             )}
//           </p>
//         </div>
        
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setViewMode('grid')}
//             className={`p-2 rounded-lg transition ${
//               viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
//             }`}
//             title="Grid View"
//           >
//             <Grid3x3 className="h-5 w-5" />
//           </button>
//           <button
//             onClick={() => setViewMode('masonry')}
//             className={`p-2 rounded-lg transition ${
//               viewMode === 'masonry' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-600'
//             }`}
//             title="Masonry View"
//           >
//             <List className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Delete Mode Warning Banner */}
//       {isDeleteMode && (
//         <div className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
//           <div className="flex items-center gap-3">
//             <div className="bg-red-100 p-2 rounded-lg">
//               <AlertTriangle className="h-5 w-5 text-red-600" />
//             </div>
//             <div className="flex-1">
//               <h4 className="font-bold text-red-800">Delete Mode Active</h4>
//               <p className="text-red-700 text-sm">
//                 Click on any item to delete it. This action is permanent and cannot be undone!
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Grid Layout */}
//       <div className={viewMode === 'grid' 
//         ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
//         : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6'
//       }>
//         {safeItems.map((item) => (
//           <div
//             key={item.id}
//             className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${
//               viewMode === 'masonry' ? 'break-inside-avoid' : ''
//             } ${isDeleteMode ? 'hover:scale-[1.02] hover:shadow-2xl' : 'hover:scale-[1.01]'}`}
//             onMouseEnter={() => setHoveredId(item.id)}
//             onMouseLeave={() => setHoveredId(null)}
//             onClick={(e) => handleItemClick(item, e)}
//           >
//             {/* Image Container */}
//             <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ${
//               item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
//             }`}>
//               {/* Image */}
//               <img
//                 src={item.url}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 loading="lazy"
//                 onError={(e) => {
//                   e.currentTarget.src = `https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(item.title)}`;
//                 }}
//               />

//               {/* Overlay Effects */}
//               <div className={`absolute inset-0 transition-all duration-300 ${
//                 hoveredId === item.id || isDeleteMode
//                   ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
//                   : 'bg-gradient-to-t from-black/60 to-transparent'
//               }`} />

//               {/* Delete Mode Overlay */}
//               {isDeleteMode && (
//                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
//                   <div className={`transform transition-all duration-300 ${
//                     hoveredId === item.id ? 'scale-110 rotate-12' : 'scale-100'
//                   }`}>
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-red-600 blur-lg opacity-50"></div>
//                       <div className="relative bg-red-600 text-white p-4 rounded-full shadow-2xl">
//                         <Trash2 className="h-8 w-8" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Deleting Loader */}
//               {deletingId === item.id && (
//                 <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20">
//                   <div className="relative">
//                     <Loader2 className="h-12 w-12 animate-spin text-white" />
//                     <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 blur-xl"></div>
//                   </div>
//                   <p className="text-white mt-4 font-medium">Deleting...</p>
//                   <p className="text-white/70 text-sm mt-1">Please wait</p>
//                 </div>
//               )}

//               {/* Top Badges */}
//               <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
//                 <div className="flex flex-wrap gap-1">
//                   <span className={`text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm ${
//                     isDeleteMode 
//                       ? 'bg-red-600 text-white' 
//                       : 'bg-black/70 text-white'
//                   }`}>
//                     {item.category}
//                   </span>
//                   {!isDeleteMode && item.tags?.slice(0, 2).map(tag => (
//                     <span key={tag} className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 {isDeleteMode && (
//                   <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
//                     DELETE
//                   </span>
//                 )}
//               </div>

//               {/* Bottom Content */}
//               <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-all duration-300 ${
//                 hoveredId === item.id ? 'translate-y-0' : 'translate-y-2'
//               }`}>
//                 <h3 className="text-white font-bold text-base sm:text-lg line-clamp-1 mb-2 drop-shadow-xl">
//                   {item.title}
//                 </h3>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2 text-white/90 text-sm">
//                     {item.location && (
//                       <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
//                         <MapPin className="h-3.5 w-3.5" />
//                         <span className="truncate max-w-[120px]">{item.location}</span>
//                       </div>
//                     )}
//                   </div>
                  
//                   {!isDeleteMode && (
//                     <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-lg text-sm">
//                       <Eye className="h-3.5 w-3.5" />
//                       <span>View</span>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Description on Hover */}
//                 {hoveredId === item.id && item.description && (
//                   <div className="mt-3 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
//                     <p className="text-white/90 text-sm line-clamp-2">
//                       {item.description}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Hover Info Panel */}
//               {hoveredId === item.id && !isDeleteMode && (
//                 <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
//                   <div className="text-white text-center">
//                     <div className="text-lg font-bold mb-2">Click to View</div>
//                     <div className="text-sm opacity-90">Fullscreen with details</div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Item Type Indicator */}
//             {item.type === 'video' && (
//               <div className="absolute top-4 right-4 z-10">
//                 <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg flex items-center gap-1.5">
//                   <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//                   VIDEO
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* No Results Message */}
//       {safeItems.length === 0 && !loading && (
//         <div className="text-center py-16">
//           <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
//             <Grid3x3 className="h-12 w-12 text-gray-400" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-3">
//             {isDeleteMode ? 'No Items to Delete' : 'No Images Found'}
//           </h3>
//           <p className="text-gray-600 max-w-md mx-auto">
//             {isDeleteMode 
//               ? 'All items have been deleted or filtered out.'
//               : 'Try adjusting your filters or check back later.'
//             }
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }
















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

  const handleDelete = async (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDeleteMode) return;
    if (!window.confirm(`Are you sure you want to delete "${item.title}"?\n\nThis action is permanent!`)) return;

    setDeletingId(item.id);
    try {
      await onDeleteItem(item);
    } catch (error: any) {
      alert(`Failed to delete: ${error.message || 'Unknown error'}`);
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
        <div className="relative">
          <Loader2 className="h-16 w-16 animate-spin text-red-600 mb-4" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 blur-xl"></div>
        </div>
        <p className="text-gray-700 text-lg font-medium">Loading gallery...</p>
      </div>
    );
  }

  if (safeItems.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Grid3x3 className="h-12 w-12 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">No items found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {isDeleteMode ? 'No items to delete' : 'Try adjusting filters'}
        </p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Photos ({safeItems.length})</h3>
          <p className="text-gray-600 text-sm mt-1">
            {isDeleteMode ? (
              <span className="flex items-center gap-2 text-red-600 font-medium">
                <Shield className="h-4 w-4" />
                Delete Mode Active
              </span>
            ) : 'Click to view'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
          >
            <Grid3x3 className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`p-2 rounded-lg transition ${viewMode === 'masonry' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isDeleteMode && (
        <div className="mb-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-800">Delete Mode Active</h4>
              <p className="text-red-700 text-sm">Click any item to permanently delete it.</p>
            </div>
          </div>
        </div>
      )}

      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
        : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6'
      }>
        {safeItems.map((item) => (
          <div
            key={item.id}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ${viewMode === 'masonry' ? 'break-inside-avoid' : ''}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={(e) => handleItemClick(item, e)}
          >
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ${item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity ${hoveredId === item.id || isDeleteMode ? 'opacity-100' : 'opacity-70'}`} />

              {isDeleteMode && (
                <div className="absolute inset-0 bg-red-600/30 flex items-center justify-center">
                  <div className="bg-red-600 text-white p-5 rounded-full shadow-2xl">
                    <Trash2 className="h-10 w-10" />
                  </div>
                </div>
              )}

              {deletingId === item.id && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                  <Loader2 className="h-12 w-12 animate-spin text-white" />
                </div>
              )}

              <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
                <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${isDeleteMode ? 'bg-red-600 text-white' : 'bg-black/70 text-white backdrop-blur-sm'}`}>
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg line-clamp-1 mb-1">{item.title}</h3>
                {item.location && (
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
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