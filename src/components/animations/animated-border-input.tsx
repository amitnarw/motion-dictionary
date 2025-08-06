
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedBorderInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="your-email@gmail.com"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn`
          w-full p-3 bg-transparent text-foreground rounded-md
          border-b border-border 
          focus:outline-none focus:ring-0
          transition-colors duration-300
        `}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
