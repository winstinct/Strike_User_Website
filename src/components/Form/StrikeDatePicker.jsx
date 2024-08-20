import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import { Icon } from "@iconify/react/dist/iconify.js";
import RedStar from "../UI/RedStar";

export default function StrikeDatePicker({ name, label, required }) {
  const {
    control,
    formState: { errors },
    watch
  } = useFormContext();
  // console.log("Selected Date=======> ", watch("dob") && watch("dob")[0])
  return (
    <div>
      <label className="block" htmlFor={name}>
        {label}
        {required && <RedStar/>}
      </label>
      <div
        className={`outline-none border-[1px] border-gray-300 p-3 cursor-pointer rounded-md w-full relative duration-300 ${
          errors[name]?.message ? "border-red-500" : "border-gray-400"
        }`}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value, onBlur, ref }, field }) => {
            return (
              <Flatpickr
                {...field}
                onChange={(value)=>onChange(value[0])}
                onBlur={onBlur}
                ref={ref}
                className="outline-none cursor-pointer w-full"
              />
            );
          }}
        />
        <Icon
          className="absolute right-2 top-4 text-gray-500"
          icon="fontisto:date"
        />
      </div>
      {errors[name]?.message && <Error message={errors[name]?.message} />}
    </div>
  );
}
