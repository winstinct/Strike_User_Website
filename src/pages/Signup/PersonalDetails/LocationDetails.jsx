import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequiredStar from "../../../shared/RequiredStar/RequiredStar";
import { StepperContext } from "../../../contexts/StepperContextProvider";
import ShowErrorMsg from "../../../shared/ShowErrorMsg/ShowErrorMsg";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../../redux/createUserSlice";
import { useSignupMutation } from "../../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import SubmitBtnLoader from "../../../components/SubmitBtnLoader";
import ReactSelect from "react-select";
import { stateOptions } from "../../../options/stateOptions";
import { cityOptions } from "../../../options/cityOptions";
import { countryOptions } from "../../../options/countryOptions";

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #e7e4e4",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #e7e4e4",
    },
    padding: "2px 0",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    color: state.isSelected ? "#fff" : provided.color,
    "&:hover": {
      backgroundColor: state.isSelected ? "#5500C3" : provided.backgroundColor,
    },
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000", // Change this to the color you want for the arrow
    "&:hover": {
      color: "#000", // Optional: change color on hover if desired
    },
  }),
};

export default function LocationDetails() {
  const { currentStep, setCurrentStep, steps } = useContext(StepperContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const {
    location,
    Email,
    Password,
    FirstName,
    LastName,
    gender,
    dob,
    MobileNumber,
    imageUrl,
    countryCode,
    refferalCodes,
  } = useSelector((state) => state.createUser);
  const { country, state, city, address, pinCode } = location;

  const [showError, setShowError] = useState(false);

  // RTK Query Hooks
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async () => {
    if (!country || !state || !city || !pinCode || !address) {
      return setShowError(true);
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    const userInfo = {
      location: {
        country: country.value,
        state: state.value,
        city: city.value,
      },
      Email,
      Password,
      FirstName,
      LastName,
      gender,
      dob,
      MobileNumber: countryCode + MobileNumber,
      imageUrl,
      refferalCodes,
    };

    // Call API
    try {
      const res = await signup(userInfo);
      // console.log("Signup User Response ===> ", res);
      if (res?.error) {
        return toast.error(res?.error?.data?.message);
      } else {
        await login(Email, Password);
        toast.success("Created user successfully.");
      }
    } catch (error) {
      return toast.error("There was something wrong.");
    }
    // Reset the form fields
    dispatch(
      addUserDetails({
        Email: "",
        Password: "",
        confirmPassword: "",
        FirstName: "",
        LastName: "",
        gender: "",
        dob: "",
        location: {
          country: "",
          state: "",
          city: "",
          address: "",
          pinCode: "",
        },
        MobileNumber: "",
        imageUrl: "",
        otp: "",
        otpRefId: "",
        countryCode: "",
        selectedCountryIndex: 101,
        selectedFile: "",
        refferalCodes: "",
      })
    );
    navigate("/");
  };

  useEffect(() => {
    setCurrentStep(2);
  }, []);
  return (
    <div>
      <div>
        <div className="flex items-center gap-5 mb-[1rem]">
          <div onClick={() => navigate(-1)} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">
            Location Details
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[1.5rem] gap-[1rem]">
        <div className="w-full">
          <p className="font-medium">
            Country
            <RequiredStar />
          </p>

          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, country: data } })
              )
            }
            options={countryOptions}
            styles={customStyles}
            value={country}
          ></ReactSelect>

          {showError && !country && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="w-full">
          <p className="font-medium">
            State
            <RequiredStar />
          </p>

          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, state: data } })
              )
            }
            options={stateOptions}
            styles={customStyles}
            value={state}
          ></ReactSelect>
          {showError && !state && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="w-full">
          <p className="font-medium">
            City
            <RequiredStar />
          </p>
          
          <ReactSelect
            onChange={(data) =>
              dispatch(
                addUserDetails({ location: { ...location, city: data } })
              )
            }
            options={cityOptions}
            styles={customStyles}
            value={city}
          ></ReactSelect>
          {showError && !city && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div>
          <label className="block" htmlFor="pincode">
            Pincode
            <RequiredStar />
          </label>
          <input
            className="border-[1px] border-gray-300 px-[1rem] py-[0.4rem] rounded-[6px] outline-none w-full"
            type="number"
            id="pincode"
            value={pinCode}
            onChange={(e) =>
              dispatch(
                addUserDetails({
                  location: { ...location, pinCode: e.target.value },
                })
              )
            }
          />
          {showError && !pinCode && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block" htmlFor="address">
            Address
            <RequiredStar />
          </label>
          <textarea
            className="outline-none border-[1px] border-gray-300 px-3 py-1 rounded-lg w-full"
            name="address"
            id="address"
            value={address}
            onChange={(e) =>
              dispatch(
                addUserDetails({
                  location: { ...location, address: e.target.value },
                })
              )
            }
          ></textarea>
          {showError && !address && (
            <ShowErrorMsg message="This field is required" />
          )}
        </div>
      </div>
      <div className="flex md:h-[70px] relative md:mt-0 mt-[4rem]">
        {isLoading ? (
          <div className="md:w-[300px] w-full absolute bottom-0 right-0">
            <SubmitBtnLoader />
          </div>
        ) : (
          <button
            className="submitBtn md:w-[300px] w-full absolute bottom-0 right-0"
            onClick={handleSubmit}
          >
            Submit Now
          </button>
        )}
      </div>
    </div>
  );
}
