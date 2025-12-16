// //components/contact/ContactForm.tsx

// "use client";

// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     type: 'Packages',
//     from: '',
//     to: '',
//     seats: '',
//     vehicleType: 'AC',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Format WhatsApp message
//     const whatsappNumber = '9591762419';
//     const message = 
//       `*New Booking Request - Sri Manikanta Tours & Travels*%0A%0A` +
//       `*Name:* ${formData.name}%0A` +
//       `*Email:* ${formData.email}%0A` +
//       `*Mobile:* ${formData.mobile}%0A` +
//       `*Type:* ${formData.type}%0A` +
//       `*From:* ${formData.from || 'Not specified'}%0A` +
//       `*To:* ${formData.to || 'Not specified'}%0A` +
//       `*No. of Seats:* ${formData.seats}%0A` +
//       `*Vehicle Type:* ${formData.vehicleType}%0A` +
//       `*Message:* ${formData.message}%0A%0A` +
//       `_Submitted via Sri Manikanta Tours & Travels Website_`;
    
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
//     window.open(whatsappUrl, '_blank');
    
//     alert('Opening WhatsApp to send your booking request...');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       vehicleType: e.target.value
//     }));
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
//       {/* Header matching the image */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-gray-900 mb-2">Sri MANIKANTA</h1>
//         <div className="text-xl text-orange-600 font-semibold mb-4">Tours & Travels</div>
//         <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
//       </div>

//       <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
//         Please Enter Your Details
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Name Field with "I" prefix */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">Name</label>
//           </div>
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-l-lg flex items-center justify-center">
//                 <span className="text-white text-xl font-bold">I</span>
//               </div>
//             </div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="flex-1 min-w-0 block w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//         </div>

//         {/* Email Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">
//               Email <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Mobile Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">
//               Mobile <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//             placeholder="Enter your mobile number"
//             required
//           />
//         </div>

//         {/* Type Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">Type</label>
//           </div>
//           <select 
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//           >
//             <option value="Packages">Packages</option>
//             <option value="Bus Ticket">Bus Ticket</option>
//             <option value="Hotel Booking">Hotel Booking</option>
//             <option value="Car Rental">Car Rental</option>
//             <option value="Custom Tour">Custom Tour</option>
//           </select>
//         </div>

//         {/* From and To Fields - Side by side */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* From Field */}
//           <div>
//             <div className="flex items-center mb-3">
//               <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//               <label className="block text-lg font-medium text-gray-700">From</label>
//             </div>
//             <input
//               type="text"
//               name="from"
//               value={formData.from}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//               placeholder="Departure location"
//             />
//           </div>

//           {/* To Field */}
//           <div>
//             <div className="flex items-center mb-3">
//               <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//               <label className="block text-lg font-medium text-gray-700">To</label>
//             </div>
//             <input
//               type="text"
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//               placeholder="Destination location"
//             />
//           </div>
//         </div>

//         {/* No. of Seats Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">
//               No. of Seats <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="number"
//             name="seats"
//             value={formData.seats}
//             onChange={handleChange}
//             min="1"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
//             placeholder="Enter number of seats"
//             required
//           />
//         </div>

//         {/* Vehicle Type Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">Vehicle Type</label>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="AC Bus"
//                 checked={formData.vehicleType === 'AC Bus'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">AC Bus</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Non-AC Bus"
//                 checked={formData.vehicleType === 'Non-AC Bus'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Non-AC Bus</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="SUV"
//                 checked={formData.vehicleType === 'SUV'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">SUV</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Tempo Traveller"
//                 checked={formData.vehicleType === 'Tempo Traveller'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Tempo Traveller</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Sedan"
//                 checked={formData.vehicleType === 'Sedan'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Sedan</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Hatchback"
//                 checked={formData.vehicleType === 'Hatchback'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Hatchback</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Van"
//                 checked={formData.vehicleType === 'Van'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Van</span>
//             </label>
//             <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
//               <input
//                 type="radio"
//                 name="vehicleType"
//                 value="Mini Bus"
//                 checked={formData.vehicleType === 'Mini Bus'}
//                 onChange={handleRadioChange}
//                 className="w-5 h-5 text-orange-600 focus:ring-orange-500"
//               />
//               <span className="text-lg text-gray-700">Mini Bus</span>
//             </label>
//           </div>
//           <p className="text-sm text-gray-500 mt-2">Select the type of vehicle you need</p>
//         </div>

