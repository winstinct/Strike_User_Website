import React from "react";
import Header from "../shared/Header/Header";
import LeftSideBar from "../SideBars/LeftSideBar";
import Footer from "../shared/Footer/Footer";
import FAQRightSideBar from "../SideBars/FAQRightSideBar";
import { Outlet } from "react-router-dom";

export default function WithdrawAndDepositLayout() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <LeftSideBar />

      {/* Main Content */}
      <div className="flex-1 mt-[5rem]">
        <div className="py-[1.3rem] ml-[13.8rem]">
          <Outlet />
        </div>
        <Footer />
      </div>

      <FAQRightSideBar />
    </div>
  );
}
