import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useOutletContext } from "react-router-dom";
import { useGetAllAgentsQuery } from "../../redux/features/transactions/transactionsApi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { addConvertedCoinDetails } from "../../redux/convertedCoinSlice";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import { useChangeCurrencyMutation, useConvertCoinsIntoCryptoQuery, useConvertCurrencyQuery, useGetRecentTransactionsQuery } from "../../redux/features/lottery/lotteryApi";
import { useDispatch } from "react-redux";

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
  "ZAR",
];

export default function Agents() {
  const [stateCoins] = useOutletContext();
  const { data: userDetails } = useGetUserDetailsQuery();
  const { wallet, Currency } = userDetails?.response?.UserData || {};
  // const location = useLocation();
  // const coins = location?.state?.coins;
  console.log("STATE COINS", stateCoins);
  const { data, isLoading, isError } = useGetAllAgentsQuery(stateCoins);
  const dispatch = useDispatch();

    // RTK Query Hooks
    const { data: cryptoConvertedData } = useConvertCoinsIntoCryptoQuery(
      { amount: wallet, currencyType: Currency },
      { skip: isLoading }
    );
    const cryptoConvertedValue =
      cryptoConvertedData?.response?.usdtAmt.toFixed(2);
  
    const { data: convertedCurrencyData } = useConvertCurrencyQuery(Currency);
    
    const [changeCurrencyApi] = useChangeCurrencyMutation();
  
    const { data: recentTransactionsData } = useGetRecentTransactionsQuery();
    console.log(
      recentTransactionsData?.response?.coinHistory,
      "Recent transactions"
    );
  
    const handleChangeCurrency = async (e) => {
      try {
        const res = await changeCurrencyApi(e.target.value);
        if (res?.error) {
          return toast.error(res?.error?.data?.message);
        } else {
          toast.success(`Currency Converted to ${res?.data?.response?.Currency}`, { autoClose: 2000 });
          console.log('CHANGE CURRENCY DATA', res);
        }
      } catch (error) {
        console.log("Error is ==> ", error);
        return toast.error("There was something wrong.");
      }
    };
    useEffect(() => {
      dispatch(
        addConvertedCoinDetails({
          currencyCode: Currency,
          convertedAmount: convertedCurrencyData?.response?.convertedAmount,
        })
      );
    }, [userDetails, convertedCurrencyData]);

    if (!isLoading && isError) {
      return (
        <h1 className="text-center text-red-500 py-[5rem]">
          There was something wrong!
        </h1>
      );
    }

  return (
    <div className="mt-[2rem]">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.25rem] font-semibold mb-[1rem]">
          Available Agents
        </h3>
        <div className="bg-white text-black p-1 rounded-lg">
          <select
            value={Currency}
            onChange={handleChangeCurrency}
            name="currencies"
            id="currencies"
            className="outline-none cursor-pointer text-center px-2 font-medium"
          >
            {currencyCodes?.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          {/* <span className="text-[1.25rem] font-semibold ml-2">
            {convertedTotalAmount || "00.00"}
          </span> */}
        </div>
      </div>
      <div className="space-y-[1.5rem]">
        {/* Agent-1  */}
        {data?.response?.agents.map((item) => (
          <div
            key={item.agentId}
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="flex justify-between items-center border-[1px] border-gray-300 rounded-lg p-3"
          >
            <div className="flex flex-col gap-1">
              <p>
                Agent ID: <span className="font-semibold">{item.agentId}</span>
              </p>
              <p>
                Agent Name:{" "}
                <span className="font-semibold">
                  {item.FirstName + " " + item.LastName}
                </span>
              </p>
              <p className="font-semibold">Strike Agent</p>
              <p>
                Available Coins:{" "}
                <span className="font-semibold">{item.wallet}</span>
              </p>
            </div>
            <div>
              <Link
                to={`agent-details/${item._id}`}
                state={{ reqCoins: stateCoins }}
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
                className="border-[1px] flex items-center gap-1 rounded-lg p-2 border-gray-300 text-white bg-[#272424] hover:bg-black hover:text-white duration-300"
              >
                <span>Buy Now</span>
                <Icon
                  className="text-[1.5rem]"
                  icon="ic:twotone-arrow-right-alt"
                />
              </Link>
            </div>
          </div>
        ))}
        {/* Agent-1  */}
        {/* <div
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
          className="flex justify-between items-center border-[1px] border-gray-300 rounded-lg p-3"
        >
          <div>
            <p>
              Agent ID: <span className="font-semibold">18273123</span>
            </p>
            <p>Strike Agent</p>
            <p>
              Available Coins: <span className="font-semibold">18273123</span>
            </p>
          </div>
          <div>
            <button
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
              className="border-[1px] flex items-center gap-1 rounded-md p-2 border-gray-300 text-white bg-[#272424] hover:bg-black hover:text-white duration-300"
            >
              <span>Buy Now</span>
              <Icon
                className="text-[1.5rem]"
                icon="ic:twotone-arrow-right-alt"
              />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
