import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./DepositLayout.css";
export default function DepositLayout() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      {/* Back button  */}
      <div className="flex items-center gap-5 mb-[2rem]">
        <div onClick={() => navigate("/")} className="backBtn">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid grid-cols-2 my-[2rem] gap-5 rounded-[20px] DepositLayout"
      >
        <NavLink
          to="wallet"
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          end
        >
          Wallet
        </NavLink>

        <NavLink
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          to="deposit"
          end
        >
          Deposit
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
