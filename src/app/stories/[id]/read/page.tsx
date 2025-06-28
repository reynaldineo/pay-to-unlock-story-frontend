"use client";
import withAuth from "@/components/hoc/withAuth";
import { useGetStoryByIdQuery } from "../hooks/useGetStoryByIdQuery";
import { useParams } from "next/navigation";
import { StoryDetailSkeleton } from "../components/StoryDetailSkeleton";
import { StoryDetailError } from "../components/StoryDetailError";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Bookmark } from "lucide-react";
import Link from "next/link";

function ReadStory() {
  const params = useParams();
  const storyId = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: story, isLoading, error } = useGetStoryByIdQuery(storyId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <StoryDetailSkeleton />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="container mx-auto px-4 py-12">
        <StoryDetailError />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Reading toolbar */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/stories/${storyId}`}>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Link>
            </Button>
            <h2 className="font-medium truncate max-w-md">{story.title}</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Reading area */}
      <main className="flex-grow py-8">
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

          <div className="prose dark:prose-invert prose-sm sm:prose lg:prose-lg mx-auto">
            <p>
              This is the beginning of an amazing journey. The story starts with
              the introduction of the main character, who is about to embark on
              an adventure that will change their life forever.
            </p>
            <p>
              In a world where magic and technology coexist, our protagonist
              discovers a hidden power within themselves that has been dormant
              for generations. As they learn to control this power, they must
              also navigate the complex political landscape of their world.
            </p>
            <p>
              The character's journey is filled with twists and turns, allies
              and enemies, and the constant struggle between choosing what is
              right and what is easy.
            </p>
            <p className="text-muted-foreground italic">
              [This is a placeholder for the full story content which would be
              loaded from the API]
            </p>
          </div>
        </div>
      </main>

      {/* Reading progress */}
      <footer className="border-t py-4 sticky bottom-0 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Page 1 of 24</span>
            <div className="w-full max-w-md h-2 bg-muted rounded-full overflow-hidden mx-4">
              <div className="bg-primary h-full" style={{ width: "5%" }}></div>
            </div>
            <span className="text-sm text-muted-foreground">5%</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withAuth(ReadStory, "user");
