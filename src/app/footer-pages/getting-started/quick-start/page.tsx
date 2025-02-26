"use client";

import { motion } from "framer-motion";
import { FaPlus, FaList, FaTags, FaClock, FaCheck } from "react-icons/fa";

const QuickStartGuide = () => {
  const steps = [
    {
      icon: <FaPlus className="w-6 h-6 text-blue-500" />,
      title: "Create Tasks",
      description:
        "Add new tasks by clicking the 'New Task' button in the top right corner or using the task creation form on the main page.",
      tip: "Remember to set priority level and category when adding tasks.",
    },
    {
      icon: <FaList className="w-6 h-6 text-green-500" />,
      title: "Organize Tasks",
      description:
        "Reorder your tasks using drag & drop functionality. Move priority tasks to the top.",
      tip: "Better organize your tasks by categorizing them.",
    },
    {
      icon: <FaTags className="w-6 h-6 text-purple-500" />,
      title: "Category Management",
      description:
        "Create new categories from the Categories tab and categorize your tasks.",
      tip: "Use different colors for each category to enhance visual organization.",
    },
    {
      icon: <FaClock className="w-6 h-6 text-yellow-500" />,
      title: "Using Pomodoro",
      description:
        "Start the Pomodoro timer by clicking the clock icon next to each task.",
      tip: "Follow the 25-minute work and 5-minute break cycle.",
    },
    {
      icon: <FaCheck className="w-6 h-6 text-red-500" />,
      title: "Track Progress",
      description: "Mark completed tasks and track your progress.",
      tip: "Completed tasks are automatically moved to the Completed tab.",
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
            Quick Start Guide
          </h1>
          <p className="text-xl text-gray-400">
            Essential steps to get started with TaskMaster
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#2A2B33] p-4 rounded-lg">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <div className="bg-[#2A2B33] p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-blue-400">
                        Pro Tip:
                      </span>{" "}
                      {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Getting Started Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-400">
                Recommended Usage
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Start planning your daily tasks in the morning</li>
                <li>• Complete priority tasks early</li>
                <li>• Use the Pomodoro technique regularly</li>
                <li>• Utilize categories effectively</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-purple-400">
                Common Mistakes
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Don't add too many tasks</li>
                <li>• Don't keep tasks too general</li>
                <li>• Don't neglect prioritization</li>
                <li>• Don't skip breaks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickStartGuide;
