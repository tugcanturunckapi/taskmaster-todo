"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserSecret,
  FaDatabase,
  FaCookie,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      icon: <FaDatabase className="w-6 h-6 text-blue-500" />,
      content: [
        "Account information (email, username)",
        "Task and category data",
        "Usage statistics and preferences",
        "Device and browser information",
      ],
    },
    {
      title: "Data Usage",
      icon: <FaUserSecret className="w-6 h-6 text-green-500" />,
      content: [
        "Service provision and improvement",
        "Personalized experience delivery",
        "Security and authentication",
        "Communication and support",
      ],
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt className="w-6 h-6 text-red-500" />,
      content: [
        "End-to-end encryption",
        "Secure data storage",
        "Regular security audits",
        "Access control and monitoring",
      ],
    },
    {
      title: "Cookies and Tracking",
      icon: <FaCookie className="w-6 h-6 text-yellow-500" />,
      content: [
        "Session management",
        "Preference storage",
        "Analytics and performance",
        "Third-party integrations",
      ],
    },
  ];

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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400">
            Your data security and privacy are our priority
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <p className="text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-gray-300 mb-12">
            At TaskMaster, we are committed to protecting our users' privacy and
            keeping their personal data secure. This privacy policy explains how
            we collect, use, and protect your data.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-semibold ml-3">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-400"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
              <p className="text-gray-400">
                Our users have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Request access to your data</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Third-Party Sharing
              </h2>
              <p className="text-gray-400">
                We share your data with third parties only in the following
                cases:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>When legally required</li>
                <li>With your explicit consent</li>
                <li>As part of service provider cooperation</li>
                <li>In case of company merger or acquisition</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">
                If you have questions or concerns about our privacy policy,
                please contact us:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: privacy@taskmaster.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Technology Street, Software Avenue</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
