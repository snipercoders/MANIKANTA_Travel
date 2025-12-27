
// //components/about/FounderCard.tsx

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
//   Tag
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

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && selectedVideo) setSelectedVideo(null);
//     };
//     if (selectedVideo) window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedVideo]);

//   const handleDeleteVideo = async (video: GalleryItem, e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!onDeleteItem) return;
//     if (!window.confirm(`Delete "${video.title}" permanently?`)) return;

//     setDeletingId(video.id);
//     try {
//       await onDeleteItem(video);
//     } catch (error: any) {
//       alert(`Delete failed: ${error.message || 'Unknown error'}`);
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
//     if (window.confirm(`Delete "${selectedVideo.title}"?`)) {
//       await onDeleteItem(selectedVideo);
//       setSelectedVideo(null);
//     }
//   };

//   if (videos.length === 0) {
//     return (
//       <section className="py-16 text-center">
//         <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full mb-6">
//           <PlayCircle className="h-6 w-6 text-red-600" />
//           <span className="font-medium text-red-800">VIDEO GALLERY</span>
//         </div>
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">No Videos Yet</h2>
//         <p className="text-gray-600">Check back soon for travel videos!</p>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="py-16">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-3 bg-red-50 px-6 py-3 rounded-full mb-6">
//             <PlayCircle className="h-6 w-6 text-red-600" />
//             <span className="font-medium text-red-800">VIDEO GALLERY</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Travel <span className="text-red-600">Videos</span>
//           </h2>
//           <p className="text-lg text-gray-600">{videos.length} video{videos.length > 1 ? 's' : ''}</p>
//         </div>

//         {isDeleteMode && (
//           <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-xl p-4">
//             <div className="flex items-center gap-3">
//               <AlertTriangle className="h-6 w-6 text-red-600" />
//               <div>
//                 <h4 className="font-bold text-red-800">Delete Mode Active</h4>
//                 <p className="text-red-700">Click any video to delete it permanently.</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
//               onMouseEnter={() => setHoveredVideoId(video.id)}
//               onMouseLeave={() => setHoveredVideoId(null)}
//               onClick={(e) => handleVideoClick(video, e)}
//             >
//               <div className="aspect-video relative bg-black">
//                 <div 
//                   className="w-full h-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${video.url.replace('/upload/', '/upload/c_thumb,w_800,h_450/')})` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {!isDeleteMode ? (
//                     <PlayCircle className="h-16 w-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition" />
//                   ) : (
//                     <div className="bg-red-600 p-5 rounded-full">
//                       <Trash2 className="h-10 w-10 text-white" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
//                     {video.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
//                 {video.location && (
//                   <p className="flex items-center gap-2 text-gray-600 mb-3">
//                     <MapPin className="h-4 w-4" />
//                     <span>{video.location}</span>
//                   </p>
//                 )}
//                 {video.description && (
//                   <p className="text-gray-700 text-sm line-clamp-2">{video.description}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Inline Video Modal */}
//       {selectedVideo && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedVideo(null)}>
//           <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
//             <button
//               onClick={() => setSelectedVideo(null)}
//               className="absolute -top-12 right-0 md:top-4 md:right-4 text-white hover:text-gray-300 z-20"
//             >
//               <X className="h-8 w-8 md:h-10 md:w-10" />
//             </button>

//             {isDeleteMode && onDeleteItem && (
//               <button
//                 onClick={handleDeleteInModal}
//                 className="absolute -top-12 left-0 md:top-4 md:left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 flex items-center gap-2 z-20"
//               >
//                 <Trash2 className="h-5 w-5" />
//                 Delete Video
//               </button>
//             )}

//             <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
//               <div className="aspect-video">
//                 <video src={selectedVideo.url} controls autoPlay className="w-full h-full" controlsList="nodownload" />
//               </div>
//               <div className="p-8 text-white bg-gradient-to-t from-black/90 to-transparent">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedVideo.title}</h2>
//                 {selectedVideo.description && <p className="text-lg mb-4">{selectedVideo.description}</p>}
//                 <div className="flex flex-wrap gap-3">
//                   <span className="bg-red-600 px-4 py-2 rounded-full font-medium">{selectedVideo.category}</span>
//                   {selectedVideo.tags?.map(tag => (
//                     <span key={tag} className="bg-white/20 px-3 py-1.5 rounded-full text-sm">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }










// components/about/FounderCard.tsx - VideoSection Component
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 text-center px-3 sm:px-4 md:px-6">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-red-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
          <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600" />
          <span className="text-xs sm:text-sm md:text-base font-medium text-red-800">VIDEO GALLERY</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">No Videos Yet</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">Check back soon for travel videos!</p>
      </section>
    );
  }

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-red-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-red-800">VIDEO GALLERY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Travel <span className="text-red-600">Videos</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">{videos.length} video{videos.length > 1 ? 's' : ''}</p>
        </div>

        {isDeleteMode && (
          <div className="mb-6 sm:mb-8 bg-gradient-to-r from-red-50 to-red-100 border border-red-300 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-red-800 mb-1">Delete Mode Active</h4>
                <p className="text-xs sm:text-sm md:text-base text-red-700">Click any video to delete it permanently.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 bg-white"
              onMouseEnter={() => setHoveredVideoId(video.id)}
              onMouseLeave={() => setHoveredVideoId(null)}
              onClick={(e) => handleVideoClick(video, e)}
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative bg-black overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${video.url.replace('/upload/', '/upload/c_thumb,w_800,h_450/')})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Play/Delete Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isDeleteMode ? (
                    <PlayCircle className={`h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white opacity-90 group-hover:opacity-100 transition-all duration-300 ${
                      hoveredVideoId === video.id ? 'scale-110' : ''
                    }`} />
                  ) : (
                    <div className="bg-red-600 p-3 sm:p-4 md:p-5 rounded-full shadow-lg">
                      <Trash2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                    </div>
                  )}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                  <span className="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-3 md:py-1.5 rounded-full text-xs font-medium">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-1">
                  {video.title}
                </h3>
                {video.location && (
                  <p className="flex items-center gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{video.location}</span>
                  </p>
                )}
                {video.description && (
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base line-clamp-2">
                    {video.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-2 sm:p-3 md:p-4 lg:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-full w-full mx-2 sm:mx-3 md:mx-4 lg:mx-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-8 sm:-top-10 md:-top-12 right-0 sm:right-2 md:right-4 lg:top-4 lg:right-4 text-white hover:text-gray-300 z-20 transition"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </button>

            {/* Delete Button (in delete mode) */}
            {isDeleteMode && onDeleteItem && (
              <button
                onClick={handleDeleteInModal}
                className="absolute -top-8 sm:-top-10 md:-top-12 left-0 sm:left-2 md:left-4 lg:top-4 lg:left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 rounded-lg font-medium hover:opacity-90 flex items-center gap-1 sm:gap-2 z-20 transition text-xs sm:text-sm"
              >
                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span>Delete</span>
              </button>
            )}

            {/* Video Container */}
            <div className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <video 
                  src={selectedVideo.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full" 
                  controlsList="nodownload"
                  playsInline
                />
              </div>
              
              {/* Video Info */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 text-white bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {selectedVideo.title}
                </h2>
                
                {selectedVideo.description && (
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 text-gray-200">
                    {selectedVideo.description}
                  </p>
                )}
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-red-600 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base">
                    {selectedVideo.category}
                  </span>
                  {selectedVideo.tags?.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-white/20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
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