
import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiMail, FiLinkedin, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? darkMode ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : darkMode ? 'bg-slate-900' : 'bg-white'
          }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SK
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-medium transition-colors ${activeSection === item.id
                    ? 'text-blue-600'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                <FiDownload className="inline mr-2" />
                Resume
              </motion.button>
              <button
                onClick={toggleDarkMode}
                className={`ml-4 p-2 rounded-lg ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 dark:border-gray-700"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === item.id
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20'
                        : ''
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {activeSection === 'home' && <HeroSection darkMode={darkMode} />}
        {activeSection === 'about' && <AboutSection darkMode={darkMode} />}
        {activeSection === 'skills' && <SkillsSection darkMode={darkMode} />}
        {activeSection === 'projects' && <ProjectsSection darkMode={darkMode} />}
        {activeSection === 'experience' && <ExperienceSection darkMode={darkMode} />}
        {activeSection === 'contact' && <ContactSection darkMode={darkMode} />}
      </main>

      {/* Footer */}
      <footer className={`py-12 mt-24 ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Saurabh Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Hero Section
const HeroSection = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Saurabh Kumar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Full Stack Developer | MERN Stack Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}
          >
            Crafting scalable web solutions with modern technologies and best practices.
            Passionate about creating exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-8 py-3 rounded-lg font-medium border-2 ${darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a href="https://github.com/ksaurabh252" target="_blank" rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors`}>
              <FiGithub size={24} />
            </a>
            <a href="mailto:ksaurabh252@gmail.com"
              className={`p-3 rounded-full ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors`}>
              <FiMail size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className={`p-3 rounded-full ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'} transition-colors`}>
              <FiLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Updated About Section
const AboutSection = ({ darkMode }) => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://avatars.githubusercontent.com/u/G200584954"
                  alt="Saurabh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate full stack developer with expertise in the MERN stack and a strong foundation
              in computer science. With a Master's degree in Computer Applications and hands-on experience
              in building scalable web applications, I bring both technical proficiency and creative
              problem-solving to every project.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              {[
                { degree: "Software Development", school: "Masai, Bengaluru", date: "Present" },
                { degree: "Master of Computer Application", school: "IGNOU", date: "Dec 2023" },
                { degree: "B.Sc. Information Technology", school: "Gaya College", date: "Oct 2018" }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-md`}
                >
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.school} • {edu.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Updated Skills Section
const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'MySQL', icon: <FaDatabase />, color: 'text-blue-600' },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
      ]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Attention to Detail'].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full font-medium ${darkMode
                  ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-700'
                  : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200'
                  }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Updated Projects Section
const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: 'HobbyHive',
      tagline: 'Connect Through Shared Interests',
      description: 'A comprehensive platform for hobby enthusiasts featuring group management, forum discussions, and real-time chat capabilities.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Redis'],
      githubLink: 'https://github.com/ksaurabh252/HobbyHive',
      deployedLink: 'https://hobbyhive.onrender.com/',
      highlights: [
        'Real-time chat with Socket.IO',
        'Google Calendar integration',
        'Gamification system',
        '95% test coverage'
      ]
    },
    {
      title: 'MediTrack',
      tagline: 'Smart Medication Management',
      description: 'An intelligent medication management application with AI-powered assistance and automated reminder system.',
      technologies: ['React', 'Redux', 'Firebase', 'Google Gemini API'],
      githubLink: 'https://github.com/ksaurabh252/MediTrack',
      deployedLink: 'https://meditrack-medicine.netlify.app/',
      highlights: [
        'AI health assistant',
        'Smart notifications',
        'Prescription management',
        'Secure authentication'
      ]
    },
    {
      title: 'MentorPay',
      tagline: 'Streamlined Payment Processing',
      description: 'Automated mentor session tracking and payout platform with comprehensive reporting and documentation.',
      technologies: ['React', 'Redux Toolkit', 'Radix UI', 'PDF Generation'],
      githubLink: 'https://github.com/ksaurabh252/MentorPay',
      deployedLink: 'https://mentorspay.netlify.app/',
      highlights: [
        'Automated calculations',
        'PDF receipt generation',
        'Tax configuration',
        'Audit-ready logs'
      ]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-xl`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{project.tagline}</p>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                      <FiGithub /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg flex items-center gap-2"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  </div>
                </div>

                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-slate-700' : 'bg-gray-100'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Updated Experience Section
const ExperienceSection = ({ darkMode }) => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-2xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-xl p-8 md:p-10`}
        >
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 hidden md:block"></div>

          <div className="md:pl-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold">Chief Invigilator</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">C-DAC ATC, BYTES</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-slate-700' : 'bg-gray-100'
                }`}>
                Oct 2019 - Sep 2024
              </span>
            </div>

            <ul className="space-y-3">
              {[
                'Managed Linux-based exam servers ensuring 99.9% uptime for secure assessments',
                'Led a team of 5+ members, providing technical support and troubleshooting',
                'Implemented security protocols that reduced exam integrity incidents by 40%',
                'Optimized server performance resulting in 30% faster exam load times'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-600 mt-1.5">▸</span>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({ darkMode }) => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          I'm always interested in hearing about new opportunities and exciting projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="mailto:ksaurabh252@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
          >
            <FiMail /> ksaurabh252@gmail.com
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/ksaurabh252"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <FiGithub size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;
