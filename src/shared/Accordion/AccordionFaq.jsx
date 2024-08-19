import { useState } from "react";
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

export function AccordionFaq({qna}) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
        <Accordion open={open === qna.id} icon={<Icon id={qna.id} open={open} />}>
          <AccordionHeader
            className={`${
              !open ? "border-b-[2px] border-gray-200" : "border-b border-transparent"
            } pb-2 text-[1rem] faq`}
            onClick={() => handleOpen(qna.id)}
          >
            {qna?.question}
          </AccordionHeader>
          <AccordionBody className="border-b-[2px] border-gray-200">
            <p className="text-[0.9rem] md:font-light font-normal text-[#000] faq">
              {qna?.answer}
            </p>
          </AccordionBody>
        </Accordion>
  );
}
