import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import RedStar from "../UI/RedStar";
import { addPublicAgentPersonalDetails } from "../../redux/becomePublicAgentDetailsSlice";
import { useDispatch } from "react-redux";

export default function StrikeTextArea({ name, label, required, formName }) {
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    watch
  } = useFormContext();

  let inputValue = watch(name)
  useEffect(() => {
    if(formName=="publicAgentPersonalDetails"){
      inputValue && dispatch(addPublicAgentPersonalDetails({ [name]: inputValue }));
    }
  }, [inputValue, dispatch, name]);

  return (
    <div className="md:col-span-2">
      <label className="block" htmlFor="firstName">
        {label}
        {required && <RedStar/>}
      </label>
      <textarea
        className={`outline-none border-[1px] border-gray-300 rounded-md min-h-[100px] p-2 w-full duration-300 ${
          errors[name]?.message ? "border-red-500" : "border-gray-400"
        }`}
        placeholder={`Enter ${label}`}
        {...register(name, { required: true })}
      ></textarea>
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}
