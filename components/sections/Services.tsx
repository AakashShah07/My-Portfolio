"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Server, Database } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Cloud: Smartphone,
  Database,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Decorative number — parallax */}
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        04
      </motion.span>

      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl mb-4"
        >
          What I Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-16 max-w-2xl"
        >
          From concept to deployment — I handle the full spectrum of web
          development to bring your ideas into reality.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 cursor-default transition-all duration-300 hover:border-accent/30"
              >
                {/* Red left border on hover */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-accent rounded-l-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.15,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-accent mb-4" />
                </motion.div>
                <h3 className="font-display text-xl mb-2">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
