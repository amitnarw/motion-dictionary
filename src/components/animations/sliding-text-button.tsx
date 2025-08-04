
"use client";
import { motion } from 'framer-motion';

export function SlidingTextButton() {
  const textVariants = {
    rest: { y: 0 },
    hover: { y: '-125%' },
  };

  const newTextVariants = {
    rest: { y: '125%' },
    hover: { y: 0 },
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow-lg"
    >
      <span className="relative inline-block h-full w-full">
        <motion.span
          variants={textVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-block"
        >
          Hover Me
        </motion.span>
        <motion.span
          variants={newTextVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute left-0"
        >
          Let's Go!
        </motion.span>
      </span>
    </motion.button>
  );
}

