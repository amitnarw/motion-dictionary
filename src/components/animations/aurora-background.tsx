"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black transition-colors duration-200 overflow-hidden rounded-lg">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      </div>
      <div className="relative z-10 text-white font-bold">Aurora</div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: [0, 1, 0], y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      />
    </div>
  );
}
