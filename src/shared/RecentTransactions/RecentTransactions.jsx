import moment from "moment";
import { useGetRecentTransactionsQuery } from "../../redux/features/lottery/lotteryApi";

export default function RecentTransactions() {
  const { data: recentTransactionsData } = useGetRecentTransactionsQuery();
  return (
    <>
      <h3 className="font-bold text-[1.1rem] my-[1.5rem]">
        Recent Transactions
      </h3>
      <div className="space-y-[1.5rem]">
        {/* transaction-1  */}
        {recentTransactionsData?.response?.coinHistory?.map(
          ({ originalAmt, status, PaymentDetails, adddition, updatedAt, userId }) => (
            <div className="border-b-[1px] border-b-gray-300 pb-5">
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
    </>
  );
}
