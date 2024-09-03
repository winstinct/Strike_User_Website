import shopperBagEmptyImg from "../../assets/shopperBagEmpty.svg";

export default function ShopperBagEmpty() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={shopperBagEmptyImg} alt="Wish list empty image" />
      <h3 className="text-[1.5rem] font-bold mb-2">Your bag is Empty</h3>
      <p className="leading-[1.5rem] text-center">
        Oh no! Your bag is currently empty. Start adding items you love,
        and they'll appear here for easy access. Happy shopping!
      </p>
    </div>
  );
}
