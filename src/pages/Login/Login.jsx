import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import RequiredStar from "../../shared/RequiredStar/RequiredStar";
import ShowErrorMsg from "../../shared/ShowErrorMsg/ShowErrorMsg";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const from = useLocation()?.state?.from;
  console.log("Destination==========> ", from)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setShowError(true);
    }

    if (!emailRegex.test(email)) {
      return setShowError(true);
    }
    console.log(email, password);

    //Login by firebase
    try {
      setPasswordErr(false);
      setIsProcessing(true);
      await login(email, password);
      setIsProcessing(false);
      toast.success("Login success!", { autoClose: 3000 });
      navigate(from || "/");
    } catch (error) {
      setIsProcessing(false);
      toast.error("Credentials (Password/Email) are not correct!");
    }
  };

  return (
    <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-10 md:mx-[5rem] mx-5">
      {/* Slider Start  */}
      <div className="md:flex flex-col md:justify-center md:min-h-[calc(100vh-6rem)]">
        <div className="shadow-lg rounded-xl w-full pb-[1rem]">
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="flex flex-col md:h-[calc(100vh-9rem)]">
                <img
                  src={slider1Img}
                  className="w-full rounded-t-xl md:min-h-[70%] flex-1"
                  alt="Slider-1"
                />

                <div className="md:mx-[2rem] mx-[0.5rem]">
                  <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                    Welcome to <span className="text-[#A967FF]">Strike</span>
                  </h3>
                  <p className="text-[1.1rem] text-[#4C4C4C]">
                    Purchase lottery tickets for a chance to win big and host
                    private lotteries with friends and family for unforgettable
                    moments.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:h-[calc(100vh-9rem)]">
                <img
                  src={slider2Img}
                   className="w-full rounded-t-xl md:min-h-[70%] flex-1"
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
              <div className="flex flex-col md:h-[calc(100vh-9rem)]">
                <img
                  src={slider3Img}
                   className="w-full rounded-t-xl md:min-h-[70%] flex-1"
                  alt="Slider-3"
                />
                <div className="md:mx-[2rem] mx-[0.5rem]">
                  <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                    Get Ready to{" "}
                    <span className="text-[#A967FF]">Strike it Lucky! 🚀</span>
                  </h3>
                  <p className="text-[1.1rem] text-[#4C4C4C] mb-[1.3rem]">
                    Enjoy exclusive perks, bonuses, and rewards as a valued
                    member of the Strike community.
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
      </div>
      {/* Slider End  */}

      <div className="flex flex-col md:justify-center md:mt-0 mt-[2rem] md:pb-0 pb-[2rem]">
        <form>
          <header>
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
              Hi, Welcome Back! 👋
            </h1>
            <p className="text-[14px]">Log in to your account!</p>
          </header>

          <div className="my-[1.5rem] space-y-[1rem]">
            <div>
              <label className="font-medium block mb-[0.2rem]" htmlFor="email">
                Email
                <RequiredStar />
              </label>
              <input
                className="border-[1px] border-[#CCC] px-[1rem] h-[45px] rounded-[6px] outline-none w-full"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && !emailRegex.test(email) && showError && (
                <ShowErrorMsg message="Please provide valid email!" />
              )}
              {showError && !email && (
                <ShowErrorMsg message="This field is required*" />
              )}
            </div>

            <div>
              <label
                className="font-medium block mb-[0.2rem]"
                htmlFor="password"
              >
                Password
                <RequiredStar />
              </label>
              <div className="relative">
                <input
                  className="border-[1px] border-[#CCC] px-[1rem] h-[45px] rounded-[6px] outline-none w-full"
                  placeholder="Enter password"
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isPasswordVisible ? (
                  <Icon
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute top-[9px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute top-[9px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye"
                  />
                )}
                {!password && showError && (
                  <ShowErrorMsg message="This field is required*" />
                )}
              </div>
              <Link to="/auth/forgot-password">
                <p className="text-right text-[14px] hover:underline mt-[0.3rem]">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>

          <footer className="text-center">
            {isProcessing ? (
              <SubmitBtnLoader />
            ) : (
              <button className="submitBtn w-full" onClick={handleSubmit}>
                Login
              </button>
            )}
            <p className="mt-[1rem]">
              Don’t have an account?{" "}
              <Link
                className="text-[#A967FF] hover:underline"
                to="/auth/signup"
              >
                Sign Up
              </Link>{" "}
              now.
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}
