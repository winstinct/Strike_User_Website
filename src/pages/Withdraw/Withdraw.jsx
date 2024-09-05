import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useConvertINRIntoUSDTMutation,
  useWithdrawCoinsMutation,
} from "../../redux/features/lottery/lotteryApi";
import { toast } from "react-toastify";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";
import { useDispatch } from "react-redux";
import { addWithdrawCoinDetails } from "../../redux/withdrawCoinSlice";

export default function Withdraw() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // window.scrollTo({ top: 0, behavior: "smooth" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Input field values are being watched
  const fullName = watch("fullName");
  const withdrawalAmt = watch("withdrawalAmt");
  const cryptoWalletAddress = watch("cryptoWalletAddress");

  const [convertINRIntoUSDTApi, { isLoading }] =
    useConvertINRIntoUSDTMutation();
  const [winthdrawCoinsApi, { isLoading: isLoadingWithdraw }] =
    useWithdrawCoinsMutation();

  const onSubmit = async (data) => {
    try {
      const convertCurrencyRes = await convertINRIntoUSDTApi(
        data.withdrawalAmt
      );
      const cryptoValue =
        convertCurrencyRes?.data?.response?.usdtAmt?.toFixed(3);
      if (convertCurrencyRes?.error) {
        return toast.error(convertCurrencyRes?.error?.data?.message);
      }
      const withdrawCoinRes = await winthdrawCoinsApi({
        ...data,
        withdrawalAmt: Number(data.withdrawalAmt),
        cryptoValue: Number(cryptoValue),
      });
      if (withdrawCoinRes?.error) {
        return toast.error(withdrawCoinRes?.error?.data?.message);
      }
      dispatch(
        addWithdrawCoinDetails({
          ...data,
          withdrawalAmt: Number(data.withdrawalAmt),
          cryptoValue: Number(cryptoValue),
        })
      );
      navigate("/withdraw-submitted");
    } catch (error) {
      return toast.error("There was something wrong.");
    }
  };

  return (
    <div>
      <div>
        {/* Back button  */}
        <div className="flex items-center gap-5 mb-[3rem]">
          <div onClick={() => navigate(-1)} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold italic">
            Withdraw
          </h3>
        </div>

        {/* form  */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label className="block" htmlFor="withdrawalAmt">
                  Withdraw Coins to Amount
                  <span className="text-red-500 ml-1 font-bold">*</span>
                </label>
                <div className="relative">
                  <input
                    className="p-2 border-[1px] border-gray-400 rounded-md outline-none w-full"
                    id="withdrawalAmt"
                    type="number"
                    onWheel={(e) => e.target.blur()}
                    name="withdrawalAmt"
                    {...register("withdrawalAmt", {
                      required: true,
                      min: 1000,
                    })}
                  />
                  <Icon
                    className="absolute text-[2rem] top-[0.3rem] right-2"
                    icon="token-branded:usdt"
                  />
                </div>
                <div
                  className={`flex items-center text-[14px] gap-2 ${
                    withdrawalAmt < 1000 ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  <Icon icon="zondicons:exclamation-solid" />
                  <span>Min: 1,000 | Max: 10,000</span>
                </div>
              </div>

              <div>
                <label htmlFor="fullName">
                  Full Name
                  <span className="text-red-500 ml-1 font-bold">*</span>
                </label>
                <input
                  className="p-2 border-[1px] border-gray-400 rounded-md outline-none w-full"
                  id="fullName"
                  placeholder="Enter Full Name"
                  type="text"
                  name="fullName"
                  {...register("fullName", { required: true })}
                />
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="cryptoWalletAddress">
                  Crypto Wallet Address
                  <span className="text-red-500 ml-1 font-bold">*</span>
                </label>
                <input
                  className="p-2 border-[1px] border-gray-400 rounded-md outline-none w-full"
                  id="cryptoWalletAddress"
                  placeholder="0xd0a8bb2536c5fba013d1cac5cd28cbd85a4a97"
                  type="text"
                  name="cryptoWalletAddress"
                  {...register("cryptoWalletAddress", { required: true })}
                />
              </div>
            </div>

            <footer>
              <div className="mt-[3rem] space-y-[1rem]">
                <h3 className="text-[1.25rem] font-bold">Withdrawal Details</h3>
                <div className="flex justify-between md:items-center text-gray-500 text-[14px] md:flex-row flex-col">
                  <p>Total Coins</p>
                  <p>{withdrawalAmt || 0} Coins</p>
                </div>
                <div className="flex justify-between md:items-center text-gray-500 text-[14px] md:flex-row flex-col">
                  <p>Convenience Fee</p>
                  <p>0 Coins</p>
                </div>
                <div className="flex justify-between md:items-center font-bold text-[14px] md:flex-row flex-col">
                  <p>Total Withdraw</p>
                  <p>{withdrawalAmt || 0} Coins</p>
                </div>
              </div>

              <div className="flex justify-center mt-[2rem]">
                {isLoadingWithdraw ? (
                  <div className="w-[300px]">
                    <SubmitBtnLoader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={
                      fullName &&
                      cryptoWalletAddress &&
                      withdrawalAmt &&
                      Number(withdrawalAmt) >= 1000
                        ? false
                        : true
                    }
                    className={`rounded-full py-2 cursor-poiner min-w-[300px] text-white bg-gray-500 ${
                      fullName &&
                      cryptoWalletAddress &&
                      withdrawalAmt &&
                      Number(withdrawalAmt) >= 1000 &&
                      "gradientBg"
                    }`}
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}
