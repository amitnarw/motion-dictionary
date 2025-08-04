"use client";

import { motion } from "framer-motion";

export function TextReveal() {
  return (
    <div className="z-10 flex min-h-[10rem] items-center justify-center rounded-lg bg-background">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
        <motion.span
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Animate
        </motion.span>
        Text
      </h1>
    </div>
  );
}
