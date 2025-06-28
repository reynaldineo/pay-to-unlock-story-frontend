"use client";
import withAuth from "@/components/hoc/withAuth";
import { useParams } from "next/navigation";
import { StoryReaderContainer } from "./containers/StoryReaderContainer";

function ReadStory() {
  const params = useParams();
  const storyId = Array.isArray(params.id) ? params.id[0] : params.id;

  return <StoryReaderContainer storyId={storyId} />;
}

export default withAuth(ReadStory, "user");
