import React from "react";

export default function ShopperBagSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div
        style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
        className="p-[1.5rem] rounded-[20px] space-y-[1rem]"
      >
        {/* ====================>Cart Item<======================  */}
        <div className="border-b-[1px] border-gray-300 pb-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {/* Skeleton Loader for Image */}
            <div className="bg-gray-300 rounded-[10px] h-full animate-pulse"></div>

            <div className="space-y-[1rem]">
              {/* Skeleton Loader for Title */}
              <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div>

              <div className="flex items-center gap-5">
                {/* Skeleton Loader for Decrease Button */}
                <div className="w-[3rem] h-[1.5rem] flex items-center justify-end">
                  <div className="w-[1rem] h-[1rem] bg-gray-300 rounded-full animate-pulse"></div>
                </div>

                {/* Skeleton Loader for Quantity */}
                <div className="w-10 h-6 bg-gray-300 rounded animate-pulse"></div>

                {/* Skeleton Loader for Increase Button */}
                <div className="w-[3rem] h-[1.5rem] flex items-center justify-start">
                  <div className="w-[1rem] h-[1rem] bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Skeleton Loader for Ticket Price */}
              <div className="w-32 h-8 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* =================Checkout Section===============  */}
      <div className="mb-5">
        {/* Skeleton Loader for Coupon Input and Button */}
        <div
          className="rounded-2xl flex justify-between items-center p-3 gap-2 bg-gray-200 animate-pulse"
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-[130px] h-[45px] bg-gray-300 rounded-full"></div>
        </div>
        <p className="text-red-500 font-bold text-[14px] mt-1 bg-gray-200 animate-pulse w-1/2 h-4 rounded"></p>

        {/* Skeleton Loader for Checkout Summary */}
        <div
          className="rounded-2xl bg-gray-200 animate-pulse"
          style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="p-[0.8rem] space-y-[1rem]">
            <div className="flex justify-between items-center text-[#858585]">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between items-center text-[#858585] font-bold">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="mt-[1rem]">
            <div className="w-full h-12 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
