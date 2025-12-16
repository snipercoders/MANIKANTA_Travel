"use client";

import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiPackage, FiUsers, FiMessageSquare } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    type: 'packages',
    from: '',
    to: '',
    seats: '',
    busType: 'AC',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      busType: e.target.value
    }));
  };

  const formatWhatsAppMessage = () => {
    const { name, email, mobile, type, from, to, seats, busType, message } = formData;
    
    return `*New Booking Request*%0A%0A` +
           `*Name:* ${name}%0A` +
           `*Email:* ${email}%0A` +
           `*Mobile:* ${mobile}%0A` +
           `*Type:* ${type.charAt(0).toUpperCase() + type.slice(1)}%0A` +
           `*From:* ${from || 'Not specified'}%0A` +
           `*To:* ${to || 'Not specified'}%0A` +
           `*Seats:* ${seats}%0A` +
           `*Bus Type:* ${busType}%0A` +
           `*Message:* ${message || 'No message provided'}%0A%0A` +
           `_Sent from Sri Manikanta Tours & Travels Website_`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.seats || !formData.message) {
      alert('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const whatsappNumber = '9591762419'; // Your WhatsApp number
      const message = formatWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          type: 'packages',
          from: '',
          to: '',
          seats: '',
          busType: 'AC',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl p-8 h-full border border-orange-100">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <FiPackage className="text-white text-lg" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sri Manikanta</h2>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
              <p className="text-gray-600 mt-4">Get in touch with us for your travel needs</p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <HiOutlineLocationMarker className="text-2xl text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Smms, 88, 2nd Cross,<br />
                    Vivekananda Nagarahalli Cross,<br />
                    Bangalore, Karnataka-560057
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <HiOutlinePhone className="text-2xl text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us Anytime</h3>
                  <p className="text-gray-600">
                    <a 
                      href="tel:+9142050250" 
                      className="hover:text-orange-600 transition-colors font-medium"
                    >
                      +91 420 502 50
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <HiOutlineMail className="text-2xl text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    <a 
                      href="mailto:srimanikanta.travel@gmail.com" 
                      className="hover:text-orange-600 transition-colors font-medium"
                    >
                      srimanikanta.travel@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Response within 2 hours</p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="mt-8 pt-8 border-t border-orange-100">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <FiPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">WhatsApp Direct</h4>
                      <p className="text-green-600 font-medium">+91 95917 62419</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Quick responses via WhatsApp for instant booking assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Book Your Journey</h2>
                <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white text-sm font-medium">
                  Quick Booking
                </div>
              </div>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll contact you on WhatsApp for confirmation</p>
              <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="text-4xl text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Sent Successfully!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your booking request has been sent to our WhatsApp. We'll contact you shortly for confirmation.
                </p>
                <div className="animate-pulse text-sm text-green-600">
                  Opening WhatsApp...
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiUser className="text-orange-500" />
                        <span>Full Name</span>
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiMail className="text-orange-500" />
                        <span>Email Address</span>
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiPhone className="text-orange-500" />
                        <span>Mobile Number</span>
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  {/* Type Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiPackage className="text-orange-500" />
                        <span>Service Type</span>
                      </div>
                    </label>
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50 appearance-none"
                    >
                      <option value="packages">Tour Packages</option>
                      <option value="bus">Bus Tickets</option>
                      <option value="custom">Custom Tours</option>
                      <option value="hotel">Hotel Booking</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* From Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiMapPin className="text-orange-500" />
                        <span>From</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="Departure city"
                    />
                  </div>

                  {/* To Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiMapPin className="text-orange-500" />
                        <span>To</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="Destination city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Seats Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      <div className="flex items-center space-x-2">
                        <FiUsers className="text-orange-500" />
                        <span>Number of Seats</span>
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      type="number"
                      name="seats"
                      value={formData.seats}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50"
                      placeholder="Number of passengers"
                      required
                    />
                  </div>

                  {/* Bus Type Field */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium mb-3">Bus Type</label>
                    <div className="flex space-x-4">
                      <label className="flex-1">
                        <input 
                          type="radio" 
                          name="busType" 
                          value="AC" 
                          checked={formData.busType === 'AC'}
                          onChange={handleRadioChange}
                          className="hidden peer"
                        />
                        <div className="px-6 py-3.5 rounded-xl border-2 border-gray-200 peer-checked:border-orange-500 peer-checked:bg-orange-50 text-center cursor-pointer transition-all duration-300 hover:border-orange-300">
                          <span className="font-medium text-gray-900">AC Bus</span>
                        </div>
                      </label>
                      <label className="flex-1">
                        <input 
                          type="radio" 
                          name="busType" 
                          value="Non-AC" 
                          checked={formData.busType === 'Non-AC'}
                          onChange={handleRadioChange}
                          className="hidden peer"
                        />
                        <div className="px-6 py-3.5 rounded-xl border-2 border-gray-200 peer-checked:border-orange-500 peer-checked:bg-orange-50 text-center cursor-pointer transition-all duration-300 hover:border-orange-300">
                          <span className="font-medium text-gray-900">Non-AC Bus</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    <div className="flex items-center space-x-2">
                      <FiMessageSquare className="text-orange-500" />
                      <span>Additional Requirements</span>
                      <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 bg-gray-50 resize-none"
                    placeholder="Tell us about your travel preferences, special requirements, or any questions..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      isSubmitting 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending to WhatsApp...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <FiSend className="text-lg" />
                        <span>Send Booking Request via WhatsApp</span>
                      </div>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    After submitting, you'll be redirected to WhatsApp to confirm your details
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;