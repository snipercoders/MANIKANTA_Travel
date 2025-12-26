// // components/gallery/VideoSection.tsx - WITH INLINE MODAL AND FIXED IMPORTS
// 'use client';

// import { useState, useEffect } from 'react';
// import { GalleryItem } from '@/lib/types/gallery';
// import { 
//   PlayCircle, 
//   Trash2, 
//   Loader2, 
//   MapPin, 
//   Calendar, 
//   AlertTriangle, 
//   X,
//   Tag,
//   Sparkles
// } from 'lucide-react';

// interface VideoSectionProps {
//   videos: GalleryItem[];
//   isDeleteMode?: boolean;
//   onDeleteItem?: (item: GalleryItem) => Promise<void>;
//   onItemClick?: (item: GalleryItem) => void;
// }

// export default function VideoSection({ 
//   videos, 
//   isDeleteMode = false, 
//   onDeleteItem,
//   onItemClick 
// }: VideoSectionProps) {
//   const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
//   const [deletingId, setDeletingId] = useState<string | null>(null);
//   const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

//   // Handle Escape key to close modal
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && selectedVideo) {
//         setSelectedVideo(null);
//       }
//     };
    
//     if (selectedVideo) {
//       window.addEventListener('keydown', handleKeyDown);
//     }
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [selectedVideo]);

//   const handleDeleteVideo = async (video: GalleryItem, e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!onDeleteItem) return;
    
//     if (!window.confirm(`Are you sure you want to delete "${video.title}"?\n\nThis action is permanent and cannot be undone!`)) {
//       return;
//     }
    
//     setDeletingId(video.id);
//     try {
//       await onDeleteItem(video);
//     } catch (error: any) {
//       console.error('Failed to delete video:', error);
//       alert(`Failed to delete video: ${error.message || 'Unknown error'}`);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handleVideoClick = (video: GalleryItem, e: React.MouseEvent) => {
//     if (isDeleteMode) {
//       handleDeleteVideo(video, e);
//     } else {
//       setSelectedVideo(video);
//       onItemClick?.(video);
//     }
//   };

//   const handleDeleteInModal = async () => {
//     if (!selectedVideo || !onDeleteItem) return;
    
//     if (window.confirm(`Are you sure you want to delete "${selectedVideo.title}"?\n\nThis action cannot be undone!`)) {
//       try {
//         await onDeleteItem(selectedVideo);
//         setSelectedVideo(null); // Close modal after successful delete
//       } catch (error) {
//         console.error('Delete failed in modal:', error);
//       }
//     }
//   };

//   // If no videos, show a message
//   if (videos.length === 0) {
//     return (
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
//               <PlayCircle className="h-6 w-6 text-purple-600" />
//               <span className="font-medium text-purple-800">VIDEO GALLERY</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Videos</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               {isDeleteMode ? 'No videos to delete' : 'No videos uploaded yet. Upload videos using the admin button!'}
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
//               <PlayCircle className="h-6 w-6 text-purple-600" />
//               <span className="font-medium text-purple-800">VIDEO GALLERY</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Videos</span>
//             </h2>
//             <p className="text-lg text-gray-600">
//               {videos.length} video{videos.length !== 1 ? 's' : ''} from our journeys
//             </p>
//           </div>

