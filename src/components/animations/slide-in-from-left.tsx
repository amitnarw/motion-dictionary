"use client";
import { motion } from "framer-motion";

export function SlideInFromLeft({ duration = 0.5, stiffness = 100 }) {
    const slideIn = {
        hidden: { x: "-10vw", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness, duration } },
    };

  return (
    <motion.div variants={slideIn} initial="hidden" animate="visible" className="bg-card text-card-foreground p-8 rounded-lg">
      <h3 className="font-bold text-lg">Sliding In</h3>
    </motion.div>
  );
}
