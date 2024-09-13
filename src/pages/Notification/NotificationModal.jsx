import { useState } from "react";
import NotificationModalCard from "./NotificationModalCard";
import { useGetAllNotificationsQuery } from "../../redux/features/lottery/lotteryApi";
import NotificationSkeletonLoader from "./NotificationSkeletonLoader";

export default function NotificationModal() {
  const [filterText, setFilterText] = useState("Today");
  const handleFilter = (filter) => {
    setFilterText(filter);
  };

  const { data: notifications, isLoading } = useGetAllNotificationsQuery();

  // Function to filter notifications by date
  function filterNotifications(notifications) {
    const now = new Date();
    const todayStart = new Date(now.setHours(0, 0, 0, 0));
    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(todayStart.getDate() - 1);

    const notificationsToday = [];
    const notificationsYesterday = [];
    const notificationsOldest = [];

    notifications?.forEach((notification) => {
      const notificationDate = new Date(notification.createdAt);

      if (notificationDate >= todayStart) {
        notificationsToday.push(notification);
      } else if (
        notificationDate >= yesterdayStart &&
        notificationDate < todayStart
      ) {
        notificationsYesterday.push(notification);
      } else {
        notificationsOldest.push(notification);
      }
    });

    return {
      today: notificationsToday,
      yesterday: notificationsYesterday,
      oldest: notificationsOldest,
    };
  }

  // Call the function and get filtered notifications
  const filteredNotifications = filterNotifications(notifications);

  return (
    <div className="absolute md:p-[1.5rem] p-3 border-[1px] border-gray-300 rounded-[10px] md:top-[3.5rem] top-[-0.5rem] md:right-[-5rem] right-[1rem] shadow-lg z-40 md:w-[25rem] w-[18rem] bg-white">
      {/* Header  */}
      <div className="flex justify-between items-center">
        <h3 className="md:text-[1.5rem] italic font-bold">Notification</h3>
        <p className="md:text-[14px] text-[12px]">Mark all as read</p>
        <p className="md:text-[14px] text-[12px]">Date Picker</p>
      </div>

      {/* Buttons  */}
      <div className="md:text-[14px] text-[12px] font-semibold mt-[1.5rem] flex items-center justify-between border-b-[1px] border-gray-300">
        <button
          onClick={() => handleFilter("Today")}
          className={`${
            filterText === "Today"
              ? "text-[#5500C3] border-b-[2px] border-[#5500C3]"
              : "text-gray-500"
          } pb-2 flex items-center gap-2`}
        >
          <p>Today</p>
          <p className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] flex justify-center items-center gradientBg text-white rounded-full md:text-[9px] text-[7px]">
            {filteredNotifications?.today?.length}
          </p>
        </button>
        <button
          onClick={() => handleFilter("Yesterday")}
          className={`${
            filterText === "Yesterday"
              ? "text-[#5500C3] border-b-[2px] border-[#5500C3]"
              : "text-gray-500"
          } pb-2 flex items-center gap-2`}
        >
          <p>Yesterday</p>
          <p className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] flex justify-center items-center gradientBg text-white rounded-full md:text-[9px] text-[7px]">
            {filteredNotifications?.yesterday?.length}
          </p>
        </button>
        <button
          onClick={() => handleFilter("Oldest")}
          className={`${
            filterText === "Oldest"
              ? "text-[#5500C3] border-b-[2px] border-[#5500C3]"
              : "text-gray-500"
          } pb-2 flex items-center gap-2`}
        >
          <p>Oldest</p>
          <p className="md:w-[12px] w-[10px] md:h-[12px] h-[10px] flex justify-center items-center gradientBg text-white rounded-full md:text-[9px] text-[7px]">
            {filteredNotifications?.oldest?.length}
          </p>
        </button>
        <button className="text-gray-500 pb-2 flex items-center gap-2">
          Date
        </button>
      </div>

      {/* Contents  */}
      {isLoading ? (
        <NotificationSkeletonLoader />
      ) : (
        <div className="mt-[1.5rem] space-y-[1.5rem] max-h-[400px] overflow-auto pb-[5rem]">
          {filterText == "Today" &&
            filteredNotifications?.today?.map((item) => (
              <NotificationModalCard key={item._id} item={item} />
            ))}
          {filterText == "Yesterday" &&
            filteredNotifications?.yesterday?.map((item) => (
              <NotificationModalCard key={item._id} item={item} />
            ))}
          {filterText == "Oldest" &&
            filteredNotifications?.oldest?.map((item) => (
              <NotificationModalCard key={item._id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}
