import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactSection from './components/ContactSection';

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === 'home' && <Home darkMode={darkMode} />}
            {activeTab === 'about' && <About darkMode={darkMode} />}
            {activeTab === 'skills' && <SkillsSection darkMode={darkMode} />}
            {activeTab === 'projects' && <ProjectsSection darkMode={darkMode} />}
            {activeTab === 'experience' && <ExperienceSection darkMode={darkMode} />}
            {activeTab === 'contact' && <ContactSection darkMode={darkMode} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer darkMode={darkMode} isMounted={isMounted} />
    </div>
  );
};

export default App;
