"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaServer,
  FaBug,
  FaFileAlt,
  FaHandshake,
  FaExclamationTriangle,
} from "react-icons/fa";

const Security = () => {
  const securityMeasures = [
    {
      title: "Data Encryption",
      icon: <FaLock className="w-6 h-6 text-blue-500" />,
      description:
        "All your sensitive data is protected with industry-standard encryption protocols.",
      details: [
        "SSL/TLS encryption",
        "End-to-end encryption",
        "Secure data storage",
      ],
    },
    {
      title: "User Authentication",
      icon: <FaUserShield className="w-6 h-6 text-green-500" />,
      description:
        "We protect your accounts with multi-factor authentication and strong password policies.",
      details: [
        "Two-factor authentication",
        "Strong password requirements",
        "Session management",
      ],
    },
    {
      title: "Infrastructure Security",
      icon: <FaServer className="w-6 h-6 text-purple-500" />,
      description:
        "Our servers and infrastructure are protected according to the latest security standards.",
      details: [
        "Regular security audits",
        "Firewall protection",
        "DDoS protection",
      ],
    },
    {
      title: "Vulnerability Management",
      icon: <FaBug className="w-6 h-6 text-red-500" />,
      description:
        "We proactively manage potential security vulnerabilities through regular security testing and our open-source program.",
      details: [
        "Bug bounty program",
        "Regular penetration testing",
        "Rapid security patch deployment",
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
            Security Policy
          </h1>
          <p className="text-xl text-gray-400">
            Your data security is our priority
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="flex items-center mb-8 text-gray-400">
            <FaShieldAlt className="w-5 h-5 mr-2" />
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="text-gray-300 mb-12">
            <p>
              At TaskMaster, we implement the highest standards to ensure the
              security of our users' data. This page details how we protect your
              information.
            </p>
          </div>

          <div className="space-y-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  {measure.icon}
                  <h2 className="text-2xl font-semibold ml-3">
                    {measure.title}
                  </h2>
                </div>
                <p className="text-gray-400 mb-4">{measure.description}</p>
                <div className="bg-[#0A0B14] rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Security Measures:
                  </h3>
                  <ul className="space-y-2">
                    {measure.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaFileAlt className="w-6 h-6 mr-3 text-blue-500" />
                Compliance and Certifications
              </h2>
              <p className="text-gray-400">
                TaskMaster maintains industry-standard security certifications
                and compliance requirements. We regularly undergo independent
                security audits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaHandshake className="w-6 h-6 mr-3 text-green-500" />
                Security Partnerships
              </h2>
              <p className="text-gray-400">
                We continuously improve our systems' security by collaborating
                with security researchers and experts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaExclamationTriangle className="w-6 h-6 mr-3 text-yellow-500" />
                Security Breach Notification
              </h2>
              <p className="text-gray-400">
                In the event of any security vulnerability or breach, we
                immediately notify our users and take necessary measures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">
                For security concerns or questions:
              </p>
              <div className="mt-4 text-gray-400">
                <p>Email: security@taskmaster.com</p>
                <p>Emergency Security Line: +1 (555) 123-0911</p>
                <p>Bug Bounty Program: bounty.taskmaster.com</p>
              </div>
            </div>
          </div>

          <div className="text-gray-300 mb-4">
            TaskMaster&apos;s commitment to security is unwavering.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;
