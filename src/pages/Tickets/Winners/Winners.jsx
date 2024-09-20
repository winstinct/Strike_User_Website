import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import wonLotteryTexure from "../../../assets/won-lottery-texure.png";
import "swiper/css";
import { useGetUserWinningsQuery } from "../../../redux/features/lottery/lotteryApi";
import moment from "moment";
import WinningSkeleton from "./WinningSkeleton";
import DisplayNetworkError from "../../../components/DisplayNetworkError";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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

  const { data, isLoading, isError } = useGetUserWinningsQuery();

  //decide what to render
  let content = "";

  if (isLoading && !isError) {
    content = <WinningSkeleton />;
  }

  if (!isLoading && isError) {
    content = <DisplayNetworkError />;
  }

  if (!isLoading && !isError && data.length == 0) {
    content = (
      <p className="text-[1.5rem] text-center py-4">
        No winnings are available!
      </p>
    );
  }

  // if (!isLoading && !isError && data.length > 0) {

  // }

  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[2.5rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
           {t("won lottery")}
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

      {data?.response?.fetchWinnerss == 0 && (
        <h3 className="text-gray-500 text-center text-[1.3rem] py-5">
          No winnings are available!
        </h3>
      )}

      {content ? (
        content
      ) : (
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          {...swiperConfig}
          className="w-full"
        >
          {data?.response?.fetchWinnerss?.map(
            ({
              UserData: { FirstName, LastName } = {},
              lottaryId: { Currency, LottarySerial, winneramount } = {},
              updatedAt,
              _id,
            }) => (
              <SwiperSlide key={_id}>
                <div
                  style={{
                    backgroundImage: `url(${wonLotteryTexure})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 55%",
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
                    <h3 className="text-[1.25rem] italic font-bold">
                      <span>{FirstName}</span>
                      <span className="ml-1">{LastName}</span>
                    </h3>
                    <div>
                      <p className="font-medium text-[1rem]">
                        <span>Order ID:</span> <span>{LottarySerial}</span>
                      </p>
                      <p className="text-[#858585] text-[12px]">
                        Announced on: {moment(updatedAt).format("LLL")}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-[1rem]">WON:</p>
                      <p className="text-[1.5rem] text-[#5500C3] font-bold italic">
                        <span>{Currency}</span>
                        <span>{winneramount}</span>
                      </p>
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
