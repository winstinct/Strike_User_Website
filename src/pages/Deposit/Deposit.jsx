import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WalletCard from "../../shared/WalletCard/WalletCard";
import { useConvertINRIntoUSDTMutation } from "../../redux/features/lottery/lotteryApi";
import useTitle from "../../hooks/useTitle";

export default function Deposit() {
  useTitle("Strike - Deposit")
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [perINRToUSDT, setPerINRToUSDT] = useState(0);
  const [convertedValue, setConvertedValue] = useState();

  const handleWheel = (e) => {
    e.target.blur();
  };

  const [convertINRIntoUSDTApi, { isLoading: isLoadingConversion }] =
    useConvertINRIntoUSDTMutation();

  const handleSelect = async (e) => {
    const cryptoValue = (Number(e.target.innerText) * perINRToUSDT).toFixed(2);
    setConvertedValue(cryptoValue);
    setAmount(e.target.innerText);
  };

  const handleChangeInput = (e) => {
    setConvertedValue((Number(e.target.value) * perINRToUSDT).toFixed(2));
    setAmount(e.target.value);
  };

  const handleNavigeToAgentPage = () => {
    localStorage.setItem("selectedCoins", amount);
    navigate("/agents");
  };

  useEffect(() => {
    const convertIntoISDTValue = async () => {
      const response = await convertINRIntoUSDTApi(1);
      console.log(
        "Per INR to USDT value===> ",
        response?.data?.response?.usdtAmt
      );
      setPerINRToUSDT(response?.data?.response?.usdtAmt);
    };
    convertIntoISDTValue();
  }, []);

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
          <button
            disabled={isLoadingConversion}
            onClick={handleSelect}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold ${
              amount == 500 ? "gradientBg text-white" : ""
            }`}
          >
            500
          </button>
          <button
            disabled={isLoadingConversion}
            onClick={handleSelect}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold ${
              amount == 1000 ? "gradientBg text-white" : ""
            }`}
          >
            1000
          </button>
          <button
            disabled={isLoadingConversion}
            onClick={handleSelect}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold ${
              amount == 2000 ? "gradientBg text-white" : ""
            }`}
          >
            2000
          </button>
          <button
            disabled={isLoadingConversion}
            onClick={handleSelect}
            className={`text-center border-[1px] border-gray-300 hover:border-[#A967FF] duration-300 rounded-lg p-2 font-semibold ${
              amount == 5000 ? "gradientBg text-white" : ""
            }`}
          >
            5000
          </button>
        </div>
        <div className="bg-white flex items-center gap-2 w-full rounded-lg p-1 text-[14px] font-semibold text-gray-600">
          <div className="bg-gray-500 w-[15px] h-[15px] flex justify-center items-center rounded-full text-white">
            <Icon className="text-[2rem]" icon="bi:exclamation" />
          </div>
          <span>{amount || "0"} Coins</span>
          <span>=</span>
          <div className="flex items-center gap-[2px]">
            <Icon className="text-[1.3rem]" icon="token-branded:usdt" />
            <div>
              {convertedValue || "00.00"}
            </div>
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
          onChange={handleChangeInput}
          onWheel={handleWheel}
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
            <button
              onClick={handleNavigeToAgentPage}
              disabled={isLoadingConversion}
              style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
              className="border-[1px] hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] rounded-[20px] py-8 w-full"
            >
              Agent
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
