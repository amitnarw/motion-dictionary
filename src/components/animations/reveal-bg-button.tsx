
"use client";
import { motion } from 'framer-motion';

export function RevealBgButton({ duration = 0.3 }: { duration?: number }) {
  return (
    <motion.button 
        className="relative overflow-hidden rounded-xl bg-secondary px-6 py-3 text-lg font-medium text-secondary-foreground shadow-lg"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
      <span className="relative z-10">Hover Me</span>
      <motion.div
        variants={{
            rest: { y: '100%' },
            hover: { y: 0 }
        }}
        transition={{ duration, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-primary"
      />
    </motion.button>
  );
}
