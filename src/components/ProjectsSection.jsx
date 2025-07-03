/**
 * =========================
 * Projects Section Component
 * =========================
 * 
 * A responsive portfolio section that showcases development projects
 * with animated cards, technology stacks, and interactive elements.
 * 
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Current theme state
 * @returns {JSX.Element} Projects section component
 */

// React and animation imports
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = ({ darkMode }) => {
  // =========================
  // Project Data Configuration
  // =========================
  const projects = [
    {
      title: 'HobbyHive',
      description: 'A Backend project for hobby enthusiasts with group management, forum discussions, and real-time chat features.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Google Calendar API', 'Redis'],
      githubLink: 'https://github.com/ksaurabh252/HobbyHive',
      deployedLink: 'https://hobbyhive.onrender.com/',
      features: [
        'Backend APIs for user registration and group management',
        'Real-time group chat with Socket.IO',
        'Google Calendar integration with OAuth2',
        'Gamification system with points and badges',
        'Tested with Jest and Supertest',
      ],
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
        'Prescription management with document uploads',
      ],
    },
    {
      title: 'MentorPay',
      description: 'A mentor session tracking and payout platform with automated calculations and documentation.',
      technologies: ['React', 'Redux Toolkit', 'Radix UI', 'Tailwind CSS'],
      githubLink: 'https://github.com/ksaurabh252/MentorPay', // Fixed: was pointing to MediTrack
      deployedLink: 'https://mentorspay.netlify.app/',
      features: [
        'Automated payout calculations with tax deductions',
        'Session management and PDF receipt generation',
        'Audit-ready logs and dashboard modules',
        'Configurable tax settings for admins',
      ],
    },
  ];

  // =========================
  // Animation Variants
  // =========================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // =========================
  // Utility Functions
  // =========================

  /**
   * Generates dynamic shadow styles based on theme
   * @param {boolean} isDark - Current dark mode state
   * @returns {string} Shadow CSS string
   */
  const getHoverShadow = (isDark) => {
    return isDark
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
  };

  /**
   * Generates theme-based button styles
   * @param {string} type - Button type ('github' | 'demo')
   * @param {boolean} isDark - Current dark mode state
   * @returns {string} CSS classes string
   */
  const getButtonStyles = (type, isDark) => {
    const baseStyles = 'flex items-center px-4 py-2 rounded-lg transition-all';

    if (type === 'github') {
      return `${baseStyles} ${isDark
          ? 'bg-blue-900 hover:bg-blue-800 text-white'
          : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
        }`;
    }

    return `${baseStyles} ${isDark
        ? 'bg-teal-900 hover:bg-teal-800 text-white'
        : 'bg-teal-100 hover:bg-teal-200 text-teal-800'
      }`;
  };

  // =========================
  // Main Component Render
  // =========================
  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      {/* =========================
          Section Header
          Animated title with underline accent
          ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
          }`}>
          Projects
        </h2>

        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`w-20 h-1 mx-auto rounded-full ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
            }`}
        />
      </motion.div>

      {/* =========================
          Projects Grid Container
          Staggered animation for project cards
          ========================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {projects.map((project, index) => (

          /* =========================
             Individual Project Card
             Hover animations and responsive layout
             ========================= */
          <motion.div
            key={`project-${index}`}
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: getHoverShadow(darkMode),
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
          >
            <div className="p-8">

              {/* =========================
                  Project Header Section
                  Title and action buttons
                  ========================= */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">

                {/* Project Title */}
                <h3 className={`text-2xl font-bold font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {project.title}
                </h3>

                {/* Action Buttons Container */}
                <div className="flex flex-wrap gap-3">

                  {/* GitHub Repository Link */}
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getButtonStyles('github', darkMode)}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FiGithub className="mr-2" size={16} />
                      Code
                    </motion.a>
                  )}

                  {/* Live Demo Link */}
                  {project.deployedLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getButtonStyles('demo', darkMode)}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FiExternalLink className="mr-2" size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* =========================
                  Project Description
                  Main project overview text
                  ========================= */}
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {project.description}
              </p>

              {/* =========================
                  Technology Stack Section
                  Interactive technology badges
                  ========================= */}
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Technologies:
                </h4>

                {/* Technology Badges Container */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={`${project.title}-tech-${techIndex}`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default ${darkMode
                          ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* =========================
                  Key Features Section
                  Animated feature list
                  ========================= */}
              <div>
                <h4 className={`text-xl font-semibold mb-3 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Key Features:
                </h4>

                {/* Features List */}
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <motion.li
                      key={`${project.title}-feature-${featureIndex}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + (featureIndex * 0.05),
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
