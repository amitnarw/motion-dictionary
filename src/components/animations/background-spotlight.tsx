"use client";

export function BackgroundSpotlight() {
  return (
    <div className="group relative w-48 h-24 rounded-lg bg-card p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-full top-0 block animate-spotlight-spin h-full w-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="font-bold text-lg">Spotlight</h3>
      </div>
    </div>
  );
}
