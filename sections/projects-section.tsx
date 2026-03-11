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
      description: "Marketplace mobile app for local businesses.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Laravel", "MySQL"],
    },
    {
      title: "Smart City Dashboard",
      description: "Admin platform for managing smart city services.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Tailwind", "Node.js"],
    },
    {
      title: "Ada Eats",
      description: "Food delivery mobile application.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
      tech: ["Flutter", "Firebase"],
    },
    {
      title: "Business Portal",
      description: "Business management system.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      category: "Web",
      tech: ["Next.js", "Laravel", "MySQL"],
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
