
"use client";

export function AnimatedBorderInput() {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="your-email@gmail.com"
        className="
          w-full p-3 bg-background text-foreground rounded-lg
          border border-transparent 
          focus:outline-none focus:ring-2 focus:ring-transparent
          peer
        "
      />
      <div 
        className="
          absolute inset-0 rounded-lg -z-10
          bg-border
          peer-focus:bg-gradient-to-r peer-focus:from-primary peer-focus:to-accent
          motion-safe:peer-focus:animate-pulse
        "
        aria-hidden="true"
      />
    </div>
  );
}
