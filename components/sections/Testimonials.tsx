"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Decorative number — parallax */}
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        06
      </motion.span>

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl mb-4"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-16 max-w-2xl"
        >
          Where I&apos;ve worked and the impact I&apos;ve made. Each role
          sharpened my skills and broadened my perspective.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-[7px] md:left-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent origin-top"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.15 + 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-3 w-4 h-4 md:w-5 md:h-5 rounded-full bg-dark border-2 border-accent z-10"
                >
                  <div className="absolute inset-1 rounded-full bg-accent animate-pulse" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-accent/30"
                >
                  {/* Red left border on hover */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-accent rounded-l-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-mono text-sm uppercase tracking-widest">
                        {exp.company}
                      </p>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-secondary font-mono text-sm mt-2 md:mt-0"
                    >
                      {exp.period}
                    </motion.p>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: i * 0.15 + 0.4 + ti * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="px-2 py-0.5 text-xs font-mono border border-white/10 rounded text-secondary/70"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
