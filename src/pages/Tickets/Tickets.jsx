import { NavLink, Outlet } from "react-router-dom";
import "./Tickets.css";
import { setActiveStyle } from "../../utils/setActiveStyle";
import useTitle from "../../hooks/useTitle";
export default function Tickets() {
  useTitle("Strike - Tickets")
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid grid-cols-2 my-[2.5rem] md:gap-5 gap-1 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          to=""
          className="block font-bold md:text-[1.25rem] text-[1.1rem] italic py-3 px-1 rounded-[20px] w-full text-center"
          end
        >
          Upcoming Draws
        </NavLink>
        <NavLink
          style={setActiveStyle}
          to="winners"
          className="block font-bold md:text-[1.25rem] text-[1.1rem] italic py-3 px-1 rounded-[20px] w-full text-center"
          end
        >
          Winnings
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
