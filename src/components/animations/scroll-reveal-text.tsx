
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
  fromColor = "hsl(var(--muted-foreground))",
  toColor = "hsl(var(--foreground))",
  size = "text-4xl md:text-6xl"
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' 
      ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] 
      : ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
  );

  const textClasses = cn("font-bold", size);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
       <h1 className={cn(textClasses, "text-center")} style={{ color: fromColor }}>
        {text}
      </h1>
      <motion.h1 
        className={cn(textClasses, "absolute inset-0 text-center")}
        style={{ 
            clipPath: clipPathValue,
            color: toColor
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}
