"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

function ProjectBlock({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.3]
  );
  const isRight = project.layout === "right";
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="min-h-screen flex items-center px-6 md:px-16 py-24 relative overflow-hidden"
    >
      {/* Parallax background number */}
      <motion.span
        style={{ y }}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 font-display text-[15rem] md:text-[20rem] text-white/[0.02] select-none pointer-events-none"
      >
        {num}
      </motion.span>

      <div
        className={`max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center ${
          isRight ? "md:direction-rtl" : ""
        }`}
      >
        {/* Text content */}
        <motion.div
          initial={{
            opacity: 0,
            x: isRight ? 80 : -80,
            rotateY: isRight ? -10 : 10,
          }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${isRight ? "md:col-start-2 md:text-right" : ""} md:direction-ltr`}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-sm mb-2 uppercase tracking-widest"
          >
            {project.client}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-display text-6xl sm:text-7xl md:text-8xl mb-6"
          >
            {project.name}
          </motion.h3>

          {/* Tech stack pills — staggered */}
          <div
            className={`flex flex-wrap gap-2 mb-6 ${isRight ? "md:justify-end" : ""}`}
          >
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, borderColor: "#E63946" }}
                className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-secondary transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Result */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-display text-white/80 mb-4"
          >
            &ldquo;{project.result}&rdquo;
          </motion.p>

          {/* Links */}
          <div
            className={`flex gap-4 ${isRight ? "md:justify-end" : ""}`}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            )}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project image */}
        <motion.div
          style={{ y: imgY }}
          initial={{
            opacity: 0,
            x: isRight ? -60 : 60,
            scale: 0.85,
          }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${isRight ? "md:col-start-1 md:row-start-1" : ""} md:direction-ltr`}
        >
          <motion.div
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Decorative number */}
      <span className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none z-10">
        04
      </span>

      {projects.map((project, i) => (
        <ProjectBlock key={project.name} project={project} index={i} />
      ))}
    </section>
  );
}
