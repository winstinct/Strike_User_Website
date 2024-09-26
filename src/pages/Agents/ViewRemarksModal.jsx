import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';

export default function ViewRemarksModal({ remarks }) {
  return (
    <Popup
      className=""
      trigger={
        <button className="">
          <button className="text-[#5500C3] font-bold flex items-center gap-1 cursor-pointer">
            <p>View Remarks</p>
            <Icon className="text-[1.3rem]" icon="hugeicons:view" />
          </button>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="">
          <div className="flex flex-col p-[1rem]">
            <div className="flex justify-end items-center w-full">
              <button
                onClick={close}
                className="text-[#FF0023] bg-[#FDE4E8] p-[3px] rounded-md"
              >
                <Icon icon="material-symbols:close" className="text-[1.5rem]" />
              </button>
            </div>
            <p>{remarks}</p>
          </div>
        </div>
      )}
    </Popup>
  );
}

ViewRemarksModal.propTypes = {
  remarks: PropTypes.string,
}
