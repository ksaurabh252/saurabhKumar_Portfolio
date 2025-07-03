import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactSection from "./components/ContactSection";

/* =========================
   App Component
   ========================= */
const App = () => {
  /* =========================
     State Management
     ========================= */
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);

  /* =========================
     Intersection Observer Setup
     ========================= */
  useEffect(() => {
    setIsMounted(true);
    document.documentElement.classList.toggle("dark", darkMode);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active section:", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.3],
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [darkMode]);

  /* =========================
     Main Layout Render
     ========================= */
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* =========================
          Navigation Bar
          ========================= */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeSection}
        setActiveTab={setActiveSection}
      />

      {/* =========================
          Main Content Sections
          ========================= */}
      <main className="w-full">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4 justify-center">
            <Home darkMode={darkMode} />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-2"
        >
          <div className="container mx-auto px-4">
            <About darkMode={darkMode} />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center py-20 "
        >
          <div className="container mx-auto px-4">
            <SkillsSection darkMode={darkMode} />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-10"
        >
          <div className="container mx-auto px-4">
            <ProjectsSection darkMode={darkMode} />
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center py-20 "
        >
          <div className="container mx-auto px-4">
            <ExperienceSection darkMode={darkMode} />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="container mx-auto px-4">
            <ContactSection darkMode={darkMode} />
          </div>
        </section>
      </main>

      {/* =========================
          Footer Section
          ========================= */}
      <Footer darkMode={darkMode} isMounted={isMounted} />
    </div>
  );
};

export default App;
