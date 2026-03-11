import Section from "@/components/section";

export default function SkillsSection() {
  const coreSkills = [
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "UI/UX", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
      ],
    },
  ];

  return (
    <Section title="Skills">

      {/* Core Skills */}
      <div className="mb-12 w-full">
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Core Technologies
        </h3>

        <div className="flex flex-wrap gap-6">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-lg hover:shadow-md transition"
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Groups */}
      <div className="grid gap-8 w-full sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
}
