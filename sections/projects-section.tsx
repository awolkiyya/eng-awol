"use client";

import { useState } from "react";
import Section from "@/components/section";
import Image from "next/image";

export default function ProjectsSection() {
  const categories = ["All", "Mobile", "Web"];

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Ada Market",
      description: "Marketplace mobile app connecting local businesses with customers.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Laravel", "MySQL"],
    },
    {
      title: "Ghioon B2B Platform",
      description: "B2B platform enabling manufacturers and retailers to trade online.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Laravel", "MySQL", "AWS"],
    },
    {
      title: "Smart City Dashboard",
      description: "Admin dashboard for monitoring smart city services and analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Tailwind", "Node.js"],
    },
    {
      title: "Ada Eats",
      description: "Food delivery mobile application with real-time tracking.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Firebase"],
    },
    {
      title: "Business Management Portal",
      description: "Platform for managing business operations, sales, and reporting.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Laravel", "MySQL"],
    },
    {
      title: "City Investment Platform",
      description: "Web platform for managing investors and city development projects.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare Appointment App",
      description: "Mobile app for booking doctor appointments and health reminders.",
      image:
        "https://images.unsplash.com/photo-1580281657527-47c8f3b0f44b?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Firebase", "Node.js"],
    },
    {
      title: "E-Learning Platform",
      description: "Online learning system with courses, quizzes, and analytics.",
      image:
        "https://images.unsplash.com/photo-1584697964190-7383c36d74f4?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Express.js", "MongoDB"],
    },
    {
      title: "Logistics Tracking System",
      description: "System for tracking shipments and delivery operations.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Laravel", "MySQL", "AWS"],
    },
    {
      title: "Digital Wallet",
      description: "Secure mobile wallet for managing digital payments.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Node.js", "MongoDB"],
    },
    {
      title: "Real Estate Listing Platform",
      description: "Property marketplace for buying, renting, and listing real estate.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Tailwind", "Laravel"],
    },
    {
      title: "Event Management App",
      description: "Mobile app for managing events, tickets, and registrations.",
      image:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Firebase"],
    },
  ];
  

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Section title="Projects">

      {/* Category Filter */}
      <div className="flex justify-center md:justify-start  mb-10">
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-md transition
                ${
                  activeCategory === cat
                    ? "bg-white shadow text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition duration-300"
          >

            {/* Project Image */}
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">

              <div>
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Live Demo
                </button>

                <button className="text-sm font-medium text-gray-600 hover:underline">
                  GitHub
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </Section>
  );
}
