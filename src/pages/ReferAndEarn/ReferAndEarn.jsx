import React from "react";
import CopyCodeReferAndEarn from "./CopyCodeReferAndEarn";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ReferAndEarn() {
  return (
    <main className="mr-[16.5rem]">
      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="rounded-lg p-3"
      >
        <h3 className="font-bold text-[2rem] italic">Refer and Earn</h3>
        <div className="space-y-[0.8rem]">
          <p className="text-[1.25rem] font-semibold">Invite Code</p>
          <p className="text-[14px]">
            Invite your friends & family to earn 10 coins per invite.
          </p>

          <div>
            <CopyCodeReferAndEarn code="SUD31SA" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 text-[1.5rem] mt-[0.8rem]">
          <Icon className="cursor-pointer" icon="mingcute:whatsapp-fill" />
          <Icon className="cursor-pointer" icon="ic:baseline-facebook" />
          <Icon
            className="cursor-pointer"
            icon="entypo-social:linkedin-with-circle"
          />
          <Icon className="text-gray-700 cursor-pointer" icon="bi:three-dots" />
        </div>
      </div>

      <div className="gradientBg text-white text-center rounded-[20px] p-2 mt-[2rem]">
        <p className="text-[1rem] font-semibold">Total Earnings</p>
        <h3 className="font-bold italic">
          <span className="text-[2rem]">100.00</span>{" "}
          <span className="text-[1.25rem]">Coins</span>
        </h3>
        <p className="text-[14px]">Invite more and keep earning</p>
      </div>

      {/* Filter Buttons  */}
      <div className="flex items-center justify-between mt-[2rem]">
        <div className="flex items-center gap-3">
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">All</button>
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">Completed</button>
          <button className="rounded-full w-[120px] py-2 border-[1px] border-[#5500C3] hover:bg-[#5500C3] hover:text-white duration-300">Pending</button>
        </div>
        <div>Sort</div>
      </div>
    </main>
  );
}
