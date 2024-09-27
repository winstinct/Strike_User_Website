import moment from "moment";
import { useGetRecentTransactionsQuery } from "../../redux/features/lottery/lotteryApi";
import RecentTransactionSkeleton from "./RecentTransactionSkeleton";
import { useTranslation } from "react-i18next";

export default function RecentTransactions() {
  const { t } = useTranslation();
  const {
    data: recentTransactionsData,
    isLoading,
    isError,
  } = useGetRecentTransactionsQuery();

  const descendingOrderedData =
    recentTransactionsData?.response?.coinHistory &&
    Array.from(recentTransactionsData?.response?.coinHistory)?.sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });

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
        {descendingOrderedData?.map(
          ({ originalAmt, status, adddition, updatedAt, _id }) => (
            <div key={_id} className="border-b-[1px] border-b-gray-300 pb-5">
              <div className="flex justify-between items-center text-[13px]">
                <p>{_id.slice(0, 18)}</p>
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
        {t('recent transactions')}
      </h3>
      {content}
    </>
  );
}
