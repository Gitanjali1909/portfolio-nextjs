"use client";

import MoodToggle from "@/components/MoodToggle";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-black shadow-sm fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        
        <div className="text-xl font-bold text-black dark:text-white">
          <Link href="/">Gitanjali | Frontend Dev</Link>
        </div>
        
        <div className="space-x-6 hidden sm:flex">
          <Link href="/" className="text-lg text-black dark:text-white">Home</Link>
          <Link href="/about" className="text-lg text-black dark:text-white">About</Link>
          <Link href="/projects" className="text-lg text-black dark:text-white">Projects</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://gitanjali-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-xl text-black dark:text-white hover:text-blue-500" />
          </a>
          <a href="https://github.com/gitanjali1909" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl text-black dark:text-white hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/gitanjali-soni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-black dark:text-white hover:text-blue-500" />
          </a>
          <a href="mailto:gitanjalisoni2003@gmail.com">
            <FaEnvelope className="text-xl text-black dark:text-white hover:text-blue-500" />
          </a>
          <MoodToggle />
        </div>
      </div>
    </nav>
  );
}
