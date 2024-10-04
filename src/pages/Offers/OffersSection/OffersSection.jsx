import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OfferDetailsModal } from "./OfferDetailsModal";
import CopyCode from "./CopyCode";
import { useGetOffersQuery } from "../../../redux/features/lottery/lotteryApi";
import ValidOfferSkeleton from "./ValidOfferSkeleton";
import CountDownTimer from "../../../shared/CountDownTimer/CountDownTimer";
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

export default function OffersSection() {
  const {t} = useTranslation();
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

  const { data, isLoading } = useGetOffersQuery();
  const activeOffers = data?.response?.offer?.filter(
    ({ ExpieryDate }) => new Date(ExpieryDate).getTime() >= new Date().getTime()
  );

  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[2rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
            {t("offers")}
          </h3>
          <p>*{t('available offers')}</p>
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
        activeOffers?.length == 0 && <h3 className="text-gray-500 text-center text-[1.3rem] py-5">No offers are available!</h3>
      }

      {isLoading ? (
        <ValidOfferSkeleton />
      ) : (
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          {...swiperConfig}
          className="w-full m-3"
        >
          {activeOffers?.map(({ ExpieryDate, coupon_code, title, _id }) => (
            <SwiperSlide key={_id}>
              <div
                style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
                className="p-[1rem] text-white rounded-[20px] bg-white"
              >
                <div>
                  <p>Hurry up!</p>
                  <h3 className="font-bold text-[2rem] italic">{title}</h3>
                  <CopyCode code={coupon_code} />
                  <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                    <div className="py-[0.5rem] flex flex-col items-center">
                      <span className="font-semibold text-[1.25rem]">
                        Offer ends in:
                      </span>
                      <div className="text-[1.5rem]">
                        <CountDownTimer expieryDate={ExpieryDate} />
                      </div>
                    </div>
                    <OfferDetailsModal offerId={_id} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
