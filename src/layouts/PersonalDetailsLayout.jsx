import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

export default function PersonalDetailsLayout() {
  return (
    <div>
      <Header/>
      <div className="flex md:flex-row flex-col gap-8 md:p-[1rem] px-[0.5rem] pt-[1rem] pb-[2rem]">
        <div 
        style={{
          backgroundImage: "linear-gradient(#A967FF, #5500C3)",
          boxShadow: "0px -4px 10px 0px rgba(0, 0, 0, 0.08)",
        }}
        className="bg-green-500 md:min-h-[400px] rounded-lg p-5 min-w-[200px]"
        >Sidebar</div>
        <div className="flex-1">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
