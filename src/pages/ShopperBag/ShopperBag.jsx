import { useState } from "react";
import lotteryImg from "../../assets/popular-lottery.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

export default function ShopperBag() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <div onClick={() => navigate("/")} className="backBtn md:hidden block">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">Shopper Bag</h3>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          className="p-[1.5rem] rounded-[20px] space-y-[1rem]"
        >
          {/* item-1  */}
          <div className="border-b-[1px] border-gray-300 pb-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <img
                className="rounded-[10px] h-full"
                src={lotteryImg}
                alt="Lottery Image"
              />
              <div className="space-y-[1rem]">
                <h3 className="font-semibold">
                  <span className="text-[#25BF17]">WIN: </span>
                  <span>INR500 Cash</span>
                </h3>

                <div className="flexitems-center">
                  <button
                    onClick={handleDecrease}
                    className="text-white text-[1rem] bg-[#EF473A] w-[1rem] h-[1rem] rounded-full pr-1"
                  >
                    <Icon icon="ic:baseline-minus" />
                  </button>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    readOnly
                    className="outline-none w-[40px] rounded-md text-center font-bold pl-2 text-[14px]"
                    type="number"
                  />
                  <button
                    onClick={handleIncrease}
                    className="text-white text-[1rem] bg-[#A8E063] w-[1rem] h-[1rem] rounded-full"
                  >
                    <Icon icon="ic:baseline-plus" />
                  </button>
                </div>
                <p className="text-[1.25rem] font-bold">INR 1000.00</p>
              </div>
            </div>
          </div>
          {/* item-2  */}
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <img
                className="rounded-[10px] h-full"
                src={lotteryImg}
                alt="Lottery Image"
              />
              <div className="space-y-[1rem]">
                <h3 className="font-semibold">
                  <span className="text-[#25BF17]">WIN: </span>
                  <span>INR500 Cash</span>
                </h3>

                <div className="flexitems-center">
                  <button
                    onClick={handleDecrease}
                    className="text-white text-[1rem] bg-[#EF473A] w-[1rem] h-[1rem] rounded-full pr-1"
                  >
                    <Icon icon="ic:baseline-minus" />
                  </button>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    readOnly
                    className="outline-none w-[40px] rounded-md text-center font-bold pl-2 text-[14px]"
                    type="number"
                  />
                  <button
                    onClick={handleIncrease}
                    className="text-white text-[1rem] bg-[#A8E063] w-[1rem] h-[1rem] rounded-full"
                  >
                    <Icon icon="ic:baseline-plus" />
                  </button>
                </div>
                <p className="text-[1.25rem] font-bold">INR 1000.00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="rounded-2xl flex justify-between items-center p-3 mb-5 gap-5"
          >
            <input
              className="border-[1px] border-gray-300 rounded-lg p-2 outline-none w-full"
              type="text"
            />
            <button className="submitBtn w-[130px] h-[40px] flex justify-center items-center">
              Apply
            </button>
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
                  <p>Subtotal</p>
                  <p>AED500</p>
                </div>
                <div className="flex justify-between items-center text-[#858585]">
                  <p>Tax</p>
                  <p>AED500</p>
                </div>
                <div className="flex justify-between items-center text-[#858585]">
                  <p className="text-[#212529]">Total</p>
                  <p className="text-[#212529] font-bold italic">AED500</p>
                </div>
              </div>

              <Link to={`/cartQuantityAdjuster/lotteryId`}>
                <button className="submitBtn w-full mt-[1rem]">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
