import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankNameOptions } from "../../options/bankNameOptions";
import { bankDetailsPublicAgentSchema } from "../../schemas/BankDetailsPublicAgentSchema";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function BankDetailsPublicAgent() {
  const [accepted, setAccepted] = useState(false)
  const handleSubmitPersonalDetails = (data) => {
    console.log("Bank Details Data Public Agent=====> ", data);
  };
  return (
    <StrikeForm
      onSubmit={handleSubmitPersonalDetails}
      resolver={yupResolver(bankDetailsPublicAgentSchema)}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]">
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

      <div className="mt-[1.5rem] space-y-[1.5rem]">
      <div onClick={()=>setAccepted(!accepted)} className="flex items-center justify-center cursor-pointer gap-1">
        {
          accepted ? <Icon className="w-[1.5rem] h-[1.5rem] text-[#A967FF]" icon="tabler:square-check-filled" /> : <Icon className="w-[1.5rem] h-[1.5rem] text-[#A967FF]" icon="fluent:square-24-regular" />
        }
      <p className="text-[14px] font-medium select-none">Agree to the <span className="text-[#A967FF]">terms & conditions</span></p>
      </div>

      <div className="flex justify-center items-center">
        <button type="submit" className="submitBtn w-[22rem]">
          Submit
        </button>
      </div>
      </div>
    </StrikeForm>
  );
}
