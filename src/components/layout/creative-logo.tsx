
"use client";

import { motion } from "framer-motion";

export function CreativeLogo() {
  const text = "Motionary";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex items-center text-xl font-bold"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={index === 0 ? "text-primary" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
