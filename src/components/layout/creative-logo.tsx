
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

  const letterAnimations = [
    { scale: 1.2, y: -2 }, // M
    { rotate: 15, y: -3 }, // o
    { y: -5, scaleY: 1.1 }, // t
    { scale: 0.8, y: 2 }, // i
    { rotate: -15, y: -3 }, // o
    { y: 5, scaleX: 1.2 }, // n
    { scale: 1.1, rotate: 5, y: -2 }, // a
    { y: -4, rotate: -10 }, // r
    { scale: 1.2, y: -1 }, // y
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex items-center text-xl font-bold cursor-pointer"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={{ ...letterAnimations[index], transition: { duration: 0.2 } }}
          className={index === 0 ? "text-primary" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
