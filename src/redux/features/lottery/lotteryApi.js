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
} = lotteryApi;
