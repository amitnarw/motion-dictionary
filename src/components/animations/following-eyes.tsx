"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function FollowingEyes({ direction = 1 }: { direction?: number }) {
  const [rotate, setRotate] = useState(0);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyesRef.current) {
        const { left, top, width, height } = eyesRef.current.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        // Correct angle calculation: atan2 gives the angle in radians.
        // Convert to degrees and add 90 to align the pupil (which starts at the top)
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle + 90);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [direction]); // Add direction to dependencies to re-run effect on change

  return (
    <div ref={eyesRef} className="flex gap-4">
      {/* Eye 1 */}
      <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-foreground rounded-full relative">
          <motion.div
            animate={{ rotate: rotate * direction }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="w-full h-full"
          >
            <div className="w-5 h-5 bg-background rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
      {/* Eye 2 */}
       <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center">
        <div className="w-12 h-12 bg-foreground rounded-full relative">
          <motion.div
            animate={{ rotate: rotate * direction }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="w-full h-full"
          >
            <div className="w-5 h-5 bg-background rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
