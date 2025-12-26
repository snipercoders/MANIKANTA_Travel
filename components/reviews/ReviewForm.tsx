
// //components/reviews/ReviewForm.tsx


// 'use client';

// import { useState, useRef, ChangeEvent } from 'react';
// import { Star, X, Calendar, Users, Upload, Check, Image as ImageIcon, XCircle } from 'lucide-react';

// interface ReviewFormProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onReviewAdded: (review: any) => void;
// }

// interface ReviewFormData {
//   author: string;
//   email: string;
//   rating: number;
//   title: string;
//   content: string;
//   tourPackage: string; // Changed from tourPackageId to allow manual input
//   travelerType: string;
//   monthOfTravel: string;
//   tripDuration: string; // Changed to allow manual input
//   images: File[];
// }

// export default function ReviewForm({ isOpen, onClose, onReviewAdded }: ReviewFormProps) {
//   const [formData, setFormData] = useState<ReviewFormData>({
//     author: '',
//     email: '',
//     rating: 5,
//     title: '',
//     content: '',
//     tourPackage: '',
//     travelerType: 'Family',
//     monthOfTravel: '',
//     tripDuration: '',
//     images: [],
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [uploadingImages, setUploadingImages] = useState(false);
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [showPackageInput, setShowPackageInput] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const travelerTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Business'];
//   const months = [
//     'January 2025', 'February 2025', 'March 2025', 'April 2025',
//     'May 2025', 'June 2025', 'July 2025', 'August 2025',
//     'September 2025', 'October 2025', 'November 2025', 'December 2025',
//     'January 2024', 'February 2024', 'March 2024', 'April 2024',
//     'May 2024', 'June 2024', 'July 2024', 'August 2024',
//     'September 2024', 'October 2024', 'November 2024', 'December 2024'
//   ];

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
    
//     const validFiles = files.filter(file => {
//       const isValidType = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type);
//       const isValidSize = file.size <= 5 * 1024 * 1024;
      
//       if (!isValidType) alert(`Invalid file type: ${file.name}. Only JPEG, PNG, WebP allowed.`);
//       if (!isValidSize) alert(`File too large: ${file.name}. Max 5MB.`);
      
//       return isValidType && isValidSize;
//     });

//     const remainingSlots = 5 - formData.images.length;
//     const filesToAdd = validFiles.slice(0, remainingSlots);
    
//     if (filesToAdd.length < validFiles.length) {
//       alert(`Maximum 5 images allowed. Only ${remainingSlots} more can be added.`);
//     }

//     const newFiles = [...formData.images, ...filesToAdd];
//     setFormData(prev => ({ ...prev, images: newFiles }));

//     const newPreviews = filesToAdd.map(file => URL.createObjectURL(file));
//     setImagePreviews(prev => [...prev, ...newPreviews]);

//     if (fileInputRef.current) fileInputRef.current.value = '';
//   };

//   const removeImage = (index: number) => {
//     URL.revokeObjectURL(imagePreviews[index]);
//     setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
//     setImagePreviews(prev => prev.filter((_, i) => i !== index));
//   };

//   const uploadImagesToCloudinary = async (files: File[]): Promise<string[]> => {
//     if (files.length === 0) return [];

//     const formData = new FormData();
//     files.forEach(file => formData.append('files', file));

//     const response = await fetch('/api/upload', { method: 'POST', body: formData });
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.error || 'Upload failed');
//     }
//     const result = await response.json();
//     return result.data || [];
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setUploadingImages(formData.images.length > 0);

//     try {
//       let imageUrls: string[] = [];
//       if (formData.images.length > 0) {
//         imageUrls = await uploadImagesToCloudinary(formData.images);
//         setUploadProgress(100);
//       }

//       const reviewData = {
//         author: formData.author,
//         email: formData.email,
//         rating: formData.rating,
//         title: formData.title,
//         content: formData.content,
//         tourPackage: formData.tourPackage,
//         travelerType: formData.travelerType,
//         monthOfTravel: formData.monthOfTravel,
//         tripDuration: formData.tripDuration,
//         images: imageUrls,
//       };

//       const response = await fetch('/api/reviews', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(reviewData),
//       });

//       if (!response.ok) throw new Error('Failed to submit review');

//       const result = await response.json();
//       onReviewAdded(result.data);
//       setSubmitSuccess(true);

