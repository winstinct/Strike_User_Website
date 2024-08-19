import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useCountries } from "use-react-countries";
import Error from "../UI/Error";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../redux/createUserSlice";

export default function StrikePhone({ label, name: fieldName }) {
  const dispatch = useDispatch()
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    getValues
  } = useFormContext();

  const inputValue = watch(fieldName);
  useEffect(() => {
    setValue("countryCode", countryCallingCode);
    inputValue && dispatch(addUserInfo({[fieldName]:inputValue}))
  }, [countryCallingCode, dispatch, inputValue]);

  return (
    <div>
      <label htmlFor="phone">{label}</label>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className={`flex h-[2.6rem] items-center gap-2 !border-[1px] !rounded-r-none !outline-none bg-blue-gray-500/10 pl-3 duration-300 ${
            errors[fieldName]?.message ? "!border-red-500" : "!border-gray-300"
          }`}
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries.map(({ name, flags, countryCallingCode }, index) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  className="flex items-center gap-2"
                  onClick={() => setCountry(index)}
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  {name} <span className="ml-auto">{countryCallingCode}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <input
          type="number"
          placeholder="Mobile Number"
          className={`outline-none border-[1px] rounded-r-md py-2 px-3 w-full duration-300 ${
            errors[fieldName]?.message ? "border-red-200" : "border-[#e7e4e4]"
          }`}
          {...register(fieldName)}
        />
      </div>
      {errors[fieldName]?.message && (
        <Error message={errors[fieldName].message} />
      )}
    </div>
  );
}
