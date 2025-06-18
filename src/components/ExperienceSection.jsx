/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

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
        'Resolved server and connectivity issues to minimize exam disruptions',
      ],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-12 font-['Poppins'] text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.15, type: "spring" }}
            whileHover={{
              scale: 1.01,
              boxShadow: darkMode
                ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
                : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold font-['Poppins'] mb-1">{exp.position}</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
              </div>
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: darkMode ? '#065F46' : '#A7F3D0' }}
                className={`px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0 ${darkMode ? 'bg-teal-900 text-teal-100' : 'bg-teal-200 text-teal-900'} transition-colors duration-200`}
              >
                {exp.duration}
              </motion.span>
            </div>
            <ul className="list-disc pl-5 space-y-3">
              {exp.responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                  className="text-lg"
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

export default ExperienceSection;
