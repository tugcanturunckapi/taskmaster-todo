"use client";

import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaLayerGroup,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

export default function BestPractices() {
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
            Best Practices
          </h1>
          <p className="text-xl text-gray-400">
            Learn how to use TaskMaster effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaClipboardCheck className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-semibold">Task Organization</h2>
            </div>
            <p className="text-gray-400">
              Keep your tasks well-organized and clearly defined. Break down
              large tasks into smaller, manageable pieces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaLayerGroup className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold">Category Usage</h2>
            </div>
            <p className="text-gray-400">
              Use categories effectively to group related tasks. Create a
              logical category structure that matches your workflow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaClock className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold">Time Management</h2>
            </div>
            <p className="text-gray-400">
              Make the most of the Pomodoro timer. Take regular breaks and stay
              focused during work sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaChartLine className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold">Progress Tracking</h2>
            </div>
            <p className="text-gray-400">
              Regularly review your progress and adjust your strategies. Use
              analytics to improve your productivity.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
