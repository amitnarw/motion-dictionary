
"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface FancyButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export function FancyButton({ text, icon, className, textClassName }: FancyButtonProps) {
  const textVariants: Variants = {
    rest: {
      color: "hsl(var(--primary))",
    },
    hover: {
      color: "hsl(var(--primary-foreground))",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
  };

  const liquidVariants: Variants = {
    rest: {
      y: "105%",
    },
    hover: {
      y: "0%",
    },
  };
  
  const waveVariants1: Variants = {
    rest: {},
    hover: {
        d: [
            "M -50 20 Q 45 30 100 20 Q 155 10 200 20 V 50 H -50 Z",
            "M -50 20 Q 45 10 100 20 Q 155 30 200 20 V 50 H -50 Z",
            "M -50 20 Q 45 30 100 20 Q 155 10 200 20 V 50 H -50 Z",
        ],
        transition: { duration: 4, ease: "linear", repeat: Infinity }
    }
  }

  const waveVariants2: Variants = {
    rest: {},
    hover: {
        d: [
            "M -50 20 Q 50 10 100 20 Q 150 30 200 20 V 50 H -50 Z",
            "M -50 20 Q 50 30 100 20 Q 150 10 200 20 V 50 H -50 Z",
            "M -50 20 Q 50 10 100 20 Q 150 30 200 20 V 50 H -50 Z",
        ],
        transition: { duration: 4, ease: "linear", repeat: Infinity, delay: 1 }
    }
  }

  return (
    <motion.button
      className={cn("relative font-medium border border-primary rounded-full overflow-hidden", className)}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className={cn("relative z-10 flex items-center justify-center h-full w-full", textClassName)}
        variants={textVariants}
      >
        {text}
        {icon}
      </motion.span>
      <motion.div
        className="absolute inset-0 z-0"
        variants={liquidVariants}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
         <svg viewBox="0 0 150 50" preserveAspectRatio="none" className="absolute h-full w-full">
            <motion.path 
                variants={waveVariants1} 
                className="fill-accent"
                style={{ opacity: 0.8 }}
            />
             <motion.path 
                variants={waveVariants2} 
                className="fill-primary"
            />
         </svg>
      </motion.div>
    </motion.button>
  );
}
