import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    isLanguageModalVisible: false,
  },
  reducers: {
    toggleLanguageModal: (state) => {
      state.isLanguageModalVisible = !state.isLanguageModalVisible;
    },
    hideLanguageModal: (state) => {
      state.isLanguageModalVisible = false;
    }
  }
})

export const { toggleLanguageModal, hideLanguageModal } = languageSlice.actions;

export default languageSlice.reducer;