//           {/* Delete Mode Warning */}
//           {isDeleteMode && (
//             <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
//               <div className="flex items-center gap-3">
//                 <div className="bg-red-100 p-2 rounded-lg">
//                   <AlertTriangle className="h-5 w-5 text-red-600" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-red-800">Delete Mode Active</h4>
//                   <p className="text-red-700 text-sm">
//                     Click on any video to delete it. This action is permanent and cannot be undone!
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Video Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {videos.map((video) => (
//               <div 
//                 key={video.id} 
//                 className={`group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${
//                   isDeleteMode ? 'hover:scale-[1.02] border-2 border-transparent hover:border-red-200' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredVideoId(video.id)}
//                 onMouseLeave={() => setHoveredVideoId(null)}
//                 onClick={(e) => handleVideoClick(video, e)}
//               >
//                 {/* Video Thumbnail Container */}
//                 <div className="aspect-video relative bg-gradient-to-br from-gray-900 to-black rounded-t-2xl overflow-hidden">
//                   {/* Video Thumbnail */}
//                   <div 
//                     className="w-full h-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 group-hover:from-purple-900/50 group-hover:to-blue-900/50 transition-all duration-500"
//                     style={{
//                       backgroundImage: video.url.includes('cloudinary.com') 
//                         ? `url(${video.url.replace('/upload/', '/upload/c_thumb,w_800,h_450/')})`
//                         : video.url.startsWith('http')
//                           ? `url(${video.url})`
//                           : undefined,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat'
//                     }}
//                   >
//                     {/* Fallback background if no image */}
//                     {!video.url.includes('cloudinary.com') && !video.url.startsWith('http') && (
//                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//                         <PlayCircle className="h-16 w-16 text-white/80" />
//                       </div>
//                     )}

//                     {/* Play Button Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-500">
//                       {!isDeleteMode ? (
//                         <div className="relative">
//                           <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-60"></div>
//                           <PlayCircle className="relative h-16 w-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
//                         </div>
//                       ) : (
//                         <div className="relative transform transition-all duration-300">
//                           <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 blur-xl opacity-60"></div>
//                           <div className="relative bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-full shadow-2xl">
//                             <Trash2 className="h-8 w-8" />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Delete Mode Overlay */}
//                     {isDeleteMode && (
//                       <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20">
//                         <div className="absolute top-4 right-4">
//                           <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
//                             DELETE
//                           </span>
//                         </div>
//                       </div>
//                     )}

//                     {/* Deleting Loader */}
//                     {deletingId === video.id && (
//                       <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20">
//                         <div className="relative">
//                           <Loader2 className="h-12 w-12 animate-spin text-white" />
//                           <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 blur-xl"></div>
//                         </div>
//                         <p className="text-white mt-4 font-medium">Deleting Video...</p>
//                         <p className="text-white/70 text-sm mt-1">Please wait</p>
//                       </div>
//                     )}

//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className={`text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm ${
//                         isDeleteMode 
//                           ? 'bg-red-600 text-white' 
//                           : 'bg-black/70 text-white'
//                       }`}>
//                         {video.category}
//                       </span>
//                     </div>

//                     {/* Hover Info */}
//                     {hoveredVideoId === video.id && !isDeleteMode && (
//                       <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
//                         <div className="text-white text-center">
//                           <div className="text-lg font-bold mb-2">Click to Watch</div>
//                           <div className="text-sm opacity-90">Fullscreen video player</div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Video Info */}
//                 <div className="p-5 sm:p-6">
//                   <div className="flex items-start justify-between mb-3">
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1 flex-1 mr-3">
//                       {video.title}
//                     </h3>
//                     {video.type === 'video' && (
//                       <span className="flex-shrink-0 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-xs px-2.5 py-1 rounded-full font-medium">
//                         VIDEO
//                       </span>
//                     )}
//                   </div>
                  
//                   {video.location && (
//                     <div className="flex items-center gap-2 text-gray-600 mb-3">
//                       <MapPin className="h-4 w-4 flex-shrink-0" />
//                       <span className="text-sm line-clamp-1">{video.location}</span>
//                     </div>
//                   )}
                  
//                   {video.description && (
//                     <p className="text-gray-700 text-sm line-clamp-2 mb-4">
//                       {video.description}
//                     </p>
//                   )}
                  
//                   {/* Metadata Row */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       {video.createdAt && (
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3.5 w-3.5" />
//                           <span>{new Date(video.createdAt).toLocaleDateString()}</span>
//                         </div>
//                       )}
//                     </div>
                    
//                     {!isDeleteMode ? (
//                       <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
//                         <PlayCircle className="h-4 w-4" />
//                         <span>Watch</span>
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
//                         <Trash2 className="h-4 w-4" />
//                         <span>Delete</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* INLINE VIDEO MODAL */}
//       {selectedVideo && (
//         <div 
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
//           onClick={() => setSelectedVideo(null)}
//         >
//           <div 
//             className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedVideo(null)}
//               className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gray-300 z-20 transition"
//             >
//               <X className="h-8 w-8 md:h-10 md:w-10" />
//             </button>

//             {/* Delete Button in Modal (if in delete mode) */}
//             {isDeleteMode && onDeleteItem && (
//               <button
//                 onClick={handleDeleteInModal}
//                 className="absolute -top-12 left-0 md:top-4 md:left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2 z-20"
//               >
//                 <Trash2 className="h-5 w-5" />
//                 Delete Video
//               </button>
//             )}

//             {/* Video Player */}
//             <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
//               <div className="aspect-video w-full">
//                 <video
//                   src={selectedVideo.url}
//                   controls
//                   autoPlay
//                   className="w-full h-full"
//                   controlsList="nodownload"
//                 >
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
              
//               {/* Video Info */}
//               <div className="p-6 md:p-8 text-white bg-gradient-to-t from-black/95 to-transparent">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
//                   <div className="flex-1">
//                     <h2 className="text-2xl md:text-4xl font-bold mb-3">{selectedVideo.title}</h2>
                    
//                     <div className="flex flex-wrap items-center gap-4 mb-4">
//                       {selectedVideo.location && (
//                         <div className="flex items-center gap-2 text-gray-300">
//                           <MapPin className="h-5 w-5" />
//                           <span className="text-lg">{selectedVideo.location}</span>
//                         </div>
//                       )}
                      
//                       {selectedVideo.createdAt && (
//                         <div className="flex items-center gap-2 text-gray-300">
//                           <Calendar className="h-5 w-5" />
//                           <span className="text-lg">
//                             {new Date(selectedVideo.createdAt).toLocaleDateString('en-US', {
//                               year: 'numeric',
//                               month: 'long',
//                               day: 'numeric'
//                             })}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* Category and Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-medium">
//                       {selectedVideo.category}
//                     </span>
                    
//                     {selectedVideo.tags?.slice(0, 3).map(tag => (
//                       <span key={tag} className="bg-white/20 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
//                         <Tag className="h-3 w-3" />
//                         {tag}
//                       </span>
//                     ))}
//                     {selectedVideo.tags && selectedVideo.tags.length > 3 && (
//                       <span className="bg-white/10 text-white/80 px-3 py-1.5 rounded-full text-sm">
//                         +{selectedVideo.tags.length - 3} more
//                       </span>
//                     )}
//                   </div>
//                 </div>
                
//                 {selectedVideo.description && (
//                   <div className="mb-6">
//                     <h3 className="text-xl font-bold mb-3 text-gray-300">Description</h3>
//                     <p className="text-lg text-gray-300 leading-relaxed">{selectedVideo.description}</p>
//                   </div>
//                 )}
                
//                 {/* Video Metadata */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/20">
//                   <div className="bg-white/5 rounded-xl p-4">
//                     <div className="text-sm text-gray-400 mb-1">Type</div>
//                     <div className="font-medium text-lg flex items-center gap-2">
//                       <PlayCircle className="h-4 w-4" />
//                       {selectedVideo.type.toUpperCase()}
//                     </div>
//                   </div>
                  
//                   {selectedVideo.vehicleName && (
//                     <div className="bg-white/5 rounded-xl p-4">
//                       <div className="text-sm text-gray-400 mb-1">Vehicle</div>
//                       <div className="font-medium text-lg flex items-center gap-2">
//                         <Sparkles className="h-4 w-4 text-yellow-400" />
//                         {selectedVideo.vehicleName}
//                       </div>
//                     </div>
//                   )}
                  
//                   <div className="bg-white/5 rounded-xl p-4">
//                     <div className="text-sm text-gray-400 mb-1">Status</div>
//                     <div className="font-medium text-lg">
//                       {isDeleteMode ? (
//                         <span className="text-red-400 flex items-center gap-2">
//                           <AlertTriangle className="h-4 w-4" />
//                           Delete Mode Active
//                         </span>
//                       ) : (
//                         <span className="text-green-400">Active</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Keyboard Hint */}
//             <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
//               ESC to close • Space to pause/play
//               {isDeleteMode && ' • Click Delete button to remove video'}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }









//components/about/FounderCard.tsx

'use client';

import { useState, useEffect } from 'react';
import { GalleryItem } from '@/lib/types/gallery';
import { 
  PlayCircle, 
  Trash2, 
  Loader2, 
  MapPin, 
  Calendar, 
  AlertTriangle, 
  X,
  Tag
} from 'lucide-react';

interface VideoSectionProps {
  videos: GalleryItem[];
  isDeleteMode?: boolean;
  onDeleteItem?: (item: GalleryItem) => Promise<void>;
  onItemClick?: (item: GalleryItem) => void;
}

export default function VideoSection({ 
  videos, 
  isDeleteMode = false, 
  onDeleteItem,
  onItemClick 
}: VideoSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) setSelectedVideo(null);
    };
    if (selectedVideo) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const handleDeleteVideo = async (video: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onDeleteItem) return;
    if (!window.confirm(`Delete "${video.title}" permanently?`)) return;

    setDeletingId(video.id);
    try {
      await onDeleteItem(video);
    } catch (error: any) {
      alert(`Delete failed: ${error.message || 'Unknown error'}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleVideoClick = (video: GalleryItem, e: React.MouseEvent) => {
    if (isDeleteMode) {
      handleDeleteVideo(video, e);
    } else {
      setSelectedVideo(video);
      onItemClick?.(video);
    }
  };

  const handleDeleteInModal = async () => {
    if (!selectedVideo || !onDeleteItem) return;
    if (window.confirm(`Delete "${selectedVideo.title}"?`)) {
      await onDeleteItem(selectedVideo);
      setSelectedVideo(null);
    }
  };

  if (videos.length === 0) {
    return (
      <section className="py-16 text-center">
        <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full mb-6">
          <PlayCircle className="h-6 w-6 text-red-600" />
          <span className="font-medium text-red-800">VIDEO GALLERY</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">No Videos Yet</h2>
        <p className="text-gray-600">Check back soon for travel videos!</p>
      </section>
    );
  }

  return (
    <>
      <section className="py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full mb-6">
            <PlayCircle className="h-6 w-6 text-red-600" />
            <span className="font-medium text-red-800">VIDEO GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-lg text-gray-600">{videos.length} video{videos.length > 1 ? 's' : ''}</p>
        </div>

        {isDeleteMode && (
          <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <h4 className="font-bold text-red-800">Delete Mode Active</h4>
                <p className="text-red-700">Click any video to delete it permanently.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
              onMouseEnter={() => setHoveredVideoId(video.id)}
              onMouseLeave={() => setHoveredVideoId(null)}
              onClick={(e) => handleVideoClick(video, e)}
            >
              <div className="aspect-video relative bg-black">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.url.replace('/upload/', '/upload/c_thumb,w_800,h_450/')})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isDeleteMode ? (
                    <PlayCircle className="h-16 w-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition" />
                  ) : (
                    <div className="bg-red-600 p-5 rounded-full">
                      <Trash2 className="h-10 w-10 text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                {video.location && (
                  <p className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{video.location}</span>
                  </p>
                )}
                {video.description && (
                  <p className="text-gray-700 text-sm line-clamp-2">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gray-300 z-20"
            >
              <X className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            {isDeleteMode && onDeleteItem && (
              <button
                onClick={handleDeleteInModal}
                className="absolute -top-12 left-0 md:top-4 md:left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 flex items-center gap-2 z-20"
              >
                <Trash2 className="h-5 w-5" />
                Delete Video
              </button>
            )}

            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <video src={selectedVideo.url} controls autoPlay className="w-full h-full" controlsList="nodownload" />
              </div>
              <div className="p-8 text-white bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedVideo.title}</h2>
                {selectedVideo.description && <p className="text-lg mb-4">{selectedVideo.description}</p>}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-red-600 px-4 py-2 rounded-full font-medium">{selectedVideo.category}</span>
                  {selectedVideo.tags?.map(tag => (
                    <span key={tag} className="bg-white/20 px-3 py-1.5 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}