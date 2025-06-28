import { Button } from "@/components/ui/button";

import { BookOpen, Search } from "lucide-react";
export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Unlock Your Next Great Adventure
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover premium stories from the world's most captivating
              authors. Pay once, enjoy forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Browse Collection
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Search Stories
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-md aspect-[4/3]">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 transform rotate-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-lg shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, hsl(${i * 60}, 70%, 90%), hsl(${i * 60}, 85%, 70%))`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="h-20 w-20 text-primary drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
