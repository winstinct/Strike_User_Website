import StrikeForm from "../../components/Form/StrikeForm";
import StrikeInput from "../../components/Form/StrikeInput";
import StrikeSelect from "../../components/Form/StrikeSelect";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankNameOptions } from "../../options/bankNameOptions";
import { bankDetailsPublicAgentSchema } from "../../schemas/BankDetailsPublicAgentSchema";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useBecomePublicAgentMutation } from "../../redux/features/lottery/lotteryApi";
import { toast } from "react-toastify";

export default function BankDetailsPublicAgent() {
  const { publicAgentBankDetails } = useSelector(
    (state) => state.publicAgentDetails
  );
  const { publicAgentPersonalDetails } = useSelector(
    (state) => state.publicAgentDetails
  );

  const {
    FirstName,
    LastName,
    email,
    dob,
    mobileNumber,
    country,
    city,
    state,
    pincode,
    address,
  } = publicAgentPersonalDetails || {};

  const [accepted, setAccepted] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const [becomePublicAgentApi, { isLoading }] = useBecomePublicAgentMutation();

  const handleSubmitBankDetails = async (data) => {
    if (!accepted) {
      return setDisplayError(true);
    }

    const submitFormsData = {
      whatsApp: "Not available",
      Email: email,
      FirstName,
      LastName,
      MobileNumber: mobileNumber,
      dob,
      location: {
        country: country?.value,
        state: state?.value,
        pincode,
        city: city?.value,
        address,
      },
      BankDetails: publicAgentBankDetails,
      kyc_details: {},
    };

    try {
      const res = await becomePublicAgentApi(submitFormsData);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Created agent request successfully.", {
          autoClose: 2000,
        });
        // navigate(`/cartQuantityAdjuster/${UniqueID}`)
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    // console.log("Bank Details Data Public Agent=====> ", submitFormsData);
  };

  return (
    <StrikeForm
      onSubmit={handleSubmitBankDetails}
      resolver={yupResolver(bankDetailsPublicAgentSchema)}
      defaultValues={publicAgentBankDetails}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]">
        <StrikeInput
          type="number"
          name="acc_number"
          label="Bank A/C Number*"
          required={true}
          formName="publicAgentBankDetails"
        />
        <StrikeInput
          type="text"
          name="acc_name"
          label="Name of the Account Holder"
          required={true}
          formName="publicAgentBankDetails"
        />
        <StrikeSelect
          options={bankNameOptions}
          name="bankName"
          label="Bank Name"
          required={true}
          formName="publicAgentBankDetails"
        />
        <StrikeInput
          type="text"
          name="acc_ifsc"
          label="IFSC Code"
          required={true}
          formName="publicAgentBankDetails"
        />
        <StrikeInput
          type="text"
          name="acc_city"
          label="Account City"
          required={true}
          formName="publicAgentBankDetails"
        />
        <StrikeInput
          type="text"
          name="acc_branch"
          label="Account Branch"
          required={true}
          formName="publicAgentBankDetails"
        />
      </div>

      <div className="mt-[1.5rem] space-y-[1.5rem]">
        <div>
          <div
            onClick={() => setAccepted(!accepted)}
            className="flex items-center justify-center cursor-pointer gap-1"
          >
            {accepted ? (
              <Icon
                className="w-[1.5rem] h-[1.5rem] text-[#A967FF]"
                icon="tabler:square-check-filled"
              />
            ) : (
              <Icon
                className="w-[1.5rem] h-[1.5rem] text-[#A967FF]"
                icon="fluent:square-24-regular"
              />
            )}
            <p className="text-[14px] font-medium select-none">
              Agree to the{" "}
              <span className="text-[#A967FF]">terms & conditions</span>
            </p>
          </div>
          {displayError && !accepted && (
            <p className="text-red-500 text-[14px] text-center font-semibold mt-1">
              Please accept Terms and Conditions.
            </p>
          )}
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