//       setTimeout(() => {
//         setFormData({
//           author: '', email: '', rating: 5, title: '', content: '',
//           tourPackage: '', travelerType: 'Family', monthOfTravel: '',
//           tripDuration: '', images: []
//         });
//         imagePreviews.forEach(URL.revokeObjectURL);
//         setImagePreviews([]);
//         setSubmitSuccess(false);
//         onClose();
//       }, 2000);
//     } catch (error) {
//       console.error('Submit error:', error);
//       alert('Error submitting review. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//       setUploadingImages(false);
//       setUploadProgress(0);
//     }
//   };

//   const handleInputChange = (field: keyof ReviewFormData, value: any) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
//       <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center z-10">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Share Your Experience</h2>
//           <button
//             onClick={onClose}
//             className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition"
//             aria-label="Close"
//           >
//             <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
//           </button>
//         </div>

//         {submitSuccess ? (
//           <div className="p-6 sm:p-10 text-center">
//             <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
//               <Check className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
//             </div>
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Thank You!</h3>
//             <p className="text-gray-600 text-base sm:text-lg">Your review has been submitted successfully.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5 sm:space-y-7">
//             {/* Personal Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name *</label>
//                 <input
//                   type="text"
//                   value={formData.author}
//                   onChange={e => handleInputChange('author', e.target.value)}
//                   required
//                   placeholder="John Doe"
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-gray-900 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={e => handleInputChange('email', e.target.value)}
//                   required
//                   placeholder="john@example.com"
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-gray-900 text-sm sm:text-base"
//                 />
//               </div>
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Your Rating *</label>
//               <div className="flex items-center gap-1 sm:gap-2">
//                 {[1, 2, 3, 4, 5].map(star => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => handleInputChange('rating', star)}
//                     className="transition-transform hover:scale-110 focus:outline-none"
//                     aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
//                   >
//                     <Star
//                       className={`h-8 w-8 sm:h-10 sm:h-10 md:h-12 md:w-12 ${star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                     />
//                   </button>
//                 ))}
//                 <span className="ml-3 sm:ml-6 text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formData.rating}.0</span>
//               </div>
//             </div>

//             {/* Title */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2">Review Title *</label>
//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={e => handleInputChange('title', e.target.value)}
//                 required
//                 maxLength={100}
//                 placeholder="Amazing trip to Goa!"
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-gray-900 text-sm sm:text-base"
//               />
//               <p className="text-xs sm:text-sm text-gray-500 text-right mt-1">{formData.title.length}/100</p>
//             </div>

//             {/* Content */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2">Your Experience *</label>
//               <textarea
//                 value={formData.content}
//                 onChange={e => handleInputChange('content', e.target.value)}
//                 required
//                 rows={4}
//                 maxLength={500}
//                 placeholder="Share your journey, highlights, and tips for future travelers..."
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition text-gray-900 text-sm sm:text-base"
//               />
//               <p className="text-xs sm:text-sm text-gray-500 text-right mt-1">{formData.content.length}/500</p>
//             </div>

//             {/* Trip Details */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Traveler Type *</label>
//                 <select
//                   value={formData.travelerType}
//                   onChange={e => handleInputChange('travelerType', e.target.value)}
//                   required
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 text-sm sm:text-base bg-white"
//                 >
//                   {travelerTypes.map(type => (
//                     <option key={type} value={type} className="text-gray-900">{type}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Month of Travel *</label>
//                 <select
//                   value={formData.monthOfTravel}
//                   onChange={e => handleInputChange('monthOfTravel', e.target.value)}
//                   required
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 text-sm sm:text-base bg-white"
//                 >
//                   <option value="" className="text-gray-500">Select month</option>
//                   {months.map(month => (
//                     <option key={month} value={month} className="text-gray-900">{month}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-900 mb-2">Trip Duration *</label>
//                 <input
//                   type="text"
//                   value={formData.tripDuration}
//                   onChange={e => handleInputChange('tripDuration', e.target.value)}
//                   required
//                   placeholder="e.g., 7 days, 2 weeks"
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-gray-900 text-sm sm:text-base"
//                 />
//               </div>
//             </div>

//             {/* Tour Package - Manual Input */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2">Tour Package</label>
//               <input
//                 type="text"
//                 value={formData.tourPackage}
//                 onChange={e => handleInputChange('tourPackage', e.target.value)}
//                 placeholder="e.g., Goa Beach Package, Bangalore to Coorg Tour"
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition text-gray-900 text-sm sm:text-base"
//               />
//               <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                 Enter the package name you booked, or leave blank if not applicable
//               </p>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Add Photos (Optional)</label>

