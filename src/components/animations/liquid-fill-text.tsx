
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LiquidFillText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("relative", className)}>
       <svg width="100%" viewBox="0 0 1200 300" className="w-full">
         <defs>
           <clipPath id="text-clip-path-dictionary">
            <text
                x="100%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="end"
                className={cn("select-none", className)}
            >
                {text}
            </text>
           </clipPath>
         </defs>

         <text
            x="100%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="end"
            className={cn("fill-current text-foreground select-none", className)}
        >
            {text}
        </text>

         <g clipPath="url(#text-clip-path-dictionary)">
           <rect width="1200" height="300" className="fill-foreground" />
           <motion.path
             d="M -200 150 Q 200 180 600 150 Q 1000 120 1400 150 V 300 H -200 Z"
             className="fill-accent"
             style={{ opacity: 0.8 }}
             animate={{
               d: [
                 "M -200 150 Q 200 180 600 150 Q 1000 120 1400 150 V 300 H -200 Z",
                 "M -200 150 Q 200 120 600 150 Q 1000 180 1400 150 V 300 H -200 Z",
                 "M -200 150 Q 200 180 600 150 Q 1000 120 1400 150 V 300 H -200 Z",
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
             d="M -200 150 Q 250 120 600 150 Q 950 180 1400 150 V 300 H -200 Z"
             className="fill-primary"
             animate={{
               d: [
                "M -200 150 Q 250 120 600 150 Q 950 180 1400 150 V 300 H -200 Z",
                "M -200 150 Q 250 180 600 150 Q 950 120 1400 150 V 300 H -200 Z",
                "M -200 150 Q 250 120 600 150 Q 950 180 1400 150 V 300 H -200 Z",
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
