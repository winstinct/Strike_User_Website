import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCountries } from "use-react-countries";
import { Select, Option, ThemeProvider } from "@material-tailwind/react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { selectCustomTheme } from "../../../utils/selectCutomTheme";

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { StepperContext } from "../../../contexts/StepperContextProvider";
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
const dateOptions = {
  mode: "single",
  dateFormat: "d M Y",
};

export default function PersonalDetails() {
  const { currentStep, setCurrentStep, steps } = useContext(StepperContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);
  const [selecectedFile, setSelectedFile] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if(!firstName || !lastName || !dob || !selecectedFile){
      return setShowError(true)
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    navigate("/personal-details-layout/location-details");
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    navigate(-1);
  };

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[1rem]">
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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem]">
            {/* Upload File Input  */}

          {!selecectedFile && (<div className="md:col-span-2 flex justify-center">
            <div>
            <div
              onClick={() => document.getElementById("file").click()}
              className="border-[4px] border-[#CCCCCC] w-[130px] h-[130px] rounded-full flex justify-center items-center relative cursor-pointer"
            >
              <p>Icon</p>
              <div
                style={{
                  backgroundImage: "linear-gradient(#A967FF, #5500C3)",
                  boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="absolute bottom-2 right-1 text-[1.3rem] w-[22px] cursor-pointer h-[22px] flex justify-center items-center text-white rounded-full select-none"
              >
                +
              </div>
              <input onChange={(e)=> setSelectedFile(e.target.files[0])} className="hidden" type="file" id="file" />
            </div>
            {showError && !selecectedFile && <ShowErrorMsg message="Fiele is required"/>}
          </div>
          </div>)}

          {/* Uploaded File  */}
          {selecectedFile && (<div className="md:col-span-2 flex justify-center">
            <div
              className="border-[4px] border-[#CCCCCC] w-[130px] h-[130px] rounded-full flex justify-center items-center relative"
            >
              <img className="w-[130px] h-[130px] rounded-full p-1" src={URL.createObjectURL(selecectedFile)} alt="Profile Photo" />
              <div
                className="absolute bottom-2 right-1 text-[1.3rem] w-[22px] cursor-pointer h-[22px] flex justify-center items-center text-white rounded-full select-none bg-red-600"
                onClick={()=>setSelectedFile(null)}
              >
                <Icon className="text-white p-[3px]" icon="akar-icons:cross" />
              </div>
            </div>
          </div>)}


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
              onChange={(e)=>setFirstName(e.target.value)}
            />
            {!firstName && showError && <ShowErrorMsg message="This field is required"/>}
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
              onChange={(e)=>setLastName(e.target.value)}
            />
            {!lastName && showError && <ShowErrorMsg message="This field is required"/>}
          </div>

          <div className="w-full">
            <p className="font-medium">
              Gender
              <RequiredStar />
            </p>
            <Select
              className="border-[1px] border-gray-300 rounded-md"
              placeholder="Gender"
              onChange={(value)=>setGender(value)}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
            {!gender && showError && <ShowErrorMsg message="This field is required"/>}
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
            {!dob && showError && <ShowErrorMsg message="This field is required"/>}
          </div>
        </div>
      </ThemeProvider>

      <div className="flex md:h-[70px] relative">
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
