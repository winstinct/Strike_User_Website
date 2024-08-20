import Switch from "react-switch";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function PrivacySettings() {
  const [cameraAccess, setCameraAccess] = useState(true);
  const [microphoneAccess, setMicrophoneAccess] = useState(false);
  const [locationAccess, setLocationAccess] =
    useState(true);

  return (
    <div>
      <h3 className="font-bold text-[1.5rem] mb-5">Privacy</h3>
      <div className="space-y-[1.5rem] mb-[3rem]">
        {/* Notification-1  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          cameraAccess ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() => setCameraAccess(!cameraAccess)}
            className="cursor-pointer select-none flex-1"
          >
            Camera Access
          </p>
          <Switch
            checked={cameraAccess}
            onChange={(value) => setCameraAccess(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
          />
        </div>
      </div>
      {/* Notification-2  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          microphoneAccess ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() => setMicrophoneAccess(!microphoneAccess)}
            className="cursor-pointer flex-1 select-none"
          >
            Microphone Access
          </p>
          <Switch
            checked={microphoneAccess}
            onChange={(value) => setMicrophoneAccess(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
          />
        </div>
      </div>
      {/* Notification-3  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          locationAccess ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() =>
              setLocationAccess(!locationAccess)
            }
            className="cursor-pointer flex-1 select-none"
          >
            Location Access
          </p>
          <Switch
            checked={locationAccess}
            onChange={(value) => setLocationAccess(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
          />
        </div>
      </div>
      </div>

      <h3 className="font-bold text-[1.5rem] mb-3">Security</h3>
      <Link to="/privacy/change-password">
      <div className="flex items-center justify-between">
        <p className="text-[1rem]">Change Password</p>
        <Icon className="text-[1.3rem] text-gray-700" icon="openmoji:right-arrow" />
      </div>
      </Link>
    </div>
  );
}

