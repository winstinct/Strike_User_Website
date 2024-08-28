import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../SideBars/LeftSideBar";
import RightSideBar from "../SideBars/RightSideBar";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <LeftSideBar />

      {/* Main Content */}
      <div className="flex-1 mt-[5.5rem]">
        <div className="py-[1.3rem] mx-[18rem]">
        <Outlet />
        <Footer />
        </div>
      </div>

      <RightSideBar />
    </div>
  );
}
