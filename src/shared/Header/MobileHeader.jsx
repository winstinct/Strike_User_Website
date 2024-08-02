import { NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function MobileHeader() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header className="lg:px-[4rem] px-[1rem] py-[1rem] shadow-lg md:hidden block relative">
      <div className="flex items-center justify-between">
        <img src={strikeLogo} className="w-[100px]" alt="Site Logo" />
        <div className="flex items-center gap-[1rem]">
          <Icon className="text-[2rem]" icon="mdi:bell-outline" />
          <Icon className="text-[2rem]" icon="lets-icons:bag" />
        </div>
        {isVisible ? (
          <Icon
            className="text-[2.5rem] cursor-pointer border-[1px] border-gray-300 rounded-md"
            icon="bitcoin-icons:cross-outline"
            onClick={()=>setIsVisible(!isVisible)}
          />
        ) : (
          <Icon
            className="text-[2.5rem] cursor-pointer border-[1px] border-gray-300 rounded-md"
            icon="ic:sharp-menu"
            onClick={()=>setIsVisible(!isVisible)}
          />
        )}
      </div>

      {isVisible && (<ul className="flex flex-col justify-center gap-[1rem] py-[1.5rem] absolute left-0 bg-white w-full shadow-lg">
        <li className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
          <NavLink to="">Offers</NavLink>
        </li>
        <li className="hover:bg-gray-300 py-2 px-5 cursor-pointer select-none">
          <NavLink to="">Tickets</NavLink>
        </li>
        <li className="py-2 px-5 cursor-pointer">
          <button
            style={{
              backgroundImage: "linear-gradient(#A967FF, #5500C3)",
              boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
            }}
            className="text-white rounded-[50px] lg:py-[1rem] py-[0.5rem] lg:px-[3rem] px-[1.5rem]"
          >
            Login/Signup
          </button>
        </li>
      </ul>)}
    </header>
  );
}
