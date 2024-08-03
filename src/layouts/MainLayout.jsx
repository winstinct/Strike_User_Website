import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/forgot-password" ||
      pathname === "/otp-verification" ||
      pathname === "/set-password" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
}
