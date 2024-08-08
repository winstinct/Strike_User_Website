import slider1Img from "../../assets/home-banner1.png";
import slider2Img from "../../assets/slider-2.png";
import popularLotteryImg from "../../assets/popular-lottery.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="space-y-[3rem] my-[1.3rem]">
      {/* Banner  */}
      <div className="mx-56">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
          <div>
            <img
              className="w-full h-[300px] rounded-2xl"
              src={slider1Img}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[300px] rounded-2xl"
              src={slider2Img}
              alt=""
            />
          </div>
        </Carousel>
      </div>

      {/* Game Categories  */}
      <section className="flex flex-wrap gap-5 text-white mx-56">
        <div className="gradientBg text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]">
          Lottery Games
        </div>
        <div
          style={{ backgroundImage: "linear-gradient(#DA1919, #263238)" }}
          className="text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]"
        >
          Number Games
        </div>
        <div
          style={{ backgroundImage: "linear-gradient(#1488CC, #2B32B2)" }}
          className="bg-green-500 text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]"
        >
          Wheel Games
        </div>
      </section>

      {/* Lottery Categories  */}
      <section className="flex flex-wrap gap-5 text-center mx-56">
        <div className="flex-1 rounded-full py-2 bg-[#5500C3] text-white border-[1px] cursor-pointer border-[#5500C3] duration-300 min-w-[120px]">
          Public Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:border-[#5500C3] duration-300 border-gray-300 hover:bg-[#5500C3] hover:text-white min-w-[120px]">
          Private Lottery
        </div>
        <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:border-[#5500C3] duration-300 border-gray-300 hover:bg-[#5500C3] hover:text-white min-w-[120px]">
          Sold Out
        </div>
      </section>

      <section>
        <header className="mx-56 flex md:flex-row flex-col md:gap-1 gap-3 items-center justify-between">
          <div>
            <h3 className="md:text-[2.5rem] text-[2rem] font-bold">
              Popular campaigns
            </h3>
            <p>*Private lotteries are visible to invited persons only</p>
          </div>
          <div className="flex gap-5 text-[2rem]">
            <Icon
              className="cursor-pointer border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200"
              icon="iconamoon:arrow-right-2-thin"
            />
            <Icon
              className="cursor-pointer border-[1px] rounded-md shadow-md border-gray-300 hover:bg-[#A967FF] hover:text-white hover:border-[#A967FF] duration-200"
              icon="iconamoon:arrow-left-2-thin"
            />
          </div>
        </header>

        <div className="ml-56 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[2.5rem]">
          {/* Card-1  */}
          <div 
          className="p-[1rem] rounded-[20px]"
          style={{boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}}>
            <header>
              <img className="h-[150px] w-full rounded-2xl" src={popularLotteryImg} alt="" />
            </header>
            <footer className="space-y-[1rem] mt-[1rem]">
              <h3 className="text-[1.25rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between">

                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>
  
                  <div  
                   style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
                  className="space-y-[0.5rem] border-[1px] border-[#d8d4d442] p-3 rounded-2xl font-semibold">
                    <div>
                      <span className="text-[#FF2222]">150 </span> 
                      <span className="text-gray-700">SOLD OUT OF</span>
                      <span> 300</span>
                    </div>
                    <Progress size="sm" color="red" value={50} />
                  </div>

              </div>

              <div 
              className="rounded-3xl flex flex-col items-center text-center py-5 relative border-[#caafaf38] border-[1px] xl:h-[130px] h-[150px]"
              style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
              >
                <div className="absolute top-0 py-[1rem] px-1">
                <div className="font-bold"><span>Deal ends in:</span> <span className="text-red-500">00:18:03:10</span></div>
                <div className="flex items-center justify-center gap-2">
                <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                  <Icon className="text-[2rem]" icon="bi:exclamation" />
                  </div>
                  <span className="text-[#858585] text-[12px]">The lottery end time will be extended if unsold.</span>
                  </div>
                </div>
                  <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]"><button className="submitBtn w-full">Buy Now</button></div>
              </div>

              <div className="flex gap-3 text-[12px] font-semibold">
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="lucide:share" />Share</button>
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="mdi:favourite-border" />Save</button>
              </div>

            </footer>
          </div>
          {/* Card-2  */}
          <div 
          className="p-[1rem] rounded-[20px]"
          style={{boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}}>
            <header>
              <img className="h-[150px] w-full rounded-2xl" src={popularLotteryImg} alt="" />
            </header>
            <footer className="space-y-[1rem] mt-[1rem]">
              <h3 className="text-[1.25rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between">

                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>
  
                  <div  
                   style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
                  className="space-y-[0.5rem] border-[1px] border-[#d8d4d442] p-3 rounded-2xl font-semibold">
                    <div>
                      <span className="text-[#FF2222]">150 </span> 
                      <span className="text-gray-700">SOLD OUT OF</span>
                      <span> 300</span>
                    </div>
                    <Progress size="sm" color="red" value={50} />
                  </div>

              </div>

              <div 
              className="rounded-3xl flex flex-col items-center text-center py-5 relative border-[#caafaf38] border-[1px] xl:h-[130px] h-[150px]"
              style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
              >
                <div className="absolute top-0 py-[1rem] px-1">
                <div className="font-bold"><span>Deal ends in:</span> <span className="text-red-500">00:18:03:10</span></div>
                <div className="flex items-center justify-center gap-2">
                <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                  <Icon className="text-[2rem]" icon="bi:exclamation" />
                  </div>
                  <span className="text-[#858585] text-[12px]">The lottery end time will be extended if unsold.</span>
                  </div>
                </div>
                  <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]"><button className="submitBtn w-full">Buy Now</button></div>
              </div>

              <div className="flex gap-3 text-[12px] font-semibold">
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="lucide:share" />Share</button>
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="mdi:favourite-border" />Save</button>
              </div>

            </footer>
          </div>
          {/* Card-3  */}
          <div 
          className="p-[1rem] rounded-[20px]"
          style={{boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.25)"}}>
            <header>
              <img className="h-[150px] w-full rounded-2xl" src={popularLotteryImg} alt="" />
            </header>
            <footer className="space-y-[1rem] mt-[1rem]">
              <h3 className="text-[1.25rem] font-bold">Lottery Title</h3>
              <div className="flex items-center justify-between">

                <div>
                  <div>
                    Buy Credit for:
                    <span className="text-[#FF2222]">INR 120</span>
                  </div>
                  <div>
                    <span className="text-[#25BF17]">WIN:</span> 10000 Coins
                  </div>
                </div>
  
                  <div  
                   style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
                  className="space-y-[0.5rem] border-[1px] border-[#d8d4d442] p-3 rounded-2xl font-semibold">
                    <div>
                      <span className="text-[#FF2222]">150 </span> 
                      <span className="text-gray-700">SOLD OUT OF</span>
                      <span> 300</span>
                    </div>
                    <Progress size="sm" color="red" value={50} />
                  </div>

              </div>

              <div 
              className="rounded-3xl flex flex-col items-center text-center py-5 relative border-[#caafaf38] border-[1px] xl:h-[130px] h-[150px]"
              style={{boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.08)"}}
              >
                <div className="absolute top-0 py-[1rem] px-1">
                <div className="font-bold"><span>Deal ends in:</span> <span className="text-red-500">00:18:03:10</span></div>
                <div className="flex items-center justify-center gap-2">
                <div className="bg-gray-500 w-[23px] h-[23px] flex justify-center items-center rounded-full text-white">
                  <Icon className="text-[2rem]" icon="bi:exclamation" />
                  </div>
                  <span className="text-[#858585] text-[12px]">The lottery end time will be extended if unsold.</span>
                  </div>
                </div>
                  <div className="absolute bottom-0 w-full xl:mt-0 mt-[1rem]"><button className="submitBtn w-full">Buy Now</button></div>
              </div>

              <div className="flex gap-3 text-[12px] font-semibold">
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="lucide:share" />Share</button>
                <button className="bg-[#F3F3F3] rounded-[0.5rem] py-2 flex-1 flex justify-center items-center gap-2"><Icon className="text-[1rem]" icon="mdi:favourite-border" />Save</button>
              </div>

            </footer>
          </div>

        </div>
      </section>
    </main>
  );
}
