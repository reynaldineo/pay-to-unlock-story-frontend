"use client";

interface StoryReaderProgressProps {
  author: string;
  progress: number;
}

export function StoryReaderProgress({
  author,
  progress,
}: StoryReaderProgressProps) {
  return (
    <footer className="border-t py-4 sticky bottom-0 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Story by {author}
          </span>
          <div className="w-full max-w-md h-2 bg-muted rounded-full overflow-hidden mx-4">
            <div
              className="bg-primary h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </footer>
  );
}
