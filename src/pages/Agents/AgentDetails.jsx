import { Link, useLocation, useParams } from "react-router-dom";
import { useGetSingleAgentDetailsQuery, useGetSingleWalletAgentDetailsQuery } from "../../redux/features/transactions/transactionsApi";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import noRecharge from "../../assets/no-recharge.svg";
import moment from "moment";
import ViewRemarksModal from "./ViewRemarksModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function AgentDetails() {
  const { id } = useParams();
  const timeoutRef = useRef(null);
  const [isTextCopied, setIsTextCopied] = useState("");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const location = useLocation();
  const reqCoins = location.state.reqCoins;

  const {data: walletAgentDetails} = useGetSingleWalletAgentDetailsQuery(id);
  const walletAgent = walletAgentDetails?.response?.agentDetails || {};
  console.log("Single Wallet Agent", walletAgent);
  const { data, isLoading, isError } = useGetSingleAgentDetailsQuery(id);
  const agentDetails = data?.response?.agentTicket || [];
  console.log("Agent Details", agentDetails);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isLoading && isError) {
    return (
      <h1 className="text-center text-red-500 py-[5rem]">
        There was something wrong!
      </h1>
    );
  }

  const copyTextHandler = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsTextCopied(text);
        timeoutRef.current = setTimeout(() => {
          setIsTextCopied(null);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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

  return (
    <div>
      <div
        className="flex flex-col gap-1 p-3 rounded-[20px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <div>
          <h1 className="text-[20px] font-semibold">
            {walletAgent?.FirstName +
              " " +
              walletAgent?.LastName}
          </h1>
          <span className="text-[13px] text-[#808080] mt-[-2px] block">
            Strike Agent
          </span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="bankName" className="text-[13px] font-medium">
            Account Holder Name:
          </label>
          <span className="text-[15px] font-semibold">
            {walletAgent?.bankDetails?.acc_name}
          </span>
          {isTextCopied === walletAgent?.bankDetails?.acc_name ? (
            <span className="text-[#029CFD] text-[14px]">Copied!</span>
          ) : (
            <button
              onClick={() =>
                copyTextHandler(walletAgent?.bankDetails?.acc_name)
              }
            >
              <Icon
                icon="material-symbols:content-copy-outline-rounded"
                className="text-[1.3rem]"
              />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="bankName" className="text-[13px] font-medium">
            A/C Number:
          </label>
          <span className="text-[15px] font-semibold">
            {walletAgent?.bankDetails?.acc_number}
          </span>
          {isTextCopied ===
          walletAgent?.bankDetails?.acc_number ? (
            <span className="text-[#029CFD] text-[14px]">Copied!</span>
          ) : (
            <button
              onClick={() =>
                copyTextHandler(
                  walletAgent?.bankDetails?.acc_number
                )
              }
            >
              <Icon
                icon="material-symbols:content-copy-outline-rounded"
                className="text-[1.3rem]"
              />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="bankName" className="text-[13px] font-medium">
            IFSC Code:
          </label>
          <span className="text-[15px] font-semibold">
            {walletAgent?.bankDetails?.acc_ifsc}
          </span>
          {isTextCopied === walletAgent?.bankDetails?.acc_ifsc ? (
            <span className="text-[#029CFD] text-[14px]">Copied!</span>
          ) : (
            <button
              onClick={() =>
                copyTextHandler(walletAgent?.bankDetails?.acc_ifsc)
              }
            >
              <Icon
                icon="material-symbols:content-copy-outline-rounded"
                className="text-[1.3rem]"
              />
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between my-4">
        <h1 className="text-[20px] font-semibold">Previous Payments</h1>
        <Icon icon="mdi:filter" className="text-[1.5rem]" />
      </div>
      {agentDetails?.length === 0 ? (
        <div className="flex items-center justify-center">
          <img src={noRecharge} alt="no-recharge" className="w-[80%]" />
        </div>
      ) : (
        <>
          <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-6">
            <div></div>
            <div className="flex gap-5 text-[2rem]">
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
          <Swiper
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            {...swiperConfig}
            className="w-full m-3"
          >
            {agentDetails?.map((item) => (
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
                            : "text-[#25BF17]"
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
                          <Icon
                            className="text-[1.3rem]"
                            icon="hugeicons:view"
                          />
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
                          {moment(item.createdAt).format(
                            "hh:mm A, DD MMM, YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-[#5500C3] gap-1 cursor-pointer">
                        <p>Notify Agent</p>
                        <Icon icon="mdi:bell-outline" />
                      </div>
                      <div className="flex items-center text-red-500 gap-1 cursor-pointer">
                        <p>Report Agent</p>
                        <Icon icon="zondicons:exclamation-outline" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      <Link to="/agents/submit-ticket" state={{id: id, reqCoins: reqCoins}}
      className="flex items-center justify-center mt-8">
        <button className="font-medium gradientBg text-white py-2 min-w-[300px] rounded-[50px]">
          Submit Proof
        </button>
      </Link>
    </div>
  );
}
