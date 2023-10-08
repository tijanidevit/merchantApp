import { useMutation } from "@tanstack/react-query";
import ApiClient from "../../services/ApiClient";

const apiClient = new ApiClient("/auth");

const register = async (registerData) => {
  const { data } = await apiClient.post("/register", registerData);
  return data;
};

export const UseRegister = () => {
  return useMutation(register, {
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
};
