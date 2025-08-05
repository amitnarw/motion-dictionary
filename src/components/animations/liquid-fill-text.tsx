
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
            d="M -10 60 Q 200 40 400 60 Q 600 80 810 60 V 120 H -10 Z"
            className="fill-primary"
            animate={{
              d: [
                "M -10 60 Q 200 40 400 60 Q 600 80 810 60 V 120 H -10 Z",
                "M -10 60 Q 200 80 400 60 Q 600 40 810 60 V 120 H -10 Z",
                "M -10 60 Q 200 40 400 60 Q 600 80 810 60 V 120 H -10 Z",
              ],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <motion.path
             d="M -10 60 Q 190 80 400 60 Q 610 40 810 60 V 120 H -10 Z"
            className="fill-accent"
            style={{ opacity: 0.5 }}
            animate={{
              d: [
                "M -10 60 Q 190 80 400 60 Q 610 40 810 60 V 120 H -10 Z",
                "M -10 60 Q 190 40 400 60 Q 610 80 810 60 V 120 H -10 Z",
                "M -10 60 Q 190 80 400 60 Q 610 40 810 60 V 120 H -10 Z",
              ],
            }}
             transition={{
              duration: 5,
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
