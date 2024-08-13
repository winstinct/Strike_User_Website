import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ========== Signup API Endpoints ===========
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

  }),
});

export const { useSendOTPMutation, useVerifyOTPMutation, useSignupMutation } =
  authApi;
