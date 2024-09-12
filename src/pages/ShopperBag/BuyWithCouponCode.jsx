import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import {
  useCheckoutWithCouponCodeMutation,
  useGetAllCartItemsQuery,
} from "../../redux/features/cart/cartApi";
import CartItem from "./CartItem";
import ShopperBagEmpty from "./ShopperBagEmpty";
import DisplayNetworkError from "../../components/DisplayNetworkError";
import { toast } from "react-toastify";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";
import ShopperBagSkeleton from "./ShopperBagSkeleton";
import { useSelector } from "react-redux";
const getTotalCartItemsPrice = (items) => {
  return items?.reduce((total, item) => item?.totalAmount + total, 0);
};

export default function BuyWithCouponCode() {
  const navigate = useNavigate();
  const {coupon_code, totalDiscount} = useSelector(state => state.couponData);
  const { data, isLoading, isError } = useGetAllCartItemsQuery();
  const cartIdarray = data?.response?.cart?.map((item) => item?._id);

  const [checkoutWithCouponCodeApi, { isLoading: isLoadingCheckout }] =
    useCheckoutWithCouponCodeMutation();

  const handleBuyWithCoupon = async () => {
    try {
      const res = await checkoutWithCouponCodeApi({
        coupon_code,
        cartIdarray,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        navigate("/purchase-success");
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
          <div
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="rounded-2xl flex justify-between items-center p-3 gap-2 mb-5 text-[14px]"
          >
            <Icon
              className="text-[#13E700]"
              icon="teenyicons:tick-circle-solid"
            />
            <p>You saved ₹{totalDiscount} with “{coupon_code}”</p>
            <Icon
              onClick={()=>navigate("/shopper-bag")}
              className="text-red-500 font-bold text-[1rem] cursor-pointer"
              icon="gridicons:cross"
            />
          </div>

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

                <div className="flex justify-between items-center text-[#858585] font-bold">
                  <p className="text-[#212529]">Total</p>
                  <p className="text-[#212529] italic">
                    <span className="pr-1">INR</span>
                    {getTotalCartItemsPrice(data?.response?.cart)-totalDiscount}
                  </p>
                </div>
              </div>
              {isLoadingCheckout ? (
                <div className="mt-[1rem]">
                  <SubmitBtnLoader />
                </div>
              ) : (
                <button
                  onClick={handleBuyWithCoupon}
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
      {content}
    </div>
  );
}
