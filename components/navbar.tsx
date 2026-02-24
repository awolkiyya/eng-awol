"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = { name: string; href: string };

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  // Persist dark mode & toggle class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll detection for glassmorphism header
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = NAV_LINKS.find((l) => l.href === `#${entry.target.id}`);
            if (link) setActiveSection(link.name);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Resume download tracking
  const handleResumeClick = () => console.log("Resume downloaded!");

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className={clsx(
            "transition-colors duration-200 font-medium relative",
            mobile ? "text-base py-2" : "text-sm",
            activeSection === link.name
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
          {!mobile && activeSection === link.name && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-primary rounded"
            />
          )}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl",
        isScrolled
          ? "bg-white/60 dark:bg-gray-900/60 shadow-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <Link href="/" className="text-base font-semibold tracking-tight">
            Awol<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <NavItems />

            {/* Resume */}
            <Link
              href="/resume.pdf"
              onClick={handleResumeClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Resume
            </Link>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Contact
            </a>

            {/* Social icons & theme toggle */}
            {/* <div className="flex items-center gap-3 ml-4">
              <button
                aria-label="Toggle Dark Mode"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-2"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div> */}
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t shadow-sm bg-white dark:bg-gray-900/80 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <NavItems mobile />
              <Link
                href="/resume.pdf"
                onClick={handleResumeClick}
                className="text-sm font-medium text-muted-foreground"
              >
                Resume
              </Link>
              <a
                href="#contact"
                className="mt-2 inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                Contact
              </a>

              {/* Mobile icons & toggle */}
              {/* <div className="flex items-center gap-4 mt-2">
                <button
                  aria-label="Toggle Dark Mode"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}