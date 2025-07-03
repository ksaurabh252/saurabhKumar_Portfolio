/* =========================
   About Section Component
   Displays personal information and educational background
   ========================= */
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutSection = ({ darkMode }) => (
  /* =========================
     Main Container
     Full-width section with max-width constraint
     ========================= */
  <section className="w-full max-w-4xl mx-auto px-4">
    {/* Animated Content Container */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto px-4"
    >
      <div className="space-y-8">
        {/* =========================
            About Me Section
            Personal introduction and skills overview
            ========================= */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }} className="text-center mb-12"
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-bold font-['Poppins'] mb-6 text-center  ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto mb-3 rounded-full ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
            }`} />
          <p className={`text-lg leading-relaxed text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Accomplished full stack web developer skilled in the MERN stack, SQL, Git, and Tailwind CSS.
            Excels in both independent and collaborative projects. Adapt at problem-solving, effective
            communication, and delivering high-quality, scalable web solutions. Committed to continuous
            learning and best development practices.
          </p>
        </motion.div>

        {/* =========================
            Education Section
            Animated card with educational background
            ========================= */}
        <motion.div
          whileHover={{ y: -3 }}
          className={`p-8 rounded-2xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
            }`}
        >
          <h3 className={`text-2xl font-semibold mb-6 font-['Poppins'] text-center ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Education
          </h3>

          {/* Education Timeline List */}
          <ul className="space-y-4">
            {/* Current Education */}
            <li className="flex items-start">
              <span className={`inline-block w-4 h-4 rounded-full mt-1 mr-3 ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
                }`}></span>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <span className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Masai, Bengaluru
                </span> - Software Development (Present)
              </div>
            </li>

            {/* Master's Degree */}
            <li className="flex items-start">
              <span className={`inline-block w-4 h-4 rounded-full mt-1 mr-3 ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
                }`}></span>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <span className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Indira Gandhi National Open University
                </span> - Master of Computer Application (Dec 2023)
              </div>
            </li>

            {/* Bachelor's Degree */}
            <li className="flex items-start">
              <span className={`inline-block w-4 h-4 rounded-full mt-1 mr-3 ${darkMode ? 'bg-teal-500' : 'bg-blue-600'
                }`}></span>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <span className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  Gaya College, Gaya
                </span> - Bachelor Of Science in Information Technology (Oct 2018)
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
