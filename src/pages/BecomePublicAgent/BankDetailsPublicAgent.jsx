import React from "react";
import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import StrikeTextArea from "../../components/Form/StrikeTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankNameOptions } from "../../options/bankNameOptions";
import { bankDetailsPublicAgentSchema } from "../../schemas/BankDetailsPublicAgentSchema";

export default function BankDetailsPublicAgent() {
  const handleSubmitPersonalDetails = (data) => {
    console.log("Bank Details Data Public Agent=====> ", data);
  };
  return (
    <StrikeForm
      onSubmit={handleSubmitPersonalDetails}
      resolver={yupResolver(bankDetailsPublicAgentSchema)}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <StrikeInput
          type="number"
          name="accountNumber"
          label="Bank A/C Number*"
          required={true}
        />
        <StrikeInput
          type="text"
          name="accountHolder"
          label="Name of the Account Holder"
          required={true}
        />
        <StrikeSelect
          options={bankNameOptions}
          name="bankName"
          label="Bank Name"
          required={true}
        />
        <StrikeInput
          type="text"
          name="IFSCCode"
          label="IFSC Code"
          required={true}
        />
        <StrikeInput
          type="text"
          name="accountCity"
          label="Account City"
          required={true}
        />
        <StrikeInput
          type="text"
          name="accountBranch"
          label="Account Branch"
          required={true}
        />
      </div>
      <div className="flex justify-center items-center mt-[0.5rem]">
        <button type="submit" className="submitBtn w-[16rem]">
          Submit
        </button>
      </div>
    </StrikeForm>
  );
}
