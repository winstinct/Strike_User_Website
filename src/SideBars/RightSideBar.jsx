import { Link } from "react-router-dom";
import lotteryNameImg from "../assets/lottery-name.svg";
import personImg from "../assets/person-illustrator.png";
import walletImg from "../assets/wallet-illustration.svg";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function RightSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`bg-white shadow-2xl border-l-[1px] border-[#d3cccc] fixed pt-[5.5rem] bottom-0 w-52 z-10 px-1 h-[600px] overflow-visible duration-300 min-h-screen overflow-y-auto ${isCollapsed ? 'right-[-12rem]' : 'right-0'}`}
    >
      {/* <p className="absolute top-[0.5rem] right-[11.8rem] cursor-pointer border-[1px] bg-white hover:bg-[#A967FF] duration-200 hover:text-white border-gray-300 rounded-md shadow-lg z-50">
        {isCollapsed ? (
          <Icon
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-[2rem]"
            icon="solar:alt-arrow-left-outline"
          />
        ) : (
          <Icon
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-[2rem]"
            icon="solar:alt-arrow-right-outline"
          />
        )}
      </p> */}
      <div>
        <div>
          <img src={lotteryNameImg} alt="" />
          <div className="flex justify-center items-center relative my-[0.5rem]">
            <img className="max-h-[130px]" src={personImg} alt="" />
            <img
              className="absolute bottom-0 right-0 max-w-[70px]"
              src={walletImg}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-[1rem] text-center">
          <h3 className="text-[1.25rem] font-bold">Login to check wallet</h3>
          <p className="text-[14px]">
            Login to check wallet and offers to buy lotteries
          </p>
          <div>
            <Link to="/auth/login">
              <button className="submitBtn w-full">Login/Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
