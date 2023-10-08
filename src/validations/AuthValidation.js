import * as yup from "yup";

export const LoginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),
    password: yup.string().required("Please enter password"),
  })
  .required();
