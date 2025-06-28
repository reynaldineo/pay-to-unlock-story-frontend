"use client";

import { useParams } from "next/navigation";
import { useGetStoryByIdQuery } from "./hooks/useGetStoryByIdQuery";
import { StoryDetail } from "./components/StoryDetail";
import { StoryDetailSkeleton } from "./components/StoryDetailSkeleton";
import { StoryDetailError } from "./components/StoryDetailError";
import withAuth from "@/components/hoc/withAuth";

export default withAuth(StoryDetailPage, "optional");
function StoryDetailPage() {
  const params = useParams();
  const storyId = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    data: story,
    isPending,
    error,
  } = useGetStoryByIdQuery({ id: storyId });

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {isPending ? (
          <StoryDetailSkeleton />
        ) : error ? (
          <StoryDetailError />
        ) : story ? (
          <StoryDetail story={story.data} />
        ) : (
          <StoryDetailError message="Story not found" />
        )}
      </div>
    </main>
  );
}
