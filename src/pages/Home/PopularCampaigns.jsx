import { Icon } from "@iconify/react/dist/iconify.js";
import lotteryImg from "../../assets/lottery.png";
import { Progress } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPrivateLotteriesQuery } from "../../redux/features/lottery/lotteryApi";
import ThreeDotsLoader from "../../components/ThreeDotsLoader";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function PopularCampaigns() {
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

  const {data, isLoading} = useGetPrivateLotteriesQuery();
  console.log("Private Lotteries===> ", data?.response?.lottery)

  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[2rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
            Popular Campaigns
          </h3>
          <p>*Private lotteries are visible to invited persons only</p>
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
      {isLoading && <ThreeDotsLoader/>}
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        {...swiperConfig}
        className="w-full m-3"
      >
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[150px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[1.5rem] mt-[1rem]">
              <h3 className="text-[1.25rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div className="space-y-[0.3rem]">
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222] font-bold"> INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span>{" "}
                    <span className="font-bold">10000 Coins</span>
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222] font-bold text-[1rem]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span className="font-bold text-[1rem]"> 300</span>
                  </div>
                  <Progress
                    className="mt-[8px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="text-center rounded-[20px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="pt-[1rem]"><span className="font-semibold">Deal ends in:</span> <span className="text-[1.25rem] text-[#E0170B] font-bold">00:18:03:10</span></div>
                <div className="text-[11px] text-[#858585] py-[0.8rem] flex items-center justify-center gap-1 flex-wrap">
                <Icon icon="zondicons:exclamation-solid" />
                  <span>The lottery end time will be extended if unsold.</span>
                  </div>
                <div className="">
                  <Link to={`/addToCart/lotteryId`}>
                    <button className="submitBtn w-full">Buy Now</button>
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 text-[12px] font-semibold">
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2">
                  <Icon className="text-[1rem]" icon="lucide:share" />
                  Share
                </button>
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2">
                  <Icon className="text-[1rem]" icon="mdi:favourite-border" />
                  Save
                </button>
              </div>
            </footer>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
