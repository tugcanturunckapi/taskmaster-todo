"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400">
            Get in touch with us for any questions or suggestions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1B23] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1A1B23] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1A1B23] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#1A1B23] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">contact@taskmaster.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-white">San Francisco, CA, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex flex-col items-center p-4 bg-[#2A2B33] rounded-lg hover:bg-[#3A3B43] transition-colors"
                >
                  <FaGithub className="w-6 h-6 mb-2" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 bg-[#2A2B33] rounded-lg hover:bg-[#3A3B43] transition-colors"
                >
                  <FaTwitter className="w-6 h-6 mb-2" />
                  <span className="text-sm">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 bg-[#2A2B33] rounded-lg hover:bg-[#3A3B43] transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 mb-2" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-400">Saturday: 10:00 AM - 3:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
