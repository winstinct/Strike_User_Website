import { Link } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="md:p-[1.5rem] p-[1rem] text-white rounded-lg gradientBg relative">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-[1.5rem]">
        <div>
          <img
            src={strikeLogo}
            alt="Website Logo"
            className="bg-white p-[0.5rem] w-[130px] h-[50px] rounded-md mb-[0.5rem]"
          />
          <p className="text-[14px] text-[#fff]">
            {t("Play Smart, Dream Big. Your Future Starts Here!")}
          </p>
        </div>
        <div>
          <h3 className="text-[1.1rem] font-bold">{t("Quick Links")}</h3>
          <ul className="space-y-[0.5rem] mt-[0.3rem] text-[14px]">
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to=""
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/offers"
              >
                {t("offers")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/tickets"
              >
                {t("tickets")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1.1rem] font-bold">{t("Support")}</h3>
          <ul className="space-y-[0.5rem] mt-[0.3rem] text-[14px]">
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/faq"
              >
                {t("faq")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/chat-support"
              >
                {t("chat support")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[1.1rem] font-bold">{t("Policies")}</h3>
          <ul className="space-y-[0.5rem] mt-[0.3rem] text-[14px]">
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/terms-and-conditions"
              >
                {t("Terms and Conditions")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/privacy-policy"
              >
                {t("Privacy Policy")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/refund-policy"
              >
                {t("Refund Policy")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/data-deletion-policy"
              >
                {t("Data Deletion Policy")}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-[#fff] hover:text-gray-100"
                to="/strike-adult-gaming-policy"
              >
                {t("Strike Adult Gaming Policy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:mt-[0.3rem] pt-[2rem] pb-[1.5rem] md:gap-0 gap-3">
        <p className="text-[1rem] font-medium">
          Download the Strike app for the ultimate experience!
        </p>
        <div className="flex  lg:gap-5 gap-2">
          <div className="flex  md:items-center md:gap-[1.1rem] gap-[0.5rem] bg-black px-[1rem] py-[0.5rem] lg:w-[180px] w-full">
            <img
              className="w-[30px]"
              src={playStoreIcon}
              alt="Playstore icon"
            />
            <div>
              <p className="text-[10px] font-medium">GET IT ON</p>
              <h3 className="font-semibold text-[12px]">Google Play</h3>
            </div>
          </div>

          <div className="flex  md:items-center md:gap-[1.1rem] gap-[0.5rem] bg-black px-[1rem] py-[0.5rem] lg:w-[180px] w-full">
            <img className="w-[30px]" src={appStoreIcon} alt="Playstore icon" />
            <div>
              <p className="text-[10px] font-medium">GET IT ON</p>
              <h3 className="font-semibold text-[12px]">App Store</h3>
            </div>
          </div>
        </div>
      </div> */}

      <p className="text-center text-[14px] text-gray-300 pt-[0.3rem]">
        © {new Date().getFullYear()} Strike x Gaming. All rights reserved.
      </p>
    </footer>
  );
}
