/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si';

const SkillsSection = ({ darkMode }) => {
  const technicalSkills = [
    { name: 'React', icon: <FaReact className="text-blue-500" size={28} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={28} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={28} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={28} /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" size={28} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={28} /> },
    { name: 'MySQL', icon: <FaDatabase className="text-blue-600" size={28} /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" size={28} /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={28} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={28} /> },
    { name: 'HTML5', icon: <FaCss3Alt className="text-orange-500" size={28} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={28} /> },
  ];
  const softSkills = [
    'Attention to Detail',
    'Adaptability',
    'Time Management',
    'Teamwork',
    'Effective Communication',
    'Problem Solving',
  ];

  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold mb-12 font-['Poppins'] text-center"
      >
        Skills
      </motion.h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 font-['Poppins']">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: darkMode
                  ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              className={`flex flex-col items-center p-6 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } shadow-md transition-all duration-300 cursor-default`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>
              <span className="mt-3 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-6 font-['Poppins']">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-5 py-3 rounded-full text-sm font-medium ${darkMode
                ? 'bg-teal-900 text-teal-100 hover:bg-teal-800'
                : 'bg-teal-100 text-teal-900 hover:bg-teal-200'
                } transition-colors duration-200`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
