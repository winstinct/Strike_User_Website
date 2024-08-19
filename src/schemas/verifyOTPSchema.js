import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";
export const verifyOTPSchema = yup.object({
  otp: yup
    .string()
    .required(requiredMsg)
    .min(6, "OTP must be 6 characters.")
});