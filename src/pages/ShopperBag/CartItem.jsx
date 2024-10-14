import { Icon } from "@iconify/react/dist/iconify.js";
import { useRemoveItemFromCartMutation, useUpdateCartItemQuantityMutation } from "../../redux/features/cart/cartApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function CartItem({ item }) {
  const { lotteryId, quantity } = item || {};
  const navigate = useNavigate()

  const [removeItemFromCartApi] =
  useRemoveItemFromCartMutation();

  const [updateCartItemQuantityApi, { isLoading }] =
    useUpdateCartItemQuantityMutation();
 
  const handleIncrease = async () => {
    try {
      const res = await updateCartItemQuantityApi({
        quantity: { quantity: quantity + 1 },
        lotteryId: lotteryId?._id,
        cartId: item?._id,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Increased successfully.", { autoClose: 1000 });
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  const handleDecrease = async () => {
    try {
      const res = await updateCartItemQuantityApi({
        quantity: { quantity: quantity - 1 },
        lotteryId: lotteryId?._id,
        cartId: item?._id,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        if(res?.data?.response?.cart?.quantity == 0){
            await removeItemFromCartApi(res?.data?.response?.cart?._id)
            navigate(`/addToCart/${lotteryId?.UniqueID}`)
        }
        toast.success("Decreased successfully.", { autoClose: 1000 });
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };
  return (
    <div className="border-b-[1px] border-gray-300 pb-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <img
          className="rounded-[10px] h-full"
          src={lotteryId?.lottaryImage}
          alt="Gift Card Image"
        />
        <div className="space-y-[1rem]">
          <h3 className="font-semibold">
            <span className="text-[#25BF17]">WIN: </span>
            <span>INR {lotteryId?.winneramount} Cash</span>
          </h3>

          <div className="flex items-center gap-5">
            <div className="w-[3rem] h-[1.5rem] flex items-center justify-end">
              <button
                onClick={() => handleDecrease(lotteryId?.UniqueID)}
                className="text-white text-[1rem] bg-[#EF473A] w-[1rem] h-[1rem] rounded-full pr-1"
                disabled={isLoading}
              >
                <Icon icon="ic:baseline-minus" />
              </button>
            </div>

            <p className="font-bold">{quantity}</p>

            <div className="w-[3rem] h-[1.5rem] flex items-center justify-start">
              <button
                onClick={() => handleIncrease(lotteryId?.UniqueID)}
                className="text-white text-[1rem] bg-[#A8E063] w-[1rem] h-[1rem] rounded-full"
                disabled={isLoading}
              >
                <Icon icon="ic:baseline-plus" />
              </button>
            </div>
          </div>
          <p className="text-[1.25rem] font-bold">
            INR {lotteryId?.ticketPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item:PropTypes.object
}
