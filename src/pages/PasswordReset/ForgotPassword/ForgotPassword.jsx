import { useNavigate } from "react-router-dom";
import slider1Img from "../../../assets/slider-1.png";
import slider2Img from "../../../assets/slider-2.png";
import slider3Img from "../../../assets/slider-3.png";

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
import { useSendOTPMutation } from "../../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";
import SubmitBtnLoader from "../../../components/SubmitBtnLoader";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {Email} = useSelector(state => state.createUser)
  const [showError, setShowError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // RTK Query Hooks
  const [sendOTP, { isLoading }] = useSendOTPMutation();

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
        console.log(res);
        dispatch(addUserDetails({ otpRefId: res?.data?.response?.refId }));
        toast.success("An OTP has been sent to your email.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    navigate("/auth/otp-verification");
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[4rem] md:px-[1.5rem] px-[1rem] min-h-[500px] xl:gap-[7.5rem] lg:gap-[5rem] md:gap-[2rem] gap-[1rem] md:pb-0 pb-[1rem]">
      {/* Slider Start  */}
      <div className="flex flex-col justify-center md:h-[87vh]">
        <div className="shadow-lg rounded-xl pb-[1rem] md:min-h-[95%]">
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
                  <p className="text-[1.1rem] text-[#4C4C4C] mb-[1.3rem]">
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

      <div className="flex flex-col justify-center md:mt-0 mt-[2rem]">
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
                className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
                placeholder="Email"
                type="email"
                id="email"
                value={Email}
                onChange={(e) => dispatch(addUserDetails({Email:e.target.value}))}
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
