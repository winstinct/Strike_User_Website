import ExpiredOffers from "./ExpiredOffers/ExpiredOffers";
import OfferBanner from "./OfferBanner";
import OffersSection from "./OffersSection/OffersSection";

export default function Offers() {
  return (
    <div>
      <OfferBanner />
      <OffersSection />
      <ExpiredOffers />
    </div>
  );
}
