"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaBell, FaHistory, FaChartLine } from "react-icons/fa";

const DueDatesFeatures = () => {
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
            Due Dates
          </h1>
          <p className="text-xl text-gray-400">
            Smart scheduling features to complete your tasks on time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-semibold">Date Setting</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Set due dates for each task. Plan and organize your tasks easily
              with calendar view.
            </p>
            <div className="bg-[#2A2B33] p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Today</span>
                  <span className="text-blue-400">3 tasks</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">This Week</span>
                  <span className="text-green-400">8 tasks</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Next Week</span>
                  <span className="text-yellow-400">5 tasks</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaBell className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold">Reminders</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Set smart reminders for your tasks. Never miss a deadline with
              email, browser notifications, or mobile notifications.
            </p>
            <div className="bg-[#2A2B33] p-4 rounded-lg space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                <span className="text-gray-300">Last 24 hours</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                <span className="text-gray-300">3 days before</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span className="text-gray-300">1 week before</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaHistory className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold">History Tracking</h2>
            </div>
            <p className="text-gray-400">
              View the history of completed and overdue tasks. Analyze and
              improve your time management habits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaChartLine className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold">Performance Analysis</h2>
            </div>
            <p className="text-gray-400">
              Analyze your task completion rates and on-time completion
              performance. Improve your efficiency with detailed reports and
              charts.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Time Management Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-400">
                Effective Planning
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Set realistic due dates</li>
                <li>• Add buffer time</li>
                <li>• Plan according to priorities</li>
                <li>• Regular check-ins</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-purple-400">
                Reminder Strategies
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Use multiple reminders</li>
                <li>• Set early alerts for important tasks</li>
                <li>• Customize reminder intervals</li>
                <li>• Enable calendar synchronization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DueDatesFeatures;
