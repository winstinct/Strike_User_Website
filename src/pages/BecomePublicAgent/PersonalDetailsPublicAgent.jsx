import React from "react";
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

export default function PersonalDetailsPublicAgent() {
  const navigate = useNavigate();
  const handleSubmitPersonalDetails = (data)=>{
    console.log("Sumitted Data Public Agent=====> ", data);
    navigate("bank-details-public-agent")
  }
  return (
    <StrikeForm onSubmit={handleSubmitPersonalDetails} resolver={yupResolver(personalDetailsPublicAgentSchema)}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <StrikeInput type="text" name="firstName" label="First Name" required={true}/>
        <StrikeInput type="text" name="lastName" label="Last Name" required={true}/>
        <StrikeSelect options={genderOptions} name="gender" label="Gender" required={true}/>
        <StrikeDatePicker name="dob" label="Date of Birth" />
        <StrikeInput type="number" name="mobile" label="Mobile Number" required={true}/>
        <StrikeInput type="email" name="email" label="Email" required={true}/>
        <StrikeSelect options={countryOptions} name="country" label="Country" required={true}/>
        <StrikeSelect options={stateOptions} name="state" label="State" required={true}/>
        <StrikeSelect options={cityOptions} name="city" label="City" required={true}/>
        <StrikeInput type="text" name="pinCode" label="Pin Code" required={true}/>
        <div className="lg:col-span-2"><StrikeTextArea name="address" label="Address" required={true}/></div>
      </div>
      <div className="flex justify-center items-center mt-[0.5rem]">
        <button type="submit" className="submitBtn w-[16rem]">
          Next
        </button>
      </div>
    </StrikeForm>
  );
}
