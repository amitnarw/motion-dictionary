
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
      <motion.span
        className="relative z-10 flex items-center"
         variants={{
          rest: { color: "hsl(var(--primary))" },
          hover: { color: "hsl(var(--primary-foreground))" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
        {icon}
      </motion.span>
      <motion.div
        className="absolute inset-0 z-0 bg-primary"
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          borderRadius: "0 0 50% 50%",
        }}
      />
    </motion.button>
  );
}
