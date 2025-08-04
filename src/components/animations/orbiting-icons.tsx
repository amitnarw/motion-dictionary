"use client";

// This component is best for loading states or decorative elements.
export function OrbitingIcons() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <div className="absolute h-full w-full animate-spin-slow rounded-full border-2 border-dashed border-muted-foreground" />
      <div className="absolute h-[85%] w-[85%] animate-spin-slow-reverse rounded-full border-2 border-dashed border-muted-foreground" />
      <div className="h-8 w-8 bg-primary rounded-full" />
    </div>
  )
}
