import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";

function CustomIcon({ id, open }) {
  return (
    <div>
      {id == open ? (
        <Icon
          className={`${
            id === open ? "rotate-180" : ""
          } h-7 w-7 transition-transform`}
          icon="ic:round-minus"
        />
      ) : (
        <Icon
          className={`${
            id === open ? "rotate-180" : ""
          } h-7 w-7 transition-transform`}
          icon="ic:round-plus"
        />
      )}
    </div>
  );
}

export function AccordionFaq({ qna }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const {t} = useTranslation()

  return (
    <Accordion
      open={open === qna.id}
      icon={<CustomIcon id={qna.id} open={open} />}
    >
      <AccordionHeader
        className={`${
          !open
            ? "border-b-[2px] border-gray-200"
            : "border-b border-transparent"
        } pb-5 text-[1.25rem] faq font-['Inter']`}
        onClick={() => handleOpen(qna.id)}
      >
        {t(qna?.question)}
      </AccordionHeader>
      <AccordionBody className="border-b-[2px] border-gray-200">
        <p className="text-[1rem] text-[#000] faq font-['Inter'] font-medium">
          {t(qna?.answer)}
        </p>
      </AccordionBody>
    </Accordion>
  );
}

CustomIcon.propTypes = {
  id: PropTypes.number,
  open: PropTypes.number,
};

AccordionFaq.propTypes = {
  qna: PropTypes.object,
};
