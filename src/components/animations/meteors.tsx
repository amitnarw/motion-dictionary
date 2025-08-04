"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Meteors({ number = 20, className}: { number?: number, className?: string}) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    // This effect will only run on the client, preventing hydration errors.
    const styles = Array.from({ length: number }).map(() => ({
      top: 0,
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]); // Only re-run if the number of meteors changes

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent", className)}>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-primary shadow-[0_0_0_1px_#ffffff10]"
          style={style}
        ></span>
      ))}
    </div>
  );
};