"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import useLoginMutation, { LoginRequest } from "../hooks/useLoginMutation";
import withAuth from "@/components/hoc/withAuth";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default withAuth(LoginForm, "public");
function LoginForm() {
  const [generalError, setGeneralError] = useState<string | null>(null);
  const { mutate, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // Clear any previous errors
    setGeneralError(null);

    const loginData: LoginRequest = {
      email: data.email,
      password: data.password,
    };

    mutate(loginData, {
      onError: (error) => {
        // Handle login error
        let errorMessage = "Login failed. Please check your credentials.";

        if (
          error.response &&
          typeof error.response.data === "object" &&
          error.response.data
        ) {
          // Try to safely extract message from response
          const responseData = error.response.data;
          if (
            "message" in responseData &&
            typeof responseData.message === "string"
          ) {
            errorMessage = responseData.message;
          }
        }

        setGeneralError(errorMessage);
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {generalError && (
          <div className="p-3 text-sm bg-red-50 border border-red-200 rounded text-red-600">
            {generalError}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-primary underline-offset-4 hover:underline"
        >
          Register
        </Link>
      </div>
    </>
  );
}
