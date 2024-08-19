import { Icon } from "@iconify/react/dist/iconify.js";
import { useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function StrikePasswordToggle({ name, label }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className="block" htmlFor="password">
        {label}
      </label>
      <div className="relative">
        <input
          className={`outline-none border-[1px] rounded-md py-2 px-3 w-full duration-300 ${
            errors[name]?.message ? "border-red-200" : "border-[#e7e4e4]"
          }`}
          placeholder="Enter password"
          type={isPasswordVisible ? "text" : "password"}
          id={name}
          {...register(name)}
        />
        {isPasswordVisible ? (
          <Icon
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
            icon="mdi:eye-off"
          />
        ) : (
          <Icon
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
            icon="mdi:eye"
          />
        )}
        <div className="flex justify-between items-center">
        {errors[name]?.message && <Error message={errors[name].message} />}
        {!errors[name]?.message && <Error message="" />}
        <Link to="">
        <p className="text-right text-[14px] hover:underline mt-[0.3rem]">
          Forgot Password?
        </p>
      </Link>
        </div>
      </div>
    </div>
  );
}
