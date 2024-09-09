import moment from "moment";
import { useGetRecentTransactionsQuery } from "../../redux/features/lottery/lotteryApi";
import RecentTransactionSkeleton from "./RecentTransactionSkeleton";

export default function RecentTransactions() {
  const {
    data: recentTransactionsData,
    isLoading,
    isError,
  } = useGetRecentTransactionsQuery();

  // decide what to render
  let content = "";
  if (isLoading && !isError) {
    content = <RecentTransactionSkeleton />;
  }

  if (
    !isLoading &&
    !isError &&
    recentTransactionsData?.response?.coinHistory?.length == 0
  ) {
    content = (
      <h3 className="text-[1.3rem] text-center py-5 text-gray-500">
        No transaction available
      </h3>
    );
  }

  if (
    !isLoading &&
    !isError &&
    recentTransactionsData?.response?.coinHistory?.length > 0
  ) {
    content = (
      <div className="space-y-[1.5rem]">
        {/* transaction-1  */}
        {recentTransactionsData?.response?.coinHistory?.map(
          ({ originalAmt, status, adddition, updatedAt, userId }) => (
            <div key={userId} className="border-b-[1px] border-b-gray-300 pb-5">
              <div className="flex justify-between items-center text-[13px]">
                <p>#{Date.now()}</p>
                {adddition ? (
                  <p className="text-green-500">+{originalAmt} Coins</p>
                ) : (
                  <p className="text-red-500">-{originalAmt} Coins</p>
                )}
              </div>
              <div>
                {status?.toLowerCase(status) == "pending" ? (
                  <p className="bg-[#FEA40033] font-semibold text-[#FEA400] text-[12px] p-[3px] w-[80px] text-center rounded-md my-2">
                    Pending
                  </p>
                ) : status?.toLowerCase(status) == "deducted" ? (
                  <p className="bg-red-100 text-red-700 font-semibold text-[12px] p-[3px] w-[80px] text-center rounded-md my-2">
                    Deducted
                  </p>
                ) : (
                  <p className="bg-green-100 font-semibold text-green-700 text-[12px] p-[3px] w-[80px] text-center rounded-md my-2">
                    Successful
                  </p>
                )}

                <div className="text-gray-600 text-[14px]">
                  <span>{moment(updatedAt).format("LLL")}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
  return (
    <>
      <h3 className="font-bold text-[1.1rem] my-[1.5rem]">
        Recent Transactions
      </h3>
      {content}
    </>
  );
}
