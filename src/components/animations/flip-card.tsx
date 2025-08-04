"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="w-40 h-24" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <div className="absolute w-full h-full flex items-center justify-center bg-primary rounded-lg text-primary-foreground" style={{ backfaceVisibility: 'hidden' }}>Front</div>
        <div className="absolute w-full h-full flex items-center justify-center bg-accent rounded-lg text-accent-foreground" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>Back</div>
      </motion.div>
    </div>
  );
}
