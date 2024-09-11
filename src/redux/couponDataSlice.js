import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupon_code: "",
  totalDiscount: "",
};

const couponDataSlice = createSlice({
  name: "couponData",
  initialState: initialState,
  reducers: {
    addCouponData(state, action) {
      return { ...action.payload };
    },
  },
});

export const { addCouponData } = couponDataSlice.actions;

export default couponDataSlice.reducer;
