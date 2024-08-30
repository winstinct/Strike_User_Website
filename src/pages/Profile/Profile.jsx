import { NavLink, Outlet } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function Profile() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      <section>
        <h3 className="text-[2rem] font-bold italic">Account Details</h3>
        <section 
        style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)"}}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-[2rem] gap-5 rounded-[20px]"
        >
          <NavLink
            style={setActiveStyle}
            className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
            to="/profile"
            end
          >
            Personal Details
          </NavLink>
          <NavLink
            style={setActiveStyle}
            className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
            to="/profile/location-details"
            end
          >
            Location Details
          </NavLink>
          <NavLink
            style={setActiveStyle}
            className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
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
