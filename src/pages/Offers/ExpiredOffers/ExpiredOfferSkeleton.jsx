import React from "react";

export default function ExpiredOfferSkeleton() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="p-[1rem] rounded-[20px] bg-gray-200 animate-pulse">
        <div className="bg-gray-300 h-[1.5rem] w-[50%] mb-2 rounded"></div>
        <div className="bg-gray-300 h-[2rem] w-full mb-2 rounded"></div>
        <div className="bg-gray-300 h-[1.5rem] w-[40%] mb-6 rounded"></div>

        <div className="bg-gray-300 h-[2.5rem] w-[100%] rounded-[20px]"></div>
      </div>
    </section>
  );
}
