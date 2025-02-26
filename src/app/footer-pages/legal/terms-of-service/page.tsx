"use client";

import { motion } from "framer-motion";
import {
  FaGavel,
  FaUserShield,
  FaFileContract,
  FaBan,
  FaHandshake,
} from "react-icons/fa";

const TermsOfService = () => {
  const sections = [
    {
      title: "Service Usage",
      icon: <FaHandshake className="w-6 h-6 text-blue-500" />,
      content: [
        "You agree to use TaskMaster for legal and ethical purposes",
        "You are responsible for your account security",
        "You commit not to misuse the service",
        "You agree to respect the rights of other users",
      ],
    },
    {
      title: "User Responsibilities",
      icon: <FaUserShield className="w-6 h-6 text-green-500" />,
      content: [
        "Provide accurate and current information",
        "Keep account information confidential",
        "Report suspicious activities",
        "Respect copyright laws",
      ],
    },
    {
      title: "Prohibited Activities",
      icon: <FaBan className="w-6 h-6 text-red-500" />,
      content: [
        "Spreading malware or viruses",
        "Sending spam or unwanted content",
        "Manipulating the service",
        "Unauthorized access attempts",
      ],
    },
    {
      title: "Contract Terms",
      icon: <FaFileContract className="w-6 h-6 text-purple-500" />,
      content: [
        "Right to modify service",
        "Account termination conditions",
        "Pricing policies",
        "Liability limitations",
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-400">
            Rules and conditions you must follow when using TaskMaster services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="flex items-center mb-8 text-gray-400">
            <FaGavel className="w-5 h-5 mr-2" />
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <p className="text-gray-300 mb-4">
            By using our &quot;Services&quot;, you agree to these terms.
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
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-400">
                All rights reserved by TaskMaster. All content, design, logos,
                and other materials on the platform are TaskMaster&apos;s
                intellectual property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-gray-400">
                TaskMaster does not guarantee that its services will be
                uninterrupted or error-free. We provide our services "as is".
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Modifications and Termination
              </h2>
              <p className="text-gray-400">
                TaskMaster reserves the right to modify these terms at any time.
                Users will be notified of significant changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">
                For questions about our terms of service:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: legal@taskmaster.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Technology Street, Software Avenue</p>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              &ldquo;TaskMaster&rdquo; refers to our task management platform.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
