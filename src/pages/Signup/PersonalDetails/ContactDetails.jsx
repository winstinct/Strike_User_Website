import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { StepperContext } from "../../../contexts/StepperContextProvider";
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";

export default function ContactDetails() {
  const { currentStep, setCurrentStep, steps } = useContext(StepperContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { MobileNumber, Email } = useSelector((state) => state.createUser);

  const { countries } = useCountries();
  const sortedCoutnries = countries?.sort((a, b) => a.name.localeCompare(b.name));
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = sortedCoutnries[country];
  const callingCode = countries[country]?.countryCallingCode || "";

  const [showError, setShowError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNext = () => {
    // validate input fields
    if (!MobileNumber || !Email) {
      return setShowError(true);
    }

    if (!emailRegex.test(Email)) {
      return setShowError(true);
    }

    if (MobileNumber.length !== 10) {
      return setShowError(true);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    navigate("/auth/personal-details-layout/personal-details");
  };

  useEffect(() => {
    dispatch(addUserDetails({ countryCode: callingCode }));
    setCurrentStep(0);
  }, [MobileNumber]);

  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[3rem]">
          <div onClick={() => navigate(-1)} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Contact Details
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[2.5rem] lg:gap-[1rem] md:gap-[0.3rem] gap-3">
        <div>
          <p className="font-medium">
            Mobile Number
            <RequiredStar />
          </p>
          <div className="relative flex w-full">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className={`flex h-[2.6rem] items-center gap-2 !border-[1px] !rounded-r-none !outline-none bg-blue-gray-500/10 pl-3 duration-300 border-gray-300`}
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
                      {name}{" "}
                      <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <input
              type="number"
              placeholder="Mobile Number"
              className={`outline-none border-[1px] rounded-r-md py-2 px-3 w-full duration-300 border-[#e7e4e4]`}
              value={MobileNumber}
              onChange={(e) =>
                dispatch(addUserDetails({ MobileNumber: e.target.value }))
              }
            />
          </div>
          {!MobileNumber && showError && (
            <ShowErrorMsg message="This field is required" />
          )}
          {MobileNumber && MobileNumber.length !== 10 && showError && (
            <ShowErrorMsg message="Mobile number must be 10 digits" />
          )}
        </div>

        <div>
          <label className="block" htmlFor="email">
            Email
            <RequiredStar />
          </label>
          <input
            className="border-[1px] cursor-not-allowed border-[#CCC] px-[1rem] h-[45px] rounded-[6px] outline-none w-full"
            type="email"
            id="email"
            readOnly
            value={Email}
          />
          {!Email && showError && (
            <ShowErrorMsg message="This field is required" />
          )}
          {Email && !emailRegex.test(Email) && showError && (
            <ShowErrorMsg message="Please provide valid email" />
          )}
        </div>
      </div>
      <div className="flex md:h-[150px] relative md:mt-0 mt-[4rem]">
        <button
          className="submitBtn md:w-[300px] w-full absolute bottom-0 right-0"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
