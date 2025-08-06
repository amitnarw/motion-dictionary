
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text?: string;
  className?: string;
  direction?: "left" | "right";
  fromColor?: string;
  toColor?: string;
  size?: string;
}

export function ScrollRevealText({
  text = "Scroll to reveal text",
  className,
  direction = "left",
  fromColor = "hsl(var(--primary))",
  toColor = "hsl(var(--accent))",
  size = "text-4xl md:text-6xl"
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  const gradientDirection = direction === "left" 
    ? `linear-gradient(to right, ${fromColor}, ${toColor})`
    : `linear-gradient(to left, ${fromColor}, ${toColor})`;

  return (
    <div ref={containerRef} className={cn("py-20", className)}>
      <motion.h1 
        className={cn("font-bold text-transparent bg-clip-text", size)}
        style={{ 
            backgroundImage: gradientDirection,
            backgroundRepeat: 'no-repeat',
            backgroundSize: backgroundSize,
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
