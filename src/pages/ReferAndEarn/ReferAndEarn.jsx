import CopyCodeReferAndEarn from "./CopyCodeReferAndEarn";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "@material-tailwind/react";
import Select from "react-select";

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
  return (
    <main className="mr-[16.5rem]">
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="rounded-lg p-3"
      >
        <h3 className="font-bold text-[2rem] italic">Refer and Earn</h3>
        <div className="space-y-[0.8rem]">
          <p className="text-[1.25rem] font-semibold">Invite Code</p>
          <p className="text-[14px]">
            Invite your friends & family to earn 10 coins per invite.
          </p>

          <div>
            <CopyCodeReferAndEarn code="SUD31SA" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 text-[1.5rem] mt-[0.8rem]">
          <Icon className="cursor-pointer" icon="mingcute:whatsapp-fill" />
          <Icon className="cursor-pointer" icon="ic:baseline-facebook" />
          <Icon
            className="cursor-pointer"
            icon="entypo-social:linkedin-with-circle"
          />
          <Icon className="text-gray-700 cursor-pointer" icon="bi:three-dots" />
        </div>
      </div>

      <div className="gradientBg text-white text-center rounded-[20px] p-2 mt-[2rem]">
        <p className="text-[1rem] font-semibold">Total Earnings</p>
        <h3 className="font-bold italic">
          <span className="text-[2rem]">100.00</span>{" "}
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

      <div className="space-y-[0.5rem] border-[2px] border-[#5500C3] rounded-lg p-3 mt-[1rem]">
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

      <div className="space-y-[0.5rem] border-[2px] border-[#5500C3] rounded-lg p-3 mt-[1rem]">
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
