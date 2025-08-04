"use client";

export function BouncingSkeleton() {
  return (
    <div className="space-y-2 w-full p-4">
      <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-muted rounded w-1/2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
      <div className="h-4 bg-muted rounded w-5/6 animate-pulse" style={{animationDelay: '0.4s'}}></div>
    </div>
  );
}
