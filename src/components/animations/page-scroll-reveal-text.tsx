
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PageScrollRevealTextProps {
  text?: string;
  className?: string;
  fromColor?: string;
  toColor?: string;
  size?: string;
}

export function PageScrollRevealText({
  text = "Scroll to reveal text",
  className,
  fromColor = "hsl(var(--muted-foreground))",
  toColor = "hsl(var(--foreground))",
  size = "text-4xl md:text-6xl"
}: PageScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // We use a clip-path to reveal the colored text underneath.
  // The clip-path goes from 0% width to 100% width.
  const clipPathValue = useTransform(
    scrollYProgress,
    [0.2, 0.8], // Animate between 20% and 80% of the component being in the viewport
    ["inset(0 100% 0 0)", "inset(0 0 0 0)"]
  );

  const textClasses = cn("font-bold", size);

  return (
    <div ref={containerRef} className={cn("relative py-4", className)}>
        <h2 className={cn(textClasses, "text-center")} style={{ color: fromColor }}>
            {text}
        </h2>
        <motion.h2
            className={cn(textClasses, "absolute inset-0 text-center")}
            style={{ 
                clipPath: clipPathValue,
                color: toColor,
            }}
        >
            {text}
        </motion.h2>
    </div>
  );
}
