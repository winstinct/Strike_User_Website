import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { setActiveStyle } from "../../utils/setActiveStyle";
import useTitle from "../../hooks/useTitle";

export default function LotteryGames() {
  useTitle("Strike - Lottery Games")
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
        <NavLink
          style={setActiveStyle}
          className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
          to=""
          end
        >
          <div>Public Lottery</div>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
          to="private-lotteries"
          end
        >
          <div>Private Lottery</div>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
          to="soldout-lotteries"
          end
        >
          <div>Sold Out</div>
        </NavLink>
      </section>

      <Outlet />
    </section>
  );
}
