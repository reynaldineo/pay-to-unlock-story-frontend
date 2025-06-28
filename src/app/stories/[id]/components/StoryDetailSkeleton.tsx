import { Card, CardContent } from "@/components/ui/card";

export function StoryDetailSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Hero Section Skeleton */}
        <div className="space-y-4">
          <div className="h-10 w-3/4 bg-muted animate-pulse rounded-lg"></div>
          <div className="h-6 w-1/2 bg-muted animate-pulse rounded-lg"></div>
        </div>

        {/* Cover Image Skeleton */}
        <div className="aspect-[3/2] w-full bg-muted animate-pulse rounded-lg"></div>

        {/* Description Skeleton */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="h-4 bg-muted animate-pulse rounded-lg"></div>
              <div className="h-4 bg-muted animate-pulse rounded-lg w-11/12"></div>
              <div className="h-4 bg-muted animate-pulse rounded-lg w-10/12"></div>
              <div className="h-4 bg-muted animate-pulse rounded-lg w-9/12"></div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-4">
          <div className="h-10 w-36 bg-muted animate-pulse rounded-full"></div>
          <div className="h-10 w-36 bg-muted animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
