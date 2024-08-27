import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ========== Signup user API Endpoints ===========
    sendOTP: builder.mutation({
      query: (email) => {
        return {
          url: `/users/send-otp-sigin`,
          method: "POST",
          body: email,
        };
      },
    }),
    verifyOTP: builder.mutation({
      query: ({ otp, otpRefId }) => {
        return {
          url: `/users/verify-otp-sigin?Otp_number=${otp}&&otp_reference=${otpRefId}`,
          method: "GET",
        };
      },
    }),
    signup: builder.mutation({
      query: (userInfo) => {
        return {
          url: `/users/sign-up`,
          method: "POST",
          body: userInfo,
        };
      },
    }),

    // ========== Update Password API Endpoints ===========
    sendOTPForgotPass: builder.mutation({
      query: (email) => {
        return {
          url: `/users/forgotpassotps`,
          method: "POST",
          body: email,
        };
      },
    }),
    verifyOTPForgotPass: builder.mutation({
      query: ({ otp, otpRefId, Email }) => {
        return {
          url: `/users/forgotverify-pass?Otp_number=${otp}&&otp_reference=${otpRefId}&&email=${Email}`,
          method: "GET",
        };
      },
    }),
    updatePassForgotPass: builder.mutation({
      query: (passInfo) => {
        return {
          url: `/users/forgot-change-pass`,
          method: "POST",
          body: passInfo,
        };
      },
    }),

    // User Details API Endpoint
    getUserDetails: builder.query({
      query: () => {
        return {
          url: `/users/get-details`,
          method: "GET"
        };
      },
      providesTags:["USER-DETAILS"]
    }),
    // Update User API Endpoint
    updateUserDetails: builder.mutation({
      query: (updateData) => {
        return {
          url: `/users/edit-user`,
          method: "POST",
          body:updateData
        };
      },
      invalidatesTags:["USER-DETAILS"]
    }),

  }),
});

export const {
  //Signup user
  useSendOTPMutation,
  useVerifyOTPMutation,
  useSignupMutation,
  //Update password
  useSendOTPForgotPassMutation,
  useVerifyOTPForgotPassMutation,
  useUpdatePassForgotPassMutation,

  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation
} = authApi;
