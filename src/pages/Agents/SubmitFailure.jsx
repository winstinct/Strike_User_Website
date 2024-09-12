import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export default function SubmitFailure() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <Icon
          icon="gridicons:cross"
          className="text-[5rem] text-white bg-[#C0001B] rounded-full p-4"
        />
        <h2 className="text-[20px] font-bold">Deposit Request Failed!</h2>
        <p className="text-[14px]">
          We are sorry, your deposit request submission failed. Please try again
          or contact support.
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
          <p className="justify-self-end">1000</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            Payment Method{" "}
          </label>
          <p className="justify-self-end">Bank Transfer</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            UTR Number{" "}
          </label>
          <p className="justify-self-end">12345678955666</p>
          <label htmlFor="coinsRequested" className="justify-self-start">
            Submitted Date and Time{" "}
          </label>
          <p className="justify-self-end">26/06/2024 - 12:10 PM</p>
        </div>
      </div>
      <button onClick={() => navigate("/deposit")} className="font-medium gradientBg text-white py-2 w-[300px] rounded-[50px]">
        Retry
      </button>
    </div>
  );
}
