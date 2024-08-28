import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
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

export default function WithdrawRequestsHistory() {
  const navigate = useNavigate();
  window.scrollTo({top:0, behavior:'smooth'})
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
    <section className="mr-[16.5rem]">
      {/* Back button  */}
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="md:text-[2rem] text-[1.25rem] font-semibold">Withdraw Request History</h3>
      </div>

      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">History</h3>
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
                Withdrawal ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <p>
                Coins Requested:{" "}
                <span className="text-[#5500C3] font-bold">1.11K</span>
              </p>
              <p>
                Status:{" "}
                <span className="text-[#25BF17] font-bold">APPROVED</span>
              </p>
              <div>
                <p>
                  Crypto Amount:{" "}
                  <span className="text-[#5500C3] font-bold">13.32</span>
                </p>
              </div>
              <div>
                Crypto Address: <span className="font-bold">fw</span>
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
                Withdrawal ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <p>
                Coins Requested:{" "}
                <span className="text-[#5500C3] font-bold">1.11K</span>
              </p>
              <p>
                Status:{" "}
                <span className="text-[#25BF17] font-bold">APPROVED</span>
              </p>
              <div>
                <p>
                  Crypto Amount:{" "}
                  <span className="text-[#5500C3] font-bold">13.32</span>
                </p>
              </div>
              <div>
                Crypto Address: <span className="font-bold">fw</span>
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
                Withdrawal ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <p>
                Coins Requested:{" "}
                <span className="text-[#5500C3] font-bold">1.11K</span>
              </p>
              <p>
                Status:{" "}
                <span className="text-[#25BF17] font-bold">APPROVED</span>
              </p>
              <div>
                <p>
                  Crypto Amount:{" "}
                  <span className="text-[#5500C3] font-bold">13.32</span>
                </p>
              </div>
              <div>
                Crypto Address: <span className="font-bold">fw</span>
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
                Withdrawal ID:{" "}
                <span className="font-bold">DJE455JKDKJ5KKKSDJ4444</span>
              </p>
              <p>
                Coins Requested:{" "}
                <span className="text-[#5500C3] font-bold">1.11K</span>
              </p>
              <p>
                Status:{" "}
                <span className="text-[#25BF17] font-bold">APPROVED</span>
              </p>
              <div>
                <p>
                  Crypto Amount:{" "}
                  <span className="text-[#5500C3] font-bold">13.32</span>
                </p>
              </div>
              <div>
                Crypto Address: <span className="font-bold">fw</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
