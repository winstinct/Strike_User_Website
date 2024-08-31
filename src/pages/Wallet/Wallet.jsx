import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Wallet() {
  window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div>
      <div className="gradientBg text-white text-center rounded-[20px] p-4 my-[1.5rem]">
        <p>Available Balance in Wallet</p>
        <h3 className="font-bold italic my-[0.2rem]">
          <span className="text-[2rem]">100.00</span>{" "}
          <span className="text-[1.25rem]">Coins</span>
        </h3>
        <div className="flex flex-col items-center justify-center space-y-[0.8rem]">
          <div className="bg-white text-black w-full p-1 rounded-lg">
            <span>INR</span>
            <span className="text-[1.25rem] font-semibold ml-2">100</span>
          </div>
          <div className="bg-white text-black flex items-center justify-center gap-2 w-full rounded-lg p-1">
            <Icon className="text-[2rem]" icon="token-branded:usdt" />
            <span className="text-[1.25rem] font-semibold">1.21</span>
          </div>
        </div>
      </div>

      <div>
        <Link to="/withdraw" className="block lg:w-[50%] md:w-[70%] w-full mx-auto">
          <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">Withdraw Coins</button>
        </Link>
      </div>

      <div className="mt-[1rem]">
        <Link to="/withdraw/withdraw-requests-history">
          <button className="text-[#5500C3] text-[14px] font-bold text-center w-full">
            Withdraw Request History
          </button>
        </Link>
      </div>

      <h3 className="font-bold text-[1rem] mt-[4rem] mb-[2rem]">Recent Transactions</h3>
          <div className="space-y-[1rem]">
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex md:flex-row flex-col justify-between  md:items-center text-[13px]">
              <div className="flex md:flex-row flex-col md:items-center md:gap-2 gap-1 font-semibold">
              <p>Type Of Transaction</p>
              <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[70px] text-center rounded-md my-1 font-medium">Pending</p>
              </div>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <div className="text-gray-600 text-[12px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex md:flex-row flex-col justify-between  md:items-center text-[13px]">
              <div className="flex md:flex-row flex-col md:items-center md:gap-2 gap-1 font-semibold">
              <p>Type Of Transaction</p>
              <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[70px] text-center rounded-md my-1 font-medium">Pending</p>
              </div>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <div className="text-gray-600 text-[12px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex md:flex-row flex-col justify-between  md:items-center text-[13px]">
              <div className="flex md:flex-row flex-col md:items-center md:gap-2 gap-1 font-semibold">
              <p>Type Of Transaction</p>
              <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[70px] text-center rounded-md my-1 font-medium">Pending</p>
              </div>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <div className="text-gray-600 text-[12px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
          </div>
    </div>
  );
}
