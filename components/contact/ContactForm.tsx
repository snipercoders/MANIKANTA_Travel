// // components/contact/ContactForm.tsx

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
//     vehicleType: 'AC Bus',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
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
//     <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-6 sm:mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-2">SRI MANIKANTA</h1>
//         <div className="text-lg sm:text-xl md:text-2xl text-red-800 font-semibold mb-2">Tours & Travels</div>
//         <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
//       </div>

//       <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
//         Please Enter Your Details
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
//         {/* Name Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">Name</label>
//           </div>
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-800 rounded-l-lg flex items-center justify-center">
//                 <span className="text-white text-lg sm:text-xl font-bold">I</span>
//               </div>
//             </div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="flex-1 min-w-0 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-r-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//         </div>

//         {/* Email Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">
//               Email <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         {/* Mobile Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">
//               Mobile <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//             placeholder="Enter your mobile number"
//             required
//           />
//         </div>

//         {/* Type Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">Type</label>
//           </div>
//           <select 
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//           >
//             <option value="Packages">Packages</option>
//             <option value="Bus Ticket">Bus Ticket</option>
//             <option value="Hotel Booking">Hotel Booking</option>
//             <option value="Car Rental">Car Rental</option>
//             <option value="Custom Tour">Custom Tour</option>
//           </select>
//         </div>

//         {/* From and To Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//           <div>
//             <div className="flex items-center mb-3">
//               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//               <label className="block text-base sm:text-lg font-medium text-red-800">From</label>
//             </div>
//             <input
//               type="text"
//               name="from"
//               value={formData.from}
//               onChange={handleChange}
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//               placeholder="Departure location"
//             />
//           </div>

//           <div>
//             <div className="flex items-center mb-3">
//               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//               <label className="block text-base sm:text-lg font-medium text-red-800">To</label>
//             </div>
//             <input
//               type="text"
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//               placeholder="Destination location"
//             />
//           </div>
//         </div>

//         {/* No. of Seats Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">
//               No. of Seats <span className="text-red-500">*</span>
//             </label>
//           </div>
//           <input
//             type="number"
//             name="seats"
//             value={formData.seats}
//             onChange={handleChange}
//             min="1"
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
//             placeholder="Enter number of seats"
//             required
//           />
//         </div>

//         {/* Vehicle Type Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">Vehicle Type</label>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
//             {['AC Bus', 'Non-AC Bus', 'SUV', 'Tempo Traveller', 'Sedan', 'Hatchback', 'Van', 'Mini Bus'].map((type) => (
//               <label key={type} className="flex items-center space-x-2 cursor-pointer p-2 sm:p-3 border border-red-200 rounded-lg hover:border-red-400 transition-colors">
//                 <input
//                   type="radio"
//                   name="vehicleType"
//                   value={type}
//                   checked={formData.vehicleType === type}
//                   onChange={handleRadioChange}
//                   className="w-4 h-4 sm:w-5 sm:h-5 text-red-800 focus:ring-red-800"
//                 />
//                 <span className="text-xs sm:text-sm md:text-base text-gray-700">{type}</span>
//               </label>
//             ))}
//           </div>
//           <p className="text-xs sm:text-sm text-gray-500 mt-2">Select the type of vehicle you need</p>
//         </div>

//         {/* Message Field */}
//         <div>
//           <div className="flex items-center mb-3">
//             <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
//             <label className="block text-base sm:text-lg font-medium text-red-800">
//               Message <span className="text-red-800">*</span>
//             </label>
//           </div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={3}
//             className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg resize-none"
//             placeholder="Enter your message or special requirements"
//             required
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="pt-4 sm:pt-6">
//           <button
//             type="submit"
//             className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-800 text-white text-base sm:text-xl font-bold rounded-lg hover:from-red-600 hover:to-red-900 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
//           >
//             Submit Booking Request
//           </button>
//         </div>
//       </form>

//       {/* Contact Information Section */}
//       <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
//         <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Connect with us</h3>
        
