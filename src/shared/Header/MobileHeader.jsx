import { Link, NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import demoUserImg from "../../assets/demo-user.jpg"

export default function MobileHeader() {
  const { currentUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  console.log("Currently logged in user from mobile header===> ", currentUser);
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="lg:px-[4rem] px-[1rem] py-[1rem] shadow-lg md:hidden block relative">
        <div className="flex items-center justify-between">
          <img src={strikeLogo} className="w-[100px]" alt="Site Logo" />
          <div className="flex items-center gap-[1rem]">
            <Icon className="text-[1.3rem]" icon="fluent:local-language-20-regular" />
            <Icon className="text-[1.3rem]" icon="mdi:bell-outline" />
            <Icon className="text-[1.3rem]" icon="lets-icons:bag" />
          </div>
          {isVisible ? (
            <Icon
              className="text-[2.5rem] cursor-pointer border-[1px] border-gray-300 rounded-md"
              icon="bitcoin-icons:cross-outline"
              onClick={() => setIsVisible(!isVisible)}
            />
          ) : (
            <Icon
              className="text-[2.5rem] cursor-pointer border-[1px] border-gray-300 rounded-md"
              icon="ic:sharp-menu"
              onClick={() => setIsVisible(!isVisible)}
            />
          )}
        </div>

        {isVisible && (
          <div className="flex flex-col justify-center gap-[1rem] py-[1.5rem] absolute left-0 z-50 bg-white w-full shadow-lg">
            <NavLink onClick={() => setIsVisible(!isVisible)} to="/">
              <p className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
                Home
              </p>
            </NavLink>
            <NavLink onClick={() => setIsVisible(!isVisible)} to="/offers">
              <p className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
                Offers
              </p>
            </NavLink>
            <NavLink onClick={() => setIsVisible(!isVisible)} to="/tickets">
              <p className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
                Tickets
              </p>
            </NavLink>
            <div className="py-2 px-5">
              {currentUser ? (
                <div>
                  <div className="flex items-center gap-2">
                  <p>Billal Hossain</p>
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={demoUserImg}
                    alt="user-avatar"
                  />
                </div>
                <button
                style={{
                  backgroundImage: "linear-gradient(#A967FF, #5500C3)",
                  boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="cursor-default mt-[2rem] rounded-[50px] py-[0.6rem] text-white flex justify-between items-center max-w-[180px]"
              >
                <Icon className="ml-3 text-[1.3rem]" icon="lets-icons:wallet" />
                <span className="mr-3">10600.00 Coins</span>
              </button>
                </div>
              ) : (
                <Link to="/auth/login">
                  <button
                    style={{
                      backgroundImage: "linear-gradient(#A967FF, #5500C3)",
                      boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
                    }}
                    className="text-white rounded-[50px] lg:py-[1rem] py-[0.5rem] lg:px-[3rem] px-[1.5rem]"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    Login/Signup
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
