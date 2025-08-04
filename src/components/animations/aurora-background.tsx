"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuroraBackground({className}: {className?: string}) {
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center bg-transparent transition-colors duration-200 overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden">
         <div 
            className="absolute h-[200%] w-[200%] md:w-[150%] lg:w-[125%] bg-[radial-gradient(125%_125%_at_50%_10%,hsl(var(--primary))_40%,hsl(var(--accent))_100%)] opacity-20"
         />
      </div>
      <motion.div
        initial={{ opacity: 0.5, y: 40 }}
        animate={{ opacity: [0.1, 0.3, 0.1], y: [40, 0, 40] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary))_0%,rgba(255,255,255,0)_50%)] opacity-30"
      />
       <motion.div
        initial={{ opacity: 0.5, y: -40 }}
        animate={{ opacity: [0.1, 0.3, 0.1], y: [-40, 0, -40] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent))_0%,rgba(255,255,255,0)_50%)] opacity-30"
      />
    </div>
  );
}
