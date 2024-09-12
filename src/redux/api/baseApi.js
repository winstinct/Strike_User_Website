import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../api/apiConstant";
import { setToken } from "../authSlice";
import { auth } from "../../Firebase";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers, { getState }) => {
    // Assuming your token is stored in Redux state
    const authToken = auth?.currentUser?.accessToken;
    console.log("Auth token from prepare header==> ", authToken)
    const token = getState()?.auth?.token;
    console.log("Token from RTK Query ===> ", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }else{
      headers.set("Authorization", `Bearer ${authToken}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  // Initial request
  let result = await baseQuery(args, api, extraOptions);

  // Check for token expiration
  if (
    result.error &&
    result?.error?.data?.response?.code == "auth/id-token-expired"
  ) {
    try {
      // Refresh token
      const user = auth().currentUser;
      if (user) {
        const newToken = await user.getIdToken(true);
        api.dispatch(setToken(newToken));

        // Retry the original request with the new token
        result = await baseQuery(args, api, extraOptions); // Re-assign result
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  }

  return result; // Return the updated result
};

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
