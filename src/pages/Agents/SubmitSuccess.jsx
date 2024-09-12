import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";

export default function SubmitSuccess() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  const location = useLocation();
  const { paymentType, utrNumber, date } = location.state || {};
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <Icon
          icon="mdi:tick"
          className="text-[5rem] text-white bg-[#25BF17] rounded-full p-4"
        />
        <h2 className="text-[20px] font-bold">Deposit Request Submitted!</h2>
        <p className="text-[14px]">
          Deposit request will be processed and accepted within a maximum of 5
          minutes.
        </p>
      </div>
      <div
        className="p-4 rounded-xl w-[80%]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <h1 className="text-[20px] font-bold mb-2">Payment Details</h1>
        <div className="grid grid-cols-2 text-[14px] text-[#858585] gap-2">
          <label htmlFor="coinsRequested" className="justify-self-start">
            Coins Requested
          </label>
          <p className="justify-self-end">{localStorage.getItem("selectedCoins")}</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            Payment Method{" "}
          </label>
          <p className="justify-self-end">{paymentType}</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            UTR Number{" "}
          </label>
          <p className="justify-self-end">{utrNumber}</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            Submitted Date and Time{" "}
          </label>
          <p className="justify-self-end">
            {moment(date).format("DD/MM/YYYY - hh:mm A")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/tickets")}
          className="font-medium gradientBg text-white py-2 w-[300px] rounded-[50px]"
        >
          View my Tickets
        </button>
        <button
          onClick={() => navigate("/wallet")}
          className="font-medium gradientBg text-white py-2 w-[300px] rounded-[50px]"
        >
          Back to Wallet
        </button>
      </div>
    </div>
  );
}
