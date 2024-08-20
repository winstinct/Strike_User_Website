import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";

export default function BecomePublicAgent() {
  return (
    <main className="mr-[16.5rem]">
      <h3 className="text-[2rem] font-bold italic">Become an Agent</h3>
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

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-[1.5rem]">
        <NavLink
          style={setActiveStyle}
          className="border-[1px] border-gray-300 rounded-3xl py-3 hover:bg-[#5500C3] duration-300 text-[1.25rem] font-bold italic hover:text-white block text-center"
          to=""
          end
        >
          Personal Details
        </NavLink>
        <NavLink
          style={setActiveStyle}
          className="border-[1px] border-gray-300 rounded-3xl py-3 hover:bg-[#5500C3] duration-300 text-[1.25rem] font-bold italic hover:text-white block text-center"
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
