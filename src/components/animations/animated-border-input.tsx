
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AnimatedBorderInput() {
  const [isFocused, setIsFocused] = useState(false);

  const variants = {
    initial: {
      width: "0%",
      left: "auto",
      right: 0,
    },
    animate: {
      width: "100%",
      left: 0,
      right: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      width: "0%",
      left: 0,
      right: "auto",
      transition: { duration: 0.4, ease: "easeIn" },
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
        {isFocused && (
            <motion.div
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
        )}
      </AnimatePresence>
    </div>
  );
}
