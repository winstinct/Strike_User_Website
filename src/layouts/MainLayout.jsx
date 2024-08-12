import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { NavLink, Outlet } from "react-router-dom";
import LeftSideBar from "../SideBars/LeftSideBar";
import RightSideBar from "../SideBars/RightSideBar";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="block">
        {/* Left Sidebar */}
        <div className="bg-white shadow-2xl border-r-[1px] border-[#d3cccc] fixed top-[5.2rem] left-0 bottom-0 w-52 z-10">
          <LeftSideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-[5rem]">
          <div className="py-[1.3rem]"><Outlet /></div>
          <Footer />
        </div>

        {/* Right Sidebar */}
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
