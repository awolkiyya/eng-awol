import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import EducationSection from "@/sections/education-section";
import ExperienceSection from "@/sections/experience-section";
import HeroSection from "@/sections/hero-section";
import ProjectsSection from "@/sections/projects-section";
import SkillsSection from "@/sections/skills-section";

export default function Page() {
    return (
        <>
                    <Navbar />

            <main className="max-md:px-4 pt-4">
                <section id="hero"><HeroSection /></section>
                <section id="about"><AboutSection /></section>
                <section id="projects"><ProjectsSection /></section>
                <section id="experience"><ExperienceSection /></section>
                <section id="education"><EducationSection /></section>
                <section id="skills"><SkillsSection /></section>
                <section id="contact"><ContactSection /></section>
                <Footer />
            </main>

        
        </>
        
    );
}