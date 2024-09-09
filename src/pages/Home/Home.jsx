import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./Banner";
import GameCategories from "./GameCategories";
import LotteryCategories from "./LotteryCategories";
import Winners from "./Winners";
import { Outlet } from "react-router-dom";

export default function Home() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="space-y-[3rem]">
      <Banner />
      <GameCategories />
      <LotteryCategories />
      <Outlet/>
      <Winners />
    </main>
  );
}
