import { Progress } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useRemoveFromWishlistMutation } from "../../redux/features/wishlist/wishlistApi";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import PropTypes from 'prop-types';

export default function WishListItem({ lottery }) {
  const {
    Name,
    lottaryImage,
    ticketPrice,
    winneramount,
    winnerSlot,
    Totaltickets,
    UniqueID,
    expieryDate,
    lottaryPurchase
  } = lottery || {};
  const [removeFromWishlistApi, { isLoading }] =
    useRemoveFromWishlistMutation();
    console.log("Wishlist Item data===> ", lottery)

  const handleRemoveFromWishlist = async (uniqueId) => {
    try {
      const res = await removeFromWishlistApi(uniqueId);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Removed from wishlist successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };
  
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-5">
        <div className="grid xl:grid-cols-2 gap-3 flex-1 lg:min-w-[340px]">
          <img
            className="xl:h-full w-full h-[200px] rounded-3xl"
            src={lottaryImage}
            alt="Lottery Image"
          />
          <div className="flex flex-col justify-between space-y-[0.8rem]">
            <div className="space-y-[0.8rem]">
              <h3 className="text-[1.5rem] font-bold">{Name}</h3>
              <div>
                <span>Buy Credit for:</span>{" "}
                <span className="text-[#F22] text-[1.1rem] font-bold">
                  {ticketPrice}
                </span>
              </div>
              <div>
                <span className="text-[#25BF17]">WIN:</span>{" "}
                <span className="font-bold text-[1.1rem]">
                  {winneramount} Cash
                </span>
              </div>
            </div>

            {/* Progress Bar  */}
            <div
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
              className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
            >
              <div>
                <span className="text-[#FF2222]">{lottaryPurchase?.length} </span>
                <span className="text-gray-700 text-[14px]">SOLD OUT OF</span>
                <span> {Totaltickets}</span>
              </div>
              <Progress
                className="mt-[3px]"
                size="sm"
                color="red"
                value={winnerSlot}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="p-2 text-center rounded-2xl"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <div>
              <div>
              <div className="pt-[1rem] flex items-center justify-center gap-1">
                      <span className="font-semibold">Deal ends in:</span>{" "}
                      <div className="w-[140px]">
                      <Countdown
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
                      />
                      </div>
                    </div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <div className="bg-gray-500 w-[10px] h-[10px] flex justify-center items-center rounded-full text-white">
                    <Icon className="text-[2rem]" icon="bi:exclamation" />
                  </div>
                  <span className="text-[#858585] text-[10px]">
                    The lottery end time will be extended if unsold.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Link to={`/addToCart/lotteryId`}>
                <button className="submitBtn w-full">Buy Now</button>
              </Link>
            </div>
          </div>
          {isLoading ? (
            <div className="mt-3"><SubmitBtnLoader /></div>
          ) : (
            <button
              onClick={() => handleRemoveFromWishlist(UniqueID)}
              className="bg-black text-white rounded-full p-3 mt-3 w-full"
            >
              Remove from Wishlist
            </button>
          )}
        </div>
      </div>
      <div className="w-full bg-gray-300 h-[1.5px] my-10"></div>
    </>
  );
}

WishListItem.propTypes = {
  lottery:PropTypes.object
}
