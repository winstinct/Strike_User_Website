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
  }),
});

export const { useGetPublicLotteriesQuery, useGetPrivateLotteriesQuery } =
  lotteryApi;
