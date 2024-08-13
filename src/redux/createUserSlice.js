import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Email: "",
  Password: "",
  confirmPassword:"",
  FirstName: "",
  LastName: "",
  gender: "",
  dob: "",
  location: {
    country: "",
    state: "",
    city: "",
    address:"",
    pinCode:""
  },
  MobileNumber: "",
  imageUrl: "",
  otp:"",
  countryCode:"",
  selectedFile:null,
  refferalCodes:""
};

const createUserSlice = createSlice({
  name: "createUser",
  initialState: initialState,
  reducers: {
    addUserDetails(state, action) {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { addUserDetails } = createUserSlice.actions;

export default createUserSlice.reducer;
