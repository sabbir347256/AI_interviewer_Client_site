import React, { useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./CreateContext";
import axiosInstance from "../../lib/axiosInstance";

const AuthContext = ({ children }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        return response.data.data;
      } catch (error) {
        if (error.response?.status !== 401) {
          throw error;
        }

        try {
          await axiosInstance.post("/auth/refresh");

          const response = await axiosInstance.get("/auth/me");

          return response.data.data;
        } catch {
          return null;
        }
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const user = data ?? null;

  console.log(user)

  const authInfo = useMemo(
    () => ({
      user,
      role: user?.role ?? null,
      isAuthenticated: !!user,
      isLoading,
      isFetching,
      loading: isLoading,
      data: user,
      refetch,
      refreshUser: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["userProfile"],
        });
      },
      clearUser: () => {
        queryClient.setQueryData(["userProfile"], null);
      },
    }),
    [user, isLoading, isFetching, refetch, queryClient],
  );

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
