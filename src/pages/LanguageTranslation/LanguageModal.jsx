import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { hideLanguageModal } from "../../redux/languageSlice";

export default function LanguageModal() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Persist to localStorage
    setLanguage(lng);
    dispatch(hideLanguageModal(lng));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLanguage(localStorage.getItem("i18nextLng") || "en");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute md:p-[1.5rem] p-3 border-[1px] border-gray-300 rounded-[10px] md:top-[3.5rem] top-[-0.5rem] md:right-[-5rem] right-[1rem] shadow-lg z-40 md:w-[18rem] w-[15rem] bg-white"
    >
      <div className="flex flex-col gap-4">
        <button
          onClick={() => changeLanguage("en")}
          className={`${
            language === "en"
              ? "bg-gradient-to-b from-[#A967FF] to-[#5500C3] text-white"
              : "hover:text-[#5500C3]"
          } rounded-full py-2 border duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("hi")}
          className={`${
            language === "hi"
              ? "bg-gradient-to-b from-[#A967FF] to-[#5500C3] text-white"
              : "hover:text-[#5500C3]"
          } rounded-full py-2 border duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]`}
        >
          हिन्दी
        </button>
        <button
          onClick={() => changeLanguage("te")}
          className={`${
            language === "te"
              ? "bg-gradient-to-b from-[#A967FF] to-[#5500C3] text-white"
              : "hover:text-[#5500C3]"
          } rounded-full py-2 border duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]`}
        >
          తెలుగు
        </button>
      </div>
    </div>
  );
}
