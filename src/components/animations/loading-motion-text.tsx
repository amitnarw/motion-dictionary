
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["M", "o", "t", "i", "o", "n"];
const expandedWords = ["move", "orbit", "interact", "inspire", "own", "now"];

export function LoadingMotionText() {
  const [currentWords, setCurrentWords] = useState(words);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentWords(expandedWords);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentWords(words);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAnimating(false);
    };
    sequence();
  }, []);

  const containerVariants = {
    initial: { transition: { staggerChildren: 0.1 } },
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { y: -20, opacity: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div 
        className="font-black text-[150px] sm:text-[130px] lg:text-[120px] flex justify-start w-full"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
    >
        <AnimatePresence>
            {isAnimating ? (
            currentWords.map((word, i) => (
                <motion.div
                    key={word + i}
                    className="inline-block whitespace-nowrap"
                    variants={letterVariants}
                    exit="exit"
                >
                    <span className={word.length > 1 ? `text-4xl lg:text-5xl font-semibold px-2 first:pl-0` : `tracking-tighter ${i===0 ? 'text-primary' : 'text-foreground'}`}>{word}</span>
                </motion.div>
            ))
            ) : (
                <motion.h1 
                    className="tracking-tighter"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <span className="text-primary">M</span>otion
                </motion.h1>
            )}
        </AnimatePresence>
    </motion.div>
  );
}
