"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapStaggeredFade() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex gap-2">
      <div className="w-12 h-12 bg-primary rounded-md" />
      <div className="w-12 h-12 bg-accent rounded-md" />
      <div className="w-12 h-12 bg-secondary rounded-md" />
    </div>
  );
}
