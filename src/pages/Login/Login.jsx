import { Link } from "react-router-dom";
import slider1Img from "../../assets/slider-1.svg"
import slider2Img from "../../assets/slider-2.svg"
import slider3Img from "../../assets/slider-3.svg";

// Slider 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



export default function Login() {
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
          <img src={slider1Img} className="w-full rounded-t-xl" alt="Slider-1" />
          <div className="md:mx-[2rem] mx-[0.5rem]">
          <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">Welcome to <span className="text-[#A967FF]">Strike</span></h3>
          <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">Purchase lottery tickets for a chance to win big and host private lotteries with friends and family for unforgettable moments.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img src={slider2Img} className="w-full rounded-t-xl" alt="Slider-2" />
          <div className="md:mx-[2rem] mx-[0.5rem]">
          <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">Play and <span className="text-[#A967FF]">Win  🤩</span></h3>
          <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">Explore a variety of lottery games with incredible jackpots.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <img src={slider3Img} className="w-full rounded-t-xl" alt="Slider-3" />
          <div className="md:mx-[2rem] mx-[0.5rem]">
          <h3 className="text-[1.5rem] font-bold mt-[2.5rem]">Get Ready to <span className="text-[#A967FF]">Strike it Lucky! 🚀</span></h3>
          <p className="text-[1.25rem] text-[#4C4C4C] mt-[1.5rem] md:mb-[2.5rem] mb-[2rem]">Enjoy exclusive perks, bonuses, and rewards as a valued member of the Strike community.</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="text-[14px] text-center px-[0.2rem]">Users must be <span className="text-[#FF0023]">18 or older</span>. Participation involves <span className="text-[#FF0023]">financial risk;</span> Play responsibly.</p>
      </div>
      {/* Slider End  */}

      <div className="flex flex-col justify-center md:mt-0 mt-[2rem]">
        <form action="">
          <header>
          <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">Hi, Welcome Back! 👋</h1>
          <p className="text-[14px]">Log in to your account!</p>
          </header>

          <div className="my-[1.5rem] space-y-[1rem]">
            <div>
            <label className="font-medium block mb-[0.2rem]" htmlFor="email">Email</label>
            <input className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full" placeholder="Email" type="email" id="email" />
            </div>

            <div>
            <label className="font-medium block mb-[0.2rem]" htmlFor="password">Password</label>
            <input className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full" placeholder="Enter password" type="password" id="password" />
            <Link to=""><p className="text-right text-[14px] hover:underline mt-[0.3rem]">Forgot Password?</p></Link>
            </div>
          </div>

          <footer className="text-center">
            <button
            style={{
              backgroundImage: "linear-gradient(#A967FF, #5500C3)",
              boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
            }}
            className="text-white rounded-[50px] py-[0.5rem] px-[1.5rem] w-full"
            >Login</button>
            <p className="mt-[1rem]">Don’t have an account? <Link className="text-[#A967FF] hover:underline" to="/signup">Sign Up</Link> now.</p>
          </footer>
        </form>
      </div>
    </div>
  )
}
