"use client";

import { Story } from "@/types/entities/story";
import { BookText, BookUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PriceDisplay } from "./PriceDisplay";
import Link from "next/link";
import ShareButton from "@/components/custom/ShareButton";

interface StoryDetailProps {
  story: Story;
}

export function StoryDetail({ story }: StoryDetailProps) {
  // Generate a random color for the book cover based on story id
  const getBookCoverGradient = () => {
    const hue = (story.id.charCodeAt(0) + story.id.charCodeAt(1)) % 360;
    return `linear-gradient(135deg, hsl(${hue}, 80%, 85%) 0%, hsl(${hue}, 70%, 60%) 100%)`;
  };

  return (
    <div className="space-y-8 pt-4">
      {/* Hero Section */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold">{story.title}</h1>

        <div className="flex items-center mt-4 justify-between flex-wrap gap-y-3">
          <div className="flex items-center text-muted-foreground">
            <BookUser className="h-4 w-4 mr-1" />
            <span className="font-medium">By {story.author}</span>
          </div>
          <PriceDisplay price={story.price} size="lg" />
        </div>
      </div>

      {/* Book Cover */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/2] max-w-2xl mx-auto">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: getBookCoverGradient() }}
        >
          <BookText className="h-24 w-24 text-white/90 drop-shadow-lg" />
        </div>
        <ShareButton />
      </div>

      {/* Description Section */}
      <div>
        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Story Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {story.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap">
        <Button
          size="lg"
          variant="default"
          className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-md"
          asChild
        >
          <Link href={`/stories/${story.id}/read`}>
            <BookText className="h-5 w-5" />
            Read Now
          </Link>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <Link href="/">Back to Stories</Link>
        </Button>
      </div>
    </div>
  );
}
