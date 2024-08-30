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
import { storage, ref, uploadBytes, getDownloadURL } from "../../Firebase";
export default function ProfilePersonalDetails() {
  // RTK Query Hooks
  const { data, isLoading } = useGetUserDetailsQuery();
  const [updateUser, { isLoading: isLoadingUpdateUser }] =
    useUpdateUserDetailsMutation();

  const { FirstName, LastName, Gender, imageUrl, dob, email } =
    data?.response?.UserData || {};
  const [selectedFile, setSelectedFile] = useState();
  const [showError, setShowError] = useState(false);


  const handleUpload = async() => {
    if (!selectedFile) {
      console.log('No image selected');
      return;
    }
  
    // Create a storage reference
    const imageRef = ref(storage, `images/${selectedFile.name}`);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(imageRef, selectedFile);
  
      // Get the download URL
      const url = await getDownloadURL(snapshot.ref);
      console.log('File available at', url);
      return url;
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const handleSubmitPersonalDetails = async (formData) => {
    if (!selectedFile) {
      return setShowError(true);
    }

     console.log("update form data===>", formData)
    //  return;
    // Call API
    try {
      const imageUrl = await handleUpload();
      const res = await updateUser({...formData, gender:formData.gender.value, imageUrl});
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

  if(isLoading){
    return <ThreeDotsLoader/>
  }


  let defaultValues = {
    FirstName,
    LastName,
    gender: { label: Gender, value: Gender },
    imageUrl,
    dob,
  }

  return (
    <StrikeForm
      onSubmit={handleSubmitPersonalDetails}
      resolver={yupResolver(personalDetailsSchema)}
      defaultValues={defaultValues}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]">
        <div className="lg:col-span-2">
          {/* Upload File Input  */}
          {!selectedFile && (
            <div>
              <div className="md:col-span-2 flex justify-center">
                <div>
                  <div
                    onClick={() => document.getElementById("file").click()}
                    className="gradientBg w-[130px] h-[130px] rounded-full flex justify-center items-center relative cursor-pointer"
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
                      className="absolute bottom-1 right-0 text-[1.3rem] w-[35px] cursor-pointer h-[35px] flex justify-center items-center text-white rounded-full select-none border-[3px] border-[#fff]"
                    >
                      <Icon className="text-[1rem]" icon="clarity:edit-solid" />
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
              <div className="text-center mt-[1.5rem]">
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
                    src={URL?.createObjectURL(selectedFile)}
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
              <div className="text-center mt-[1.5rem]">
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
          <button type="submit" className="submitBtn w-[22rem] mt-[1.5rem]">
            Save
          </button>
        )}
      </div>
    </StrikeForm>
  );
}
