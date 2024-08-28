import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OfferDetailsModal } from "./OfferDetailsModal";
import CopyCode from "./CopyCode";

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
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold">Offers</h3>
          <p>*Available offers</p>
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
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        {...swiperConfig}
        className="w-full m-3"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="BUYONEGETONE"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="DEMOCODE1234"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="CODE454435AEC"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="CODE454435AEC"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="CODE454435AEC"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="CODE454435AEC"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
            className="p-[1rem] text-white rounded-[20px] bg-white"
          >
            <div>
              <p>Hurry up!</p>
              <h3 className="font-bold text-[2rem] italic">
                Buy ONE Get ONE
              </h3>
              <CopyCode code="CODE454435AEC"/>
              <div className="bg-red-500 rounded-[20px] text-center mt-[1.5rem]">
                <div className="py-[0.5rem]">
                  <span className="font-semibold text-[1.25rem]">
                    Offer ends in:
                  </span>{" "}
                  <span className="font-bold text-[1.5rem]">05:18:03:10</span>
                </div>
                <OfferDetailsModal />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}