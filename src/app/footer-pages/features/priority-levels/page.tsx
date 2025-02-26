"use client";

import { motion } from "framer-motion";
import { FaArrowUp, FaMinus, FaArrowDown } from "react-icons/fa";

const PriorityLevelsFeatures = () => {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Priority Levels
          </h1>
          <p className="text-xl text-gray-400">
            Organize your tasks by priority levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <FaArrowUp className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-red-500">
              High Priority
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Tasks requiring immediate attention</li>
              <li>• Important deadlines</li>
              <li>• Critical business items</li>
              <li>• Customer requests</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <FaMinus className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-500">
              Medium Priority
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Routine tasks</li>
              <li>• Weekly goals</li>
              <li>• Development projects</li>
              <li>• Internal operations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <FaArrowDown className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-green-500">
              Low Priority
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Background tasks</li>
              <li>• Nice-to-have features</li>
              <li>• Future planning</li>
              <li>• Research topics</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Priority Setting Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-400">
                Correct Prioritization
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Use the urgency and importance matrix</li>
                <li>• Consider deadlines</li>
                <li>• Think about overall project goals</li>
                <li>• Evaluate dependencies</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-purple-400">
                Priority Management
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Review priorities regularly</li>
                <li>• Update based on changing conditions</li>
                <li>• Coordinate with team members</li>
                <li>• Optimize time management</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PriorityLevelsFeatures;
