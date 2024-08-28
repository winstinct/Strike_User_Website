import { NavLink, Outlet } from "react-router-dom";
import "./Tickets.css";
export default function Tickets() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      <div className="flex tickets md:flex-row flex-col items-center gap-5 marginRight mb-[1.5rem]">
        <NavLink
          to=""
          className="border-[1px] border-gray-300 hover:border-[#5500C3] py-[0.5rem] rounded-[20px] w-full hover:bg-[#5500C3] hover:text-white duration-300 shadow-sm p-1 flex justify-center items-center text-[1.25rem] font-bold"
          end
        >
          <button>Upcoming Draws</button>
        </NavLink>
        <NavLink
          to="winners"
          className="border-[1px] border-gray-300 hover:border-[#5500C3] py-[0.5rem] rounded-[20px] w-full hover:bg-[#5500C3] hover:text-white duration-300 shadow-sm p-1 flex justify-center items-center text-[1.25rem] font-bold"
          end
        >
          <button>Winners</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
