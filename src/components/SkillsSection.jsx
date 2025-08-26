/* =========================
   Skills Section Component
   Displays technical skills, soft skills, and development journey
   ========================= */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCss3Alt,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiRedis,
  SiNextdotjs,
} from "react-icons/si";

const SkillsSection = ({ darkMode }) => {
  /* =========================
     Skill Categories Data
     Organized by frontend, backend, database, and tools
     ========================= */
  const skillCategories = {
    frontend: [
      // Core Tools First
      {
        name: "React",
        icon: <FaReact className="text-blue-500" size={24} />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-600" size={24} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" size={24} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" size={24} />,
      },
      // Styling and Markup
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" size={24} />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500" size={24} />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" size={24} />,
      },
      // Last learned tech
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black" size={24} />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600" size={24} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-600" size={24} />,
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" size={24} />,
      },
      {
        name: "MySQL",
        icon: <FaDatabase className="text-blue-600" size={24} />,
      },
      {
        name: "Redis",
        icon: <SiRedis className="text-red-600" size={24} />,
      },
    ],
    tools: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-600" size={24} />,
      },
    ],
  };

  /* =========================
     Soft Skills Array
     Professional and interpersonal capabilities
     ========================= */
  const softSkills = [
    "Quick Learning",
    "Team Collaboration",
    "Problem Solving",
    "Code Documentation",
    "Agile Methodology",
    "Time Management",
    "Communication Skills",
    "Adaptability",
  ];

  /* =========================
     Utility Functions
     Helper functions for styling and content
     ========================= */
  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return darkMode ? "text-blue-400" : "text-blue-600";
      case "Intermediate":
        return darkMode ? "text-green-400" : "text-green-600";
      case "Beginner":
        return darkMode ? "text-yellow-400" : "text-orange-600";
      default:
        return darkMode ? "text-gray-400" : "text-gray-600";
    }
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case "frontend":
        return "🎨 Frontend Development";
      case "backend":
        return "⚙️ Backend Development";
      case "database":
        return "🗄️ Database & Caching";
      case "tools":
        return "🛠️ Development Tools";
      default:
        return category;
    }
  };

  const getCategoryDescription = (category) => {
    switch (category) {
      case "frontend":
        return "Building responsive and interactive user interfaces";
      case "backend":
        return "Server-side development and API creation";
      case "database":
        return "Data storage, management, and caching solutions";
      case "tools":
        return "Version control and development workflow";
      default:
        return "";
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* =========================
            Section Header
            Title and description
            ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 font-['Poppins'] ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Skills & Technologies
          </h2>
          <div
            className={`w-20 h-1 mx-auto rounded-full mb-4 ${darkMode ? "bg-teal-500" : "bg-blue-600"
              }`}
          />
          <p
            className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Passionate about full-stack development and building innovative web
            solutions
          </p>
        </motion.div>

        {/* =========================
            Technical Skills Grid
            Displays skills by category
            ========================= */}
        <div className="mb-12 space-y-12">
          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (
              <div key={category}>
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="mb-6"
                >
                  <h3
                    className={`text-2xl font-semibold mb-2 font-['Poppins'] ${darkMode ? "text-white" : "text-gray-800"
                      }`}
                  >
                    {getCategoryTitle(category)}
                  </h3>
                  <p
                    className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {getCategoryDescription(category)}
                  </p>
                </motion.div>

                {/* Skills Grid with Responsive Layout */}
                <div
                  className={`grid gap-4 ${category === "frontend"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
                    : category === "backend"
                      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                      : category === "database"
                        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
                        : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    }`}
                >
                  {/* Individual Skill Cards */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + 0.1 + index * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      className={`group p-4 rounded-xl border transition-all duration-300 ${darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600"
                        : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg"
                        }`}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className="p-2 rounded-lg bg-opacity-10"
                        >
                          {skill.icon}
                        </motion.div>
                        <h4
                          className={`font-medium text-sm ${darkMode ? "text-gray-200" : "text-gray-900"
                            }`}
                        >
                          {skill.name}
                        </h4>
                        <span
                          className={`text-xs font-medium ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* =========================
            Soft Skills Section
            Professional capabilities
            ========================= */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className={`text-2xl font-semibold mb-6 font-['Poppins'] ${darkMode ? "text-white" : "text-gray-800"
              }`}
          >
            💼 Professional Skills
          </motion.h3>
          <p
            className={`text-sm mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Core competencies that drive effective collaboration and project
            success
          </p>

          {/* Soft Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.05,
                  duration: 0.3,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`p-4 rounded-lg border text-center transition-all duration-300 ${darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                  : "bg-gray-50 border-gray-200 hover:bg-white hover:shadow-md"
                  }`}
              >
                <span
                  className={`font-medium text-sm ${darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            Development Journey
            Progress metrics and quote
            ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className={`p-6 rounded-xl border ${darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
            }`}
        >
          <h3
            className={`text-xl font-semibold mb-6 text-center ${darkMode ? "text-white" : "text-gray-800"
              }`}
          >
            My Development Journey
          </h3>

          {/* Journey Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div
                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-teal-500/20" : "bg-blue-100"
                  }`}
              >
                <FaCode
                  className={`text-xl ${darkMode ? "text-teal-400" : "text-blue-600"
                    }`}
                />
              </div>
              <h4
                className={`text-lg font-bold ${darkMode ? "text-teal-400" : "text-blue-600"
                  }`}
              >
                8+
              </h4>
              <p
                className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Personal Projects
              </p>
            </div>

            <div className="space-y-2">
              <div
                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? "bg-teal-500/20" : "bg-blue-100"
                  }`}
              >
                <FaLaptopCode
                  className={`text-xl ${darkMode ? "text-teal-400" : "text-blue-600"
                    }`}
                />
              </div>
              <h4
                className={`text-lg font-bold ${darkMode ? "text-teal-400" : "text-blue-600"
                  }`}
              >
                500+
              </h4>
              <p
                className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Hours of Practice
              </p>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div
            className={`mt-6 text-center ${darkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            <p className="text-sm italic">
              "Continuously learning and building projects to master full-stack
              development"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
