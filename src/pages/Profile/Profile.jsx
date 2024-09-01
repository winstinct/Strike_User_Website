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
