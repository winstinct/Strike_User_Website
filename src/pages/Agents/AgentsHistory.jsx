import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetAllAgentsTicketsQuery } from "../../redux/features/transactions/transactionsApi";
import moment from "moment";
import ViewRemarksModal from "./ViewRemarksModal";
import AgentHistorySkeleton from "./AgentHistorySkeleton";
import RejectAgentModal from "./RejectAgentModal";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { APIurls } from "../../api/apiConstant";
import NotifyAgentModal from "./NotifyAgentModal";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

const options = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Processed",
    value: "Processed",
  },
  {
    label: "Rejected",
    value: "Rejected",
  },
  {
    label: "Submitted",
    value: "Submitted",
  },
];

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "150px",
    zIndex: "40",
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

export default function AgentsHistory() {
  const { t } = useTranslation();
  useTitle("Strike - Deposit History");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const [notifyLoading, setNotifyLoading] = useState({});
  const { getAccessToken } = useAuth();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  const { data, isLoading, isError } = useGetAllAgentsTicketsQuery();

  // decide what to render
  let content = "";

  if (isLoading && !isError) {
    content = <AgentHistorySkeleton />;
  }

  if (
    !isLoading &&
    !isError &&
    data?.response?.agentTicket?.response?.agentTicket == 0
  ) {
    content = (
      <h1 className="text-center py-[5rem]">There are no records to display</h1>
    );
  }

  const handleNext = () => {
    swiperInstance?.slideNext();
    setIsEnd(swiperInstance?.isEnd);
    setIsBeginning(swiperInstance?.isBeginning);
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
    setIsBeginning(swiperInstance?.isBeginning);
    setIsEnd(swiperInstance?.isEnd);
  };

  const notifyAgentHandler = async (singleData) => {
    setNotifyLoading({
      [singleData?._id]: true,
    });
    const token = await getAccessToken();
    try {
      const response = await fetch(`${APIurls.notifyAgent}`, {
        method: "POST",
        body: JSON.stringify({
          agentId: singleData?.agentId?._id,
          requestId: singleData?._id,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        toast.error("Failed to Report Agent");
        throw new Error("Failed to Report Agent");
      }
      const result = await response.json();
      console.log(result);
      toast.success("Agent Reported Successfully");
      close();
    } catch (error) {
      console.warn("Failed to Report Agent");
    }
    setNotifyLoading({
      [singleData?._id]: false,
    });
  };

  const [status, setStatus] = useState("all");
  const handleChange = (data) => {
    setStatus(data.value.toLowerCase());
  };

  return (
    <section className="mt-[2rem]">
      <div>
        {/* Filter Buttons  */}
        <div className="flex justify-between items-center flex-wrap mb-[1rem]">
        <h3 className="text-[1.25rem] font-bold">{t("history")}</h3>
          <Select
            onChange={handleChange}
            options={options}
            styles={customStyles}
            placeholder="Filter By"
            className="lg:mt-0 mt-3"
          ></Select>
        </div>
      </div>
      <header className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <button
            className={`border-[2px] rounded-md p-1 border-[#858585] ${
              isBeginning ? "bg-gray-300 border-[#e9e7e7]" : ""
            }`}
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M8 16.5001L7.05719 15.5573L6.11438 16.5001L7.05719 17.4429L8 16.5001ZM24 17.8334C24.7364 17.8334 25.3333 17.2365 25.3333 16.5001C25.3333 15.7637 24.7364 15.1667 24 15.1667V17.8334ZM12.3905 10.2239L7.05719 15.5573L8.94281 17.4429L14.2761 12.1096L12.3905 10.2239ZM7.05719 17.4429L12.3905 22.7762L14.2761 20.8906L8.94281 15.5573L7.05719 17.4429ZM8 17.8334H24V15.1667H8V17.8334Z"
                fill="#858585"
              />
            </svg>
          </button>

          <button
            className={`border-[2px] rounded-md p-1 border-[#858585] ${
              isEnd ? "bg-gray-300 border-[#f7f5f5]" : ""
            }`}
            onClick={handleNext}
            disabled={isEnd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M24 16.5001L24.9428 15.5573L25.8856 16.5001L24.9428 17.4429L24 16.5001ZM8 17.8334C7.26362 17.8334 6.66667 17.2365 6.66667 16.5001C6.66667 15.7637 7.26362 15.1667 8 15.1667V17.8334ZM19.6095 10.2239L24.9428 15.5573L23.0572 17.4429L17.7239 12.1096L19.6095 10.2239ZM24.9428 17.4429L19.6095 22.7762L17.7239 20.8906L23.0572 15.5573L24.9428 17.4429ZM24 17.8334H8V15.1667H24V17.8334Z"
                fill="#858585"
              />
            </svg>
          </button>
        </div>
      </header>

      {content || (
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          {...swiperConfig}
          className="w-full m-3"
        >
          {data?.response?.agentTicket?.filter((item) => {
              if (status == "all") {
                return item;
              } else {
                return item.status.toLowerCase() == status;
              }
            })?.map((item) => (
            <SwiperSlide key={item.ticket_id}>
              <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
                <div className="middle1"></div>
                <div className="middle2"></div>
                <div className="text-left space-y-[0.5rem] text-[14px] ml-5">
                  <p className="font-medium text-[14px]">
                    Ticket ID:{" "}
                    <span className="font-bold">{item.ticket_id}</span>
                  </p>
                  <div>
                    <span>Status: </span>
                    <span
                      className={`font-bold ${
                        item.status === "REJECTED"
                          ? "text-gray-600"
                          : item.status === "PROCESSED"
                          ? "text-[#25BF17]"
                          : "text-[#FFCE06]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>Payment Proof:</p>
                    <a href={item.Payment_Image} target="_blank">
                      <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                        <p>View</p>
                        <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>Remarks:</p>
                    <ViewRemarksModal remarks={item.remarks} />
                  </div>
                  <div>
                    <p>
                      Date and Time:{" "}
                      <span className="font-bold">
                        {moment(item.createdAt).format("hh:mm A, DD MMM, YYYY")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <NotifyAgentModal data={item} />
                    <RejectAgentModal data={item} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
