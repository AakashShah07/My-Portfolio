"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 28 });
  const trailX = useSpring(0, { stiffness: 150, damping: 20 });
  const trailY = useSpring(0, { stiffness: 150, damping: 20 });

  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const update = () => {
      cursorX.set(mousePos.current.x);
      cursorY.set(mousePos.current.y);
      trailX.set(mousePos.current.x);
      trailY.set(mousePos.current.y);
      rafRef.current = requestAnimationFrame(update);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(update);

    // Detect hoverable elements
    const onOverInteractive = () => setHovered(true);
    const onOutInteractive = () => setHovered(false);

    const observer = new MutationObserver(() => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea, select")
        .forEach((el) => {
          el.addEventListener("mouseenter", onOverInteractive);
          el.addEventListener("mouseleave", onOutInteractive);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial pass
    document
      .querySelectorAll("a, button, [role='button'], input, textarea, select")
      .forEach((el) => {
        el.addEventListener("mouseenter", onOverInteractive);
        el.addEventListener("mouseleave", onOutInteractive);
      });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [visible, cursorX, cursorY, trailX, trailY]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 56 : 36,
          height: hovered ? 56 : 36,
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-full h-full rounded-full border-2 border-accent/60" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 8 : 6,
          height: hovered ? 8 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-full h-full rounded-full bg-accent" />
      </motion.div>
    </>
  );
}
