import { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AccordionCustomIcon } from "./Accordion";
import CopyCode from "./CopyCode";
import { useGetSpecificOfferQuery } from "../../../redux/features/lottery/lotteryApi";
import moment from "moment";
import CountDownTimer from "../../../shared/CountDownTimer/CountDownTimer";
import PropTypes from 'prop-types';

export function OfferDetailsModal({offerId}) {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const {data} = useGetSpecificOfferQuery(offerId)
  const {ExpieryDate, coupon_code, title} = data?.response?.offer || {};
  return (
    <>
      <div className="mb-3 flex gap-3">
        <button
          onClick={() => handleOpen("md")}
          // variant="gradient"
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
          <span className="text-[#25BF17] text-[2.5rem] font-bold italic ml-3">
            <CountDownTimer expieryDate={ExpieryDate}/>
          </span>
        </DialogHeader>
        <DialogBody
          style={{ backgroundImage: "linear-gradient(#36D1DC, #5B86E5)" }}
          className="rounded-[30px] text-white"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-[3rem] font-bold italic">{title}</h3>
            <Icon
              className="text-[1.5rem] text-white hover:text-white cursor-pointer"
              icon="maki:cross"
              onClick={() => handleOpen(null)}
            />
          </div>

          <div className="my-[1rem] border-dashed border-spacing-8 rounded-lg border-[0.1rem] border-gray-200 px-3 py-1 inline-block">
            <CopyCode code={coupon_code} />
          </div>

          <div className="text-[1.25rem]">
            <span className="text-[1.2rem]">Valid till:</span>
            <span className="text-[1.25rem] font-bold">
              {" "}
              {moment(ExpieryDate).format('LL')}
            </span>
          </div>

          <AccordionCustomIcon />
        </DialogBody>
      </Dialog>
    </>
  );
}

OfferDetailsModal.propTypes = {
  offerId:PropTypes.string
}
