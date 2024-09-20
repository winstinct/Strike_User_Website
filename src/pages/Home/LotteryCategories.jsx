import { NavLink } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
import { useTranslation } from "react-i18next";

export default function LotteryCategories() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-wrap gap-5 text-center">
      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to=""
      >
        <div>{t("public lottery")}</div>
      </NavLink>

      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to="/private-lotteries"
      >
        <div>{t("private lottery")}</div>
      </NavLink>

      <NavLink
        style={setActiveStyle}
        className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]"
        to="/soldout-lotteries"
      >
        <div>{t("sold out")}</div>
      </NavLink>
    </section>
  );
}
