import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicAgentPersonalDetails: {
    FirstName: "",
    LastName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    Gender: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
  },
  publicAgentBankDetails: {
    acc_number:"",
    acc_name:"",
    acc_ifsc:"",
    acc_city:"",
    acc_branch:"",
    bankName:"",
  },
};

const becomePublicAgentDetailsSlice = createSlice({
  name: "publicAgentDetails",
  initialState: initialState,
  reducers: {
    addPublicAgentPersonalDetails(state, action) {
      state.publicAgentPersonalDetails = {...state.publicAgentPersonalDetails, ...action.payload };
    },
    addPublicAgentBankDetails(state, action) {
      state.publicAgentBankDetails = {...state.publicAgentBankDetails, ...action.payload };
    }
  },
});

export const { addPublicAgentPersonalDetails, addPublicAgentBankDetails } =
  becomePublicAgentDetailsSlice.actions;

export default becomePublicAgentDetailsSlice.reducer;
