"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SearchBar } from "./search-bar";
import { TypingEffect } from "./animations/typing-effect";

export function ParallaxHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <header
      ref={containerRef}
      className="relative p-4 md:p-6 h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-grid-zinc-400/25 dark:bg-grid-zinc-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{ y, opacity }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
        style={{ y, opacity }}
      />
      <motion.div 
        className="z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center mb-4">
          <TypingEffect />
        </div>
        <p className="max-w-2xl text-lg text-muted-foreground mx-auto">
          A curated collection of production-ready animations for your next project.
        </p>
        <div className="mt-8 flex justify-center">
            <SearchBar placeholder="Search for animations..." />
        </div>
      </motion.div>
    </header>
  );
}
