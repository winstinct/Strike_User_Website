import { Link, NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileHeader from "./MobileHeader";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";
import NotificationModal from "../../pages/Notification/NotificationModal";
import { toggleNotificationModal } from "../../redux/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../../redux/features/auth/authApi";
import { useGetAllCartItemsQuery } from "../../redux/features/cart/cartApi";
import AvatarSkeleton from "./AvatarSkeleton";

export default function Header() {
  const { currentUser } = useAuth();
  const { data } = useGetUserDetailsQuery();
  const userImageUrl = data?.response?.UserData?.imageUrl;
  const dispatch = useDispatch();
  const { showNotificationModal } = useSelector((store) => store.notification);
  const { data: cartData } = useGetAllCartItemsQuery();
  const totalAddedItems = cartData?.response?.cart?.length;
  return (
    <>
      <header className="md:flex hidden justify-between items-center lg:px-[2rem] px-[1rem] py-[0.8rem] border-b-[1px] border-b-[#D9D9D9] fixed w-full bg-white top-0 z-50">
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
                <span className="mr-3">
                  {data?.response?.UserData?.wallet} Coins
                </span>
              </button>
              <div className="bg-gray-300 h-[50px] w-[3px]"></div>
            </>
          )}
          <div className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.8583 2.28564C14.5552 2.28564 14.2645 2.40605 14.0501 2.62038C13.8358 2.83471 13.7154 3.1254 13.7154 3.4285C13.7154 3.73161 13.8358 4.0223 14.0501 4.23662C14.2645 4.45095 14.5552 4.57136 14.8583 4.57136H20.5714V7.4285C20.5714 8.37479 20.2103 9.04793 19.6571 9.50507C19.0788 9.98165 18.2114 10.2856 17.1428 10.2856C16.8397 10.2856 16.549 10.4061 16.3347 10.6204C16.1204 10.8347 16 11.1254 16 11.4285C16 11.7316 16.1204 12.0223 16.3347 12.2366C16.549 12.451 16.8397 12.5714 17.1428 12.5714C18.6228 12.5714 20.0423 12.1519 21.1131 11.2674C22.2057 10.3622 22.8571 9.03536 22.8571 7.4285V3.4285C22.8571 3.1254 22.7367 2.83471 22.5224 2.62038C22.3081 2.40605 22.0174 2.28564 21.7143 2.28564H14.8583ZM12.4891 8.70279C12.403 8.49318 12.2565 8.31389 12.0683 8.18772C11.8801 8.06155 11.6586 7.99418 11.432 7.99418C11.2054 7.99418 10.9839 8.06155 10.7956 8.18772C10.6074 8.31389 10.4609 8.49318 10.3748 8.70279L2.37254 28.1359C2.25706 28.4163 2.25768 28.7311 2.37428 29.011C2.49087 29.2909 2.71388 29.513 2.99425 29.6285C3.27463 29.744 3.58939 29.7434 3.8693 29.6268C4.14921 29.5102 4.37134 29.2872 4.48683 29.0068L6.55197 23.9896H16.312L18.3771 29.0068C18.4343 29.1456 18.5183 29.2718 18.6242 29.3782C18.7302 29.4846 18.856 29.569 18.9946 29.6268C19.1332 29.6845 19.2818 29.7144 19.432 29.7147C19.5821 29.715 19.7309 29.6857 19.8697 29.6285C20.0085 29.5713 20.1347 29.4874 20.2411 29.3814C20.3475 29.2754 20.4319 29.1496 20.4897 29.011C20.5474 28.8724 20.5773 28.7238 20.5776 28.5736C20.5779 28.4235 20.5486 28.2748 20.4914 28.1359L18.2514 22.6959C18.2255 22.5003 18.149 22.3148 18.0297 22.1576L12.4891 8.70279ZM15.3703 21.7051H7.49254L11.432 12.1394L15.3703 21.7051ZM25.1428 2.28564C25.4459 2.28564 25.7366 2.40605 25.951 2.62038C26.1653 2.83471 26.2857 3.1254 26.2857 3.4285V9.14279H28.5714C28.8745 9.14279 29.1652 9.2632 29.3795 9.47752C29.5938 9.69185 29.7143 9.98254 29.7143 10.2856C29.7143 10.5887 29.5938 10.8794 29.3795 11.0938C29.1652 11.3081 28.8745 11.4285 28.5714 11.4285H26.2857V21.7142C26.2857 22.0173 26.1653 22.308 25.951 22.5223C25.7366 22.7367 25.4459 22.8571 25.1428 22.8571C24.8397 22.8571 24.549 22.7367 24.3347 22.5223C24.1204 22.308 24 22.0173 24 21.7142V3.4285C24 3.1254 24.1204 2.83471 24.3347 2.62038C24.549 2.40605 24.8397 2.28564 25.1428 2.28564Z"
                fill="black"
              />
            </svg>
            {/* Notification Modal  */}
            {currentUser && (
              <>
                <div className="relative">
                  <button
                    onClick={() => dispatch(toggleNotificationModal())}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M8.59712 10.6259C9.01625 6.85376 12.2047 4 16 4V4C19.7953 4 22.9838 6.85376 23.4029 10.6259L23.7386 13.6475C23.7429 13.686 23.745 13.7053 23.7472 13.7243C23.9191 15.2226 24.4068 16.6674 25.1781 17.9633C25.1879 17.9798 25.1979 17.9964 25.2178 18.0297L25.9885 19.3142C26.6879 20.4798 27.0376 21.0627 26.9621 21.5411C26.9119 21.8595 26.748 22.1489 26.5009 22.3558C26.1295 22.6667 25.4498 22.6667 24.0904 22.6667H7.90964C6.55024 22.6667 5.87055 22.6667 5.49912 22.3558C5.25197 22.1489 5.08811 21.8595 5.03788 21.5411C4.96239 21.0627 5.31209 20.4799 6.01149 19.3142L6.78221 18.0297C6.80215 17.9964 6.81212 17.9798 6.82192 17.9633C7.59317 16.6674 8.08085 15.2226 8.25278 13.7243C8.25497 13.7053 8.25711 13.686 8.26139 13.6475L8.59712 10.6259Z"
                        stroke="#1A1A1A"
                        strokeWidth="2.66667"
                      />
                      <path
                        d="M10.6666 22.6667C10.6666 23.367 10.8045 24.0606 11.0726 24.7076C11.3406 25.3547 11.7334 25.9427 12.2287 26.4379C12.7239 26.9331 13.3119 27.326 13.9589 27.594C14.606 27.862 15.2995 28 15.9999 28C16.7003 28 17.3938 27.862 18.0409 27.594C18.688 27.326 19.2759 26.9331 19.7712 26.4379C20.2664 25.9427 20.6593 25.3547 20.9273 24.7076C21.1953 24.0606 21.3333 23.367 21.3333 22.6667"
                        stroke="#1A1A1A"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {showNotificationModal && (
                      <NotificationModal />
                  )}
                </div>
                <Link to="/shopper-bag">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M10.6667 10.6665L10.6667 9.33317C10.6667 6.38765 13.0546 3.99984 16.0001 3.99984V3.99984C18.9456 3.99984 21.3334 6.38765 21.3334 9.33317L21.3334 10.6665"
                        stroke="#212529"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                      />
                      <path
                        d="M20 18.6667V16"
                        stroke="#212529"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 18.6667V16"
                        stroke="#212529"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.33325 15.9998C5.33325 13.4857 5.33325 12.2286 6.1143 11.4476C6.89535 10.6665 8.15243 10.6665 10.6666 10.6665H21.3332C23.8474 10.6665 25.1045 10.6665 25.8855 11.4476C26.6666 12.2286 26.6666 13.4857 26.6666 15.9998V17.3332C26.6666 22.3615 26.6666 24.8756 25.1045 26.4377C25.1045 26.4377 25.1045 26.4377 25.1045 26.4377C23.5424 27.9998 21.0282 27.9998 15.9999 27.9998V27.9998C10.9716 27.9998 8.45745 27.9998 6.89535 26.4377C6.89535 26.4377 6.89535 26.4377 6.89535 26.4377C5.33325 24.8756 5.33325 22.3615 5.33325 17.3332V15.9998Z"
                        stroke="#212529"
                        strokeWidth="2.66667"
                      />
                    </svg>
                    {totalAddedItems > 0 && (
                      <p className="absolute top-1 right-[-3px] font-bold bg-red-500 text-white text-[10px] flex justify-center items-center rounded-full p-[1px] h-4 w-4">
                        {totalAddedItems}
                      </p>
                    )}
                  </div>
                </Link>
              </>
            )}
          </div>
          <div className="bg-gray-300 h-[50px] w-[3px]"></div>
          {currentUser ? (
            <Link to="/profile">
              {currentUser?.displayName && userImageUrl ? (<div className="flex items-center gap-2">
                <p className="text-[14px]">{currentUser?.displayName}</p>
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={userImageUrl}
                  alt="user-avatar"
                />
              </div>) : <AvatarSkeleton/>}
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
