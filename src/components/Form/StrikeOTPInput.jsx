import { Controller, useFormContext } from "react-hook-form";
import OTPInput from "react-otp-input";
import Error from "../UI/Error";
import { useEffect } from "react";
import { addUserInfo } from "../../redux/createUserSlice";
import { useDispatch } from "react-redux";

export default function StrikeOTPInput({name}) {
  const dispatch = useDispatch()
  const {
    formState: { errors },
    watch,
    control
  } = useFormContext();

  const inputValue = watch(name);
  useEffect(()=>{
    inputValue && dispatch(addUserInfo({[name]:inputValue}))
  }, [inputValue, dispatch])

  return (
    <div className="mb-[2.5rem]">
      <div className="flex flex-col items-end">
      <Controller
      name={name}
      control={control}
      render={({field})=>(
        <OTPInput
        {...field}
        onChange={field.onChange}
        numInputs={6}
        shouldAutoFocus={true}
        containerStyle="otp-container"
        renderInput={(props, index) => (
          <input {...props} className="md:!w-[50px] !w-[2rem] md:text-[1.5rem] text-[1rem] mr-[10px] border-b-[3px] border-b-black text-center outline-none duration-200 font-bold focus:border-b-[3px] focus:border-b-[#A967FF]" />
        )}
      />
      )}
      />
      {errors[name]?.message && <Error message={errors[name].message} />}
      </div>
    </div>
  );
}
