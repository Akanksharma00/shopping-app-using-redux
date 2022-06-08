import { createSlice } from "@reduxjs/toolkit";

const initalUIState = {
    isVisible: false,
    notification: null
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initalUIState,
    reducers:{
        isCartVisible(state){
            state.isVisible = !state.isVisible;
        },
        showNotification(state,action){
            state.notification = {
                status: action.payload.status, 
                title:action.payload.title,
                message: action.payload.message,
            };
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;