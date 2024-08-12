import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    // other authentication related state can be stored here
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // other authentication related reducers can be defined here
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;