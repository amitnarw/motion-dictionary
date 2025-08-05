
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const DURATION = 0.25;
const STAGGER = 0.025;

export function FancyButton() {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-4 py-2 text-lg font-medium text-primary transition-colors duration-300 hover:text-primary/80"
    >
      <span className="relative z-10 flex items-center gap-2">
         Get Started <ArrowRight className="h-5 w-5" />
      </span>
      <motion.div
        initial={{
          y: "100%",
        }}
        animate={{
          y: isHovered ? "0%" : "100%",
        }}
        transition={{
          duration: DURATION,
        }}
        className="absolute inset-0 z-0 bg-primary/10"
      />
      {isHovered && <Particles />}
    </motion.button>
  );
};

function Particles() {
    // A random number from 30 to 50
    const count = Math.floor(Math.random() * (50 - 30 + 1) + 30);
    return (
        <div className="absolute inset-0">
            {Array.from({ length: count }).map((_, i) => (
                <Particle key={i} />
            ))}
        </div>
    )
}

const PARTICLE_COLORS = ["#29ABE2", "#29E2B6", "#0ae448", "#fec5fb"];

function Particle() {
    const [x, y] = [Math.random() * 100 - 50, Math.random() * 100 - 50];
    const [size] = [Math.random() * 6 + 4];
    const [color] = [PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]];

    return (
        <motion.div
            className="absolute z-50 rounded-full"
            style={{ 
                backgroundColor: color, 
                left: '50%',
                top: '50%',
            }}
            initial={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
            }}
            animate={{
                x: x,
                y: y,
                scale: 0,
                opacity: 0,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
        />
    )
}
