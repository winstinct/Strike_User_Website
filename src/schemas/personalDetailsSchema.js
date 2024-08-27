import * as yup from "yup";
import { fileValidationSchema } from "./fileValidationSchema";
import { requiredMsg } from "./requiredMsg";

export const personalDetailsSchema = yup.object({
  FirstName: yup.string().required(requiredMsg),
  LastName: yup.string().required(requiredMsg),
  gender: yup.object().required(requiredMsg),
  dob: yup.string().required(requiredMsg),
  // file: fileValidationSchema,
});
