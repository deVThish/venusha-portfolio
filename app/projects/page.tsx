"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const normalProjects = [
  {
    title: "Auto Ledger Backup",
    description: "Automated ledger backup and synchronization utility system.",
    tech: ["Java", "SQL", "Git"],
    link: "https://github.com/deVThish/Auto-Ledger-Backup",
  },
  {
    title: "Synapse AI Notes Summarize System",
    description:
      "Intelligent note summarization and analysis platform using AI.",
    tech: ["Node.js", "React Native", "Firebase"],
    link: "https://github.com/deVThish/Synapse-AI-Notes-Summarize-System-Backup",
  },
  {
    title: "HVTM Care AI-Driven Drug Forecasting",
    description:
      "Predictive analytics and healthcare drug forecasting platform.",
    tech: ["Python", "Machine Learning", "Data Science"],
    link: "https://github.com/deVThish/HVTM_Care_AI-Driven_Drug_Forecasting_System-Backup",
  },
  {
    title: "PulseAid Android",
    description:
      "Emergency healthcare support and vital tracking mobile application.",
    tech: ["Flutter", "Firebase", "Mobile Development"],
    link: "https://github.com/deVThish/PulseAid-Android-Backup",
  },
];

const featuredProject = {
  title: "Smart Expense Categorizer",
  description: "AI-driven smart financial expense categorizer and tracker.",
  tech: ["Python", "Machine Learning", "SQL"],
  link: "https://github.com/deVThish/Smart-Expense-Categorizer-Backup",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#0d1117] min-h-screen pt-24 pb-32 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
            Back Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Projects Showcase
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {normalProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 block group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}

          <motion.a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 block group md:col-span-2 md:w-1/2 md:mx-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold group-hover:text-sky-400 transition-colors">
                {featuredProject.title}
              </h3>
              <svg
                className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        </div>
      </div>
    </main>
  );
}
