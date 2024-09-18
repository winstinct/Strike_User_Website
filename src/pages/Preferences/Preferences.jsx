import { Icon } from "@iconify/react/dist/iconify.js";
import { setActiveStyle } from "../../utils/setActiveStyle";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export default function Preferences() {
  useTitle("Strike - Preferences")
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate()
  return (
    <main>
      <div className="flex items-center gap-5">
        <div onClick={() => navigate("/menu")} className="backBtn md:hidden block">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">Preferences</h3>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid grid-cols-2 my-[1.5rem] gap-5 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic p-2 rounded-[20px] w-full text-center"
          to=""
          end
        >
          Notification Settings
        </NavLink>
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic p-2 rounded-[20px] w-full text-center"
          to="privacy-settings"
          end
        >
          Privacy Settings
        </NavLink>
      </div>
      <Outlet />
    </main>
  );
}
