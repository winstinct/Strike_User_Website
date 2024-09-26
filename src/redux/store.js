import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { baseApi } from "./api/baseApi";
import createUserSlice from "./createUserSlice";
import notificationSlice from "./notificationSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import convertedCoinSlice from "./convertedCoinSlice";
import withdrawCoinSlice from "./withdrawCoinSlice";
import becomePublicAgentDetailsSlice from "./becomePublicAgentDetailsSlice";
import couponDataSlice from "./couponDataSlice";
import languageSlice from "./languageSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    createUser: createUserSlice,
    notification: notificationSlice,
    language: languageSlice,
    convertedCoin: convertedCoinSlice,
    withdrawCoin: withdrawCoinSlice,
    publicAgentDetails: becomePublicAgentDetailsSlice,
    couponData: couponDataSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
