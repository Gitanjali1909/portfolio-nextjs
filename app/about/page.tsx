"use client";
import { motion } from "framer-motion";
import MoodToggle from "@/components/MoodToggle";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-left bg-white dark:bg-black text-black dark:text-white">
      <MoodToggle />
      
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi, I'm Gitanjali Soni, a passionate frontend developer. My journey into
        frontend development began when I realized the power of building
        interactive and visually appealing websites. It all started during my
        university days when I was fascinated by how HTML, CSS, and JavaScript
        brought static web pages to life. Over time, my interest evolved into
        creating dynamic user experiences using modern frameworks like React.
      </motion.p>

      <motion.p
        className="text-lg max-w-lg text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I love turning complex ideas into simple, engaging interfaces. What excites me
        most about frontend development is the ability to create something that
        people can interact with and enjoy. When I’m not coding, I enjoy reading
        about new web technologies and constantly learning to improve my craft.
      </motion.p>
    </div>
  );
}
