import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function WithdrawLayout() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      {/* Back button  */}
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 text-[1.25rem] font-bold">
        <NavLink
          style={setActiveStyle}
          to="wallet"
          className="rounded-full py-2 cursor-pointer border-[1px] border-gray-300 hover:text-[#5500C3] hover:border-[#5500C3] w-full text-center"
          end
        >
          <button>Wallet</button>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="rounded-full py-2 cursor-pointer border-[1px] border-gray-300 hover:text-[#5500C3] hover:border-[#5500C3] w-full text-center"
          to="deposit"
          end
        >
          <button>Deposit</button>
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
