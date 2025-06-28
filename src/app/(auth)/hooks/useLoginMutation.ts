import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ApiError } from "next/dist/server/api-utils";

import api from "@/lib/api";
import useAuthStore from "@/stores/useAuthStore";
import { ApiResponse } from "@/types/api";
import { User } from "@/types/entities/user";
import { setToken } from "@/lib/cookies";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  role: string;
};

export default function useLoginMutation() {
  const { login } = useAuthStore();

  const { mutate, isPending } = useMutation<
    AxiosResponse,
    AxiosError<ApiError>,
    LoginRequest
  >({
    mutationFn: async (data: LoginRequest) => {
      const res = await api.post<ApiResponse<LoginResponse>>(
        "api/user/login",
        data,
      );
      const { token } = res.data.data;
      setToken(token);

      const user = await api.get<ApiResponse<User>>("api/user/me");
      if (user) login({ ...user.data.data, token: token });

      return res;
    },
  });
  return { mutate, isPending };
}
