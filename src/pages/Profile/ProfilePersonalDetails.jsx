import React, { useEffect, useState } from "react";
import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import StrikeDatePicker from "../../components/Form/StrikeDatePicker";
import StrikeFile from "../../components/Form/StrikeFile";
import { Icon } from "@iconify/react/dist/iconify.js";
import Error from "../../components/UI/Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalDetailsSchema } from "../../schemas/personalDetailsSchema";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import ThreeDotsLoader from "../../components/ThreeDotsLoader";

const genderOptions = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export default function ProfilePersonalDetails() {
  const {data, isLoading} = useGetUserDetailsQuery();
  const {FirstName, LastName, Gender, imageUrl, dob, email} = data?.response?.UserData || {};

  const [selectedFile, setSelectedFile] = useState(imageUrl);
  const [showError, setShowError] = useState(false);

  let defaultValues = {
    FirstName, 
    LastName, 
    Gender:{label:Gender,value:Gender}, 
    imageUrl, 
    dob
  }

  if(isLoading){
    return <ThreeDotsLoader/>
  }


  console.log({FirstName, LastName, Gender, imageUrl, dob})
  const handleSubmitPersonalDetails = (data) => {
    if (!selectedFile) {
      return setShowError(true);
    }
    console.log("Personal Details ===> ", { ...data, image: selectedFile });
  };
  return (
    <StrikeForm onSubmit={handleSubmitPersonalDetails} resolver={yupResolver(personalDetailsSchema)} defaultValues={defaultValues}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="lg:col-span-2">
          {/* Upload File Input  */}
          {!selectedFile && (
           <div>
             <div className="md:col-span-2 flex justify-center">
              <div>
                <div
                  onClick={() => document.getElementById("file").click()}
                  className="border-[4px] border-[#CCCCCC] w-[130px] h-[130px] rounded-full flex justify-center items-center relative cursor-pointer"
                >
                  <Icon
                    className="text-[4rem] text-gray-300"
                    icon="mdi:user-add-outline"
                  />
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
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    className="hidden"
                    type="file"
                    id="file"
                  />
                </div>
                {showError && !selectedFile && (
                  <Error message="Photo is required" />
                )}
              </div>
            </div>
            <div className="text-center">
            <h3 className="font-bold text-[1.2rem]">{FirstName} {LastName}</h3>
            <p>{email}</p>
          </div>
           </div>
          )}

          {/* Uploaded File  */}
          {selectedFile && (
            <div>
              <div className="md:col-span-2 flex justify-center">
                <div className="border-[4px] border-[#CCCCCC] w-[130px] h-[130px] rounded-full flex justify-center items-center relative">
                  <img
                    className="w-[130px] h-[130px] rounded-full p-1"
                    src={imageUrl ? imageUrl : URL.createObjectURL(selectedFile)}
                    alt="Profile Photo"
                  />
                  <div
                    className="absolute bottom-2 right-1 text-[1.3rem] w-[22px] cursor-pointer h-[22px] flex justify-center items-center text-white rounded-full select-none bg-red-600"
                    onClick={() => setSelectedFile(null)}
                  >
                    <Icon
                      className="text-white p-[3px]"
                      icon="akar-icons:cross"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-[1.2rem]">{FirstName} {LastName}</h3>
                <p>{email}</p>
              </div>
            </div>
          )}
        </div>
        <StrikeInput type="text" name="FirstName" label="First Name" required={true}/>
        <StrikeInput type="text" name="LastName" label="Last Name" required={true}/>
        <StrikeSelect options={genderOptions} name="Gender" label="Gender" required={true}/>
        <StrikeDatePicker name="dob" label="Date of Birth" required={true}/>
      </div>
      <div className="flex justify-center items-center">
        <button type="submit" className="submitBtn w-[10rem] mt-[1.5rem]">
          Save
        </button>
      </div>
    </StrikeForm>
  );
}
