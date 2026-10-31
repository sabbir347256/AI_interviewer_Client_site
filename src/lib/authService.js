
import axiosInstance from "../lib/axiosInstance";

export const registerUser = async (data) => {
  const response = await axiosInstance.post(
    "/users/register",
    data
  );

  return response.data;
};

export const loginUser = async (data) => {
  const response = await axiosInstance.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export const refreshSession = async () => {
  const response = await axiosInstance.post("/auth/refresh");
  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};
