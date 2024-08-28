import { Link, NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileHeader from "./MobileHeader";
import "./Header.css";

export default function AuthHeader() {
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
          <Icon
            className="text-[1.5rem]"
            icon="fluent:local-language-20-regular"
          />
          <div className="bg-gray-300 h-[50px] w-[3px]"></div>
          <div className="w-[150px]"></div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
}
