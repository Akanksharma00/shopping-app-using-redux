import { createSlice } from "@reduxjs/toolkit";

const initalUIState = {
    isVisible: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initalUIState,
    reducers:{
        isCartVisible(state){
            state.isVisible = !state.isVisible;
        },
        countNumberOfItems(state){
            state.numberOfItems = 0;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;