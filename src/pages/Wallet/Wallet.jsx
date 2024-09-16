import { Link } from "react-router-dom";
import WalletCard from "../../shared/WalletCard/WalletCard";
import RecentTransactions from "../../shared/RecentTransactions/RecentTransactions";

export default function Wallet() {
  window.scrollTo({top:0, behavior:'smooth'})
  return (
    <div>
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
