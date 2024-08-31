import { useNavigate } from "react-router-dom";
import slider1Img from "../../../assets/updated-slider-1.svg";
import slider2Img from "../../../assets/updated-slider-2.svg";
import slider3Img from "../../../assets/updated-slider-3.svg";

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
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
import { useSendOTPForgotPassMutation } from "../../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";
import SubmitBtnLoader from "../../../components/SubmitBtnLoader";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Email } = useSelector((state) => state.createUser);
  const [showError, setShowError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // RTK Query Hooks
  const [sendOTP, { isLoading }] = useSendOTPForgotPassMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(Email)) {
      return setShowError(true);
    }
    // Call API
    try {
      const res = await sendOTP({ EmailID: Email });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        dispatch(
          addUserDetails({ otpRefId: res?.data?.response?.refId, Email })
        );
        toast.success("An OTP has been sent to your email.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    navigate("/auth/otp-verification");
  };
  return (
    <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-10 md:mx-[2rem] lg:mx-[5rem] mx-5">
      {/* Slider Start  */}
      <div className="md:flex flex-col md:justify-center md:min-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-6rem)]">
        <div
          className="rounded-xl w-full pb-[1rem lg:max-w-[85%] xl:max-w-[70%] md:h-screen relative"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <img
                  src={slider1Img}
                  className="w-full rounded-t-xl flex-1"
                  alt="Slider-1"
                />

                <div className="md:mx-[2rem] mx-[0.5rem]">
                  <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                    Welcome to <span className="text-[#A967FF]">Strike</span>
                  </h3>
                  <p className="text-[0.9rem] md:text-[1.1rem] text-[#4C4C4C]">
                    Purchase lottery tickets for a chance to win big and host
                    private lotteries with friends and family for unforgettable
                    moments.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col">
                <img
                  src={slider2Img}
                  className="w-full rounded-t-xl flex-1"
                  alt="Slider-2"
                />
                <div className="md:mx-[2rem] mx-[0.5rem]">
                  <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                    Play and <span className="text-[#A967FF]">Win 🤩</span>
                  </h3>
                  <p className="text-[0.9rem] md:text-[1.1rem] text-[#4C4C4C] mb-[0.5rem]">
                    Explore a variety of lottery games with incredible jackpots.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col">
                <img
                  src={slider3Img}
                  className="w-full rounded-t-xl flex-1"
                  alt="Slider-3"
                />
                <div className="md:mx-[2rem] mx-[0.5rem]">
                  <h3 className="text-[1.5rem] font-bold mt-[0.5rem]">
                    Get Ready to{" "}
                    <span className="text-[#A967FF]">Strike it Lucky! 🚀</span>
                  </h3>
                  <p className="text-[0.9rem] md:text-[1.1rem] text-[#4C4C4C] mb-[1.3rem]">
                    Enjoy exclusive perks, bonuses, and rewards as a valued
                    member of the Strike community.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <p className="text-[14px] text-center px-[0.2rem] md:absolute md:bottom-0 mb-4">
            Users must be <span className="text-[#FF0023]">18 or older</span>.
            Participation involves{" "}
            <span className="text-[#FF0023]">financial risk;</span> Play
            responsibly.
          </p>
        </div>
      </div>
      {/* Slider End  */}

      <div className="flex flex-col md:justify-center md:mt-0 mt-[2rem] md:pb-0 pb-[2rem] lg:max-w-[85%] xl:max-w-[70%]">
        <form action="">
          <header>
            <div onClick={() => navigate(-1)} className="backBtn mb-[2rem]">
              <Icon
                className="text-[2.5rem]"
                icon="lets-icons:arrow-left-long"
              />
            </div>
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
              Forgot Password?
            </h1>
            <p className="text-[14px] mt-[0.5rem]">
              No worries! Just enter your e-mail and we’ll send you an OTP. Then
              verify it and its done.
            </p>
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
                value={Email}
                onChange={(e) =>
                  dispatch(addUserDetails({ Email: e.target.value }))
                }
              />
              {Email && !emailRegex.test(Email) && showError && (
                <ShowErrorMsg message="Please provide valid email" />
              )}
              {!Email && showError && (
                <ShowErrorMsg message="This field is required" />
              )}
            </div>
          </div>

          <footer className="text-center">
            {isLoading ? (
              <SubmitBtnLoader />
            ) : (
              <button className="submitBtn w-full" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </footer>
        </form>
      </div>
    </div>
  );
}
