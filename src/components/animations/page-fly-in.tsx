"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  enter: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.3, ease: "easeIn" } }
};

export function PageFlyIn() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="w-48 h-24 bg-card rounded-lg flex items-center justify-center"
    >
      <h3 className="font-bold text-lg">Page Content</h3>
    </motion.div>
  );
}
