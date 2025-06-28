"use client";

import { BookOpen } from "lucide-react";
import { StoryResponseFull } from "../../hooks/useGetStoryFullQuery";
import { Story } from "@/types/entities/story";

interface StoryReaderContentProps {
  story: Story;
  fullStory?: StoryResponseFull;
}

export function StoryReaderContent({
  story,
  fullStory,
}: StoryReaderContentProps) {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="flex justify-center mb-8">
        <div
          className="h-32 w-32 rounded-lg flex items-center justify-center shadow-lg"
          style={{
            background: `linear-gradient(135deg, 
              hsl(${(story.id.charCodeAt(0) + story.id.charCodeAt(1)) % 360}, 80%, 85%) 0%,
              hsl(${(story.id.charCodeAt(0) + story.id.charCodeAt(1)) % 360}, 70%, 60%) 100%)`,
          }}
        >
          <BookOpen className="h-16 w-16 text-white/90" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">{story.title}</h1>

      {fullStory && (
        <div className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg mx-auto">
          <p className="text-sm text-muted-foreground mb-8">
            By <span className="font-medium">{story.author}</span>
          </p>
          {fullStory.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
