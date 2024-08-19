import * as yup from "yup";
import { requiredMsg } from "./requiredMsg";

export const locationDetailsSchema = yup.object({
    country:yup.object().required(requiredMsg),
    state:yup.object().required(requiredMsg),
    city:yup.object().required(requiredMsg),
    pinCode:yup.string().optional(),
    address:yup.string().required(requiredMsg),
})