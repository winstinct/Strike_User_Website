import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import wonLotteryTexure from "../../../assets/won-lottery-texure.png";
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
  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic mb-[1rem]">
            Won Lottery
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
        className="w-full"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${wonLotteryTexure})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 65%",
            }}
            className="border-[3px] border-[#5500C3] rounded-[10px] pb-[1.5rem]"
          >
            <div className="bg-[#5500C3] italic h-[100px] text-[1.5rem] text-white font-bold flex justify-center items-center rounded-b-[100%] rounded-t-[10px] relative">
              <p>Congratulations!</p>
              <Icon
                className="text-[2.5rem] absolute bottom-[-1rem] border-[2px] border-[#11061d] rounded-full shadow-lg p-1 bg-white"
                icon="noto:trophy"
              />
            </div>

            <div className="text-center space-y-[1rem] mt-[2rem]">
              <h3 className="text-[1.25rem] italic font-bold italic">
                Putta Manikanta
              </h3>
              <div>
                <p className="font-medium text-[1rem]">
                  <span>Order ID:</span> <span>#8192739182</span>
                </p>
                <p className="text-[#858585] text-[12px]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
              <div>
                <p className="font-medium text-[1rem]">WON:</p>
                <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                  INR 10000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${wonLotteryTexure})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 65%",
            }}
            className="border-[3px] border-[#5500C3] rounded-[10px] pb-[1.5rem]"
          >
            <div className="bg-[#5500C3] italic h-[100px] text-[1.5rem] text-white font-bold flex justify-center items-center rounded-b-[100%] rounded-t-[10px] relative">
              <p>Congratulations!</p>
              <Icon
                className="text-[2.5rem] absolute bottom-[-1rem] border-[2px] border-[#11061d] rounded-full shadow-lg p-1 bg-white"
                icon="noto:trophy"
              />
            </div>

            <div className="text-center space-y-[1rem] mt-[2rem]">
              <h3 className="text-[1.25rem] italic font-bold italic">
                Putta Manikanta
              </h3>
              <div>
                <p className="font-medium text-[1rem]">
                  <span>Order ID:</span> <span>#8192739182</span>
                </p>
                <p className="text-[#858585] text-[12px]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
              <div>
                <p className="font-medium text-[1rem]">WON:</p>
                <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                  INR 10000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${wonLotteryTexure})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 65%",
            }}
            className="border-[3px] border-[#5500C3] rounded-[10px] pb-[1.5rem]"
          >
            <div className="bg-[#5500C3] italic h-[100px] text-[1.5rem] text-white font-bold flex justify-center items-center rounded-b-[100%] rounded-t-[10px] relative">
              <p>Congratulations!</p>
              <Icon
                className="text-[2.5rem] absolute bottom-[-1rem] border-[2px] border-[#11061d] rounded-full shadow-lg p-1 bg-white"
                icon="noto:trophy"
              />
            </div>

            <div className="text-center space-y-[1rem] mt-[2rem]">
              <h3 className="text-[1.25rem] italic font-bold italic">
                Putta Manikanta
              </h3>
              <div>
                <p className="font-medium text-[1rem]">
                  <span>Order ID:</span> <span>#8192739182</span>
                </p>
                <p className="text-[#858585] text-[12px]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
              <div>
                <p className="font-medium text-[1rem]">WON:</p>
                <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                  INR 10000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${wonLotteryTexure})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 65%",
            }}
            className="border-[3px] border-[#5500C3] rounded-[10px] pb-[1.5rem]"
          >
            <div className="bg-[#5500C3] italic h-[100px] text-[1.5rem] text-white font-bold flex justify-center items-center rounded-b-[100%] rounded-t-[10px] relative">
              <p>Congratulations!</p>
              <Icon
                className="text-[2.5rem] absolute bottom-[-1rem] border-[2px] border-[#11061d] rounded-full shadow-lg p-1 bg-white"
                icon="noto:trophy"
              />
            </div>

            <div className="text-center space-y-[1rem] mt-[2rem]">
              <h3 className="text-[1.25rem] italic font-bold italic">
                Putta Manikanta
              </h3>
              <div>
                <p className="font-medium text-[1rem]">
                  <span>Order ID:</span> <span>#8192739182</span>
                </p>
                <p className="text-[#858585] text-[12px]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
              <div>
                <p className="font-medium text-[1rem]">WON:</p>
                <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                  INR 10000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${wonLotteryTexure})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 65%",
            }}
            className="border-[3px] border-[#5500C3] rounded-[10px] pb-[1.5rem]"
          >
            <div className="bg-[#5500C3] italic h-[100px] text-[1.5rem] text-white font-bold flex justify-center items-center rounded-b-[100%] rounded-t-[10px] relative">
              <p>Congratulations!</p>
              <Icon
                className="text-[2.5rem] absolute bottom-[-1rem] border-[2px] border-[#11061d] rounded-full shadow-lg p-1 bg-white"
                icon="noto:trophy"
              />
            </div>

            <div className="text-center space-y-[1rem] mt-[2rem]">
              <h3 className="text-[1.25rem] italic font-bold italic">
                Putta Manikanta
              </h3>
              <div>
                <p className="font-medium text-[1rem]">
                  <span>Order ID:</span> <span>#8192739182</span>
                </p>
                <p className="text-[#858585] text-[12px]">
                  Announced on: 08:40 PM 18 December, 2023
                </p>
              </div>
              <div>
                <p className="font-medium text-[1rem]">WON:</p>
                <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                  INR 10000
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
