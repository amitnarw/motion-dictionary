
"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export function SlidingTextButton() {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative block overflow-hidden whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow-lg"
    >
      <span className="relative">
        <motion.span
          variants={{
            initial: { y: 0 },
            hovered: { y: '-125%' },
          }}
          initial="initial"
          animate={isHovered ? 'hovered' : 'initial'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="inline-block"
        >
          Hover Me
        </motion.span>
        <motion.span
          variants={{
            initial: { y: '125%' },
            hovered: { y: 0 },
          }}
          initial="initial"
          animate={isHovered ? 'hovered' : 'initial'}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          Let's Go!
        </motion.span>
      </span>
    </motion.button>
  );
}
