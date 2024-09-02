import { NavLink } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";

export default function LotteryCategories() {
  return (
    <section className="flex flex-wrap gap-5 text-center">
      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to=""
      >
        <div>Public Lottery</div>
      </NavLink>

      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to="/private-lotteries"
      >
        <div>Private Lottery</div>
      </NavLink>

      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to="/soldout-lotteries"
      >
        <div>Sold Out</div>
      </NavLink>
    </section>
  );
}
