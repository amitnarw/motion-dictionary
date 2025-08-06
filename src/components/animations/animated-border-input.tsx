
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AnimatedBorderInput() {
  const [isFocused, setIsFocused] = useState(false);

  const topVariant = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.2, ease: "linear" } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  const rightVariant = {
    initial: { height: "0%" },
    animate: { height: "100%", transition: { duration: 0.2, ease: "linear", delay: 0.2 } },
     exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  const bottomVariant = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.2, ease: "linear", delay: 0.4 } },
     exit: { opacity: 0, transition: { duration: 0.1 } },
  };
  const leftVariant = {
    initial: { height: "0%" },
    animate: { height: "100%", transition: { duration: 0.2, ease: "linear", delay: 0.6 } },
     exit: { opacity: 0, transition: { duration: 0.1 } },
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
            <>
              {/* Top */}
              <motion.div
                variants={topVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
              />
              {/* Right */}
              <motion.div
                variants={rightVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-primary to-accent"
              />
              {/* Bottom */}
              <motion.div
                variants={bottomVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-primary to-accent"
              />
              {/* Left */}
              <motion.div
                variants={leftVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-primary to-accent"
              />
            </>
        )}
      </AnimatePresence>
    </div>
  );
}
