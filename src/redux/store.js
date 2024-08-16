import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { baseApi } from "./api/baseApi";
import createUserSlice from "./createUserSlice";
import notificationSlice from "./notificationSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    createUser:createUserSlice,
    notification: notificationSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export default store;
