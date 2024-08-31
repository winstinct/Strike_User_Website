import { baseApi } from "../../api/baseApi";

export const lotteryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ========== Lottery API Endpoints ===========
    getPublicLotteries: builder.query({
      query: () => {
        return {
          url: `/users/get-lottary`,
          method: "GET",
        };
      },
    }),

    getPrivateLotteries: builder.query({
      query: () => {
        return {
          url: `/users/get-private-lottery`,
          method: "GET",
        };
      },
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
  }),
});

export const {
  useGetPublicLotteriesQuery,
  useGetPrivateLotteriesQuery,
  useGetWinnersQuery,
  useGetOffersQuery,
} = lotteryApi;
