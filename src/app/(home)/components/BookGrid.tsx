import { Story } from "@/types/entities/story";
import { BookCard } from "./BookCard";
import { BookOpen } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface BookGridProps {
  stories: Story[];
}

export function BookGrid({ stories }: BookGridProps) {
  if (!stories || stories.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-16 border rounded-xl bg-muted/30 space-y-4">
        <BookOpen className="h-12 w-12 text-muted-foreground/50" />
        <h3 className="text-xl font-medium">No stories available</h3>
        <p className="text-muted-foreground">
          We're working on adding more stories to our collection.
        </p>
        <Button variant="outline" className="mt-2">
          Check back later
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {stories.map((story) => (
        <BookCard key={story.id} story={story} />
      ))}
    </div>
  );
}
