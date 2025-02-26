"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaListUl,
  FaCalendarCheck,
  FaComments,
  FaSync,
  FaClipboardCheck,
  FaBrain,
  FaUsers,
  FaShieldAlt,
  FaRegClock,
  FaChartBar,
  FaLayerGroup,
  FaClock,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const BestPractices = () => {
  const practices = [
    {
      icon: <FaClipboardCheck className="w-6 h-6 text-green-500" />,
      title: "Task Creation",
      practices: [
        "Write clear and specific task descriptions",
        "Set realistic deadlines for each task",
        "Break down complex tasks into subtasks",
        "Assign appropriate priority levels",
      ],
    },
    {
      icon: <FaLayerGroup className="w-6 h-6 text-blue-500" />,
      title: "Organization",
      practices: [
        "Create logical categories for tasks",
        "Use consistent naming conventions",
        "Regularly clean up completed tasks",
        "Maintain a clear task hierarchy",
      ],
    },
    {
      icon: <FaClock className="w-6 h-6 text-purple-500" />,
      title: "Time Management",
      practices: [
        "Plan tasks at the start of each day",
        "Focus on one task at a time",
        "Use time tracking features",
        "Schedule regular breaks",
      ],
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-yellow-500" />,
      title: "Progress Tracking",
      practices: [
        "Review completed tasks weekly",
        "Analyze productivity patterns",
        "Adjust priorities as needed",
        "Document lessons learned",
      ],
    },
  ];

  const dosDonts = {
    dos: [
      "Do set clear and achievable goals",
      "Do review and update tasks regularly",
      "Do use categories effectively",
      "Do track your progress",
      "Do take regular breaks",
    ],
    donts: [
      "Don't create vague task descriptions",
      "Don't overload your task list",
      "Don't ignore priority levels",
      "Don't skip task planning",
      "Don't multitask excessively",
    ],
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Best Practices
          </h1>
          <p className="text-xl text-gray-400">
            Guidelines for effective task management
          </p>
          <p className="text-gray-300 mb-4">
            Here&apos;s what you&apos;ll learn about TaskMaster&apos;s best
            practices for optimal task management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practices.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#2A2B33] p-3 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.practices.map((practice, practiceIndex) => (
                  <motion.div
                    key={practiceIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + practiceIndex * 0.1,
                    }}
                  >
                    <h3 className="text-lg font-medium text-green-400 mb-2">
                      {practice}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Do's and Don'ts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-green-400 mb-4">Dos</h3>
              <ul className="space-y-3 text-gray-400">
                {dosDonts.dos.map((dos, index) => (
                  <li key={index}>{dos}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-green-400 mb-4">
                Don'ts
              </h3>
              <ul className="space-y-3 text-gray-400">
                {dosDonts.donts.map((dont, index) => (
                  <li key={index}>{dont}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Don&apos;t worry if you can&apos;t implement all these practices at
            once.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BestPractices;
