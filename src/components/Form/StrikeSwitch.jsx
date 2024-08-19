import Switch from "react-switch";
import { Controller, useFormContext } from "react-hook-form";
import Error from "../UI/Error";

export default function StrikeSwitch({ name }) {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const isSwitchOn = watch("switch");
  return (
    <div
      className={`text-[1.25rem] duration-200 ${
        isSwitchOn ? "text-gray-800" : "text-gray-500"
      }`}
    >
      <p>Send notification via SMS</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Switch
              {...field}
              checked={isSwitchOn || false}
              onChange={field.onChange}
              offColor="#05668d"
              onColor="#02c39a"
              offHandleColor="#d88c9a"
              onHandleColor="#bf3100"
              activeBoxShadow="0 0 0 0"
              value={false}
            />
          );
        }}
      />
      {errors[name]?.message && <Error message={errors[name].message} />}
    </div>
  );
}
