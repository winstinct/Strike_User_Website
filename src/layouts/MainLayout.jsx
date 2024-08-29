import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "../SideBars/LeftSideBar";
import RightSideBar from "../SideBars/RightSideBar";
import FAQRightSideBar from "../SideBars/FAQRightSideBar";
import { isRenderFaqSidebar } from "../utils/isRenderFaqSidebar";

export default function MainLayout() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen">
      <Header />
      <LeftSideBar />
      <div className="flex-1 mt-[7rem] mx-[20rem]">
        <Outlet />
        <div className="my-[3rem]">
          <Footer />
        </div>
      </div>
      {isRenderFaqSidebar(location) ? <FAQRightSideBar /> : <RightSideBar />}
    </div>
  );
}
