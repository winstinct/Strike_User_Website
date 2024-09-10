import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import WalletCard from "../../shared/WalletCard/WalletCard";

export default function Deposit() {
  const [amount, setAmount] = useState("");

  return (
    <div>
      <WalletCard />

      <div className="mt-[1.2rem]">
        <Link to="/deposit-history">
          <button className="text-[#5500C3] text-[14px] font-bold text-center w-full">
            Deposit History
          </button>
        </Link>
      </div>

      {/* Form  */}
      <div className="mt-[1.5rem]">
        <h3 className="font-medium mb-[0.3rem]">Select Amount</h3>
        <div className="grid grid-cols-4 gap-5">
          <p
            onClick={(e) => setAmount(e.target.innerText)}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold cursor-pointer ${
              amount == 500 ? "gradientBg text-white" : ""
            }`}
          >
            500
          </p>
          <p
            onClick={(e) => setAmount(e.target.innerText)}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold cursor-pointer ${
              amount == 1000 ? "gradientBg text-white" : ""
            }`}
          >
            1000
          </p>
          <p
            onClick={(e) => setAmount(e.target.innerText)}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold cursor-pointer ${
              amount == 2000 ? "gradientBg text-white" : ""
            }`}
          >
            2000
          </p>
          <p
            onClick={(e) => setAmount(e.target.innerText)}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold cursor-pointer ${
              amount == 5000 ? "gradientBg text-white" : ""
            }`}
          >
            5000
          </p>
        </div>
        <div className="bg-white flex items-center gap-2 w-full rounded-lg p-1 text-[14px] font-semibold text-gray-600">
          <div className="bg-gray-500 w-[15px] h-[15px] flex justify-center items-center rounded-full text-white">
            <Icon className="text-[2rem]" icon="bi:exclamation" />
          </div>
          <span>1000 Coins</span>
          <span>=</span>
          <div className="flex items-center gap-[2px]">
            <Icon className="text-[1.3rem]" icon="token-branded:usdt" />
            <span>10.21</span>
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <label className="font-medium block mb-[0.3rem]" htmlFor="customAmount">
          Select Custom Amount
          <span className="text-red-500 ml-1 font-bold">*</span>
        </label>
        <input
          className="p-2 border-[1px] border-gray-300 rounded-md outline-none w-full"
          id="customAmount"
          placeholder="Custom Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {amount && amount >= 100 && (
        <div className="mt-[1.5rem]">
          <h3 className="font-medium mb-[0.3rem]">Select Payment Method</h3>
          <div className="grid lg:grid-cols-2 gap-5 font-bold text-[1.5rem]">
            <button
              style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
              className="border-[1px] hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] rounded-[20px] py-8 w-full"
            >
              Crypto
            </button>
            <Link to="/agents" state={{ coins: amount }}>
              <button
                style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
                className="border-[1px] hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] rounded-[20px] py-8 w-full"
              >
                Agent
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
