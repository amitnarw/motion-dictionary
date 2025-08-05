"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LiquidFillText() {
  return (
    <div className="relative w-full text-center">
      <svg width="100%" viewBox="0 0 800 120" className="max-w-4xl mx-auto">
        <defs>
          <clipPath id="text-clip-path">
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase select-none"
            >
              Animate Anything
            </text>
          </clipPath>
        </defs>
        
        {/* Fallback for non-supporting browsers */}
        <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase fill-current text-foreground"
        >
             Animate Anything
        </text>

        <g clipPath="url(#text-clip-path)">
          {/* Background fill */}
          <rect width="800" height="120" className="fill-foreground" />
          
          {/* Liquid Wave */}
          <motion.path
            d="M -10 120 Q 200 100 400 120 Q 600 140 810 120 V 240 H -10 Z"
            className="fill-primary"
            animate={{
              y: ["0%", "-100%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <motion.path
            d="M -10 120 Q 190 140 400 120 Q 610 100 810 120 V 240 H -10 Z"
            className="fill-accent"
            style={{ opacity: 0.5 }}
             animate={{
              y: ["0%", "-100%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />
        </g>
      </svg>
    </div>
  );
}