//         <div className="space-y-6">
//           {/* Office Info */}
//           <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-100">
//             <div className="flex items-start space-x-3 sm:space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg flex items-center justify-center">
//                   <span className="text-lg sm:text-xl text-white">🏢</span>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Office Address</h4>
//                 <p className="text-gray-700 text-sm sm:text-base">
//                   Sri Manikanta Tours & Travels<br />
//                   Agara, Kanakapura Main Road<br />
//                   Bangalore, Karnataka - 560082<br />
//                   <span className="text-xs sm:text-sm text-red-600 font-medium mt-1 inline-block">
//                     Est. 06/06/2006 | Travel Agency
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Numbers */}
//           <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-100">
//             <div className="flex items-start space-x-3 sm:space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg flex items-center justify-center">
//                   <span className="text-lg sm:text-xl text-white">📞</span>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Contact Numbers</h4>
//                 <div className="space-y-2">
//                   <p className="text-gray-700 font-semibold text-base sm:text-lg">+91 95917 62419</p>
//                   <p className="text-gray-600 text-xs sm:text-sm">Primary contact number</p>
//                   <div className="pt-2 border-t border-red-100">
//                     <p className="text-xs sm:text-sm text-red-600">
//                       <span className="font-medium">Founder:</span> Ashok R
//                     </p>
//                     <p className="text-xs sm:text-sm text-red-600">
//                       <span className="font-medium">Co-founder:</span> Chandan
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp CTA */}
//       <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="text-center md:text-left">
//             <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">24/7 WhatsApp Support</h3>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Get instant responses from our founders Ashok R & Chandan for quick inquiries and bookings.
//             </p>
//           </div>
//           <a 
//             href="https://wa.me/919591762419"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 shadow-lg text-sm sm:text-base whitespace-nowrap"
//           >
//             <span>💬</span>
//             <span>Message on WhatsApp</span>
//           </a>
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the WhatsApp number with country code (India = 91)
      const whatsappNumber = '919591762419'; // Added country code 91
      
      // Format the message with proper spacing and line breaks
      const message = 
        `*🏢 NEW BOOKING REQUEST - SRI MANIKANTA TOURS & TRAVELS*%0A%0A` +
        `📋 *CONTACT DETAILS*%0A` +
        `━━━━━━━━━━━━━━━━━━━━%0A` +
        `👤 *Name:* ${formData.name || 'Not provided'}%0A` +
        `📧 *Email:* ${formData.email || 'Not provided'}%0A` +
        `📱 *Mobile:* ${formData.mobile || 'Not provided'}%0A%0A` +
        
        `🚗 *BOOKING DETAILS*%0A` +
        `━━━━━━━━━━━━━━━━━━━━%0A` +
        `🎫 *Type:* ${formData.type}%0A` +
        `📍 *From:* ${formData.from || 'Not specified'}%0A` +
        `🎯 *To:* ${formData.to || 'Not specified'}%0A` +
        `💺 *No. of Seats:* ${formData.seats || 'Not specified'}%0A` +
        `🚌 *Vehicle Type:* ${formData.vehicleType}%0A%0A` +
        
        `📝 *MESSAGE*%0A` +
        `━━━━━━━━━━━━━━━━━━━━%0A` +
        `${formData.message || 'No additional message'}%0A%0A` +
        
        `⏰ *TIMESTAMP:* ${new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short' 
        })}%0A` +
        `🌐 *SOURCE:* Sri Manikanta Tours & Travels Website%0A%0A` +
        
        `📞 *FOR QUICK RESPONSE:*%0A` +
        `WhatsApp: https://wa.me/${formData.mobile.replace(/\D/g, '')}%0A`;
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      alert('✅ Opening WhatsApp to send your booking request...\n\nPlease check your WhatsApp and send the message!');
      
      // Reset form after 1 second
      setTimeout(() => {
        setFormData({
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
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ There was an error. Please try again or contact us directly at +91 95917 62419');
      setIsSubmitting(false);
    }
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
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-2">SRI MANIKANTA</h1>
        <div className="text-lg sm:text-xl md:text-2xl text-red-800 font-semibold mb-2">Tours & Travels</div>
        <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
        Please Enter Your Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {/* Name Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">Name</label>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-800 rounded-l-lg flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">👤</span>
              </div>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 min-w-0 block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-r-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">
              Email <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Mobile Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">
              Mobile <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
          />
        </div>

        {/* Type Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">Type</label>
          </div>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
          >
            <option value="Packages">Packages</option>
            <option value="Bus Ticket">Bus Ticket</option>
            <option value="Hotel Booking">Hotel Booking</option>
            <option value="Car Rental">Car Rental</option>
            <option value="Custom Tour">Custom Tour</option>
          </select>
        </div>

        {/* From and To Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
              <label className="block text-base sm:text-lg font-medium text-red-800">From</label>
            </div>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
              placeholder="Departure location"
            />
          </div>

          <div>
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
              <label className="block text-base sm:text-lg font-medium text-red-800">To</label>
            </div>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
              placeholder="Destination location"
            />
          </div>
        </div>

        {/* No. of Seats Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">
              No. of Seats <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            min="1"
            max="100"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg"
            placeholder="Enter number of seats"
            required
          />
        </div>

        {/* Vehicle Type Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">Vehicle Type</label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {['AC Bus', 'Non-AC Bus', 'SUV', 'Tempo Traveller', 'Sedan', 'Hatchback', 'Van', 'Mini Bus'].map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer p-2 sm:p-3 border border-red-200 rounded-lg hover:border-red-400 transition-colors">
                <input
                  type="radio"
                  name="vehicleType"
                  value={type}
                  checked={formData.vehicleType === type}
                  onChange={handleRadioChange}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-red-800 focus:ring-red-800"
                />
                <span className="text-xs sm:text-sm md:text-base text-gray-700">{type}</span>
              </label>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Select the type of vehicle you need</p>
        </div>

        {/* Message Field */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-800 rounded-full mr-2"></div>
            <label className="block text-base sm:text-lg font-medium text-red-800">
              Message <span className="text-red-800">*</span>
            </label>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base sm:text-lg resize-none"
            placeholder="Enter your message, special requirements, or additional details about your trip"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-800 text-white text-base sm:text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-red-600 hover:to-red-900'
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                <span>Opening WhatsApp...</span>
              </>
            ) : (
              <>
                <span>📱</span>
                <span>Submit Booking Request to WhatsApp</span>
              </>
            )}
          </button>
          
          <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center">
            ✨ All data will be sent directly to WhatsApp number: +91 95917 62419
          </p>
        </div>
      </form>

      {/* Contact Information Section */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Connect with us</h3>
        
        <div className="space-y-6">
          {/* Office Info */}
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-100">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-xl text-white">🏢</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Office Address</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Sri Manikanta Tours & Travels<br />
                  Agara, Kanakapura Main Road<br />
                  Bangalore, Karnataka - 560082<br />
                  <span className="text-xs sm:text-sm text-red-600 font-medium mt-1 inline-block">
                    Est. 06/06/2006 | Travel Agency
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Numbers */}
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-100">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-xl text-white">📞</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">Contact Numbers</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 font-semibold text-base sm:text-lg">+91 95917 62419</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Primary WhatsApp contact number</p>
                  <div className="pt-2 border-t border-red-100">
                    <p className="text-xs sm:text-sm text-red-600">
                      <span className="font-medium">Founder:</span> Ashok R
                    </p>
                    <p className="text-xs sm:text-sm text-red-600">
                      <span className="font-medium">Co-founder:</span> Chandan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">24/7 WhatsApp Support</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get instant responses from our founders Ashok R & Chandan for quick inquiries and bookings.
            </p>
          </div>
          <a 
            href="https://wa.me/919591762419"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center space-x-2 shadow-lg text-sm sm:text-base whitespace-nowrap"
          >
            <span>💬</span>
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}