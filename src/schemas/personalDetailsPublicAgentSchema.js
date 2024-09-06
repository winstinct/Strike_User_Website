import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

// { FirstName, LastName, Gender, location, dob, email, imageUrl, mobileNumber }

export const personalDetailsPublicAgentSchema = yup.object({
  FirstName: yup.string().required(requiredMsg),
  LastName: yup.string().required(requiredMsg),
  Gender: yup.object().required(requiredMsg),
  dob: yup.string().required(requiredMsg),
  mobileNumber:yup.string().required(requiredMsg),
  email:yup.string().email().required(requiredMsg),
  country:yup.object().required(requiredMsg),
  state:yup.object().required(requiredMsg),
  city:yup.object().required(requiredMsg),
  pincode:yup.string().required(requiredMsg),
  address:yup.string().required(requiredMsg),
});