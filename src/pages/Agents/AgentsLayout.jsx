import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function AgentsLayout() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      {/* Back button  */}
      <div className="flex justify-between items-center">
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[1.5rem] font-bold">Agents</h3>
      </div>
      <div className="flex items-center gap-2 font-bold">
      <Icon className="text-[1rem]" icon="bi:clock" />
      <span>10:00</span>
      </div>
      </div>

      <div
      style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.10)"}}
       className="text-center rounded-lg py-2 border-[1px] border-gray-300 mb-[1.5rem]">
        <span className="font-medium">No. of Coins Requested:</span>
        <span className="text-[1.25rem] font-bold">1000</span>
      </div>

      <div className="grid grid-cols-2 gap-5 text-[1.25rem] font-bold">
        <NavLink
          style={setActiveStyle}
          to=""
          className="block hover:text-[#5500C3] duration-300 text-center border-[1px] border-gray-300 hover:border-[#5500C3] rounded-[30px] py-[0.6rem] w-full"
          end
        >
          <button>Agents</button>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="block hover:text-[#5500C3] duration-300 text-center border-[1px] border-gray-300 hover:border-[#5500C3] rounded-[30px] py-[0.6rem] w-full"
          to="agents-history"
          end
        >
          <button>History</button>
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
