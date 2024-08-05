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
  Select,
  Option,
} from "@material-tailwind/react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { StepperContext } from "../../../contexts/StepperContextProvider";

export default function LocationDetails() {
  const {currentStep, setCurrentStep, steps} = useContext(StepperContext)
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const callingCode = countries[country]?.countryCallingCode || "";
  const [mobileNumber, setMobileNumber] = useState("");
  console.log("mobile number===> ", mobileNumber);
  
  const handleNext = () => {
    alert("Submit Now !")
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    navigate(-1)
  };
  useEffect(()=>{
    setCurrentStep(2)
  }, [])
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
            Location Details
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[2.5rem] gap-[1rem]">
        <div className="w-full">
          <p className="font-medium">
            Country
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
        <div className="w-full">
          <p className="font-medium">
            State
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
        <div className="w-full">
          <p className="font-medium">
            City
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
          <label className="block" htmlFor="email">
            Pincode
            <RequiredStar />
          </label>
          <input
            className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
            type="email"
            id="email"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block" htmlFor="address">
            Address
            <RequiredStar />
          </label>
          <textarea
            className="outline-none border-[1px] border-gray-300 px-3 py-1 rounded-lg w-full"
            name="address"
            id="address"
          ></textarea>
        </div>
      </div>
      <div className="flex md:h-[70px] relative md:mt-0 mt-[4rem]">
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
