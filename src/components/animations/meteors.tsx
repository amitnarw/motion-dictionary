"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function Meteors() {
  const meteors = new Array(20).fill(true);
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="relative z-10 font-bold text-foreground">Meteors</div>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-full bg-primary shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
