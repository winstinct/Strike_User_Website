import { setActiveStyle } from "../../utils/setActiveStyle";
import { NavLink, Outlet } from "react-router-dom";

export default function Preferences() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      <h3 className="text-[2rem] font-bold italic">Preferences</h3>
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid md:grid-cols-2 grid-cols-1 my-[1.5rem] gap-5 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          to=""
          end
        >
          Notification Settings
        </NavLink>
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
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
