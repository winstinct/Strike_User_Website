import React from "react";

export default function WinnersSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="flex justify-center h-[250px] items-center py-[1.5rem] px-[1rem] border-gray-300 rounded-2xl border-[4px] bg-white relative animate-pulse">
        <div className="middle1 !border-t-gray-300 !border-b-gray-300 !border-r-gray-300"></div>
        <div className="middle2 !border-t-gray-300 !border-b-gray-300 !border-l-gray-300"></div>
        <div className="text-center space-y-[1rem] w-[80%]">
          <p className="h-4 bg-gray-300 rounded-full"></p>
          <h3 className="text-[1.25rem] font-bold h-6 bg-gray-300 rounded-full"></h3>
          <p className="h-6 bg-gray-300 rounded-full"></p>
          <p className="h-4 bg-gray-300 rounded-full"></p>
          <p className="h-4 bg-gray-300 rounded-full"></p>
        </div>
      </div>
    </div>
  );
}
