"use client";

import { motion } from "framer-motion";
import {
  FaCookie,
  FaShieldAlt,
  FaCog,
  FaQuestionCircle,
  FaToggleOn,
} from "react-icons/fa";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: <FaShieldAlt className="w-6 h-6 text-green-500" />,
      description:
        "These are the basic cookies required for the website to function properly. Without these cookies, our website cannot work correctly.",
      examples: [
        "Session management",
        "Security verifications",
        "Basic site functions",
      ],
    },
    {
      title: "Performance Cookies",
      icon: <FaCog className="w-6 h-6 text-blue-500" />,
      description:
        "These cookies are used to improve the performance and user experience of our site.",
      examples: [
        "Page loading times",
        "Site traffic analysis",
        "User behavior tracking",
      ],
    },
    {
      title: "Functionality Cookies",
      icon: <FaToggleOn className="w-6 h-6 text-purple-500" />,
      description:
        "These cookies allow us to remember your preferences and provide you with a personalized experience.",
      examples: ["Language preferences", "Theme selections", "User settings"],
    },
    {
      title: "Targeting/Advertising Cookies",
      icon: <FaQuestionCircle className="w-6 h-6 text-yellow-500" />,
      description:
        "These cookies are used to show you personalized ads and manage marketing activities.",
      examples: [
        "Ad preferences",
        "Marketing analytics",
        "Campaign effectiveness",
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
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-400">
            Learn about how we use cookies at TaskMaster
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="flex items-center mb-8 text-gray-400">
            <FaCookie className="w-5 h-5 mr-2" />
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="text-gray-300 mb-12">
            <p>
              This cookie policy explains how cookies are used on the TaskMaster
              website. By using our site, you accept our use of cookies.
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-[#1A1B23] rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h2 className="text-2xl font-semibold ml-3">{type.title}</h2>
                </div>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <div className="bg-[#0A0B14] rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Examples:</h3>
                  <ul className="space-y-2">
                    {type.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cookie Management</h2>
              <p className="text-gray-400">
                You can manage or delete cookies through your browser settings.
                However, please note that disabling cookies may affect some
                website features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-400">
                In some cases, we may use cookies from third-party service
                providers. These cookies are used to improve our service
                quality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Cookie Policy Changes
              </h2>
              <p className="text-gray-400">
                We may update this policy from time to time. We will notify you
                of any significant changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-400">
                For questions about our cookie policy:
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

export default CookiePolicy;
