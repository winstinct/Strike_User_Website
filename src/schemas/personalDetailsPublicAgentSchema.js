import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

export const personalDetailsPublicAgentSchema = yup.object({
  firstName: yup.string().required(requiredMsg),
  lastName: yup.string().required(requiredMsg),
  gender: yup.object().required(requiredMsg),
  dob: yup.string().required(requiredMsg),
  mobile:yup.string().required(requiredMsg),
  email:yup.string().email().required(requiredMsg),
  country:yup.object().required(requiredMsg),
  state:yup.object().required(requiredMsg),
  city:yup.object().required(requiredMsg),
  pinCode:yup.string().required(requiredMsg),
  address:yup.string().required(requiredMsg),
});