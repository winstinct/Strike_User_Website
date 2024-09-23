import strikeLogo from "../../assets/strike-logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import NotificationModal from "../../pages/Notification/NotificationModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LanguageModal from "../../pages/LanguageTranslation/LanguageModal";
import { toggleLanguageModal } from "../../redux/languageSlice";

export default function MobileHeader() {
  const dispatch = useDispatch()
  const { currentUser } = useAuth();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { isLanguageModalVisible } = useSelector((store) => store.language);
  return (
    <div className="sticky top-0 z-50 bg-white p-3">
      <header
        style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.20)" }}
        className="top-0 w-full bg-white rounded-[20px] px-[1.5rem] py-[1rem] md:hidden block"
      >
        <div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={strikeLogo} className="w-[100px]" alt="Site Logo" />
            </Link>
            <div className="flex items-center gap-[1rem]">
            <div className="relative">
              <button
                onClick={() => dispatch(toggleLanguageModal())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M14.8583 2.28564C14.5552 2.28564 14.2645 2.40605 14.0501 2.62038C13.8358 2.83471 13.7154 3.1254 13.7154 3.4285C13.7154 3.73161 13.8358 4.0223 14.0501 4.23662C14.2645 4.45095 14.5552 4.57136 14.8583 4.57136H20.5714V7.4285C20.5714 8.37479 20.2103 9.04793 19.6571 9.50507C19.0788 9.98165 18.2114 10.2856 17.1428 10.2856C16.8397 10.2856 16.549 10.4061 16.3347 10.6204C16.1204 10.8347 16 11.1254 16 11.4285C16 11.7316 16.1204 12.0223 16.3347 12.2366C16.549 12.451 16.8397 12.5714 17.1428 12.5714C18.6228 12.5714 20.0423 12.1519 21.1131 11.2674C22.2057 10.3622 22.8571 9.03536 22.8571 7.4285V3.4285C22.8571 3.1254 22.7367 2.83471 22.5224 2.62038C22.3081 2.40605 22.0174 2.28564 21.7143 2.28564H14.8583ZM12.4891 8.70279C12.403 8.49318 12.2565 8.31389 12.0683 8.18772C11.8801 8.06155 11.6586 7.99418 11.432 7.99418C11.2054 7.99418 10.9839 8.06155 10.7956 8.18772C10.6074 8.31389 10.4609 8.49318 10.3748 8.70279L2.37254 28.1359C2.25706 28.4163 2.25768 28.7311 2.37428 29.011C2.49087 29.2909 2.71388 29.513 2.99425 29.6285C3.27463 29.744 3.58939 29.7434 3.8693 29.6268C4.14921 29.5102 4.37134 29.2872 4.48683 29.0068L6.55197 23.9896H16.312L18.3771 29.0068C18.4343 29.1456 18.5183 29.2718 18.6242 29.3782C18.7302 29.4846 18.856 29.569 18.9946 29.6268C19.1332 29.6845 19.2818 29.7144 19.432 29.7147C19.5821 29.715 19.7309 29.6857 19.8697 29.6285C20.0085 29.5713 20.1347 29.4874 20.2411 29.3814C20.3475 29.2754 20.4319 29.1496 20.4897 29.011C20.5474 28.8724 20.5773 28.7238 20.5776 28.5736C20.5779 28.4235 20.5486 28.2748 20.4914 28.1359L18.2514 22.6959C18.2255 22.5003 18.149 22.3148 18.0297 22.1576L12.4891 8.70279ZM15.3703 21.7051H7.49254L11.432 12.1394L15.3703 21.7051ZM25.1428 2.28564C25.4459 2.28564 25.7366 2.40605 25.951 2.62038C26.1653 2.83471 26.2857 3.1254 26.2857 3.4285V9.14279H28.5714C28.8745 9.14279 29.1652 9.2632 29.3795 9.47752C29.5938 9.69185 29.7143 9.98254 29.7143 10.2856C29.7143 10.5887 29.5938 10.8794 29.3795 11.0938C29.1652 11.3081 28.8745 11.4285 28.5714 11.4285H26.2857V21.7142C26.2857 22.0173 26.1653 22.308 25.951 22.5223C25.7366 22.7367 25.4459 22.8571 25.1428 22.8571C24.8397 22.8571 24.549 22.7367 24.3347 22.5223C24.1204 22.308 24 22.0173 24 21.7142V3.4285C24 3.1254 24.1204 2.83471 24.3347 2.62038C24.549 2.40605 24.8397 2.28564 25.1428 2.28564Z"
                    fill="black"
                  />
                </svg>
              </button>
              {isLanguageModalVisible && <LanguageModal />}
            </div>
              {/* Notification Modal  */}
              {currentUser ? (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setIsVisibleModal(!isVisibleModal)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M6.44784 8.46942C6.76219 5.64032 9.15349 3.5 12 3.5V3.5C14.8465 3.5 17.2378 5.64032 17.5522 8.46942L17.804 10.7356C17.8072 10.7645 17.8088 10.779 17.8104 10.7933C17.9394 11.9169 18.3051 13.0005 18.8836 13.9725C18.8909 13.9849 18.8984 13.9973 18.9133 14.0222L19.4914 14.9856C20.0159 15.8599 20.2782 16.297 20.2216 16.6559C20.1839 16.8946 20.061 17.1117 19.8757 17.2668C19.5971 17.5 19.0873 17.5 18.0678 17.5H5.93223C4.91268 17.5 4.40291 17.5 4.12434 17.2668C3.93897 17.1117 3.81609 16.8946 3.77841 16.6559C3.72179 16.297 3.98407 15.8599 4.50862 14.9856L5.08665 14.0222C5.10161 13.9973 5.10909 13.9849 5.11644 13.9725C5.69488 13.0005 6.06064 11.9169 6.18959 10.7933C6.19123 10.779 6.19283 10.7645 6.19604 10.7356L6.44784 8.46942Z"
                          stroke="#1A1A1A"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 17.5C8 18.0253 8.10346 18.5454 8.30448 19.0307C8.5055 19.516 8.80014 19.957 9.17157 20.3284C9.54301 20.6999 9.98396 20.9945 10.4693 21.1955C10.9546 21.3965 11.4747 21.5 12 21.5C12.5253 21.5 13.0454 21.3965 13.5307 21.1955C14.016 20.9945 14.457 20.6999 14.8284 20.3284C15.1999 19.957 15.4945 19.516 15.6955 19.0307C15.8965 18.5454 16 18.0253 16 17.5"
                          stroke="#1A1A1A"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    {isVisibleModal && (
                      <div className="absolute top-[3.5rem] right-[-5rem] shadow-lg z-40 w-[25rem] bg-white">
                        <NotificationModal />
                      </div>
                    )}
                  </div>
                  <Link to="/shopper-bag">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M8 8.5L8 7.5C8 5.29086 9.79086 3.5 12 3.5V3.5C14.2091 3.5 16 5.29086 16 7.5L16 8.5"
                        stroke="#212529"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15 14.5V12.5"
                        stroke="#212529"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 14.5V12.5"
                        stroke="#212529"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 12.5C4 10.6144 4 9.67157 4.58579 9.08579C5.17157 8.5 6.11438 8.5 8 8.5H16C17.8856 8.5 18.8284 8.5 19.4142 9.08579C20 9.67157 20 10.6144 20 12.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5V21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V12.5Z"
                        stroke="#212529"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </>
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
          </div>
        </div>
      </header>
    </div>
  );
}
