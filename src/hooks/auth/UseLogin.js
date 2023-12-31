import { useMutation } from "@tanstack/react-query";
import ApiClient from "../../services/ApiClient";

const apiClient = new ApiClient("/auth");

const login = async (loginData) => {
  const { data } = await apiClient.post("/login", loginData);
  return data;
};

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
};
