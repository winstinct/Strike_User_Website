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
import { useUpdatePassForgotPassMutation } from "../../../redux/features/auth/authApi";
import { useSelector } from "react-redux";
import SubmitBtnLoader from "../../../components/SubmitBtnLoader";
import { toast } from "react-toastify";

export default function SetPassword() {
  const navigate = useNavigate();
  const { otpRefId, Email } = useSelector((state) => state.createUser);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%._-])[A-Za-z\d!@#$%._-]{8,}$/;

  // RTK Query Hooks
  const [updatePassword, { isLoading }] = useUpdatePassForgotPassMutation();

  const valid = (id) => {
    const element = document.getElementById(id);
    element.style.color = "#24B24B";
    element.style.borderColor = "#24B24B";
  };

  const inValid = (id) => {
    const element = document.getElementById(id);
    element.style.color = "red";
    element.style.borderColor = "red";
  };

  const handleChange = (e) => {
    //validate password
    const pwd = e.target.value;
    if (pwd.match(/[A-Z]/) !== null) {
      valid("upper");
    } else {
      inValid("upper");
    }

    if (pwd.match(/[a-z]/) !== null) {
      valid("lower");
    } else {
      inValid("lower");
    }

    if (pwd.match(/[0-9]/) !== null) {
      valid("num");
    } else {
      inValid("num");
    }

    if (pwd.match(/[@&#$%]/) !== null) {
      valid("char");
    } else {
      inValid("char");
    }

    if (pwd.length >= 8) {
      valid("more8");
    } else {
      inValid("more8");
    }

    if (passwordRegex.test(pwd)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    setNewPassword(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      return setShowError(true);
    }

    if (confirmPassword !== newPassword) {
      return setShowError(true);
    }

    //Validate password
    if (!passwordRegex.test(newPassword)) {
      setIsPasswordValid(false);
      setShowError(true);
      return;
    }

    // Call API
    try {
      const res = await updatePassword({
        newPassword,
        otp_reference: otpRefId,
        Email,
      });
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        toast.success("Password updated successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    navigate("/auth/login");
  };

  return (
    <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-10 md:mx-[2rem] lg:mx-[5rem] mx-5">
      {/* Slider Start  */}
      <div className="md:flex flex-col md:justify-center md:min-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-6rem)]">
        <div
          className="rounded-xl w-full pb-[1rem] lg:max-w-[85%] xl:max-w-[70%] md:h-screen relative"
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

      <div className="flex flex-col justify-center md:mt-0 mt-[2rem] md:pb-0 pb-[2rem] lg:max-w-[85%] xl:max-w-[70%]">
        <div className="flex flex-col gap-2">
          <header>
            <div onClick={() => navigate(-1)} className="backBtn mb-4">
              <Icon
                className="text-[2.5rem]"
                icon="lets-icons:arrow-left-long"
              />
            </div>
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
              Set Password
            </h1>
            <p className="text-[14px]">Please enter your new password</p>
          </header>

          <div className="space-y-[0.5rem]">
            <div>
              <label
                className="font-medium block mb-[0.2rem]"
                htmlFor="newPassword"
              >
                Enter New Password
                <RequiredStar />
              </label>
              <div className="relative">
                <input
                  className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
                  placeholder="Enter New password"
                  type={isNewPasswordVisible ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                />
                {isNewPasswordVisible ? (
                  <Icon
                    onClick={() =>
                      setIsNewPasswordVisible(!isNewPasswordVisible)
                    }
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      setIsNewPasswordVisible(!isNewPasswordVisible)
                    }
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye"
                  />
                )}
                {!newPassword && showError && (
                  <ShowErrorMsg message="This field is required" />
                )}
              </div>
            </div>

            <div>
              <label
                className="font-medium block mb-[0.2rem]"
                htmlFor="confirmPassword"
              >
                Re-Enter New Password
                <RequiredStar />
              </label>
              <div className="relative">
                <input
                  className="border-[1px] border-[#CCC] px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
                  placeholder="Re-Enter New password"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {isConfirmPasswordVisible ? (
                  <Icon
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye"
                  />
                )}
              </div>
              {confirmPassword &&
                newPassword &&
                showError &&
                confirmPassword !== newPassword && (
                  <p className="text-red-500 text-[14px]">
                    Password does not match!
                  </p>
                )}
              {confirmPassword &&
                newPassword &&
                showError &&
                !isPasswordValid &&
                confirmPassword === newPassword && (
                  <p className="text-red-500 text-[14px]">Invalid Password</p>
                )}
              {!confirmPassword && showError && (
                <ShowErrorMsg message="This field is required" />
              )}
            </div>
          </div>

          {/* Password Validation Criteria  */}
          <div>
            <h3 className="font-semibold text-[#64646E]">
              Your Password Must Contain
            </h3>
            <ul className="list-disc list-inside text-[14px]">
              <li id="more8">Between 8 and 20 characters</li>
              <li id="upper">1 Upper Case Letter</li>
              <li id="lower">1 Lower Case Letter</li>
              <li id="num">1 Number</li>
              <li id="char">1 Special Character (@ & # $ %)</li>
            </ul>
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
        </div>
      </div>
    </div>
  );
}
