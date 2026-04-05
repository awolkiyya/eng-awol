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

function AdBanner({
  adClient = "ca-pub-3940256099942544",
  adSlot = "1234567890",
  minHeight = 250,
}: {
  adClient?: string;
  adSlot?: string;
  minHeight?: number;
}) {
  const adRef = useRef<HTMLDivElement | null>(null);
  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";

  useEffect(() => {
    if (!isLocalhost) {
      if (!window.adsbygoogle) window.adsbygoogle = [];

      const timeout = setTimeout(() => {
        if (adRef.current) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.warn("AdSense push skipped:", e);
          }
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isLocalhost]);

  if (isLocalhost) {
    // ✅ Placeholder for development / localhost
    return (
      <div
        style={{
          display: "block",
          width: "100%",
          minHeight,
          backgroundColor: "#f3f3f3",
          color: "#555",
          border: "1px dashed #aaa",
          textAlign: "center",
          lineHeight: `${minHeight}px`,
          fontStyle: "italic",
        }}
      >
        Ad Placeholder (localhost)
      </div>
    );
  }

  return (
    <div ref={adRef} className="w-full flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

/* ================= PAGE COMPONENT ================= */

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
      if (!document.querySelector(`script[src*="adsbygoogle.js"]`)) {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.setAttribute("data-ad-client", "ca-pub-3940256099942544"); // Test ID
        document.head.appendChild(script);
      }
    }
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

        {/* ✅ Test Ad Banner */}
        <AdBanner />

        <section id="projects">
          <ProjectsSection />
        </section>

        {/* ✅ Another Test Ad Banner */}
        <AdBanner />

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