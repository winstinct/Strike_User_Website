import { useTranslation } from "react-i18next";
import wishlistEmptyImg from "../../assets/wishlist-empty.svg"

export default function WishlistEmpty() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={wishlistEmptyImg} alt="Wish list empty image" />
        <h3 className="text-[1.5rem] font-bold mb-2">{t('your wishlist is empty')}</h3>
        <p className="leading-[1.5rem] text-center">{t('wishlist-empty-description')}</p>
    </div>
  )
}