//         {/* Message Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
//             <label className="block text-lg font-medium text-gray-700">
//               Message <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg resize-none"
//             placeholder="Enter your message or special requirements"
//             required
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="pt-6">
//           <button
//             type="submit"
//             className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xl font-bold rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
//           >
//             Submit Booking Request
//           </button>
//         </div>
//       </form>

//       {/* Contact Information Section */}
//       <div className="mt-12 pt-8 border-t border-gray-300">
//         <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Connect with us</h3>
        
//         <div className="space-y-8">``
//           {/* Packages Info */}
//           <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
//                   <span className="text-white text-xl">📦</span>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">Packages</h4>
//                 <p className="text-gray-700">
//                   Sri Manikanta Tours & Travels<br />
//                   Smms, 88, 2nd cross, Vivekananda Nagarahalli Cross,<br />
//                   Bangalore, Karnataka-560057
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Numbers */}
//           <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
//                   <span className="text-white text-xl">📞</span>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">Contact Numbers</h4>
//                 <p className="text-gray-700 font-semibold">95917 62419</p>
//                 <p className="text-gray-600 text-sm mt-1">Call us for bookings and inquiries</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Email */}
//           <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
//                   <span className="text-white text-xl">✉️</span>
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">Email</h4>
//                 <a 
//                   href="mailto:srimanikanta.travel@gmail.com" 
//                   className="text-gray-700 font-semibold hover:text-orange-600"
//                 >
//                   srimanikanta.travel@gmail.com
//                 </a>
//                 <p className="text-gray-600 text-sm mt-1">Email us for detailed inquiries</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// components/contact/ContactForm.tsx

