import { useState, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

// Navigation tabs for the navbar
const NAV_TABS = ["about", "skills", "projects", "experience", "resume"];

const Navbar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handles opening and downloading the resume PDF
  const handleResumeClick = () => {
    const fileUrl = "/saurabhKumar_Portfolio/SaurabhKumar-Resume.pdf";

    // Open resume in a new tab
    window.open(fileUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SaurabhKumar-Resume.pdf";
    link.click();
  };

  // Closes mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.5 }}
      className={`py-6 ${darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md sticky top-0 z-30`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Site Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold font-['Poppins']"
        >
          Saurabh Kumar
        </motion.h1>
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode((prev) => !prev)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${darkMode
              ? "bg-teal-700 hover:cursor-pointer hover:bg-teal-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </motion.button>
          {/* Mobile menu toggle button */}
          <button
            className="mobile-menu-button md:hidden p-2 rounded-md focus:outline-none hover:cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_TABS.map((tab) =>
              tab === "resume" ? (
                // Resume tab: triggers resume open/download
                <motion.a
                  key={tab}
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeClick}
                  className="text-lg capitalize transition-colors duration-200 hover:text-blue-400 font-semibold hover:cursor-pointer"
                >
                  Resume
                </motion.a>
              ) : (
                // Other tabs: set active tab
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg capitalize transition-colors duration-200 hover:cursor-pointer ${activeTab === tab
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-400"
                    }`}
                >
                  {tab}
                </motion.button>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`mobile-menu-container md:hidden ${darkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg fixed top-16 left-0 w-full z-40`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {NAV_TABS.map((tab) =>
                tab === "resume" ? (
                  // Resume tab in mobile menu
                  <motion.a
                    key={tab}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleResumeClick}
                    download="SaurabhKumar-Resume.pdf"
                    className="py-3 text-left text-lg capitalize transition-colors text-blue-500 font-semibold hover:cursor-pointer "
                  >
                    Resume
                  </motion.a>
                ) : (
                  // Other tabs in mobile menu
                  <motion.button
                    key={tab}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-3 text-left text-lg capitalize hover:cursor-pointer transition-colors ${activeTab === tab
                      ? "text-blue-500 font-semibold"
                      : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-700 hover:text-black"
                      }`}
                  >
                    {tab}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
