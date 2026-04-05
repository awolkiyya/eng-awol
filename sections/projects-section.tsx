// "use client";

// import { useState } from "react";
// import Section from "@/components/section";
// import Image from "next/image";

// export default function ProjectsSection() {
//   const categories = ["All", "Mobile", "Web"];

//   const [activeCategory, setActiveCategory] = useState("All");

//   const projects = [
//     {
//       title: "Ada Pay Wallet",
//       description:
//         "A mobile digital wallet and marketplace platform enabling users to manage payments, discover local businesses, and perform secure transactions. Integrated with Telebirr and Chapa payment gateways for local and online payments, with secure API handling, transaction processing, and optimized Flutter UI for a seamless financial experience.",
//       image: "/assets/projects/adapay.png",
//       category: "Mobile",
//       tech: [
//         "Flutter",
//         "Laravel API",
//         "MySQL",
//         "REST API",
//         "JWT Auth",
//         "Telebirr API",
//         "Chapa API"
//       ],
//     },
//     {
//       title: "Ada Tech Dashboard",
//       description:
//         "A B2B enterprise web platform designed for manufacturers, wholesalers, and retailers to manage products, orders, and analytics. Features role-based access control, modular dashboard architecture, and scalable cloud deployment. Built with a modern component-driven UI using shadcn/ui, Tailwind CSS, and Redux for state management.",
//       image: "/assets/projects/ada-tech-dashbaord.png",
//       category: "Web",
//       tech: [
//         "Next.js (TypeScript)",
//         "Laravel API",
//         "MySQL",
//         "AWS",
//         "Tailwind CSS",
//         "shadcn/ui",
//         "Redux Toolkit"
//       ],
//     },
//     {
//       title: "AIG Digital Restaurant",
//       description:
//         "A modern restaurant ordering and management system with dynamic menu browsing, cart functionality, and admin controls. Powered by Laravel API and built with a responsive UI using Next.js, Tailwind CSS, and shadcn/ui, with Redux managing global state for cart, orders, and UI interactions.",
//       image: "/assets/projects/aigcafe.png",
//       category: "Web",
//       tech: [
//         "Next.js (TypeScript)",
//         "Laravel API",
//         "MySQL",
//         "Tailwind CSS",
//         "shadcn/ui",
//         "Redux Toolkit"
//       ],
//     },
//     {
//       title: "AI Smart KYC Verification",
//       description:
//         "A mobile-based identity verification system enabling secure user onboarding with document upload, validation, and real-time status tracking using cloud services.",
//       image: "/assets/projects/kyc.png",
//       category: "Mobile",
//       tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Storage"],
//     },
//     {
//       title: "Ada Go",
//       description:
//         "A mobile business management and logistics application featuring real-time location tracking, route handling, and operational workflow management. Integrated Mapbox and Google Maps APIs for geolocation, routing, and real-time tracking. Built using scalable Laravel APIs with advanced state management (Riverpod and GetX) to ensure high performance, maintainability, and responsive UI.",
//       image: "/assets/projects/adago.png",
//       category: "Mobile",
//       tech: [
//         "Flutter",
//         "Laravel API",
//         "MySQL",
//         "REST API",
//         "Mapbox",
//         "Google Maps API",
//         "Riverpod",
//         "GetX"
//       ],
//     }
//   ];
  

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   return (
//     <Section title="Projects">

//       {/* Category Filter */}
//       <div className="flex justify-center md:justify-start  mb-10">
//         <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-1.5 text-sm rounded-md transition
//                 ${
//                   activeCategory === cat
//                     ? "bg-white shadow text-black"
//                     : "text-gray-500 hover:text-black"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

//         {filteredProjects.map((project) => (
//           <div
//             key={project.title}
//             className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition duration-300"
//           >

//             {/* Project Image */}
//             <div className="relative overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-300"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5 flex flex-col gap-4">

//               <div>
//                 <h3 className="text-lg font-semibold">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm mt-1">
//                   {project.description}
//                 </p>
//               </div>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="text-xs px-2 py-1 bg-gray-100 rounded-md"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-3 pt-2">
//                 <button className="text-sm font-medium text-blue-600 hover:underline">
//                   Live Demo
//                 </button>

//                 <button className="text-sm font-medium text-gray-600 hover:underline">
//                   GitHub
//                 </button>
//               </div>

//             </div>

//           </div>
//         ))}

//       </div>

//     </Section>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/section";

const categories = ["All", "Mobile", "Web"];

  const projects = [
    {
      title: "Ada Pay Wallet",
      description:
        "A mobile digital wallet and marketplace platform enabling users to manage payments, discover local businesses, and perform secure transactions. Integrated with Telebirr and Chapa payment gateways for local and online payments, with secure API handling, transaction processing, and optimized Flutter UI for a seamless financial experience.",
      image: "/assets/projects/adapay.png",
      category: "Mobile",
      tech: [
        "Flutter",
        "Laravel API",
        "MySQL",
        "REST API",
        "JWT Auth",
        "Telebirr API",
        "Chapa API"
      ],
    },
    {
      title: "Ada Tech Dashboard",
      description:
        "A B2B enterprise web platform designed for manufacturers, wholesalers, and retailers to manage products, orders, and analytics. Features role-based access control, modular dashboard architecture, and scalable cloud deployment. Built with a modern component-driven UI using shadcn/ui, Tailwind CSS, and Redux for state management.",
      image: "/assets/projects/ada-tech-dashbaord.png",
      category: "Web",
      tech: [
        "Next.js (TypeScript)",
        "Laravel API",
        "MySQL",
        "AWS",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit"
      ],
    },
    {
      title: "AIG Digital Restaurant",
      description:
        "A modern restaurant ordering and management system with dynamic menu browsing, cart functionality, and admin controls. Powered by Laravel API and built with a responsive UI using Next.js, Tailwind CSS, and shadcn/ui, with Redux managing global state for cart, orders, and UI interactions.",
      image: "/assets/projects/aigcafe.png",
      category: "Web",
      tech: [
        "Next.js (TypeScript)",
        "Laravel API",
        "MySQL",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit"
      ],
    },
    {
      title: "Digital SaaS Restaurant",
      description:
        "A modern restaurant ordering and management system with dynamic menu browsing, cart functionality, and admin controls. Powered by Laravel API and built with a responsive UI using Next.js, Tailwind CSS, and shadcn/ui, with Redux managing global state for cart, orders, and UI interactions.",
      image: "/assets/projects/restaurant.png",
      category: "Web",
      tech: [
        "Next.js (TypeScript)",
        "Laravel API",
        "MySQL",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit"
      ],
    },
    {
      title: "AI Smart KYC Verification",
      description:
        "A mobile-based identity verification system enabling secure user onboarding with document upload, validation, and real-time status tracking using cloud services.",
      image: "/assets/projects/kyc.png",
      category: "Mobile",
      tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Storage"],
    },
    {
      title: "Ghioon B2B,B2C,C2C with Real Time Chat",
      description:
        "A mobile-based identity verification system enabling secure user onboarding with document upload, validation, and real-time status tracking using cloud services.",
      image: "/assets/projects/ghioon.png",
      category: "Mobile",
      tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Cloud Storage"],
    },
    {
      title: "Ada Go",
      description:
        "A mobile business management and logistics application featuring real-time location tracking, route handling, and operational workflow management. Integrated Mapbox and Google Maps APIs for geolocation, routing, and real-time tracking. Built using scalable Laravel APIs with advanced state management (Riverpod and GetX) to ensure high performance, maintainability, and responsive UI.",
      image: "/assets/projects/adago.png",
      category: "Mobile",
      tech: [
        "Flutter",
        "Laravel API",
        "MySQL",
        "REST API",
        "Mapbox",
        "Google Maps API",
        "Riverpod",
        "GetX"
      ],
    }
  ];

const INITIAL_COUNT = 3;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Section title="Projects">
      {/* Filter */}
      <div className="flex justify-center md:justify-start mb-10">
        <div className="flex gap-2 bg-gray-100/70 backdrop-blur p-1 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(INITIAL_COUNT);
              }}
              className={`px-4 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white shadow-sm text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, i) => {
          const isExpanded = expanded[project.title];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative border border-gray-200/60 rounded-2xl overflow-hidden bg-white/80 backdrop-blur hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={i < 2}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p
                    className={`text-gray-500 text-sm mt-1 transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* See More Text */}
                  <button
                    onClick={() => toggleExpand(project.title)}
                    className="text-xs text-blue-600 mt-1 hover:underline"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-1 bg-gray-100/80 rounded-md border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-2">
                  <button className="text-sm font-medium text-blue-600 hover:underline">
                    Live Demo
                  </button>
                  <button className="text-sm font-medium text-gray-600 hover:underline">
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* See More Cards */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all"
          >
            See More Projects
          </button>
        </div>
      )}
    </Section>
  );
}

