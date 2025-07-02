/* =========================
   Projects Section Component
   Displays portfolio projects with animations and interactive elements
   ========================= */
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = ({ darkMode }) => {
  /* =========================
     Project Data
     Array of project objects containing details and features
     ========================= */
  const projects = [
    {
      title: 'HobbyHive',
      description: 'A platform for hobby enthusiasts with group management, forum discussions, and real-time chat features.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Google Calendar API', 'Redis'],
      githubLink: 'https://github.com/yourusername/hobbyhive',
      deployedLink: 'https://hobbyhive.com',
      features: [
        'Backend APIs for user registration and group management',
        'Real-time group chat with Socket.IO',
        'Google Calendar integration with OAuth2',
        'Gamification system with points and badges',
        'Tested with Jest and Supertest',
      ],
    },
    // ... other projects
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* =========================
          Section Header
          Animated title with underline
          ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
          }`}>
          Projects
        </h2>
        <div className={`w-20 h-1 mx-auto rounded-full ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
          }`} />
      </motion.div>

      {/* =========================
          Projects Grid Container
          Maps through projects array to create individual cards
          ========================= */}
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
            className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
          >
            {/* Project Card Content */}
            <div className="p-8">
              {/* Project Header - Title and Links */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <h3 className={`text-2xl font-bold font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {project.title}
                </h3>

                {/* Project Links - GitHub and Live Demo */}
                <div className="flex flex-wrap gap-3">
                  {/* GitHub Link Button */}
                  {project.githubLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
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

                  {/* Live Demo Link Button */}
                  {project.deployedLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
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

              {/* Project Description */}
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {project.description}
              </p>

              {/* Technologies Section */}
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${darkMode
                          ? 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className={`text-xl font-semibold mb-3 font-['Poppins'] ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.05 * i, type: "spring" }}
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
      </div>
    </div>
  );
};

export default ProjectsSection;
