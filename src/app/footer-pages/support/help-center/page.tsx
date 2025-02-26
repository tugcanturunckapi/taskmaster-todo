"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBook,
  FaVideo,
  FaQuestionCircle,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpTopics = [
    {
      title: "Getting Started Guide",
      icon: FaRocket,
      description: "Basic information to get started with TaskMaster",
      link: "/footer-pages/getting-started/quick-start",
    },
    {
      title: "Task Management",
      icon: FaBook,
      description: "Effectively manage your tasks",
      link: "/footer-pages/features/task-management",
    },
    {
      title: "Video Tutorials",
      icon: FaVideo,
      description: "Step-by-step video tutorials",
      link: "#",
    },
    {
      title: "Frequently Asked Questions",
      icon: FaQuestionCircle,
      description: "Most common questions and answers",
      link: "/footer-pages/getting-started/faqs",
    },
    {
      title: "Troubleshooting",
      icon: FaTools,
      description: "Common issues and solutions",
      link: "/footer-pages/support/troubleshooting",
    },
  ];

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
            Help Center
          </h1>
          <p className="text-xl text-gray-400 mb-8">How can we help you?</p>

          <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help topics..."
              className="w-full bg-[#1A1B23] text-white pl-12 pr-4 py-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpTopics.map((topic, index) => (
            <motion.a
              key={topic.title}
              href={topic.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <topic.icon className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <h2 className="text-xl font-semibold">{topic.title}</h2>
              </div>
              <p className="text-gray-400">{topic.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="text-gray-400 mb-8">
            If you couldn't find what you're looking for, you can contact our
            support team.
          </p>
          <a
            href="/footer-pages/support/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Security Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Popular Topics</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Account Settings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Notification Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Data Backup
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sample Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
