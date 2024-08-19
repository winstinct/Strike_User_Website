import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";
export const fileValidationSchema = yup
  .mixed()
  .test("required", requiredMsg, (value) => value?.length)
  .test("fileFormat", "Unsupported File Format", (value) => {
    if (value && value[0]) {
      const supportedFormats = ["image/jpeg", "image/png"];
      return supportedFormats.includes(value[0].type);
    }
    return false;
  })
  .test("fileSize", "File size is too large", (value) => {
    if (value && value[0]) {
      return value[0].size <= 2 * 1024 * 1024; // 2MB size limit
    }
    return false;
  });
