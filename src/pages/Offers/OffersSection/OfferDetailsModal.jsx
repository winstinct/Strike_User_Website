import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccordionCustomIcon } from "./Accordion";
import CopyCode from "./CopyCode";

export function OfferDetailsModal() {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  return (
    <>
      <div className="mb-3 flex gap-3">
        <button
          onClick={() => handleOpen("md")}
          variant="gradient"
          className="flex items-center justify-center p-1 gap-2 bg-white text-black w-full rounded-[20px]"
        >
          <span className="font-semibold">Learn More</span>
          <Icon className="text-[1.7rem]" icon="ic:round-arrow-right-alt" />
        </button>
      </div>
      <Dialog
        open={size === "md"}
        size={size || "md"}
        handler={handleOpen}
        className="rounded-[30px]"
      >
        <DialogHeader className="rounded-t-[30px] flex justify-center items-center">
          <span className="text-[1.5rem] font-semibold">Offer ends in:</span>
          <span className="text-[#25BF17] text-[2.5rem] font-bold">
            10:18:03:10
          </span>
        </DialogHeader>
        <DialogBody className="gradientBg rounded-[30px] text-white">
          <div className="flex justify-between items-center">
            <h3 className="text-[3rem] font-bold">Buy ONE Get ONE</h3>
            <Icon
              className="text-[1.5rem] text-gray-300 hover:text-white cursor-pointer"
              icon="maki:cross"
              onClick={() => handleOpen(null)}
            />
          </div>

          <div className="my-[1rem]"><CopyCode code="BUYONEGETONE"/></div>

          <div className="text-[1.25rem]">
            <span className="text-[1.2rem]">Valid till:</span>
            <span className="text-[1.25rem] font-bold">
              {" "}
              10th October, 2023
            </span>
          </div>

          <AccordionCustomIcon />
        </DialogBody>
      </Dialog>
    </>
  );
}
