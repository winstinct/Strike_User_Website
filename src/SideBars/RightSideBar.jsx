import { Link } from "react-router-dom";
import lotteryNameImg from "../assets/lottery-name.svg";
import personImg from "../assets/person-illustrator.png";
import walletImg from "../assets/wallet-illustration.svg";
import { useAuth } from "../contexts/AuthContext";
import WalletCard from "../shared/WalletCard/WalletCard";
import RecentTransactions from "../shared/RecentTransactions/RecentTransactions";
import { useTranslation } from "react-i18next";

export default function RightSideBar() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      className={`bg-white fixed top-0 right-0 w-[18rem] z-10 px-2 duration-300 h-[100vh] overflow-y-auto right-sidebar pb-[3rem] md:block hidden`}
    >
      {currentUser ? (
        <div className="mt-[6rem] pb-[1rem] px-2">
          <WalletCard />
          
          <div className="mt-[1rem] space-y-[1rem]">
            <Link to="/withdraw" className="block">
              <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">
                {t('withdraw coins')}
              </button>
            </Link>
            <Link to="/deposit" className="block mt-[0.5rem]">
              <button className="rounded-full py-2 cursor-pointer gradientBg text-white w-full">
              {t('deposit')}
              </button>
            </Link>
          </div>

          <Link to="/withdraw-requests-history">
            <button className="text-[#5500C3] text-[14px] font-bold text-center mt-[1rem] w-full">
            {t('withdraw request history')}
            </button>
          </Link>

          <RecentTransactions />
        </div>
      ) : (
        <div className="mt-[7rem]">
          <div>
            <div className="flex justify-center items-center">
              <img className="w-full" src={lotteryNameImg} alt="" />
            </div>
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
