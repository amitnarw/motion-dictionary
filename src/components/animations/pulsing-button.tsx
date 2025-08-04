"use client";

export function PulsingButton() {
  return (
    <div className="flex items-center justify-center">
        <button className="animate-pulse bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg shadow-lg">
            Click me
        </button>
    </div>
  );
}
