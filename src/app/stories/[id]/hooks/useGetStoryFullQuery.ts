import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ApiError, ApiResponse } from "@/types/api";
import api from "@/lib/api";

export type StoryResponseFull = {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  content: string;
};

export const useGetStoryFullQuery = ({ id }: { id: string }) => {
  return useQuery<ApiResponse<StoryResponseFull>, AxiosError<ApiError>>({
    queryKey: [`story-full-${id}`],
    queryFn: async () => {
      const { data } = await api.get(`/api/story/${id}/full`);
      return data;
    },
  });
};
