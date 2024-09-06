import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import StrikeDatePicker from "../../components/Form/StrikeDatePicker";
import { genderOptions } from "../../options/genderOptions";
import { countryOptions } from "../../options/countryOptions";
import { stateOptions } from "../../options/stateOptions";
import { cityOptions } from "../../options/cityOptions";
import StrikeTextArea from "../../components/Form/StrikeTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalDetailsPublicAgentSchema } from "../../schemas/personalDetailsPublicAgentSchema";
import { useNavigate } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import ThreeDotsLoader from "../../components/ThreeDotsLoader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPublicAgentPersonalDetails } from "../../redux/becomePublicAgentDetailsSlice";

export default function PersonalDetailsPublicAgent() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { publicAgentPersonalDetails } = useSelector(
    (state) => state.publicAgentDetails
  );

  const { data, isLoading, isSuccess } = useGetUserDetailsQuery();
  const {
    FirstName,
    LastName,
    Gender,
    location: { country, state, city, address, pincode } = {},
    dob,
    email,
    mobileNumber,
  } = data?.response?.UserData || {};

  if (isLoading) {
    return <ThreeDotsLoader />;
  }

  const apiData = {
    FirstName,
    LastName,
    dob,
    mobileNumber,
    email,
    Gender: { label: Gender, value: Gender },
    country: { label: country, value: country },
    state: { label: state, value: state },
    city: { label: city, value: city },
    pincode,
    address,
  };

  useEffect(() => {
    !publicAgentPersonalDetails?.FirstName && dispatch(addPublicAgentPersonalDetails(apiData));
  }, []);

  const handleSubmitPersonalDetails = (data) => {
    navigate("bank-details-public-agent");
  };
  return (
    <StrikeForm
      onSubmit={handleSubmitPersonalDetails}
      resolver={yupResolver(personalDetailsPublicAgentSchema)}
      defaultValues={
        publicAgentPersonalDetails?.FirstName
          ? publicAgentPersonalDetails
          : apiData
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]">
        <StrikeInput
          type="text"
          name="FirstName"
          label="First Name"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeInput
          type="text"
          name="LastName"
          label="Last Name"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeSelect
          options={genderOptions}
          name="Gender"
          label="Gender"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeDatePicker
          name="dob"
          label="Date of Birth"
          formName="publicAgentPersonalDetails"
        />
        <StrikeInput
          type="text"
          name="mobileNumber"
          label="Mobile Number"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeInput
          type="email"
          name="email"
          label="Email"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeSelect
          options={countryOptions}
          name="country"
          label="Country"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeSelect
          options={stateOptions}
          name="state"
          label="State"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeSelect
          options={cityOptions}
          name="city"
          label="City"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <StrikeInput
          type="text"
          name="pincode"
          label="Pin Code"
          required={true}
          formName="publicAgentPersonalDetails"
        />
        <div className="lg:col-span-2">
          <StrikeTextArea
            name="address"
            label="Address"
            required={true}
            formName="publicAgentPersonalDetails"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[1rem]">
        <button type="submit" className="submitBtn w-[22rem]">
          Next
        </button>
      </div>
    </StrikeForm>
  );
}
