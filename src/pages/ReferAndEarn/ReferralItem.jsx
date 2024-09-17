import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import ReactSlider from "react-slider";

export default function ReferralItem({ item }) {
  const { userMongoId, status } = item || {};
  const { FirstName, LastName } = userMongoId || {};
  return (
    <div className="space-y-[1rem] border-[2px] border-[#5500C3] rounded-lg p-3 mt-[1.5rem]">
      <div className="flex items-center justify-between">
        <h3 className="text-[1rem] font-semibold">
          {FirstName} {LastName}
        </h3>
        <div className="text-[14px] font-medium">
          {status.toLowerCase() == "pending" ? (
            <div>
              {" "}
              <span>Status:</span>{" "}
              <span className="text-[#E5B905]">Pending</span>
            </div>
          ) : status.toLowerCase() == "completed" ? (
            <div>
              <span>Status:</span>{" "}
              <span className="text-green-500">Completed</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ReactSlider
          className="horizontal-slider mt-3"
          trackClassName="example-track"
          min={0}
          max={2}
          value={status.toLowerCase() == "completed" ? 2 : 1}
        />
        <p className="w-[100px] text-right">{status.toLowerCase() == "completed" ? "2/2" : "1/2"} Tasks</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="12" fill="#198754" />
            <path
              d="M19.5833 7.175L9.58333 17.175L5 12.5917L6.175 11.4167L9.58333 14.8167L18.4083 6L19.5833 7.175Z"
              fill="white"
            />
          </svg>
          <p>App install</p>
        </div>
        <p>10 coins</p>
      </div>

      <div className="flex justify-between items-center pt-2">
        <div className="flex items-center gap-1">
          {status.toLowerCase() == "pending" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="12" fill="#E5B905" />
              <path
                d="M6.99854 18V17.3333H8.20387V15.3333C8.20387 14.5102 8.45609 13.7802 8.96054 13.1433C9.46498 12.5064 10.1116 12.1253 10.9005 12C10.1121 11.8667 9.46542 11.4836 8.96054 10.8507C8.45565 10.2178 8.20342 9.48978 8.20387 8.66667V6.66667H6.99854V6H16.3319V6.66667H15.1265V8.66667C15.1265 9.48978 14.8743 10.2178 14.3699 10.8507C13.8654 11.4836 13.2188 11.8667 12.4299 12C13.2183 12.1244 13.865 12.5056 14.3699 13.1433C14.8743 13.7802 15.1265 14.5102 15.1265 15.3333V17.3333H16.3319V18H6.99854Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="12" fill="#198754" />
              <path
                d="M19.5833 7.175L9.58333 17.175L5 12.5917L6.175 11.4167L9.58333 14.8167L18.4083 6L19.5833 7.175Z"
                fill="white"
              />
            </svg>
          )}
          <p>Lottery Purchase</p>
        </div>
        <p>10 coins</p>
      </div>

      <div className="flex items-center justify-center gap-1">
        <Icon
          className="text-[14px] text-gray-500"
          icon="zondicons:exclamation-solid"
        />
        <p className="text-[12px]">Earn 20 coins upon completion of 2 tasks</p>
      </div>
    </div>
  );
}

ReferralItem.propTypes = {
  item: PropTypes.object,
};
