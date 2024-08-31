export default function LotteryCategories() {
  return (
    <section className="flex flex-wrap gap-5 text-center">
      <div className="flex-1 rounded-full py-2 gradientBg text-white border-[1px] cursor-pointer duration-300 min-w-[120px]">
        Public Lottery
      </div>
      <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]">
        Private Lottery
      </div>
      <div className="flex-1 rounded-full py-2  border-[1px] cursor-pointer hover:text-[#5500C3] duration-300 border-gray-300 hover:border-[#5500C3] min-w-[120px]">
        Sold Out
      </div>
    </section>
  );
}
