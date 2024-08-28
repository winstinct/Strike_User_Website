import { NavLink, Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSideBar from "../../SideBars/LeftSideBar";
import Footer from "../../shared/Footer/Footer";
import RightSideBar from "../../SideBars/RightSideBar";
import { setActiveStyle } from "../../utils/setActiveStyle";
export default function Profile() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main>
      <div className="relative min-h-screen">
        <Header />
        <LeftSideBar />

        {/* Main Content */}
        <div className="flex-1 mt-[5rem]">
          <div className="py-[1.3rem] mx-[18rem]">
            <section>
              <h3 className="text-[2rem] font-bold italic">Account Details</h3>
              <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-[1.5rem]">
                <NavLink
                  style={setActiveStyle}
                  className="block border-[1px] border-gray-300 hover:border-[#5500C3] font-bold text-[1.25rem] italic hover:text-[#5500C3] duration-300 py-3 rounded-[10px] w-full text-center"
                  to="/profile"
                  end
                >
                  Personal Details
                </NavLink>
                <NavLink
                  style={setActiveStyle}
                  className="block border-[1px] border-gray-300 hover:border-[#5500C3] font-bold text-[1.25rem] italic hover:text-[#5500C3] duration-300 py-3 rounded-[10px] w-full text-center"
                  to="/profile/location-details"
                  end
                >
                  Location Details
                </NavLink>
                <NavLink
                  style={setActiveStyle}
                  className="block border-[1px] border-gray-300 hover:border-[#5500C3] font-bold text-[1.25rem] italic hover:text-[#5500C3] duration-300 py-3 rounded-[10px] w-full text-center"
                  to="/profile/contact-details"
                  end
                >
                  Contact Details
                </NavLink>
              </section>

              <Outlet />
              <div className="mt-[2rem]"><Footer /></div>
            </section>
          </div>
        </div>

        <RightSideBar />
      </div>
    </main>
  );
}
