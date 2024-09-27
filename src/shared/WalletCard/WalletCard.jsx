import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import {
  useChangeCurrencyMutation,
  useConvertCoinsIntoCryptoQuery,
  useConvertCurrencyQuery,
} from "../../redux/features/lottery/lotteryApi";
import { toast } from "react-toastify";
import { addConvertedCoinDetails } from "../../redux/convertedCoinSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";


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

export default function WalletCard() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useGetUserDetailsQuery();
  const { wallet, Currency } = data?.response?.UserData || {};

  // RTK Query Hooks
  const { data: cryptoConvertedData } = useConvertCoinsIntoCryptoQuery(
    { amount: wallet, currencyType:"INR" }, {skip:!wallet}
  );

  const cryptoConvertedValue =
    cryptoConvertedData?.response?.usdtAmt.toFixed(2);


  const { data: convertedCurrencyData } = useConvertCurrencyQuery(Currency, {skip:!Currency});
  const convertedTotalAmount =
    convertedCurrencyData?.response?.convertedAmount * wallet;
  const [changeCurrencyApi] = useChangeCurrencyMutation();
  

  const handleChangeCurrency = async (e) => {
    try {
      const res = await changeCurrencyApi(e.target.value);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Converted currency successfully.", { autoClose: 2000 });
      }
    } catch (error) {
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
  }, [data, convertedCurrencyData, Currency, dispatch]);

  return (
    <div className="gradientBg text-white text-center rounded-[20px] p-4">
      <p className="text-[12px]">{t('available balance in wallet')}</p>
      <h3 className="font-bold italic">
        <span className="text-[2rem]">{wallet}</span>{" "}
        <span className="text-[1.25rem]">{t('coins')}</span>
      </h3>
      <div className="flex flex-col items-center justify-center space-y-[1rem] mt-[0.3rem]">
        <div className="bg-white text-black w-full p-1 rounded-lg">
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
          <span className="text-[1.25rem] font-semibold ml-2">
            {convertedTotalAmount || "00.00"}
          </span>
        </div>
        <div className="bg-white text-black flex items-center justify-center gap-2 w-full rounded-lg p-1">
          <Icon className="text-[2rem]" icon="token-branded:usdt" />
          <span className="text-[1.25rem] font-semibold">
            {cryptoConvertedValue}
          </span>
        </div>
      </div>
    </div>
  );
}
