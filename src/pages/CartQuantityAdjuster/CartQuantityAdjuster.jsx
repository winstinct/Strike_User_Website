import { Icon } from "@iconify/react/dist/iconify.js";
import puchaseLotteryImg from "../../assets/purchaseLottery.svg";
import { Progress } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CartQuantityAdjuster() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity+1)
  };
  const handleDecrease = () => {
    setQuantity(quantity-1)
  };

  return (
    <section>
      <div onClick={() => navigate("/")} className="backBtn mb-[2rem]">
        <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
      </div>
      <div>
        <img src={puchaseLotteryImg} alt="" />
      </div>

      <div className="flex justify-between items-center mt-[3rem] mb-[1rem]">
        <h3 className="text-[2rem] font-bold">Lottery Title</h3>
        <Icon
          className="text-[2rem] cursor-pointer"
          icon="mdi:favourite-border"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
          className="rounded-2xl"
        >
          <div className="bg-[#FF0023] rounded-t-2xl text-center text-white text-[1.5rem] font-bold p-[0.5rem]">
            <h3>Deal ends in: 00:18:03:10</h3>
          </div>

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

            <div className="flex justify-center items-center gap-1 my-[1rem]">
              <div className="bg-gray-500 w-[15px] h-[15px] flex justify-center items-center rounded-full text-white">
                <Icon className="text-[2rem]" icon="bi:exclamation" />
              </div>
              <p className="text-[14px] text-gray-600">The lottery end time will be extended if unsold.</p>
            </div>

            <div className="rounded-[50px] py-[0.5rem] border-[1px] border-gray-300 flex justify-between items-center px-8">
              <p className="font-bold text-[18px]">INR 250</p>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleDecrease}
                  className="text-[#7647B2] hover:bg-[#7647B2] hover:text-white duration-300 border-[1px] border-[#7647B2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-[2rem]"
                >
                  <Icon icon="ic:baseline-minus" />
                </button>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  readOnly
                  className="outline-none p-2 w-[60px] rounded-md text-center font-bold text-[1.25rem]"
                  type="number"
                />
                <button
                  onClick={handleIncrease}
                  className="text-[#7647B2] ml-[-1rem] hover:bg-[#7647B2] hover:text-white duration-300 border-[1px] border-[#7647B2] w-[30px] h-[30px] rounded-full flex justify-center items-center text-[2rem]"
                >
                  <Icon icon="ic:baseline-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-2 rounded-2xl font-semibold space-y-[1rem]">
            <div className="text-center">
              <span className="text-[#FF2222] text-[1.5rem] font-bold">
                150{" "}
              </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span className="text-[1.5rem] font-bold"> 300</span>
            </div>
            <Progress className="mt-[3px]" size="sm" color="red" value={50} />
          </div>

          <div>
            <div className="font-bold bg-[#FF0023] text-white text-[1.25rem] flex justify-between items-center rounded-2xl p-[1.5rem]">
              <p>Prize Details</p>
              <p>USDT5,000.00</p>
            </div>

            <div className="flex justify-center items-center gap-5 text-[2rem] mt-[1rem]">
              <Icon icon="ph:x-logo" />
              <Icon icon="logos:whatsapp-icon" />
              <Icon icon="logos:facebook" />
              <Icon className="text-gray-500" icon="bi:three-dots" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[3rem]">
        <div className="text-[1.25rem] flex justify-between items-center border-t-[1px] border-gray-300 py-[0.5rem]">
          <p className="text-[#858585] font-medium">Invited by</p>
          <p className="text-[#FF0023] font-bold">Admin</p>
        </div>
        <div className="text-[1.25rem] flex justify-between items-center border-t-[1px] border-b-[1px] border-gray-300 py-[0.5rem]">
          <p className="text-[#858585] font-medium">Type</p>
          <p className="text-[#FF0023] font-bold">Private</p>
        </div>
      </div>

      <div className="mt-[3rem]">
        <h3 className="text-[1.5rem] font-bold underline mb-[1rem]">
          Terms & Conditions
        </h3>
        <div className="list-disc list-inside space-y-[1rem]">
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-black mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
