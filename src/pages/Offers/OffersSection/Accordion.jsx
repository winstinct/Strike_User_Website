import React from "react";
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
Icon.propTypes = {
  id:PropTypes.number,
  open:PropTypes.number
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className={`${
            !open
              ? "border-b border-[#a967ff5b]"
              : "border-b border-transparent"
          } pb-2 faq text-gray-300 hover:text-white text-[1rem]`}
          onClick={() => handleOpen(1)}
        >
          Eligible Lottery
        </AccordionHeader>
        <AccordionBody className="border-b border-[#a967ff5b]">
          <div className="grid grid-cols-3 gap-3 font-semibold">
            <button className="bg-white rounded-full px-5 py-1 text-[#212529] font-semibold">
              Achievers
            </button>
            <button className="bg-white rounded-full px-5 py-1 text-[#212529] font-semibold">
              Achievers
            </button>
            <button className="bg-white rounded-full px-5 py-1 text-[#212529] font-semibold">
              Achievers
            </button>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className={`${
            !open
              ? "border-b border-[#a967ff5b]"
              : "border-b border-transparent"
          } pb-2 faq text-gray-300 hover:text-white text-[1rem]`}
          onClick={() => handleOpen(2)}
        >
          Terms & Conditions
        </AccordionHeader>
        <AccordionBody className="border-b border-none text-gray-300">
          <div className="list-disc list-inside space-y-[1rem]">
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-gray-300 mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-gray-300 mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
            <div className="flex gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-gray-300 mt-1"></div>
              <p>
                Enter and stand a chance to win 13,000 Tether as prize. Don’t
                miss the chance and grab your ticket to enter the lottery today!
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
