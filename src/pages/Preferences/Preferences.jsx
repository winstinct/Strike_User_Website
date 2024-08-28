import { setActiveStyle } from "../../utils/setActiveStyle";
import { NavLink, Outlet } from "react-router-dom";

export default function Preferences() {
  window.scrollTo({top:0, behavior:"smooth"})
  return (
    <main>
      <h3 className="text-[2rem] font-bold italic">Preferences</h3>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-[1.5rem]">
      <NavLink
        style={setActiveStyle}
        className="border-[1px] border-gray-300 rounded-3xl py-3 hover:text-[#5500C3] duration-300 text-[1.25rem] font-bold italic hover:border-[#5500C3] block text-center"
        to=""
        end
      >
        Notification Settings
      </NavLink>
      <NavLink
        style={setActiveStyle}
        className="border-[1px] border-gray-300 rounded-3xl py-3 hover:text-[#5500C3] duration-300 text-[1.25rem] font-bold italic hover:border-[#5500C3] block text-center"
        to="privacy-settings"
        end
      >
        Privacy Settings
      </NavLink>
    </div>
    <Outlet/>
    </main>
  );
}
