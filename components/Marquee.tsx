"use client";

import { motion } from "framer-motion";
import { marqueeWords } from "@/lib/data";

export default function Marquee() {
  const words = [...marqueeWords, ...marqueeWords];

  return (
    <div className="py-8 overflow-hidden border-y border-white/[0.06] bg-white/[0.01]">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-4xl text-white/10 flex items-center gap-8"
          >
            {word}
            <span className="text-accent/30 text-lg">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
