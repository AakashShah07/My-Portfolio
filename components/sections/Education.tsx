"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        07
      </motion.span>

      <div className="max-w-6xl mx-auto w-full">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-5xl md:text-7xl">Education</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-12 max-w-2xl"
        >
          My academic background that built the foundation for my engineering
          career.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-accent rounded-l-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.15 + 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <GraduationCap className="w-8 h-8 text-accent mb-4" />
              </motion.div>

              <h3 className="font-display text-xl md:text-2xl mb-1">
                {edu.degree}
              </h3>
              <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">
                {edu.school}
              </p>
              <p className="text-secondary text-sm mb-1">{edu.location}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-secondary font-mono text-sm">
                  {edu.period}
                </span>
                <span className="text-accent font-mono text-sm font-medium">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-5xl md:text-7xl">Certifications</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-12 max-w-2xl"
        >
          Industry-recognized credentials that validate my technical expertise.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 transition-all duration-300 hover:border-accent/30"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-accent rounded-l-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.12 + 0.1,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                <Award className="w-6 h-6 text-accent mb-3" />
              </motion.div>

              <h3 className="font-display text-lg mb-1">{cert.name}</h3>
              <p className="text-secondary text-sm font-mono">{cert.issuer}</p>
              {cert.year && (
                <span className="inline-block mt-3 px-2 py-0.5 text-xs font-mono border border-white/10 rounded-full text-secondary">
                  {cert.year}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
