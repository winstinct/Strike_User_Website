import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccordionCustomIcon } from "./Accordion";

export function OfferDetailsModal() {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("md")} variant="gradient">
          Open Dialog sm
        </Button>
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
              className="text-[1.5rem] text-gray-300 cursor-pointer"
              icon="maki:cross"
              onClick={() => handleOpen(null)}
            />
          </div>

          <div className="flex items-center gap-1">
            <div>
              <span>Code:</span> <span className="font-bold">BUYONEGETONE</span>
            </div>
            <Icon
              className="text-[1.5rem] cursor-pointer"
              icon="bitcoin-icons:copy-outline"
            />
          </div>

          <AccordionCustomIcon/>
        </DialogBody>
      </Dialog>
    </>
  );
}
