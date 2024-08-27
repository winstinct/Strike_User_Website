import { Link, NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileHeader from "./MobileHeader";
import { useAuth } from "../../contexts/AuthContext";
import demoUserImg from "../../assets/demo-user.jpg";
import "./Header.css";
import NotificationModal from "../../pages/Notification/NotificationModal";
import { toggleNotificationModal } from "../../redux/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";

export default function Header() {
  const { currentUser } = useAuth();
  const { data, isLoading } = useGetUserDetailsQuery();
  const userImageUrl = data?.response?.UserData?.imageUrl;
  const dispatch = useDispatch();
  const { showNotificationModal } = useSelector((store) => store.notification);
  return (
    <>
      <header className="md:flex hidden justify-between items-center lg:px-[2rem] px-[1rem] py-[0.8rem] shadow-lg fixed w-full bg-white top-0 z-50">
        <div>
          <Link to="/">
            <img src={strikeLogo} className="w-[130px]" alt="Site Logo" />
          </Link>
        </div>
        <ul className="flex items-center large lg:gap-[3rem] gap-[1.5rem] text-[1rem] font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Offers</NavLink>
          </li>
          <li>
            <NavLink to="/tickets">Tickets</NavLink>
          </li>
        </ul>

        <div className="flex items-center lg:gap-[1rem] gap-[0.5rem]">
          {/* For Only Logged In User  */}
          {currentUser && (
            <>
              <button
                style={{
                  backgroundImage: "linear-gradient(#A967FF, #5500C3)",
                  boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="cursor-default rounded-[50px] py-[0.6rem] text-white flex justify-between items-center max-w-[180px]"
              >
                <Icon className="ml-3 text-[1.3rem]" icon="lets-icons:wallet" />
                <span className="mr-3">10600.00 Coins</span>
              </button>
              <div className="bg-gray-300 h-[50px] w-[3px]"></div>
            </>
          )}
          <Icon
            className="text-[1.5rem]"
            icon="fluent:local-language-20-regular"
          />
          {/* Notification Modal  */}
          {currentUser && (
           <> <div className="relative">
           <button
             onClick={() => dispatch(toggleNotificationModal())}
             className="bg-[#F6F6F8] p-[0.5rem] rounded-full cursor-pointer"
           >
             <Icon
               icon="mi:notification"
               className="text-[1.5rem] text-[#4D4D4D]"
             />
           </button>
           {showNotificationModal && (
             <div className="absolute top-[3.5rem] right-[-5rem] shadow-lg z-40 w-[25rem] bg-white">
               <NotificationModal />
             </div>
           )}
         </div>
         <Link to="/shopper-bag">
         <Icon className="text-[1.5rem]" icon="lets-icons:bag" />
       </Link></>
          )}
          <div className="bg-gray-300 h-[50px] w-[3px]"></div>
          {currentUser ? (
            <Link to="/profile">
              <div className="flex flex-col items-center">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={userImageUrl}
                  alt="user-avatar"
                />
                <p className="text-[14px]">{currentUser?.displayName}</p>
              </div>
            </Link>
          ) : (
            <Link to="/auth/login">
              <button
                style={{
                  backgroundImage: "linear-gradient(#A967FF, #5500C3)",
                  boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="text-white rounded-[50px] px-[1.5rem] py-[0.5rem]"
              >
                Login/Signup
              </button>
            </Link>
          )}
        </div>
      </header>
      <MobileHeader />
    </>
  );
}
