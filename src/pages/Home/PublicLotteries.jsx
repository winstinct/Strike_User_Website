import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPublicLotteriesQuery } from "../../redux/features/lottery/lotteryApi";
import {
  useAddToWishlistMutation,
  useGetWishlistQuery,
} from "../../redux/features/wishlist/wishlistApi";
import { toast } from "react-toastify";
import PublicLotterySkeleton from "./PublicLotterySkeleton";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import CountDownTimer from "../../shared/CountDownTimer/CountDownTimer";
import { ShareSocial } from "react-share-social";
import ReactSlider from "react-slider";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ShareSocialModal = ({ url }) => {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  return (
    <>
      <Dialog open={size === "sm"} size={size || "sm"} handler={handleOpen}>
        <DialogHeader></DialogHeader>
        <DialogBody>
          <ShareSocial
            url={`${window.location}${url}`}
            socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
          />
        </DialogBody>
        <DialogFooter onClick={() => handleOpen(null)}>
          <button className="bg-gray-600 text-white rounded-lg px-5 py-2">
            Close
          </button>
        </DialogFooter>
      </Dialog>

      <button
        onClick={() => handleOpen("sm")}
        className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"
      >
        <Icon className="text-[1rem]" icon="lucide:share" />
        Share
      </button>
    </>
  );
};

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
};

export default function PublicLotteries() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);

  const { convertedAmount, currencyCode } = useSelector(
    (state) => state.convertedCoin
  );

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

  // RTK Query Hooks
  const { data, isLoading } = useGetPublicLotteriesQuery();
  const activeLotteris = data?.response?.Lottary?.filter(
    ({ expieryDate }) => new Date(expieryDate).getTime() >= new Date().getTime()
  ).filter((item) => {
    return (
      item?.lottaryPurchase?.length != item?.Totaltickets &&
      item?.lottaryPurchase?.length < item?.Totaltickets
    );
  });

  const [addToWishlistApi] = useAddToWishlistMutation();

  const handleAddToWishlist = async (uniqueId) => {
    try {
      const res = await addToWishlistApi(uniqueId);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Added to wishlist successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  const { data: wishListData } = useGetWishlistQuery();

  return (
    <section>
      <header className="flex md:flex-row flex-col md:gap-1 gap-3 md:items-center justify-between mb-[2rem]">
        <div>
          <h3 className="md:text-[2.5rem] text-[2rem] font-bold italic">
            {t("public lottery")}
          </h3>
          <p>*Public lotteries are visible to all persons</p>
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
      {activeLotteris?.length == 0 && (
        <h3 className="text-gray-500 text-center text-[1.3rem] py-5">
          No public lotteries are available!
        </h3>
      )}

      {isLoading && <PublicLotterySkeleton />}
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        {...swiperConfig}
        className="w-full m-3"
      >
        {activeLotteris?.map(
          ({
            _id,
            Name,
            lottaryImage,
            expieryDate,
            ticketPrice,
            winneramount,
            Totaltickets,
            UniqueID,
            lottaryPurchase,
          }) => (
            <SwiperSlide key={_id}>
              <div
                className="p-[0.6rem] rounded-xl m-1"
                style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <Link to={`/addToCart/${UniqueID}`}>
                  <div>
                    <header>
                      <img
                        className="h-[150px] w-full rounded-xl"
                        src={lottaryImage}
                        alt=""
                      />
                    </header>
                    <footer className="space-y-[0.5rem] mt-[1rem]">
                      <h3 className="text-[1.25rem] font-bold text-center">
                        {Name}
                      </h3>
                      <div className="flex flex-col gap-3 items-center justify-between text-[14px]">
                        <div className="text-center space-y-2">
                          <div>
                            Buy Credit for:
                            <span className="text-[#FF2222] font-bold">
                              {" "}
                              {currencyCode}{" "}
                              {convertedAmount &&
                                ticketPrice &&
                                (ticketPrice * convertedAmount).toFixed(2)}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#25BF17]">WIN:</span>{" "}
                            <span className="font-bold">
                              {winneramount} Coins
                            </span>
                          </div>
                        </div>

                        <div
                          style={{
                            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                          }}
                          className="border-[1px] border-[#d8d4d442] p-3 rounded-2xl font-semibold w-full mb-2 text-center"
                        >
                          <div className="space-x-2">
                            <span className="text-[#FF2222] text-[1rem] bold">
                              {lottaryPurchase?.length}{" "}
                            </span>
                            <span className="text-gray-700">SOLD OUT OF </span>
                            <span className="text-[1rem] bold">
                              {Totaltickets}
                            </span>
                          </div>
                          <ReactSlider
                            className="horizontal-slider mt-3"
                            trackClassName="example-track"
                            min={0}
                            max={Totaltickets}
                            value={lottaryPurchase?.length}
                          />
                        </div>
                      </div>

                      <div
                        className="text-center rounded-[20px]"
                        style={{
                          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
                        }}
                      >
                        <div className="pt-[1rem] flex items-center justify-center gap-1">
                          <span className="font-semibold">Deal ends in:</span>{" "}
                          <div className="text-[1.25rem] text-[#E0170B]">
                            <CountDownTimer expieryDate={expieryDate} />
                          </div>
                        </div>
                        <div className="text-[11px] text-[#858585] py-[0.8rem] flex items-center justify-center gap-1 flex-wrap">
                          <Icon icon="zondicons:exclamation-solid" />
                          <span>
                            The lottery end time will be extended if unsold.
                          </span>
                        </div>
                        <div className="">
                          <Link to={`/addToCart/${UniqueID}`}>
                            <button className="submitBtn w-full">
                              Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </footer>
                  </div>
                </Link>
                <div className="flex gap-3 text-[12px] font-semibold mt-[1rem]">
                  <ShareSocialModal url={`addToCart/${UniqueID}`} />

                  {currentUser && (
                    <button
                      onClick={() => handleAddToWishlist(UniqueID)}
                      className={`bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2 h-[40px] ${
                        wishListData?.response?.wishlistArray?.find(
                          (item) => item._id == _id
                        )
                          ? "text-red-500"
                          : ""
                      }`}
                      disabled={
                        wishListData?.response?.wishlistArray?.find(
                          (item) => item._id == _id
                        )
                          ? true
                          : false
                      }
                    >
                      <Icon
                        className="text-[1rem]"
                        icon="mdi:favourite-border"
                      />
                      {wishListData?.response?.wishlistArray?.find(
                        (item) => item._id == _id
                      )
                        ? "Saved"
                        : "Save"}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
}


