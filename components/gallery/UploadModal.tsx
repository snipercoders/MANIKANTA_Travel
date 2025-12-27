// // components/gallery/UploadModal.tsx
// 'use client';

// import { useState } from 'react';
// import { XMarkIcon, CloudArrowUpIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

// interface UploadModalProps {
//   onClose: () => void;
//   onUploadSuccess: () => void;
// }

// export default function UploadModal({ onClose, onUploadSuccess }: UploadModalProps) {
//   const [formData, setFormData] = useState({
//     title: '',
//     location: '',
//     description: '',
//     category: 'destination',
//     vehicleName: '',
//     type: 'image',
//   });
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string>('');
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile) {
//       setFile(selectedFile);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file) {
//       setError('Please select a file to upload');
//       return;
//     }

//     setUploading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('file', file);
//       formDataToSend.append('title', formData.title);
//       formDataToSend.append('location', formData.location);
//       formDataToSend.append('description', formData.description);
//       formDataToSend.append('category', formData.category);
//       formDataToSend.append('vehicleName', formData.vehicleName);
//       formDataToSend.append('type', formData.type);

//       const res = await fetch('/api/admin/upload', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSuccess('Upload successful!');
//         setTimeout(() => {
//           onUploadSuccess();
//         }, 1500);
//       } else {
//         setError(data.message || 'Upload failed');
//       }
//     } catch (err: any) {
//       setError(err.message || 'Upload failed. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative my-8"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
//         >
//           <XMarkIcon className="h-6 w-6" />
//         </button>

//         <div className="flex flex-col items-center mb-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
//             <CloudArrowUpIcon className="h-8 w-8 text-white" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900">Upload Media</h2>
//           <p className="text-gray-600 mt-2">Add images or videos to the gallery</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Media Type */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Media Type
//             </label>
//             <div className="flex gap-4">
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="type"
//                   value="image"
//                   checked={formData.type === 'image'}
//                   onChange={handleInputChange}
//                   className="mr-2"
//                 />
//                 <PhotoIcon className="h-5 w-5 mr-1" />
//                 Image
//               </label>
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="type"
//                   value="video"
//                   checked={formData.type === 'video'}
//                   onChange={handleInputChange}
//                   className="mr-2"
//                 />
//                 <VideoCameraIcon className="h-5 w-5 mr-1" />
//                 Video
//               </label>
//             </div>
//           </div>

//           {/* File Upload */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Select File *
//             </label>
//             <input
//               type="file"
//               accept={formData.type === 'image' ? 'image/*' : 'video/*'}
//               onChange={handleFileChange}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition"
//               required
//             />
//             {preview && formData.type === 'image' && (
//               <img src={preview} alt="Preview" className="mt-3 w-full h-40 object-cover rounded-xl" />
//             )}
//           </div>

//           {/* Title */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Title *
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               placeholder="e.g., Golden Temple at Sunrise"
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Category
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition"
//             >
//               <option value="destination">Destination</option>
//               <option value="vehicle">Vehicle</option>
//               <option value="activity">Activity</option>
//               <option value="accommodation">Accommodation</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* Vehicle Name (conditional) */}
//           {formData.category === 'vehicle' && (
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Vehicle Name
//               </label>
//               <input
//                 type="text"
//                 name="vehicleName"
//                 value={formData.vehicleName}
//                 onChange={handleInputChange}
//                 placeholder="e.g., Luxury Coach, Toyota Innova"
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition"
//               />
//             </div>
//           )}

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               placeholder="e.g., Amritsar, Punjab"
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Brief description..."
//               rows={3}
//               className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:outline-none transition resize-none"
//             />
//           </div>

//           {error && (
//             <p className="text-red-500 text-sm text-center">{error}</p>
//           )}

//           {success && (
//             <p className="text-green-500 text-sm text-center font-semibold">{success}</p>
//           )}

//           <button
//             type="submit"
//             disabled={uploading}
//             className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
//           >
//             {uploading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
//                 Uploading...
//               </>
//             ) : (
//               <>
//                 <CloudArrowUpIcon className="h-5 w-5" />
//                 Upload to Gallery
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }






// components/gallery/UploadModal.tsx
'use client';

import { useState } from 'react';
import { XMarkIcon, CloudArrowUpIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

interface UploadModalProps {
  onClose: () => void;
  onUploadSuccess: () => void;
}

export default function UploadModal({ onClose, onUploadSuccess }: UploadModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    category: 'destination',
    vehicleName: '',
    type: 'image',
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setError('Please select a file');

    setUploading(true);
    setError('');
    setSuccess('');

    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formDataToSend });
      const data = await res.json();
      if (data.success) {
        setSuccess('Upload successful!');
        setTimeout(onUploadSuccess, 1500);
      } else {
        setError(data.message || 'Upload failed');
      }
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full p-4 sm:p-6 md:p-8 relative my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <CloudArrowUpIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Upload Media</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-2">Add to the gallery</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
          {/* Media Type Toggle */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center mb-2 sm:mb-4">
            <label className="flex items-center gap-1 sm:gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="image"
                checked={formData.type === 'image'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base transition-all ${
                formData.type === 'image' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <PhotoIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span>Image</span>
              </div>
            </label>
            <label className="flex items-center gap-1 sm:gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="video"
                checked={formData.type === 'video'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base transition-all ${
                formData.type === 'video' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <VideoCameraIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span>Video</span>
              </div>
            </label>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Select File *
            </label>
            <input
              type="file"
              accept={formData.type === 'image' ? 'image/*' : 'video/*'}
              onChange={handleFileChange}
              required
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
            />
          </div>

          {/* Preview */}
          {preview && formData.type === 'image' && (
            <div className="mt-2 sm:mt-3">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Golden Temple at Sunrise"
              required
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition bg-white"
            >
              <option value="destination">Destination</option>
              <option value="vehicle">Vehicle</option>
              <option value="pilgrimage">Pilgrimage</option>
              <option value="activity">Activity</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Vehicle Name (conditional) */}
          {formData.category === 'vehicle' && (
            <div>
              <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Vehicle Name
              </label>
              <input
                type="text"
                name="vehicleName"
                value={formData.vehicleName}
                onChange={handleInputChange}
                placeholder="e.g., Luxury Coach, Toyota Innova"
                className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
            </div>
          )}

          {/* Location */}
          <div>
            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., Amritsar, Punjab"
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs sm:text-sm md:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description..."
              rows={3}
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg sm:rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none transition resize-none"
            />
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-xs sm:text-sm text-red-600 font-medium text-center">{error}</p>
            </div>
          )}

          {success && (
            <div className="p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-xs sm:text-sm text-green-600 font-medium text-center">{success}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2 sm:pt-3 md:pt-4">
            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-medium sm:font-semibold hover:from-red-700 hover:to-red-800 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl"
            >
              {uploading ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-t-2 border-b-2 border-white"></div>
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <CloudArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <span>Upload to Gallery</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}