import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

import api from "@/lib/api";
import { ApiResponse } from "@/types/api";

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  telp_number: string;
};

type RegisterResponse = {
  id: string;
  name: string;
  email: string;
  telp_number: string;
  role: "USER" | "ADMIN";
};

export const useRegisterMutation = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation<
    AxiosResponse,
    AxiosError,
    RegisterRequest
  >({
    mutationFn: async (data: RegisterRequest) => {
      const res = await api.post<ApiResponse<RegisterResponse>>(
        "api/user/register",
        data,
        {
          toastify: true,
          loadingMessage: "Registering...",
        },
      );
      return res;
    },
    onSuccess: () => {
      router.push("/login");
    },
  });

  return { mutate, isPending };
};
