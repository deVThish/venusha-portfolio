"use client";

import { motion, Variants } from "framer-motion";

const projects = [
  {
    title: "Sentry Gas IoT Application",
    description:
      "An innovative IoT utility built with Flutter for the mobile interface and Arduino backend, featuring remote valve controls, gas usage analytics, automated hazard shutoffs, and real-time Firebase SMS authentication alerts.",
    tech: ["Flutter", "Arduino", "Firebase", "IoT"],
    link: "#",
  },
  {
    title: "Digital Driver's License System",
    description:
      "A modernized digital driving license ecosystem conceptualized for Sri Lanka, incorporating a real-time demerit points infrastructure, digital fine payment processing, and secure QR/NFC officer verification protocols.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "NFC/QR"],
    link: "#",
  },
  {
    title: "PulseAid Android System",
    description:
      "A robust mobile application engineered to streamline medical support logistics, prioritizing emergency response coordination and secure patient status tracking.",
    tech: ["Android Studio", "Java", "Firebase", "Google Maps API"],
    link: "#",
  },
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0d1117] text-white"
    >
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mx-auto md:mx-0" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-900/60"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-sky-400 border border-slate-700/30"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-slate-300 group-hover:text-sky-400 transition-colors duration-300"
                  >
                    View Project Details
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
