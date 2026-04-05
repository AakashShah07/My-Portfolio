"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Briefcase, Code2 } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-accent">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Decorative number — parallax */}
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        02
      </motion.span>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — statement with reveal */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="block"
              >
                I build things
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="block"
              >
                that <span className="text-accent">work</span>.
              </motion.span>
            </h2>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-secondary border border-white/10 rounded-full">
                <MapPin className="w-3 h-3 text-accent" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-secondary border border-white/10 rounded-full">
                <Briefcase className="w-3 h-3 text-accent" />
                Full-Stack Developer
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-secondary border border-white/10 rounded-full">
                <Code2 className="w-3 h-3 text-accent" />
                B.Tech AI & ML
              </span>
            </motion.div>
          </motion.div>

          {/* Right — bio + stats */}
          <div className="flex flex-col justify-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-secondary text-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-secondary text-base leading-relaxed"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-r from-accent/40 to-transparent origin-left"
            />

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-secondary text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
