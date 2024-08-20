import Switch from "react-switch";
import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";

export default function StrikeSwitch({ name, label }) {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const isSwitchOn = watch(name);
  return (
    <div
      className={`text-[1.25rem] duration-200 ${
        isSwitchOn ? "text-black font-bold" : "text-gray-500"
      }`}
    >
      <div className="flex items-center justify-between">
      <p>{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Switch
              {...field}
              checked={isSwitchOn || false}
              onChange={field.onChange}
              offColor="#858585"
              onColor="#A967FF"
              offHandleColor="#fff"
              onHandleColor="#fff"
              activeBoxShadow="0 0 0 0"
              value={false}
            />
          );
        }}
      />
      </div>
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}
