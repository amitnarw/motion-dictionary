
"use client";

import { motion } from "framer-motion";

export function InteractiveTextPreview() {
  const text = "Motionary";
  const letters = Array.from(text);

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
    <div
      className="flex items-center justify-center text-4xl font-bold cursor-pointer"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          whileHover={{ ...letterAnimations[index], transition: { duration: 0.2 } }}
          className={index === 0 ? "text-primary" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
