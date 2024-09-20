import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "../SideBars/LeftSideBar";
import RightSideBar from "../SideBars/RightSideBar";
import FAQRightSideBar from "../SideBars/FAQRightSideBar";
import { isRenderFaqSidebar } from "../utils/isRenderFaqSidebar";
import MobileNavBar from "../shared/MobileNavBar/MobileNavBar";
import { isRenderMobileNavBar } from "../utils/isRenderMobileNavBar";
import { useDispatch, useSelector } from "react-redux";
import { hideNotificationModal } from "../redux/notificationSlice";
import { hideLanguageModal } from "../redux/languageSlice";

export default function MainLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { showNotificationModal } = useSelector((store) => store.notification);
  const { isLanguageModalVisible } = useSelector((store) => store.language);

  const hideModalsHandler = () => {
    if (showNotificationModal) {
      dispatch(hideNotificationModal());
    }
    if (isLanguageModalVisible) {
      dispatch(hideLanguageModal());
    }
  };

  return (
    <div onClick={hideModalsHandler} className="relative min-h-screen">
      <Header />
      <LeftSideBar />
      <div className="flex-1 md:mt-[7rem] mt-[2rem] md:mx-[20rem] mx-[1rem]">
        <Outlet />
        <div className="my-[3rem]">
          <Footer />
          {isRenderMobileNavBar(location) && <MobileNavBar />}
        </div>
      </div>
      {isRenderFaqSidebar(location) ? <FAQRightSideBar /> : <RightSideBar />}
    </div>
  );
}
