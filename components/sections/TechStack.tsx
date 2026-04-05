"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  cloud: "Cloud",
  tools: "Tools & Platforms",
};

const categoryColors: Record<string, string> = {
  languages: "border-yellow-500/30 hover:border-yellow-500/60",
  frontend: "border-blue-500/30 hover:border-blue-500/60",
  backend: "border-green-500/30 hover:border-green-500/60",
  databases: "border-purple-500/30 hover:border-purple-500/60",
  cloud: "border-orange-500/30 hover:border-orange-500/60",
  tools: "border-cyan-500/30 hover:border-cyan-500/60",
};

const categoryDotColors: Record<string, string> = {
  languages: "bg-yellow-500",
  frontend: "bg-blue-500",
  backend: "bg-green-500",
  databases: "bg-purple-500",
  cloud: "bg-orange-500",
  tools: "bg-cyan-500",
};

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        03
      </motion.span>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-5xl md:text-7xl">Tech Stack</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-16 max-w-2xl"
        >
          Technologies and tools I use to bring products to life. Always
          learning, always building.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-2 h-2 rounded-full ${categoryDotColors[category]}`}
                />
                <h3 className="font-display text-xl text-white/80">
                  {categoryLabels[category]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + i * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`px-3 py-1.5 text-xs font-mono border rounded-full text-secondary hover:text-white transition-all duration-200 ${categoryColors[category]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
