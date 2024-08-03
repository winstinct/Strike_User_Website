import { Link, useAsyncError, useNavigate } from "react-router-dom";
import slider1Img from "../../../assets/slider-1.svg";
import slider2Img from "../../../assets/slider-2.svg";
import slider3Img from "../../../assets/slider-3.svg";

// Slider
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!emailRegex.test(email)){
      return setShowError(true)
    }
    navigate("/otp-verification")
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[4rem] md:px-[1.5rem] px-[1rem] min-h-[500px] xl:gap-[7.5rem] lg:gap-[5rem] md:gap-[2rem] gap-[1rem] my-[3rem]">
      {/* Slider Start  */}
      <div className="shadow-lg pb-[2.5rem] rounded-xl">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div>
              <img
                src={slider1Img}
                className="w-full rounded-t-xl"
                alt="Slider-1"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">
                  Welcome to <span className="text-[#A967FF]">Strike</span>
                </h3>
                <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">
                  Purchase lottery tickets for a chance to win big and host
                  private lotteries with friends and family for unforgettable
                  moments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={slider2Img}
                className="w-full rounded-t-xl"
                alt="Slider-2"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">
                  Play and <span className="text-[#A967FF]">Win 🤩</span>
                </h3>
                <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">
                  Explore a variety of lottery games with incredible jackpots.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={slider3Img}
                className="w-full rounded-t-xl"
                alt="Slider-3"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">
                  Get Ready to{" "}
                  <span className="text-[#A967FF]">Strike it Lucky! 🚀</span>
                </h3>
                <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">
                  Enjoy exclusive perks, bonuses, and rewards as a valued member
                  of the Strike community.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <p className="text-[14px] text-center px-[0.2rem]">
          Users must be <span className="text-[#FF0023]">18 or older</span>.
          Participation involves{" "}
          <span className="text-[#FF0023]">financial risk;</span> Play
          responsibly.
        </p>
      </div>
      {/* Slider End  */}

      <div className="flex flex-col justify-center md:mt-0 mt-[2rem]">
        <form action="">
          <header>
          <div onClick={()=>navigate(-1)} className="border-[1px] border-gray-300 rounded-[50px] shadow-2xl max-w-[80px] h-[40px] flex justify-center items-center mb-[2.5rem] cursor-pointer"><Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" /></div>
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Forgot Password?
            </h1>
            <p className="text-[14px] mt-[0.5rem]">No worries! Just enter your e-mail and we’ll send you an OTP. Then verify it and its done.</p>
          </header>

          <div className="my-[1.5rem] space-y-[1rem]">
            <div>
              <label className="font-medium block mb-[0.2rem]" htmlFor="email">
                Email<RequiredStar/>
              </label>
              <input
                className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {email && !emailRegex.test(email) && showError && (<p className="text-red-500 text-[14px]">This email is invalid!</p>)}
            </div>
          </div>

          <footer className="text-center">
            <button
              style={{
                backgroundImage: !email ? 'linear-gradient(#6C2D91, #2C005B)' : 'linear-gradient(#A967FF, #5500C3)',
                boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="text-white rounded-[50px] py-[0.5rem] px-[1.5rem] w-full"
              disabled={!email ? true : false}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
