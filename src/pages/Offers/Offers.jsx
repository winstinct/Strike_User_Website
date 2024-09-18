import useTitle from "../../hooks/useTitle";
import ExpiredOffers from "./ExpiredOffers/ExpiredOffers";
import OfferBanner from "./OfferBanner";
import OffersSection from "./OffersSection/OffersSection";

export default function Offers() {
  useTitle("Strike - Offers")
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      <OfferBanner />
      <OffersSection />
      <ExpiredOffers />
    </div>
  );
}
