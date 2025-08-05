
"use client";

import { motion } from "framer-motion";

export function LiquidFillText() {
  return (
    <div className="relative w-full text-center h-48 flex flex-col items-center justify-center">
      <svg width="100%" viewBox="0 0 800 200" className="max-w-5xl mx-auto">
        <defs>
          <clipPath id="text-clip-path-motion">
            <text
              x="0"
              y="48%"
              dominantBaseline="alphabetic"
              textAnchor="start"
              className="text-9xl md:text-[10rem] font-bold tracking-tighter select-none"
            >
              Motion
            </text>
          </clipPath>
          <clipPath id="text-clip-path-dictionary">
             <text
              x="100%"
              y="52%"
              dominantBaseline="hanging"
              textAnchor="end"
              className="text-9xl md:text-[10rem] font-bold tracking-tighter select-none"
            >
              Dictionary
            </text>
          </clipPath>
        </defs>
        
        {/* Render Motion as static text */}
        <text
            x="0"
            y="48%"
            dominantBaseline="alphabetic"
            textAnchor="start"
            className="text-9xl md:text-[10rem] font-bold tracking-tighter fill-current text-foreground"
        >
             Motion
        </text>

        {/* Fallback for Dictionary */}
        <text
            x="100%"
            y="52%"
            dominantBaseline="hanging"
            textAnchor="end"
            className="text-9xl md:text-[10rem] font-bold tracking-tighter fill-current text-foreground lg:hidden"
        >
             Dictionary
        </text>
        
         <g clipPath="url(#text-clip-path-dictionary)" className="hidden lg:block">
          <rect width="800" height="200" className="fill-foreground" />
           <motion.path
            d="M -10 100 Q 190 120 400 100 Q 610 80 810 100 V 200 H -10 Z"
            className="fill-accent"
            style={{ opacity: 0.8 }}
            animate={{
              d: [
                "M -10 100 Q 190 120 400 100 Q 610 80 810 100 V 200 H -10 Z",
                "M -10 100 Q 190 80 400 100 Q 610 120 810 100 V 200 H -10 Z",
                "M -10 100 Q 190 120 400 100 Q 610 80 810 100 V 200 H -10 Z",
              ],
            }}
             transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              delay: 1,
            }}
          />
           <motion.path
            d="M -10 100 Q 200 80 400 100 Q 600 120 810 100 V 200 H -10 Z"
            className="fill-primary"
            animate={{
              d: [
                "M -10 100 Q 200 80 400 100 Q 600 120 810 100 V 200 H -10 Z",
                "M -10 100 Q 200 120 400 100 Q 600 80 810 100 V 200 H -10 Z",
                "M -10 100 Q 200 80 400 100 Q 600 120 810 100 V 200 H -10 Z",
              ],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </g>
      </svg>
    </div>
  );
}
