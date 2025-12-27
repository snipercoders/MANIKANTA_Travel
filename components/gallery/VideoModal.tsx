

///components/gallery/UploadModal.tsx




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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <CloudArrowUpIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Upload Media</h2>
          <p className="text-gray-600 mt-2">Add to the gallery</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-4 justify-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" value="image" checked={formData.type === 'image'} onChange={handleInputChange} className="sr-only" />
              <div className={`px-4 py-2 rounded-lg ${formData.type === 'image' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>
                <PhotoIcon className="h-5 w-5" /> Image
              </div>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" value="video" checked={formData.type === 'video'} onChange={handleInputChange} className="sr-only" />
              <div className={`px-4 py-2 rounded-lg ${formData.type === 'video' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>
                <VideoCameraIcon className="h-5 w-5" /> Video
              </div>
            </label>
          </div>

          <input type="file" accept={formData.type === 'image' ? 'image/*' : 'video/*'} onChange={handleFileChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600" />

          {preview && formData.type === 'image' && <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-xl" />}

          <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title *" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600" />

          <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600">
            <option value="destination">Destination</option>
            <option value="vehicle">Vehicle</option>
            <option value="pilgrimage">Pilgrimage</option>
            <option value="activity">Activity</option>
            <option value="other">Other</option>
          </select>

          {formData.category === 'vehicle' && (
            <input type="text" name="vehicleName" value={formData.vehicleName} onChange={handleInputChange} placeholder="Vehicle Name" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600" />
          )}

          <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600" />

          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" rows={3} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 resize-none" />

          {error && <p className="text-red-600 text-center font-medium">{error}</p>}
          {success && <p className="text-green-600 text-center font-medium">{success}</p>}

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold hover:from-red-700 hover:to-red-800 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {uploading ? 'Uploading...' : (
              <>
                <CloudArrowUpIcon className="h-6 w-6" />
                Upload to Gallery
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}