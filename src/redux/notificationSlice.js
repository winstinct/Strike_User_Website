import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNotificationModal: false,
    filterText:'Today'
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        toggleNotificationModal(state) {
            state.showNotificationModal = !state.showNotificationModal;
        },
        hideNotificationModal(state) {
            state.showNotificationModal = false;
        },
    }
})

export const { toggleNotificationModal, hideNotificationModal } = notificationSlice.actions;

export default notificationSlice.reducer;