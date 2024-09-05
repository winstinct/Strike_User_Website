import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  withdrawCoinDetails: {},
};

const withdrawCoinSlice = createSlice({
  name: "withdrawCoin",
  initialState: initialState,
  reducers: {
    addWithdrawCoinDetails(state, action) {
      state.withdrawCoinDetails = { ...action.payload };
    },
  },
});

export const { addWithdrawCoinDetails } = withdrawCoinSlice.actions;

export default withdrawCoinSlice.reducer;
