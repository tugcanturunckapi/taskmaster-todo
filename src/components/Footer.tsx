"use client";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full bg-[#12131C] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              TaskMaster
            </h3>
            <p className="text-gray-400 text-sm">
              Modern and intuitive todo list application to boost your
              productivity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/footer-pages/features"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  All Features
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/features/task-management"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Task Management
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/features/categories"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/features/priority-levels"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Priority Levels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/footer-pages/getting-started/quick-start"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Quick Start
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/getting-started/faqs"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/support/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/support/help-center"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/footer-pages/legal/privacy-policy"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/legal/terms-of-service"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/legal/cookie-policy"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/footer-pages/legal/security"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} TaskMaster. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
