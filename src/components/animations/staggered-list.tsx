"use client";
import { motion } from "framer-motion";

export function StaggeredList() {
    const container = {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      };

  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col gap-2 items-center">
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 1</motion.li>
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 2</motion.li>
      <motion.li variants={item} className="bg-muted p-2 rounded w-3/4 text-center">Item 3</motion.li>
    </motion.ul>
  );
}
