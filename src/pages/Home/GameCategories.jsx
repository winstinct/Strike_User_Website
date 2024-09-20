import { Link } from "react-router-dom";
import lotteryGame from "../../assets/lottery-game.svg";
import numberGame from "../../assets/number-games.svg";
import wheelGame from "../../assets/wheel-games.svg";
import { useTranslation } from "react-i18next";
export default function GameCategories() {
  const { t } = useTranslation();
  return (
    <section className="flex md:flex-row flex-col flex-wrap gap-5 text-white">
      <Link
        style={{
          backgroundImage: `url(${lotteryGame})`,
          backgroundSize: "cover",
        }}
        className="text-center italic xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-2xl flex-1"
        to="/lottery-games"
      >
        {t("lottery games")}
      </Link>

      <Link
        style={{
          backgroundImage: `url(${numberGame})`,
          backgroundSize: "cover",
        }}
        className="text-center italic xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-2xl flex-1 min-[100px] min-w-[150px] block"
        to="/number-games"
      >
        {t("number games")}
      </Link>

      <Link
        style={{
          backgroundImage: `url(${wheelGame})`,
          backgroundSize: "cover",
        }}
        className="text-center italic xl:py-8 lg:py-5 md:py-3 py-2 text-[1.25rem] cursor-pointer rounded-2xl flex-1 min-[100px] min-w-[150px] block"
        to="/wheel-games"
      >
        {t("wheel games")}
      </Link>
    </section>
  );
}
