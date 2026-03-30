import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import EducationSection from "@/sections/education-section";
import ExperienceSection from "@/sections/experience-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

/* ================= NAV CONFIG ================= */

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },

  // ✅ NEW: Components page link
  { name: "Components & Logic", href: "/components" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "am", label: "Amharic" },
  { code: "om", label: "Oromo" },
];

/* ================= PAGE ================= */

export default function Page() {
  return (
    <>
      {/* ✅ Navbar with mixed navigation support */}
      <Navbar links={NAV_LINKS} languages={LANGUAGES} />

      <main className="max-w-6xl mx-auto px-4 pt-6 space-y-24">
        
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

      </main>

      <Footer />
    </>
  );
}