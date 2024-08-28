import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./DepositLayout.css"
export default function DepositLayout() {
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

      <div className="grid grid-cols-2 gap-5 text-[1.25rem] font-bold DepositLayout">
        <NavLink
          to="wallet"
          className="block hover:bg-[#5500C3] hover:text-white duration-300 text-center border-[1px] border-gray-300 rounded-[30px] py-[0.6rem] w-full"
          end
        >
          <button>Wallet</button>
        </NavLink>

        <NavLink
          className="block hover:bg-[#5500C3] hover:text-white duration-300 text-center border-[1px] border-gray-300 rounded-[30px] py-[0.6rem] w-full"
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
