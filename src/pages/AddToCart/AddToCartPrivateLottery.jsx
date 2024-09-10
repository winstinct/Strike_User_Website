import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetPrivateLotteriesQuery, useGetSinglePrivateLotteryQuery } from "../../redux/features/lottery/lotteryApi";
import Countdown from "react-countdown";
import {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../../redux/features/wishlist/wishlistApi";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { useAddItemToCartMutation } from "../../redux/features/cart/cartApi";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";

export default function AddToCartPrivateLottery() {
  window.scrollTo({behavior:'smooth', top:0})
  const navigate = useNavigate();
  const { uniqueId } = useParams();
  const { data } = useGetSinglePrivateLotteryQuery(uniqueId);
  const {
    lottaryImage,
    Name,
    ticketPrice,
    winnerSlot,
    expieryDate,
    Totaltickets,
    UniqueID,
    winneramount,
    lottaryType,
    termsandcondi,
    whitelist,
    _id
  } = data?.response?.privateLottery || {};

  const [addToWishlistApi, { isLoading: isLoadingAddWishlist }] =
    useAddToWishlistMutation();

  const handleAddToWishlist = async (uniqueId) => {
    try {
      const res = await addToWishlistApi(uniqueId);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Added to wishlist successfully.", {autoClose:2000});
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  const [removeFromWishlistApi, { isLoading: isLoadingRemoveFromWishlist }] =
    useRemoveFromWishlistMutation();

  const handleRemoveFromWishlist = async (uniqueId) => {
    try {
      const res = await removeFromWishlistApi(uniqueId);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Removed from wishlist successfully.", {autoClose:2000});
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  const [addItemToCartApi, { isLoading: isLoadingAddToCart }] =
    useAddItemToCartMutation();
  const handleAddItemToCart = async () => {
    try {
      const res = await addItemToCartApi({
        UniqueID,
        price: ticketPrice,
        quantity: 1,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Added to cart successfully.", {autoClose:2000});
        navigate(`/cartQuantityAdjuster/${UniqueID}`)
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };
  return (
    <section>
      <div onClick={() => navigate(-1)} className="backBtn mb-[2rem]">
        <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
      </div>
      <div>
        <img
          className="h-[250px] min-w-[100%] rounded-lg"
          src={lottaryImage}
          alt=""
        />
      </div>

      <div className="flex justify-between items-center mt-[3rem] mb-[1rem]">
        <h3 className="text-[2rem] font-bold">{Name}</h3>
        <div>
          {(isLoadingAddWishlist || isLoadingRemoveFromWishlist) && (
            <ThreeDots
              visible={true}
              height="30"
              width="30"
              align="center"
              color="#5500C3"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperClass=""
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                padding: "10px", // Example padding
              }}
            />
          )}

          {whitelist?.length == 0 &&
            !isLoadingAddWishlist &&
            !isLoadingRemoveFromWishlist && (
              <button
                onClick={() => handleAddToWishlist(UniqueID)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M7.41787 23.1802L19.0056 34.0656C19.4047 34.4406 19.6043 34.628 19.8396 34.6742C19.9456 34.695 20.0546 34.695 20.1606 34.6742C20.3959 34.628 20.5954 34.4406 20.9946 34.0656L32.5823 23.1802C35.8426 20.1175 36.2385 15.0775 33.4964 11.5433L32.9808 10.8787C29.7005 6.65081 23.1161 7.35986 20.8112 12.1893C20.4856 12.8714 19.5146 12.8714 19.189 12.1893C16.884 7.35986 10.2996 6.65081 7.01932 10.8787L6.50373 11.5433C3.76166 15.0775 4.15757 20.1175 7.41787 23.1802Z"
                    stroke="black"
                    stroke-width="3.75"
                  />
                </svg>
              </button>
            )}

          {whitelist?.length > 0 &&
            !isLoadingAddWishlist &&
            !isLoadingRemoveFromWishlist && (
              <button
                onClick={() => handleRemoveFromWishlist(UniqueID)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="#FF0023"
                >
                  <path
                    d="M7.41787 23.1802L19.0056 34.0656C19.4047 34.4406 19.6043 34.628 19.8396 34.6742C19.9456 34.695 20.0546 34.695 20.1606 34.6742C20.3959 34.628 20.5954 34.4406 20.9946 34.0656L32.5823 23.1802C35.8426 20.1175 36.2385 15.0775 33.4964 11.5433L32.9808 10.8787C29.7005 6.65081 23.1161 7.35986 20.8112 12.1893C20.4856 12.8714 19.5146 12.8714 19.189 12.1893C16.884 7.35986 10.2996 6.65081 7.01932 10.8787L6.50373 11.5433C3.76166 15.0775 4.15757 20.1175 7.41787 23.1802Z"
                    stroke="#FF0023"
                    stroke-width="3.75"
                  />
                </svg>
              </button>
            )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          className="rounded-2xl"
        >
          <div className="pt-[1rem] flex items-center justify-center gap-1">
            <span className="font-semibold">Deal ends in:</span>{" "}
            {expieryDate && (<Countdown
              date={new Date(expieryDate).getTime()}
              zeroPadTime={false}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="text-[1.25rem] text-[#E0170B] font-bold italic flex gap-1">
                  <span>{days}d</span>
                  <span>{hours}h</span>
                  <span>{minutes}m</span>
                  <span>{seconds}s</span>
                </div>
              )}
            />)}
          </div>

          <div className="p-[0.8rem]">
            <div className="space-y-[1rem]">
              <div className="flex justify-between items-center text-[#858585]">
                <p className="text-[#212529] font-bold px-4">Total</p>
                <p className="text-[#212529] font-bold italic px-4">{ticketPrice}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1 my-[1rem]">
              <div className="bg-gray-500 w-[10px] h-[10px] flex justify-center items-center rounded-full text-white">
                <Icon className="text-[2rem]" icon="bi:exclamation" />
              </div>
              <p className="text-[10px] text-gray-600">
                The lottery end time will be extended if unsold.
              </p>
            </div>

            {isLoadingAddToCart ? (
              <SubmitBtnLoader />
            ) : (
              <button
                onClick={handleAddItemToCart}
                className="submitBtn w-full"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-2 rounded-2xl font-semibold space-y-[1rem]">
            <div className="text-center">
              <span className="text-[#FF2222] text-[1.5rem] font-bold">
                {winnerSlot}{" "}
              </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span className="text-[1.5rem] font-bold"> {Totaltickets}</span>
            </div>
            <Progress
              className="mt-[3px]"
              size="sm"
              color="red"
              value={winnerSlot}
            />
          </div>

          <div>
            <div className="font-bold bg-[#FF0023] text-white text-[1.25rem] flex justify-between items-center rounded-2xl p-[1.5rem]">
              <p>Prize Details:</p>
              <p>IND {winneramount}</p>
            </div>

            <div className="flex justify-center items-center gap-5 text-[2rem] mt-[1rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <rect x="0.5" width="48" height="48" rx="24" fill="black" />
                <path
                  d="M26.4707 22.1571L35.2086 12H33.138L25.5508 20.8193L19.491 12H12.5017L21.6654 25.3364L12.5017 35.9877H14.5724L22.5847 26.6742L28.9843 35.9877H35.9736L26.4702 22.1571H26.4707ZM23.6345 25.4538L22.7061 24.1258L15.3185 13.5588H18.4991L24.4609 22.0867L25.3893 23.4147L33.139 34.4998H29.9585L23.6345 25.4544V25.4538Z"
                  fill="white"
                />
              </svg>
              {/* whatsapp svg */}
              <div className="bg-[#1FAF38] rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M1.00817 11.8563C1.00761 13.8728 1.53449 15.8417 2.53635 17.5771L0.912354 23.5066L6.98045 21.9156C8.6588 22.8292 10.5393 23.308 12.4502 23.3081H12.4552C18.7636 23.3081 23.8988 18.1748 23.9015 11.8653C23.9027 8.80792 22.7131 5.93295 20.5518 3.76997C18.3909 1.60718 15.5169 0.415458 12.4548 0.414062C6.14566 0.414062 1.01087 5.54709 1.00826 11.8563"
                    fill="#1FAF38"
                  />
                  <path
                    d="M0.599779 11.8527C0.599128 13.9417 1.1449 15.981 2.18248 17.7786L0.500244 23.9207L6.78592 22.2726C8.51783 23.2168 10.4678 23.7147 12.452 23.7154H12.4571C18.9918 23.7154 24.3114 18.3975 24.3142 11.8621C24.3153 8.69488 23.0829 5.71656 20.8444 3.47609C18.6056 1.23591 15.6289 0.00130233 12.4571 0C5.92127 0 0.602384 5.31721 0.599779 11.8527ZM4.34313 17.469L4.10843 17.0965C3.12183 15.5277 2.60108 13.7149 2.60183 11.8534C2.60387 6.4213 7.02471 2.00186 12.4608 2.00186C15.0934 2.00298 17.5674 3.02921 19.4282 4.89116C21.289 6.7533 22.3129 9.22865 22.3122 11.8614C22.3098 17.2935 17.8889 21.7135 12.4571 21.7135H12.4532C10.6845 21.7126 8.94992 21.2376 7.43717 20.34L7.07717 20.1265L3.34713 21.1045L4.34313 17.469Z"
                    fill="#E4E4E4"
                  />
                  <path
                    d="M9.49328 6.89771C9.27133 6.4044 9.03774 6.39445 8.82668 6.3858C8.65384 6.37836 8.45626 6.37892 8.25886 6.37892C8.06128 6.37892 7.74026 6.45324 7.46891 6.74952C7.19728 7.04608 6.43188 7.76273 6.43188 9.22031C6.43188 10.678 7.49356 12.0866 7.64156 12.2845C7.78975 12.482 9.69114 15.5689 12.7025 16.7564C15.2052 17.7433 15.7145 17.547 16.2577 17.4975C16.8009 17.4482 18.0106 16.7811 18.2574 16.0892C18.5043 15.3975 18.5043 14.8046 18.4303 14.6807C18.3563 14.5572 18.1587 14.4831 17.8624 14.335C17.566 14.1868 16.1095 13.4701 15.8379 13.3712C15.5663 13.2724 15.3688 13.2231 15.1712 13.5198C14.9737 13.8159 14.4063 14.4831 14.2334 14.6807C14.0606 14.8787 13.8877 14.9034 13.5915 14.7552C13.295 14.6065 12.3409 14.2941 11.2089 13.2849C10.3282 12.4996 9.73356 11.5298 9.56072 11.2331C9.38788 10.937 9.54221 10.7764 9.69077 10.6288C9.82388 10.496 9.98714 10.2828 10.1354 10.1099C10.2831 9.93687 10.3324 9.81343 10.4312 9.61585C10.5301 9.41808 10.4806 9.24506 10.4067 9.09687C10.3324 8.94868 9.75672 7.48347 9.49328 6.89771Z"
                    fill="white"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <rect x="0.5" width="48" height="48" rx="24" fill="#1877F2" />
                <path
                  d="M29.093 24.7812L29.625 21.3125H26.2969V19.0616C26.2969 18.1124 26.7618 17.1875 28.2525 17.1875H29.7656V14.2344C29.7656 14.2344 28.3924 14 27.0794 14C24.3384 14 22.5469 15.6613 22.5469 18.6688V21.3125H19.5V24.7812H22.5469V33.1667C23.1671 33.2639 23.794 33.3127 24.4219 33.3125C25.0497 33.3127 25.6766 33.2639 26.2969 33.1667V24.7812H29.093Z"
                  fill="white"
                />
              </svg>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                >
                  <circle cx="4.5" cy="4" r="4" fill="#858585" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                >
                  <circle cx="4.5" cy="4" r="4" fill="#858585" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                >
                  <circle cx="4.5" cy="4" r="4" fill="#858585" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <div className="text-[1.25rem] flex justify-between items-center border-t-[1px] border-gray-300 py-[1rem]">
          <p className="text-[#858585] font-medium">Invited by</p>
          <p className="text-[#FF0023] font-bold">Admin</p>
        </div>
        <div className="text-[1.25rem] flex justify-between items-center border-t-[1px] border-b-[1px] border-gray-300 py-[1rem]">
          <p className="text-[#858585] font-medium">Type</p>
          <p className="text-[#FF0023] font-bold">{lottaryType}</p>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h3 className="text-[1.5rem] font-bold underline mb-[1rem]">
          Terms & Conditions
        </h3>
        {/* <div className="list-disc list-inside space-y-[1rem]">
          <div className="flex gap-2">
            <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
            <p>
              Enter and stand a chance to win 13,000 Tether as prize. Don’t miss
              the chance and grab your ticket to enter the lottery today!
            </p>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
            <p>
              Enter and stand a chance to win 13,000 Tether as prize. Don’t miss
              the chance and grab your ticket to enter the lottery today!
            </p>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
            <p>
              Enter and stand a chance to win 13,000 Tether as prize. Don’t miss
              the chance and grab your ticket to enter the lottery today!
            </p>
          </div>
        </div> */}
        <p>{termsandcondi}</p>
      </div>
    </section>
  );
}
