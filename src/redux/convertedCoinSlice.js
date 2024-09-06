import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyCode: "",
  convertedAmount: 0,
};

const convertedCoinSlice = createSlice({
  name: "convertedCoin",
  initialState: initialState,
  reducers: {
    addConvertedCoinDetails(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { addConvertedCoinDetails } = convertedCoinSlice.actions;

export default convertedCoinSlice.reducer;
