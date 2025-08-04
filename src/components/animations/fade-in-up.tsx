"use client";
import { motion } from "framer-motion";

export function FadeInUp() {
  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_IN_VARIANTS}
      className="bg-card text-card-foreground p-8 rounded-lg"
    >
      <h3 className="font-bold text-lg">Fade In Up</h3>
    </motion.div>
  );
}
