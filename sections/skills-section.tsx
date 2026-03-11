"use client";

import Section from "@/components/section";

export default function SkillsSection() {
  const coreSkills = [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  const skills = [
    {
      name: "Flutter",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Next.js",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Laravel",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Node.js",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "React.js",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "shadcn/ui",
      level: 80,
      icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Firebase",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "AWS",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  return (
    <Section title="Skills">
      {/* Core Technologies */}
      <div className="w-full mb-12">
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Core Technologies
        </h3>
        <div className="flex flex-wrap gap-4">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-lg bg-white hover:shadow-md transition"
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills with Progress Bars */}
      <div className="w-full grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5"
                />
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-gray-400">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-black h-2 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
