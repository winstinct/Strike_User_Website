import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
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
  return (
    <section className="mr-[1.3rem]">
      <header className="mr-56 flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">
            Public Lottery
          </h3>
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
          <div>
            <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
              <h3 className="mb-3">Better Luck Next Time</h3>
            </div>

            <div className="flex justify-center items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
              <div className="middle1"></div>
              <div className="middle2"></div>
              <div className="text-center space-y-[0.5rem]">
                <p className="font-bold">Winner Details</p>
                <div className="flex justify-center items-center gap-1">
                  <h3 className="text-[1.3rem] font-bold">Putta Manikanta</h3>
                  <span className="font-medium">Won</span>
                  <span className="text-[#A967FF] text-[1.3rem] font-bold">
                    200 Coins
                  </span>
                </div>
                <p className="font-medium">Order ID: #8192739182</p>
                <p className="text-[#858585]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
              <h3 className="mb-3">Better Luck Next Time</h3>
            </div>

            <div className="flex justify-center items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
              <div className="middle1"></div>
              <div className="middle2"></div>
              <div className="text-center space-y-[0.5rem]">
                <p className="font-bold">Winner Details</p>
                <div className="flex justify-center items-center gap-1">
                  <h3 className="text-[1.3rem] font-bold">Putta Manikanta</h3>
                  <span className="font-medium">Won</span>
                  <span className="text-[#A967FF] text-[1.3rem] font-bold">
                    200 Coins
                  </span>
                </div>
                <p className="font-medium">Order ID: #8192739182</p>
                <p className="text-[#858585]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
              <h3 className="mb-3">Better Luck Next Time</h3>
            </div>

            <div className="flex justify-center items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
              <div className="middle1"></div>
              <div className="middle2"></div>
              <div className="text-center space-y-[0.5rem]">
                <p className="font-bold">Winner Details</p>
                <div className="flex justify-center items-center gap-1">
                  <h3 className="text-[1.3rem] font-bold">Putta Manikanta</h3>
                  <span className="font-medium">Won</span>
                  <span className="text-[#A967FF] text-[1.3rem] font-bold">
                    200 Coins
                  </span>
                </div>
                <p className="font-medium">Order ID: #8192739182</p>
                <p className="text-[#858585]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
              <h3 className="mb-3">Better Luck Next Time</h3>
            </div>

            <div className="flex justify-center items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
              <div className="middle1"></div>
              <div className="middle2"></div>
              <div className="text-center space-y-[0.5rem]">
                <p className="font-bold">Winner Details</p>
                <div className="flex justify-center items-center gap-1">
                  <h3 className="text-[1.3rem] font-bold">Putta Manikanta</h3>
                  <span className="font-medium">Won</span>
                  <span className="text-[#A967FF] text-[1.3rem] font-bold">
                    200 Coins
                  </span>
                </div>
                <p className="font-medium">Order ID: #8192739182</p>
                <p className="text-[#858585]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#A967FF] p-2 rounded-t-2xl relative bottom-[-1rem] text-center text-white font-bold text-[1.25rem] border-[4px] border-[#A967FF]">
              <h3 className="mb-3">Better Luck Next Time</h3>
            </div>

            <div className="flex justify-center items-center py-[1.5rem] px-[1rem] border-[4px] border-[#A967FF] rounded-2xl bg-white relative min-h-[200px]">
              <div className="middle1"></div>
              <div className="middle2"></div>
              <div className="text-center space-y-[0.5rem]">
                <p className="font-bold">Winner Details</p>
                <div className="flex justify-center items-center gap-1">
                  <h3 className="text-[1.3rem] font-bold">Putta Manikanta</h3>
                  <span className="font-medium">Won</span>
                  <span className="text-[#A967FF] text-[1.3rem] font-bold">
                    200 Coins
                  </span>
                </div>
                <p className="font-medium">Order ID: #8192739182</p>
                <p className="text-[#858585]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
