"use client"

import { useState } from "react"

const projects = [
  {
    title: "Plan It Grand Website",
    description: "A more interactive and visually appealing web application aimed at improving user experience.",
    tech: "React.js, JavaScript, Tailwind CSS",
    details: `
      • Situation: Aimed to create a more interactive and visually appealing web application to improve user experience.
      • Task: Responsible for developing the frontend of the application using React.js, JavaScript, and Tailwind CSS.
      • Action:
        – Utilized React Hooks and React Router DOM for dynamic content updates and seamless navigation.
        – Applied advanced state management solutions to ensure stability and performance.
        – Conducted optimization efforts to enhance code quality, usability, and responsiveness.
      • Result: Improved interactivity and visual appeal, leading to higher user engagement and a more efficient interface.
    `,
    link: "https://gilded-raindrop-09e1a8.netlify.app/",
  },
  {
    title: "Shree Balaji Website",
    description: "A responsive webpage to improve user experience and engagement, with custom animations and cross-browser compatibility.",
    tech: "HTML, CSS, JavaScript",
    details: `
      • Situation: Aimed to develop a responsive webpage to improve user experience and engagement.
      • Task: Responsible for creating the webpage using HTML, CSS, and JavaScript.
      • Action:
        – Developed a responsive webpage, emphasizing user experience and responsiveness.
        – Implemented custom animations using CSS and JavaScript to enhance visual effects.
        – Ensured cross-browser compatibility and optimized the webpage for different environments.
        – Solved design consistency challenges and followed best practices.
      • Result: The webpage became responsive and visually appealing, offering a seamless user experience.
    `,
    link: "https://gitanjalisoni.github.io/My-website/",
  },
]

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="grid gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="mb-4">{proj.description}</p>
            <p className="italic text-sm mb-4">{proj.tech}</p>

            
            <div className="mb-4">
              <p>
                <strong>Check out the live project:</strong>{" "}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {proj.link}
                </a>
              </p>
            </div>

            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="text-gray-800 font-medium text-sm mt-2"
            >
              {expanded === index ? "Hide details" : "See project details"}
            </button>

            {expanded === index && (
              <pre className="bg-gray-100 dark:bg-gray-800 text-sm mt-4 p-4 rounded overflow-x-auto">
                <code>{proj.details}</code>
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
