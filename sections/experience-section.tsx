import Section from "@/components/section";
import Image from "next/image";

export default function ExperienceSection() {
  const experience = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33TadpkXza83xojcHxpFlJXXlyJ-FIpsBmA&s",
      title: "Mobile App Developer",
      company: "Ghioon B2B & Ada Go",
      location: "Ethiopia",
      start: "Aug 2022",
      end: "Present",
      description: [
        "Developed Ghioon B2B and Ada Go mobile apps using Flutter with Riverpod and GetX for advanced state management.",
        "Integrated Mapbox and Google Maps APIs for real-time location tracking and route management.",
        "Implemented offline-first and scalable Laravel backend APIs with MySQL, enabling secure business operations.",
        "Integrated Telebirr and Chapa payment gateways for Ada Pay Wallet to provide seamless payment experiences.",
      ],
    },
    {
      image: "/assets/nextjs.svg",
      title: "Full Stack Web Developer",
      company: "Ada Tech Dashboard & AIG Digital Restaurant",
      location: "Remote / Ethiopia",
      start: "Aug 2022",
      end: "Present",
      description: [
        "Built enterprise dashboards for manufacturers, wholesalers, retailers, and restaurants using Next.js (TypeScript), Tailwind CSS, and shadcn/ui.",
        "Implemented Redux Toolkit for state management, Laravel APIs for backend operations, and MySQL for database management.",
        "Optimized UI/UX for web applications with modular architecture, role-based access control, and responsive design.",
        "Deployed solutions on AWS, ensuring performance, security, and scalability for enterprise-level use.",
      ],
    },
    {
      image: "/assets/firebase.svg",
      title: "Cloud & AI Mobile Developer",
      company: "AI Smart KYC Verification",
      location: "Remote",
      start: "Jan 2023",
      end: "Present",
      description: [
        "Developed AI Smart KYC Verification mobile app using Flutter and Firebase (Auth, Firestore, Cloud Storage) for secure onboarding.",
        "Implemented real-time updates, document validation, and efficient cloud storage to handle user identity data.",
      ],
    },
    {
      image: "https://www.insa.gov.et/assets/uploads/INSA.png",
      title: "Full Stack Developer",
      company: "Insa",
      location: "Ethiopia",
      start: "Jan 2022",
      end: "Jul 2022",
      description: [
        "Worked on full-stack development projects using Laravel, Node.js, and Next.js for web and API services.",
        "Contributed to system architecture, database design, and feature development for scalable local applications.",
      ],
    },
  ];

  return (
    <Section title="Experience">
      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.title}
            className="w-full border border-gray-200 p-6 rounded-2xl bg-white/80 backdrop-blur shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-center">
                  <Image src={exp.image} alt={exp.title} width={30} height={30} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">{exp.title}</h3>
                  <div className="text-sm text-gray-500">{exp.company} • {exp.location}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {exp.start} - {exp.end}
              </div>
            </div>
            <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
              {exp.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}