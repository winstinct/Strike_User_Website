import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";
import Select from "react-select";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/createUserSlice";
import RedStar from "../UI/RedStar";

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: "0px solid #e7e4e4",
    boxShadow: "none",
    "&:hover": {
      border: "0px solid #e7e4e4",
    },
    padding: "7px 0",
    borderRadius: "5px",
    cursor:"pointer"
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    color: state.isSelected ? "#fff" : provided.color,
    "&:hover": {
      backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    },
    cursor:"pointer"
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
};

export default function StrikeSelect({ name, label, options, required }) {
  const dispatch = useDispatch()
  const {
    control,
    formState: { errors },
    watch
  } = useFormContext();

  const inputValue = watch(name);
  useEffect(()=>{
    inputValue && dispatch(addUserDetails({[name]:inputValue}))
  }, [inputValue, dispatch])

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {required && <RedStar/>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            onChange={field.onChange}
            options={options}
            styles={customStyles}
            className={`rounded-md border-[1px] duration-300 ${
              errors[name]?.message ? "border-red-500" : "border-gray-400"
            }`}
          ></Select>
        )}
      />
      {errors[name]?.message && <Error message={errors[name]?.message} />}
    </div>
  );
}
