import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CODE AI 2026 | International Conference on Data Science & AI",
  description: "3rd International Conference on Data Science & Exploration in Artificial Intelligence. MIT Bengaluru, MAHE.",
  keywords: ["CODE AI", "Conference", "AI", "Machine Learning", "Data Science", "MIT Bengaluru"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
