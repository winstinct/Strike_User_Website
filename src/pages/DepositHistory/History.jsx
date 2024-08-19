import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1080: {
      slidesPerView: 2,
    },
  },
};

export default function DepositHistory() {
  const navigate = useNavigate();
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
  return (
    <section className="mt-[2rem]">
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between">
        <div>
          <h3 className="text-[1.25rem] font-bold">History</h3>
        </div>
        <div className="flex gap-5 text-[2rem]">
          <button
            className={`border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 ${
              isBeginning ? "hover:bg-gray-300 hover:border-gray-300" : ""
            }`}
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <Icon icon="iconamoon:arrow-left-2-thin" />
          </button>
          <button
            className={`border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 ${
              isEnd ? "hover:bg-gray-300 hover:border-gray-300" : ""
            }`}
            onClick={handleNext}
            disabled={isEnd}
          >
            <Icon icon="iconamoon:arrow-right-2-thin" />
          </button>
        </div>
      </header>

      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        {...swiperConfig}
        className="w-full m-3"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="text-left space-y-[0.5rem] text-[14px]">
              <p className="font-medium text-[14px]">
                Ticket ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <div>
                <span>Status: </span>
                <span className="font-bold text-[#25BF17]">PROCESSED</span>
              </div>
              <div className="flex items-center gap-1">
                <p>Payment Proof:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p>Remarks:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View Remarks</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div>
                <p>
                  Date and Time:{" "}
                  <span className="font-bold">13 June, 2024 07:13 PM</span>
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
        <SwiperSlide>
          <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="text-left space-y-[0.5rem] text-[14px]">
              <p className="font-medium text-[14px]">
                Ticket ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <div>
                <span>Status: </span>
                <span className="font-bold text-[#25BF17]">PROCESSED</span>
              </div>
              <div className="flex items-center gap-1">
                <p>Payment Proof:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p>Remarks:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View Remarks</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div>
                <p>
                  Date and Time:{" "}
                  <span className="font-bold">13 June, 2024 07:13 PM</span>
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
        <SwiperSlide>
          <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="text-left space-y-[0.5rem] text-[14px]">
              <p className="font-medium text-[14px]">
                Ticket ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <div>
                <span>Status: </span>
                <span className="font-bold text-[#25BF17]">PROCESSED</span>
              </div>
              <div className="flex items-center gap-1">
                <p>Payment Proof:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p>Remarks:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View Remarks</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div>
                <p>
                  Date and Time:{" "}
                  <span className="font-bold">13 June, 2024 07:13 PM</span>
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
        <SwiperSlide>
          <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="text-left space-y-[0.5rem] text-[14px]">
              <p className="font-medium text-[14px]">
                Ticket ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <div>
                <span>Status: </span>
                <span className="font-bold text-[#25BF17]">PROCESSED</span>
              </div>
              <div className="flex items-center gap-1">
                <p>Payment Proof:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p>Remarks:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View Remarks</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div>
                <p>
                  Date and Time:{" "}
                  <span className="font-bold">13 June, 2024 07:13 PM</span>
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
        <SwiperSlide>
          <div className="flex justify-center items-center py-[1.5rem] px-[1rem] withdraw-history border-gray-400 rounded-2xl border-[1px] bg-white relative">
            <div className="middle1"></div>
            <div className="middle2"></div>
            <div className="text-left space-y-[0.5rem] text-[14px]">
              <p className="font-medium text-[14px]">
                Ticket ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <div>
                <span>Status: </span>
                <span className="font-bold text-[#25BF17]">PROCESSED</span>
              </div>
              <div className="flex items-center gap-1">
                <p>Payment Proof:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p>Remarks:</p>
                <div className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
                  <p>View Remarks</p>
                  <Icon className="text-[1.3rem]" icon="hugeicons:view" />
                </div>
              </div>
              <div>
                <p>
                  Date and Time:{" "}
                  <span className="font-bold">13 June, 2024 07:13 PM</span>
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
      </Swiper>
    </section>
  );
}
