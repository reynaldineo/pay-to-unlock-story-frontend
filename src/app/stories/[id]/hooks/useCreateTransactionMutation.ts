"use client";

import { ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import api from "@/lib/api";

interface CreateTransactionParams {
  story_id: string;
}

export interface TransactionResponse {
  id: string;
  invoice_id: string;
  payment_status: string;
  story_id: string;
  user_id: string;
}

export const useCreateTransactionMutation = () => {
  return useMutation<
    AxiosResponse<ApiResponse<TransactionResponse>>,
    AxiosError,
    CreateTransactionParams
  >({
    mutationFn: async (data) => {
      return api.post("/api/story-transaction", data);
    },
    onError: (error) => {
      console.error("Transaction creation failed:", error);
    },
  });
};
