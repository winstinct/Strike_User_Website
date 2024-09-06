import React from "react";

export default function AvatarSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 animate-pulse">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>

        <div className="w-[40px] h-[40px] rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
