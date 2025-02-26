"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaClock, FaTag, FaStar } from "react-icons/fa";

const TipsAndTricks = () => {
  const tips = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Task Management",
      tips: [
        "Break down large tasks into smaller, manageable subtasks",
        "Use descriptive task titles for better clarity",
        "Set realistic deadlines for each task",
        "Review and update your task list regularly",
      ],
    },
    {
      icon: <FaClock className="w-6 h-6 text-blue-500" />,
      title: "Time Management",
      tips: [
        "Start your day by planning your tasks",
        "Use the Pomodoro technique for better focus",
        "Take regular breaks to maintain productivity",
        "Track time spent on each task",
      ],
    },
    {
      icon: <FaTag className="w-6 h-6 text-green-500" />,
      title: "Organization",
      tips: [
        "Create specific categories for different types of tasks",
        "Use color coding for better visual organization",
        "Keep similar tasks in the same category",
        "Archive completed tasks regularly",
      ],
    },
    {
      icon: <FaStar className="w-6 h-6 text-purple-500" />,
      title: "Productivity",
      tips: [
        "Focus on one task at a time",
        "Eliminate distractions while working",
        "Celebrate completing difficult tasks",
        "Learn from your productivity patterns",
      ],
    },
  ];

  const shortcuts = [
    {
      key: "Ctrl + N",
      action: "Create new task",
    },
    {
      key: "Ctrl + Space",
      action: "Toggle task completion",
    },
    {
      key: "Ctrl + Delete",
      action: "Delete selected task",
    },
    {
      key: "Ctrl + P",
      action: "Start Pomodoro timer",
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Tips & Tricks
          </h1>
          <p className="text-xl text-gray-400">
            Maximize your productivity with these helpful tips
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((section, index) => (
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
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <motion.li
                    key={tipIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + tipIndex * 0.1,
                    }}
                    className="flex items-center text-gray-400"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Pro İpuçları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-yellow-400 mb-4">
                Üretkenliği Artırma
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  İki dakikadan kısa görevleri hemen yapın
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Görevleri kategorilere göre gruplandırın
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Düzenli gözden geçirme alışkanlığı edinin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Başarılarınızı kutlamayı unutmayın
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-yellow-400 mb-4">
                Motivasyon Teknikleri
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Günlük hedefler belirleyin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  İlerlemenizi görselleştirin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Ödül sistemi oluşturun
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                  Başarı hikayenizi paylaşın
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Keyboard Shortcuts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shortcuts.map((shortcut, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <kbd className="px-2 py-1 bg-gray-700 rounded text-sm">
                  {shortcut.key}
                </kbd>
                <span className="ml-3 text-gray-400">{shortcut.action}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TipsAndTricks;
