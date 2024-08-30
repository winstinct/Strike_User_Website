import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function AgentsLayout() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      {/* Back button  */}
      <div className="flex justify-between items-center mb-[2rem]">
        <div className="flex items-center gap-5">
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
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="text-center rounded-[12px] p-2"
      >
        <span className="font-medium">No. of Coins Requested:</span>
        <span className="text-[1.25rem] font-bold px-1">1000</span>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid md:grid-cols-2 grid-cols-1 my-[2rem] gap-5 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          to=""
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          end
        >
          <button>Agents</button>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
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
