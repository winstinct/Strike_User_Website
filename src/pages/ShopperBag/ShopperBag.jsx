import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import {
  useApplyCouponCodeMutation,
  useCheckoutCartItemsMutation,
  useGetAllCartItemsQuery,
} from "../../redux/features/cart/cartApi";
import CartItem from "./CartItem";
import ShopperBagEmpty from "./ShopperBagEmpty";
import ThreeDotsLoader from "../../components/ThreeDotsLoader";
import DisplayNetworkError from "../../components/DisplayNetworkError";
import { useState } from "react";
import { toast } from "react-toastify";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";
import ShopperBagSkeleton from "./ShopperBagSkeleton";
const getTotalCartItemsPrice = (items) => {
  return items?.reduce((total, item) => item?.totalAmount + total, 0);
};
export default function ShopperBag() {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const { data, isLoading, isError } = useGetAllCartItemsQuery();
  const cartItemsIdsArray = data?.response?.cart?.map((item) => item?._id);

  const [applyCouponCodeApi, { isLoading: isLoadingApplyCode }] =
    useApplyCouponCodeMutation();
  const [checkoutCartItemsApi, { isLoading: isLoadingCheckout }] =
    useCheckoutCartItemsMutation();

  const handleApplyCouponCode = async () => {
    if (!couponCode) {
      return setDisplayError(true);
    }

    try {
      const res = await applyCouponCodeApi({
        coupon_code: couponCode,
        ticketList: [],
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success(res?.data?.message, { autoClose: 5000 });
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  const handleCheckout = async () => {
    try {
      const res = await checkoutCartItemsApi({
        cartIdarray: cartItemsIdsArray,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        // toast.success(res?.data?.message, { autoClose: 5000 });
        toast.success(
          "Purchase successful! Order receipt has been sent to your email.",
          { autoClose: 5000 }
        );
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  // decide what to render
  let content = "";
  if (isLoading && !isError) {
    content = <ShopperBagSkeleton />;
  }

  if (!isLoading && isError) {
    content = <DisplayNetworkError />;
  }

  if (!isLoading && !isError && data?.response?.cart?.length == 0) {
    content = <ShopperBagEmpty />;
  }

  if (!isLoading && !isError && data?.response?.cart?.length > 0) {
    content = (
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          className="p-[1.5rem] rounded-[20px] space-y-[1rem]"
        >
          {data?.response?.cart?.map((item) => (
            <CartItem key={item?._id} item={item} />
          ))}
        </div>

        <div>
          <div className="mb-5">
            <div
              style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
              className="rounded-2xl flex justify-between items-center p-3 gap-2"
            >
              <input
                className="border-[1px] border-gray-300 rounded-lg p-2 outline-none w-full"
                type="text"
                onChange={(e) => setCouponCode(e.target.value)}
              />
              {isLoadingApplyCode ? (
                <div className="w-[130px] h-[40px]">
                  <SubmitBtnLoader />
                </div>
              ) : (
                <button
                  onClick={handleApplyCouponCode}
                  className="gradientBg text-white rounded-full w-[130px] h-[45px] flex justify-center items-center"
                >
                  Apply
                </button>
              )}
            </div>
            {displayError && !couponCode && (
              <p className="text-red-500 font-bold text-[14px] mt-1">
                Coupon code is required*
              </p>
            )}
          </div>

          {/* <div
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          className="rounded-2xl flex justify-between items-center p-3 mb-5"
        >
          <Icon className="text-[2rem] text-[#13E700]" icon="lets-icons:check-fill" />
          <p>You saved ₹100 with “STRIKE1234”</p>
          <Icon className="text-red-500 cursor-pointer" icon="maki:cross" />
        </div> */}

          <div
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="rounded-2xl"
          >
            <div className="p-[0.8rem]">
              <div className="space-y-[1rem]">
                <div className="flex justify-between items-center text-[#858585]">
                  <p>Sub Total</p>
                  <p>
                    <span className="pr-1">INR</span>
                    {getTotalCartItemsPrice(data?.response?.cart)}
                  </p>
                </div>
                {/* <div className="flex justify-between items-center text-[#858585]">
                <p>Tax</p>
                <p>AED500</p>
              </div> */}
                <div className="flex justify-between items-center text-[#858585] font-bold">
                  <p className="text-[#212529]">Total</p>
                  <p className="text-[#212529] italic">
                    <span className="pr-1">INR</span>
                    {getTotalCartItemsPrice(data?.response?.cart)}
                  </p>
                </div>
              </div>
              {isLoadingCheckout ? (
                <div className="mt-[1rem]">
                  <SubmitBtnLoader />
                </div>
              ) : (
                <button
                  onClick={handleCheckout}
                  className="submitBtn w-full mt-[1rem]"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <div onClick={() => navigate("/")} className="backBtn md:hidden block">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">Shopper Bag</h3>
      </div>
      <ShopperBagSkeleton/>
      {/* {content} */}

    </div>
  );
}
