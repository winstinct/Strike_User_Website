import { Link } from "react-router-dom";
import lotteryNameImg from "../assets/lottery-name.svg";
import personImg from "../assets/person-illustrator.png";
import walletImg from "../assets/wallet-illustration.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuth } from "../contexts/AuthContext";
import { useGetUserDetailsQuery } from "../redux/features/auth/authApi";
import { useState } from "react";
import { useChangeCurrencyQuery, useConvertCurrencyQuery } from "../redux/features/lottery/lotteryApi";


const currencyCodes = [
  "INR",
  "USD",
  "EUR",
  "CAD",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ARS",
  "AUD",
  "AZN",
  "BAM",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BND",
  "BOB",
  "BRL",
  "BWP",
  "BYR",
  "BZD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EEK",
  "EGP",
  "ERN",
  "ETB",
  "GBP",
  "GEL",
  "GHS",
  "GNF",
  "GTQ",
  "HKD",
  "HNL",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KHR",
  "KMF",
  "KRW",
  "KWD",
  "KZT",
  "LBP",
  "LKR",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MOP",
  "MUR",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SDG",
  "SEK",
  "SGD",
  "SOS",
  "SYP",
  "THB",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "XAF",
  "XOF",
  "YER",
  "ZAR"
]

export default function RightSideBar() {
  const { currentUser } = useAuth();
  const {data, isLoading} = useGetUserDetailsQuery();
  const {wallet} = data?.response?.UserData || {};
  const [selectedCurrency, setSelectedCurrency] = useState("INR")
  const {data:convertCurrencyData} = useConvertCurrencyQuery(selectedCurrency);
  const convertedTotalCurrencyValue = convertCurrencyData?.response?.convertedAmount * wallet;
  // const {data:changeCurrencyData} = useChangeCurrencyQuery(selectedCurrency);
  console.log(convertCurrencyData?.response?.convertedAmount * wallet)
  return (
    <div
      style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)"}}
      className={`bg-white fixed top-0 right-0 w-[18rem] z-10 px-2 duration-300 h-[100vh] overflow-y-auto right-sidebar pb-[3rem] md:block hidden`}
    >
      {currentUser ? (
        <div className="mt-[6rem] pb-[1rem] px-2">
          <div className="gradientBg text-white text-center rounded-[20px] p-2">
          <p className="text-[12px]">Available Balance in Wallet</p>
          <h3 className="font-bold italic"><span className="text-[2rem]">{wallet}</span> <span className="text-[1.25rem]">Coins</span></h3>
          <div className="flex flex-col items-center justify-center space-y-[0.5rem]">
          <div className="bg-white text-black w-full p-1 rounded-lg">
            <select defaultValue={selectedCurrency} onChange={(e)=>setSelectedCurrency(e.target.value)} name="currencies" id="currencies" className="outline-none cursor-pointer text-center px-2 font-medium">
              {
                currencyCodes?.map(code => (<option key={code} value={code}>{code}</option>))
              }
            </select>
            <span className="text-[1.25rem] font-semibold ml-2">{convertedTotalCurrencyValue}</span>
          </div>
          <div className="bg-white text-black flex items-center justify-center gap-2 w-full rounded-lg p-1">
            <Icon className="text-[2rem]" icon="token-branded:usdt" />
            <span className="text-[1.25rem] font-semibold">1.21</span>
          </div>
          </div>
          </div>

          <div className="mt-[1rem] space-y-[1rem]">
          <Link to="/withdraw" className="block">
          <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">Withdraw Coins</button>
          </Link>
          <Link to="/deposit" className="block mt-[0.5rem]">
          <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">Deposit</button>
          </Link>
          </div>

          <Link to="/withdraw-requests-history">
          <button className="text-[#5500C3] text-[14px] font-bold text-center mt-[1rem] w-full">Withdraw Request History</button>
          </Link>

          <h3 className="font-bold text-[1.1rem] my-[1.5rem]">Recent Transactions</h3>
          <div className="space-y-[1.5rem]">
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex justify-between items-center text-[13px]">
              <p>Type Of Transaction</p>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[60px] text-center rounded-md my-2">pending</p>
             <div className="text-gray-600 text-[14px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex justify-between items-center text-[13px]">
              <p>Type Of Transaction</p>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[60px] text-center rounded-md my-2">pending</p>
             <div className="text-gray-600 text-[14px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex justify-between items-center text-[13px]">
              <p>Type Of Transaction</p>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[60px] text-center rounded-md my-2">pending</p>
             <div className="text-gray-600 text-[14px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex justify-between items-center text-[13px]">
              <p>Type Of Transaction</p>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[60px] text-center rounded-md my-2">pending</p>
             <div className="text-gray-600 text-[14px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
            {/* transaction-1  */}
          <div className="border-b-[1px] border-b-gray-300 pb-5">
             <div className="flex justify-between items-center text-[13px]">
              <p>Type Of Transaction</p>
              <p className="text-red-500">-10 Coins</p>
             </div>
             <div>
             <p className="bg-[#FEA40033] text-[#FEA400] text-[12px] p-[3px] w-[60px] text-center rounded-md my-2">pending</p>
             <div className="text-gray-600 text-[14px]">
             <span>29 Feb 2024</span>
             <span className="ml-3">11:21 AM</span>
             </div>
             </div>
          </div>
          </div>
        </div>
      ) : (
        <div className="mt-[7rem]">
          <div>
            <div className="flex justify-center items-center"><img className="w-full" src={lotteryNameImg} alt="" /></div>
            <div className="flex justify-center items-center relative my-[0.5rem]">
              <img className="max-h-[130px]" src={personImg} alt="" />
              <img
                className="absolute bottom-0 right-0 max-w-[70px]"
                src={walletImg}
                alt=""
              />
            </div>
          </div>
          <div className="space-y-[1rem] text-center">
            <h3 className="text-[1.25rem] font-bold">Login to check wallet</h3>
            <p className="text-[14px]">
              Login to check wallet and offers to buy lotteries
            </p>
            <div>
              <Link to="/auth/login">
                <button className="submitBtn w-full">Login/Signup</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
