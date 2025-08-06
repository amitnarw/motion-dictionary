
"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode, FC } from "react";
import { cn } from "@/lib/utils";

interface PageScrollRevealTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-foreground"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export function PageScrollRevealText({
  text,
  className,
}: PageScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = text.split(" ");

  return (
    <p
        ref={containerRef}
        className={cn("flex flex-wrap text-muted-foreground/30", className)}
    >
        {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
            </Word>
        );
        })}
    </p>
  );
}