//               {imagePreviews.length > 0 && (
//                 <div className="mb-4 sm:mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
//                   {imagePreviews.map((src, i) => (
//                     <div key={i} className="relative group">
//                       <img 
//                         src={src} 
//                         alt="preview" 
//                         className="w-full h-20 sm:h-24 md:h-28 object-cover rounded-lg sm:rounded-xl border border-gray-200" 
//                       />
//                       <button
//                         type="button"
//                         onClick={() => removeImage(i)}
//                         className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-0.5 sm:p-1 opacity-90 hover:opacity-100 transition"
//                         aria-label="Remove image"
//                       >
//                         <XCircle className="h-4 w-4 sm:h-5 sm:w-5" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {uploadingImages && (
//                 <div className="mb-4 sm:mb-5">
//                   <div className="flex justify-between text-xs sm:text-sm mb-2">
//                     <span className="text-gray-600">Uploading images...</span>
//                     <span className="font-medium text-red-600">{uploadProgress}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
//                     <div
//                       className="bg-gradient-to-r from-red-600 to-red-700 h-2 sm:h-3 rounded-full transition-all duration-500"
//                       style={{ width: `${uploadProgress}%` }}
//                     />
//                   </div>
//                 </div>
//               )}

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 multiple
//                 accept="image/jpeg,image/jpg,image/png,image/webp"
//                 onChange={handleImageUpload}
//                 className="hidden"
//                 id="review-images"
//                 disabled={isSubmitting || uploadingImages}
//               />
//               <label
//                 htmlFor="review-images"
//                 className={`block border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center cursor-pointer transition ${
//                   isSubmitting || uploadingImages
//                     ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
//                     : 'border-red-300 hover:border-red-500 hover:bg-red-50'
//                 }`}
//               >
//                 <Upload className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 sm:mb-3 text-red-600" />
//                 <p className="font-medium text-gray-900 text-sm sm:text-base mb-1">
//                   Click to upload up to 5 photos
//                 </p>
//                 <p className="text-xs sm:text-sm text-gray-600">
//                   Max 5MB each • JPEG, PNG, WebP
//                 </p>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting || uploadingImages}
//               className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:from-red-700 hover:to-red-800 disabled:opacity-70 disabled:cursor-not-allowed transition shadow-lg"
//             >
//               {uploadingImages ? 'Uploading Images...' : isSubmitting ? 'Submitting Review...' : 'Submit Review'}
//             </button>

//             <p className="text-center text-xs sm:text-sm text-gray-600">
//               Your review helps other travelers make better decisions.
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }











//components/reviews/ReviewForm.tsx

// components/reviews/ReviewForm.tsx

'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Star, X, Upload, Check, XCircle } from 'lucide-react';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewAdded: (review: any) => void;
}

interface ReviewFormData {
  author: string;
  email: string;
  rating: number;
  title: string;
  content: string;
  tourPackage: string;
  travelerType: string;
  monthOfTravel: string;
  tripDuration: string;
  images: File[];
}

