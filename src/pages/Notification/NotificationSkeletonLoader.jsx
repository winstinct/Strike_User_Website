export default function NotificationSkeletonLoader() {
  return (
    <div className="mt-[1.5rem] space-y-[1.5rem] max-h-[400px] overflow-auto pb-[5rem]">
        {/* item  */}
      <div
        className="rounded-[20px] md:p-[1rem] p-3 m-1 bg-gray-100 animate-pulse"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
        {/* item  */}
      <div
        className="rounded-[20px] md:p-[1rem] p-3 m-1 bg-gray-100 animate-pulse"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
        {/* item  */}
      <div
        className="rounded-[20px] md:p-[1rem] p-3 m-1 bg-gray-100 animate-pulse"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>


    </div>
  );
}
