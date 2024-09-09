export default function AgentsSkeleton() {
  return (
    <div className="space-y-[1.5rem]">
        {/* item  */}
      <div
        className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-5 border-[1px] border-gray-300 rounded-lg p-3 bg-gray-100 animate-pulse"
        style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex flex-col gap-3">
          <div className="w-[120px] h-[16px] bg-gray-300 rounded"></div>
          <div className="w-[180px] h-[16px] bg-gray-300 rounded"></div>
          <div className="w-[140px] h-[16px] bg-gray-300 rounded"></div>
          <div className="w-[160px] h-[16px] bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center">
          <div className="w-full h-[32px] bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
