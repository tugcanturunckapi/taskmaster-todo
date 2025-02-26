"use client";

import { motion } from "framer-motion";
import { FaListUl, FaCheck, FaEdit, FaTrash, FaSort } from "react-icons/fa";

const TaskManagementFeatures = () => {
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
            Task Management
          </h1>
          <p className="text-xl text-gray-400">
            Discover the powerful task management features of TaskMaster
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
              <FaListUl className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-2xl font-semibold">Task Creation</h2>
            </div>
            <p className="text-gray-400">
              Add new tasks, set titles, and assign priority levels. You can
              select categories for each task and add detailed descriptions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaCheck className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold">Task Completion</h2>
            </div>
            <p className="text-gray-400">
              Mark tasks as complete with a single click. Completed tasks are
              automatically archived, and you can track your progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaEdit className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold">Task Editing</h2>
            </div>
            <p className="text-gray-400">
              Edit existing tasks, modify titles, update priorities, and
              reassign categories as needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaSort className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold">Drag & Drop</h2>
            </div>
            <p className="text-gray-400">
              Reorder tasks using drag and drop functionality. Move priority
              tasks to the top and optimize your workflow.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Break down your tasks into small, manageable pieces
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Make realistic time estimates for each task
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              Complete priority tasks early in the day
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Regularly review and update your task list
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TaskManagementFeatures;
