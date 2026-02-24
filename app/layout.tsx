import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Awol Abdulbaasit | Full-Stack Developer | CEO Ada Tech Solutions",
    description:
      "Awol Abdulbaasit is a Full-Stack Web and Mobile App Developer and CEO of Ada Tech Solutions. Expert in Flutter, Node.js, Laravel, and scalable system architecture. View portfolio: https://eng-awol.vercel.app/",
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
