import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./Banner";
import GameCategories from "./GameCategories";
import LotteryCategories from "./LotteryCategories";
import PopularCampaigns from "./PopularCampaigns";
import PublicLotteries from "./PublicLotteries";
import Winners from "./Winners";

export default function Home() {
  return (
    <main className="space-y-[3rem] py-[1.3rem]">
      <Banner />
      <GameCategories />
      <LotteryCategories />
      <PopularCampaigns />
      <PublicLotteries />
      <Winners />
    </main>
  );
}
