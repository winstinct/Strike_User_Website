import { NavLink, Outlet } from "react-router-dom";
import "./Tickets.css";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function Tickets() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      <div className="flex tickets md:flex-row flex-col items-center gap-5 mb-[1.5rem]">
        <NavLink
        style={setActiveStyle}
          to=""
          className="border-[1px] italic border-gray-300 hover:border-[#5500C3] py-[0.5rem] rounded-full w-full hover:text-[#5500C3] duration-300 shadow-sm p-1 flex justify-center items-center text-[1.25rem] font-bold"
          end
        >
          Upcoming Draws
        </NavLink>
        <NavLink
        style={setActiveStyle}
          to="winners"
          className="border-[1px] italic border-gray-300 hover:border-[#5500C3] py-[0.5rem] rounded-full w-full hover:text-[#5500C3] duration-300 shadow-sm p-1 flex justify-center items-center text-[1.25rem] font-bold"
          end
        >
          Winners
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
