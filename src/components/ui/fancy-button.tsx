
"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface FancyButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export function FancyButton({ text, icon }: FancyButtonProps) {
  const textVariants: Variants = {
    rest: {
      color: "hsl(var(--primary))",
    },
    hover: {
      color: "hsl(var(--primary-foreground))",
    },
  };

  const liquidVariants: Variants = {
    rest: {
      height: "0%",
    },
    hover: {
      height: "100%",
    },
  };

  return (
    <motion.button
      className="relative px-6 py-2 font-medium text-primary transition-colors duration-300 border border-primary rounded-full overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className="relative z-10 flex items-center"
        variants={textVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {text}
        {icon}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-primary"
        variants={liquidVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.button>
  );
}
