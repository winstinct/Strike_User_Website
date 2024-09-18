import Switch from "react-switch";
import { useState } from "react";

export default function NotificationSettings() {
  const [pushNotification, setPushNotification] = useState(true);
  const [bookingNotification, setBookingNotification] = useState(false);
  const [subscriptionNotification, setSubscriptionNotification] =
    useState(true);
  const [emailNotification, setEmailNotification] = useState(false);
  const [whatsappNotification, setWhatsappNotification] = useState(true);

  return (
    <div className="space-y-[2.5rem]">
      {/* Notification-1  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          pushNotification ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() => setPushNotification(!pushNotification)}
            className="cursor-pointer select-none flex-1"
          >
            Push Notification
          </p>
          <Switch
            checked={pushNotification}
            onChange={(value) => setPushNotification(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
      {/* Notification-2  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          bookingNotification ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() => setBookingNotification(!bookingNotification)}
            className="cursor-pointer flex-1 select-none"
          >
            Booking Notification
          </p>
          <Switch
            checked={bookingNotification}
            onChange={(value) => setBookingNotification(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
      {/* Notification-3  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          subscriptionNotification ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() =>
              setSubscriptionNotification(!subscriptionNotification)
            }
            className="cursor-pointer flex-1 select-none"
          >
            Subscription Notification
          </p>
          <Switch
            checked={subscriptionNotification}
            onChange={(value) => setSubscriptionNotification(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
      {/* Notification-4  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          emailNotification ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() =>
              setEmailNotification(!emailNotification)
            }
            className="cursor-pointer flex-1 select-none"
          >
            Email Notification
          </p>
          <Switch
            checked={emailNotification}
            onChange={(value) => setEmailNotification(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>

      {/* Notification-5  */}
      <div
        className={`text-[1.25rem] duration-200 ${
          whatsappNotification ? "text-black font-bold" : "text-gray-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            onClick={() => setWhatsappNotification(!whatsappNotification)}
            className="cursor-pointer flex-1 select-none"
          >
            WhatsApp Notification
          </p>
          <Switch
            checked={whatsappNotification}
            onChange={(value) => setWhatsappNotification(value)}
            offColor="#858585"
            onColor="#A967FF"
            offHandleColor="#fff"
            onHandleColor="#fff"
            activeBoxShadow="0 0 0 0"
            value={false}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
    </div>
  );
}
