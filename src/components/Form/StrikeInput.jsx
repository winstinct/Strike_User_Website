import { useEffect } from "react";
import Error from "../UI/Error";
import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../redux/createUserSlice";
import RedStar from "../UI/RedStar";
import PropTypes from "prop-types";

export default function StrikeInput({ type, name, label, required, readonly }) {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const inputValue = watch(name);
  useEffect(() => {
    inputValue && dispatch(addUserDetails({ [name]: inputValue }));
  }, [inputValue, dispatch, name]);

  return (
    <div>
      <label className="block" htmlFor={name}>
        {label}
        {required && <RedStar />}
      </label>
      <input
        className={`outline-none border-[1px] rounded-md p-3 w-full duration-300 ${
          readonly && "cursor-not-allowed"
        } ${errors[name]?.message ? "border-red-500" : "border-gray-400"}`}
        type={type}
        {...register(name)}
        id={name}
        placeholder={`Enter ${label}`}
        readOnly={readonly}
      />
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}

StrikeInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
};
