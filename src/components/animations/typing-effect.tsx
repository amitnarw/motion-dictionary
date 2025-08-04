"use client";
import { motion } from "framer-motion";

const text = "Welcome to AniMotion";
const characters = Array.from(text);

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export function TypingEffect() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex overflow-hidden font-headline font-bold text-4xl md:text-6xl"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className={index > 11 ? "text-primary" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
