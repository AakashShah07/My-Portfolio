"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Decorative number — parallax */}
      <motion.span
        style={{ y: bgY }}
        className="absolute top-10 left-6 md:left-16 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] select-none"
      >
        08
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-sm mb-4 tracking-widest uppercase"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="font-display text-6xl sm:text-7xl md:text-8xl mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="block"
          >
            Let&apos;s Build
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="block text-accent"
          >
            Something.
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto"
        >
          Have a project in mind or just want to chat? I&apos;m always open to
          new opportunities and interesting conversations. Let&apos;s connect!
        </motion.p>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 h-[1px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
        />

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-accent/30 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-secondary text-xs font-mono group-hover:text-white transition-colors">
              {personalInfo.email}
            </span>
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="group flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-accent/30 transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-secondary text-xs font-mono group-hover:text-white transition-colors">
              {personalInfo.phone}
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-lg">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-secondary text-xs font-mono">
              {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {[
            {
              href: personalInfo.github,
              label: "GitHub",
              svg: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              href: personalInfo.linkedin,
              label: "LinkedIn",
              svg: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: personalInfo.leetcode,
              label: "LeetCode",
              svg: (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              ),
            },
            {
              href: `mailto:${personalInfo.email}`,
              label: "Email",
              svg: <Mail className="w-5 h-5" />,
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={
                social.label !== "Email" ? "_blank" : undefined
              }
              rel={
                social.label !== "Email"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 border border-white/10 rounded-full text-secondary hover:text-white hover:border-accent transition-all duration-300"
              aria-label={social.label}
            >
              {social.svg}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-6 text-center"
      >
        <p className="text-secondary text-xs font-mono mb-1">
          Designed & Built by {personalInfo.name}
        </p>
        <p className="text-secondary/50 text-xs font-mono">
          &copy; 2026 All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
