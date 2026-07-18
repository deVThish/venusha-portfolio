"use client";

import { motion, Variants } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React Native", "Expo", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Mobile & IoT",
    skills: ["Flutter", "Arduino", "Firebase", "Git"],
  },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0d1117] text-white overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 space-y-4 text-slate-400 leading-relaxed text-base"
          >
            <p>
              I am a driven Software Engineering student deeply engaged in
              full-stack web architectures, mobile application ecosystems, and
              IoT systems engineering.
            </p>
            <p>
              My development philosophy focuses on clean, maintainable code
              combined with robust modern tech stacks to deliver meaningful
              real-world solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.4)" }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-sky-400 mb-4 tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-sky-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
