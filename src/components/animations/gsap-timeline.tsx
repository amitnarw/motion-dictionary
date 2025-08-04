"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    if(containerRef.current) {
        const elements = containerRef.current.children;
        tl.to(elements[0], { x: 50, duration: 1, ease: "power1.inOut" })
          .to(elements[1], { y: -20, duration: 0.5 }, "-=0.5")
          .to(elements[2], { rotation: 360, duration: 1 }, "+=0.2");
    }
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center gap-2">
      <div className="w-10 h-10 bg-primary rounded-md" />
      <div className="w-10 h-10 bg-accent rounded-full" />
      <div className="w-10 h-10 bg-secondary rounded-lg" />
    </div>
  );
}
