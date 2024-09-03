import { baseApi } from "../../api/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartItems: builder.query({
      query: () => {
        return {
          url: `/users/fetch-cart`,
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),

    addItemToCart: builder.mutation({
      query: (cartData) => {
        return {
          url: `/users/add-to-cart`,
          method: "POST",
          body: cartData,
        };
      },
      invalidatesTags: ["cart"],
    }),

    updateCartItemQuantity: builder.mutation({
      query: ({ quantity, lotteryId, cartId }) => {
        return {
          url: `/users/update-quantity/${lotteryId}/${cartId}`,
          method: "PUT",
          body: quantity,
        };
      },
      invalidatesTags: ["cart"],
    }),

    removeItemFromCart: builder.mutation({
      query: (cartId) => {
        return {
          url: `/users/delete-cart/${cartId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetAllCartItemsQuery,
  useAddItemToCartMutation,
  useUpdateCartItemQuantityMutation,
  useRemoveItemFromCartMutation,
} = cartApi;
