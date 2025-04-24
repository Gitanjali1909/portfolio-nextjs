"use client";
import { motion } from "framer-motion";
import MoodToggle from "@/components/MoodToggle";

export default function HomePage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Redux",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6">
      <div className="max-w-xl text-center text-gray-800 dark:text-gray-200">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Gitanjali Soni
        </motion.h1>

        <motion.p
          className="text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          className="mb-6 text-gray-600 dark:text-gray-400 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I love crafting clean, responsive UIs that make people smile.
        </motion.p>

        <motion.p
          className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          I’ve built real-world projects as a frontend intern at Pennyflo and Aimed Labs, working with Next.js, React, TypeScript, and Tailwind CSS. I focus on clean code, smooth animations, and making things both fast and fun to use.
        </motion.p>

        <motion.p
          className="text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Outside of dev, I enjoy content writing and getting lost in a good book.
        </motion.p>

        <motion.div
          className="mb-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-2xl mt-16 font-semibold text-left mb-2 text-gray-700 dark:text-gray-300">Skills:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm transition-all hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2 + index * 0.2,
                  ease: "easeOut",
                }}
              >
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6">
          <MoodToggle />
        </div>
      </div>
    </main>
  );
}
