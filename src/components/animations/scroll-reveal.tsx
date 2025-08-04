"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-card text-card-foreground p-8 rounded-lg"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
    >
      <h3 className="font-bold text-lg">Revealed</h3>
    </motion.div>
  );
};
