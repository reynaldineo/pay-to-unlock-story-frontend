"use client";

import { useEffect, useState } from "react";
import { useGetStoryByIdQuery } from "../../hooks/useGetStoryByIdQuery";
import { useGetStoryFullQuery } from "../../hooks/useGetStoryFullQuery";
import { StoryReaderHeader } from "../components/StoryReaderHeader";
import { StoryReaderContent } from "../components/StoryReaderContent";
import { StoryReaderProgress } from "../components/StoryReaderProgress";
import { AccessDeniedCard } from "../components/AccessDeniedCard";
import { ErrorCard } from "../components/ErrorCard";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { StoryDetailSkeleton } from "../../components/StoryDetailSkeleton";
import { StoryDetailError } from "../../components/StoryDetailError";
import { toast } from "sonner";

interface StoryReaderContainerProps {
  storyId: string;
}

export function StoryReaderContainer({ storyId }: StoryReaderContainerProps) {
  const [readingProgress, setReadingProgress] = useState<number>(0);

  const {
    data: storyData,
    isLoading: isStoryLoading,
    error: storyError,
  } = useGetStoryByIdQuery({ id: storyId });

  const {
    data: fullStoryData,
    isLoading: isFullStoryLoading,
    error: fullStoryError,
    refetch: refetchFullStory,
  } = useGetStoryFullQuery({ id: storyId });

  // Track reading progress based on scroll
  useEffect(() => {
    if (!fullStoryData?.data) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setReadingProgress(Math.min(Math.max(scrollPercent * 100, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fullStoryData]);

  // Handle network errors
  useEffect(() => {
    if (fullStoryError && fullStoryError.message === "Network Error") {
      toast.error(
        "Network connection error. Please check your internet connection and try again.",
      );
    }
  }, [fullStoryError]);

  if (isStoryLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <StoryDetailSkeleton />
      </div>
    );
  }

  if (storyError || !storyData?.data) {
    return (
      <div className="container mx-auto px-4 py-12">
        <StoryDetailError />
      </div>
    );
  }

  const story = storyData.data;
  const accessDenied = fullStoryError?.response?.status === 403;
  const hasNetworkError =
    fullStoryError && fullStoryError.message === "Network Error" ? true : false;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StoryReaderHeader storyId={storyId} title={story.title} />

      <main className="flex-grow py-8">
        <StoryReaderContent story={story} fullStory={fullStoryData?.data} />

        {isFullStoryLoading && <LoadingIndicator />}

        {accessDenied && (
          <div className="container mx-auto px-4 max-w-2xl">
            <AccessDeniedCard storyId={storyId} price={story.price} />
          </div>
        )}

        {fullStoryError && !accessDenied && (
          <div className="container mx-auto px-4 max-w-2xl">
            <ErrorCard
              storyId={storyId}
              isNetworkError={hasNetworkError}
              onRetry={refetchFullStory}
            />
          </div>
        )}
      </main>

      {fullStoryData?.data && (
        <StoryReaderProgress author={story.author} progress={readingProgress} />
      )}
    </div>
  );
}
