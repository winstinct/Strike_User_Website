import PopularCampaigns from "./PopularCampaigns";
import PublicLotteries from "./PublicLotteries";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function LotteryGames() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0 });
  return (
    <section className="space-y-[2.5rem]">
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[1.5rem] font-bold italic">Lottery Games</h3>
      </div>

      {/* filter buttons  */}
      <section className="flex flex-wrap gap-5 text-center">
        <div className="flex-1 rounded-full py-2 gradientBg text-white border-[1px] cursor-pointer duration-300 min-w-[120px]">
          Public Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]">
          Private Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]">
          Sold Out
        </div>
      </section>

      <PopularCampaigns />
      <PublicLotteries />
    </section>
  );
}
