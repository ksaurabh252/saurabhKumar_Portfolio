/* =========================
   Footer Component
   Displays social links and copyright information
   Includes animated elements and dark mode support
   ========================= */

/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

/* =========================
   Footer Component Definition
   Props:
   - darkMode: boolean for theme switching
   - isMounted: boolean for mount animation control
   ========================= */
const Footer = ({ darkMode, isMounted }) => (
  /* =========================
     Footer Container
     Animated footer with theme-aware styling
     ========================= */
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: isMounted ? 1 : 0 }}
    transition={{ delay: 0.4 }}
    className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-4`}
  >
    <div className="container mx-auto px-4 text-center">
      {/* =========================
          Social Links Container
          Animated flex container for social media icons
          ========================= */}
      <motion.div
        className="flex justify-center space-x-6 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, staggerChildren: 0.1 }}
      >
        {/* GitHub Link */}
        <motion.a
          whileHover={{ y: -3, scale: 1.1, color: darkMode ? '#3B82F6' : '#2563EB' }}
          href="https://github.com/ksaurabh252"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-200`}
        >
          <FiGithub />
        </motion.a>

        {/* Email Link */}
        <motion.a
          whileHover={{ y: -3, scale: 1.1, color: darkMode ? '#3B82F6' : '#2563EB' }}
          href="mailto:ksaurabh252@gmail.com"
          className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-200`}
        >
          <FiMail />
        </motion.a>

        {/* LinkedIn Link */}
        <motion.a
          whileHover={{ y: -3, scale: 1.1, color: darkMode ? '#3B82F6' : '#2563EB' }}
          href="https://www.linkedin.com/in/ksaurabh252/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'
            } transition-colors duration-200`}
        >
          <FiLinkedin />
        </motion.a>
      </motion.div>

      {/* =========================
          Copyright Text
          Dynamic year display with theme-aware styling
          ========================= */}
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        &copy;{new Date().getFullYear()} Saurabh Kumar. All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
