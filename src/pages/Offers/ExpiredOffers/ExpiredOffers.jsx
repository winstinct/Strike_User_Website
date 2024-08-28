import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function ExpiredOffers() {
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
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">
            Expired Offers
          </h3>
          <p>*Offers expired recently</p>
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
          <div
            style={{ backgroundImage: "linear-gradient(#FF0000, #AD0000)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <div className="flex items-center gap-1">
                <div>
                  <span>Code:</span>{" "}
                  <span className="font-bold">BUYONEGETONE</span>
                </div>
                <Icon
                  className="text-[1.5rem] cursor-pointer"
                  icon="bitcoin-icons:copy-outline"
                />
              </div>

              <button className="flex items-center mt-[2rem] justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]">
                Expired
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#FF0000, #AD0000)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <div className="flex items-center gap-1">
                <div>
                  <span>Code:</span>{" "}
                  <span className="font-bold">BUYONEGETONE</span>
                </div>
                <Icon
                  className="text-[1.5rem] cursor-pointer"
                  icon="bitcoin-icons:copy-outline"
                />
              </div>

              <button className="flex items-center mt-[2rem] justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]">
                Expired
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#FF0000, #AD0000)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <div className="flex items-center gap-1">
                <div>
                  <span>Code:</span>{" "}
                  <span className="font-bold">BUYONEGETONE</span>
                </div>
                <Icon
                  className="text-[1.5rem] cursor-pointer"
                  icon="bitcoin-icons:copy-outline"
                />
              </div>

              <button className="flex items-center mt-[2rem] justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]">
                Expired
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#FF0000, #AD0000)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <div className="flex items-center gap-1">
                <div>
                  <span>Code:</span>{" "}
                  <span className="font-bold">BUYONEGETONE</span>
                </div>
                <Icon
                  className="text-[1.5rem] cursor-pointer"
                  icon="bitcoin-icons:copy-outline"
                />
              </div>

              <button className="flex items-center mt-[2rem] justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]">
                Expired
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#FF0000, #AD0000)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <div className="flex items-center gap-1">
                <div>
                  <span>Code:</span>{" "}
                  <span className="font-bold">BUYONEGETONE</span>
                </div>
                <Icon
                  className="text-[1.5rem] cursor-pointer"
                  icon="bitcoin-icons:copy-outline"
                />
              </div>

              <button className="flex items-center mt-[2rem] justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]">
                Expired
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
