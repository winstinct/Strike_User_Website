import { useNavigate } from "react-router-dom";
import networkErrorImg from "../assets/network-error.svg";

export default function DisplayNetworkError() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem]">
      <img src={networkErrorImg} alt="Network Issue Image" />
      <h3 className="text-[1.25rem] text-red-500 text-center">
        Opps! Something went wrong.
      </h3>
      <p>Could not connect to the internet. Please check your network.</p>
      <button
        onClick={() => window.location.reload()}
        className="gradientBg w-[350px] py-3 rounded-full text-white text-center"
      >
        Try Again
      </button>
    </div>
  );
}
