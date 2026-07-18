"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allProjects = [
  {
    title: "Sentry Gas System",
    description:
      "An advanced IoT utility using Flutter and Arduino. Features automatic valve shutdown during leaks, real-time gas level monitoring, usage history tracking, and instant push notifications via Firebase.",
    tech: ["Flutter", "Arduino", "Firebase", "IoT Systems"],
    github: "https://github.com/venushathishan",
    live: "#",
  },
  {
    title: "PulseAid Android Application",
    description:
      "A comprehensive healthcare mobile application designed to streamline patient-doctor communication, health tracking, and medical emergency responses.",
    tech: ["Java", "Android SDK", "Firebase", "APIs"],
    github: "https://github.com/venushathishan/PulseAid-Android",
    live: "#",
  },
  {
    title: "Synapse AI Notes Summarize System",
    description:
      "An intelligent productivity system leveraging AI models to automatically process, clean, and generate concise summaries from long-form text notes and documents.",
    tech: ["Python", "AI/ML Models", "FastAPI", "TypeScript"],
    github:
      "https://github.com/venushathishan/Synapse-AI-Notes-Summarize-System",
    live: "#",
  },
  {
    title: "Smart Expense Categorizer",
    description:
      "A finance application utilizing automated categorization algorithms to sort user transactions, track budgets, and generate detailed analytical reports.",
    tech: ["Node.js", "Express", "SQL", "JavaScript"],
    github: "https://github.com/venushathishan/Smart-Expense-Categorizer",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white py-20 px-6 antialiased">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-slate-400 max-w-xl">
            A comprehensive list of my software engineering projects, IoT
            systems, and academic developments.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-sky-400 border border-slate-700/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm pt-2 border-t border-slate-800/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
