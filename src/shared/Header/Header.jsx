import { Link, NavLink } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
    <header className="md:flex hidden justify-between items-center lg:px-[4rem] px-[1rem] py-[0.3rem] shadow-lg">
      <div>
        <Link to="/"><img src={strikeLogo} className="min-w-[130px]" alt="Site Logo" /></Link>
      </div>
      <ul className="flex items-center lg:gap-[3rem] gap-[1.5rem] text-[1.25rem] font-medium">
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

      <div className="flex items-center lg:gap-[1.50rem] gap-[0.5rem]">
        <Icon className="text-[2rem]" icon="mdi:bell-outline" />
        <Icon className="text-[2rem]" icon="lets-icons:bag" />
        <div className="bg-gray-300 h-[50px] w-[2px]"></div>
        <Link to="/login">
        <button
          style={{
            backgroundImage: "linear-gradient(#A967FF, #5500C3)",
            boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="text-white rounded-[50px] lg:py-[1rem] py-[0.5rem] lg:px-[3rem] px-[1.5rem]"
        >
          Login/Signup
        </button>
        </Link>
      </div>
      
    </header>
    <MobileHeader/>
    </>
  );
}
