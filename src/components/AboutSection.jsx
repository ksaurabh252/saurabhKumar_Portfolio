/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';

const AboutSection = ({ darkMode }) => (
  <section className="mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/3">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`w-72 h-72 rounded-full overflow-hidden mx-auto ${darkMode ? 'ring-4 ring-teal-500' : 'ring-4 ring-blue-600'} shadow-xl`}
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
        className="md:w-2/3 space-y-6"
      >
        <h2 className="text-4xl font-bold font-['Poppins'] mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Accomplished full stack web developer skilled in the MERN stack, SQL, Git, and Tailwind CSS. Excels in both independent and collaborative projects. Adapt at problem-solving, effective communication, and delivering high-quality, scalable web solutions. Committed to continuous learning and best development practices.
        </p>
        <motion.div
          whileHover={{ y: -3 }}
          className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} transition-all duration-300`}
        >
          <h3 className="text-2xl font-semibold mb-4 font-['Poppins']">Education</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-3"></span>
              <div>
                <span className="font-medium">Masai, Bengaluru</span> - Software Development (Present)
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-3"></span>
              <div>
                <span className="font-medium">Indira Gandhi National Open University</span> - Master of Computer Application (Dec 2023)
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-1.5 mr-3"></span>
              <div>
                <span className="font-medium">Gaya College, Gaya</span> - Bachelor Of Science in Information Technology (Oct 2018)
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default AboutSection;
