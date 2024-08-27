import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import "./LeftSideBar.css";

export default function LeftSideBar() {
  const { logout, currentUser } = useAuth();
  const { displayName, email, phoneNumber } = currentUser || {};
  const navigate = useNavigate();
  const handleLogout = async () => {
    const isLogout = confirm("Are you sure ?");
    if (!isLogout) {
      return;
    }
    try {
      await logout();
      toast.success("Successfully logged out.");
      navigate("/auth/login");
    } catch (error) {
      toast.error("There was something wrong.");
    }
  };
  return (
    <div className="px-3 pt-[6rem] w-52 h-[100vh] overflow-y-auto fixed left-0 top-0 shadow-2xl border-r-[1px] border-gray-300">
      <ul className="space-y-[0.2rem] text-[16px] left-sidebar">
        {/*Display For Only Logged In User  */}
        {currentUser && (
          <div className="space-y-[1rem]">
            <li className="text-[1rem] text-center">
              <h3 className="font-bold">{displayName}</h3>
              <div className="text-[14px] font-medium">
                <p>{phoneNumber}</p>
                <p>{email}</p>
              </div>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md"
              >
                <Icon className="text-[1.3rem]" icon="clarity:user-line" />
                <span>Account Details</span>
              </NavLink>
            </li>
          </div>
        )}
        <li>
          <NavLink to="/become-public-agent" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon className="text-[1.3rem]" icon="heroicons:user-group" />
            <span>Become Agent</span>
          </NavLink>
        </li>
        {/* <li>
            <NavLink className="flex items-center font-medium gap-[0.8rem] hover:text-[#A967FF]">
            <span>Become a Private Lottery Agent</span>
            </NavLink>
          </li> */}
        <li>
          <NavLink to="/wish-list" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon className="text-[1.3rem]" icon="weui:like-outlined" />
            <span>Wishlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/deposit-history" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon
              className="text-[1.3rem]"
              icon="material-symbols-light:history"
            />
            <span>Deposit History</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/preferences" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon className="text-[1.3rem]" icon="weui:setting-outlined" />
            <span>Preferences</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon className="text-[1.3rem]" icon="ph:question" />
            <span>F.A.Q</span>
          </NavLink>
        </li>
        <li>
          <Link to="https://dashboard.tawk.to/login#/chat" target="_blank" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon className="text-[1.3rem]" icon="fluent:chat-20-regular" />
            <span>Chat Support</span>
          </Link>
        </li>
        <li>
          <NavLink to="/refer-and-earn" className="flex items-center font-medium gap-[0.3rem] hover:text-[#2e8e26] p-2 rounded-md">
            <Icon
              className="text-[1.3rem]"
              icon="lets-icons:group-share-light"
            />
            <span>Refer & Earn</span>
          </NavLink>
        </li>
        {/*Display For Only Logged In User  */}
        {currentUser && (
          <li>
            <div
              onClick={handleLogout}
              className="flex items-center font-medium gap-[0.3rem] cursor-pointer text-red-500"
            >
              <Icon className="text-[1.3rem]" icon="ic:baseline-logout" />
              <span>Logout</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
