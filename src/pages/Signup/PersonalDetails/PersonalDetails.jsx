import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Option, ThemeProvider } from "@material-tailwind/react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { selectCustomTheme } from "../../../utils/selectCutomTheme";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { StepperContext } from "../../../contexts/StepperContextProvider";
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";

import { storage, ref, uploadBytes, getDownloadURL } from "../../../Firebase";
import moment from "moment";
const dateOptions = {
  mode: "single",
  dateFormat: "d M Y",
};

export default function PersonalDetails() {
  const { currentStep, setCurrentStep, steps } = useContext(StepperContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { FirstName, LastName, gender, dob, selecectedFile } =
    useSelector((state) => state.createUser);
    console.log("Selected File===>", selecectedFile)

  const [showError, setShowError] = useState(false);

  const handleUpload = () => {
    if (!selecectedFile) {
      console.log('No image selected');
      return;
    }

    // Create a storage reference
    const imageRef = ref(storage, `images/${selecectedFile.name}`);

    // Upload the file
    uploadBytes(imageRef, selecectedFile).then((snapshot) => {
      console.log('Uploaded a blob or file!');

      // Get the download URL
      getDownloadURL(snapshot.ref).then((url) => {
        dispatch(addUserDetails({imageUrl:url}));
        console.log('File available at', url);
      });
    }).catch((error) => {
      console.error('Upload failed', error);
    });
  };


  const handleNext = () => {
    if (!FirstName || !LastName || !dob || !selecectedFile) {
      return setShowError(true);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    handleUpload()
    navigate("/auth/personal-details-layout/location-details");
  };

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[1rem]">
          <div onClick={() => navigate(-1)} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Personal Details
          </h3>
        </div>
      </div>

      <ThemeProvider value={selectCustomTheme}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem]">
          {/* Upload File Input  */}

          {!selecectedFile && (
            <div className="md:col-span-2 flex justify-center">
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
                  <input
                    onChange={(e) =>
                      dispatch(
                        addUserDetails({ selecectedFile: e.target.files[0] })
                      )
                    }
                    className="hidden"
                    type="file"
                    id="file"
                  />
                </div>
                {showError && !selecectedFile && (
                  <ShowErrorMsg message="Photo is required" />
                )}
              </div>
            </div>
          )}

          {/* Uploaded File  */}
          {selecectedFile && (
            <div className="md:col-span-2 flex justify-center">
              <div className="border-[4px] border-[#CCCCCC] w-[130px] h-[130px] rounded-full flex justify-center items-center relative">
                <img
                  className="w-[130px] h-[130px] rounded-full p-1"
                  src={URL.createObjectURL(selecectedFile)}
                  alt="Profile Photo"
                />
                <div
                  className="absolute bottom-2 right-1 text-[1.3rem] w-[22px] cursor-pointer h-[22px] flex justify-center items-center text-white rounded-full select-none bg-red-600"
                  onClick={() =>
                    dispatch(addUserDetails({ selecectedFile: null }))
                  }
                >
                  <Icon
                    className="text-white p-[3px]"
                    icon="akar-icons:cross"
                  />
                </div>
              </div>
            </div>
          )}

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
              value={FirstName}
              onChange={(e) =>
                dispatch(addUserDetails({ FirstName: e.target.value }))
              }
            />
            {!FirstName && showError && (
              <ShowErrorMsg message="This field is required" />
            )}
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
              value={LastName}
              onChange={(e) =>
                dispatch(addUserDetails({ LastName: e.target.value }))
              }
            />
            {!LastName && showError && (
              <ShowErrorMsg message="This field is required" />
            )}
          </div>

          <div className="w-full">
            <p className="font-medium">
              Gender
              <RequiredStar />
            </p>
            <Select
              className="border-[1px] border-gray-300 rounded-md"
              placeholder="Gender"
              value={gender}
              onChange={(value) => dispatch(addUserDetails({ gender: value }))}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
            {!gender && showError && (
              <ShowErrorMsg message="This field is required" />
            )}
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
                onChange={(selectedDate) =>
                  dispatch(addUserDetails({ dob: moment(new Date(selectedDate)).format("DD/MM/YYYY") }))
                }
              />
              <Icon
                className="absolute top-3 text-gray-600 right-2 text-[1.2rem]"
                icon="mingcute:down-line"
              />
            </div>
            {!dob && showError && (
              <ShowErrorMsg message="This field is required" />
            )}
          </div>
        </div>
      </ThemeProvider>

      <div className="flex md:h-[80px] relative md:mt-0 mt-[4rem]">
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
