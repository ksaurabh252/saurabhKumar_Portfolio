/* =========================
   Projects Section Component
   Displays Different types of projects with features
   ========================= */
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import mediTrack from "../assets/mediTrack.png";
import mentor1 from "../assets/mentor1.png";
import hobbyHive from "../assets/hobbyHive.png";
import whistleSpace from "../assets/WhistleSpace.png";
import PulseCRM from "../assets/PulseCRM.png";
/* =========================
   ProjectButton Component
   Reusable button for project links with theme support
   ========================= */
// eslint-disable-next-line no-unused-vars
const ProjectButton = ({ href, label, icon: Icon, darkMode, type }) => {
  /* Theme-aware button styles */
  const styles = {
    code: darkMode
      ? "bg-blue-900/30 text-blue-300 hover:bg-blue-800/50"
      : "bg-blue-100 text-blue-800 hover:bg-blue-200",
    live: darkMode
      ? "bg-teal-900/30 text-teal-300 hover:bg-teal-800/50"
      : "bg-teal-100 text-teal-800 hover:bg-teal-200",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${styles[type]}`}
    >
      <Icon className="mr-2" /> {label}
    </a>
  );
};

/* =========================
   ProjectsSection Component
   Main carousel component showcasing portfolio projects
   ========================= */
const ProjectsSection = ({ darkMode }) => {
  /* =========================
     Project Data Configuration
     Static data for all featured projects
     ========================= */
  const projects = [
    {
      title: "PulseCRM",
      type: "Full Stack",
      description:
        "A fast, full-stack CRM with secure JWT auth, role-based access, real-time updates, and complete lead management with analytics.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Express",
        "PostgreSQL",
      ],
      githubLink: "https://github.com/ksaurabh252/PulseCRM",
      deployedLink: "https://pulse-crm-tau.vercel.app/",
      image: PulseCRM,
      features: [
        "JWT auth + Role-based access",
        "Lead lifecycle (CRUD)",
        "Real-time notifications (Socket.io)",
        "Lead activity timeline",
        "Admin user management",
        "Analytics dashboard (Recharts)",
      ],
    },

    {
      title: "MediTrack",
      type: "frontend",
      description:
        "A medication management web app with reminders, AI assistant, and prescription management.",
      technologies: ["React", "Redux", "Tailwind", "Firebase"],
      githubLink: "https://github.com/ksaurabh252/MediTrack",
      deployedLink: "https://meditrack-medicine.netlify.app/",
      image: mediTrack,
      features: [
        "CRUD for medicines",
        "Firebase auth",
        "Smart reminders",
        "AI assistant",
        "Prescription management with document uploads",
      ],
    },

    {
      title: "WhistleSpace",
      type: "fullstack",
      description:
        "A modern, secure, and anonymous feedback platform for schools, teams. Provides an admin dashboard, AI moderation, and JWT-secured authentication.",
      technologies: [
        "React",
        "Chakra UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      githubLink: "https://github.com/ksaurabh252/WhistleSpace",
      deployedLink: "https://whistlespace.vercel.app/",
      image: whistleSpace,
      features: [
        "Anonymous feedback submission system",
        "Tagging & categorization",
        "Comment threads for engagement",
        "Secure admin dashboard with authentication",
        "Email notifications for admins",
        "Rate limiting & CORS integrated",
      ],
    },
    {
      title: "MentorPay",
      type: "frontend",
      description:
        "A mentor session tracking and payout platform with automated calculations and documentation.",
      technologies: ["React", "Redux Toolkit", "Radix UI", "Tailwind CSS"],
      githubLink: "https://github.com/ksaurabh252/MentorPay",
      deployedLink: "https://mentorspay.netlify.app/",
      image: mentor1,
      features: [
        "Automated payout",
        "Session management and PDF receipt generation",
        "Audit logs",
        "Tax settings",
      ],
    },
    {
      title: "HobbyHive",
      type: "backend",
      description:
        "A Backend project for hobby enthusiasts with group management, forum discussions, and real-time chat features.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
      githubLink: "https://github.com/ksaurabh252/HobbyHive",
      deployedLink: "https://hobbyhive.onrender.com/",
      image: hobbyHive,
      features: [
        "User & group management APIs",
        "Real-time group chat with Socket.IO",
        "Calendar integration",
        "Gamification system",
      ],
    },
  ];

  /* =========================
     State Management
     Controls carousel behavior and visibility
     ========================= */
  const sliderRef = useRef(null); /* Reference to scrollable container */
  const [showLeft, setShowLeft] = useState(false); /* Left arrow visibility */
  const [showRight, setShowRight] = useState(true); /* Right arrow visibility */
  const [cardsPerView, setCardsPerView] =
    useState(3); /* Dynamic card count based on viewport */

  /* =========================
     Responsive Behavior Handler
     Adjusts cards per view based on screen size
     ========================= */
  useEffect(() => {
    const handleResize = () => {
      /* Breakpoints: Mobile (<768px), Tablet (<1024px), Desktop (≥1024px) */
      setCardsPerView(
        window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
      );
    };
    handleResize(); /* Initial calculation */
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize); /* Cleanup */
  }, []);

  /* =========================
     Scroll Position Checker
     Updates navigation arrow visibility based on scroll position
     ========================= */
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(
        scrollLeft < scrollWidth - clientWidth - 10
      ); /* 10px buffer for smooth experience */
    }
  };

  /* =========================
     Navigation Handler
     Handles carousel scrolling with smooth animation
     ========================= */
  const scroll = (dir) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / cardsPerView;
      sliderRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    }
  };

  /* =========================
     Scroll Event Listener
     Monitors scroll position for arrow visibility updates
     ========================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      checkScroll(); /* Initial visibility check */
      return () =>
        slider.removeEventListener("scroll", checkScroll); /* Cleanup */
    }
  }, [cardsPerView]);

  /* =========================
     Styling Configuration
     Theme-aware styles for project type badges
     ========================= */
  const typeStyles = {
    backend:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    frontend:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    default:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* =========================
          Section Header
          Title, decorative line, and description
          ========================= */}
      <div className="text-center mb-10">
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured Projects
        </h2>
        <div
          className={`w-20 h-1 mx-auto mt-2 rounded-full ${
            darkMode ? "bg-teal-500" : "bg-blue-600"
          }`}
        />
        <p
          className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Here are some of my recent projects that showcase my skills in
          full-stack development.
        </p>
      </div>

      {/* =========================
          Carousel Container
          Houses navigation arrows and scrollable cards
          ========================= */}
      <div className="relative">
        {/* =========================
            Navigation Arrows
            Conditional rendering based on content overflow
            ========================= */}
        {projects.length > cardsPerView && (
          <div className="absolute top-[280px] left-[-1.5rem] right-[-1.5rem] flex justify-between px-2 z-20 pointer-events-none ">
            {/* Left Navigation Arrow */}
            <button
              onClick={() => scroll(-1)}
              className={`pointer-events-auto hidden md:flex hover:cursor-pointer   ${
                darkMode
                  ? "bg-gray-700/90 text-white hover:bg-gray-600 "
                  : "bg-white/90 text-gray-700 hover:bg-gray-100"
              } rounded-full w-10 h-10 items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 backdrop-blur-sm  ${
                showLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <FiChevronLeft size={20} />
            </button>
            {/* Right Navigation Arrow */}
            <button
              onClick={() => scroll(1)}
              className={`pointer-events-auto hidden md:flex hover:cursor-pointer ${
                darkMode
                  ? "bg-gray-700/90 text-white hover:bg-gray-600"
                  : "bg-white/90 text-gray-700 hover:bg-gray-100"
              } rounded-full w-10 h-10 items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 backdrop-blur-sm ${
                showRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}

        {/* =========================
            Project Cards Container
            Scrollable flex container with snap scrolling
            ========================= */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0"
              style={{ width: `calc(100% / ${cardsPerView} - 16px)` }}
            >
              {/* =========================
                  Individual Project Card
                  Contains image, details, and action buttons
                  ========================= */}
              <div
                className={`h-full rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-100"
                }`}
              >
                {/* Project Image Section */}
                <div
                  className={`overflow-hidden ${
                    p.type === "backend" ? "bg-gray-100" : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Project Content Section */}
                <div className="p-6">
                  {/* Title and Type Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        typeStyles[p.type] || typeStyles.default
                      }`}
                    >
                      {p.type}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p
                    className={`text-[1rem] mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {p.description}
                  </p>

                  {/* Action Buttons (GitHub & Live Demo) */}
                  <div className="flex gap-3 mb-5">
                    {p.githubLink && (
                      <ProjectButton
                        href={p.githubLink}
                        label="Code"
                        icon={FiGithub}
                        darkMode={darkMode}
                        type="code"
                      />
                    )}
                    {p.deployedLink && (
                      <ProjectButton
                        href={p.deployedLink}
                        label="Live Demo"
                        icon={FiExternalLink}
                        darkMode={darkMode}
                        type="live"
                      />
                    )}
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-4">
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode
                              ? "bg-gray-700 text-blue-300"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div>
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {p.features.map((f, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start text-base ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span
                            className={`mr-2 mt-1 ${
                              darkMode ? "text-teal-400" : "text-teal-600"
                            }`}
                          >
                            •
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
