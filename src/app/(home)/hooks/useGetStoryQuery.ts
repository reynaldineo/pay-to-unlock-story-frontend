import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ApiError, ApiResponse } from "@/types/api";

export type BookResponse = {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
};

export const useGetStoryQuery = () => {
  return useQuery<ApiResponse<BookResponse[]>, AxiosError<ApiError>>({
    queryKey: ["/api/story/"],
  });
};
