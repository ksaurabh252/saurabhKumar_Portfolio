/* =========================
   Navbar Component
   Responsive navigation bar with dark mode toggle and mobile menu
   ========================= */
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   Navigation Tabs Configuration
   Array of available navigation sections
   ========================= */
const NAV_TABS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "resume",
];

const Navbar = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  /* =========================
     State Management
     Controls mobile menu visibility
     ========================= */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* =========================
     Navigation Handlers
     Functions to handle navigation and resume download
     ========================= */
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 10;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(sectionId);
    }
  };

  const handleResumeClick = () => {
    const fileUrl = "/saurabhKumar_Portfolio/SaurabhKumar-Resume.pdf";
    window.open(fileUrl, "_blank");
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "SaurabhKumar-Resume.pdf";
    link.click();
  };

  /* =========================
     Click Outside Handler
     Closes mobile menu when clicking outside
     ========================= */
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
    /* =========================
       Header Container
       Animated header with sticky positioning
       ========================= */
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.5 }}
      className={`py-2 ${darkMode
        ? "bg-gray-800 text-white"
        : "bg-white text-gray-900 border-b border-gray-200"
        } shadow-md sticky top-0 z-30`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo/Brand Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-3xl font-bold font-['Poppins'] ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
            Sau
          </span>
          <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            rabh
          </span>
        </motion.h1>

        {/* Navigation Controls Container */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode((prev) => !prev)}
            className={`px-2 py-1 rounded-lg transition-all hover:cursor-pointer duration-300 ${darkMode
              ? "bg-teal-700 hover:bg-teal-600 text-white"
              : "bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-300"
              }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`mobile-menu-button md:hidden p-1.5 rounded-md focus:outline-none hover:cursor-pointer ${darkMode
              ? "text-white hover:bg-gray-700"
              : "text-gray-900 hover:bg-gray-100"
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
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
              <svg
                className="w-5 h-5"
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

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-4">
            {NAV_TABS.map((tab) =>
              tab === "resume" ? (
                <motion.a
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeClick}
                  className={`text-xl capitalize transition-colors duration-200 font-semibold hover:cursor-pointer nav-link resume ${darkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  Resume
                </motion.a>
              ) : (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(tab)}
                  className={`text-xl capitalize transition-colors duration-200 hover:cursor-pointer nav-link ${activeTab === tab
                    ? darkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : darkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {tab}
                </motion.button>
              )
            )}
          </nav>
        </div>
      </div>

      {/* =========================
          Mobile Menu
          Animated dropdown for mobile navigation
          ========================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`mobile-menu-container md:hidden ${darkMode
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900 border-t border-gray-200"
              } shadow-lg fixed top-14 left-0 w-full z-40`}
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              {NAV_TABS.map((tab) =>
                tab === "resume" ? (
                  <motion.a
                    key={tab}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleResumeClick}
                    download="SaurabhKumar-Resume.pdf"
                    className={`py-2 text-left text-sm capitalize transition-colors font-semibold hover:cursor-pointer nav-link resume ${darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                      }`}
                  >
                    Resume
                  </motion.a>
                ) : (
                  <motion.button
                    key={tab}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleNavClick(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 text-left 
                      text-sm uppercase tracking-wider
                         hover:cursor-pointer transition-colors nav-link ${activeTab === tab
                        ? darkMode
                          ? "text-blue-400 font-semibold"
                          : "text-blue-600 font-semibold"
                        : darkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-gray-900"
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
