import { Progress } from "@material-tailwind/react";
import popularLotteryImg from "../../assets/popular-lottery.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function WishList() {
  window.scrollTo({top:0, behavior:"smooth"})
  return (
    <div className="mr-[16.5rem]">
      <h3 className="text-[2rem] font-bold italic mb-[1rem]">Wishlist</h3>

      {/* wishlist-1  */}
      <div className="flex xl:flex-row flex-col gap-5">
      <div className="grid xl:grid-cols-2 gap-3 flex-1">
        <img className="xl:h-full w-full h-[200px] rounded-3xl" src={popularLotteryImg} alt="Lottery Image" />
        <div className="flex flex-col justify-between">
          <div>
          <h3 className="text-[1.5rem] font-bold">Lottery Title</h3>
          <div><span>Buy Credit for:</span> <span className="text-[#F22] text-[1.1rem] font-bold">AED125</span></div>
          <div><span className="text-[#25BF17]">WIN:</span> <span className="font-bold text-[1.1rem]">AED10000 Cash</span></div>
          </div>

          {/* Progress Bar  */}
          <div
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
            className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
          >
            <div>
              <span className="text-[#FF2222]">150 </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span> 300</span>
            </div>
            <Progress className="mt-[3px]" size="sm" color="red" value={50} />
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] xl:max-w-[310px] w-full px-1 xl:h-auto h-[150px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <div>
          <div className="mt-[1.8rem]">
          <div className="font-bold">
            <span>Deal ends in:</span>{" "}
            <span className="text-red-500">00:18:03:10</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
              <Icon className="text-[2rem]" icon="bi:exclamation" />
            </div>
            <span className="text-[#858585] text-[12px]">
              The lottery end time will be extended if unsold.
            </span>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
          <Link to={`/addToCart/lotteryId`}>
            <button className="submitBtn w-full">Buy Now</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="w-full bg-gray-300 h-[1.5px] my-5"></div>

      {/* wishlist-1  */}
      <div className="flex xl:flex-row flex-col gap-5">
      <div className="grid xl:grid-cols-2 gap-3 flex-1">
        <img className="xl:h-full w-full h-[200px] rounded-3xl" src={popularLotteryImg} alt="Lottery Image" />
        <div className="flex flex-col justify-between">
          <div>
          <h3 className="text-[1.5rem] font-bold">Lottery Title</h3>
          <div><span>Buy Credit for:</span> <span className="text-[#F22] text-[1.1rem] font-bold">AED125</span></div>
          <div><span className="text-[#25BF17]">WIN:</span> <span className="font-bold text-[1.1rem]">AED10000 Cash</span></div>
          </div>

          {/* Progress Bar  */}
          <div
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
            className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
          >
            <div>
              <span className="text-[#FF2222]">150 </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span> 300</span>
            </div>
            <Progress className="mt-[3px]" size="sm" color="red" value={50} />
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] xl:max-w-[310px] w-full px-1 xl:h-auto h-[150px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <div>
          <div className="mt-[1.8rem]">
          <div className="font-bold">
            <span>Deal ends in:</span>{" "}
            <span className="text-red-500">00:18:03:10</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
              <Icon className="text-[2rem]" icon="bi:exclamation" />
            </div>
            <span className="text-[#858585] text-[12px]">
              The lottery end time will be extended if unsold.
            </span>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
          <Link to={`/addToCart/lotteryId`}>
            <button className="submitBtn w-full">Buy Now</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="w-full bg-gray-300 h-[1.5px] my-5"></div>

      {/* wishlist-1  */}
      <div className="flex xl:flex-row flex-col gap-5">
      <div className="grid xl:grid-cols-2 gap-3 flex-1">
        <img className="xl:h-full w-full h-[200px] rounded-3xl" src={popularLotteryImg} alt="Lottery Image" />
        <div className="flex flex-col justify-between">
          <div>
          <h3 className="text-[1.5rem] font-bold">Lottery Title</h3>
          <div><span>Buy Credit for:</span> <span className="text-[#F22] text-[1.1rem] font-bold">AED125</span></div>
          <div><span className="text-[#25BF17]">WIN:</span> <span className="font-bold text-[1.1rem]">AED10000 Cash</span></div>
          </div>

          {/* Progress Bar  */}
          <div
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
            className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
          >
            <div>
              <span className="text-[#FF2222]">150 </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span> 300</span>
            </div>
            <Progress className="mt-[3px]" size="sm" color="red" value={50} />
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] xl:max-w-[310px] w-full px-1 xl:h-auto h-[150px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <div>
          <div className="mt-[1.8rem]">
          <div className="font-bold">
            <span>Deal ends in:</span>{" "}
            <span className="text-red-500">00:18:03:10</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
              <Icon className="text-[2rem]" icon="bi:exclamation" />
            </div>
            <span className="text-[#858585] text-[12px]">
              The lottery end time will be extended if unsold.
            </span>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
          <Link to={`/addToCart/lotteryId`}>
            <button className="submitBtn w-full">Buy Now</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="w-full bg-gray-300 h-[1.5px] my-5"></div>

      {/* wishlist-1  */}
      <div className="flex xl:flex-row flex-col gap-5">
      <div className="grid xl:grid-cols-2 gap-3 flex-1">
        <img className="xl:h-full w-full h-[200px] rounded-3xl" src={popularLotteryImg} alt="Lottery Image" />
        <div className="flex flex-col justify-between">
          <div>
          <h3 className="text-[1.5rem] font-bold">Lottery Title</h3>
          <div><span>Buy Credit for:</span> <span className="text-[#F22] text-[1.1rem] font-bold">AED125</span></div>
          <div><span className="text-[#25BF17]">WIN:</span> <span className="font-bold text-[1.1rem]">AED10000 Cash</span></div>
          </div>

          {/* Progress Bar  */}
          <div
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
            className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold"
          >
            <div>
              <span className="text-[#FF2222]">150 </span>
              <span className="text-gray-700">SOLD OUT OF</span>
              <span> 300</span>
            </div>
            <Progress className="mt-[3px]" size="sm" color="red" value={50} />
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl flex flex-col items-center text-center relative border-[#caafaf38] border-[1px] xl:max-w-[310px] w-full px-1 xl:h-auto h-[150px]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
      >
        <div>
          <div className="mt-[1.8rem]">
          <div className="font-bold">
            <span>Deal ends in:</span>{" "}
            <span className="text-red-500">00:18:03:10</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
              <Icon className="text-[2rem]" icon="bi:exclamation" />
            </div>
            <span className="text-[#858585] text-[12px]">
              The lottery end time will be extended if unsold.
            </span>
          </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]">
          <Link to={`/addToCart/lotteryId`}>
            <button className="submitBtn w-full">Buy Now</button>
          </Link>
        </div>
      </div>
      </div>
      <div className="w-full bg-gray-300 h-[1.5px] my-5"></div>
    </div>
  );
}
