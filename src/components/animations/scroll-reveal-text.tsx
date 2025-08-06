
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text?: string;
  className?: string;
}

export function ScrollRevealText({
  text = "Scroll down to reveal the text word by word.",
  className,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[100vh] max-w-4xl items-center bg-transparent px-2 py-4"
        }
      >
        <p
          className={
            "flex flex-wrap p-2 text-2xl font-bold text-muted-foreground/20 md:p-4 md:text-3xl lg:p-5 lg:text-4xl"
          }
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
      </div>
    </div>
  );
};

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
