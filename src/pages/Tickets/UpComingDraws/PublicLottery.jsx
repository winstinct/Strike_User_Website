import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetTicketHistoryQuery } from "../../../redux/features/lottery/lotteryApi";
import Countdown from "react-countdown";
import moment from "moment/moment";
import PublicTicketSkeleton from "./PublicTicketSkeleton";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function PublicLottery() {
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

  const { data, isLoading } = useGetTicketHistoryQuery();
  console.log("Upcoming draws =============> ", data?.response)
  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[1rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
            Public Lottery
          </h3>
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

      {
        isLoading ? <PublicTicketSkeleton/> : (<Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          {...swiperConfig}
          className="w-full"
        >
          {data?.response?.TicketHistory?.length  && [...data?.response?.TicketHistory]?.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(
            ({
              _id,
              OrderValue,
              lotteryToken,
              createdAt,
              LottaryDetails: {
                expieryDate,
                Currency,
              },
            }) => (
              <SwiperSlide key={_id}>
                <div>
                  <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
                    <h3 className="mb-3">Public Lottery</h3>
                  </div>
  
                  <div className="flex justify-center public-lotter items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
                    <div className="middle1"></div>
                    <div className="middle2"></div>
                    <div className="space-y-[0.5rem]">
                      <div className="space-y-[0.5rem] ml-5">
                        <p className="font-bold italic">
                          <span className="text-[#A967FF]">WIN:</span>{" "}
                          <span>
                            {Currency}
                            {OrderValue} Cash
                          </span>
                        </p>
                        <div className="font-semibold text-[14px] gap-1">
                          Purchased on: {moment(createdAt).format("DD-MM-YYYY")}
                        </div>
                        <p className="font-medium text-[14px]">
                          <span>Order ID:</span> <span>{lotteryToken}</span>
                        </p>
                      </div>
  
                      <div
                        className="bg-white px-3 py-1 rounded-lg ml-5"
                        style={{
                          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                        }}
                      >
                        <span className="font-semibold">
                          Winner Announced in:
                        </span>
                        <Countdown
                          date={new Date(expieryDate).getTime()}
                          zeroPadTime={false}
                          renderer={({ days, hours, minutes, seconds }) => (
                            <div className="text-[#A967FF] text-[1.2rem] space-x-2 font-bold italic">
                              <span>{days}d</span>
                              <span>{hours}h</span>
                              <span>{minutes}m</span>
                              <span>{seconds}s</span>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>)
      }
    </section>
  );
}
