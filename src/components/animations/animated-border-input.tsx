
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AnimatedBorderInput() {
  const [isFocused, setIsFocused] = useState(false);

  const variants = {
    initial: (isFocused: boolean) => ({
      width: isFocused ? "0%" : "100%",
      left: isFocused ? "auto" : 0,
      right: isFocused ? 0 : "auto",
    }),
    animate: {
      width: "100%",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      width: "0%",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="your-email@gmail.com"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="
          w-full p-3 bg-background text-foreground rounded-lg
          border-2 border-border 
          focus:outline-none focus:ring-0
          transition-colors duration-300
          focus:border-transparent
        "
      />
      <AnimatePresence>
        <motion.div
          key={isFocused ? "focused" : "unfocused"}
          custom={isFocused}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="
            absolute bottom-0 h-[2px]
            bg-gradient-to-r from-primary to-accent
          "
          aria-hidden="true"
        />
      </AnimatePresence>
    </div>
  );
}
