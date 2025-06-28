"use client";

import { AlertCircle, BookOpen, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookGridSkeleton } from "@/app/(home)/components/BookGridSkeleton";
import { BookGrid } from "@/app/(home)/components/BookGrid";
import { useGetStoryQuery } from "../hooks/useGetStoryQuery";
import { toast } from "sonner";

export default function BooksContainer() {
  const { data, isPending: loading, error, refetch } = useGetStoryQuery();

  const handleRetry = () => {
    refetch().then(() => {
      toast.success("Stories refreshed successfully");
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Explore Stories</h1>
          </div>
          <p className="text-muted-foreground">
            Discover our collection of captivating stories from talented authors
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <Button onClick={handleRetry} variant="outline" disabled={loading}>
            <RefreshCw
              className={cn("h-4 w-4 mr-2", loading && "animate-spin")}
            />
            Refresh
          </Button>
        </div>
      </section>

      {error ? (
        <div className="flex flex-col items-center justify-center py-12 border rounded-xl bg-muted/30 space-y-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-6 w-6" />
            <p className="font-medium">{error.message}</p>
          </div>
          <Button onClick={handleRetry} variant="outline">
            Try Again
          </Button>
        </div>
      ) : loading ? (
        <BookGridSkeleton />
      ) : (
        <BookGrid stories={data.data} />
      )}
    </div>
  );
}
