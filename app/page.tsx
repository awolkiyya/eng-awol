"use client";

import { useEffect, useRef } from "react";
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
  { name: "Components & Logic", href: "/components" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "am", label: "Amharic" },
  { code: "om", label: "Oromo" },
];

/* ================= TYPES ================= */

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}



/* ================= REUSABLE ADSENSE COMPONENT ================= */

function AdBanner() {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }

    // Only push if the element exists and is not yet processed
    if (adRef.current) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn("AdSense push skipped:", e);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 250 }}
        data-ad-client="ca-pub-3940256099942544" // Test client
        data-ad-slot="1234567890" // Test slot
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

/* ================= PAGE COMPONENT ================= */

export default function Page() {
  useEffect(() => {
    // Inject AdSense script once
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-3940256099942544"); // Test ID
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Navbar links={NAV_LINKS} languages={LANGUAGES} />

      <main className="max-w-6xl mx-auto px-4 pt-6 space-y-24">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        {/* ✅ Test AdSense Banner */}
        <section className="flex justify-center my-12">
          <AdBanner />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        {/* ✅ Another Test AdSense Banner */}
        <section className="flex justify-center my-12">
          <AdBanner />
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