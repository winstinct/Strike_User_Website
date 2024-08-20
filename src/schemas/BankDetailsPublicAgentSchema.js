import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

export const bankDetailsPublicAgentSchema = yup.object({
  accountNumber: yup.string().required(requiredMsg),
  accountHolder: yup.string().required(requiredMsg),
  bankName: yup.object().required(requiredMsg),
  IFSCCode: yup.string().required(requiredMsg),
  accountCity: yup.string().email().required(requiredMsg),
  accountBranch: yup.string().required(requiredMsg),
});
