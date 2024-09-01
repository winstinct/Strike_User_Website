import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function BecomePublicAgent() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  return (
    <main>
      <div className="flex items-center gap-5 mb-3">
        <div onClick={() => navigate("/menu")} className="backBtn md:hidden block">
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">Become an Agent</h3>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <p className="w-[6px] h-[6px] bg-black rounded-full"></p>
          <p>
            Fill out the form below if not already filled and raise a request to
            become an agent.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[6px] h-[6px] bg-black rounded-full"></p>
          <p>
            After submission just wait for the approval of your request and then
            move forward.
          </p>
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid grid-cols-2 my-[2rem] gap-5 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic p-2 rounded-[20px] w-full text-center"
          to=""
          end
        >
          Personal Details
        </NavLink>
        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic p-2 rounded-[20px] w-full text-center"
          to="bank-details-public-agent"
          end
        >
          Bank Details
        </NavLink>
      </div>

      <Outlet />
    </main>
  );
}
