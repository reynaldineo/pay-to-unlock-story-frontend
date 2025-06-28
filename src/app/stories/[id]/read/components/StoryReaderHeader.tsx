"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark } from "lucide-react";
import Link from "next/link";

interface StoryReaderHeaderProps {
  storyId: string;
  title: string;
}

export function StoryReaderHeader({ storyId, title }: StoryReaderHeaderProps) {
  return (
    <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/stories/${storyId}`}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
          <h2 className="font-medium truncate max-w-md">{title}</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
