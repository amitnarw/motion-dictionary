"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = ["Authenticating...", "Fetching data...", "Almost there..."];

export function MultiStepLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={steps[index]}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-semibold text-muted-foreground"
      >
        {steps[index]}
      </motion.p>
    </AnimatePresence>
  );
}
