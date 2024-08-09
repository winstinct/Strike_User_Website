import React from "react";

export default function GameCategories() {
  return (
    <section className="flex flex-wrap gap-5 text-white mx-56">
      <div className="gradientBg text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]">
        Lottery Games
      </div>
      <div
        style={{ backgroundImage: "linear-gradient(#DA1919, #263238)" }}
        className="text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]"
      >
        Number Games
      </div>
      <div
        style={{ backgroundImage: "linear-gradient(#1488CC, #2B32B2)" }}
        className="bg-green-500 text-center xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-lg flex-1 min-w-[120px]"
      >
        Wheel Games
      </div>
    </section>
  );
}