"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    type: 'Packages',
    from: '',
    to: '',
    seats: '',
    vehicleType: 'AC Bus',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappNumber = '9591762419';
    const message = 
      `*New Booking Request - Sri Manikanta Tours & Travels*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Type:* ${formData.type}%0A` +
      `*From:* ${formData.from || 'Not specified'}%0A` +
      `*To:* ${formData.to || 'Not specified'}%0A` +
      `*No. of Seats:* ${formData.seats}%0A` +
      `*Vehicle Type:* ${formData.vehicleType}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `_Submitted via Sri Manikanta Tours & Travels Website_`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Opening WhatsApp to send your booking request...');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      vehicleType: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Header matching the image */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sri MANIKANTA</h1>
        <div className="text-xl text-orange-600 font-semibold mb-2">Tours & Travels</div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Est. 2006
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Founder: Ashok R
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Co-founder: Chandan
          </span>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
        Please Enter Your Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field with "I" prefix */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-l-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">I</span>
              </div>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 min-w-0 block w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Mobile Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">
              Mobile <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* Type Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">Type</label>
          </div>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
          >
            <option value="Packages">Packages</option>
            <option value="Bus Ticket">Bus Ticket</option>
            <option value="Hotel Booking">Hotel Booking</option>
            <option value="Car Rental">Car Rental</option>
            <option value="Custom Tour">Custom Tour</option>
          </select>
        </div>

        {/* From and To Fields - Side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* From Field */}
          <div>
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <label className="block text-lg font-medium text-gray-700">From</label>
            </div>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Departure location"
            />
          </div>

          {/* To Field */}
          <div>
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <label className="block text-lg font-medium text-gray-700">To</label>
            </div>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              placeholder="Destination location"
            />
          </div>
        </div>

        {/* No. of Seats Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">
              No. of Seats <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            min="1"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
            placeholder="Enter number of seats"
            required
          />
        </div>

        {/* Vehicle Type Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">Vehicle Type</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="AC Bus"
                checked={formData.vehicleType === 'AC Bus'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">AC Bus</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Non-AC Bus"
                checked={formData.vehicleType === 'Non-AC Bus'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Non-AC Bus</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="SUV"
                checked={formData.vehicleType === 'SUV'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">SUV</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Tempo Traveller"
                checked={formData.vehicleType === 'Tempo Traveller'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Tempo Traveller</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Sedan"
                checked={formData.vehicleType === 'Sedan'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Sedan</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Hatchback"
                checked={formData.vehicleType === 'Hatchback'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Hatchback</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Van"
                checked={formData.vehicleType === 'Van'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Van</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:border-orange-400 transition-colors">
              <input
                type="radio"
                name="vehicleType"
                value="Mini Bus"
                checked={formData.vehicleType === 'Mini Bus'}
                onChange={handleRadioChange}
                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-lg text-gray-700">Mini Bus</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-2">Select the type of vehicle you need</p>
        </div>

        {/* Message Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <label className="block text-lg font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg resize-none"
            placeholder="Enter your message or special requirements"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xl font-bold rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Submit Booking Request
          </button>
        </div>
      </form>

      {/* Contact Information Section */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Connect with us</h3>
        
        <div className="space-y-8">
          {/* Packages Info */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📦</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Office Address</h4>
                <p className="text-gray-700">
                  Sri Manikanta Tours & Travels<br />
                  Agara, Kanakapura Main Road<br />
                  Bangalore, Karnataka - 560082<br />
                  <span className="text-sm text-orange-600 font-medium mt-1 inline-block">
                    Est. 06/06/2006 | Travel Agency
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Numbers */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Contact Numbers</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-lg">+91 95917 62419</p>
                  <p className="text-gray-600 text-sm">Primary contact number</p>
                  <div className="pt-2 border-t border-blue-100">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Founder:</span> Ashok R
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Co-founder:</span> Chandan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Email</h4>
                <a 
                  href="mailto:srimanikanta.travel@gmail.com" 
                  className="text-gray-700 font-semibold hover:text-orange-600 text-lg"
                >
                  srimanikanta.travel@gmail.com
                </a>
                <p className="text-gray-600 text-sm mt-1">Email us for detailed inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">About Our Business</h3>
        
        <div className="space-y-6">
          {/* Founders Info */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl text-white">👥</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Founders & Leadership</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                    <p className="font-bold text-lg text-gray-900">Ashok R</p>
                    <p className="text-sm text-gray-600 mt-1">Leading since 2006</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Co-founder</p>
                    <p className="font-bold text-lg text-gray-900">Chandan</p>
                    <p className="text-sm text-gray-600 mt-1">Operations & Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Details */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl text-white">📅</span>
                </div>
                <p className="text-sm text-gray-500">Established</p>
                <p className="font-bold text-lg text-gray-900">06/06/2006</p>
                <p className="text-xs text-gray-500 mt-1">Over 18 years experience</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl text-white">🏢</span>
                </div>
                <p className="text-sm text-gray-500">Business Type</p>
                <p className="font-bold text-lg text-gray-900">Travel Agency</p>
                <p className="text-xs text-gray-500 mt-1">Professional Service</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl text-white">📍</span>
                </div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-bold text-lg text-gray-900">Agara, Bangalore</p>
                <p className="text-xs text-gray-500 mt-1">Kanakapura Main Road</p>
              </div>
            </div>
          </div>
          
          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">24/7 WhatsApp Support</h4>
                <p className="text-gray-600">
                  Get instant responses from our founders Ashok R & Chandan for quick inquiries and bookings.
                </p>
              </div>
              <a 
                href="https://wa.me/919591762419"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center space-x-2 shadow-lg whitespace-nowrap"
              >
                <span>💬</span>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}