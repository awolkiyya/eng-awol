"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = { name: string; href: string };
type Language = { code: string; label: string };

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const LANGUAGES: Language[] = [
  { code: "en", label: "English" },
  { code: "am", label: "Amharic" },
  { code: "om", label: "Oromo" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);

  // Dark mode init
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) setDarkMode(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = NAV_LINKS.find((l) => l.href === `#${entry.target.id}`);
            if (section) setActiveSection(section.name);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.1 }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className={clsx(
            "relative font-medium transition-colors duration-200",
            mobile ? "text-base py-2" : "text-sm",
            activeSection === link.name
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
          {!mobile && activeSection === link.name && (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-0 bottom-0 h-[2px] w-full bg-primary rounded"
            />
          )}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300",
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/70 border-b shadow-sm"
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
          <nav className="hidden md:flex items-center gap-6">

            <NavItems />

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Globe size={16} />
                {selectedLang.label}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 border rounded-md shadow-lg overflow-hidden"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="ml-2"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-white dark:bg-gray-900/90 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3 px-6 py-4">
              <NavItems mobile />

              <Link href="/resume.pdf" className="text-sm text-muted-foreground">
                Resume
              </Link>

              <a
                href="#contact"
                className="mt-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium text-center"
              >
                Contact
              </a>

              {/* Mobile Language Dropdown */}
              <div className="relative mt-2">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-1 border rounded-md w-full justify-between hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Globe size={16} />
                  {selectedLang.label}
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-900 border rounded-md shadow-lg overflow-hidden"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang);
                            setLangOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 mt-2"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                Toggle Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}