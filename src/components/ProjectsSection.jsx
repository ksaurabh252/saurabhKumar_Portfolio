/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
      githubLink: 'https://github.com/ksaurabh252/MentorPay',
      deployedLink: 'https://mentorspay.netlify.app/',
      features: [
        'Automated payout calculations with tax deductions',
        'Session management and PDF receipt generation',
        'Audit-ready logs and dashboard modules',
        'Configurable tax settings for admins',
      ],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-12 font-['Poppins'] text-center">Projects</h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.15, type: "spring" }}
            whileHover={{
              y: -5,
              boxShadow: darkMode
                ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
                : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transition-all duration-300`}
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <h3 className="text-2xl font-bold font-['Poppins']">{project.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: darkMode ? '#1E40AF' : '#DBEAFE' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-all ${darkMode
                        ? 'bg-blue-900 hover:bg-blue-800 text-white'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                        }`}
                    >
                      <FiGithub className="mr-2" />Code
                    </motion.a>
                  )}
                  {project.deployedLink && (
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: darkMode ? '#065F46' : '#D1FAE5' }}
                      whileTap={{ scale: 0.95 }}
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-all ${darkMode
                        ? 'bg-teal-900 hover:bg-teal-800 text-white'
                        : 'bg-teal-100 hover:bg-teal-200 text-teal-800'
                        }`}
                    >
                      <FiExternalLink className="mr-2" />Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 font-['Poppins']">Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode
                        ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        } transition-all duration-200`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 font-['Poppins']">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.05 * i, type: "spring" }}
                      className="text-lg"
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

export default ProjectsSection;
