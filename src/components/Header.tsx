"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTimes,
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const formVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 250 : -250,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.15,
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 250 : -250,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleAuthMode = () => {
    const newPage = page === 0 ? 1 : 0;
    const newDirection = page < newPage ? 1 : -1;
    setPage([newPage, newDirection]);
    setIsSignIn(!isSignIn);
  };

  return (
    <header className="bg-[#0A0B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">TaskMaster</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              All Tasks
            </Link>
            <Link
              href="/active"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Active
            </Link>
            <Link
              href="/completed"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Completed
            </Link>
            <Link
              href="/categories"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <motion.button
              onClick={() => {
                setIsSignIn(false);
                setIsModalOpen(true);
                setPage([0, 0]);
              }}
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaUserPlus className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span className="font-medium">Sign Up</span>
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </nav>
        </div>
      </div>

      {/* Auth Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1A1B23] rounded-xl p-8 max-w-md w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={toggleModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={isSignIn ? "signin" : "signup"}
                  custom={isSignIn ? -1 : 1}
                  variants={formVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col gap-4"
                >
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {isSignIn ? "Welcome Back" : "Create Account"}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {isSignIn
                        ? "Sign in to continue managing your tasks"
                        : "Sign up to start organizing your tasks"}
                    </p>
                  </motion.div>

                  <div className="space-y-4 mb-6">
                    {!isSignIn ? (
                      <>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Username"
                            className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          />
                          <div className="absolute left-3 top-3.5 text-gray-400">
                            <FaUser className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          />
                          <div className="absolute left-3 top-3.5 text-gray-400">
                            <FaEnvelope className="w-4 h-4" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Email Address or Username"
                          className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          <FaUser className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-[#2A2B33] text-white rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <div className="absolute left-3 top-3.5 text-gray-400">
                        <FaLock className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg py-3 mb-4 transition-all font-medium shadow-lg hover:shadow-blue-500/25"
                  >
                    {isSignIn ? "Sign In" : "Create Account"}
                  </motion.button>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[#1A1B23] text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-[#2A2B33] hover:bg-[#34353D] text-white rounded-lg py-3 transition-all relative group overflow-hidden"
                    >
                      <FaGoogle className="w-5 h-5 text-red-500" />
                      <span>Google</span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-[#2A2B33] hover:bg-[#34353D] text-white rounded-lg py-3 transition-all relative group overflow-hidden"
                    >
                      <FaFacebook className="w-5 h-5 text-blue-600" />
                      <span>Facebook</span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </div>

                  <motion.p
                    className="text-center text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {isSignIn
                      ? "Don't have an account?"
                      : "Already have an account?"}{" "}
                    <button
                      onClick={toggleAuthMode}
                      className="text-blue-500 hover:text-blue-400 font-medium"
                    >
                      {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
