"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Runtimes",
    skills: ["Next.js", "Node.js", "React Native", "Expo", "Flutter"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "PostgreSQL", "Docker"],
  },
  {
    title: "Hardware & Tools",
    skills: ["Arduino", "IoT Systems", "Git", "GitHub", "GitLab"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#0d1117] text-white border-t border-slate-900"
    >
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mx-auto md:mx-0" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-sky-400 mb-4 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800 text-slate-200 border border-slate-700/50 hover:border-sky-500/30 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
