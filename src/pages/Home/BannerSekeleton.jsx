export default function BannerSekeleton() {
  return (
    <div>
      <div className="rounded-2xl h-[250px] min-w-[100%] bg-gray-300 animate-pulse"></div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <p className="w-[10px] h-[10px] bg-gray-300 animate-pulse rounded-full"></p>
        <p className="w-[10px] h-[10px] bg-gray-300 animate-pulse rounded-full"></p>
        <p className="w-[10px] h-[10px] bg-gray-300 animate-pulse rounded-full"></p>
        <p className="w-[10px] h-[10px] bg-gray-300 animate-pulse rounded-full"></p>
        <p className="w-[10px] h-[10px] bg-gray-300 animate-pulse rounded-full"></p>
      </div>
    </div>
  );
}
