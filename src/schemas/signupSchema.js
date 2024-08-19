import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";
export const signupSchema = yup.object({
  email: yup
    .string()
    .required(requiredMsg)
    .email("Please provide a valid email."),
  referalCode: yup.string().optional(),
});
