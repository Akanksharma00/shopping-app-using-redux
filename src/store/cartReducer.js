import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
    isVisible: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initalCartState,
    reducers:{
        isCartVisible(state){
            state.isVisible = !state.isVisible;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;