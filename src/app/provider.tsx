"use client";

import api from "@/lib/api";
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from "@tanstack/react-query";
import { Toaster } from "sonner";

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster richColors closeButton position="top-center" />
    </QueryClientProvider>
  );
}
