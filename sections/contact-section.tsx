"use client";

import Section from "@/components/section";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      type: "Email",
      value: "awolabdulbaasit143@gmail.com",
      icon: <Mail className="w-5 h-5 text-black" />,
    },
    {
      type: "Phone",
      value: "+251911996750",
      icon: <Phone className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <Section title="Contact">
      <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
        {contacts.map((contact) => (
          <div
            key={contact.type}
            className="flex items-center gap-4 px-6 py-4 border rounded-xl hover:shadow-lg transition cursor-pointer bg-white"
          >
            <div className="p-2 bg-gray-100 rounded-full">{contact.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{contact.type}</p>
              <p className="font-medium text-black">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
