import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Select from "react-select";
import { APIurls } from "../../api/apiConstant";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function SubmitTicket() {
  const date = Date.now();
  console.log("new date: ", date);
  const [selectImg, setSelectImg] = useState();
  const [paymentOption, setPaymentOption] = useState(null);
  const [utrNumber, setUtrNumber] = useState("");
  const [remarks, setRemarks] = useState("");
  const [showError, setShowError] = useState(false);
  const [url, setUrl] = useState("");
  const { getAccessToken } = useAuth();
  const location = useLocation();
  const id = location?.state?.id;
  const navigate = useNavigate();
  const [loaderBtn, setLoaderBtn] = useState(false);
  const convertedAmount = useSelector(
    (store) => store.convertedCoin.convertedAmount
  );
  const amountToBePaid = (convertedAmount * localStorage.getItem("selectedCoins")).toFixed(2);

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    control: (provided) => ({
      ...provided,
      border: "1px solid #CCC",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #CCC",
      },
      padding: "5px 2px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
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
        backgroundColor: state.isSelected
          ? "#5500C3"
          : provided.backgroundColor,
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
  const options = [
    { label: "Bank Transfer", value: "Bank Transfer" },
    { label: "UPI", value: "UPI" },
  ];
  const handleChange = (paymentOption) => {
    setPaymentOption(paymentOption);
  };

  const handleImageChange = () => {
    return new Promise((resolve, reject) => {
      const image = selectImg;

      if (image) {
        const storageRef = ref(storage, `submit_proof/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle upload progress here if needed
          },
          (error) => {
            console.error("Upload failed:", error);
            reject(error); // Reject the promise if there's an error
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setUrl(downloadURL);
              resolve(downloadURL); // Resolve the promise with the download URL
            } catch (error) {
              console.error("Failed to get download URL:", error);
              reject(error); // Reject the promise if there's an error getting the URL
            }
          }
        );
      } else {
        resolve(null); // Resolve with null if no image is provided
      }
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!(selectImg && paymentOption?.value && utrNumber && remarks)) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    setLoaderBtn(true);
    let downloadURL;
    try {
      downloadURL = await handleImageChange();

      if (!downloadURL) {
        console.error("Image upload failed or no image selected.");
        return; // Exit if image upload fails
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      return; // Exit if an error occurs during image upload
    }
    const token = await getAccessToken();
    try {
      const response = await fetch(APIurls.submitTicket, {
        method: "POST",
        body: JSON.stringify({
          agentId: id,
          coinreq: parseInt(localStorage.getItem("selectedCoins")),
          proof_link: downloadURL,
          method: paymentOption?.value,
          UTR_no: utrNumber,
          remakrs: remarks,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        throw new Error(result.message);
      }
      toast.success(result.message);
      console.log("Submit Proof Result: ", result.message);
      navigate("/deposit-success", {
        state: {
          paymentType: paymentOption?.value,
          utrNumber: utrNumber,
          date: date,
        },
      });
    } catch (error) {
      navigate("/deposit-failure", {
        state: {
          paymentType: paymentOption?.value,
          utrNumber: utrNumber,
          date: date,
        },
      });
      console.log("ERROR WHILE SUBMITTING", error);
    }
    setLoaderBtn(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="grid lg:grid-cols-2 grid-cols-1 gap-[2.5rem] gap-y-[1.5rem]"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="userName" className="font-medium">
          User Name
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <input
          className="text-[15px] font-semibold outline-none border border-[#CCC] rounded-md p-3 w-full bg-[#D9D9D9]"
          type="text"
          readOnly
          value={"Mustaq Ahmed"}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="coinsRequested" className="font-medium">
          Coins Requested
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <input
          className="text-[15px] font-semibold outline-none border border-[#CCC] rounded-md p-3 w-full bg-[#D9D9D9]"
          type="text"
          readOnly
          value={localStorage.getItem("selectedCoins")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="paymentProof" className="font-medium">
          Upload Payment Proof
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <div className="flex flex-col items-center justify-between py-2 px-[1rem] border border-[#CCC] rounded-md h-[90px]">
          {selectImg?.name ? (
            <>
              <h2 className="text-[1.1rem] font-semibold text-green-600 my-2">
                Uploaded document
              </h2>
              <div className="flex gap-[1rem] items-center">
                <h2 className="text-black font-semibold">
                  {selectImg?.name.length > 30
                    ? selectImg.name.substring(0, 30) + "..."
                    : selectImg.name}
                </h2>
                <Icon
                  onClick={() => setSelectImg(null)}
                  icon="akar-icons:cross"
                  className="text-[1.2rem] cursor-pointer hover:bg-[#858585]/[0.3]"
                />
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => document.querySelector(".input-field").click()}
              >
                <Icon
                  icon="material-symbols:cloud-upload"
                  className="text-[#858585] text-[3rem]"
                />
              </button>
              <input
                type="file"
                // accept="image/*"
                value=""
                className="input-field"
                hidden
                onChange={({ target: { files } }) => {
                  if (files[0]) {
                    setSelectImg(files[0]);
                  }
                }}
                // onChange={handleImageChange}
              />
              <p className="text-[0.9rem] text-[#858585]">
                Upload jpg, png, pdf. Size up to 20MB
              </p>
            </>
          )}
        </div>
        {showError && !selectImg && (
          <p className="text-red-500 text-[14px]">*This field is required</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="paymentMethod" className="font-medium">
          Payment Method
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <Select
          value={paymentOption}
          onChange={handleChange}
          options={options}
          styles={customStyles}
          className={`rounded-md`}
        ></Select>
        {showError && !paymentOption?.value && (
          <p className="text-red-500 text-[14px]">*This field is required</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="utrNumber" className="font-medium">
          UTR Number
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <input
          className="text-[15px] font-semibold outline-none border border-[#CCC] rounded-md p-3 w-full"
          type="text"
          value={utrNumber}
          onChange={(e) => setUtrNumber(e.target.value)}
        />
        {showError && !utrNumber && (
          <p className="text-red-500 text-[14px]">*This field is required</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amountToBePaid" className="font-medium">
          Amount to be Paid
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <input
          className="text-[15px] font-semibold outline-none border border-[#CCC] rounded-md p-3 w-full bg-[#D9D9D9]"
          type="text"
          readOnly
          value={amountToBePaid}
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="remarks" className="font-medium">
          Remarks
          <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
        </label>
        <textarea
          className="text-[15px] font-semibold outline-none border border-[#CCC] rounded-md p-3 w-full"
          type="text"
          rows={4}
          placeholder="Add Remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        {showError && !remarks && (
          <p className="text-red-500 text-[14px]">*This field is required</p>
        )}
      </div>
      <div className="col-span-2 flex items-center justify-center">
        {loaderBtn ? (
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#5500C3"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <button
            className="font-medium gradientBg text-white py-2 w-[300px] rounded-[50px]"
            disabled={loaderBtn}
          >
            Submit Proof
          </button>
        )}
      </div>
    </form>
  );
}
