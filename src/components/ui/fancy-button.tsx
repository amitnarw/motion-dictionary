
"use client";

import { motion } from "framer-motion";

export function FancyButton({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.button
      className="relative px-6 py-2 font-medium text-primary-foreground transition-colors duration-300 border border-primary rounded-full overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span className="relative z-10 flex items-center">
        {text}
        {icon}
      </span>
      <motion.div
        className="absolute inset-0 z-0 bg-primary"
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          borderRadius: "0 0 50% 50%",
          transform: "scaleY(1.5)",
          transformOrigin: "bottom",
        }}
      />
       <motion.span
        className="relative z-10 text-primary transition-colors duration-300"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
         transition={{ duration: 0.1 }}
      >
        {text}
        {icon}
      </motion.span>
    </motion.button>
  );
}
