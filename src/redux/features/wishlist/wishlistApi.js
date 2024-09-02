import { baseApi } from "../../api/baseApi";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => {
        return {
          url: `/users/get-wishlist`,
          method: "GET",
        };
      },
      providesTags: ["wishlist"],
    }),

    addToWishlist: builder.mutation({
      query: (uniqueId) => {
        return {
          url: `/users/wishlist-lottary/${uniqueId}`,
          method: "GET",
        };
      },
      invalidatesTags: ["wishlist", "public-lotteries"],
    }),

    removeFromWishlist: builder.mutation({
      query: (uniqueId) => {
        return {
          url: `/users/remove-wishlist/${uniqueId}`,
          method: "GET",
        };
      },
      invalidatesTags: ["wishlist", "public-lotteries"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;
