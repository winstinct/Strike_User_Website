import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
import { Icon } from "@iconify/react/dist/iconify.js";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  useTitle("Strike - Account Details");
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      <section>
        <div className="flex items-center gap-5">
          <div
            onClick={() => navigate("/menu")}
            className="backBtn md:hidden block"
          >
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="text-[2rem] font-bold italic">{t("account details")}</h3>
        </div>

        <section
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
          className="grid grid-cols-3 my-[2rem] gap-5 rounded-[20px]"
        >
          <NavLink
            style={setActiveStyle}
            className="block font-bold md:text-[1.25rem] text-[1.1rem] p-1 italic py-3 rounded-[20px] w-full text-center"
            to="/profile"
            end
          >
            Personal Details
          </NavLink>
          <NavLink
            style={setActiveStyle}
            className="block font-bold md:text-[1.25rem] text-[1.1rem] p-1 italic py-3 rounded-[20px] w-full text-center"
            to="/profile/location-details"
            end
          >
            Location Details
          </NavLink>
          <NavLink
            style={setActiveStyle}
            className="block font-bold md:text-[1.25rem] text-[1.1rem] p-1 italic py-3 rounded-[20px] w-full text-center"
            to="/profile/contact-details"
            end
          >
            Contact Details
          </NavLink>
        </section>
        <Outlet />
      </section>
    </main>
  );
}
