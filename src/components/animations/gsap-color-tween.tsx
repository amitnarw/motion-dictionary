"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export function GsapColorTween() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(boxRef.current, {
      backgroundColor: "#29ABE2",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return <div ref={boxRef} className="w-24 h-24 bg-muted rounded-lg" />;
}
