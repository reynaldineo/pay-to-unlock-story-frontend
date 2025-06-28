"use client";

export function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-muted-foreground">Loading story content...</p>
    </div>
  );
}
