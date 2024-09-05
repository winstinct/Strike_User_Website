import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  withdrawCoinDetails:{}
};

const withdrawCoinSlice = createSlice({
  name: "withdrawCoin",
  initialState: initialState,
  reducers: {
    addWithdrawCoinDetails(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { addWithdrawCoinDetails } = withdrawCoinSlice.actions;

export default withdrawCoinSlice.reducer;