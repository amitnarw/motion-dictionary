
"use client";
import { motion } from 'framer-motion';

export function RevealBgButton() {
  return (
    <button className="relative overflow-hidden rounded-xl bg-secondary px-6 py-3 text-lg font-medium text-secondary-foreground shadow-lg">
      <span className="relative z-10">Hover Me</span>
      <motion.div
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-primary"
      />
    </button>
  );
}
