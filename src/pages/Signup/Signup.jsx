import { Link, useNavigate } from "react-router-dom";
import slider1Img from "../../assets/slider-1.png";
import slider2Img from "../../assets/slider-2.png";
import slider3Img from "../../assets/slider-3.png";

// Slider
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import RequiredStar from "../../shared/RequiredStar/RequiredStar";
import { useState } from "react";
import ShowErrorMsg from "../../shared/ShowErrorMsg/ShowErrorMsg";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [showError, setShowError] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      return setShowError(true);
    }

    if(!email || !referralCode){
      return setShowError(true)
    }

    navigate("/otp-verification-signup");
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[4rem] md:px-[1.5rem] px-[1rem] min-h-[500px] xl:gap-[7.5rem] lg:gap-[5rem] md:gap-[2rem] gap-[1rem] md:pb-0 pb-[1rem]">
     {/* Slider Start  */}
     <div className="shadow-lg rounded-xl pb-[1rem] mt-[1rem]">
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
                className="w-full h-[300px] rounded-t-xl"
                alt="Slider-1"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                  Welcome to <span className="text-[#A967FF]">Strike</span>
                </h3>
                <p className="text-[1.1rem] text-[#4C4C4C] mb-[0.5rem]">
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
                className="w-full h-[300px] rounded-t-xl"
                alt="Slider-2"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                  Play and <span className="text-[#A967FF]">Win 🤩</span>
                </h3>
                <p className="text-[1.1rem] text-[#4C4C4C] mb-[0.5rem]">
                  Explore a variety of lottery games with incredible jackpots.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src={slider3Img}
                className="w-full h-[300px] rounded-t-xl"
                alt="Slider-3"
              />
              <div className="md:mx-[2rem] mx-[0.5rem]">
                <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                  Get Ready to{" "}
                  <span className="text-[#A967FF]">Strike it Lucky! 🚀</span>
                </h3>
                <p className="text-[1.1rem] text-[#4C4C4C] mb-[0.5rem]">
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
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
              Hi, Welcome Back! 👋
            </h1>
            <p className="text-[14px]">Create a new account!</p>
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
                onChange={(e)=>setEmail(e.target.value)}
              />
              {email && !emailRegex.test(email) && <ShowErrorMsg message="Please provide valid email"/>}
              {!email && showError && <ShowErrorMsg message="This field is required"/>}
            </div>

            <div>
              <label
                className="font-medium block mb-[0.2rem]"
                htmlFor="referralCode"
              >
                Referral Code<RequiredStar/>
              </label>
              <input
                className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
                type="text"
                placeholder="Enter your code here"
                id="referralCode"
                onChange={(e)=>setReferralCode(e.target.value)}
              />
               {!referralCode && showError && <ShowErrorMsg message="This field is required"/>}
            </div>
          </div>

          <footer className="text-center">
            <button
              className="submitBtn w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p className="mt-[1rem]">
              Already have an account?{" "}
              <Link className="text-[#A967FF] hover:underline" to="/login">
                Login
              </Link>{" "}
              now.
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}
