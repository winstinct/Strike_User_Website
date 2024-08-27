import { useState } from "react";
import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import StrikeDatePicker from "../../components/Form/StrikeDatePicker";
import { Icon } from "@iconify/react/dist/iconify.js";
import Error from "../../components/UI/Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalDetailsSchema } from "../../schemas/personalDetailsSchema";
import {
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} from "../../redux/features/auth/authApi";
import ThreeDotsLoader from "../../components/ThreeDotsLoader";
import "react-datepicker/dist/react-datepicker.css";
import { genderOptions } from "../../options/genderOptions";
import { toast } from "react-toastify";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";

export default function ProfilePersonalDetails() {
  // RTK Query Hooks
  const { data, isLoading } = useGetUserDetailsQuery();
  const [updateUser, { isLoading: isLoadingUpdateUser }] =
    useUpdateUserDetailsMutation();

  const { FirstName, LastName, Gender, imageUrl, dob, email } =
    data?.response?.UserData || {};
    console.log("User Details===> ", data?.response?.UserData)
  const [selectedFile, setSelectedFile] = useState(imageUrl);
  const [showError, setShowError] = useState(false);

  let defaultValues = {
    FirstName,
    LastName,
    gender: { label: Gender, value: Gender },
    imageUrl,
    dob,
  };

  if (isLoading) {
    return <ThreeDotsLoader />;
  }

  const handleSubmitPersonalDetails = async (formData) => {
    if (!selectedFile) {
      return setShowError(true);
    }

     console.log("update form data===>", formData)
    //  return;
    // Call API
    try {
      const res = await updateUser({formData, gender:formData.gender.value});
      if (res?.error) {
        console.log("User updated api response===>", res);
        // return toast.error(res?.error?.data?.response?.message);
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Updated user successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  return (
    <StrikeForm
      onSubmit={handleSubmitPersonalDetails}
      resolver={yupResolver(personalDetailsSchema)}
      defaultValues={defaultValues}
    >
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
                <h3 className="font-bold text-[1.2rem]">
                  {FirstName} {LastName}
                </h3>
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
                    src={
                      imageUrl ? imageUrl : URL.createObjectURL(selectedFile)
                    }
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
                <h3 className="font-bold text-[1.2rem]">
                  {FirstName} {LastName}
                </h3>
                <p>{email}</p>
              </div>
            </div>
          )}
        </div>
        <StrikeInput
          type="text"
          name="FirstName"
          label="First Name"
          required={true}
        />
        <StrikeInput
          type="text"
          name="LastName"
          label="Last Name"
          required={true}
        />
        <StrikeSelect
          options={genderOptions}
          name="gender"
          label="Gender"
          required={true}
        />
        <StrikeDatePicker name="dob" label="Date of Birth" required={true} />
      </div>
      <div className="flex justify-center items-center">
        {isLoadingUpdateUser ? (
          <div className="w-[10rem] mt-[1.5rem]">
            <SubmitBtnLoader />
          </div>
        ) : (
          <button type="submit" className="submitBtn w-[10rem] mt-[1.5rem]">
            Save
          </button>
        )}
      </div>
    </StrikeForm>
  );
}
