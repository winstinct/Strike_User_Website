import CopyCodeReferAndEarn from "./CopyCodeReferAndEarn";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";

const options = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Completed",
    value: "Completed",
  },
];

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "150px",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #5500C3",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #5500C3",
    },
    padding: "2px 0",
    borderRadius: "35px",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    borderRadius: "10px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    color: state.isSelected ? "#fff" : provided.color,
    "&:hover": {
      backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    },
    cursor: "pointer",
    borderRadius: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
};

export default function ReferAndEarn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate()
  const {data, isLoading} = useGetUserDetailsQuery();
  const {refferal, wallet} = data?.response?.UserData || {};
  return (
    <main>
      <div className="flex items-center gap-5 mb-5">
        <div onClick={() => navigate("/menu")} className="backBtn md:hidden block">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">Refer and Earn</h3>
      </div>
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="rounded-lg p-3"
      >
        <div className="space-y-[0.8rem]">
          <p className="text-[1.25rem] font-semibold">Invite Code</p>
          <p className="text-[14px]">
            Invite your friends & family to earn 10 coins per invite.
          </p>

          <div>
            <CopyCodeReferAndEarn code={refferal?.refferalCode} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 text-[1.5rem] mt-[0.8rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 4C16.4184 4 20 7.5816 20 12C20 16.4184 16.4184 20 12 20C10.5862 20.0023 9.19733 19.6281 7.97601 18.916L4.00321 20L5.08481 16.0256C4.37209 14.8039 3.99765 13.4144 4.00001 12C4.00001 7.5816 7.58161 4 12 4ZM9.27361 8.24L9.11361 8.2464C9.01003 8.25271 8.90879 8.27992 8.81601 8.3264C8.72922 8.37554 8.65001 8.43698 8.58081 8.5088C8.48481 8.5992 8.43041 8.6776 8.37201 8.7536C8.07611 9.13832 7.91679 9.61065 7.91921 10.096C7.92081 10.488 8.02321 10.8696 8.18321 11.2264C8.51041 11.948 9.04881 12.712 9.75921 13.42C9.93041 13.5904 10.0984 13.7616 10.2792 13.9208C11.1619 14.698 12.2138 15.2584 13.3512 15.5576L13.8056 15.6272C13.9536 15.6352 14.1016 15.624 14.2504 15.6168C14.4834 15.6048 14.7109 15.5417 14.9168 15.432C15.0216 15.378 15.1238 15.3193 15.2232 15.256C15.2232 15.256 15.2576 15.2336 15.3232 15.184C15.4312 15.104 15.4976 15.0472 15.5872 14.9536C15.6536 14.8848 15.7112 14.804 15.7552 14.712C15.8176 14.5816 15.88 14.3328 15.9056 14.1256C15.9248 13.9672 15.9192 13.8808 15.9168 13.8272C15.9136 13.7416 15.8424 13.6528 15.7648 13.6152L15.2992 13.4064C15.2992 13.4064 14.6032 13.1032 14.1776 12.9096C14.1331 12.8901 14.0853 12.879 14.0368 12.8768C13.9821 12.8712 13.9268 12.8773 13.8746 12.8949C13.8224 12.9124 13.7746 12.9409 13.7344 12.9784C13.7304 12.9768 13.6768 13.0224 13.0984 13.7232C13.0652 13.7678 13.0195 13.8015 12.967 13.82C12.9146 13.8386 12.8579 13.8411 12.804 13.8272C12.7519 13.8132 12.7008 13.7956 12.6512 13.7744C12.552 13.7328 12.5176 13.7168 12.4496 13.688C11.9905 13.4876 11.5654 13.2169 11.1896 12.8856C11.0888 12.7976 10.9952 12.7016 10.8992 12.6088C10.5845 12.3074 10.3102 11.9664 10.0832 11.5944L10.036 11.5184C10.0021 11.4673 9.97469 11.4122 9.95441 11.3544C9.92401 11.2368 10.0032 11.1424 10.0032 11.1424C10.0032 11.1424 10.1976 10.9296 10.288 10.8144C10.376 10.7024 10.4504 10.5936 10.4984 10.516C10.5928 10.364 10.6224 10.208 10.5728 10.0872C10.3488 9.54 10.1168 8.9952 9.87841 8.4544C9.83121 8.3472 9.69121 8.2704 9.56401 8.2552C9.52081 8.2504 9.47761 8.2456 9.43441 8.2424C9.32697 8.23706 9.21932 8.23813 9.11201 8.2456L9.27281 8.2392L9.27361 8.24Z"
              fill="#212529"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.268 13.2H15.268L16.068 10H13.268V8.4C13.268 7.576 13.268 6.8 14.868 6.8H16.068V4.112C15.8072 4.0776 14.8224 4 13.7824 4C11.6104 4 10.068 5.3256 10.068 7.76V10H7.66797V13.2H10.068V20H13.268V13.2Z"
              fill="#212529"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.2222 4C18.6937 4 19.1459 4.1873 19.4793 4.5207C19.8127 4.8541 20 5.30628 20 5.77778V18.2222C20 18.6937 19.8127 19.1459 19.4793 19.4793C19.1459 19.8127 18.6937 20 18.2222 20H5.77778C5.30628 20 4.8541 19.8127 4.5207 19.4793C4.1873 19.1459 4 18.6937 4 18.2222V5.77778C4 5.30628 4.1873 4.8541 4.5207 4.5207C4.8541 4.1873 5.30628 4 5.77778 4H18.2222ZM17.7778 17.7778V13.0667C17.7778 12.2981 17.4725 11.5611 16.929 11.0176C16.3856 10.4742 15.6485 10.1689 14.88 10.1689C14.1244 10.1689 13.2444 10.6311 12.8178 11.3244V10.3378H10.3378V17.7778H12.8178V13.3956C12.8178 12.7111 13.3689 12.1511 14.0533 12.1511C14.3834 12.1511 14.6999 12.2822 14.9333 12.5156C15.1667 12.749 15.2978 13.0655 15.2978 13.3956V17.7778H17.7778ZM7.44889 8.94222C7.84495 8.94222 8.22478 8.78489 8.50484 8.50484C8.78489 8.22478 8.94222 7.84495 8.94222 7.44889C8.94222 6.62222 8.27556 5.94667 7.44889 5.94667C7.05047 5.94667 6.66838 6.10494 6.38666 6.38666C6.10494 6.66838 5.94667 7.05047 5.94667 7.44889C5.94667 8.27556 6.62222 8.94222 7.44889 8.94222ZM8.68444 17.7778V10.3378H6.22222V17.7778H8.68444Z"
              fill="#212529"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              fill="#212529"
            />
          </svg>
        </div>
      </div>

      <div className="gradientBg text-white text-center rounded-[20px] p-2 mt-[2rem]">
        <p className="text-[1rem] font-semibold">Total Earnings</p>
        <h3 className="font-bold italic">
          <span className="text-[2rem]">{wallet}</span>{" "}
          <span className="text-[1.25rem]">Coins</span>
        </h3>
        <p className="text-[14px]">Invite more and keep earning</p>
      </div>

      {/* Filter Buttons  */}
      <div className="flex lg:flex-row flex-col items-center justify-between mt-[2rem]">
        <div className="flex lg:flex-row flex-col items-center gap-3">
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">
            All
          </button>
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">
            Completed
          </button>
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">
            Pending
          </button>
        </div>
        <Select
          options={options}
          styles={customStyles}
          placeholder="Sort By"
          className="lg:mt-0 mt-3"
        ></Select>
      </div>

      <div className="space-y-[0.5rem] border-[2px] border-[#5500C3] rounded-lg p-3 mt-[1.5rem]">
        <div className="flex items-center justify-between">
          <h3 className="text-[1rem] font-semibold">Billal Hossain</h3>
          <div className="text-[14px] font-medium">
            <span>Status:</span> <span className="text-[#E5B905]">Pending</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Progress size="sm" color="red" value={50} />
          <p className="w-[100px] text-right">1/2 Tasks</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Icon
              className="text-[#198754] text-[1.5rem]"
              icon="lets-icons:check-fill"
            />
            <p>App install</p>
          </div>
          <p>100 coins</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Icon
              className="text-[#E5B905] text-[1.5rem]"
              icon="arcticons:ca-lottery"
            />
            <p>App install</p>
          </div>
          <p>100 coins</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Icon
            className="text-[14px] text-gray-500"
            icon="zondicons:exclamation-solid"
          />
          <p className="text-[12px]">
            Earn 20 coins upon completion of 2 tasks
          </p>
        </div>
      </div>

      <div className="space-y-[0.5rem] border-[2px] border-[#5500C3] rounded-lg p-3 mt-[1.5rem]">
        <div className="flex items-center justify-between">
          <h3 className="text-[1rem] font-semibold">Billal Hossain</h3>
          <div className="text-[14px] font-medium">
            <span>Status:</span> <span className="text-[#E5B905]">Pending</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Progress size="sm" color="red" value={50} />
          <p className="w-[100px] text-right">1/2 Tasks</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Icon
              className="text-[#198754] text-[1.5rem]"
              icon="lets-icons:check-fill"
            />
            <p>App install</p>
          </div>
          <p>100 coins</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Icon
              className="text-[#E5B905] text-[1.5rem]"
              icon="arcticons:ca-lottery"
            />
            <p>Lottery Purchase</p>
          </div>
          <p>100 coins</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Icon
            className="text-[14px] text-gray-500"
            icon="zondicons:exclamation-solid"
          />
          <p className="text-[12px]">
            Earn 20 coins upon completion of 2 tasks
          </p>
        </div>
      </div>
    </main>
  );
}
