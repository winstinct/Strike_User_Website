import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../api/apiConstant";
import { firebaseCustomAuth } from "../../contexts/AuthContext";
import { setToken } from "../authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers, { getState }) => {
    // Assuming your token is stored in Redux state
    const token = getState()?.auth?.token;
    console.log("Token from RTK Query ===> ", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.data?.response?.code == "auth/id-token-expired") {
    const newToken = await firebaseCustomAuth.currentUser.getIdToken(true);
    //Dispatch new token
    console.log(
      "A new token is dispatched successfuly after expiring the access token"
    );
    api.dispatch(setToken(newToken));
  }
  return result;
};

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: (builder) => ({}),
});
