"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorCardProps {
  storyId: string;
  isNetworkError: boolean;
  onRetry: () => void;
}

export function ErrorCard({
  storyId,
  isNetworkError,
  onRetry,
}: ErrorCardProps) {
  return (
    <Card className="p-6 mb-8 text-center bg-destructive/5">
      <div className="flex flex-col items-center space-y-4">
        <div className="rounded-full bg-destructive/10 p-3">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Error Loading Story</h3>
          <p className="text-muted-foreground">
            {isNetworkError
              ? "Network connection error. Please check your internet connection."
              : "There was a problem loading the story content. Please try again later."}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onRetry}>
            <RefreshCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/stories/${storyId}`}>Back to Story Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
