import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";
import { Select, Option, ThemeProvider } from "@material-tailwind/react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { selectCustomTheme } from "../../../utils/selectCutomTheme";

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { StepperContext } from "../../../contexts/StepperContextProvider";
const dateOptions = {
  mode: "single",
  dateFormat: "d M Y",
};

export default function PersonalDetails() {
  const {currentStep, setCurrentStep, steps} = useContext(StepperContext)
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const callingCode = countries[country]?.countryCallingCode || "";
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState();

  console.log("mobile number===> ", mobileNumber);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[3rem]">
          <Icon
            onClick={handleBack}
            className="text-[2.5rem] hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 border-[1px] w-[80px] rounded-[50px] cursor-pointer border-gray-300"
            icon="lets-icons:arrow-left-long"
          />
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Personal Details
          </h3>
        </div>
      </div>

      <ThemeProvider value={selectCustomTheme}>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[2.5rem] gap-[1rem]">
          <div>
            <label className="block" htmlFor="fname">
              First Name
              <RequiredStar />
            </label>
            <input
              className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
              type="text"
              placeholder="Enter first name"
              id="fname"
            />
          </div>
          <div>
            <label className="block" htmlFor="lname">
              Last Name
              <RequiredStar />
            </label>
            <input
              className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
              type="text"
              placeholder="Enter last name"
              id="lname"
            />
          </div>

          <div className="w-full">
            <p className="font-medium">
              Gender
              <RequiredStar />
            </p>
            <Select
              className="border-[1px] border-gray-300 rounded-md"
              placeholder="gg"
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </div>

          <div>
            <p className="font-medium">
              DOB
              <RequiredStar />
            </p>
            <div className="flex flex-col gap-[0.5rem] relative">
              <Flatpickr
                className="!text-[1rem] placeholder:text-[0.9rem] sm:text-[1rem] !font-medium  py-[0.5rem] px-[1rem] placeholder:text-[#7F7F7F] rounded-md outline-none border-[1px] border-gray-300 font-openSans"
                placeholder={"Date of Birth*"}
                options={dateOptions}
                name="dob"
                value={dob}
                onChange={(selectedDate) => {
                  setDob(selectedDate[0]);
                }}
              />
              <Icon
                className="absolute top-3 text-gray-600 right-2 text-[1.2rem]"
                icon="mingcute:down-line"
              />
            </div>
            {/* {!dob && showError && (
              <span className="text-red-500 text-[14px]">
                This field is required*
              </span>
            )} */}
          </div>
        </div>
      </ThemeProvider>

      <div className="flex md:h-[100px] relative md:mt-0 mt-[4rem]">
        <button
          style={{
            backgroundImage: "linear-gradient(#A967FF, #5500C3)",
            boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="text-white rounded-[50px] h-[40px] py-[0.5rem] px-[1.5rem] md:w-[300px] w-full absolute bottom-0 right-0"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
