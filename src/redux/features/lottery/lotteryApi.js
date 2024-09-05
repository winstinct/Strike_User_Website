import { baseApi } from "../../api/baseApi";

export const lotteryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => {
        return {
          url: `/users/fetch-banners`,
          method: "GET",
        };
      },
    }),

    getPublicLotteries: builder.query({
      query: () => {
        return {
          url: `/users/get-public-lottary`,
          method: "GET",
        };
      },
      providesTags: ["public-lotteries"],
    }),

    getSinglePublicLottery: builder.query({
      query: (uniqueId) => {
        return {
          url: `/users/get-singlelottary/${uniqueId}`,
          method: "GET",
        };
      },
      providesTags: ["public-lotteries"],
    }),

    getPrivateLotteries: builder.query({
      query: () => {
        return {
          url: `/users/get-private-lottery`,
          method: "GET",
        };
      },
      providesTags: ["private-lotteries"],
    }),

    getSinglePrivateLottery: builder.query({
      query: (privateLotteryId) => {
        return {
          url: `/users/single-private-lottery/${privateLotteryId}`,
          method: "GET",
        };
      },
      providesTags: ["private-lotteries"],
    }),

    getWinners: builder.query({
      query: () => {
        return {
          url: `/users/fetch-winners-slider`,
          method: "GET",
        };
      },
    }),

    getOffers: builder.query({
      query: () => {
        return {
          url: `/users/all-offers`,
          method: "GET",
        };
      },
    }),
    getSpecificOffer: builder.query({
      query: (offerId) => {
        return {
          url: `/users/offer/${offerId}`,
          method: "GET",
        };
      },
    }),

    convertCurrency: builder.query({
      query: (currencyCode) => {
        return {
          url: `/users/convert-currency?currency=${currencyCode}`,
          method: "GET",
        };
      },
    }),

    changeCurrency: builder.mutation({
      query: (currencyCode) => {
        return {
          url: `/users/currency/preference?currency=${currencyCode}`,
          method: "GET",
        };
      },
      invalidatesTags: ["USER-DETAILS"],
    }),

    convertCoinsIntoCrypto: builder.query({
      query: ({ amount, currencyType }) => {
        return {
          url: `/users/convert-inr-to-usdt?amount=${amount}&currencyType=${currencyType}`,
          method: "GET",
        };
      },
      invalidatesTags: ["USER-DETAILS"],
    }),

    convertINRIntoUSDT: builder.mutation({
      query: (amount) => {
        return {
          url: `/users/convert-inr-to-usdt?amount=${amount}&currencyType=INR`,
          method: "GET",
        };
      },
    }),

    getTicketHistory: builder.query({
      query: () => {
        return {
          url: `/users/fetch-upcoming-tickets`,
          method: "GET",
        };
      },
    }),

    //TODO: Apis to be integrated
    getRecentTransactions: builder.query({
      query: () => {
        return {
          url: `/users/fetch-coin-records`,
          method: "GET",
        };
      },
    }),

    getWithdrawRequestHistory: builder.query({
      query: () => {
        return {
          url: `/users/getCoinWithdrawHistory`,
          method: "GET",
        };
      },
    }),

    withdrawCoins: builder.mutation({
      query: (data) => {
        return {
          url: `/users/withdrawCoins`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetPublicLotteriesQuery,
  useGetPrivateLotteriesQuery,
  useGetWinnersQuery,
  useGetOffersQuery,
  useGetSpecificOfferQuery,
  useGetAllBannersQuery,
  useGetSinglePublicLotteryQuery,
  useGetSinglePrivateLotteryQuery,
  useConvertCurrencyQuery,
  useChangeCurrencyMutation,
  useConvertCoinsIntoCryptoQuery,
  useGetTicketHistoryQuery,
  useGetRecentTransactionsQuery,
  useGetWithdrawRequestHistoryQuery,
  useConvertINRIntoUSDTMutation,
  useWithdrawCoinsMutation,
} = lotteryApi;
