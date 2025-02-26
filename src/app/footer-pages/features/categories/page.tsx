"use client";

import { motion } from "framer-motion";
import { FaFolder, FaTags, FaFilter, FaChartPie } from "react-icons/fa";

const CategoriesFeatures = () => {
  const categories = [
    { name: "Work", color: "bg-blue-500" },
    { name: "Personal", color: "bg-purple-500" },
    { name: "Shopping", color: "bg-green-500" },
    { name: "Health", color: "bg-red-500" },
    { name: "Education", color: "bg-yellow-500" },
    { name: "Social", color: "bg-pink-500" },
    { name: "Project", color: "bg-indigo-500" },
    { name: "Events", color: "bg-orange-500" },
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Categories
          </h1>
          <p className="text-xl text-gray-400">
            Better organize your tasks by categorizing them
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
              <FaFolder className="w-6 h-6 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-semibold">Category Management</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Create, edit, and delete custom categories. Set unique colors for
              each category to enhance visual organization.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-[#2A2B33] p-2 rounded-lg"
                >
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  <span className="text-sm text-gray-300">{category.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaTags className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-semibold">Task Categorization</h2>
            </div>
            <p className="text-gray-400">
              Assign categories when creating or editing tasks. A task can
              belong to multiple categories, providing more flexible
              organization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaFilter className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold">Category Filtering</h2>
            </div>
            <p className="text-gray-400">
              Filter your tasks by categories to focus on specific areas. View
              or hide multiple categories simultaneously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <FaChartPie className="w-6 h-6 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-semibold">Category Statistics</h2>
            </div>
            <p className="text-gray-400">
              View detailed statistics for each category. Analyze completed
              tasks, average completion time, and efficiency metrics to optimize
              your work habits.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Category Usage Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-400">
                Effective Categorization
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Keep categories simple and clear</li>
                <li>• Group similar tasks together</li>
                <li>• Create subcategories for detail</li>
                <li>• Use color coding effectively</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-purple-400">
                Category Maintenance
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Review categories regularly</li>
                <li>• Clean up unused categories</li>
                <li>• Optimize category structure</li>
                <li>• Analyze statistics</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesFeatures;
