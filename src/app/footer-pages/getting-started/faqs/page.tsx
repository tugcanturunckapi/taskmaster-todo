"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I create a new task?",
      answer:
        "Click the 'New Task' button in the top right corner or use the quick add form on the main page. Fill in the task details including title, priority, and category (optional), then click 'Add Task'.",
    },
    {
      question: "Can I organize tasks into categories?",
      answer:
        "Yes, you can create custom categories and assign tasks to them. Go to the Categories tab to manage your categories, and when creating or editing a task, you can select a category from the dropdown menu.",
    },
    {
      question: "How does the priority system work?",
      answer:
        "Tasks can be assigned three priority levels: High, Medium, or Low. High priority tasks appear at the top of your list by default. You can change a task's priority at any time by editing the task.",
    },
    {
      question: "What is the Pomodoro feature?",
      answer:
        "The Pomodoro feature is a time management technique that uses 25-minute work sessions followed by 5-minute breaks. Click the timer icon next to any task to start a Pomodoro session for that task.",
    },
    {
      question: "How can I track my progress?",
      answer:
        "TaskMaster provides various ways to track progress: view completed tasks in the Completed tab, check your daily and weekly statistics, and use the progress charts to analyze your productivity trends.",
    },
    {
      question: "Can I reorder my tasks?",
      answer:
        "Yes, you can drag and drop tasks to reorder them. Simply click and hold a task, then drag it to your desired position in the list.",
    },
    {
      question: "How do I edit or delete a task?",
      answer:
        "To edit a task, click the edit icon (pencil) next to the task. To delete a task, click the delete icon (trash) or select the task and press the Delete key.",
    },
    {
      question: "Is my data backed up?",
      answer:
        "Yes, your data is automatically saved to your browser's local storage. For additional security, we recommend regularly exporting your tasks using the backup feature in settings.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about TaskMaster
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-200">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-purple-400 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-[#1A1B23] rounded-xl p-8 border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Contact our support team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/footer-pages/support"
              className="bg-[#2A2B33] hover:bg-[#3A3B43] text-center py-4 rounded-lg text-gray-300 transition-colors"
            >
              Support Page
            </a>
            <a
              href="mailto:support@taskmaster.com"
              className="bg-purple-600 hover:bg-purple-700 text-center py-4 rounded-lg text-white transition-colors"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
