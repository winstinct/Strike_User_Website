import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

export default function Withdraw() {
  const navigate = useNavigate();
  window.scrollTo({top:0, behavior:'smooth'})
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
          <form className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <label className="block" htmlFor="withdrawCoins">
                Withdraw Coins to Amount
                <span className="text-red-500 ml-1 font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  className="p-2 border-[1px] border-gray-400 rounded-md outline-none w-full"
                  id="withdrawCoins"
                  type="number"
                />
                <Icon
                  className="absolute text-[2rem] top-[0.3rem] right-2"
                  icon="token-branded:usdt"
                />
              </div>
              <div className="flex items-center text-gray-500 text-[14px] gap-2">
              <Icon icon="zondicons:exclamation-solid" />
                <span >Min: 1,000 | Max: 10,000</span>
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
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="walletAddress">
              Crypto Wallet Address
                <span className="text-red-500 ml-1 font-bold">*</span>
              </label>
              <input
                className="p-2 border-[1px] border-gray-400 rounded-md outline-none w-full"
                id="walletAddress"
                placeholder="0xd0a8bb2536c5fba013d1cac5cd28cbd85a4a97"
                type="text"
              />
            </div>
          </form>

          <div className="mt-[3rem] space-y-[0.5rem]">
          <h3 className="text-[1.25rem] font-bold">Withdrawal Details</h3>
          <div className="flex justify-between md:items-center text-gray-500 text-[14px] md:flex-row flex-col">
            <p>Total Coins</p>
            <p>100 Coins</p>
          </div>
          <div className="flex justify-between md:items-center text-gray-500 text-[14px] md:flex-row flex-col">
            <p>Convenience Fee</p>
            <p>10 Coins</p>
          </div>
          <div className="flex justify-between md:items-center font-bold text-[14px] md:flex-row flex-col">
            <p>Total Withdraw</p>
            <p>110 Coins</p>
          </div>
          </div>

          <div className="flex justify-center mt-[1rem]">
            <Link to="/withdraw-submitted">
            <button className="rounded-full py-2 cursor-pointer gradientBg text-white min-w-[300px]">Withdraw</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
