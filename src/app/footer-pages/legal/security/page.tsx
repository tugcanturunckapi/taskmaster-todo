"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaFingerprint,
  FaServer,
} from "react-icons/fa";

const Security = () => {
  const sections = [
    {
      title: "Data Protection",
      icon: <FaShieldAlt className="w-6 h-6 text-blue-500" />,
      content: [
        "End-to-end encryption for all data",
        "Regular security audits",
        "Secure data storage practices",
        "Privacy-first approach",
      ],
    },
    {
      title: "Access Control",
      icon: <FaLock className="w-6 h-6 text-green-500" />,
      content: [
        "Multi-factor authentication",
        "Role-based access control",
        "Session management",
        "IP-based restrictions",
      ],
    },
    {
      title: "User Security",
      icon: <FaUserShield className="w-6 h-6 text-purple-500" />,
      content: [
        "Strong password requirements",
        "Regular security notifications",
        "Account activity monitoring",
        "Secure password recovery",
      ],
    },
    {
      title: "Infrastructure",
      icon: <FaServer className="w-6 h-6 text-red-500" />,
      content: [
        "DDoS protection",
        "Regular backups",
        "Secure cloud infrastructure",
        "24/7 monitoring",
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
            Security
          </h1>
          <p className="text-xl text-gray-400">
            How we protect your data and privacy
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold ml-3">{section.title}</h2>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
            <p className="text-gray-400">
              We don't store any sensitive information. All data is encrypted
              and processed securely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
            <p className="text-gray-400">
              We adhere to international data protection standards and regularly
              update our security measures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-400">
              For security-related inquiries or to report vulnerabilities:
            </p>
            <div className="mt-4 text-gray-400">
              <p>Email: security@taskmaster.com</p>
              <p>Emergency: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <FaFingerprint className="w-8 h-8 text-blue-500" />
            <p className="ml-3 text-gray-400">
              Your security is our top priority
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;
