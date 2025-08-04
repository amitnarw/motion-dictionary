
"use client";
import { motion } from 'framer-motion';

export function SlidingTextButton() {

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative block overflow-hidden whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow-lg"
    >
      <span className="relative">
        <motion.span
          variants={{
            rest: { y: 0 },
            hover: { y: '-125%' },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-block"
        >
          Hover Me
        </motion.span>
        <motion.span
          variants={{
            rest: { y: '125%' },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          Let's Go!
        </motion.span>
      </span>
    </motion.button>
  );
}
