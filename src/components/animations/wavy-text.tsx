
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WavyTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function WavyText({
  text = "Wavy Text",
  className,
  delay = 0,
  duration = 0.05,
}: WavyTextProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [
        "0%",
        "-20%",
        "0%",
        "20%",
        "0%",
      ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2
      },
    },
  };

  return (
    <motion.h1
      className={cn("flex overflow-hidden font-headline text-4xl", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{ duration: 1, delay: index * duration }}
          style={{display: 'inline-block'}}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
