import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useGetWithdrawRequestHistoryQuery } from "../../redux/features/lottery/lotteryApi";
import WithdrawRequestHistorySkeleton from "./WithdrawRequestHistorySkeleton";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function WithdrawRequestsHistory() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);

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

  const { data, isLoading } = useGetWithdrawRequestHistoryQuery();
  console.log(data?.response?.withdrawList);
  return (
    <section>
      {/* Back button  */}
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="md:text-[2rem] text-[1.25rem] font-semibold">
          Withdraw Request History
        </h3>
      </div>

      <header className="flex md:flex-row flex-col mb-[1rem] md:gap-1 gap-3 md:items-center justify-between">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">History</h3>
        </div>
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

      {isLoading ? (
        <WithdrawRequestHistorySkeleton />
      ) : (
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          {...swiperConfig}
          className="w-full"
        >
          {data?.response?.withdrawList?.map(
            ({
              _id,
              withdrawalAmt,
              cryptoValue,
              cryptoWalletAddress,
              withdrawalId,
              status,
            }) => (
              <SwiperSlide ke={_id}>
                <div className="flex justify-center items-center py-[1.5rem] pl-[2rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
                  <div className="middle1"></div>
                  <div className="middle2"></div>
                  <div className="text-left space-y-[0.5rem] ml-3 text-[14px]">
                    <p className="font-medium text-[14px]">
                      Withdrawal ID:{" "}
                      <span className="font-bold">{withdrawalId}</span>
                    </p>
                    <p>
                      Coins Requested:{" "}
                      <span className="text-[#5500C3] font-bold">
                        {withdrawalAmt}
                      </span>
                    </p>
                    <p>
                      Status:{" "}
                      <span className="text-[#25BF17] font-bold">{status}</span>
                    </p>
                    <div>
                      <p>
                        Crypto Amount:{" "}
                        <span className="text-[#5500C3] font-bold">
                          {cryptoValue}
                        </span>
                      </p>
                    </div>
                    <div>
                      Crypto Address:{" "}
                      <span className="font-bold">{cryptoWalletAddress}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </section>
  );
}
