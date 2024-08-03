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

export default function SetPasswordSignup() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%._-])[A-Za-z\d!@#$%._-]{8,}$/;

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

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(confirmPassword !== newPassword){
      return setShowError(true)
    }

     //Validate password
     if (!passwordRegex.test(newPassword)) {
      setIsPasswordValid(false);
      setShowError(true);
      return;
    }

    // const result = await changePasswordByEmailApi({
    //   newPassword: password,
    //   otp_reference: reference,
    //   email: email,
    // });
    // if (!result?.error) {
    //   setPassword("");
    //   setConfirmPassword("");
    //   setShowError(false);
    //   navigate("/login");
    // }
    navigate("/login")
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
        <div>
          <header>
          <div onClick={()=>navigate(-1)} className="border-[1px] border-gray-300 rounded-[50px] shadow-2xl max-w-[80px] h-[40px] flex justify-center items-center mb-[2.5rem] cursor-pointer"><Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" /></div>
            <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Set Password
            </h1>
            <p className="text-[14px] mt-[0.5rem]">Please enter your new password</p>
          </header>

          <div className="mt-[1.5rem] mb-[2.5rem] space-y-[1rem]">
            <div>
              <label className="font-medium block mb-[0.2rem]" htmlFor="newPassword">
              Enter New Password<RequiredStar/>
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
                    onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye"
                  />
                )}
              </div>
            </div>

            <div>
              <label className="font-medium block mb-[0.2rem]" htmlFor="confirmPassword">
              Re-Enter New Password<RequiredStar/>
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
                    onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    className="absolute top-[6px] right-2 text-[1.8rem] text-[#CCCCCC] cursor-pointer"
                    icon="mdi:eye"
                  />
                )}
              </div>
              {confirmPassword && newPassword && showError && confirmPassword !== newPassword && (<p className="text-red-500 text-[14px]">Password does not match!</p>)}
              {confirmPassword && newPassword && showError && !isPasswordValid && confirmPassword === newPassword  && (<p className="text-red-500 text-[14px]">Invalid Password</p>)}
            </div>
          </div>

          {/* Password Validation Criteria  */}
          <div className="mb-[2.5rem]">
          <h3 className="font-semibold text-[#64646E]">Your Password Must Contain</h3>
          <ul className="list-disc list-inside text-[14px] space-y-[0.3rem] mt-[0.5rem]">
            <li
              id="more8"
            >
              Between 8 and 20 characters
            </li>
            <li
              id="upper"
            >
              1 Upper Case Letter
            </li>
            <li
              id="lower"
            >
              1 Lower Case Letter
            </li>
            <li
              id="num"
            >
              1 Number
            </li>
            <li
              id="char"
            >
              1 Special Character (@ & # $ %)
            </li>
          </ul>
          </div>

          <footer className="text-center">
            <button
              style={{
                backgroundImage: !newPassword || !confirmPassword ? 'linear-gradient(#6C2D91, #2C005B)' : 'linear-gradient(#A967FF, #5500C3)',
                boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="text-white rounded-[50px] py-[0.5rem] px-[1.5rem] w-full"
              disabled={!newPassword || !confirmPassword ? true : false}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

