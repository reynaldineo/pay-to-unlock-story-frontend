import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface StoryDetailErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function StoryDetailError({
  message = "Failed to load story details. Please try again later.",
  onRetry,
}: StoryDetailErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-destructive/10 p-4 mb-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>

      <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
      <p className="text-muted-foreground max-w-md mb-8">{message}</p>

      <div className="flex gap-4">
        {onRetry && (
          <Button variant="default" onClick={onRetry}>
            Try Again
          </Button>
        )}

        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Stories
          </Link>
        </Button>
      </div>
    </div>
  );
}
