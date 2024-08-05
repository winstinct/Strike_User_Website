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

export default function ContactDetails() {
  const {currentStep, setCurrentStep, steps} = useContext(StepperContext)
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const callingCode = countries[country]?.countryCallingCode || "";
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false)
  console.log("mobile number===> ", mobileNumber);

  const handleNext = () => {
    // validate input fields 
    if(!mobileNumber || !email){
      return setShowError(true)
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    navigate("/personal-details-layout/personal-details")
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    useEffect(()=>{
      setCurrentStep(0)
    }, [])
  };

  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[3rem]">
          <Icon
            onClick={() => navigate(-1)}
            className="text-[2.5rem] hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 border-[1px] w-[80px] rounded-[50px] cursor-pointer border-gray-300"
            icon="lets-icons:arrow-left-long"
          />
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Contact Details
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[2.5rem] lg:gap-[1rem] md:gap-[0.3rem]">
        <div>
          <p className="font-medium">
            Mobile Number
            <RequiredStar />
          </p>
          <div className="relative flex w-full md:mb-0 mb-[1.5rem] outline-none">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 w-[8rem] items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <div className="overflow-auto">
                <MenuList className="max-h-[15rem] w-[18rem]">
                  {countries.map(
                    ({ name, flags, countryCallingCode }, index) => {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2 px-[1rem] py-[0.5rem] hover:bg-gray-300 text-[12px] text-left"
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
                    }
                  )}
                </MenuList>
              </div>
            </Menu>
            <Input
              type="tel"
              placeholder="Mobile Number"
              className="rounded-l-none outline-none !border-[1px] !border-gray-300 pl-2 py-[0.4rem] rounded-r-md"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          {!mobileNumber && showError && (<p className="text-red-500 text-[14px]">This field is required*</p>)}
        </div>

        <div>
          <label className="block" htmlFor="email">
            Email
            <RequiredStar />
          </label>
          <input
            className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
            type="email"
            id="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          {!email && showError && (<p className="text-red-500 text-[14px]">This field is required*</p>)}
        </div>
      </div>
      <div className="flex md:h-[150px] relative md:mt-0 mt-[4rem]">
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
