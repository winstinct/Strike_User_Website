import { Icon } from "@iconify/react/dist/iconify.js";
import popularLotteryImg from "../../assets/popular-lottery.jpeg";
import lotteryImg from "../../assets/lottery.png";
import { Progress } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import { Link } from "react-router-dom";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
};

export default function PublicLotteries() {
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
    <section className="ml-56 mr-[1rem]">
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 items-center justify-between mb-[0.5rem] mr-56">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">
          Public Lottery
          </h3>
          <p>*Public lotteries are visible to all persons</p>
        </div>
        <div className="flex gap-5 text-[2rem]">
        <button
          className={`border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 ${isBeginning ? 'hover:bg-gray-300 hover:border-gray-300' : ''}`}
          onClick={handlePrev}
          disabled={isBeginning}
          >
          <Icon icon="iconamoon:arrow-left-2-thin" />
          </button>
          <button
          className={`border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200 ${isEnd ? 'hover:bg-gray-300 hover:border-gray-300' : ''}`}
          onClick={handleNext}
          disabled={isEnd}
          >
          <Icon icon="iconamoon:arrow-right-2-thin"/>
          </button>
        </div>
      </header>
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
                className="h-[100px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={popularLotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={popularLotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={popularLotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={popularLotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={lotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
        <SwiperSlide>
          <div
            className="p-[0.6rem] rounded-xl m-1"
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <header>
              <img
                className="h-[100px] w-full rounded-xl"
                src={popularLotteryImg}
                alt=""
              />
            </header>
            <footer className="space-y-[0.5rem] mt-[0.3rem]">
              <h3 className="text-[1.20rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between text-[14px]">
                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>

                <div
                  style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
                  className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
                >
                  <div>
                    <span className="text-[#FF2222]">150 </span>
                    <span className="text-gray-700">SOLD OUT OF</span>
                    <span> 300</span>
                  </div>
                  <Progress
                    className="mt-[3px]"
                    size="sm"
                    color="red"
                    value={50}
                  />
                </div>
              </div>

              <div
                className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] h-[105px]"
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="absolute top-0 py-[0.1rem] px-1">
                  <div className="font-bold">
                    <span>Deal ends in:</span>{" "}
                    <span className="text-red-500">00:18:03:10</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                      <Icon className="text-[2rem]" icon="bi:exclamation" />
                    </div>
                    <span className="text-[#858585] text-[12px]">
                      The lottery end time will be extended if unsold.
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
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
