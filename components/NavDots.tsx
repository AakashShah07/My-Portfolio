"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navSections } from "@/lib/data";

export default function NavDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navSections.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {navSections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group relative flex items-center"
          aria-label={`Go to ${section.label}`}
        >
          {/* Tooltip */}
          <span className="absolute right-8 px-2 py-1 text-xs font-mono bg-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>

          {/* Dot */}
          <motion.span
            className="block rounded-full border border-white/20"
            animate={{
              width: active === i ? 12 : 8,
              height: active === i ? 12 : 8,
              backgroundColor: active === i ? "#E63946" : "transparent",
              borderColor: active === i ? "#E63946" : "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      ))}
    </nav>
  );
}
