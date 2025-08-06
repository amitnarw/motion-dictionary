
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedBorderInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <AnimatePresence>
        {isFocused && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            width="100%"
            height="100%"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="calc(var(--radius) - 2px)" 
              ry="calc(var(--radius) - 2px)"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="1000"
              variants={{
                hidden: { strokeDashoffset: 1000, transition: { duration: 0.5, ease: "easeOut" } },
                visible: { strokeDashoffset: 0, transition: { duration: 0.5, ease: "easeIn" } },
              }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
      <input
        type="text"
        placeholder="your-email@gmail.com"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn`
          relative w-full p-3 bg-background text-foreground rounded-md
          border border-border 
          focus:outline-none focus:ring-0
          transition-colors duration-300
        `}
      />
    </div>
  );
}
