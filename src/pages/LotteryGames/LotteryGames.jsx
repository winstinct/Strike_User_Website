import React, { useEffect } from "react";
import PopularCampaigns from "./PopularCampaigns";
import PublicLotteries from "./PublicLotteries";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function LotteryGames() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0});
  return (
    <section className="space-y-[2.5rem] ml-56">
      <div className="flex items-center gap-5 mb-[2rem]">
      <div onClick={() => navigate(-1)} className="backBtn">
        <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
      </div>
      <h3 className="text-[1.5rem] font-bold">Lottery Games</h3>
      </div>

      {/* filter buttons  */}
      <div className="flex flex-wrap gap-5 text-center mr-56">
        <div className="flex-1 rounded-full py-2 bg-[#5500C3] text-white border-[1px] cursor-pointer border-[#5500C3] duration-300 min-w-[120px]">
          Public Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:border-[#5500C3] duration-300 border-gray-300 hover:bg-[#5500C3] hover:text-white min-w-[120px]">
          Private Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:border-[#5500C3] duration-300 border-gray-300 hover:bg-[#5500C3] hover:text-white min-w-[120px]">
          Sold Out
        </div>
      </div>

      <PopularCampaigns />
      <PublicLotteries />
    </section>
  );
}
