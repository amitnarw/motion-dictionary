"use client";
import { TextRevealByWord } from "./text-reveal-by-word";

export function TextRevealByWordPreview() {
  return (
    <div className="z-10 flex min-h-[10rem] items-center justify-center rounded-lg bg-background p-4">
      <TextRevealByWord 
        text="Magic will change the way you design." 
        className="text-2xl font-bold text-foreground"
      />
    </div>
  );
}