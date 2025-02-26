"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaSmile,
  FaMeh,
  FaFrown,
  FaLightbulb,
  FaBug,
  FaComments,
} from "react-icons/fa";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    experience: "",
    feedbackType: "",
    title: "",
    description: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we will send the form data to the backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      rating: 0,
      experience: "",
      feedbackType: "",
      title: "",
      description: "",
      email: "",
    });
  };

  const feedbackTypes = [
    { value: "feature", label: "Feature Request", icon: <FaLightbulb /> },
    { value: "bug", label: "Bug Report", icon: <FaBug /> },
    { value: "general", label: "General Feedback", icon: <FaComments /> },
  ];

  const experienceTypes = [
    { value: "positive", label: "Positive", icon: <FaSmile /> },
    { value: "neutral", label: "Neutral", icon: <FaMeh /> },
    { value: "negative", label: "Negative", icon: <FaFrown /> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Feedback
          </h1>
          <p className="text-xl text-gray-400">
            Your feedback is valuable to help us improve TaskMaster
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1A1B23] rounded-xl p-8 border border-gray-800 space-y-8"
        >
          {/* Star Rating */}
          <div className="space-y-4">
            <label className="block text-lg font-medium">Rate TaskMaster</label>
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="focus:outline-none"
                >
                  <FaStar
                    className={`w-8 h-8 ${
                      star <= formData.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Experience Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-medium">
              How would you describe your experience?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {experienceTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, experience: type.value }))
                  }
                  className={`flex items-center justify-center space-x-2 p-4 rounded-lg border ${
                    formData.experience === type.value
                      ? "border-purple-500 bg-purple-500 bg-opacity-20"
                      : "border-gray-700 hover:border-purple-500"
                  } transition-all`}
                >
                  <span className="text-2xl">{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Type */}
          <div className="space-y-4">
            <label className="block text-lg font-medium">Feedback Type</label>
            <div className="grid grid-cols-3 gap-4">
              {feedbackTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      feedbackType: type.value,
                    }))
                  }
                  className={`flex items-center justify-center space-x-2 p-4 rounded-lg border ${
                    formData.feedbackType === type.value
                      ? "border-purple-500 bg-purple-500 bg-opacity-20"
                      : "border-gray-700 hover:border-purple-500"
                  } transition-all`}
                >
                  <span className="text-xl">{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="A brief title for your feedback"
                className="w-full bg-[#2A2B33] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Detailed Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe your experience or suggestion in detail"
                rows={5}
                className="w-full bg-[#2A2B33] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="So we can contact you if needed"
              className="w-full bg-[#2A2B33] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Submit Feedback
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>
            Thank you for your feedback. Every piece of feedback helps us make
            TaskMaster better.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeedbackPage;
