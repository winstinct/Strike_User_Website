import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { APIurls } from "../../api/apiConstant";
import { ThreeDots } from "react-loader-spinner";

export default function NotifyAgentModal({ data }) {
  const [notifyText, setNotifyText] = useState("");
  const { getAccessToken } = useAuth();
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notifyHandler = async (close) => {
    if (notifyText.trim() === "") {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    setIsLoading(true);
    const token = await getAccessToken();
    try {
      const response = await fetch(`${APIurls.notifyAgent}`, {
        method: "POST",
        body: JSON.stringify({
          agentId: data?.agentId?._id,
          requestId: data?._id,
          notifyText: notifyText,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        toast.error("Failed to Notify Agent");
        throw new Error("Failed to Notify Agent");
      }
      const result = await response.json();
      console.log(result);
      toast.success("Agent Notified Successfully");
      close();
    } catch (error) {
      console.warn("Failed to Notify Agent");
    }
    setIsLoading(false);
  };

  return (
    <Popup
      className=""
      trigger={
        <button className="flex items-center text-[#5500C3] gap-1">
          <p>Notify Agent</p>
          <Icon icon="mdi:bell-outline" />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="">
          <div className="flex flex-col p-[1rem]">
            <div className="flex justify-end items-center w-full">
              <button
                onClick={close}
                className="text-[#FF0023] bg-[#FDE4E8] p-[3px] rounded-md"
              >
                <Icon icon="material-symbols:close" className="text-[1.5rem]" />
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <label htmlFor="userName" className="font-medium">
                  Notify Text
                  <span className="text-red-500 text-[1.1rem] ml-[2px]">*</span>
                </label>
                <textarea
                  rows={5}
                  className="text-[15px] font-medium outline-none border border-[#CCC] rounded-md p-3 w-full resize-none"
                  type="text"
                  placeholder="Enter Notify Text"
                  value={notifyText}
                  onChange={(e) => setNotifyText(e.target.value)}
                />
                {showError && notifyText.trim() === "" && (
                  <p className="text-red-500 text-[14px]">
                    *This field is required
                  </p>
                )}
              </div>
              <div className="flex justify-end items-center w-full">
                {isLoading ? (
                  <ThreeDots
                    visible={true}
                    height="50"
                    width="50"
                    color="#5500C3"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{
                      marginRight: "50px"
                    }}
                    wrapperClass=""
                  />
                ) : (
                  <button
                    onClick={() => notifyHandler(close)}
                    className="text-[1rem] text-white bg-[#5500C3] py-[0.4rem] sm:py-[0.5rem] rounded-lg mt-4 font-semibold px-8 sm:px-[4rem]"
                  >
                    Notify
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
