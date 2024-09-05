import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import WalletCard from "../../shared/WalletCard/WalletCard";
import RecentTransactions from "../../shared/RecentTransactions/RecentTransactions";

export default function Wallet() {
  window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div>
      {/* <div className="gradientBg text-white text-center rounded-[20px] p-4 my-[1.5rem]">
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
      </div> */}

       <WalletCard/>

      <div className="mt-[1rem]">
        <Link to="/withdraw" className="block lg:w-[50%] md:w-[70%] w-full mx-auto">
          <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">Withdraw Coins</button>
        </Link>
      </div>

      <div className="mt-[1rem] mb-[2rem]">
        <Link to="/withdraw-requests-history">
          <button className="text-[#5500C3] text-[14px] font-bold text-center w-full">
            Withdraw Request History
          </button>
        </Link>
      </div>


      <RecentTransactions/>
    </div>
  );
}
