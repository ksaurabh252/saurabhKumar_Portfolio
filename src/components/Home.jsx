// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFileDownload, FaReact } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import saurabhPhoto from '../assets/Saurabh_Kumar.jpg';

const Home = ({ darkMode }) => {
  // =========================
  // State for animated typing effect
  // =========================
  const [displayText, setDisplayText] = useState('');
  const fullText = "Saurabh Kumar";
  const tagline = "MERN Stack Developer";
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  // =========================
  // Typing animation effect
  // =========================
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        setTaglineVisible(true);
        setTimeout(() => setButtonsVisible(true), 500);
      }
    }, 150);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] gap-8 px-4 py-12 max-w-7xl mx-auto">

      {/* =========================
          Text & Intro Section
          ========================= */}
      <div className="md:w-1/2 space-y-8 flex flex-col items-center md:items-start">
        <div className="text-center md:text-left max-w-2xl">

          {/* =========================
              Animated Heading
              ========================= */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-6xl font-bold mb-2 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Hi, I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          {/* =========================
              Tagline Animation
              ========================= */}
          <AnimatePresence>
            {taglineVisible && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5, type: "spring", stiffness: 100 } }}
                className={`text-2xl md:text-3xl mb-6 font-['Poppins'] ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <span className="relative inline-block">
                  <span className={darkMode ? 'text-teal-500' : 'text-teal-600'}>
                    {/* Letter-by-letter animation */}
                    {tagline.split('').map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.5 + (i * 0.03),
                            type: "spring",
                            stiffness: 300
                          }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: 1,
                      transition: {
                        delay: 0.5 + (tagline.length * 0.03) + 0.3,
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    className={`absolute bottom-0 left-0 w-full h-1 transform origin-left ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}`}
                  />
                </span>
              </motion.h2>
            )}
          </AnimatePresence>

          {/* =========================
              Description Paragraph
              ========================= */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.8 } }}
            className={`text-lg md:text-xl mb-8 leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
          >
            Building modern web applications with React, Node.js, and MongoDB. Passionate about creating efficient, scalable solutions with clean code.
          </motion.p>
        </div>

        {/* =========================
            Buttons Section (CV + Projects)
            ========================= */}
        <AnimatePresence>
          {buttonsVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.8 } }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {/* View My Work Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ksaurabh252"
                target='_blank'
                className={`px-6 py-3 rounded-lg font-semibold flex items-center text-white transition-all shadow-lg ${darkMode ? 'bg-teal-600 hover:bg-teal-700 shadow-teal-500/25' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25'}`}
              >
                View My Work
              </motion.a>

              {/* Download CV Button */}
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white shadow-gray-700/25' : 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-800/25'}`}
              >
                <FaFileDownload /> Download CV
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================
            Social Links Container
            Animated flex container for social media icons
            ========================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.0 } }}
          className="flex gap-4 justify-center md:justify-start mt-8"
        >
          {[
            {
              icon: <FaGithub size={24} />,
              url: "https://github.com/ksaurabh252"
            },
            {
              icon: <FaLinkedin size={24} />,
              url: "https://www.linkedin.com/in/ksaurabh252/"
            },
            {
              icon: <HiOutlineMail size={24} />,
              url: "mailto:ksaurabh252@gmail.com"
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full transition-colors shadow-lg ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-gray-800/25' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-gray-500/20 border border-gray-300'}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* =========================
          Profile Image Section
          ========================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 1.5, type: "spring", stiffness: 100, damping: 10 } }}
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group home-img ${darkMode ? 'ring-4 ring-teal-500' : 'ring-4 ring-blue-600'}`}>
          {/* Profile Image */}
          <img
            src={saurabhPhoto}
            alt="Saurabh Kumar"
            loading="lazy"
            width="320"
            height="320"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* React Logo Badge */}
          <motion.div
            className={`absolute -bottom-4 -right-4 p-2 rounded-full shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 2.0 } }}
            whileHover={{ rotate: 15 }}
          >
            <FaReact className="text-blue-500 text-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
