import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            Saurabh Kumar
          </motion.h1>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`px-3 py-1 rounded-md ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} hover:cursor-pointer`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </motion.button>
            <nav className="hidden md:flex space-x-6">
              {['about', 'skills', 'projects', 'experience'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize hover:text-blue-500 cursor-pointer ${activeTab === tab ? 'text-blue-500 font-medium' : ''}`}
                >
                  {tab}
                </motion.button>
              ))}
            </nav>

          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === 'about' && <AboutSection darkMode={darkMode} />}
            {activeTab === 'skills' && <SkillsSection darkMode={darkMode} />}
            {activeTab === 'projects' && <ProjectsSection darkMode={darkMode} />}
            {activeTab === 'experience' && <ExperienceSection darkMode={darkMode} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ delay: 0.4 }}
        className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-12`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex justify-center space-x-6 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/ksaurabh252"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:ksaurabh252@gmail.com"
              className="hover:text-blue-500"
            >
              <FiMail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FiLinkedin size={24} />
            </motion.a>
          </motion.div>
          <p>&copy; {new Date().getFullYear()} Saurabh Kumar. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

const AboutSection = ({ darkMode }) => {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`w-64 h-64 rounded-full overflow-hidden mx-auto ${darkMode ? 'ring-2 ring-blue-400' : 'ring-2 ring-blue-600'}`}
          >
            <img
              src="https://avatars.githubusercontent.com/u/G200584954"
              alt="Saurabh Kumar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:w-2/3"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Accomplished full stack web developer skilled in the MERN stack, SQL, Git, and Tailwind CSS.
            Excels in both independent and collaborative projects. Adapt at problem-solving, effective communication,
            and delivering high-quality, scalable web solutions. Committed to continuous learning and best development practices.
          </p>
          <motion.div
            whileHover={{ y: -2 }}
            className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}
          >
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Masai, Bengaluru</span> - Software Development (Present)
              </li>
              <li>
                <span className="font-medium">Indira Gandhi National Open University</span> - Master of Computer Application (Dec 2023)
              </li>
              <li>
                <span className="font-medium">Gaya College, Gaya</span> - Bachelor Of Science in Information Technology (Oct 2018)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillsSection = ({ darkMode }) => {
  const technicalSkills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={24} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={24} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" size={24} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={24} /> },
    { name: 'MySQL', icon: <FaDatabase className="text-blue-600" size={24} /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" size={24} /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
    { name: 'HTML5', icon: <FaCss3Alt className="text-orange-500" size={24} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={24} /> },
  ];

  const softSkills = [
    'Attention to Detail', 'Adaptability', 'Time Management',
    'Teamwork', 'Effective Communication', 'Problem Solving'
  ];

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md transition-colors`}
            >
              <motion.div whileHover={{ rotate: 10 }}>
                {skill.icon}
              </motion.div>
              <span className="mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} font-medium`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: 'HobbyHive',
      description: 'A platform for hobby enthusiasts with group management, forum discussions, and real-time chat features.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Google Calendar API', 'Redis'],
      githubLink: 'https://github.com/ksaurabh252/HobbyHive',
      deployedLink: 'https://hobbyhive.onrender.com/',
      features: [
        'Backend APIs for user registration and group management',
        'Real-time group chat with Socket.IO',
        'Google Calendar integration with OAuth2',
        'Gamification system with points and badges',
        'Tested with Jest and Supertest'
      ]
    },
    {
      title: 'MediTrack',
      description: 'A medication management web app with reminders, AI assistant, and prescription management.',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase', 'Google Gemini API'],
      githubLink: 'https://github.com/ksaurabh252/MediTrack',
      deployedLink: 'https://meditrack-medicine.netlify.app/',
      features: [
        'CRUD functionality for medications',
        'Secure authentication with Firebase',
        'Interactive reminder system with notifications',
        'AI assistant with Google Gemini API',
        'Prescription management with document uploads'
      ]
    },
    {
      title: 'MentorPay',
      description: 'A mentor session tracking and payout platform with automated calculations and documentation.',
      technologies: ['React', 'Redux Toolkit', 'Radix UI', 'Tailwind CSS'],
      githubLink: 'https://github.com/ksaurabh252/MentorPay',
      deployedLink: 'https://mentorspay.netlify.app/',
      features: [
        'Automated payout calculations with tax deductions',
        'Session management and PDF receipt generation',
        'Audit-ready logs and dashboard modules',
        'Configurable tax settings for admins'
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-1 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      <FiGithub className="mr-1" /> Code
                    </motion.a>
                  )}
                  {project.deployedLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-1 rounded ${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      position: 'Chief Invigilator',
      company: 'C-DAC ATC, BYTES',
      duration: 'Oct 2019 - Sep 2024',
      responsibilities: [
        'Managed Linux-based exam servers to ensure secure and reliable assessments',
        'Maintained candidate authentication and monitored exam logins for integrity',
        'Provided technical support to team members in a fast-paced environment',
        'Resolved server and connectivity issues to minimize exam disruptions'
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
              </div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-sm mt-2 md:mt-0 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
              >
                {exp.duration}
              </motion.span>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default App;