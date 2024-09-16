
export default function WishListSkeleton() {
  return (
    <>
      {/* items  */}
      <div className="flex xl:flex-row flex-col gap-5">
        <div className="grid xl:grid-cols-2 gap-3 flex-1 lg:min-w-[340px]">
          {/* Skeleton Loader for Image */}
          <div className="w-full h-[200px] bg-gray-300 rounded-3xl flex items-center justify-center animate-pulse">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>

          <div className="flex flex-col justify-between space-y-[0.8rem]">
            <div className="space-y-[0.8rem]">
              {/* Skeleton Loader for Text */}
              <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-40 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Skeleton Loader for Progress Bar */}
            <div
              className="border-[1px] border-[#d8d4d442] p-2 rounded-2xl font-semibold bg-gray-300 animate-pulse"
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-full h-2 bg-gray-300 rounded mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="lg:w-[20rem] lg:ml-5">
          <div
            className="p-2 text-center rounded-2xl bg-gray-300 animate-pulse"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-10 bg-gray-300 rounded-full flex justify-center items-center animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="mt-3">
              <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="mt-3">
            <div className="w-full h-12 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
        <div className="w-full bg-gray-300 h-[1.5px] my-10"></div>
    </>
  );
}
