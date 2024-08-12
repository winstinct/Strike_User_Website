import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { baseApi } from "./api/baseApi";
import createUserSlice from "./createUserSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    createUser:createUserSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export default store;
