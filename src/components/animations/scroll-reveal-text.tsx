
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
    [0.2, 0.8], // Animate between 20% and 80% of scroll progress
    direction === 'left' 
      ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] 
      : ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
  );

  const textClasses = cn("font-bold", size);

  return (
    // Add a container with a defined height to make it scrollable in the preview
    <div className="h-[200vh] w-full flex items-center justify-center">
        <div ref={containerRef} className={cn("relative py-10", className)}>
            <h1 className={cn(textClasses, "text-center")} style={{ color: fromColor }}>
                {text}
            </h1>
            <motion.h1 
                className={cn(textClasses, "absolute inset-0 text-center py-10")}
                style={{ 
                    clipPath: clipPathValue,
                    color: toColor
                }}
            >
                {text}
            </motion.h1>
        </div>
    </div>
  );
}
