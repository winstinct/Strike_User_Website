import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetWinnersQuery } from "../../redux/features/lottery/lotteryApi";
import moment from "moment";
import WinnersSkeleton from "./WinnersSkeleton";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function Winners() {
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

  const { data, isLoading } = useGetWinnersQuery();
  console.log("Winners ====> ", data?.response?.fetchWinnerss);
  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[2rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
            Winners
          </h3>
          <p>*Check winners of previous lotteries</p>
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

      {isLoading ? <WinnersSkeleton/> : (<Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        {...swiperConfig}
        className="w-full"
      >
        {data?.response?.fetchWinnerss?.map(
          ({ UserID, transID, createdAt, winningAmount }) => (
            <SwiperSlide>
              <div className="flex justify-center h-[250px] items-center py-[1.5rem] px-[1rem] border-[#A967FF] rounded-2xl border-[4px] bg-white relative">
                <div className="middle1"></div>
                <div className="middle2"></div>
                <div className="text-center space-y-[0.5rem]">
                  <p className="font-bold">Congratulations</p>
                  <h3 className="text-[1.25rem] font-bold">
                    {UserID?.FirstName ? (
                      <div>
                        <span>{UserID?.FirstName}</span>
                        <span className="ml-1">{UserID?.LastName}</span>
                      </div>
                    ) : (
                      <span>Unknown User</span>
                    )}
                  </h3>
                  <p>
                    <span className="font-medium">Won</span>{" "}
                    <span className="text-[#A967FF] text-[1.25rem] font-bold">
                      {winningAmount} Coins
                    </span>
                  </p>
                  <p className="font-medium">Order ID: {transID}</p>
                  <p className="text-[#858585]">
                    {/* Announced on: 08:40 PM 18 December, 2023 */}
                    Announced on: {moment(createdAt).format("LLL")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>)}
    </section>
  );
}
