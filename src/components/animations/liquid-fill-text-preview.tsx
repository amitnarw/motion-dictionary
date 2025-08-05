
"use client";

import { motion } from "framer-motion";

export function LiquidFillTextPreview() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <svg width="100%" viewBox="0 0 400 100" className="max-w-md mx-auto">
        <defs>
          <clipPath id="text-clip-path-preview">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-7xl font-bold tracking-tighter select-none"
            >
              Animate
            </text>
          </clipPath>
        </defs>

        {/* Fallback for non-supporting browsers */}
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-7xl font-bold tracking-tighter fill-current text-foreground"
        >
             Animate
        </text>

        <g clipPath="url(#text-clip-path-preview)">
          <rect width="400" height="100" className="fill-foreground" />
           <motion.path
            d="M -10 50 Q 95 60 200 50 Q 305 40 410 50 V 100 H -10 Z"
            className="fill-accent"
            style={{ opacity: 0.8 }}
            animate={{
              d: [
                "M -10 50 Q 95 60 200 50 Q 305 40 410 50 V 100 H -10 Z",
                "M -10 50 Q 95 40 200 50 Q 305 60 410 50 V 100 H -10 Z",
                "M -10 50 Q 95 60 200 50 Q 305 40 410 50 V 100 H -10 Z",
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
            d="M -10 50 Q 100 40 200 50 Q 300 60 410 50 V 100 H -10 Z"
            className="fill-primary"
            animate={{
              d: [
                "M -10 50 Q 100 40 200 50 Q 300 60 410 50 V 100 H -10 Z",
                "M -10 50 Q 100 60 200 50 Q 300 40 410 50 V 100 H -10 Z",
                "M -10 50 Q 100 40 200 50 Q 300 60 410 50 V 100 H -10 Z",
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
