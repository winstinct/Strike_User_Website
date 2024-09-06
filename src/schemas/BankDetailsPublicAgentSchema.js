import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

export const bankDetailsPublicAgentSchema = yup.object({
  acc_number: yup.string().required(requiredMsg),
  acc_name: yup.string().required(requiredMsg),
  bankName: yup.object().required(requiredMsg),
  acc_ifsc: yup.string().required(requiredMsg),
  acc_city: yup.string().required(requiredMsg),
  acc_branch: yup.string().required(requiredMsg),
});
