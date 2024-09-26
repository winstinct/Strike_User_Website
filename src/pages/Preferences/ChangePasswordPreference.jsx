import { useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import RequiredStar from "../../shared/RequiredStar/RequiredStar";
import ShowErrorMsg from "../../shared/ShowErrorMsg/ShowErrorMsg";
import {
  useGetUserDetailsQuery,
  useUpdatePassForgotPassMutation,
} from "../../redux/features/auth/authApi";
import SubmitBtnLoader from "../../components/SubmitBtnLoader";
import { toast } from "react-toastify";

export default function ChangePasswordPreference() {
  const { data } = useGetUserDetailsQuery();
  const { Change_Passcontroller, email } = data?.response?.UserData || {};
  const navigate = useNavigate();

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
        otp_reference: Change_Passcontroller?.otp_reference,
        Email: email,
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col justify-center md:mt-0 mt-[2rem]">
      <div className="flex flex-col gap-3">
        <header>
          <div onClick={() => navigate(-1)} className="backBtn mb-[0.5rem]">
            <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h1 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Set Password
          </h1>
          <p className="text-[14px]">Please enter your new password</p>
        </header>

        <div className="mt-[0.5rem] space-y-[1rem]">
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
                className="border-[1px] border-[#CCC] px-[1rem] h-[45px] rounded-[6px] outline-none w-full"
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
                className="border-[1px] border-[#CCC] px-[1rem] h-[45px] rounded-[6px] outline-none w-full"
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
        <div className="my-[1rem]">
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
  );
}
