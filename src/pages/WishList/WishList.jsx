import { useNavigate } from "react-router-dom";
import { useGetWishlistQuery } from "../../redux/features/wishlist/wishlistApi";
import WishListItem from "./WishListItem";
import { Icon } from "@iconify/react/dist/iconify.js";
import WishlistEmpty from "./WishlistEmpty";
import WishListSkeleton from "./WishListSkeleton";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

export default function WishList() {
  const { t } = useTranslation();
  useTitle("Strike - Wishlist");
  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  const { data, isLoading } = useGetWishlistQuery();
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <div
          onClick={() => navigate("/menu")}
          className="backBtn md:hidden block"
        >
          <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[2rem] font-bold italic">{t("wishlist")}</h3>
      </div>
      {isLoading && <WishListSkeleton />}
      {data?.response?.wishlistArray?.length == 0 && <WishlistEmpty />}
      {data?.response?.wishlistArray?.map((lottery) => (
        <WishListItem key={lottery._id} lottery={lottery} />
      ))}
    </div>
  );
}
