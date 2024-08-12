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
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";

export default function ContactDetails() {
  const {currentStep, setCurrentStep, steps} = useContext(StepperContext)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const callingCode = countries[country]?.countryCallingCode || "";

  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log("mobile number===> ", mobileNumber);

  const handleNext = () => {
    // validate input fields 
    if(!mobileNumber || !email){
      return setShowError(true)
    }

    if (!emailRegex.test(email)) {
      return setShowError(true);
    }

    if(mobileNumber.length !== 10){
      return setShowError(true)
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    dispatch(addUserDetails({MobileNumber:mobileNumber}))
    navigate("/auth/personal-details-layout/personal-details")
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
          <div className="backBtn">
          <Icon
            onClick={() => navigate(-1)}
            className="text-[2rem]"
            icon="lets-icons:arrow-left-long"
          />
          </div>
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
          <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
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
      <Input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !outline-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
        onChange={(e)=>setMobileNumber(e.target.value)}
      />
    </div>
          {!mobileNumber && showError && <ShowErrorMsg message="This field is required"/>}
          {mobileNumber && mobileNumber.length !== 10 && showError && <ShowErrorMsg message="Mobile number must be 10 digits"/>}
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
          {!email && showError && <ShowErrorMsg message="This field is required"/>}
          {email && !emailRegex.test(email) && showError && <ShowErrorMsg message="Please provide valid email"/>}
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
