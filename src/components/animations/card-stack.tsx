"use client";
import { motion } from 'framer-motion';

export function CardStack() {
  return (
    <div className="relative w-40 h-24">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full bg-card rounded-lg shadow-md border"
          style={{ originX: 0.5, originY: 1 }}
          animate={{
            y: -i * 8,
            scale: 1 - i * 0.05,
            zIndex: 3 - i,
          }}
          drag="y"
          dragConstraints={{ top: -100, bottom: 0 }}
          whileHover={{ scale: 1.05 - i * 0.05 }}
          whileTap={{ scale: 1.1 - i * 0.05, zIndex: 4 }}
        >
          <div className="p-2 text-sm">Card {i + 1}</div>
        </motion.div>
      ))}
    </div>
  );
}