export default function ReviewForm({ isOpen, onClose, onReviewAdded }: ReviewFormProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    author: '',
    email: '',
    rating: 5,
    title: '',
    content: '',
    tourPackage: '',
    travelerType: 'Family',
    monthOfTravel: '',
    tripDuration: '',
    images: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const travelerTypes = ['Solo', 'Couple', 'Family', 'Friends', 'Business'];

  const months = [
    'January 2025', 'February 2025', 'March 2025', 'April 2025',
    'May 2025', 'June 2025', 'July 2025', 'August 2025',
    'September 2025', 'October 2025', 'November 2025', 'December 2025',
    'January 2024', 'February 2024', 'March 2024', 'April 2024',
    'May 2024', 'June 2024', 'July 2024', 'August 2024',
    'September 2024', 'October 2024', 'November 2024', 'December 2024'
  ];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024;

      if (!isValidType) alert(`Invalid file type: ${file.name}. Only JPEG, PNG, WebP allowed.`);
      if (!isValidSize) alert(`File too large: ${file.name}. Max 5MB.`);

      return isValidType && isValidSize;
    });

    const remainingSlots = 5 - formData.images.length;
    const filesToAdd = validFiles.slice(0, remainingSlots);

    if (filesToAdd.length < validFiles.length) {
      alert(`Maximum 5 images allowed. Only ${remainingSlots} more can be added.`);
    }

    const newFiles = [...formData.images, ...filesToAdd];
    setFormData(prev => ({ ...prev, images: newFiles }));

    const newPreviews = filesToAdd.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImagesToCloudinary = async (files: File[]): Promise<string[]> => {
    if (files.length === 0) return [];

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    const response = await fetch('/api/upload', { method: 'POST', body: formData });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Upload failed');
    }

    const result = await response.json();
    return result.data || [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadingImages(formData.images.length > 0);

    try {
      let imageUrls: string[] = [];
      if (formData.images.length > 0) {
        imageUrls = await uploadImagesToCloudinary(formData.images);
        setUploadProgress(100);
      }

      const reviewData = {
        author: formData.author,
        email: formData.email,
        rating: formData.rating,
        title: formData.title,
        content: formData.content,
        tourPackage: formData.tourPackage || null,
        travelerType: formData.travelerType,
        monthOfTravel: formData.monthOfTravel,
        tripDuration: formData.tripDuration,
        images: imageUrls,
      };

      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) throw new Error('Failed to submit review');

      const result = await response.json();
      onReviewAdded(result.data);

      setSubmitSuccess(true);

      setTimeout(() => {
        setFormData({
          author: '', email: '', rating: 5, title: '', content: '',
          tourPackage: '', travelerType: 'Family', monthOfTravel: '',
          tripDuration: '', images: []
        });
        imagePreviews.forEach(URL.revokeObjectURL);
        setImagePreviews([]);
        setSubmitSuccess(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Submit error:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setIsSubmitting(false);
      setUploadingImages(false);
      setUploadProgress(0);
    }
  };

  const handleInputChange = (field: keyof ReviewFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-full overflow-y-auto relative">
        {/* Header with visible close button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-4 flex justify-between items-center z-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 pr-8">Share Your Experience</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close review form"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 text-lg">Your review has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={e => handleInputChange('author', e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-500"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-4">Your Rating *</label>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleInputChange('rating', star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-12 w-12 ${star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  </button>
                ))}
                <span className="ml-6 text-3xl font-bold text-gray-900">{formData.rating}.0</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Review Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => handleInputChange('title', e.target.value)}
                required
                maxLength={100}
                placeholder="Amazing trip to Goa!"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-500"
              />
              <p className="text-sm text-gray-500 text-right mt-1">{formData.title.length}/100</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Your Experience *</label>
              <textarea
                value={formData.content}
                onChange={e => handleInputChange('content', e.target.value)}
                required
                rows={5}
                maxLength={500}
                placeholder="Share your journey, highlights, and tips..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition text-black placeholder-gray-500"
              />
              <p className="text-sm text-gray-500 text-right mt-1">{formData.content.length}/500</p>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Traveler Type *</label>
                <select
                  value={formData.travelerType}
                  onChange={e => handleInputChange('travelerType', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
                  {travelerTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Month of Travel *</label>
                <select
                  value={formData.monthOfTravel}
                  onChange={e => handleInputChange('monthOfTravel', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
                  <option value="">Select month</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">Trip Duration *</label>
                <input
                  type="text"
                  value={formData.tripDuration}
                  onChange={e => handleInputChange('tripDuration', e.target.value)}
                  required
                  placeholder="e.g., 7 days"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-500"
                />
              </div>
            </div>

            {/* Tour Package - Manual */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Tour Package (Optional)</label>
              <input
                type="text"
                value={formData.tourPackage}
                onChange={e => handleInputChange('tourPackage', e.target.value)}
                placeholder="e.g., Goa Beach Package, Custom Trip"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-500"
              />
              <p className="text-sm text-gray-500 mt-2">Leave blank if not part of a specific package</p>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-4">Add Photos (Optional, up to 5)</label>

              {imagePreviews.length > 0 && (
                <div className="mb-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {imagePreviews.map((src, i) => (
                    <div key={i} className="relative group">
                      <img src={src} alt="Preview" className="w-full h-32 object-cover rounded-xl border" />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 opacity-90 group-hover:opacity-100 transition shadow-lg"
                      >
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {uploadingImages && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Uploading images...</span>
                    <span className="font-medium text-red-600">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-red-600 to-red-700 h-3 rounded-full transition-all"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleImageUpload}
                className="hidden"
                id="review-images"
                disabled={isSubmitting || uploadingImages}
              />

              <label
                htmlFor="review-images"
                className={`block border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${
                  isSubmitting || uploadingImages
                    ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
                    : 'border-red-300 hover:border-red-500 hover:bg-red-50'
                }`}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-red-600" />
                <p className="font-medium text-gray-900 mb-2">Click to upload photos</p>
                <p className="text-sm text-gray-600">Max 5 images • 5MB each • JPEG, PNG, WebP</p>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || uploadingImages}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-xl hover:from-red-700 hover:to-red-800 disabled:opacity-70 disabled:cursor-not-allowed transition shadow-xl"
            >
              {uploadingImages ? 'Uploading Images...' : isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Your review helps others make better travel decisions. Thank you!
            </p>
          </form>
        )}
      </div>
    </div>
  );
}